@description('Nombre del proyecto')
param projectName string = 'natalina-neves-portfolio'

@description('Ambiente (dev, staging, prod)')
param environment string = 'dev'

@description('Ubicación de los recursos')
param location string = resourceGroup().location

@description('SKU del plan de App Service')
param appServicePlanSku string = 'B1'

@description('SKU de la base de datos PostgreSQL')
param postgresSku string = 'B_Gen5_1'

@description('Nombre de usuario de la base de datos')
param dbAdminUsername string

@description('Contraseña de la base de datos')
@secure()
param dbAdminPassword string

@description('URL del frontend')
param frontendUrl string = 'https://natalina-neves-portfolio.azurewebsites.net'

@description('URL del backend')
param backendUrl string = 'https://natalina-neves-api.azurewebsites.net'

// Variables
var resourcePrefix = '${projectName}-${environment}'
var appServicePlanName = '${resourcePrefix}-plan'
var frontendAppName = '${resourcePrefix}-frontend'
var backendAppName = '${resourcePrefix}-api'
var postgresServerName = '${resourcePrefix}-db'
var keyVaultName = '${resourcePrefix}-kv'
var storageAccountName = '${resourcePrefix}storage'
var appInsightsName = '${resourcePrefix}-insights'

// Resource Group (asumiendo que ya existe)
resource rg 'Microsoft.Resources/resourceGroups' existing = {
  name: resourceGroup().name
}

// App Service Plan
resource appServicePlan 'Microsoft.Web/serverfarms@2022-03-01' = {
  name: appServicePlanName
  location: location
  sku: {
    name: appServicePlanSku
    tier: appServicePlanSku == 'F1' ? 'Free' : 'Basic'
  }
  kind: 'linux'
  reserved: true
  properties: {
    perSiteScaling: false
  }
}

// Application Insights
resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: appInsightsName
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
    WorkspaceResourceId: ''
  }
}

// Key Vault
resource keyVault 'Microsoft.KeyVault/vaults@2023-02-01' = {
  name: keyVaultName
  location: location
  properties: {
    sku: {
      family: 'A'
      name: 'standard'
    }
    tenantId: subscription().tenantId
    enableRbacAuthorization: true
    enableSoftDelete: true
    softDeleteRetentionInDays: 7
    networkAcls: {
      defaultAction: 'Allow'
      bypass: 'AzureServices'
    }
  }
}

// Storage Account
resource storageAccount 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  name: storageAccountName
  location: location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {
    supportsHttpsTrafficOnly: true
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: false
    networkAcls: {
      defaultAction: 'Allow'
      bypass: 'AzureServices'
    }
  }
}

// PostgreSQL Server
resource postgresServer 'Microsoft.DBforPostgreSQL/flexibleServers@2023-03-01-preview' = {
  name: postgresServerName
  location: location
  sku: {
    name: postgresSku
    tier: 'Burstable'
  }
  properties: {
    administratorLogin: dbAdminUsername
    administratorLoginPassword: dbAdminPassword
    version: '15'
    storage: {
      storageSizeGB: 32
    }
    backup: {
      backupRetentionDays: 7
      geoRedundantBackup: 'Disabled'
    }
    network: {
      delegatedSubnetResourceId: ''
      privateDnsZoneArmResourceId: ''
    }
  }
}

// PostgreSQL Database
resource postgresDatabase 'Microsoft.DBforPostgreSQL/flexibleServers/databases@2023-03-01-preview' = {
  parent: postgresServer
  name: 'portfolio'
  properties: {
    charset: 'utf8'
    collation: 'en_US.utf8'
  }
}

// Frontend App Service
resource frontendApp 'Microsoft.Web/sites@2022-03-01' = {
  name: frontendAppName
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: 'NODE|18-lts'
      appSettings: [
        {
          name: 'WEBSITE_NODE_DEFAULT_VERSION'
          value: '~18'
        }
        {
          name: 'NODE_ENV'
          value: environment
        }
        {
          name: 'APPINSIGHTS_INSTRUMENTATIONKEY'
          value: appInsights.properties.InstrumentationKey
        }
      ]
    }
    httpsOnly: true
  }
  identity: {
    type: 'SystemAssigned'
  }
}

// Backend App Service
resource backendApp 'Microsoft.Web/sites@2022-03-01' = {
  name: backendAppName
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: 'NODE|18-lts'
      appSettings: [
        {
          name: 'WEBSITE_NODE_DEFAULT_VERSION'
          value: '~18'
        }
        {
          name: 'NODE_ENV'
          value: environment
        }
        {
          name: 'APPINSIGHTS_INSTRUMENTATIONKEY'
          value: appInsights.properties.InstrumentationKey
        }
        {
          name: 'DATABASE_URL'
          value: 'postgresql://${dbAdminUsername}:${dbAdminPassword}@${postgresServer.properties.fullyQualifiedDomainName}:5432/portfolio'
        }
        {
          name: 'FRONTEND_URL'
          value: frontendUrl
        }
        {
          name: 'BACKEND_URL'
          value: backendUrl
        }
      ]
    }
    httpsOnly: true
  }
  identity: {
    type: 'SystemAssigned'
  }
}

// CDN Profile
resource cdnProfile 'Microsoft.Cdn/profiles@2023-05-01' = {
  name: '${resourcePrefix}-cdn'
  location: 'global'
  sku: {
    name: 'Standard_Microsoft'
  }
}

// CDN Endpoint
resource cdnEndpoint 'Microsoft.Cdn/profiles/endpoints@2023-05-01' = {
  parent: cdnProfile
  name: '${resourcePrefix}-endpoint'
  location: 'global'
  properties: {
    originHostHeader: frontendApp.properties.defaultHostName
    origins: [
      {
        name: 'frontend-origin'
        properties: {
          hostName: frontendApp.properties.defaultHostName
          httpPort: 80
          httpsPort: 443
        }
      }
    ]
  }
}

// Outputs
output frontendUrl string = frontendApp.properties.defaultHostName
output backendUrl string = backendApp.properties.defaultHostName
output cdnUrl string = cdnEndpoint.properties.hostName
output keyVaultName string = keyVault.name
output storageAccountName string = storageAccount.name
output postgresServerName string = postgresServer.properties.fullyQualifiedDomainName
output appInsightsKey string = appInsights.properties.InstrumentationKey 