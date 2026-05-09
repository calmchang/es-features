import { createSuite } from '../../utils/runner.js'

export function testLetConst() {
  const { test, assert, getResults } = createSuite('let & const')

  test('let 块级作用域', () => {
    let results = []
    for (let i = 0; i < 3; i++) {
      results.push(i)
    }
    assert(results[0] === 0 && results[2] === 2, 'let 循环变量应为独立值')
  })

  test('const 声明常量', () => {
    const PI = 3.14159
    assert(PI === 3.14159, 'const 值应保持不变')
  })


  return getResults()
}
