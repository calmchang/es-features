/**
 * ES2025 —— Promise.try()
 *
 * Promise.try(fn) 将任意函数（同步 or 异步）统一包装为 Promise：
 *   - 若 fn 同步抛出，转为 rejected Promise（而非抛出异常）
 *   - 若 fn 返回值，转为 resolved Promise
 *   - 若 fn 返回 Promise，直接透传
 *
 * 解决了过去需要 new Promise(resolve => resolve(fn())) 才能统一捕获同步异常的痛点。
 */
import { createSuite } from '../../utils/runner.js'

export async function testPromiseTry() {
  const { test, assert, getResults } = createSuite('Promise.try (ES2025)')

  const supported = typeof Promise.try === 'function'

  test('同步函数 —— 返回值转为 resolved', async () => {
    if (!supported) { assert(true, '(跳过：环境不支持 Promise.try)'); return }
    const result = await Promise.try(() => 42)
    assert(result === 42, '同步返回值应被 resolve 为 42')
  })

  test('同步函数 —— 抛出异常转为 rejected', async () => {
    if (!supported) { assert(true, '(跳过)'); return }
    let caught = null
    await Promise.try(() => { throw new Error('同步错误') }).catch(e => { caught = e })
    assert(caught instanceof Error && caught.message === '同步错误', '同步异常应转为 rejected')
  })

  test('异步函数 —— resolved 正常透传', async () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const result = await Promise.try(async () => {
      return 'async result'
    })
    assert(result === 'async result', '异步 resolved 值应透传')
  })

  test('异步函数 —— rejected 正常透传', async () => {
    if (!supported) { assert(true, '(跳过)'); return }
    let caught = null
    await Promise.try(async () => {
      throw new Error('异步错误')
    }).catch(e => { caught = e })
    assert(caught instanceof Error && caught.message === '异步错误', '异步 rejected 应透传')
  })

  test('返回已有 Promise —— 直接透传', async () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const original = Promise.resolve('original')
    const result = await Promise.try(() => original)
    assert(result === 'original', '返回已有 Promise 的值应直接透传')
  })

  test('传递参数给回调函数', async () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const result = await Promise.try((a, b) => a + b, 10, 20)
    assert(result === 30, '应能向回调函数传递参数')
  })

  test('对比 new Promise —— 捕获同步异常的等价写法', async () => {
    if (!supported) { assert(true, '(跳过)'); return }
    // 旧写法：若 fn 同步抛出，需要用 try/catch 包裹才能转为 rejected
    // Promise.try 自动处理，以下两种写法等价：
    const oldWay = new Promise((resolve) => resolve(JSON.parse('{"key":"value"}')))
    const newWay = Promise.try(() => JSON.parse('{"key":"value"}'))
    const [r1, r2] = await Promise.all([oldWay, newWay])
    assert(r1.key === 'value' && r2.key === 'value', '两种写法结果应一致')
  })

  return getResults()
}
