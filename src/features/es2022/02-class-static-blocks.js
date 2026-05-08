/**
 * ES2022 —— Class Static Initialization Blocks
 *
 * `static { ... }` 块在类定义时执行一次，用于：
 *   - 复杂的静态字段初始化（需要 try/catch、条件判断等）
 *   - 访问私有字段来初始化外部资源
 *   - 替代类外部的静态初始化代码
 *
 * 执行顺序：父类静态块 → 子类静态块，每个类只执行一次。
 */
import { createSuite } from '../../utils/runner.js'

export function testClassStaticBlocks() {
  const { test, assert, getResults } = createSuite('Class Static Blocks (ES2022)')

  test('基本静态块 —— 初始化静态字段', () => {
    class AppConfig {
      static host
      static port
      static {
        AppConfig.host = 'localhost'
        AppConfig.port = 8080
      }
    }
    assert(AppConfig.host === 'localhost', '静态块应初始化 host')
    assert(AppConfig.port === 8080,        '静态块应初始化 port')
  })

  test('静态块中可使用 try/catch 处理初始化失败', () => {
    class SafeConfig {
      static value
      static {
        try {
          // 模拟可能失败的操作
          const raw = '{"timeout":3000}'
          SafeConfig.value = JSON.parse(raw).timeout
        } catch {
          SafeConfig.value = 1000 // 默认值
        }
      }
    }
    assert(SafeConfig.value === 3000, '静态块中 try/catch 初始化应正确执行')
  })

  test('静态块访问同类私有字段', () => {
    // 常见模式：将私有字段的 setter 暴露给类外的受信任代码
    let setSecret
    class SecureStore {
      static #secret = 'initial'
      static {
        // 将私有字段的修改能力暴露给模块内部
        setSecret = (val) => { SecureStore.#secret = val }
      }
      static getSecret() { return SecureStore.#secret }
    }
    setSecret('updated')
    assert(SecureStore.getSecret() === 'updated', '静态块应能操作同类私有字段')
  })

  test('多个静态块按声明顺序执行', () => {
    const log = []
    class Sequence {
      static a
      static { log.push(1); Sequence.a = 10 }
      static b
      static { log.push(2); Sequence.b = Sequence.a * 2 }
    }
    assert(log[0] === 1 && log[1] === 2, '多个静态块应按顺序执行')
    assert(Sequence.b === 20, '第二个静态块应能读取第一个块的结果')
  })

  test('静态块与静态字段声明交替执行', () => {
    const order = []
    class Mixed {
      static x = (order.push('field-x'), 1)
      static { order.push('block-1') }
      static y = (order.push('field-y'), 2)
      static { order.push('block-2') }
    }
    assert(order.join(',') === 'field-x,block-1,field-y,block-2', '字段与静态块应按声明顺序交替初始化')
    assert(Mixed.x === 1 && Mixed.y === 2, '所有字段应正确赋值')
  })

  test('子类静态块在父类之后执行', () => {
    const order = []
    class Base {
      static { order.push('base') }
    }
    class Child extends Base {
      static { order.push('child') }
    }
    assert(order[0] === 'base' && order[1] === 'child', '父类静态块应先于子类执行')
  })

  test('静态块中 this 指向类本身', () => {
    class Widget {
      static name2 = 'Widget'
      static instance
      static {
        // this 指向 Widget 类
        this.instance = { type: this.name2 }
      }
    }
    assert(Widget.instance.type === 'Widget', '静态块内 this 应指向类本身')
  })

  return getResults()
}
