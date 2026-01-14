import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Use relative paths for assets
  build: {
    outDir: '../docs', // Build to the docs folder in the project root
    emptyOutDir: true, // Clear the directory before building
  },
})
