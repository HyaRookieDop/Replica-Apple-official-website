import path, { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '~bootstrap', replacement: resolve(__dirname, 'node_modules/bootstrap') },
    ],
  },
  server: {
    port: 8080,
  },
})
