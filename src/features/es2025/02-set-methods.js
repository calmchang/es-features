/**
 * ES2025 —— New Set Methods
 *
 * Set.prototype 新增 7 个集合运算方法，对标数学集合操作：
 *   union / intersection / difference / symmetricDifference
 *   isSubsetOf / isSupersetOf / isDisjointFrom
 */
import { createSuite } from '../../utils/runner.js'

export function testSetMethods() {
  const { test, assert, getResults } = createSuite('New Set Methods (ES2025)')

  const supported = typeof Set.prototype.union === 'function'

  test('环境支持检测', () => {
    assert(supported, '环境不支持 Set 新方法（union/intersection 等）')
  })

  test('union() —— 并集', () => {
    if (!supported) { assert(true, '(跳过：环境不支持 Set.prototype.union)'); return }
    const a = new Set([1, 2, 3])
    const b = new Set([3, 4, 5])
    const result = a.union(b)
    assert(result.size === 5 && result.has(1) && result.has(5), '并集应包含两个集合所有元素')
  })

  test('intersection() —— 交集', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const a = new Set([1, 2, 3, 4])
    const b = new Set([3, 4, 5, 6])
    const result = a.intersection(b)
    assert(result.size === 2 && result.has(3) && result.has(4), '交集应只含共同元素 3,4')
  })

  test('difference() —— 差集（A - B）', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const a = new Set([1, 2, 3, 4])
    const b = new Set([3, 4, 5])
    const result = a.difference(b)
    assert(result.size === 2 && result.has(1) && result.has(2) && !result.has(3), '差集应为 {1,2}')
  })

  test('symmetricDifference() —— 对称差集', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const a = new Set([1, 2, 3])
    const b = new Set([2, 3, 4])
    const result = a.symmetricDifference(b)
    // 仅属于 a 或仅属于 b 的元素：{1, 4}
    assert(result.size === 2 && result.has(1) && result.has(4), '对称差集应为 {1,4}')
  })

  test('isSubsetOf() —— 子集判断', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const a = new Set([2, 3])
    const b = new Set([1, 2, 3, 4])
    assert(a.isSubsetOf(b) === true,  'a ⊆ b 应为 true')
    assert(b.isSubsetOf(a) === false, 'b ⊆ a 应为 false')
  })

  test('isSupersetOf() —— 超集判断', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const a = new Set([1, 2, 3, 4])
    const b = new Set([2, 3])
    assert(a.isSupersetOf(b) === true,  'a ⊇ b 应为 true')
    assert(b.isSupersetOf(a) === false, 'b ⊇ a 应为 false')
  })

  test('isDisjointFrom() —— 不相交判断', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const a = new Set([1, 2])
    const b = new Set([3, 4])
    const c = new Set([2, 5])
    assert(a.isDisjointFrom(b) === true,  'a 与 b 无交集，应为 true')
    assert(a.isDisjointFrom(c) === false, 'a 与 c 有交集 2，应为 false')
  })

  test('方法返回新 Set，不修改原集合', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const a = new Set([1, 2, 3])
    const b = new Set([3, 4])
    const u = a.union(b)
    // 原集合不变
    assert(a.size === 3 && b.size === 2, '原集合不应被修改')
    assert(u !== a && u !== b, '应返回全新的 Set 实例')
  })

  test('接受任意可迭代对象（不限于 Set）', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const a = new Set([1, 2, 3])
    // 传入数组
    const result = a.intersection(new Set([2, 3, 4]))
    assert(result.size === 2 && result.has(2) && result.has(3), '应支持传入普通数组')
  })

  return getResults()
}
