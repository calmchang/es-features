(function () {
  'use strict'

  /* ── 版本配置（数据驱动，新增版本只需加这里）─────────────────── */
  const VERSIONS = [
    { key: '2015', run: function () { return EsFeatures.runAll2015() } },
    { key: '2022', run: function () { return EsFeatures.runAll2022() } },
    { key: '2025', run: function () { return EsFeatures.runAll2025() } },
    { key: '2026', run: function () { return EsFeatures.runAll2026() } },
  ]

  /* ── DOM 引用 ────────────────────────────────────────────────────── */
  const btnRun   = document.getElementById('btn-run')
  const valTotal = document.getElementById('val-total')
  const tabs     = document.querySelectorAll('.tab')

  /* ── Tab 切换 ────────────────────────────────────────────────────── */
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('tab--active') })
      tab.classList.add('tab--active')
      document.querySelectorAll('.panel').forEach(function (p) {
        p.classList.remove('panel--active')
      })
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
    const map    = Object.create(null)
    results.forEach(function (r) {
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
    results.forEach(function (r) { r.status === 'pass' ? pass++ : fail++ })
    return { pass: pass, fail: fail, total: results.length }
  }

  /* ── 渲染函数 ────────────────────────────────────────────────────── */

  function renderCase(c) {
    const li   = document.createElement('li')
    li.className = 'case case--' + c.status

    const icon = document.createElement('span')
    icon.className  = 'case__icon'
    icon.textContent = c.status === 'pass' ? '✓' : '✗'

    const body = document.createElement('span')
    body.className = 'case__body'

    const name = document.createElement('span')
    name.className  = 'case__name'
    name.textContent = c.case
    body.appendChild(name)

    if (c.error) {
      const err = document.createElement('span')
      err.className  = 'case__error'
      err.textContent = c.error
      body.appendChild(err)
    }

    li.appendChild(icon)
    li.appendChild(body)
    return li
  }

  function renderSuite(suite) {
    let pass = 0, fail = 0
    suite.cases.forEach(function (c) { c.status === 'pass' ? pass++ : fail++ })
    const allPass  = fail === 0
    const stateKey = allPass ? 'pass' : 'fail'

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

    header.addEventListener('click', function () {
      card.classList.toggle('suite--collapsed')
    })

    const ul = document.createElement('ul')
    ul.className = 'suite__cases'
    suite.cases.forEach(function (c) { ul.appendChild(renderCase(c)) })

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
    groupBySuite(results).forEach(function (s) { frag.appendChild(renderSuite(s)) })
    panel.appendChild(frag)
  }

  function updateSummaryValue(id, stats) {
    const el = document.getElementById('val-' + id)
    if (!el) return
    if (!stats) { el.textContent = '—'; el.className = 'summary__value'; return }
    el.textContent = stats.pass + ' / ' + stats.total
    el.className   = 'summary__value summary__value--' + (stats.fail === 0 ? 'pass' : 'fail')
  }

  function updateTabBadge(id, stats) {
    const el = document.getElementById('badge-' + id)
    if (!el) return
    if (!stats) { el.textContent = ''; el.className = 'tab__badge'; return }
    if (stats.fail === 0) {
      el.textContent = '全部通过'
      el.className   = 'tab__badge tab__badge--pass'
    } else {
      el.textContent = stats.fail + ' 失败'
      el.className   = 'tab__badge tab__badge--fail'
    }
  }

  /* ── 主运行流程 ──────────────────────────────────────────────────── */
  async function runTests() {
    btnRun.disabled = true
    btnRun.classList.add('btn-run--running')
    btnRun.querySelector('.btn-run__label').textContent = '运行中…'

    // 重置统计
    VERSIONS.forEach(function (v) {
      updateSummaryValue(v.key, null)
      updateTabBadge(v.key, null)
      showLoader(document.getElementById('panel-' + v.key))
    })
    updateSummaryValue('total', null)

    try {
      // 并行运行所有版本
      const resultSets = await Promise.all(
        VERSIONS.map(function (v) { return v.run() })
      )

      let totalPass = 0, totalFail = 0, totalCount = 0

      VERSIONS.forEach(function (v, i) {
        const results = resultSets[i]
        const stats   = calcStats(results)
        renderPanel(document.getElementById('panel-' + v.key), results)
        updateSummaryValue(v.key, stats)
        updateTabBadge(v.key, stats)
        totalPass  += stats.pass
        totalFail  += stats.fail
        totalCount += stats.total
      })

      updateSummaryValue('total', {
        pass: totalPass, fail: totalFail, total: totalCount
      })

    } catch (err) {
      VERSIONS.forEach(function (v) {
        const panel = document.getElementById('panel-' + v.key)
        if (panel) {
          panel.innerHTML =
            '<div class="placeholder">' +
              '<span class="placeholder__icon">⚠️</span>' +
              '<p class="placeholder__text">运行出错：' + escape(err.message) + '</p>' +
            '</div>'
        }
      })
      console.error('[ES 测试]', err)
    }

    btnRun.disabled = false
    btnRun.classList.remove('btn-run--running')
    btnRun.querySelector('.btn-run__label').textContent = '重新运行'
  }

  btnRun.addEventListener('click', runTests)
})()
