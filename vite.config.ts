import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      server: {
        host: true, // allow external access (e.g. from ngrok)
        allowedHosts: ['935b1561af46.ngrok-free.app'],
        port: 5173 // or whatever you're using
      }
    };
});
