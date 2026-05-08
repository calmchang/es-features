// ── ES2015 特性 ──────────────────────────────────────────────────────────────
import { testLetConst }            from './features/es2015/01-let-const.js'
import { testArrowFunctions }      from './features/es2015/02-arrow-functions.js'
import { testTemplateLiterals }    from './features/es2015/03-template-literals.js'
import { testDestructuring }       from './features/es2015/04-destructuring.js'
import { testDefaultRestSpread }   from './features/es2015/05-default-rest-spread.js'
import { testClasses }             from './features/es2015/06-classes.js'
import { testPromises }            from './features/es2015/07-promises.js'
import { testSymbols }             from './features/es2015/08-symbols.js'
import { testIteratorsGenerators } from './features/es2015/09-iterators-generators.js'
import { testMapSet }              from './features/es2015/10-map-set.js'
import { testProxyReflect }        from './features/es2015/11-proxy-reflect.js'
import { testEnhancedObjects }     from './features/es2015/12-enhanced-objects.js'
import { testNewMethods }          from './features/es2015/13-new-methods.js'
import { testModules }             from './features/es2015/14-modules.js'
import { testBinaryOctalUnicode }  from './features/es2015/15-binary-octal-unicode.js'
import { testForOf }               from './features/es2015/16-for-of.js'
import { testMapGetOrInsert }      from './features/es2015/17-map.js'

// ── ES2022 特性 ──────────────────────────────────────────────────────────────
import { testClassFields }        from './features/es2022/01-class-fields.js'
import { testClassStaticBlocks }  from './features/es2022/02-class-static-blocks.js'
import { testAtMethod }           from './features/es2022/03-at-method.js'
import { testObjectHasOwn }       from './features/es2022/04-object-has-own.js'
import { testErrorCause }         from './features/es2022/05-error-cause.js'
import { testRegExpDFlag }        from './features/es2022/06-regexp-d-flag.js'
import { testTopLevelAwait }      from './features/es2022/07-top-level-await.js'

// ── ES2025 特性 ──────────────────────────────────────────────────────────────
import { testIteratorHelpers }       from './features/es2025/01-iterator-helpers.js'
import { testSetMethods }            from './features/es2025/02-set-methods.js'
import { testPromiseTry }            from './features/es2025/03-promise-try.js'
import { testRegExpDuplicateGroups } from './features/es2025/04-regexp-duplicate-groups.js'
import { testUint8ArrayBase64Hex }   from './features/es2025/05-uint8array-base64-hex.js'
import { testJsonParseSource }       from './features/es2025/06-json-parse-source.js'
import { testErrorIsError }          from './features/es2025/07-error-is-error.js'
import { testFloat16Array }          from './features/es2025/08-float16array.js'

// ── ES2026 特性 ──────────────────────────────────────────────────────────────
import { testMathSumPrecise }              from './features/es2026/01-math-sum-precise.js'
import { testRegExpEscape }                from './features/es2026/02-regexp-escape.js'
import { testExplicitResourceManagement }  from './features/es2026/03-explicit-resource-management.js'
import { testAtomicsPause }                from './features/es2026/04-atomics-pause.js'
import { testImportAttributes }            from './features/es2026/05-import-attributes.js'

import { printResults } from './utils/runner.js'

// ── 测试套件注册表 ──────────────────────────────────────────────────────────

const suites2015 = [
  { name: 'let & const',                   fn: testLetConst },
  { name: '箭头函数',                      fn: testArrowFunctions },
  { name: '模板字符串',                    fn: testTemplateLiterals },
  { name: '解构赋值',                      fn: testDestructuring },
  { name: '默认参数 / Rest / Spread',      fn: testDefaultRestSpread },
  { name: '类(Class)',                     fn: testClasses },
  { name: 'Promise & async/await',         fn: testPromises },
  { name: 'Symbol',                        fn: testSymbols },
  { name: '迭代器与生成器',                fn: testIteratorsGenerators },
  { name: 'Map & Set & WeakMap & WeakSet', fn: testMapSet },
  { name: 'Proxy & Reflect',               fn: testProxyReflect },
  { name: '增强对象字面量',                fn: testEnhancedObjects },
  { name: '新增内置方法',                  fn: testNewMethods },
  { name: '模块(Modules)',                 fn: testModules },
  { name: '进制字面量与 Unicode',          fn: testBinaryOctalUnicode },
  { name: 'for...of',                      fn: testForOf },
  { name: 'Map getOrInsert',               fn: testMapGetOrInsert },
]

