/**
 * ES2026 —— Explicit Resource Management（显式资源管理）
 *
 * 引入两个新关键字：
 *   using       —— 同步资源，块退出时自动调用 [Symbol.dispose]()
 *   await using —— 异步资源，块退出时自动调用 [Symbol.asyncDispose]()
 *
 * 以及两个新 Symbol：
 *   Symbol.dispose      —— 同步清理方法
 *   Symbol.asyncDispose —— 异步清理方法
 *
 * 解决了"忘记关闭资源"的问题，类似 C# using / Python with / Java try-with-resources。
 */
import { createSuite } from '../../utils/runner.js'

export async function testExplicitResourceManagement() {
  const { test, assert, getResults } = createSuite('Explicit Resource Management (ES2026)')

  // 检测语法支持（using 是新语法，需用 Function 构造器探测）
  const supported = (() => {
    try {
      using cx=null;
      return true
    } catch { return false }
  })()

  test('环境支持检测', () => {
    assert(supported, '环境不支持 using / await using 语法')
  })

  test('Symbol.dispose 已定义', () => {
    assert(typeof Symbol.dispose === 'symbol', 'Symbol.dispose 应是 symbol 类型')
  })

  test('Symbol.asyncDispose 已定义', () => {
    assert(typeof Symbol.asyncDispose === 'symbol', 'Symbol.asyncDispose 应是 symbol 类型')
  })

  test('using —— 块退出时自动调用 Symbol.dispose', () => {
    if (!supported) { assert(true, '(跳过：环境不支持 using 语法)'); return }
    const log = []
    new Function('log', 'Symbol', `
      {
        using r = {
          [Symbol.dispose]() { log.push('disposed') }
        }
        log.push('in-block')
      }
      log.push('after-block')
    `)(log, Symbol)
    assert(log[0] === 'in-block',    '块内代码应正常执行')
    assert(log[1] === 'disposed',    '块退出时应自动调用 dispose')
    assert(log[2] === 'after-block', 'dispose 之后块后代码才继续执行')
  })

  test('using —— 异常时也会调用 dispose（保证清理）', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const log = []
    try {
      new Function('log', 'Symbol', `
        {
          using r = { [Symbol.dispose]() { log.push('cleanup') } }
          throw new Error('意外错误')
        }
      `)(log, Symbol)
    } catch {}
    assert(log[0] === 'cleanup', '即使抛出异常也应执行 dispose 清理')
  })

  test('多个 using 资源按 LIFO 顺序释放', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const order = []
    new Function('order', 'Symbol', `
      {
        using a = { [Symbol.dispose]() { order.push('A') } }
        using b = { [Symbol.dispose]() { order.push('B') } }
        using c = { [Symbol.dispose]() { order.push('C') } }
      }
    `)(order, Symbol)
    // 后声明的先释放（栈顺序）
    assert(order.join(',') === 'C,B,A', '多资源应按 LIFO（后进先出）顺序释放')
  })

  await test('await using —— 异步 dispose', async () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const log = []
    const fn = new Function('log', 'Symbol', `
      return (async () => {
        {
          await using r = {
            async [Symbol.asyncDispose]() {
              await new Promise(res => setTimeout(res, 0))
              log.push('async-disposed')
            }
          }
          log.push('in-block')
        }
        log.push('after-block')
      })()
    `)
    await fn(log, Symbol)
    assert(log[0] === 'in-block',        '异步块内应正常执行')
    assert(log[1] === 'async-disposed',  'await using 应等待异步 dispose 完成')
    assert(log[2] === 'after-block',     'dispose 之后才继续执行块后代码')
  })

  test('DisposableStack —— 手动管理资源栈', () => {
    if (typeof DisposableStack === 'undefined') { assert(true, '(跳过：环境不支持 DisposableStack)'); return }
    const log = []
    const stack = new DisposableStack()
    stack.defer(() => log.push('deferred-1'))
    stack.defer(() => log.push('deferred-2'))
    stack.dispose()
    assert(log.join(',') === 'deferred-2,deferred-1', 'DisposableStack 应按 LIFO 执行')
  })

  return getResults()
}
