import { createSuite } from '../../utils/runner.js'

// // Map.prototype.getOrInsert / getOrInsertComputed 是 Stage 4 提案（ES2025）
// // 旧版浏览器（如 Chrome 40）不支持，注入 polyfill 以演示其行为
// function ensureGetOrInsert() {
//   if (!Map.prototype.getOrInsert) {
//     Map.prototype.getOrInsert = function (key, defaultValue) {
//       if (!this.has(key)) this.set(key, defaultValue)
//       return this.get(key)
//     }
//   }
//   if (!Map.prototype.getOrInsertComputed) {
//     Map.prototype.getOrInsertComputed = function (key, callbackFn) {
//       if (!this.has(key)) this.set(key, callbackFn(key))
//       return this.get(key)
//     }
//   }
// }

export function testMapGetOrInsert() {
  // ensureGetOrInsert()

  const { test, assert, getResults } = createSuite('map getOrInsert')

  test('getOrInsert - key 已存在返回原值', () => {
    const map = new Map([['bar', 'foo']])
    const result = map.getOrInsert('bar', 'default')
    assert(result === 'foo', 'key 已存在应返回原值 foo')
  })

  test('getOrInsert - key 不存在时插入默认值', () => {
    const map = new Map()
    const result = map.getOrInsert('newKey', 42)
    assert(result === 42, '应返回插入的默认值 42')
    assert(map.get('newKey') === 42, 'key 已被写入 map')
  })

  test('getOrInsert - 不覆盖已有值', () => {
    const map = new Map([['x', 100]])
    map.getOrInsert('x', 999)
    assert(map.get('x') === 100, '已有值不应被覆盖')
  })

  test('getOrInsert - 词频统计经典用法', () => {
    const words = ['apple', 'banana', 'apple', 'apple', 'banana']
    const freq = new Map()
    for (const w of words) {
      freq.getOrInsert(w, 0)
      freq.set(w, freq.get(w) + 1)
    }
    assert(freq.get('apple') === 3, 'apple 出现 3 次')
    assert(freq.get('banana') === 2, 'banana 出现 2 次')
  })

  test('getOrInsertComputed - key 不存在时用回调计算', () => {
    const map = new Map()
    const result = map.getOrInsertComputed('user:1', (k) => ({ id: k, score: 0 }))
    assert(result.id === 'user:1' && result.score === 0, '回调以 key 为参数生成默认值')
  })

  test('getOrInsertComputed - key 已存在时不调用回调', () => {
    const map = new Map([['x', 'original']])
    let called = false
    const result = map.getOrInsertComputed('x', () => { called = true; return 'new' })
    assert(!called, 'key 已存在，回调不应被调用')
    assert(result === 'original', '应返回原有值')
  })

  test('getOrInsertComputed - 构建邻接表', () => {
    const edges = [[1, 2], [1, 3], [2, 3]]
    const graph = new Map()
    for (const [from, to] of edges) {
      graph.getOrInsertComputed(from, () => []).push(to)
    }
    assert(graph.get(1).join(',') === '2,3', '节点 1 的邻居为 [2,3]')
    assert(graph.get(2).join(',') === '3', '节点 2 的邻居为 [3]')
  })

  return getResults()
}
