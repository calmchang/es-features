// core-js polyfill 入口：补齐目标浏览器（Chrome >= 40）缺失的 API
// 此文件由 Vite 编译为 IIFE，在页面中作为普通 <script> 提前加载

// 引入完整的现代特性补丁（涵盖 ES2015 到最新的特性）
import 'core-js/stable';
import 'regenerator-runtime/runtime'; // 如果需要兼容生成器函数
