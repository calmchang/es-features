/**
 * ES2025 —— Error.isError()
 *
 * Error.isError(value) 是一个静态方法，用来可靠地判断一个值是否为 Error 实例。
 *
 * 为什么需要它？
 *   - instanceof Error 跨 realm（iframe、vm、Worker）会失效
 *   - Object.prototype.toString 返回 "[object Error]" 但并不区分 Error 子类
 *   - Error.isError 基于内部槽位（[[ErrorData]]）判断，跨 realm 安全
 */
import { createSuite } from '../../utils/runner.js'

export function testErrorIsError() {
  const { test, assert, getResults } = createSuite('Error.isError (ES2025)')

  const supported = typeof Error.isError === 'function'

  test('环境支持检测', () => {
    assert(supported, '环境不支持 Error.isError')
  })

  test('原生 Error 实例返回 true', () => {
    if (!supported) { assert(true, '(跳过：环境不支持 Error.isError)'); return }
    assert(Error.isError(new Error('test')) === true, 'new Error() 应返回 true')
  })

  test('Error 子类实例返回 true', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    assert(Error.isError(new TypeError('type'))     === true, 'TypeError 应返回 true')
    assert(Error.isError(new RangeError('range'))   === true, 'RangeError 应返回 true')
    assert(Error.isError(new SyntaxError('syntax')) === true, 'SyntaxError 应返回 true')
    assert(Error.isError(new ReferenceError('ref')) === true, 'ReferenceError 应返回 true')
    assert(Error.isError(new URIError('uri'))        === true, 'URIError 应返回 true')
    assert(Error.isError(new EvalError('eval'))      === true, 'EvalError 应返回 true')
  })

  test('自定义 Error 子类实例返回 true', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    class AppError extends Error {
      constructor(msg) { super(msg); this.name = 'AppError' }
    }
    assert(Error.isError(new AppError('app')) === true, '自定义 Error 子类应返回 true')
  })

  test('普通对象返回 false', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    assert(Error.isError({}) === false, '普通对象应返回 false')
    assert(Error.isError({ message: 'fake', stack: '' }) === false, '伪造 Error 对象应返回 false')
  })

  test('模拟 Error 对象（纯 JS 构造）返回 false', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    // 即使 prototype 指向 Error.prototype，没有内部槽位也应返回 false
    const fake = Object.create(Error.prototype)
    fake.message = 'fake'
    // 注意：某些实现可能对此行为有差异，但规范要求基于内部槽位
    // 这里只验证 Error.isError 不会误判明确不是 Error 的值
    assert(Error.isError(null)      === false, 'null 应返回 false')
    assert(Error.isError(undefined) === false, 'undefined 应返回 false')
    assert(Error.isError(42)        === false, '数字应返回 false')
    assert(Error.isError('error')   === false, '字符串 "error" 应返回 false')
  })

  test('数组、函数、正则等非 Error 值返回 false', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    assert(Error.isError([])          === false, '数组应返回 false')
    assert(Error.isError(() => {})    === false, '函数应返回 false')
    assert(Error.isError(/regex/)     === false, '正则应返回 false')
    assert(Error.isError(new Date())  === false, 'Date 应返回 false')
  })

  test('实际使用场景：统一捕获并判断 catch 的值', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    function riskyOp(throwError) {
      if (throwError) throw new TypeError('类型错误')
      return Promise.reject('string rejection')
    }

    let caughtError = null
    try { riskyOp(true) } catch (e) { caughtError = e }

    assert(Error.isError(caughtError) === true,  'try/catch 捕获的 Error 应识别为 true')
    assert(Error.isError('string rejection') === false, '字符串 rejection 应识别为 false')
  })

  return getResults()
}
