import fs from 'fs'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig, Plugin } from 'vite'

const jsPath = path.resolve(__dirname, '../../dist/index.esm-browser.js')
const cssPath = path.resolve(__dirname, '../../dist/index.css')

function copyVfoxPlugin(): Plugin {
  return {
    name: 'copy-vfox',
    async buildStart() {
      await fs.promises.copyFile(jsPath, path.resolve('public/dist/vfox.js'))
      await fs.promises.copyFile(cssPath, path.resolve('public/dist/vfox.css'))
    }
  }
}

export default defineConfig(async () => {
  return {
    base: './',
    plugins: [vue(), copyVfoxPlugin()],
    build: {
      outDir: '../vfox-docs/docs/.vitepress/dist/playground'
    }
  }
})
