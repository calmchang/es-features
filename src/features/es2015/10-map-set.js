import { createSuite } from '../../utils/runner.js'

export function testMapSet() {
  const { test, assert, getResults } = createSuite('Map & Set')

  // Map
  test('Map 基本操作', () => {
    const m = new Map()
    m.set('a', 1)
    m.set('b', 2)
    assert(m.get('a') === 1, 'Map.get 应返回正确值')
    assert(m.has('b') === true, 'Map.has 应返回 true')
    assert(m.size === 2, 'Map.size 应为 2')
    m.delete('a')
    assert(m.size === 1, '删除后 size 应为 1')
  })

  test('Map 支持任意类型键', () => {
    const m = new Map()
    const obj = {}
    const fn = () => {}
    m.set(obj, 'object-value')
    m.set(fn, 'function-value')
    m.set(42, 'number-value')
    assert(m.get(obj) === 'object-value', '对象作为键')
    assert(m.get(fn) === 'function-value', '函数作为键')
    assert(m.get(42) === 'number-value', '数字作为键')
  })

  test('Map 从数组初始化', () => {
    const m = new Map([['x', 10], ['y', 20]])
    assert(m.get('x') === 10 && m.get('y') === 20, 'Map 从数组初始化')
  })

  test('Map 迭代', () => {
    const m = new Map([['a', 1], ['b', 2], ['c', 3]])
    const keys = [...m.keys()]
    const values = [...m.values()]
    const entries = [...m.entries()]
    assert(keys.join(',') === 'a,b,c', 'Map.keys 迭代')
    assert(values.join(',') === '1,2,3', 'Map.values 迭代')
    assert(entries.length === 3, 'Map.entries 迭代')
  })

  test('Map forEach', () => {
    const m = new Map([['a', 1], ['b', 2]])
    let result = ''
    m.forEach((v, k) => { result += `${k}=${v} ` })
    assert(result.trim() === 'a=1 b=2', 'Map.forEach 遍历')
  })

  // Set
  test('Set 基本操作', () => {
    const s = new Set([1, 2, 3, 2, 1])
    assert(s.size === 3, 'Set 自动去重，size 应为 3')
    assert(s.has(2) === true, 'Set.has 检查元素')
    s.delete(2)
    assert(s.has(2) === false, 'Set.delete 删除元素')
  })

  test('Set 数组去重', () => {
    const arr = [1, 2, 2, 3, 3, 4]
    const unique = [...new Set(arr)]
    assert(unique.join(',') === '1,2,3,4', 'Set 用于数组去重')
  })

  test('Set 迭代', () => {
    const s = new Set(['a', 'b', 'c'])
    const result = []
    for (const val of s) result.push(val)
    assert(result.join(',') === 'a,b,c', 'Set for...of 迭代')
  })

  test('Set 集合运算', () => {
    const a = new Set([1, 2, 3, 4])
    const b = new Set([3, 4, 5, 6])
    const union = new Set([...a, ...b])
    const intersection = new Set([...a].filter(x => b.has(x)))
    const difference = new Set([...a].filter(x => !b.has(x)))
    assert([...union].join(',') === '1,2,3,4,5,6', 'Set 并集')
    assert([...intersection].join(',') === '3,4', 'Set 交集')
    assert([...difference].join(',') === '1,2', 'Set 差集')
  })

  // WeakMap & WeakSet
  test('WeakMap 基本操作', () => {
    const wm = new WeakMap()
    const key = {}
    wm.set(key, 'value')
    assert(wm.has(key) === true, 'WeakMap.has 应返回 true')
    assert(wm.get(key) === 'value', 'WeakMap.get 应返回正确值')
    wm.delete(key)
    assert(wm.has(key) === false, 'WeakMap.delete 删除成功')
  })

  test('WeakSet 基本操作', () => {
    const ws = new WeakSet()
    const obj = {}
    ws.add(obj)
    assert(ws.has(obj) === true, 'WeakSet.has 应返回 true')
    ws.delete(obj)
    assert(ws.has(obj) === false, 'WeakSet.delete 删除成功')
  })

  return getResults()
}
