import { resolve } from 'path'
import svgSprites from 'rollup-plugin-svg-sprites'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgSprites({
      vueComponent: true,
      exclude: ['node_modules/**']
    })
  ],
  root: 'examples',
  base: '/vfox/demo/',
  resolve: {
    alias: [{ find: '@', replacement: resolve('./src') }]
  },
  build: {
    outDir: 'dist/demo'
  }
})