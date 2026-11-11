import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages serves this project at /Studio-Index/.
  base: process.env.GITHUB_ACTIONS === 'true' ? '/Studio-Index/' : '/',
  plugins: [tailwindcss(), react()],
})
