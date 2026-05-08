import { createSuite } from '../../utils/runner.js'

export function testBinaryOctalUnicode() {
  const { test, assert, getResults } = createSuite('进制字面量与Unicode')

  // 二进制
  test('二进制字面量 0b', () => {
    const bin = 0b1010
    assert(bin === 10, '0b1010 应等于十进制 10')
    assert(0b11111111 === 255, '0b11111111 应等于 255')
  })

  // 八进制
  test('八进制字面量 0o', () => {
    const oct = 0o17
    assert(oct === 15, '0o17 应等于十进制 15')
    assert(0o777 === 511, '0o777 应等于 511')
  })

  // 十六进制（ES5已有，ES2015增强）
  test('十六进制字面量 0x', () => {
    assert(0xFF === 255, '0xFF 应等于 255')
    assert(0x10 === 16, '0x10 应等于 16')
  })

  // 数字转不同进制字符串
  test('Number.prototype.toString 进制转换', () => {
    assert((255).toString(16) === 'ff', '255 转十六进制')
    assert((10).toString(2) === '1010', '10 转二进制')
    assert((15).toString(8) === '17', '15 转八进制')
  })

  // Unicode
  test('Unicode 转义 \\uXXXX', () => {
    const heart = '\u2665'
    assert(heart === '♥', '\\u2665 应为心形符号')
  })

  test('Unicode 码点转义 \\u{XXXXX}', () => {
    const emoji = '\u{1F600}'
    assert(emoji.length === 2, 'Unicode 超过 FFFF 的字符长度为 2')
    assert(emoji.codePointAt(0) === 0x1F600, 'codePointAt 返回正确码点')
  })

  test('String.fromCodePoint', () => {
    const s = String.fromCodePoint(0x1F600)
    assert(s.codePointAt(0) === 0x1F600, 'String.fromCodePoint 与 codePointAt 对应')
  })

  test('字符串 normalize 方法', () => {
    // NFC：组合形式，NFD：分解形式
    const composed = '\u00e9'    // é (单个码点)
    const decomposed = '\u0065\u0301' // e + 组合重音
    assert(composed !== decomposed, '组合与分解形式不直接相等')
    assert(composed === decomposed.normalize('NFC'), 'normalize NFC 后相等')
  })

  test('for...of 正确迭代 Unicode 字符', () => {
    const str = '\u{1F600}A'
    const chars = [...str]
    assert(chars.length === 2, 'for...of 正确按码点迭代')
  })

  return getResults()
}
