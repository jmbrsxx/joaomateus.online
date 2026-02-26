import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/joaomateus.online/', // GitHub Pages repository name ensures assets load from correct path
  plugins: [react()],
})
