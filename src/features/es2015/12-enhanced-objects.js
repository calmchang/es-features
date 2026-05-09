import { createSuite } from '../../utils/runner.js'

export function testEnhancedObjects() {
  const { test, assert, getResults } = createSuite('增强对象字面量')

  test('属性简写', () => {
    const name = 'Alice'
    const age = 25
    const obj = { name, age }
    assert(obj.name === 'Alice' && obj.age === 25, '属性简写')
  })

  test('方法简写', () => {
    const obj = {
      greet(name) { return `Hello, ${name}!` }
    }
    assert(obj.greet('Bob') === 'Hello, Bob!', '方法简写')
  })

  return getResults()
}
