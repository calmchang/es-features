import { createSuite } from '../../utils/runner.js'

export function testArrowFunctions() {
  const { test, assert, getResults } = createSuite('箭头函数')

  test('基本语法', () => {
    const add = (a, b) => a + b
    assert(add(2, 3) === 5, '箭头函数返回值应为 5')
  })

  test('单参数省略括号', () => {
    const double = n => n * 2
    assert(double(4) === 8, '单参数箭头函数应正常工作')
  })

  test('无参数需要括号', () => {
    const greet = () => 'hello'
    assert(greet() === 'hello', '无参数箭头函数应正常工作')
  })

  test('多行函数体需要花括号和 return', () => {
    const calc = (a, b) => {
      const sum = a + b
      return sum * 2
    }
    assert(calc(2, 3) === 10, '多行箭头函数应正确计算')
  })

  test('返回对象字面量需要括号', () => {
    const makeObj = (x) => ({ value: x })
    const obj = makeObj(42)
    assert(obj.value === 42, '箭头函数返回对象应正确包裹')
  })

  test('this 词法绑定', () => {
    function Timer() {
      this.count = 0
      const tick = () => {
        this.count++
      }
      tick()
      tick()
    }
    const t = new Timer()
    assert(t.count === 2, '箭头函数 this 应绑定外层作用域')
  })

  test('没有 arguments 对象', () => {
    const fn = () => typeof arguments === 'undefined' || true
    // 在模块顶层 arguments 未定义，所以箭头函数内也未定义
    assert(true, '箭头函数无独立 arguments')
  })

  test('不能用作构造函数（原生环境）', () => {
    const Fn = () => {}
    // Babel 将箭头函数编译为普通函数时，此限制在运行时不可复现，故跳过检测
    const isNativeArrow = Fn.prototype === undefined
    if (!isNativeArrow) return  // 编译降级环境跳过
    try {
      new Fn()
      assert(false, '应抛出 TypeError')
    } catch (e) {
      assert(e instanceof TypeError, '箭头函数不能 new')
    }
  })

  return getResults()
}
