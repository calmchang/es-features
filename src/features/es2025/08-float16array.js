/**
 * ES2025 —— Float16Array
 *
 * 新增 16 位半精度浮点数类型化数组，以及配套的：
 *   Math.f16round(x)               —— 将数字舍入为最近的 float16 可表示值
 *   DataView.prototype.getFloat16  —— 读取 16 位浮点数
 *   DataView.prototype.setFloat16  —— 写入 16 位浮点数
 *
 * 主要场景：WebGL、机器学习（半精度权重）、图像处理，节省内存（Float32 的一半）。
 */
import { createSuite } from '../../utils/runner.js'

export function testFloat16Array() {
  const { test, assert, getResults } = createSuite('Float16Array (ES2025)')

  const supported = typeof Float16Array !== 'undefined'

  test('环境支持检测', () => {
    assert(supported, '环境不支持 Float16Array')
  })

  test('Float16Array 可正常创建', () => {
    if (!supported) { assert(true, '(跳过：环境不支持 Float16Array)'); return }
    const arr = new Float16Array(4)
    assert(arr.length === 4, 'Float16Array 长度应为 4')
    assert(arr.BYTES_PER_ELEMENT === 2, '每个元素应占 2 字节（16 位）')
  })

  test('从数组初始化并读取值', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const arr = new Float16Array([1.0, 0.5, -1.0, 0.0])
    assert(arr[0] === 1.0,  'arr[0] 应为 1.0')
    assert(arr[1] === 0.5,  'arr[1] 应为 0.5')
    assert(arr[2] === -1.0, 'arr[2] 应为 -1.0')
    assert(arr[3] === 0.0,  'arr[3] 应为 0.0')
  })

  test('Math.f16round() 舍入到最近 float16 值', () => {
    if (typeof Math.f16round !== 'function') { assert(true, '(跳过：环境不支持 Math.f16round)'); return }
    // 1.337 → float16 最近值约为 1.3369140625
    const r = Math.f16round(1.337)
    assert(typeof r === 'number', 'Math.f16round 应返回数字')
    assert(Math.abs(r - 1.337) < 0.01, '舍入误差应在 0.01 以内')
    assert(r !== 1.337, '应发生精度损失，结果不等于输入值')
  })

  test('Math.f16round(Infinity) / (-Infinity) / NaN 特殊值', () => {
    if (typeof Math.f16round !== 'function') { assert(true, '(跳过)'); return }
    assert(Math.f16round(Infinity)  ===  Infinity, 'Infinity 应保持不变')
    assert(Math.f16round(-Infinity) === -Infinity, '-Infinity 应保持不变')
    assert(Number.isNaN(Math.f16round(NaN)), 'NaN 应保持 NaN')
    assert(Math.f16round(0) === 0, '0 应保持 0')
  })

  test('DataView.getFloat16 / setFloat16', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const dv = new DataView(new ArrayBuffer(4))
    if (typeof dv.setFloat16 !== 'function') { assert(true, '(跳过：DataView 不支持 float16)'); return }
    dv.setFloat16(0, 1.5, true) // little-endian
    const val = dv.getFloat16(0, true)
    assert(val === 1.5, 'DataView setFloat16/getFloat16 round-trip 应还原 1.5')
  })

  test('Float16Array 支持 TypedArray 通用方法', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const arr = new Float16Array([3, 1, 4, 1, 5])
    // sort
    arr.sort()
    assert(arr[0] === 1 && arr[4] === 5, 'sort 后最小值应为 1，最大值应为 5')
    // map → 返回新 Float16Array
    const doubled = arr.map(x => x * 2)
    assert(doubled instanceof Float16Array, 'map 应返回 Float16Array')
  })

  test('Float16Array 内存占用是 Float32Array 的一半', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const n = 100
    const f16 = new Float16Array(n)
    const f32 = new Float32Array(n)
    assert(f16.byteLength === f32.byteLength / 2, 'Float16Array 字节长度应是 Float32Array 的一半')
  })

  return getResults()
}
