import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // ESSA É A LINHA ADICIONADA PARA O DEPLOY FUNCIONAR
  base: '/portfolio-brenda-cardin/',

  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})