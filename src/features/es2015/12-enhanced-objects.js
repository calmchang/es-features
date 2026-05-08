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

  test('计算属性名', () => {
    const prefix = 'prop'
    const obj = {
      [`${prefix}1`]: 'value1',
      [`${prefix}2`]: 'value2',
      [Symbol.iterator]: function* () { yield 1 }
    }
    assert(obj.prop1 === 'value1' && obj.prop2 === 'value2', '计算属性名')
  })

  test('__proto__ 设置原型', () => {
    const proto = { greet() { return 'hi' } }
    const obj = { __proto__: proto }
    assert(obj.greet() === 'hi', '__proto__ 设置原型')
    assert(Object.getPrototypeOf(obj) === proto, '原型链正确')
  })

  test('super 在对象方法中使用', () => {
    const base = {
      toString() { return 'base' }
    }
    const derived = {
      __proto__: base,
      toString() { return super.toString() + '+derived' }
    }
    assert(derived.toString() === 'base+derived', 'super 在对象方法中')
  })

  test('Object.assign 合并对象', () => {
    const target = { a: 1 }
    const source = { b: 2, c: 3 }
    Object.assign(target, source)
    assert(target.a === 1 && target.b === 2 && target.c === 3, 'Object.assign 合并')
  })

  test('Object.keys / values / entries', () => {
    const obj = { a: 1, b: 2, c: 3 }
    assert(Object.keys(obj).join(',') === 'a,b,c', 'Object.keys')
    assert(Object.values(obj).join(',') === '1,2,3', 'Object.values')
    const entries = Object.entries(obj)
    assert(entries[0][0] === 'a' && entries[0][1] === 1, 'Object.entries')
  })

  test('Object.freeze 冻结对象', () => {
    const obj = Object.freeze({ x: 1 })
    try {
      obj.x = 999
      // 非严格模式下静默失败，严格模式（ES模块）下抛出 TypeError
    } catch (e) {
      assert(e instanceof TypeError, '严格模式下修改冻结属性应抛出 TypeError')
    }
    assert(obj.x === 1, 'Object.freeze 冻结后属性值不变')
  })

  test('Object.create 自定义原型', () => {
    const proto = {
      greet() { return `Hello, I'm ${this.name}` }
    }
    const obj = Object.create(proto)
    obj.name = 'World'
    assert(obj.greet() === "Hello, I'm World", 'Object.create 自定义原型')
  })

  test('属性描述符 Object.defineProperty', () => {
    const obj = {}
    Object.defineProperty(obj, 'readonly', {
      value: 42,
      writable: false,
      enumerable: true,
      configurable: false
    })
    try {
      obj.readonly = 999
      // 非严格模式下静默失败，严格模式（ES模块）下抛出 TypeError
    } catch (e) {
      assert(e instanceof TypeError, '严格模式下赋值只读属性应抛出 TypeError')
    }
    assert(obj.readonly === 42, 'defineProperty 只读属性值不变')
  })

  return getResults()
}
