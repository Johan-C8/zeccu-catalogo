import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  // Esto asegura que las variables de entorno estén disponibles
  define: {
    'process.env': {}
  }
})