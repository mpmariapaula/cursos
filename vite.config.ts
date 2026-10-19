import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/cursos/', // Nome do seu repositório no GitHub
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})