/**
 * vite.validate.config.js —— 【npm 包校验】应用模式配置
 *
 * 职责：以普通 app 模式启动一个验证页面，通过 ESM import 导入
 *       已发布的 npm 包 kn-es-features，校验其接口与功能是否正常可用。
 *
 * 与 vite.config.js 的核心区别：
 *   - 本文件不构建库，而是构建一个消费方应用。
 *   - 通过 resolve.alias 将 'kn-es-features' 指向本地 dist/esfeatures.js，
 *     模拟消费方执行 npm install kn-es-features 后的导入行为。
 *   - 验证点：ESM 命名导出、各版本 runAll* 函数、UI 渲染全流程。
 *
 * 开发模式：vite --config vite.validate.config.js
 * 生产构建：vite build --config vite.validate.config.js
 */

import { defineConfig } from 'vite'
import { resolve } from 'path'
import babel from '@rollup/plugin-babel'

export default defineConfig({
  // 顶层 plugins —— dev server 和 build 均生效
  plugins: [
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js'],
      presets: [
        [
          '@babel/preset-env',
          {
            targets: 'chrome >= 40',
            useBuiltIns: false,
            modules: false,
          },
        ],
      ],
    }),
  ],

  server: {
    host:'127.0.0.1',
    port: 8080,
    allowedHosts: ['host.docker.internal'],
  },

  // .js 文件由 Babel 处理（见顶层 plugins），esbuild 仅保留对 TS/JSX 的转换，
  // 避免 esbuild 与 Babel 重复处理同一文件。
  esbuild: {
    include: /\.(jsx|ts|tsx)$/,
  },

  // 将 npm 包名解析到本地构建产物（ESM 格式），无需真正安装
  resolve: {
    alias: {
      'kn-es-features/polyfills': resolve(__dirname, 'dist/polyfills.iife.js'),
      'kn-es-features/src': resolve(__dirname, 'src/index.js'),
      'kn-es-features': resolve(__dirname, 'dist/esfeatures.js'),

    },
  },

  build: {
    outDir: 'dist-validate',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'validate.html'),
    },
  },
})
