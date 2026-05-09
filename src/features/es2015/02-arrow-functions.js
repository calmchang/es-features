import { createSuite } from '../../utils/runner.js'

export function testArrowFunctions() {
  const { test, assert, getResults } = createSuite('箭头函数')

  test('基本语法', () => {
    const add = (a, b) => a + b
    assert(add(2, 3) === 5, '箭头函数返回值应为 5')
  })

  return getResults()
}
