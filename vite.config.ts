import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// This configuration is simplified for Vercel.
// The 'base' property required for GitHub Pages has been removed.
export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
    // The alias for 'fs' is often a remnant of older setups and isn't needed here.
    // I've kept it in case you have a specific dependency that requires it,
    // but it can likely be removed.
    alias: { fs: 'fs' }
  },
  optimizeDeps: { include: ['lucide-react'] }
});
