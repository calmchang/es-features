/**
 * ES2022 —— RegExp `/d` flag（Match Indices）
 *
 * 正则表达式加上 d 标志后，匹配结果会附带 indices 属性，
 * 记录每个捕获组在原字符串中的起止位置 [start, end]。
 *
 * indices[0]     → 整个匹配的 [start, end]
 * indices[n]     → 第 n 个捕获组的 [start, end]
 * indices.groups → 具名捕获组的位置映射
 */
import { createSuite } from '../../utils/runner.js'

export function testRegExpDFlag() {
  const { test, assert, getResults } = createSuite('RegExp /d flag (ES2022)')

  const supported = (() => {
    try { return new RegExp('x', 'd').hasIndices === true } catch { return false }
  })()

  test('环境支持检测', () => {
    assert(supported, '环境不支持 RegExp /d 标志')
  })

  test('hasIndices 属性标识是否启用 /d 标志', () => {
    if (!supported) { assert(true, '(跳过：环境不支持 /d 标志)'); return }
    assert(new RegExp('x', 'd').hasIndices === true,  '/d 标志应使 hasIndices 为 true')
    assert(new RegExp('x').hasIndices      === false, '无 /d 标志时 hasIndices 应为 false')
  })

  test('整体匹配位置 indices[0]', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const m = 'hello world'.match(/world/d)
    assert(Array.isArray(m.indices),       '结果应包含 indices 数组')
    assert(m.indices[0][0] === 6,          '匹配起始位置应为 6')
    assert(m.indices[0][1] === 11,         '匹配结束位置应为 11（不含）')
    assert('hello world'.slice(6, 11) === 'world', 'slice 切出来应等于匹配内容')
  })

  test('捕获组位置 indices[n]', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const re = /(\d{4})-(\d{2})-(\d{2})/d
    const m  = '日期：2025-06-15'.match(re)
    assert(m.indices[1][0] === 3 && m.indices[1][1] === 7,   '年份捕获组位置应为 [3,7]')
    assert(m.indices[2][0] === 8 && m.indices[2][1] === 10,  '月份捕获组位置应为 [8,10]')
    assert(m.indices[3][0] === 11 && m.indices[3][1] === 13, '日期捕获组位置应为 [11,13]')
  })

  test('通过 indices 验证 slice 还原捕获组内容', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const src = '姓名：Alice，年龄：30'
    const re  = /姓名：(\w+)，年龄：(\d+)/d
    const m   = src.match(re)
    const [nameStart, nameEnd] = m.indices[1]
    const [ageStart,  ageEnd]  = m.indices[2]
    assert(src.slice(nameStart, nameEnd) === 'Alice', '通过 indices 切出的姓名应为 Alice')
    assert(src.slice(ageStart,  ageEnd)  === '30',    '通过 indices 切出的年龄应为 30')
  })

  test('具名捕获组的位置 indices.groups', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const re = /(?<year>\d{4})-(?<month>\d{2})/d
    const m  = '发布于 2025-06'.match(re)
    assert(m.indices.groups !== undefined,                '具名组应出现在 indices.groups 中')
    const { year, month } = m.indices.groups
    assert('发布于 2025-06'.slice(...year)  === '2025', '具名组 year 位置应正确')
    assert('发布于 2025-06'.slice(...month) === '06',   '具名组 month 位置应正确')
  })

  test('未匹配的可选组 indices 为 undefined', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const re = /(a)?(b)/d
    const m  = 'b'.match(re)
    assert(m.indices[1] === undefined, '未参与匹配的可选组 indices 应为 undefined')
    assert(Array.isArray(m.indices[2]),  '已匹配的组 indices 应为数组')
  })

  test('/d 与 /g 组合 —— exec 每次返回带 indices 的结果', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const re = /\d+/dg
    const src = 'a1b22c333'
    const positions = []
    let m
    while ((m = re.exec(src)) !== null) {
      positions.push(m.indices[0])
    }
    assert(positions.length === 3,       '应匹配到 3 个数字')
    assert(positions[0][0] === 1,        '第一个数字起始位置应为 1')
    assert(positions[1][0] === 3,        '第二个数字起始位置应为 3')
    assert(positions[2][0] === 6,        '第三个数字起始位置应为 6')
  })

  return getResults()
}
