# Natalina Neves - Portfolio Profesional

## 🚀 AI Technical Leader | TechStars Tel Aviv '23 Alumna | Former Founder & CTO

Portfolio profesional que destaca mi experiencia en AI/ML, LLMOps, STT, TTS y desarrollo de software con más de 11 años de experiencia.

## 🛠️ Tecnologías

### Frontend
- **React 18** con TypeScript
- **Tailwind CSS** para estilos modernos
- **Framer Motion** para animaciones
- **React Hook Form** para formularios
- **React Query** para gestión de estado

### Backend
- **Node.js** con Express
- **TypeScript** para tipado fuerte
- **Prisma ORM** para gestión de base de datos
- **JWT** para autenticación
- **Multer** para manejo de archivos

### Base de Datos
- **PostgreSQL** para datos principales
- **Redis** para caché y sesiones

### DevOps & Infraestructura
- **Docker** para containerización
- **GitHub Actions** para CI/CD
- **Azure** para hosting y servicios cloud
- **Bicep** para infraestructura como código

## 📦 Instalación

### Prerrequisitos
- Node.js >= 18.0.0
- npm >= 9.0.0
- Docker (opcional)
- PostgreSQL (para desarrollo local)

### Instalación Rápida

```bash
# Clonar el repositorio
git clone https://github.com/Nneves07/natalina-neves-portfolio.git
cd natalina-neves-portfolio

# Instalar todas las dependencias
npm run install:all

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus configuraciones

# Iniciar en modo desarrollo
npm run dev
```

### Instalación Manual

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend (en otra terminal)
cd backend
npm install
npm run dev
```

## 🚀 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia frontend y backend en modo desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run test` | Ejecuta tests en frontend y backend |
| `npm run lint` | Ejecuta linting en todo el proyecto |
| `npm run install:all` | Instala dependencias de todos los módulos |

## 📁 Estructura del Proyecto

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
│   ├── bicep/              # Plantillas Bicep para Azure
│   └── docker/             # Configuración Docker
├── ci/                      # Pipelines CI/CD
│   └── github-actions/     # Workflows de GitHub Actions
└── docs/                    # Documentación
```

## 🧪 Testing

### Frontend
```bash
cd frontend
npm run test          # Tests unitarios
npm run test:e2e      # Tests end-to-end
npm run test:coverage # Cobertura de tests
```

### Backend
```bash
cd backend
npm run test          # Tests unitarios
npm run test:integration # Tests de integración
npm run test:coverage # Cobertura de tests
```

## 🚀 Despliegue

### Desarrollo Local
```bash
npm run dev
```

### Producción
```bash
npm run build
npm start
```

### Docker
```bash
docker-compose up -d
```

## 📊 Métricas y Monitoreo

- **Cobertura de Tests**: >80%
- **Performance**: Lighthouse Score >90
- **Accesibilidad**: WCAG 2.1 AA
- **SEO**: Optimizado para motores de búsqueda

## 🔧 Configuración de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Base de datos
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"

# JWT
JWT_SECRET="tu-jwt-secret-super-seguro"

# API Keys (opcional)
OPENAI_API_KEY="tu-openai-key"
AZURE_SPEECH_KEY="tu-azure-speech-key"

# URLs
FRONTEND_URL="http://localhost:3000"
BACKEND_URL="http://localhost:5000"
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 📞 Contacto

- **Email**: nevesdasilvanatalina@gmail.com
- **LinkedIn**: [Natalina Neves da Silva](https://www.linkedin.com/in/natalina-neves-da-silva-da-silva/)
- **Twitter**: [@natneves7](https://x.com/natneves7)
- **GitHub**: [@Nneves07](https://github.com/Nneves07)

---

Desarrollado con ❤️ por Natalina Neves 