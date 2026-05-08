import { defineConfig } from 'vite'
import { resolve } from 'path'

// 将 core-js polyfill 打包成 IIFE，作为全局脚本在模块加载前执行
export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/polyfills.js'),
      name: 'ES2015Polyfills',
      fileName: 'polyfills',
      formats: ['iife'],
    },
    minify: true,
  },
})
