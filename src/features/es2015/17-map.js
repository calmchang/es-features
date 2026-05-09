import { createSuite } from '../../utils/runner.js'

// // Map.prototype.getOrInsert / getOrInsertComputed 是 Stage 4 提案（ES2025）
// // 旧版浏览器（如 Chrome 40）不支持，注入 polyfill 以演示其行为
// function ensureGetOrInsert() {
//   if (!Map.prototype.getOrInsert) {
//     Map.prototype.getOrInsert = function (key, defaultValue) {
//       if (!this.has(key)) this.set(key, defaultValue)
//       return this.get(key)
//     }
//   }
//   if (!Map.prototype.getOrInsertComputed) {
//     Map.prototype.getOrInsertComputed = function (key, callbackFn) {
//       if (!this.has(key)) this.set(key, callbackFn(key))
//       return this.get(key)
//     }
//   }
// }

export function testMapGetOrInsert() {
  // ensureGetOrInsert()

  const { test, assert, getResults } = createSuite('map getOrInsert')

  test('getOrInsert - key 已存在返回原值', () => {
    const map = new Map([['bar', 'foo']])
    const result = map.getOrInsert('bar', 'default')
    assert(result === 'foo', 'key 已存在应返回原值 foo')
  })



  return getResults()
}
