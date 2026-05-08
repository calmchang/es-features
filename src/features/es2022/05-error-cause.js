/**
 * ES2022 —— Error Cause
 *
 * Error 构造函数接受第二个参数 options，其中 cause 属性用于链式传递原始错误：
 *   new Error('高层描述', { cause: originalError })
 *
 * 所有内置 Error 子类（TypeError、RangeError 等）同样支持。
 * 主要用途：在错误封装时保留根因，方便调试和日志溯源。
 */
import { createSuite } from '../../utils/runner.js'

export function testErrorCause() {
  const { test, assert, getResults } = createSuite('Error Cause (ES2022)')

  test('基本用法 —— cause 属性保存原始错误', () => {
    const original = new TypeError('原始类型错误')
    const wrapped  = new Error('操作失败', { cause: original })
    assert(wrapped.message === '操作失败', '外层错误消息应正确')
    assert(wrapped.cause === original,    'cause 应指向原始错误')
    assert(wrapped.cause instanceof TypeError, 'cause 类型应保留')
  })

  test('所有内置子类均支持 cause', () => {
    const root = new Error('根因')
    const types = [
      new TypeError('类型错误',   { cause: root }),
      new RangeError('范围错误',  { cause: root }),
      new SyntaxError('语法错误', { cause: root }),
    ]
    types.forEach(e => {
      assert(e.cause === root, `${e.constructor.name} 的 cause 应指向根因`)
    })
  })

  test('错误链可以多层嵌套', () => {
    const level1 = new Error('数据库连接失败')
    const level2 = new Error('查询用户失败',   { cause: level1 })
    const level3 = new Error('登录接口报错',   { cause: level2 })

    assert(level3.cause === level2,        '第三层 cause 应指向第二层')
    assert(level3.cause.cause === level1,  '第二层 cause 应指向第一层')
    assert(level3.cause.cause.message === '数据库连接失败', '根因消息应可追溯')
  })

  test('不传 cause 时属性为 undefined', () => {
    const e = new Error('普通错误')
    assert(e.cause === undefined, '未传 cause 时属性应为 undefined')
  })

  test('cause 可以是任意值（不限于 Error）', () => {
    const e1 = new Error('原因是字符串', { cause: '网络超时' })
    const e2 = new Error('原因是数字',   { cause: 404 })
    const e3 = new Error('原因是对象',   { cause: { code: 'ENOENT' } })
    assert(e1.cause === '网络超时',      'cause 可以是字符串')
    assert(e2.cause === 404,             'cause 可以是数字')
    assert(e3.cause.code === 'ENOENT',   'cause 可以是对象')
  })

  test('实际应用：fetch 封装中传递原始网络错误', async () => {
    async function fetchUser(id) {
      try {
        // 模拟请求失败
        throw new Error('fetch failed: 500')
      } catch (networkErr) {
        throw new Error(`获取用户 ${id} 失败`, { cause: networkErr })
      }
    }

    let caught = null
    try { await fetchUser(42) } catch (e) { caught = e }

    assert(caught !== null,                       '应捕获到封装后的错误')
    assert(caught.message.includes('42'),         '外层错误消息应包含用户 id')
    assert(caught.cause instanceof Error,         'cause 应是原始 Error')
    assert(caught.cause.message.includes('500'),  '原始错误消息应保留')
  })

  test('自定义 Error 子类也支持 cause', () => {
    class AppError extends Error {
      constructor(msg, options) {
        super(msg, options)
        this.name = 'AppError'
      }
    }
    const root = new TypeError('底层失败')
    const e    = new AppError('应用层失败', { cause: root })
    assert(e.name === 'AppError',        '子类名称应正确')
    assert(e.cause === root,             '自定义子类应支持 cause')
  })

  return getResults()
}
