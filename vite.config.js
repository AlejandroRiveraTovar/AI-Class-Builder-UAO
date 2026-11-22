import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' permite publicar la carpeta dist en cualquier ruta del servidor.
export default defineConfig({
  base: './',
  plugins: [react()],
});
