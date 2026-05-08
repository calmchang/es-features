/**
 * ES2022 —— Array.prototype.at() / String.prototype.at()
 *         TypedArray.prototype.at()
 *
 * .at(index) 支持负索引，解决了 arr[arr.length - 1] 这种冗长写法：
 *   arr.at(0)   → 第一个元素
 *   arr.at(-1)  → 最后一个元素（等价于 arr[arr.length - 1]）
 *   arr.at(-2)  → 倒数第二个元素
 *
 * 同样适用于 String、TypedArray（Int8Array、Uint8Array 等）。
 */
import { createSuite } from '../../utils/runner.js'

export function testAtMethod() {
  const { test, assert, getResults } = createSuite('Array/String.at() (ES2022)')

  // ── Array.prototype.at ─────────────────────────────────────────────

  test('Array.at() —— 正索引与 arr[i] 等价', () => {
    const arr = [10, 20, 30, 40, 50]
    assert(arr.at(0) === 10, 'at(0) 应返回第一个元素')
    assert(arr.at(2) === 30, 'at(2) 应返回第三个元素')
    assert(arr.at(4) === 50, 'at(4) 应返回最后一个元素')
  })

  test('Array.at() —— 负索引从末尾倒数', () => {
    const arr = [10, 20, 30, 40, 50]
    assert(arr.at(-1) === 50, 'at(-1) 应返回最后一个元素')
    assert(arr.at(-2) === 40, 'at(-2) 应返回倒数第二个元素')
    assert(arr.at(-5) === 10, 'at(-5) 应返回第一个元素')
  })

  test('Array.at() —— 越界返回 undefined', () => {
    const arr = [1, 2, 3]
    assert(arr.at(5)  === undefined, '正向越界应返回 undefined')
    assert(arr.at(-4) === undefined, '负向越界应返回 undefined')
  })

  test('Array.at() —— 空数组始终返回 undefined', () => {
    assert([].at(0) === undefined,  '空数组 at(0) 应返回 undefined')
    assert([].at(-1) === undefined, '空数组 at(-1) 应返回 undefined')
  })

  test('对比旧写法：arr.at(-1) vs arr[arr.length - 1]', () => {
    const data = [3, 1, 4, 1, 5, 9, 2, 6]
    const last  = data.at(-1)
    const last2 = data[data.length - 1]
    assert(last === last2, 'at(-1) 应与 arr[length-1] 等价')
  })

  // ── String.prototype.at ────────────────────────────────────────────

  test('String.at() —— 正索引', () => {
    const s = 'hello'
    assert(s.at(0) === 'h', 'at(0) 应返回首字符')
    assert(s.at(4) === 'o', 'at(4) 应返回末字符')
  })

  test('String.at() —— 负索引', () => {
    const s = 'hello'
    assert(s.at(-1) === 'o', 'at(-1) 应返回最后一个字符')
    assert(s.at(-3) === 'l', 'at(-3) 应返回倒数第三个字符')
  })

  test('String.at() —— 越界返回 undefined', () => {
    assert('abc'.at(10)  === undefined, '正向越界应返回 undefined')
    assert('abc'.at(-10) === undefined, '负向越界应返回 undefined')
  })

  // ── TypedArray.prototype.at ────────────────────────────────────────

  test('TypedArray.at() —— 支持负索引', () => {
    const ta = new Int32Array([100, 200, 300, 400])
    assert(ta.at(0)  === 100, 'TypedArray.at(0) 应返回第一个元素')
    assert(ta.at(-1) === 400, 'TypedArray.at(-1) 应返回最后一个元素')
    assert(ta.at(-2) === 300, 'TypedArray.at(-2) 应返回倒数第二个元素')
  })

  test('at() 不修改原数组', () => {
    const arr = [1, 2, 3]
    arr.at(-1)
    assert(arr.length === 3 && arr[2] === 3, 'at() 不应修改原数组')
  })

  return getResults()
}
