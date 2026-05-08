/**
 * ES2022 —— Class Fields
 *
 * 正式将以下语法纳入规范（ES2022 之前是提案）：
 *   - 公共实例字段（public instance fields）
 *   - 私有实例字段（private fields）    #field
 *   - 私有实例方法（private methods）   #method()
 *   - 静态公共字段（static fields）
 *   - 静态私有字段（static private fields）
 *   - 静态私有方法
 *   - 私有字段存在性判断（in 操作符）
 */
import { createSuite } from '../../utils/runner.js'

export function testClassFields() {
  const { test, assert, getResults } = createSuite('Class Fields (ES2022)')

  test('公共实例字段 —— 声明并初始化', () => {
    class Point {
      x = 0
      y = 0
      constructor(x, y) { this.x = x; this.y = y }
    }
    const p = new Point(3, 4)
    assert(p.x === 3 && p.y === 4, '公共字段应可读写')
  })

  test('公共字段默认值在 constructor 之前初始化', () => {
    class Counter {
      count = 10
      constructor() { this.count += 5 }
    }
    assert(new Counter().count === 15, '默认值应先于 constructor 体初始化')
  })

  test('私有实例字段 #field —— 外部不可访问', () => {
    class BankAccount {
      #balance = 0
      deposit(n) { this.#balance += n }
      get balance() { return this.#balance }
    }
    const acc = new BankAccount()
    acc.deposit(100)
    assert(acc.balance === 100, '私有字段应通过访问器正确读取')
    assert(!('#balance' in acc), '私有字段不应出现在普通属性枚举中')

    let threw = false
    try { eval('acc.#balance') } catch (e) { threw = true }
    assert(threw, '外部直接访问私有字段应抛出语法错误')
  })

  test('私有实例方法 #method()', () => {
    class Formatter {
      #prefix = '[LOG]'
      #wrap(msg) { return `${this.#prefix} ${msg}` }
      format(msg) { return this.#wrap(msg) }
    }
    assert(new Formatter().format('hello') === '[LOG] hello', '私有方法应正常调用')
  })

  test('静态公共字段', () => {
    class Config {
      static version = '1.0.0'
      static maxRetry = 3
    }
    assert(Config.version === '1.0.0', '静态公共字段应可通过类名访问')
    assert(Config.maxRetry === 3, '静态字段应保持初始值')
  })

  test('静态私有字段 —— 追踪实例数量', () => {
    class Registry {
      static #count = 0
      constructor() { Registry.#count++ }
      static getCount() { return Registry.#count }
    }
    new Registry(); new Registry(); new Registry()
    assert(Registry.getCount() === 3, '静态私有字段应跨实例共享')
  })

  test('静态私有方法', () => {
    class MathUtils {
      static #clamp(v, min, max) { return Math.min(Math.max(v, min), max) }
      static normalize(v) { return MathUtils.#clamp(v, 0, 1) }
    }
    assert(MathUtils.normalize(-0.5) === 0, '静态私有方法：低于下界应返回 0')
    assert(MathUtils.normalize(1.5)  === 1, '静态私有方法：超出上界应返回 1')
    assert(MathUtils.normalize(0.5)  === 0.5, '静态私有方法：正常值应原样返回')
  })

  test('私有字段存在性：`#field in obj`', () => {
    class Node {
      #value
      constructor(v) { this.#value = v }
      static isNode(obj) { return #value in obj }
    }
    assert(Node.isNode(new Node(1)) === true,  '实例应包含私有字段')
    assert(Node.isNode({})          === false, '普通对象不应包含私有字段')
  })

  test('私有字段不参与继承 —— 子类无法访问父类私有字段', () => {
    class Animal {
      #name
      constructor(name) { this.#name = name }
      getName() { return this.#name }
    }
    class Dog extends Animal {
      bark() { return `${this.getName()} says woof` }
    }
    const d = new Dog('Rex')
    assert(d.bark() === 'Rex says woof', '子类可通过父类公共方法访问私有字段')
  })

  return getResults()
}
