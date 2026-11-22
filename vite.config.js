import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// base './' permite publicar la carpeta dist en cualquier ruta del servidor.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: './',
    plugins: [react()],
    server: {
      // En desarrollo, /api se reenvía al backend: el navegador ve un solo origen (sin CORS).
      proxy: {
        '/api': {
          target: env.VITE_DEV_API_TARGET || 'http://localhost:3001',
          changeOrigin: true,
        },
      },
    },
  };
});
