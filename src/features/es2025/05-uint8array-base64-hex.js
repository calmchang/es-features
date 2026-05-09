/**
 * ES2025 —— Uint8Array to/from Base64 & Hex
 *
 * 新增 4 个静态/实例方法，让二进制数据与 Base64/十六进制字符串互转无需第三方库：
 *   Uint8Array.fromBase64(str)   → Uint8Array
 *   Uint8Array.fromHex(str)      → Uint8Array
 *   uint8arr.toBase64()          → string
 *   uint8arr.toHex()             → string
 */
import { createSuite } from '../../utils/runner.js'

export function testUint8ArrayBase64Hex() {
  const { test, assert, getResults } = createSuite('Uint8Array Base64/Hex (ES2025)')

  const supported = typeof Uint8Array.prototype.toBase64 === 'function'

  test('环境支持检测', () => {
    assert(supported, '环境不支持 Uint8Array Base64/Hex 方法')
  })

  test('toBase64() —— Uint8Array 转 Base64 字符串', () => {
    if (!supported) { assert(true, '(跳过：环境不支持 Uint8Array.toBase64)'); return }
    // "Hello" → ASCII [72,101,108,108,111]
    const arr = new Uint8Array([72, 101, 108, 108, 111])
    const b64 = arr.toBase64()
    assert(b64 === 'SGVsbG8=', `toBase64 应返回 "SGVsbG8="，实际: ${b64}`)
  })

  test('fromBase64() —— Base64 字符串转 Uint8Array', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const arr = Uint8Array.fromBase64('SGVsbG8=')
    assert(arr.length === 5 && arr[0] === 72 && arr[4] === 111, 'fromBase64 应还原为正确字节')
  })

  test('toHex() —— Uint8Array 转十六进制字符串', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const arr = new Uint8Array([0xde, 0xad, 0xbe, 0xef])
    const hex = arr.toHex()
    assert(hex === 'deadbeef', `toHex 应返回 "deadbeef"，实际: ${hex}`)
  })

  test('fromHex() —— 十六进制字符串转 Uint8Array', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const arr = Uint8Array.fromHex('deadbeef')
    assert(arr.length === 4 && arr[0] === 0xde && arr[3] === 0xef, 'fromHex 应正确还原字节')
  })

  test('Base64 round-trip（互转验证）', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const original = new Uint8Array([1, 2, 3, 255, 0, 128])
    const restored = Uint8Array.fromBase64(original.toBase64())
    assert(
      original.length === restored.length &&
      original.every((v, i) => v === restored[i]),
      'Base64 round-trip 应完全还原原始字节'
    )
  })

  test('Hex round-trip（互转验证）', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const original = new Uint8Array([0x00, 0x7f, 0x80, 0xff])
    const restored = Uint8Array.fromHex(original.toHex())
    assert(
      original.length === restored.length &&
      original.every((v, i) => v === restored[i]),
      'Hex round-trip 应完全还原原始字节'
    )
  })

  test('空数组 toBase64 返回空字符串', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const empty = new Uint8Array([])
    assert(empty.toBase64() === '', '空 Uint8Array 的 Base64 应为空字符串')
  })

  test('空字符串 fromHex 返回空 Uint8Array', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    const arr = Uint8Array.fromHex('')
    assert(arr.length === 0, '空字符串 fromHex 应返回空 Uint8Array')
  })

  test('toBase64 支持 URL-safe 模式', () => {
    if (!supported) { assert(true, '(跳过)'); return }
    // 包含会被编码为 + / 的字节
    const arr = new Uint8Array([0xfb, 0xff])
    const standard = arr.toBase64()
    const urlsafe  = arr.toBase64({ alphabet: 'base64url' })
    // URL-safe 将 + → - , / → _
    assert(
      urlsafe.indexOf('+') === -1 && urlsafe.indexOf('/') === -1,
      'URL-safe Base64 不应含 + 或 /'
    )
    assert(standard !== urlsafe || (!standard.includes('+') && !standard.includes('/')),
      'URL-safe 与标准编码结果应存在差异（或均不含特殊字符）')
  })

  return getResults()
}
