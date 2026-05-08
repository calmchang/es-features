/**
 * vite.config.js —— 【库模式】构建配置
 *
 * 职责：将 src/index.js 编译为可发布到 npm 的库文件，输出到 dist/。
 * 消费者引用时分两种路径：
 *   - ESM：import { runAll } from 'es2015-features'         → dist/es2015-features.js
 *   - CJS：const { runAll } = require('es2015-features')    → dist/es2015-features.umd.cjs
 *
 * 与 vite.app.config.js 的核心区别：
 *   - 本文件产物是"库"，不包含 HTML、不处理页面资源。
 *   - 使用 @rollup/plugin-babel 做语法降级（箭头函数→普通函数、class→ES5 等）。
 *   - 不打包 polyfill，运行时 API 补丁由消费方自行引入（见 dist/polyfills.iife.js）。
 */

import { defineConfig } from 'vite'
import { resolve } from 'path'
import babel from '@rollup/plugin-babel'

export default defineConfig({
  build: {
    // ── 库模式配置 ──────────────────────────────────────────────────────────
    lib: {
      // 库的入口文件；Rollup 从此处开始分析模块依赖图
      entry: resolve(__dirname, 'src/index.js'),

      // UMD 格式下挂载到全局的变量名（如 window.ES2015Features）
      name: 'EsFeatures',

      // 输出文件的基础名称，Vite 会自动追加格式后缀：
      //   es2015-features.js      → ESM（供现代打包工具 tree-shaking）
      //   es2015-features.umd.cjs → UMD/CJS（供 Node.js 或老式 <script> 直接使用）
      fileName: 'esfeatures',
      formats: ['iife','es','umd'],

    },

    rollupOptions: {
      // ── Babel 语法降级插件 ──────────────────────────────────────────────
      plugins: [
        babel({
          // 'bundled'：将 Babel 辅助函数（如 _classCallCheck）内联进产物，
          // 避免运行时依赖 @babel/runtime，适合库的独立分发。
          babelHelpers: 'bundled',

          // 仅对 .js 文件进行 Babel 转换（排除 node_modules 由 Rollup 默认处理）
          extensions: ['.js'],

          presets: [
            [
              '@babel/preset-env',
              {
                // 编译目标：Chrome 40（2015年1月发布，ES2015 规范定稿前），
                // Babel 会把所有该版本不支持的语法（箭头函数、class、解构等）转为 ES5。
                targets: 'chrome >= 40',

                // false：不注入任何 core-js polyfill。
                // 原因：库不应强制污染消费者的全局作用域；
                //        运行时 API 补丁统一由 dist/polyfills.iife.js 负责。
                useBuiltIns: false,

                // false：保留 ESM import/export，让 Rollup 自己处理模块格式转换，
                // 以便 Rollup 能做 tree-shaking 和正确的 CJS 包装。
                modules: false,
              },
            ],
          ],
        }),
      ],

      output: {
        // 'named'：所有导出均为命名导出，避免 Rollup 在 CJS 格式下
        // 因混合默认/命名导出而插入额外的兼容代码。
        exports: 'named',
      },
    },
  },
})
