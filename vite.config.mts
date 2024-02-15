import path from 'path'
import reactPDF from '@rqbazan/vite-plugin-shim-react-pdf'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactPDF()],
  resolve: {
    alias: {
      '~': path.resolve('src'),
    },
  },
})
