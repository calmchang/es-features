import { createSuite } from '../../utils/runner.js'

export function testTemplateLiterals() {
  const { test, assert, getResults } = createSuite('模板字符串')

  test('基本插值', () => {
    const name = 'ES2015'
    const str = `Hello, ${name}!`
    assert(str === 'Hello, ES2015!', '模板字符串插值应正确')
  })

  return getResults()
}
