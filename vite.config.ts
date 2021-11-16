const { resolve } = require('path')

import svgLoader from 'vite-svg-loader'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  root: 'examples',
  base: '/vfox/demo/',
  resolve: {
    alias: [{ find: '@', replacement: resolve('./src') }]
  },
  build: {
    outDir: 'dist/demo'
  }
})
