import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ui1/',
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: { fs: 'fs' }
  },
  optimizeDeps: { include: ['lucide-react'] }
});
