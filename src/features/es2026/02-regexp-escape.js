/**
 * ES2026 —— RegExp.escape()
 *
 * RegExp.escape(string) 将字符串中所有具有正则特殊含义的字符进行转义，
 * 返回可安全嵌入正则表达式的字符串。
 *
 * 常见需求：用户输入作为字面量匹配时，防止注入特殊字符破坏正则逻辑。
 * 例如：用户输入 "price: $10.00"，直接放入 new RegExp(input) 会出错。
 *
 * 需要转义的字符：^ $ . * + ? ( ) [ ] { } | \ /
 */
import { createSuite } from '../../utils/runner.js'

export function testRegExpEscape() {
  const { test, assert, getResults } = createSuite('RegExp.escape() (ES2026)')

  const supported = typeof RegExp.escape === 'function'

  test('转义正则特殊字符', () => {
    if (!supported) { assert(true, '(跳过：环境不支持 RegExp.escape)'); return }
    const special = '^$.*+?()[]{}|\\'
    const escaped = RegExp.escape(special)
    // 所有特殊字符前应加反斜杠
    assert(typeof escaped === 'string', '应返回字符串')
    assert(escaped.includes('\\^'),  '^ 应被转义')
    assert(escaped.includes('\\$'),  '$ 应被转义')
    assert(escaped.includes('\\.'),  '. 应被转义')
    assert(escaped.includes('\\*'),  '* 应被转义')
  })

  test('普通字符不被转义', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    assert(RegExp.escape('hello') === 'hello',   '纯字母不应被转义')
    assert(RegExp.escape('12345') === '12345',   '纯数字不应被转义')
    assert(RegExp.escape('hello world') === 'hello world', '空格不应被转义')
  })

  test('转义结果可安全构造正则', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const userInput = 'price: $10.00 (sale!)'
    const re = new RegExp(RegExp.escape(userInput))
    assert(re.test('price: $10.00 (sale!)'), '转义后的正则应能精确匹配原字符串')
    assert(!re.test('price: X10X00 Xsale!'), '不应匹配用特殊字符替换后的字符串')
  })

  test('防止正则注入攻击', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    // 如果不转义，恶意输入 "(.*)" 可以匹配任何字符串
    const maliciousInput = '(.*)'
    const unsafeRe = new RegExp(maliciousInput)
    const safeRe   = new RegExp(RegExp.escape(maliciousInput))

    assert( unsafeRe.test('anything'),    '未转义的正则可匹配任意字符串（注入漏洞）')
    assert(!safeRe.test('anything'),      '转义后只能匹配字面量 "(.*)"')
    assert( safeRe.test('(.*)'),          '转义后精确匹配字面字符串 "(.*)"')
  })

  test('中文等 Unicode 字符不应被转义', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const chinese = '你好，世界'
    assert(RegExp.escape(chinese) === chinese, 'Unicode 字符不需要转义')
  })

  test('空字符串返回空字符串', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    assert(RegExp.escape('') === '', '空字符串转义后应仍为空字符串')
  })

  test('与 /g 标志组合 —— 高亮搜索词', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    // 模拟在文本中高亮用户搜索词（含特殊字符）
    const text    = '商品价格 $10.00，原价 $20.00'
    const keyword = '$10.00'
    const re      = new RegExp(RegExp.escape(keyword), 'g')
    const count   = (text.match(re) || []).length
    assert(count === 1, '含特殊字符的关键词应精确匹配 1 次')
  })

  return getResults()
}
