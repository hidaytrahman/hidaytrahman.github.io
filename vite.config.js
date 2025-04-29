import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  base: '/hidaytrahman.github.io/', // 👈 For GitHub Pages deployment
  resolve: {
    alias: {
      core: path.resolve(__dirname, 'src/core'),
      components: path.resolve(__dirname, 'src/components'),
      "react-query": '@tanstack/react-query'
    }
  }
})
