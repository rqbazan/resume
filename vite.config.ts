import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactPDF from 'vite-plugin-shim-react-pdf'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactPDF()],
  resolve: {
    alias: {
      '~': path.resolve('src'),
    },
  },
})
