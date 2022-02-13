import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import path from 'path'
import { defineConfig, Plugin } from 'vite'

const jsPath = path.resolve(__dirname, '../../dist/index.esm-browser.js')
const cssPath = path.resolve(__dirname, '../../dist/index.css')

function copyVfoxPlugin(): Plugin {
  return {
    name: 'copy-vfox',
    buildStart() {
      fs.copyFileSync(jsPath, path.resolve('public/vfox.js'))
      fs.copyFileSync(cssPath, path.resolve('public/vfox.css'))
    }
  }
}

export default defineConfig(async () => {
  return {
    base: './',
    plugins: [vue(), copyVfoxPlugin()],
    build: {
      outDir: 'site'
    }
  }
})
