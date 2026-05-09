import { createSuite } from '../../utils/runner.js'

export function testDefaultRestSpread() {
  const { test, assert, getResults } = createSuite('默认参数/Rest/Spread')

  test('spread 对象覆盖属性', () => {
    const base = { a: 1, b: 2 }
    const extended = { ...base, b: 99 }
    assert(extended.b === 99, 'spread 后面属性覆盖前面')
  })

  return getResults()
}
