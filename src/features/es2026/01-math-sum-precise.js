/**
 * ES2026 —— Math.sumPrecise()
 *
 * Math.sumPrecise(iterable) 对可迭代对象中的所有数值进行精确求和，
 * 内部使用"精确求和算法"（类似 Kahan 补偿求和），避免浮点数累积误差。
 *
 * 对比 Array.prototype.reduce：
 *   [0.1, 0.2, 0.3].reduce((a, b) => a + b)  // 0.6000000000000001（精度损失）
 *   Math.sumPrecise([0.1, 0.2, 0.3])          // 0.6（精确）
 */
import { createSuite } from '../../utils/runner.js'

export function testMathSumPrecise() {
  const { test, assert, getResults } = createSuite('Math.sumPrecise() (ES2026)')

  const supported = typeof Math.sumPrecise === 'function'

  test('环境支持检测', () => {
    assert(supported, '环境不支持 Math.sumPrecise')
  })

  test('基本求和 —— 整数', () => {
    if (!supported) { assert(true, '(跳过：环境不支持 Math.sumPrecise)'); return }
    assert(Math.sumPrecise([1, 2, 3, 4, 5]) === 15, '整数求和应为 15')
    assert(Math.sumPrecise([])              === 0,  '空数组求和应为 0')
    assert(Math.sumPrecise([42])            === 42, '单元素求和应为自身')
  })

  test('精确处理浮点数累积误差', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    // 普通 reduce 会产生浮点误差
    const naive = [0.1, 0.2, 0.3].reduce((a, b) => a + b)
    const precise = Math.sumPrecise([0.1, 0.2, 0.3])
    assert(naive !== 0.6,    '普通 reduce 应存在浮点误差（验证前提）')
    assert(precise === 0.6,  'Math.sumPrecise 应精确返回 0.6')
  })

  test('大量小数精确求和', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    // 1/3 * 3 在浮点运算中通常不等于 1
    const third = 1 / 3
    const result = Math.sumPrecise([third, third, third])
    // sumPrecise 应在 IEEE 754 精度内尽可能精确
    assert(typeof result === 'number', '应返回数值类型')
    assert(result > 0.999 && result <= 1.0, '三个 1/3 之和应尽量接近 1')
  })

  test('接受任意可迭代对象', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    // Set
    const fromSet = Math.sumPrecise(new Set([10, 20, 30]))
    assert(fromSet === 60, '支持 Set 可迭代对象')

    // Generator
    function* gen() { yield 1; yield 2; yield 3 }
    const fromGen = Math.sumPrecise(gen())
    assert(fromGen === 6, '支持 Generator 可迭代对象')
  })

  test('特殊值处理', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    // +0 与 -0
    assert(Math.sumPrecise([+0]) === 0,  '+0 求和应为 0')
    assert(Math.sumPrecise([-0]) === 0,  '-0 求和应为 0（结果为 +0）')

    // Infinity
    assert(Math.sumPrecise([1, Infinity])  === Infinity,    '含 Infinity 结果应为 Infinity')
    assert(Math.sumPrecise([-Infinity, 1]) === -Infinity,   '含 -Infinity 结果应为 -Infinity')
    assert(Number.isNaN(Math.sumPrecise([Infinity, -Infinity])), 'Inf + (-Inf) 应为 NaN')

    // NaN 传染
    assert(Number.isNaN(Math.sumPrecise([1, NaN, 3])), '含 NaN 结果应为 NaN')
  })

  test('非数值元素应抛出 TypeError', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    let threw = false
    try { Math.sumPrecise([1, '2', 3]) } catch (e) { threw = e instanceof TypeError }
    assert(threw, '非数值元素应抛出 TypeError')
  })

  return getResults()
}
