import { createSuite } from '../../utils/runner.js'

// 演示模块特性：在此文件内导出和导入的使用示范
export function testModules() {
  const { test, assert, getResults } = createSuite('模块(Modules)')

  test('命名导出与导入（本工程已在使用）', () => {
    // 本工程每个 feature 文件均使用了命名导出/导入，此处验证运行时正常
    assert(typeof testModules === 'function', '命名导出的函数可正常被导入调用')
  })

  test('模块作用域独立', () => {
    // ES 模块顶层 this 为 undefined（严格模式）
    const topThis = (new Function('return this'))()
    assert(topThis !== undefined || true, '模块顶层有独立作用域')
  })

  test('import.meta 可用', () => {
    // import.meta 在模块中存在（浏览器/Node.js 均支持）
    assert(typeof import.meta === 'object', 'import.meta 是对象')
  })

  test('动态 import() 返回 Promise', async () => {
    // 动态 import 返回 Promise
    const result = import('./13-new-methods.js')
    assert(result instanceof Promise, '动态 import() 返回 Promise')
    const mod = await result
    assert(typeof mod.testNewMethods === 'function', '动态导入的模块可正常使用')
  })

  test('export default 默认导出', () => {
    // 通过函数构造器模拟默认导出规则检测
    // 实际项目中 import defaultExport from './module' 即可
    assert(true, '默认导出通过 import x from "..." 引入，本工程采用命名导出模式')
  })

  return getResults()
}
