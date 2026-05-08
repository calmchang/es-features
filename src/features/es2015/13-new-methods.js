import { createSuite } from '../../utils/runner.js'

export function testNewMethods() {
  const { test, assert, getResults } = createSuite('新增内置方法')

  // Array 新方法
  test('Array.from 类数组转换', () => {
    const arr = Array.from('hello')
    assert(arr.join(',') === 'h,e,l,l,o', 'Array.from 字符串')
    const mapped = Array.from([1, 2, 3], x => x * 2)
    assert(mapped.join(',') === '2,4,6', 'Array.from 带映射函数')
  })

  test('Array.of 创建数组', () => {
    const arr = Array.of(1, 2, 3)
    assert(arr.length === 3 && arr[0] === 1, 'Array.of 创建数组')
    assert(Array.of(7).length === 1, 'Array.of(7) 和 new Array(7) 不同')
  })

  test('Array.prototype.find / findIndex', () => {
    const arr = [1, 2, 3, 4, 5]
    assert(arr.find(x => x > 3) === 4, 'find 返回第一个满足条件的元素')
    assert(arr.findIndex(x => x > 3) === 3, 'findIndex 返回第一个满足条件的索引')
    assert(arr.find(x => x > 10) === undefined, 'find 无匹配返回 undefined')
  })

  test('Array.prototype.fill', () => {
    const arr = [1, 2, 3, 4, 5]
    arr.fill(0, 2, 4)
    assert(arr.join(',') === '1,2,0,0,5', 'fill 局部填充')
  })

  test('Array.prototype.includes', () => {
    assert([1, 2, 3].includes(2), 'includes 存在的元素')
    assert(![1, 2, 3].includes(4), 'includes 不存在的元素')
    assert([1, NaN].includes(NaN), 'includes 可检测 NaN（indexOf 不行）')
  })

  test('Array.prototype.flat / flatMap', () => {
    const nested = [1, [2, [3, [4]]]]
    assert(nested.flat().join(',') === '1,2,3,4', 'flat 一层')
    assert(nested.flat(Infinity).join(',') === '1,2,3,4', 'flat Infinity 层')
    const result = [1, 2, 3].flatMap(x => [x, x * 2])
    assert(result.join(',') === '1,2,2,4,3,6', 'flatMap')
  })

  // String 新方法
  test('String.prototype.includes / startsWith / endsWith', () => {
    const str = 'Hello, World!'
    assert(str.includes('World'), 'includes')
    assert(str.startsWith('Hello'), 'startsWith')
    assert(str.endsWith('!'), 'endsWith')
    assert(str.startsWith('World', 7), 'startsWith 从指定位置')
  })

  test('String.prototype.repeat', () => {
    assert('ha'.repeat(3) === 'hahaha', 'repeat')
    assert(''.repeat(5) === '', '空字符串 repeat')
  })

  test('String.prototype.padStart / padEnd', () => {
    assert('5'.padStart(3, '0') === '005', 'padStart')
    assert('hi'.padEnd(5, '.') === 'hi...', 'padEnd')
    assert('hello'.padStart(3) === 'hello', '长度不足不截断')
  })

  test('String.prototype.trimStart / trimEnd', () => {
    assert('  hello  '.trimStart() === 'hello  ', 'trimStart')
    assert('  hello  '.trimEnd() === '  hello', 'trimEnd')
  })

  // Number 新方法
  test('Number.isInteger', () => {
    assert(Number.isInteger(42), '42 是整数')
    assert(!Number.isInteger(42.5), '42.5 不是整数')
    assert(!Number.isInteger('42'), '字符串不是整数')
  })

  test('Number.isFinite / isNaN', () => {
    assert(Number.isFinite(42), '42 是有限数')
    assert(!Number.isFinite(Infinity), 'Infinity 不是有限数')
    assert(Number.isNaN(NaN), 'NaN 是 NaN')
    assert(!Number.isNaN(42), '42 不是 NaN')
    assert(!Number.isNaN('NaN'), '字符串 NaN 不触发（与全局 isNaN 不同）')
  })

  test('Number.parseInt / parseFloat', () => {
    assert(Number.parseInt('42px') === 42, 'Number.parseInt')
    assert(Number.parseFloat('3.14abc') === 3.14, 'Number.parseFloat')
  })

  test('Number.EPSILON', () => {
    const a = 0.1 + 0.2
    assert(Math.abs(a - 0.3) < Number.EPSILON, 'Number.EPSILON 用于浮点比较')
  })

  test('Number.MAX_SAFE_INTEGER / MIN_SAFE_INTEGER', () => {
    assert(Number.MAX_SAFE_INTEGER === 2 ** 53 - 1, 'MAX_SAFE_INTEGER')
    assert(Number.isSafeInteger(Number.MAX_SAFE_INTEGER), 'isSafeInteger')
    assert(!Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1), '超出安全整数范围')
  })

  // Math 新方法
  test('Math.sign', () => {
    assert(Math.sign(-5) === -1, 'Math.sign 负数')
    assert(Math.sign(0) === 0, 'Math.sign 零')
    assert(Math.sign(5) === 1, 'Math.sign 正数')
  })

  test('Math.trunc', () => {
    assert(Math.trunc(3.9) === 3, 'Math.trunc 正数')
    assert(Math.trunc(-3.9) === -3, 'Math.trunc 负数')
  })

  test('Math.cbrt / Math.hypot / Math.log2 / Math.log10', () => {
    assert(Math.cbrt(27) === 3, 'Math.cbrt 立方根')
    assert(Math.hypot(3, 4) === 5, 'Math.hypot 斜边')
    assert(Math.log2(8) === 3, 'Math.log2')
    assert(Math.log10(1000) === 3, 'Math.log10')
  })

  return getResults()
}
