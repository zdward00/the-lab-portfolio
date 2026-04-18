import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
rollupOptions: {
input: {
home: '/pages/Home.jsx',
projects: '/pages/Projects.jsx',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
},
},
},
})
