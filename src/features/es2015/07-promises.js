import { createSuite } from '../../utils/runner.js'

export async function testPromises() {
  const { test, assert, getResults } = createSuite('Promise')

  const tests = []

  tests.push(test('基本 Promise resolve', () =>
    new Promise((resolve) => resolve(42)).then((v) => assert(v === 42, 'resolve 值应为 42'))
  ))

  tests.push(test('基本 Promise reject', () =>
    new Promise((_, reject) => reject(new Error('失败'))).catch((e) =>
      assert(e.message === '失败', 'reject 应携带错误信息')
    )
  ))

  tests.push(test('Promise 链式调用', () =>
    Promise.resolve(1)
      .then((v) => v + 1)
      .then((v) => v * 3)
      .then((v) => assert(v === 6, '链式调用结果应为 6'))
  ))

  tests.push(test('Promise.all - 全部成功', () =>
    Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then((values) =>
      assert(values.join(',') === '1,2,3', 'Promise.all 应返回所有结果')
    )
  ))

  tests.push(test('Promise.all - 一个失败则全部失败', () =>
    Promise.all([Promise.resolve(1), Promise.reject(new Error('error')), Promise.resolve(3)])
      .catch((e) => assert(e.message === 'error', 'Promise.all 中有失败应 reject'))
  ))

  tests.push(test('Promise.race - 返回最快的结果', () => {
    const p1 = new Promise((r) => setTimeout(() => r('slow'), 100))
    const p2 = Promise.resolve('fast')
    return Promise.race([p1, p2]).then((v) => assert(v === 'fast', 'Promise.race 应返回最快完成的'))
  }))

  tests.push(test('Promise.allSettled - 全部结果', () =>
    Promise.allSettled([Promise.resolve(1), Promise.reject('err')]).then((results) => {
      assert(results[0].status === 'fulfilled', 'allSettled fulfilled')
      assert(results[1].status === 'rejected', 'allSettled rejected')
    })
  ))

  tests.push(test('Promise.any - 返回第一个成功', () =>
    Promise.any([Promise.reject('e1'), Promise.resolve('ok'), Promise.resolve('ok2')]).then((v) =>
      assert(v === 'ok', 'Promise.any 应返回第一个成功的值')
    )
  ))

  tests.push(test('async/await 基本用法', async () => {
    async function fetchData() {
      const result = await Promise.resolve('data')
      return result
    }
    const data = await fetchData()
    assert(data === 'data', 'async/await 应正确获取异步结果')
  }))

  tests.push(test('async/await 错误处理', async () => {
    async function failFn() {
      throw new Error('async error')
    }
    try {
      await failFn()
      assert(false, '应抛出错误')
    } catch (e) {
      assert(e.message === 'async error', 'async/await 错误处理')
    }
  }))

  await Promise.all(tests.filter(Boolean))

  return getResults()
}
