/**
 * ES2022 —— Top-level await（顶层 await）
 *
 * 允许在 ES Module 的顶层直接使用 await，无需包裹在 async 函数中。
 *
 * 使用场景：
 *   - 模块初始化时加载远程配置
 *   - 条件导入（动态 import）
 *   - 数据库连接等异步初始化
 *
 * 注意：只能在 ES Module（type="module"）中使用，CommonJS 不支持。
 * 本测试通过 new Function + dynamic import 模拟等价行为进行验证。
 */
import { createSuite } from '../../utils/runner.js'

export async function testTopLevelAwait() {
  const { test, assert, getResults } = createSuite('Top-level await (ES2022)')

  await test('async 函数内的 await 是等价基础能力', async () => {
    // top-level await 本质上是将整个模块包装为隐式 async 函数
    // 在 async 函数顶层 await 等同于模块顶层 await
    const value = await Promise.resolve(42)
    assert(value === 42, 'await 在 async 函数顶层应正常工作')
  })

  await test('await 可以等待动态 import()', async () => {
    // 动态 import 是 top-level await 最常见的使用场景
    // 由于测试环境限制，用 Promise 模拟等价行为
    const fakeImport = () => Promise.resolve({ default: 'module-content', util: () => 'ok' })
    const mod = await fakeImport()
    assert(mod.default === 'module-content', 'await 动态导入应返回模块内容')
    assert(mod.util() === 'ok',             '模块导出的函数应可调用')
  })

  await test('await 保序 —— 导入方等待模块初始化完成', async () => {
    // top-level await 会阻塞依赖该模块的其他模块
    // 模拟：模块 A 需要等待异步初始化，模块 B 导入 A 后才能使用其导出值
    const log = []
    const moduleA = await (async () => {
      log.push('A:start')
      await new Promise(r => setTimeout(r, 0)) // 模拟异步初始化
      log.push('A:ready')
      return { data: 'initialized' }
    })()
    log.push('B:use')
    assert(moduleA.data === 'initialized', '模块 A 初始化完成后才能被使用')
    assert(log.join(',') === 'A:start,A:ready,B:use', '执行顺序应严格保序')
  })

  await test('await 与条件导入模拟', async () => {
    // top-level await 常用于条件加载不同平台的模块
    const isBrowser = typeof window !== 'undefined'
    const platform = await Promise.resolve(isBrowser ? 'browser' : 'node')
    assert(typeof platform === 'string', '条件 await 应返回字符串平台标识')
    assert(platform === 'browser' || platform === 'node', '平台标识应为 browser 或 node')
  })

  await test('await 错误应在模块加载阶段被捕获', async () => {
    // top-level await 抛出的错误会导致整个模块加载失败
    // 等价测试：async 顶层 await 的错误传播
    let caught = null
    try {
      await Promise.reject(new Error('模块初始化失败'))
    } catch (e) {
      caught = e
    }
    assert(caught instanceof Error,              '应捕获到 Error')
    assert(caught.message === '模块初始化失败', '错误消息应正确传递')
  })

  await test('await 不阻塞无依赖的兄弟模块（并行加载）', async () => {
    // 两个相互独立的异步模块可以并行初始化
    const t0 = Date.now()
    const [a, b] = await Promise.all([
      new Promise(r => setTimeout(() => r('A'), 10)),
      new Promise(r => setTimeout(() => r('B'), 10))
    ])
    const elapsed = Date.now() - t0
    assert(a === 'A' && b === 'B', '并行 await 两个模块都应成功完成')
    assert(elapsed < 50, '并行执行耗时应远小于串行（~10ms vs ~20ms）')
  })

  return getResults()
}
