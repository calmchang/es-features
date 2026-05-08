/**
 * ES2025 —— RegExp Duplicate Named Capture Groups
 *
 * 允许同一正则表达式的不同分支（|）使用相同的命名捕获组名，
 * 解决了过去在处理多格式日期/字符串匹配时需要重复命名或拆分正则的痛点。
 *
 * 示例：/(?<year>\d{4})-(?<month>\d{2})|(?<month>\d{2})\/(?<year>\d{4})/
 */
import { createSuite } from '../../utils/runner.js'

export function testRegExpDuplicateGroups() {
  const { test, assert, getResults } = createSuite('RegExp Duplicate Named Capture Groups (ES2025)')

  // 检测支持性
  let supported = false
  try {
    new RegExp('(?<a>x)|(?<a>y)')
    supported = true
  } catch (e) {
    supported = false
  }

  test('同一命名组在不同分支中可重复使用', () => {
    if (!supported) { assert(true, '(跳过：环境不支持重复命名捕获组)'); return }
    // 匹配两种日期格式：YYYY-MM-DD 或 DD/MM/YYYY
    const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})|(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{4})/
    const m1 = '2025-06-15'.match(re)
    const m2 = '15/06/2025'.match(re)
    assert(m1.groups.year === '2025' && m1.groups.month === '06', '格式一：年月应正确解析')
    assert(m2.groups.year === '2025' && m2.groups.month === '06', '格式二：年月应正确解析')
  })

  test('同名组只有命中的那个分支有值，另一个为 undefined', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const re = /(?<val>[A-Z]+)|(?<val>\d+)/
    const m1 = 'ABC'.match(re)
    const m2 = '123'.match(re)
    assert(m1.groups.val === 'ABC', '字母分支命中时 val 应为 "ABC"')
    assert(m2.groups.val === '123', '数字分支命中时 val 应为 "123"')
  })

  test('与 String.prototype.replace 命名引用配合使用', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    // 将 YYYY-MM-DD 或 MM/DD/YYYY 统一转为 YYYY/MM/DD
    const re = /(?<y>\d{4})-(?<m>\d{2})-(?<d>\d{2})|(?<m>\d{2})\/(?<d>\d{2})\/(?<y>\d{4})/
    const r1 = '2025-06-15'.replace(re, '$<y>/$<m>/$<d>')
    const r2 = '06/15/2025'.replace(re, '$<y>/$<m>/$<d>')
    assert(r1 === '2025/06/15', '格式一替换应得 2025/06/15')
    assert(r2 === '2025/06/15', '格式二替换应得 2025/06/15')
  })

  test('matchAll 中重复命名组也正常工作', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const re = /(?<word>[a-z]+)|(?<word>\d+)/g
    const matches = [...'hello 42 world 7'.matchAll(re)]
    const words = matches.map(m => m.groups.word)
    assert(words.length === 4 && words[0] === 'hello' && words[1] === '42', 'matchAll 应正确提取所有命中词')
  })

  test('非命中分支的同名组值为 undefined', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const re = /(?<a>foo)|(?<a>bar)/
    const m = 'bar'.match(re)
    // 分支二命中，分支一的 a 为 undefined；groups.a 取命中的那个
    assert(m.groups.a === 'bar', '应取命中分支的值')
  })

  return getResults()
}
