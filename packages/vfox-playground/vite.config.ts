import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig(async () => {
  return {
    base: './',
    plugins: [vue()],
    build: {
      outDir: '../vfox-docs/docs/.vitepress/dist/playground'
    }
  }
})
