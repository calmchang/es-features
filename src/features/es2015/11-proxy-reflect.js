import { createSuite } from '../../utils/runner.js'

export function testProxyReflect() {
  const { test, assert, getResults } = createSuite('Proxy & Reflect')

  test('Proxy get 拦截', () => {
    const handler = {
      get(target, key) {
        return key in target ? target[key] : `属性 "${key}" 不存在`
      }
    }
    const proxy = new Proxy({ name: 'Alice' }, handler)
    assert(proxy.name === 'Alice', 'Proxy get 已有属性')
    assert(proxy.age === '属性 "age" 不存在', 'Proxy get 不存在属性')
  })

  test('Proxy set 拦截与验证', () => {
    const handler = {
      set(target, key, value) {
        if (typeof value !== 'number') throw new TypeError('只允许数字')
        target[key] = value
        return true
      }
    }
    const proxy = new Proxy({}, handler)
    proxy.score = 90
    assert(proxy.score === 90, 'Proxy set 数字')
    try {
      proxy.score = 'hello'
      assert(false, '应抛出 TypeError')
    } catch (e) {
      assert(e instanceof TypeError, 'Proxy set 类型校验')
    }
  })

  test('Proxy has 拦截', () => {
    const range = { min: 1, max: 10 }
    const proxy = new Proxy(range, {
      has(target, key) {
        const num = Number(key)
        return num >= target.min && num <= target.max
      }
    })
    assert(5 in proxy, '5 在范围内')
    assert(!(11 in proxy), '11 不在范围内')
  })

  test('Proxy deleteProperty 拦截', () => {
    const proxy = new Proxy({ a: 1, b: 2 }, {
      deleteProperty(target, key) {
        if (key === 'b') throw new Error('b 不可删除')
        delete target[key]
        return true
      }
    })
    delete proxy.a
    assert(!('a' in proxy), 'a 已删除')
    try {
      delete proxy.b
      assert(false, '应抛出错误')
    } catch (e) {
      assert(e.message === 'b 不可删除', 'b 删除被拦截')
    }
  })

  test('Proxy apply 拦截函数调用', () => {
    function sum(a, b) { return a + b }
    const proxy = new Proxy(sum, {
      apply(target, thisArg, args) {
        return target(...args) * 2
      }
    })
    assert(proxy(3, 4) === 14, 'Proxy apply 拦截函数调用')
  })

  test('Proxy construct 拦截 new', () => {
    class Animal {
      constructor(name) { this.name = name }
    }
    const proxy = new Proxy(Animal, {
      construct(target, args) {
        const instance = new target(...args)
        instance.created = true
        return instance
      }
    })
    const a = new proxy('Cat')
    assert(a.name === 'Cat' && a.created === true, 'Proxy construct 拦截')
  })

  // Reflect
  test('Reflect.get', () => {
    const obj = { x: 42 }
    assert(Reflect.get(obj, 'x') === 42, 'Reflect.get 获取属性')
  })

  test('Reflect.set', () => {
    const obj = {}
    Reflect.set(obj, 'y', 100)
    assert(obj.y === 100, 'Reflect.set 设置属性')
  })

  test('Reflect.has', () => {
    const obj = { a: 1 }
    assert(Reflect.has(obj, 'a') === true, 'Reflect.has 检查属性')
    assert(Reflect.has(obj, 'z') === false, 'Reflect.has 不存在属性')
  })

  test('Reflect.ownKeys', () => {
    const sym = Symbol('s')
    const obj = { a: 1, [sym]: 2 }
    const keys = Reflect.ownKeys(obj)
    assert(keys.includes('a') && keys.includes(sym), 'Reflect.ownKeys 返回所有键含 Symbol')
  })

  test('Reflect.apply', () => {
    const result = Reflect.apply(Math.max, null, [1, 2, 3])
    assert(result === 3, 'Reflect.apply 调用函数')
  })

  return getResults()
}
