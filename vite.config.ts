import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// When deploying to GitHub Pages at https://<user>.github.io/<repo>/
// set base to '/<repo>/'. If you use a custom domain or a <user>.github.io
// root repo, change this to '/'.
// The deploy workflow passes VITE_BASE automatically based on the repo name.
const base = process.env.VITE_BASE ?? '/';

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
