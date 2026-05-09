import { createSuite } from '../../utils/runner.js'

export function testIteratorsGenerators() {
  const { test, assert, getResults } = createSuite('迭代器与生成器')

  test('自定义迭代器', () => {
    function makeIterator(arr) {
      let index = 0
      return {
        next() {
          return index < arr.length
            ? { value: arr[index++], done: false }
            : { value: undefined, done: true }
        }
      }
    }
    const it = makeIterator([1, 2, 3])
    assert(it.next().value === 1, '第一次 next 返回 1')
    assert(it.next().value === 2, '第二次 next 返回 2')
    assert(it.next().done === false, '第三次未完成')
    assert(it.next().done === true, '第四次完成')
  })

  test('可迭代对象 for...of', () => {
    const result = []
    for (const x of [10, 20, 30]) {
      result.push(x)
    }
    assert(result.join(',') === '10,20,30', 'for...of 迭代数组')
  })

  return getResults()
}
