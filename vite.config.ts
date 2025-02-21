
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
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
  },
  plugins: [
    react(),
    mode === "development"
      ? (() => {
          try {
            return require("lovable-tagger").componentTagger();
          } catch (e) {
            console.warn("Warning: 'lovable-tagger' could not be loaded.");
            return null;
          }
        })()
      : null,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
