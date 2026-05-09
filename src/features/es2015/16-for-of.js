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

  return getResults()
}
