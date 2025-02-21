import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: true,
    hmr: {
      clientPort: 443,
      host: 'f4165080-5adc-4341-8b4c-e25a17f06f03.lovableproject.com',
      protocol: 'wss',
      path: '@vite/client'
    },
    cors: true
  }
});