const suites2022 = [
  { name: 'Class Fields（私有字段 / 静态字段）', fn: testClassFields },
  { name: 'Class Static Blocks',               fn: testClassStaticBlocks },
  { name: 'Array / String .at()',              fn: testAtMethod },
  { name: 'Object.hasOwn()',                   fn: testObjectHasOwn },
  { name: 'Error Cause',                       fn: testErrorCause },
  { name: 'RegExp /d flag（匹配索引）',         fn: testRegExpDFlag },
  { name: 'Top-level await',                   fn: testTopLevelAwait },
]

const suites2025 = [
  { name: 'Iterator Helpers',                      fn: testIteratorHelpers },
  { name: 'New Set Methods',                       fn: testSetMethods },
  { name: 'Promise.try',                           fn: testPromiseTry },
  { name: 'RegExp Duplicate Named Capture Groups', fn: testRegExpDuplicateGroups },
  { name: 'Uint8Array Base64 / Hex',               fn: testUint8ArrayBase64Hex },
  { name: 'JSON.parse Source Text Access',         fn: testJsonParseSource },
  { name: 'Error.isError',                         fn: testErrorIsError },
  { name: 'Float16Array',                          fn: testFloat16Array },
]

const suites2026 = [
  { name: 'Math.sumPrecise()',              fn: testMathSumPrecise },
  { name: 'RegExp.escape()',               fn: testRegExpEscape },
  { name: 'Explicit Resource Management', fn: testExplicitResourceManagement },
  { name: 'Atomics.pause()',              fn: testAtomicsPause },
  { name: 'Import Attributes',            fn: testImportAttributes },
]

// ── 核心运行函数 ──────────────────────────────────────────────────────────────

async function runSuites(suites) {
  const allResults = []
  for (const suite of suites) {
    const results = await suite.fn()
    allResults.push(...results)
  }
  return allResults
}

/** 运行 ES2015 测试 */
export async function runAll2015() { return runSuites(suites2015) }

/** 运行 ES2022 测试 */
export async function runAll2022() { return runSuites(suites2022) }

/** 运行 ES2025 测试 */
export async function runAll2025() { return runSuites(suites2025) }

/** 运行 ES2026 测试 */
export async function runAll2026() { return runSuites(suites2026) }

/** 运行全部测试（所有版本） */
export async function runAll() {
  return runSuites([...suites2015, ...suites2022, ...suites2025, ...suites2026])
}

/** 运行全部测试并分版本打印结果 */
export async function runAndPrint() {
  for (const [label, fn] of [
    ['ES2015', runAll2015],
    ['ES2022', runAll2022],
    ['ES2025', runAll2025],
    ['ES2026', runAll2026],
  ]) {
    console.log(`\n=== ${label} 特性测试 ===\n`)
    printResults(await fn())
  }
}

// ── 按版本导出各测试函数 ─────────────────────────────────────────────────────

// ES2015
export {
  testLetConst, testArrowFunctions, testTemplateLiterals, testDestructuring,
  testDefaultRestSpread, testClasses, testPromises, testSymbols,
  testIteratorsGenerators, testMapSet, testProxyReflect, testEnhancedObjects,
  testNewMethods, testModules, testBinaryOctalUnicode, testForOf, testMapGetOrInsert,
}

// ES2022
export {
  testClassFields, testClassStaticBlocks, testAtMethod,
  testObjectHasOwn, testErrorCause, testRegExpDFlag, testTopLevelAwait,
}

// ES2025
export {
  testIteratorHelpers, testSetMethods, testPromiseTry, testRegExpDuplicateGroups,
  testUint8ArrayBase64Hex, testJsonParseSource, testErrorIsError, testFloat16Array,
}

// ES2026
export {
  testMathSumPrecise, testRegExpEscape, testExplicitResourceManagement,
  testAtomicsPause, testImportAttributes,
}
