/**
 * validate-main.js —— npm 包校验入口
 *
 * 通过 ESM 命名导入使用 kn-es-features，校验以下内容：
 *   1. 包的 ESM 导出路径可正常解析
 *   2. runAll2015 / runAll2022 / runAll2025 / runAll2026 函数均可调用
 *   3. 返回结果符合预期格式 [{ suite, case, status, error? }]
 */


// import 'kn-es-features/polyfills' // 运行时 API 补丁（如 Promise、Symbol）由消费方引入
import { runAll2015, runAll2022, runAll2025, runAll2026 } from 'kn-es-features'

/* ── 版本配置 ───────────────────────────────────────────────────── */
const VERSIONS = [
  { key: '2015', run: () => runAll2015() },
  { key: '2022', run: () => runAll2022() },
  { key: '2025', run: () => runAll2025() },
  { key: '2026', run: () => runAll2026() },
]

/* ── DOM 引用 ────────────────────────────────────────────────────── */
const btnRun   = document.getElementById('btn-run')
const tabs     = document.querySelectorAll('.tab')

/* ── Tab 切换 ────────────────────────────────────────────────────── */
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('tab--active'))
    tab.classList.add('tab--active')
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('panel--active'))
    document.getElementById(tab.dataset.panel).classList.add('panel--active')
  })
})

/* ── 工具函数 ────────────────────────────────────────────────────── */

function escape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function groupBySuite(results) {
  const suites = []
  const map = Object.create(null)
  results.forEach(r => {
    if (!map[r.suite]) {
      const s = { name: r.suite, cases: [] }
      map[r.suite] = s
      suites.push(s)
    }
    map[r.suite].cases.push(r)
  })
  return suites
}

function calcStats(results) {
  let pass = 0, fail = 0
  results.forEach(r => r.status === 'pass' ? pass++ : fail++)
  return { pass, fail, total: results.length }
}

/* ── 渲染函数 ────────────────────────────────────────────────────── */

function renderCase(c) {
  const li = document.createElement('li')
  li.className = 'case case--' + c.status

  const icon = document.createElement('span')
  icon.className = 'case__icon'
  icon.textContent = c.status === 'pass' ? '✓' : '✗'

  const body = document.createElement('span')
  body.className = 'case__body'

  const name = document.createElement('span')
  name.className = 'case__name'
  name.textContent = c.case
  body.appendChild(name)

  if (c.error) {
    const err = document.createElement('span')
    err.className = 'case__error'
    err.textContent = c.error
    body.appendChild(err)
  }

  li.appendChild(icon)
  li.appendChild(body)
  return li
}

function renderSuite(suite) {
  let pass = 0, fail = 0
  suite.cases.forEach(c => c.status === 'pass' ? pass++ : fail++)
  const stateKey = fail === 0 ? 'pass' : 'fail'

  const card = document.createElement('div')
  card.className = 'suite'

  const header = document.createElement('div')
  header.className = 'suite__header'
  header.innerHTML =
    '<div class="suite__header-left">' +
      '<span class="suite__indicator suite__indicator--' + stateKey + '"></span>' +
      '<span class="suite__name">' + escape(suite.name) + '</span>' +
    '</div>' +
    '<div class="suite__header-right">' +
      '<span class="suite__stat suite__stat--' + stateKey + '">' +
        pass + ' / ' + suite.cases.length +
      '</span>' +
      '<span class="suite__chevron">▾</span>' +
    '</div>'

  header.addEventListener('click', () => card.classList.toggle('suite--collapsed'))

  const ul = document.createElement('ul')
  ul.className = 'suite__cases'
  suite.cases.forEach(c => ul.appendChild(renderCase(c)))

  card.appendChild(header)
  card.appendChild(ul)
  return card
}

function showLoader(panel) {
  panel.innerHTML =
    '<div class="loader">' +
      '<span class="loader__spinner"></span>' +
      '<span>正在运行测试…</span>' +
    '</div>'
}

function renderPanel(panel, results) {
  panel.innerHTML = ''
  if (!results || results.length === 0) {
    panel.innerHTML =
      '<div class="placeholder">' +
        '<span class="placeholder__icon">📭</span>' +
        '<p class="placeholder__text">暂无测试结果</p>' +
      '</div>'
    return
  }
  const frag = document.createDocumentFragment()
  groupBySuite(results).forEach(s => frag.appendChild(renderSuite(s)))
  panel.appendChild(frag)
}

function updateSummaryValue(id, stats) {
  const el = document.getElementById('val-' + id)
  if (!el) return
  if (!stats) { el.textContent = '—'; el.className = 'summary__value'; return }
  el.textContent = stats.pass + ' / ' + stats.total
  el.className = 'summary__value summary__value--' + (stats.fail === 0 ? 'pass' : 'fail')
}

function updateTabBadge(id, stats) {
  const el = document.getElementById('badge-' + id)
  if (!el) return
  if (!stats) { el.textContent = ''; el.className = 'tab__badge'; return }
  if (stats.fail === 0) {
    el.textContent = '全部通过'
    el.className = 'tab__badge tab__badge--pass'
  } else {
    el.textContent = stats.fail + ' 失败'
    el.className = 'tab__badge tab__badge--fail'
  }
}

/* ── 主运行流程 ──────────────────────────────────────────────────── */
async function runTests() {
  btnRun.disabled = true
  btnRun.classList.add('btn-run--running')
  btnRun.querySelector('.btn-run__label').textContent = '运行中…'

  VERSIONS.forEach(v => {
    updateSummaryValue(v.key, null)
    updateTabBadge(v.key, null)
    showLoader(document.getElementById('panel-' + v.key))
  })
  updateSummaryValue('total', null)

  try {
    const resultSets = await Promise.all(VERSIONS.map(v => v.run()))

    let totalPass = 0, totalFail = 0, totalCount = 0

    VERSIONS.forEach((v, i) => {
      const results = resultSets[i]
      const stats = calcStats(results)
      renderPanel(document.getElementById('panel-' + v.key), results)
      updateSummaryValue(v.key, stats)
      updateTabBadge(v.key, stats)
      totalPass += stats.pass
      totalFail += stats.fail
      totalCount += stats.total
    })

    updateSummaryValue('total', { pass: totalPass, fail: totalFail, total: totalCount })

  } catch (err) {
    VERSIONS.forEach(v => {
      const panel = document.getElementById('panel-' + v.key)
      if (panel) {
        panel.innerHTML =
          '<div class="placeholder">' +
            '<span class="placeholder__icon">⚠️</span>' +
            '<p class="placeholder__text">运行出错：' + escape(err.message) + '</p>' +
          '</div>'
      }
    })
    console.error('[kn-es-features 校验]', err)
  }

  btnRun.disabled = false
  btnRun.classList.remove('btn-run--running')
  btnRun.querySelector('.btn-run__label').textContent = '重新运行'
}

btnRun.addEventListener('click', runTests)
