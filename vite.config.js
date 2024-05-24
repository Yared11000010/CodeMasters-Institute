import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CodeMasters-Institute/', // Adjust based on your repository name
  build: {
    outDir: 'dist', // or 'build' if that's your preferred directory
  },
})
