/**
 * ES2022 —— Object.hasOwn()
 *
 * Object.hasOwn(obj, key) 是 Object.prototype.hasOwnProperty.call(obj, key) 的简洁替代。
 *
 * 为什么需要它？
 *   1. Object.create(null) 创建的对象没有原型链，调用 .hasOwnProperty() 会报错
 *   2. 对象可能覆盖了自身的 hasOwnProperty 方法，导致判断不可靠
 *   3. Object.hasOwn 基于规范内部操作，始终安全可靠
 */
import { createSuite } from '../../utils/runner.js'

export function testObjectHasOwn() {
  const { test, assert, getResults } = createSuite('Object.hasOwn() (ES2022)')

  test('基本用法 —— 自有属性返回 true', () => {
    const obj = { name: 'Alice', age: 30 }
    assert(Object.hasOwn(obj, 'name') === true,  'name 是自有属性，应返回 true')
    assert(Object.hasOwn(obj, 'age')  === true,  'age 是自有属性，应返回 true')
  })

  test('不存在的属性返回 false', () => {
    const obj = { a: 1 }
    assert(Object.hasOwn(obj, 'b')    === false, '不存在的属性应返回 false')
    assert(Object.hasOwn(obj, 'toString') === false, '原型链上的属性应返回 false')
  })

  test('继承属性返回 false —— 只检查自有属性', () => {
    class Animal { constructor(name) { this.name = name } }
    class Dog extends Animal {}
    const d = new Dog('Rex')
    assert(Object.hasOwn(d, 'name')       === true,  'name 是实例自有属性')
    assert(Object.hasOwn(d, 'constructor') === false, 'constructor 在原型上，不是自有属性')
  })

  test('null 原型对象 —— hasOwnProperty 不可用时的安全方案', () => {
    // Object.create(null) 的对象没有 hasOwnProperty 方法
    const dict = Object.create(null)
    dict.key = 'value'

    let threw = false
    try { dict.hasOwnProperty('key') } catch (e) { threw = true }
    assert(threw, 'null 原型对象调用 hasOwnProperty 应抛出错误')

    // Object.hasOwn 不依赖原型链，安全可用
    assert(Object.hasOwn(dict, 'key')    === true,  'hasOwn 对 null 原型对象应正常工作')
    assert(Object.hasOwn(dict, 'other')  === false, '不存在的键应返回 false')
  })

  test('对象覆盖 hasOwnProperty —— hasOwn 不受影响', () => {
    const malicious = {
      hasOwnProperty() { return false }, // 伪造返回值
      secret: 42
    }
    // 旧方式被欺骗
    assert(malicious.hasOwnProperty('secret') === false, '被覆盖的 hasOwnProperty 返回错误结果')
    // Object.hasOwn 不调用实例方法，始终可靠
    assert(Object.hasOwn(malicious, 'secret') === true,  'hasOwn 不受覆盖影响，结果正确')
  })

  test('值为 undefined 的属性仍返回 true', () => {
    const obj = { key: undefined }
    assert(Object.hasOwn(obj, 'key') === true, '值为 undefined 的自有属性应返回 true')
  })

  test('Symbol 作为键', () => {
    const sym = Symbol('id')
    const obj = { [sym]: 123 }
    assert(Object.hasOwn(obj, sym)        === true,  'Symbol 键的自有属性应返回 true')
    assert(Object.hasOwn(obj, Symbol('id')) === false, '不同的 Symbol 实例应返回 false')
  })

  test('数组的索引属性', () => {
    const arr = [10, 20, 30]
    assert(Object.hasOwn(arr, 0)       === true,  '数组索引 0 是自有属性')
    assert(Object.hasOwn(arr, '1')     === true,  '字符串索引 "1" 也是自有属性')
    assert(Object.hasOwn(arr, 'length') === true, 'length 是数组的自有属性')
    assert(Object.hasOwn(arr, 3)        === false, '越界索引应返回 false')
  })

  return getResults()
}
