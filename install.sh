#!/bin/bash

# Script de instalación automática para el Portfolio de Natalina Neves
# Compatible con Linux y macOS

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para imprimir mensajes
print_message() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}  Portfolio Natalina Neves${NC}"
    echo -e "${BLUE}  Instalación Automática${NC}"
    echo -e "${BLUE}================================${NC}"
}

# Verificar si estamos en el directorio correcto
check_directory() {
    if [ ! -f "package.json" ]; then
        print_error "No se encontró package.json. Asegúrate de estar en el directorio raíz del proyecto."
        exit 1
    fi
}

# Verificar Node.js
check_node() {
    if ! command -v node &> /dev/null; then
        print_error "Node.js no está instalado. Por favor instala Node.js >= 18.0.0"
        print_message "Visita: https://nodejs.org/"
        exit 1
    fi
    
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        print_error "Node.js versión $NODE_VERSION detectada. Se requiere >= 18.0.0"
        exit 1
    fi
    
    print_message "Node.js $(node -v) detectado ✓"
}

# Verificar npm
check_npm() {
    if ! command -v npm &> /dev/null; then
        print_error "npm no está instalado."
        exit 1
    fi
    
    print_message "npm $(npm -v) detectado ✓"
}

# Verificar Docker (opcional)
check_docker() {
    if command -v docker &> /dev/null; then
        print_message "Docker detectado ✓"
        DOCKER_AVAILABLE=true
    else
        print_warning "Docker no está instalado. Se usará PostgreSQL local."
        DOCKER_AVAILABLE=false
    fi
}

# Instalar dependencias
install_dependencies() {
    print_message "Instalando dependencias..."
    npm run install:all
    print_message "Dependencias instaladas ✓"
}

# Configurar variables de entorno
setup_env() {
    if [ ! -f ".env" ]; then
        print_message "Configurando variables de entorno..."
        cp env.example .env
        print_message "Archivo .env creado. Edítalo con tus configuraciones."
    else
        print_message "Archivo .env ya existe ✓"
    fi
}

# Configurar base de datos
setup_database() {
    if [ "$DOCKER_AVAILABLE" = true ]; then
        print_message "Configurando base de datos con Docker..."
        
        # Iniciar PostgreSQL y Redis
        docker-compose up postgres redis -d
        
        # Esperar a que PostgreSQL esté listo
        print_message "Esperando a que PostgreSQL esté listo..."
        sleep 10
        
        # Generar cliente Prisma
        cd backend
        npm run db:generate
        
        # Ejecutar migraciones
        npm run db:push
        cd ..
        
        print_message "Base de datos configurada con Docker ✓"
    else
        print_warning "Configuración manual de PostgreSQL requerida:"
        print_message "1. Instala PostgreSQL"
        print_message "2. Crea una base de datos: natalina_neves_portfolio"
        print_message "3. Ejecuta: cd backend && npm run db:generate && npm run db:push"
    fi
}

# Verificar instalación
verify_installation() {
    print_message "Verificando instalación..."
    
    # Verificar que los directorios existen
    if [ -d "frontend" ] && [ -d "backend" ]; then
        print_message "Estructura del proyecto ✓"
    else
        print_error "Estructura del proyecto incompleta"
        exit 1
    fi
    
    # Verificar que las dependencias están instaladas
    if [ -d "frontend/node_modules" ] && [ -d "backend/node_modules" ]; then
        print_message "Dependencias instaladas ✓"
    else
        print_error "Dependencias no instaladas correctamente"
        exit 1
    fi
    
    print_message "Instalación verificada ✓"
}

# Mostrar próximos pasos
show_next_steps() {
    echo ""
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}  Instalación Completada${NC}"
    echo -e "${BLUE}================================${NC}"
    echo ""
    print_message "Próximos pasos:"
    echo ""
    echo "1. Edita el archivo .env con tus configuraciones"
    echo "2. Inicia el servidor de desarrollo:"
    echo "   npm run dev"
    echo ""
    echo "3. URLs de desarrollo:"
    echo "   Frontend: http://localhost:3000"
    echo "   Backend:  http://localhost:5000"
    echo ""
    if [ "$DOCKER_AVAILABLE" = true ]; then
        echo "4. Para ver logs de Docker:"
        echo "   docker-compose logs -f"
        echo ""
        echo "5. Para acceder a Prisma Studio:"
        echo "   docker-compose --profile tools up prisma-studio"
        echo "   Luego visita: http://localhost:5555"
    fi
    echo ""
    print_message "¡Listo para desarrollar! 🚀"
}

# Función principal
main() {
    print_header
    
    check_directory
    check_node
    check_npm
    check_docker
    install_dependencies
    setup_env
    setup_database
    verify_installation
    show_next_steps
}

# Ejecutar función principal
main "$@" 