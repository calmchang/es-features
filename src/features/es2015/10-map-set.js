import { createSuite } from '../../utils/runner.js'

export function testMapSet() {
  const { test, assert, getResults } = createSuite('Map & Set')

  // Map
  test('Map 基本操作', () => {
    const m = new Map()
    m.set('a', 1)
    m.set('b', 2)
    assert(m.get('a') === 1, 'Map.get 应返回正确值')
    assert(m.has('b') === true, 'Map.has 应返回 true')
    assert(m.size === 2, 'Map.size 应为 2')
    m.delete('a')
    assert(m.size === 1, '删除后 size 应为 1')
  })

  

  return getResults()
}
