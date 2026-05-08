import { createSuite } from '../../utils/runner.js'

export function testForOf() {
  const { test, assert, getResults } = createSuite('for...of 与迭代协议')

  test('for...of 迭代数组', () => {
    const result = []
    for (const x of [1, 2, 3]) result.push(x)
    assert(result.join(',') === '1,2,3', 'for...of 迭代数组')
  })

  test('for...of 迭代字符串', () => {
    const chars = []
    for (const c of 'abc') chars.push(c)
    assert(chars.join('') === 'abc', 'for...of 迭代字符串')
  })

  test('for...of 迭代 Set', () => {
    const result = []
    for (const x of new Set([1, 2, 3])) result.push(x)
    assert(result.join(',') === '1,2,3', 'for...of 迭代 Set')
  })

  test('for...of 迭代 Map', () => {
    const result = []
    for (const [k, v] of new Map([['a', 1], ['b', 2]])) {
      result.push(`${k}=${v}`)
    }
    assert(result.join(',') === 'a=1,b=2', 'for...of 迭代 Map')
  })

  test('for...of 迭代 arguments', () => {
    function fn() {
      const result = []
      for (const x of arguments) result.push(x)
      return result
    }
    assert(fn(1, 2, 3).join(',') === '1,2,3', 'for...of 迭代 arguments')
  })

  test('for...of 与 break / continue', () => {
    const result = []
    for (const x of [1, 2, 3, 4, 5]) {
      if (x === 3) continue
      if (x === 5) break
      result.push(x)
    }
    assert(result.join(',') === '1,2,4', 'for...of 支持 break 和 continue')
  })

  test('for...of 迭代 NodeList（DOM 环境跳过）', () => {
    // 非 DOM 环境，仅验证迭代协议通用性
    const iterable = {
      [Symbol.iterator]() {
        let n = 0
        return { next() { return n < 3 ? { value: n++, done: false } : { done: true } } }
      }
    }
    const result = []
    for (const x of iterable) result.push(x)
    assert(result.join(',') === '0,1,2', '自定义可迭代对象')
  })

  test('Array entries / keys / values 迭代', () => {
    const arr = ['a', 'b', 'c']
    const entries = [...arr.entries()]
    const keys = [...arr.keys()]
    const values = [...arr.values()]
    assert(entries[1][0] === 1 && entries[1][1] === 'b', 'entries 迭代')
    assert(keys.join(',') === '0,1,2', 'keys 迭代')
    assert(values.join(',') === 'a,b,c', 'values 迭代')
  })

  return getResults()
}
