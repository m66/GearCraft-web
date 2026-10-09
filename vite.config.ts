import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const page = (path: string) => resolve(import.meta.dirname, path)

// https://vite.dev/config/
export default defineConfig({
  // Set BASE_PATH when the site lives in a sub-folder, e.g. a GitHub Pages
  // project site: BASE_PATH=/gearcraft-site/ npm run build
  base: process.env.BASE_PATH ?? '/',
  plugins: [react()],
  build: {
    // One HTML file per page, so every URL is a real file on any static host
    // (no rewrite rules needed): /, /privacy-policy/, /support/.
    rolldownOptions: {
      input: {
        home: page('index.html'),
        privacy: page('privacy-policy/index.html'),
        support: page('support/index.html'),
      },
    },
  },
})
