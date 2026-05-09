import { createSuite } from '../../utils/runner.js'

export function testSymbols() {
  const { test, assert, getResults } = createSuite('Symbol')

  test('Symbol 唯一性', () => {
    const s1 = Symbol('desc')
    const s2 = Symbol('desc')
    assert(s1 !== s2, '相同描述的 Symbol 不相等')
  })


  return getResults()
}
