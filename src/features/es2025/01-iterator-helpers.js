/**
 * ES2025 —— Iterator Helpers
 *
 * Iterator.prototype 新增一批链式方法，让原生迭代器可以像数组一样进行
 * map / filter / take / drop / flatMap / reduce / toArray 等操作，
 * 且全部惰性求值，不产生中间数组。
 */
import { createSuite } from '../../utils/runner.js'

export function testIteratorHelpers() {
  const { test, assert, getResults } = createSuite('Iterator Helpers (ES2025)')

  // 检测环境是否支持
  const supported = typeof Iterator !== 'undefined' && typeof Iterator.from === 'function'

  test('环境支持检测', () => {
    assert(supported, '环境不支持 Iterator Helpers')
  })

  test('Iterator.from() 将可迭代对象转为迭代器', () => {
    if (!supported) { assert(true, '(跳过：环境不支持 Iterator.from)'); return }
    const iter = Iterator.from([1, 2, 3])
    assert(typeof iter.next === 'function', '应返回迭代器对象')
  })

  test('.map() 惰性映射', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const result = Iterator.from([1, 2, 3]).map(x => x * 2).toArray()
    assert(result.length === 3 && result[0] === 2 && result[2] === 6, 'map 结果应为 [2,4,6]')
  })

  test('.filter() 惰性过滤', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const result = Iterator.from([1, 2, 3, 4, 5]).filter(x => x % 2 === 0).toArray()
    assert(result.length === 2 && result[0] === 2 && result[1] === 4, 'filter 结果应为 [2,4]')
  })

  test('.take(n) 取前 n 个元素', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const result = Iterator.from([10, 20, 30, 40, 50]).take(3).toArray()
    assert(result.length === 3 && result[2] === 30, 'take(3) 应只取前 3 个')
  })

  test('.drop(n) 跳过前 n 个元素', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const result = Iterator.from([1, 2, 3, 4, 5]).drop(2).toArray()
    assert(result.length === 3 && result[0] === 3, 'drop(2) 应从第 3 个开始')
  })

  test('.flatMap() 平铺映射', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const result = Iterator.from([1, 2, 3]).flatMap(x => [x, x * 10]).toArray()
    assert(result.length === 6 && result[1] === 10 && result[3] === 20, 'flatMap 应正确展开')
  })

  test('.reduce() 归约', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const sum = Iterator.from([1, 2, 3, 4]).reduce((acc, x) => acc + x, 0)
    assert(sum === 10, 'reduce 求和应为 10')
  })

  test('.toArray() 转为数组', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const arr = Iterator.from(new Set([7, 8, 9])).toArray()
    assert(Array.isArray(arr) && arr.length === 3, 'toArray 应返回普通数组')
  })

  test('.forEach() 遍历副作用', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const visited = []
    Iterator.from(['a', 'b', 'c']).forEach(x => visited.push(x))
    assert(visited.join('') === 'abc', 'forEach 应依次访问每个元素')
  })

  test('.some() / .every() 短路判断', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const hasEven = Iterator.from([1, 3, 4, 5]).some(x => x % 2 === 0)
    const allPos  = Iterator.from([1, 2, 3]).every(x => x > 0)
    assert(hasEven === true && allPos === true, 'some/every 应正确短路求值')
  })

  test('.find() 查找第一个匹配元素', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const found = Iterator.from([1, 3, 5, 6, 7]).find(x => x % 2 === 0)
    assert(found === 6, 'find 应返回第一个偶数 6')
  })

  test('链式调用：map + filter + take', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const result = Iterator.from([1, 2, 3, 4, 5, 6, 7, 8])
      .map(x => x * x)
      .filter(x => x > 10)
      .take(3)
      .toArray()
    // 平方后 > 10 的依次是 16,25,36,49,64；取前 3 个 → [16,25,36]
    assert(result.length === 3 && result[0] === 16 && result[2] === 36, '链式调用结果应为 [16,25,36]')
  })

  return getResults()
}
