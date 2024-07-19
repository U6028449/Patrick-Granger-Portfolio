import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Corrected import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  }
})