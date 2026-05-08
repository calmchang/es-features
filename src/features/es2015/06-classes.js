import { createSuite } from '../../utils/runner.js'

export function testClasses() {
  const { test, assert, getResults } = createSuite('类(Class)')

  test('基本类定义', () => {
    class Animal {
      constructor(name) {
        this.name = name
      }
      speak() {
        return `${this.name} makes a sound.`
      }
    }
    const a = new Animal('Cat')
    assert(a.name === 'Cat', '构造函数应正确赋值')
    assert(a.speak() === 'Cat makes a sound.', '实例方法应正常工作')
  })

  test('类继承', () => {
    class Animal {
      constructor(name) { this.name = name }
      speak() { return `${this.name}: ...` }
    }
    class Dog extends Animal {
      speak() { return `${this.name}: Woof!` }
    }
    const d = new Dog('Rex')
    assert(d.speak() === 'Rex: Woof!', '子类应覆盖父类方法')
    assert(d instanceof Dog && d instanceof Animal, 'instanceof 检查应通过')
  })

  test('super 调用父类方法', () => {
    class Shape {
      area() { return 0 }
      describe() { return `面积: ${this.area()}` }
    }
    class Circle extends Shape {
      constructor(r) { super(); this.r = r }
      area() { return Math.PI * this.r * this.r }
      describe() { return super.describe() + ` (圆形)` }
    }
    const c = new Circle(1)
    assert(c.describe().includes('面积:'), 'super 方法调用')
  })

  test('静态方法', () => {
    class MathUtil {
      static add(a, b) { return a + b }
      static PI = 3.14159
    }
    assert(MathUtil.add(2, 3) === 5, '静态方法应直接通过类调用')
    assert(MathUtil.PI === 3.14159, '静态属性应正确设置')
  })

  test('getter 和 setter', () => {
    class Temperature {
      constructor(celsius) { this._celsius = celsius }
      get fahrenheit() { return this._celsius * 9 / 5 + 32 }
      set fahrenheit(f) { this._celsius = (f - 32) * 5 / 9 }
    }
    const t = new Temperature(0)
    assert(t.fahrenheit === 32, 'getter 应正确计算')
    t.fahrenheit = 212
    assert(Math.round(t._celsius) === 100, 'setter 应正确转换')
  })

  test('私有字段 (#)', () => {
    class Counter {
      #count = 0
      increment() { this.#count++ }
      get value() { return this.#count }
    }
    const c = new Counter()
    c.increment()
    c.increment()
    assert(c.value === 2, '私有字段应正确工作')
    assert(!('count' in c), '私有字段不可从外部访问')
  })

  test('类表达式', () => {
    const Rect = class Rectangle {
      constructor(w, h) { this.w = w; this.h = h }
      area() { return this.w * this.h }
    }
    const r = new Rect(3, 4)
    assert(r.area() === 12, '类表达式应正常工作')
  })

  test('类不存在变量提升', () => {
    try {
      new Function('"use strict"; new Foo(); class Foo {}')()
      assert(false, '应抛出 ReferenceError')
    } catch (e) {
      assert(true, '类不提升，使用前必须先声明')
    }
  })

  return getResults()
}
