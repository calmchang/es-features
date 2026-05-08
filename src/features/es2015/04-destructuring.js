import { createSuite } from '../../utils/runner.js'

export function testDestructuring() {
  const { test, assert, getResults } = createSuite('解构赋值')

  test('数组解构 - 基本', () => {
    const [a, b, c] = [1, 2, 3]
    assert(a === 1 && b === 2 && c === 3, '数组解构基本用法')
  })

  test('数组解构 - 跳过元素', () => {
    const [, second, , fourth] = [1, 2, 3, 4]
    assert(second === 2 && fourth === 4, '数组解构可跳过元素')
  })

  test('数组解构 - 默认值', () => {
    const [x = 10, y = 20] = [1]
    assert(x === 1 && y === 20, '数组解构默认值')
  })

  test('数组解构 - rest 元素', () => {
    const [first, ...rest] = [1, 2, 3, 4]
    assert(first === 1 && rest.length === 3, '数组解构 rest 元素')
  })

  test('数组解构 - 交换变量', () => {
    let p = 1, q = 2;
    [p, q] = [q, p]
    assert(p === 2 && q === 1, '解构交换变量')
  })

  test('对象解构 - 基本', () => {
    const { name, age } = { name: 'Alice', age: 25 }
    assert(name === 'Alice' && age === 25, '对象解构基本用法')
  })

  test('对象解构 - 重命名', () => {
    const { name: userName, age: userAge } = { name: 'Bob', age: 30 }
    assert(userName === 'Bob' && userAge === 30, '对象解构重命名')
  })

  test('对象解构 - 默认值', () => {
    const { a = 1, b = 2 } = { a: 10 }
    assert(a === 10 && b === 2, '对象解构默认值')
  })

  test('对象解构 - rest 属性', () => {
    const { x, ...others } = { x: 1, y: 2, z: 3 }
    assert(x === 1 && others.y === 2 && others.z === 3, '对象解构 rest 属性')
  })

  test('嵌套解构', () => {
    const { a: { b: { c } } } = { a: { b: { c: 42 } } }
    assert(c === 42, '嵌套解构')
  })

  test('函数参数解构', () => {
    const fn = ({ name, age = 18 }) => `${name}:${age}`
    assert(fn({ name: 'Alice' }) === 'Alice:18', '函数参数解构')
  })

  test('字符串解构', () => {
    const [a, b, c] = 'abc'
    assert(a === 'a' && b === 'b' && c === 'c', '字符串解构')
  })

  return getResults()
}
