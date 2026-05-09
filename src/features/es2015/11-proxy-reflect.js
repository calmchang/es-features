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

  

  return getResults()
}
