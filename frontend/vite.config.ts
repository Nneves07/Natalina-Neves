import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      '@services': '/src/services',
      '@types': '/src/types',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
    },
  },
  base: '/Natalina-Neves/', // Ruta base para despliegue en GitHub Pages
  server: {
    port: 3000,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: '../docs', // Cambia 'dist' por '../docs' para que el build salga en la raíz
    emptyOutDir: true, // Limpia la carpeta docs antes de cada build
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion'],
          forms: ['react-hook-form'],
        },
      },
    },
  },
  // La configuración de test debe ir en un archivo separado si usas Vitest
}) 