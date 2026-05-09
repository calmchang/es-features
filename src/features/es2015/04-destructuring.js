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

  return getResults()
}
