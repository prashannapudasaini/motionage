import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // <-- THIS IS THE FIX FOR THE 404 ERRORS
  plugins: [
    react(),
    tailwindcss(),
  ],
})