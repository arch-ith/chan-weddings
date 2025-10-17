// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/chan-weddings/', // <--- important for GitHub Pages
  plugins: [react()],
});
