import path, { resolve } from 'path'
import { defineConfig } from 'vite'

const timeStamp = new Date().getTime();
export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '~bootstrap', replacement: resolve(__dirname, 'node_modules/bootstrap') },
    ],
  },
  build: {
    outDir: path.resolve(__dirname, './dist'),
    assetsDir: `${timeStamp}`,
    chunkSizeWarningLimit: 2000,
    sourcemap: false,
  },
  server: {
    port: 8080,
  },
})
