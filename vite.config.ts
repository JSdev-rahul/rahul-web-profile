import react from '@vitejs/plugin-react';
import flowbiteReact from 'flowbite-react/plugin/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), flowbiteReact()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
