/**
 * ES2025 —— JSON.parse with Source Text Access
 *
 * JSON.parse 的 reviver 函数新增第三个参数 context，
 * context.source 携带该值在原始 JSON 字符串中的原始文本片段。
 *
 * 主要用途：
 *   1. 精确解析超大整数（BigInt），不丢失精度
 *   2. 调试时查看原始文本
 *   3. 保留数字字面量的原始格式
 */
import { createSuite } from '../../utils/runner.js'

export function testJsonParseSource() {
  const { test, assert, getResults } = createSuite('JSON.parse Source Text Access (ES2025)')

  // 检测支持性：调用 reviver 看第三参数是否存在
  let supported = false
  try {
    JSON.parse('1', (key, value, context) => {
      if (context && typeof context.source === 'string') supported = true
      return value
    })
  } catch (e) { /* ignore */ }

  test('reviver 接收第三个参数 context', () => {
    if (!supported) { assert(true, '(跳过：环境不支持 JSON.parse source text access)'); return }
    let receivedContext = null
    JSON.parse('"hello"', (key, value, ctx) => {
      if (key === '') receivedContext = ctx
      return value
    })
    assert(receivedContext !== null && typeof receivedContext.source === 'string',
      'reviver 应收到含 source 属性的 context 对象')
  })

  test('context.source 为该值的原始 JSON 文本', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const sources = {}
    JSON.parse('{"a":  42, "b": "hello"}', (key, value, ctx) => {
      if (key !== '') sources[key] = ctx.source
      return value
    })
    // source 保留原始空白
    assert(sources.a === '42', `数字的 source 应为 "42"，实际: "${sources.a}"`)
    assert(sources.b === '"hello"', `字符串的 source 应为 '"hello"'，实际: "${sources.b}"`)
  })

  test('利用 source 精确解析超大整数（BigInt）', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    // JS 数字最大安全整数为 2^53-1，超出后会丢失精度
    const bigNum = '9007199254740993' // 2^53 + 1，普通 JSON.parse 会精度丢失
    const parsed = JSON.parse(`{"id":${bigNum}}`, (key, value, ctx) => {
      if (key === '' ) return value
      // 用 source 转 BigInt，避免精度损失
      if (/^\d+$/.test(ctx.source)) return BigInt(ctx.source)
      return value
    })
    assert(typeof parsed.id === 'bigint', '超大整数应被转为 BigInt')
    assert(parsed.id === BigInt(bigNum), `BigInt 值应精确等于 ${bigNum}`)
  })

  test('嵌套对象中每个值都能获取自己的 source', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const collected = []
    JSON.parse('{"x":1,"arr":[2,3]}', (key, value, ctx) => {
      if (key !== '') collected.push(ctx.source)
      return value
    })
    assert(collected.includes('1') && collected.includes('2') && collected.includes('3'),
      '嵌套结构中每个原始值都应能取到 source')
  })

  test('null / boolean 也有对应 source', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const sources = {}
    JSON.parse('{"a":null,"b":true,"c":false}', (key, value, ctx) => {
      if (key !== '') sources[key] = ctx.source
      return value
    })
    assert(sources.a === 'null' && sources.b === 'true' && sources.c === 'false',
      'null/true/false 的 source 应为对应的原始文本')
  })

  return getResults()
}
