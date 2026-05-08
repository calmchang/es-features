import { createSuite } from '../../utils/runner.js'

export function testTemplateLiterals() {
  const { test, assert, getResults } = createSuite('模板字符串')

  test('基本插值', () => {
    const name = 'ES2015'
    const str = `Hello, ${name}!`
    assert(str === 'Hello, ES2015!', '模板字符串插值应正确')
  })

  test('表达式插值', () => {
    const a = 3, b = 4
    const str = `${a} + ${b} = ${a + b}`
    assert(str === '3 + 4 = 7', '模板字符串支持表达式')
  })

  test('多行字符串', () => {
    const multi = `第一行
第二行`
    assert(multi.includes('\n'), '模板字符串支持多行')
  })

  test('嵌套模板', () => {
    const items = ['a', 'b', 'c']
    const list = `items: ${items.map(i => `[${i}]`).join(', ')}`
    assert(list === 'items: [a], [b], [c]', '模板字符串可以嵌套')
  })

  test('标签模板 - 基本用法', () => {
    function tag(strings, ...values) {
      return strings.raw[0] + values[0].toUpperCase()
    }
    const name = 'world'
    const result = tag`hello ${name}`
    assert(result === 'hello WORLD', '标签模板应正确处理')
  })

  test('标签模板 - String.raw', () => {
    const path = String.raw`C:\Users\test\n`
    assert(path.includes('\\n'), 'String.raw 应保留原始反斜杠')
  })

  test('模板字符串中调用函数', () => {
    const upper = (s) => s.toUpperCase()
    const str = `result: ${upper('hello')}`
    assert(str === 'result: HELLO', '模板字符串中可调用函数')
  })

  return getResults()
}
