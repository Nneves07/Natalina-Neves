# 🚀 Guía de Instalación - Portfolio Natalina Neves

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **Git**
- **Docker** (opcional, para desarrollo con contenedores)
- **PostgreSQL** (para desarrollo local sin Docker)

## 🛠️ Instalación Rápida

### 1. Clonar el repositorio

```bash
git clone https://github.com/Nneves07/natalina-neves-portfolio.git
cd natalina-neves-portfolio
```

### 2. Instalar dependencias

```bash
npm run install:all
```

### 3. Configurar variables de entorno

```bash
cp env.example .env
```

Edita el archivo `.env` con tus configuraciones:

```env
# Configuración básica
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000
BACKEND_URL=http://localhost:5000

# Base de datos
DATABASE_URL="postgresql://postgres:postgres123@localhost:5432/natalina_neves_portfolio"

# JWT
JWT_SECRET=tu-jwt-secret-super-seguro-y-largo
JWT_EXPIRES_IN=7d
```

### 4. Configurar base de datos

#### Opción A: Con Docker (Recomendado)

```bash
# Iniciar solo la base de datos
docker-compose up postgres redis -d

# Generar cliente Prisma
cd backend
npm run db:generate

# Ejecutar migraciones
npm run db:push
```

#### Opción B: PostgreSQL local

1. Instala PostgreSQL
2. Crea una base de datos llamada `natalina_neves_portfolio`
3. Ejecuta los comandos de Prisma:

```bash
cd backend
npm run db:generate
npm run db:push
```

### 5. Iniciar en modo desarrollo

```bash
# Iniciar frontend y backend
npm run dev
```

O por separado:

```bash
# Terminal 1 - Frontend
npm run dev:frontend

# Terminal 2 - Backend
npm run dev:backend
```

## 🐳 Desarrollo con Docker

### Iniciar todo el stack

```bash
docker-compose up -d
```

### Ver logs

```bash
# Todos los servicios
docker-compose logs -f

# Servicio específico
docker-compose logs -f backend
```

### Acceder a Prisma Studio

```bash
docker-compose --profile tools up prisma-studio
```

Luego visita: http://localhost:5555

## 🧪 Testing

### Frontend

```bash
cd frontend
npm run test          # Tests unitarios
npm run test:coverage # Cobertura
npm run test:e2e      # Tests end-to-end
```

### Backend

```bash
cd backend
npm run test          # Tests unitarios
npm run test:coverage # Cobertura
```

### Todos los tests

```bash
npm run test
```

## 🔧 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia frontend y backend en modo desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run test` | Ejecuta tests en frontend y backend |
| `npm run lint` | Ejecuta linting en todo el proyecto |
| `npm run install:all` | Instala dependencias de todos los módulos |
| `npm run db:generate` | Genera cliente Prisma |
| `npm run db:push` | Sincroniza esquema con la base de datos |
| `npm run db:studio` | Abre Prisma Studio |

## 📊 Estructura del Proyecto

```
natalina-neves-portfolio/
├── frontend/                 # Aplicación React
│   ├── src/
│   │   ├── components/      # Componentes reutilizables
│   │   ├── pages/          # Páginas principales
│   │   ├── hooks/          # Custom hooks
│   │   ├── services/       # Servicios API
│   │   └── types/          # Tipos TypeScript
│   └── public/             # Archivos estáticos
├── backend/                 # API Node.js
│   ├── src/
│   │   ├── controllers/    # Controladores
│   │   ├── models/         # Modelos de datos
│   │   ├── routes/         # Rutas API
│   │   ├── middleware/     # Middleware personalizado
│   │   └── utils/          # Utilidades
│   └── prisma/             # Esquemas de base de datos
├── infra/                   # Infraestructura como código
│   └── bicep/              # Plantillas Bicep para Azure
├── ci/                      # Pipelines CI/CD
│   └── github-actions/     # Workflows de GitHub Actions
└── docs/                    # Documentación
```

## 🌐 URLs de Desarrollo

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/health
- **Prisma Studio**: http://localhost:5555 (con Docker)

## 🔒 Configuración de Seguridad

### Variables de entorno críticas

```env
# JWT
JWT_SECRET=tu-jwt-secret-super-seguro-y-largo

# Base de datos
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio

# API Keys (opcional)
OPENAI_API_KEY=tu-openai-key
AZURE_SPEECH_KEY=tu-azure-speech-key
```

### Configuración de CORS

El backend está configurado para aceptar requests desde:
- `http://localhost:3000` (desarrollo)
- `https://natalina-neves-portfolio.azurewebsites.net` (producción)

## 🚀 Despliegue

### Despliegue Local

```bash
# Construir para producción
npm run build

# Iniciar en modo producción
npm start
```

### Despliegue en Azure

1. **Configurar Azure CLI**:
```bash
az login
az account set --subscription "tu-subscription-id"
```

2. **Crear Resource Group**:
```bash
az group create --name natalina-neves-rg --location eastus
```

3. **Desplegar infraestructura**:
```bash
cd infra/bicep
az deployment group create \
  --resource-group natalina-neves-rg \
  --template-file main.bicep \
  --parameters dbAdminUsername=admin dbAdminPassword=SecurePassword123!
```

4. **Configurar GitHub Secrets**:
   - `AZURE_CREDENTIALS`
   - `AZURE_FUNCTION_PUBLISH_PROFILE`

5. **Push a main branch** para activar el pipeline de CI/CD

## 🐛 Troubleshooting

### Problemas comunes

#### Error de conexión a la base de datos
```bash
# Verificar que PostgreSQL esté corriendo
docker-compose ps postgres

# Verificar logs
docker-compose logs postgres
```

#### Error de dependencias
```bash
# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

#### Error de puertos ocupados
```bash
# Verificar qué está usando el puerto
lsof -i :3000
lsof -i :5000

# Matar proceso si es necesario
kill -9 <PID>
```

#### Error de Prisma
```bash
# Regenerar cliente Prisma
cd backend
npm run db:generate

# Resetear base de datos
npm run db:push --force-reset
```

## 📞 Soporte

Si encuentras problemas:

1. Revisa los logs: `docker-compose logs`
2. Verifica las variables de entorno
3. Asegúrate de que todos los servicios estén corriendo
4. Consulta la documentación de Prisma y React

## 🔄 Actualizaciones

Para mantener el proyecto actualizado:

```bash
# Actualizar dependencias
npm update

# Actualizar Prisma
cd backend
npx prisma update

# Regenerar cliente
npm run db:generate
```

---

¡Listo! Tu portfolio está configurado y listo para desarrollo. 🎉 