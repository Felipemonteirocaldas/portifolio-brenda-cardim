import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// A CORREÇÃO ESTÁ NESTA LINHA:
import tailwindcss from 'tailwindcss'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-brenda-cardin/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})