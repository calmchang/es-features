import { createSuite } from '../../utils/runner.js'

export function testSymbols() {
  const { test, assert, getResults } = createSuite('Symbol')

  test('Symbol 唯一性', () => {
    const s1 = Symbol('desc')
    const s2 = Symbol('desc')
    assert(s1 !== s2, '相同描述的 Symbol 不相等')
  })

  test('Symbol 描述属性', () => {
    const s = Symbol('my-symbol')
    assert(s.description === 'my-symbol', 'Symbol.description 应返回描述字符串')
  })

  test('Symbol 作为对象属性键', () => {
    const key = Symbol('key')
    const obj = { [key]: 'value' }
    assert(obj[key] === 'value', 'Symbol 可作为对象属性键')
  })

  test('Symbol 属性不被普通枚举', () => {
    const sym = Symbol('hidden')
    const obj = { [sym]: 1, visible: 2 }
    assert(!Object.keys(obj).includes(sym.toString()), 'Symbol 属性不出现在 Object.keys 中')
    assert(Object.getOwnPropertySymbols(obj).length === 1, 'getOwnPropertySymbols 可获取 Symbol 属性')
  })

  test('Symbol.for 全局注册', () => {
    const s1 = Symbol.for('shared')
    const s2 = Symbol.for('shared')
    assert(s1 === s2, 'Symbol.for 应返回同一个 Symbol')
  })

  test('Symbol.keyFor 获取注册键', () => {
    const s = Symbol.for('test-key')
    assert(Symbol.keyFor(s) === 'test-key', 'Symbol.keyFor 应返回注册键')
    const local = Symbol('local')
    assert(Symbol.keyFor(local) === undefined, '未注册的 Symbol 返回 undefined')
  })

  test('内置 Symbol - Symbol.iterator', () => {
    class Range {
      constructor(start, end) { this.start = start; this.end = end }
      [Symbol.iterator]() {
        let current = this.start
        const end = this.end
        return {
          next() {
            return current <= end
              ? { value: current++, done: false }
              : { done: true }
          }
        }
      }
    }
    const result = [...new Range(1, 3)]
    assert(result.join(',') === '1,2,3', 'Symbol.iterator 自定义迭代器')
  })

  test('内置 Symbol - Symbol.toPrimitive', () => {
    const obj = {
      [Symbol.toPrimitive](hint) {
        if (hint === 'number') return 42
        if (hint === 'string') return 'forty-two'
        return true
      }
    }
    assert(+obj === 42, 'Symbol.toPrimitive number')
    assert(`${obj}` === 'forty-two', 'Symbol.toPrimitive string')
  })

  test('Symbol.hasInstance', () => {
    class EvenNumber {
      static [Symbol.hasInstance](num) {
        return Number.isInteger(num) && num % 2 === 0
      }
    }
    assert(2 instanceof EvenNumber, '2 应为 EvenNumber 实例')
    assert(!(3 instanceof EvenNumber), '3 不应为 EvenNumber 实例')
  })

  return getResults()
}
