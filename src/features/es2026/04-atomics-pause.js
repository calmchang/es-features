/**
 * ES2026 —— Atomics.pause()
 *
 * Atomics.pause(iterationNumber?) 向 CPU 发出"自旋等待"提示，
 * 告知处理器当前处于忙等循环中，允许其优化资源分配（降低功耗、避免流水线冲刷）。
 *
 * 类似于 x86 的 PAUSE 指令 / ARM 的 YIELD 指令。
 *
 * 用途：SharedArrayBuffer + Atomics 实现的多线程自旋锁（spinlock）。
 * 注意：纯 JS 主线程中调用无害但也无实际效果，仅在 Worker 忙等场景有优化意义。
 */
import { createSuite } from '../../utils/runner.js'

export function testAtomicsPause() {
  const { test, assert, getResults } = createSuite('Atomics.pause() (ES2026)')

  const supported = typeof Atomics.pause === 'function'

  test('Atomics.pause 函数存在', () => {
    if (!supported) { assert(true, '(跳过：环境不支持 Atomics.pause)'); return }
    assert(typeof Atomics.pause === 'function', 'Atomics.pause 应为函数')
  })

  test('无参数调用不抛出错误', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    let threw = false
    try { Atomics.pause() } catch { threw = true }
    assert(!threw, 'Atomics.pause() 无参数调用不应抛出')
  })

  test('传入整数参数不抛出错误', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    let threw = false
    try {
      Atomics.pause(0)
      Atomics.pause(1)
      Atomics.pause(100)
    } catch { threw = true }
    assert(!threw, 'Atomics.pause(N) 应接受非负整数参数')
  })

  test('返回值为 undefined', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    assert(Atomics.pause() === undefined, 'Atomics.pause() 应返回 undefined')
  })

  test('自旋等待模式下连续调用不崩溃', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    // 模拟自旋锁循环：每次迭代调用 pause 并递增计数
    let i = 0
    for (; i < 10; i++) {
      Atomics.pause(i) // 传入迭代次数，允许实现做自适应暂停
    }
    assert(i === 10, '10 次自旋循环应正常完成')
  })

  test('与 SharedArrayBuffer + Atomics.load 配合（模拟场景）', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    if (typeof SharedArrayBuffer === 'undefined') {
      assert(true, '(跳过：环境不支持 SharedArrayBuffer)')
      return
    }
    // 创建一个共享标志位，初始为 0
    const buf   = new SharedArrayBuffer(4)
    const flag  = new Int32Array(buf)
    flag[0] = 1  // 模拟"锁已被占用"

    let spinCount = 0
    const MAX_SPIN = 5
    // 模拟自旋等待：检查标志位，若被占用则 pause 后重试
    while (Atomics.load(flag, 0) !== 0 && spinCount < MAX_SPIN) {
      Atomics.pause(spinCount)
      spinCount++
      if (spinCount === 3) Atomics.store(flag, 0, 0) // 模拟锁被释放
    }
    assert(Atomics.load(flag, 0) === 0, '自旋等待后标志位应变为 0（锁释放）')
    assert(spinCount === 3, '应在第 3 次迭代时检测到锁释放')
  })

  return getResults()
}
