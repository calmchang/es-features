import { createSuite } from '../../utils/runner.js'

export function testDefaultRestSpread() {
  const { test, assert, getResults } = createSuite('默认参数/Rest/Spread')

  // 默认参数
  test('默认参数 - 基本', () => {
    const greet = (name = 'World') => `Hello, ${name}!`
    assert(greet() === 'Hello, World!', '默认参数应生效')
    assert(greet('Alice') === 'Hello, Alice!', '传参时默认参数应被覆盖')
  })

  test('默认参数 - undefined 触发默认值', () => {
    const fn = (a = 1) => a
    assert(fn(undefined) === 1, 'undefined 触发默认参数')
    assert(fn(null) === null, 'null 不触发默认参数')
  })

  test('默认参数 - 使用前面的参数', () => {
    const fn = (a, b = a * 2) => b
    assert(fn(5) === 10, '默认参数可引用前面的参数')
  })

  test('默认参数 - 表达式', () => {
    const fn = (x = Math.random()) => x
    const result = fn()
    assert(typeof result === 'number', '默认参数可以是表达式')
  })

  // Rest 参数
  test('rest 参数 - 收集剩余参数', () => {
    const sum = (first, ...rest) => rest.reduce((acc, n) => acc + n, first)
    assert(sum(1, 2, 3, 4) === 10, 'rest 参数应收集剩余参数')
  })

  test('rest 参数 - 是真正的数组', () => {
    const fn = (...args) => Array.isArray(args)
    assert(fn(1, 2, 3) === true, 'rest 参数是真正的数组')
  })

  test('rest 参数只能在最后', () => {
    try {
      new Function('function f(...a, b){}')()
      assert(false, '应抛出 SyntaxError')
    } catch (e) {
      assert(true, 'rest 参数只能在最后')
    }
  })

  // Spread 操作符
  test('spread 展开数组', () => {
    const a = [1, 2, 3]
    const b = [0, ...a, 4]
    assert(b.join(',') === '0,1,2,3,4', 'spread 展开数组')
  })

  test('spread 复制数组', () => {
    const original = [1, 2, 3]
    const copy = [...original]
    copy.push(4)
    assert(original.length === 3 && copy.length === 4, 'spread 复制数组为浅拷贝')
  })

  test('spread 合并数组', () => {
    const merged = [...[1, 2], ...[3, 4], ...[5]]
    assert(merged.join(',') === '1,2,3,4,5', 'spread 合并数组')
  })

  test('spread 传入函数参数', () => {
    const nums = [1, 2, 3]
    assert(Math.max(...nums) === 3, 'spread 传入函数参数')
  })

  test('spread 展开对象', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { ...obj1, c: 3 }
    assert(obj2.a === 1 && obj2.b === 2 && obj2.c === 3, 'spread 展开对象')
  })

  test('spread 对象覆盖属性', () => {
    const base = { a: 1, b: 2 }
    const extended = { ...base, b: 99 }
    assert(extended.b === 99, 'spread 后面属性覆盖前面')
  })

  return getResults()
}
