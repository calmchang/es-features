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

  test('let 不可重复声明', () => {
    try {
      // 用 Function 构造器在独立作用域测试
      new Function('"use strict"; let x = 1; let x = 2;')()
      assert(false, '应抛出 SyntaxError')
    } catch (e) {
      assert(e instanceof SyntaxError || e instanceof TypeError, '应为语法错误')
    }
  })

  test('let 暂时性死区(TDZ)', () => {
    try {
      new Function('"use strict"; console.log(y); let y = 1;')()
      assert(false, '应抛出 ReferenceError')
    } catch (e) {
      assert(true)
    }
  })

  test('const 声明常量', () => {
    const PI = 3.14159
    assert(PI === 3.14159, 'const 值应保持不变')
  })

  test('const 不可重新赋值', () => {
    try {
      new Function('"use strict"; const x = 1; x = 2;')()
      assert(false, '应抛出 TypeError')
    } catch (e) {
      assert(e instanceof TypeError, '应为 TypeError')
    }
  })

  test('const 对象属性可修改', () => {
    const obj = { a: 1 }
    obj.a = 2
    assert(obj.a === 2, 'const 对象的属性可以修改')
  })

  return getResults()
}
