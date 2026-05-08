/**
 * 创建测试用例运行器
 * @param {string} suiteName - 测试套件名称
 * @returns {{ test, getResults }}
 */
export function createSuite(suiteName) {
  const results = []

  function test(caseName, fn) {
    try {
      const result = fn()
      if (result instanceof Promise) {
        return result
          .then(() => {
            results.push({ suite: suiteName, case: caseName, status: 'pass' })
          })
          .catch((err) => {
            results.push({ suite: suiteName, case: caseName, status: 'fail', error: err.message })
          })
      }
      results.push({ suite: suiteName, case: caseName, status: 'pass' })
    } catch (err) {
      results.push({ suite: suiteName, case: caseName, status: 'fail', error: err.message })
    }
  }

  function assert(condition, msg) {
    if (!condition) throw new Error(msg || '断言失败')
  }

  function getResults() {
    return results
  }

  return { test, assert, getResults }
}

/**
 * 打印测试结果到控制台
 * @param {Array} results
 */
export function printResults(results) {
  let pass = 0
  let fail = 0
  results.forEach((r) => {
    if (r.status === 'pass') {
      pass++
      console.log(`  ✓ [${r.suite}] ${r.case}`)
    } else {
      fail++
      console.error(`  ✗ [${r.suite}] ${r.case} — ${r.error}`)
    }
  })
  console.log(`\n共 ${results.length} 项，通过 ${pass}，失败 ${fail}`)
}
