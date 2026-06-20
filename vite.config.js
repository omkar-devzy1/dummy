import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Forward API calls to the Express backend during development.
      '/api': {
        target: process.env.VITE_API_PROXY || 'http://localhost:4500',
        changeOrigin: true,
      },
    },
  },
})
