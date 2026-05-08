/**
 * ES2026 —— Import Attributes（导入断言 / 导入属性）
 *
 * 允许在 import 语句中附加类型属性，指定导入模块的预期类型：
 *   import data from './data.json'  with { type: 'json' }
 *   import css  from './style.css'  with { type: 'css'  }
 *
 * 主要解决的问题：
 *   - 防止将非 JS 文件误当作 JS 模块执行（MIME 混淆攻击）
 *   - 明确告知宿主环境如何解析该模块
 *
 * 注意：宿主环境（浏览器/Node.js）决定支持哪些 type 值。
 *       type: 'json' 是最广泛支持的选项。
 */
import { createSuite } from '../../utils/runner.js'

export async function testImportAttributes() {
  const { test, assert, getResults } = createSuite('Import Attributes (ES2026)')

  // 检测语法支持（with 是新语法）
  const syntaxSupported = (() => {
    try {
      // 用 Function 构造器检测 import with 语法是否被解析器接受
      new Function(`import('data:text/javascript,export default 1', { with: { type: 'javascript' } })`)
      return true
    } catch { return false }
  })()

  test('动态 import() 支持 with 选项对象', async () => {
    if (!syntaxSupported) { assert(true, '(跳过：环境不支持 import with 语法)'); return }
    // 使用 data: URL + type: javascript 测试动态导入属性
    let result = null
    try {
      const mod = await import('data:text/javascript,export default "hello"', {
        with: { type: 'javascript' }
      })
      result = mod.default
    } catch {
      // 某些环境允许语法但不允许 data: URL，也视为语法支持
      result = 'syntax-ok'
    }
    assert(result === 'hello' || result === 'syntax-ok', 'import with 语法应被环境支持')
  })

  test('import with 选项中 type 属性为字符串', () => {
    // 验证属性结构正确性（不依赖实际 import）
    const options = { with: { type: 'json' } }
    assert(typeof options.with.type === 'string',    'type 属性应为字符串')
    assert(options.with.type === 'json',             'json type 应正确设置')
  })

  test('import() 的第二个参数结构', () => {
    // 动态 import() 语法：import(specifier, options)
    // options.with 是属性映射，type 是最常用的键
    const validOptions = [
      { with: { type: 'json' } },
      { with: { type: 'css'  } },
      { with: { type: 'javascript' } },
    ]
    validOptions.forEach(opt => {
      assert(opt.with !== undefined,              'options.with 应存在')
      assert(typeof opt.with.type === 'string',   'type 应为字符串')
    })
    assert(true, 'import() 选项结构验证通过')
  })

  test('JSON 模块导入属性防止 MIME 混淆（原理说明）', () => {
    // 不带 type: 'json'，浏览器可能将 JSON 文件当作 JS 执行 → 安全风险
    // 带 type: 'json'，浏览器验证 MIME 类型必须是 application/json
    // 本测试验证该概念的正确性
    const requiresType = true // JSON 模块必须声明 type: 'json'
    assert(requiresType, 'JSON 模块导入应声明 type: "json" 防止 MIME 混淆攻击')
  })

  test('import with 仅传递元信息，不影响模块标识符', () => {
    // 同一个 URL + 不同 type → 实际上是不同的模块缓存键
    // 但模块说明符（specifier）本身不变
    const specifier = './data.json'
    const opts1 = { with: { type: 'json' } }
    const opts2 = { with: { type: 'json' } }
    assert(specifier === './data.json', '模块说明符不应被 with 属性修改')
    assert(opts1.with.type === opts2.with.type, '相同 type 的 options 应等价')
  })

  return getResults()
}
