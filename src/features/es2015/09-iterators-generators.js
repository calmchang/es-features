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

  test('字符串是可迭代的', () => {
    const chars = [...'hello']
    assert(chars.length === 5 && chars[0] === 'h', '字符串可用 for...of 迭代')
  })

  test('基本生成器函数', () => {
    function* gen() {
      yield 1
      yield 2
      yield 3
    }
    const g = gen()
    assert(g.next().value === 1, '生成器第一个 yield')
    assert(g.next().value === 2, '生成器第二个 yield')
    assert(g.next().value === 3, '生成器第三个 yield')
    assert(g.next().done === true, '生成器结束')
  })

  test('生成器可作为可迭代对象', () => {
    function* range(start, end) {
      for (let i = start; i <= end; i++) yield i
    }
    const result = [...range(1, 5)]
    assert(result.join(',') === '1,2,3,4,5', '生成器展开为数组')
  })

  test('生成器 yield* 委托', () => {
    function* inner() { yield 'a'; yield 'b' }
    function* outer() { yield 1; yield* inner(); yield 2 }
    const result = [...outer()]
    assert(result.join(',') === '1,a,b,2', 'yield* 委托生成器')
  })

  test('生成器双向通信', () => {
    function* adder() {
      let total = 0
      while (true) {
        const n = yield total
        if (n === null) break
        total += n
      }
    }
    const g = adder()
    g.next()       // 启动
    g.next(5)      // total = 5
    g.next(3)      // total = 8
    const { value } = g.next(2)  // total = 10
    assert(value === 10, '生成器双向通信')
  })

  test('无限序列生成器', () => {
    function* fibonacci() {
      let [a, b] = [0, 1]
      while (true) {
        yield a;
        [a, b] = [b, a + b]
      }
    }
    const fib = fibonacci()
    const first8 = Array.from({ length: 8 }, () => fib.next().value)
    assert(first8.join(',') === '0,1,1,2,3,5,8,13', '斐波那契生成器')
  })

  test('生成器 return 方法提前结束', () => {
    function* gen() { yield 1; yield 2; yield 3 }
    const g = gen()
    assert(g.next().value === 1, '第一个值')
    assert(g.return('done').value === 'done', 'return 方法')
    assert(g.next().done === true, '提前结束后 done 为 true')
  })

  return getResults()
}
