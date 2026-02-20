import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages project site (user.github.io/repo-name): use base: '/repo-name/'
// For custom domain or user site: use base: '/'
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  plugins: [react()],
  base,
})
