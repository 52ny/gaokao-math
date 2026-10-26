/* 拾阶 · 高三数学刷题站 —— 应用主逻辑 */
(function () {
  'use strict';

  /* ================= 数据整理 ================= */
  var KD = window.GK_KNOWLEDGE || { chapters: [], points: [] };
  var CH = (KD.chapters || []).slice().sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
  var KP = KD.points || [];
  var CHMAP = {}, KMAP = {};
  CH.forEach(function (c) { CHMAP[c.id] = c; });
  KP.forEach(function (k) {
    KMAP[k.id] = k;
    if (window.GK_METHODS && window.GK_METHODS[k.id]) k.methods = window.GK_METHODS[k.id];
  });

  var EXTP = [];
  try {
    var ex = JSON.parse(localStorage.getItem('gk.ext.v1') || '[]');
    if (Array.isArray(ex)) EXTP = ex.filter(function (p) {
      return p && p.id && Array.isArray(p.questions) && p.questions.length;
    }).map(function (p) {
      p.kind = 'ext'; p.year = p.year || 0; p.region = p.region || '外部题库';
      p.title = p.title || p.id; p.short = p.short || p.title;
      return p;
    });
  } catch (e) { EXTP = []; }

  var PAPERS = ((window.GK_PAPERS || []).concat(EXTP)).sort(function (a, b) {
    if (a.year !== b.year) return b.year - a.year;
    return String(a.id).localeCompare(String(b.id));
  });
  PAPERS.forEach(function (p) {
    p.questions = (p.questions || []).slice().sort(function (a, b) { return a.no - b.no; });
    p.total = p.questions.reduce(function (s, q) { return s + (q.score || 0); }, 0);
    p.archive = p.kind === 'real' && (p.year || 0) < 2024;
    p.questions.forEach(function (q) {
      q.paperId = p.id;
      q.qid = p.id + '-' + q.no;
      q.year = p.year;
      q.region = p.region;
      q.kind = p.kind;
      q.archive = p.archive;
      q.source = p.short + ' · 第 ' + q.no + ' 题' + (p.kind === 'mock' ? '（模拟）' : '');
      q.paperTitle = p.title;
      q.isQ19 = p.year >= 2024 && q.no === 19;
    });
  });

  var QS = [];
  PAPERS.forEach(function (p) { p.questions.forEach(function (q) { QS.push(q); }); });

  var Q19_EXTRA = (window.GK_Q19_EXTRA || []).map(function (q, i) {
    q.qid = q.id || ('q19-extra-' + i);
    q.paperId = 'q19';
    q.year = q.year || 0;
    q.region = q.region || '第19题专项';
    q.kind = 'q19';
    q.no = 19;
    q.isQ19 = true;
    q.isExtra = true;
    q.source = q.source || '第19题专项 · 优质压轴题';
    q.paperTitle = '第19题专项训练';
    return q;
  });
  Q19_EXTRA.forEach(function (q) { QS.push(q); });

  var DRILL = (window.GK_DRILL || []).map(function (q, i) {
    q.qid = q.id || ('drill-' + i);
    q.paperId = 'drill';
    q.year = 0;
    q.region = '知识点母题';
    q.kind = 'drill';
    q.no = i + 1;
    q.isQ19 = false;
    q.drill = true;
    var k0 = KMAP[(q.knowledge || [])[0]];
    q.source = '知识点母题 · ' + (k0 ? k0.title : '综合');
    q.paperTitle = '知识点母题集';
    return q;
  });
  DRILL.forEach(function (q) { QS.push(q); });

  var QMAP = {};
  QS.forEach(function (q) { QMAP[q.qid] = q; });
  var Q19_ALL = QS.filter(function (q) { return q.isQ19; }).sort(function (a, b) {
    if (a.kind === 'real' && b.kind !== 'real') return -1;
    if (b.kind === 'real' && a.kind !== 'real') return 1;
    return (b.year || 0) - (a.year || 0);
  });

  function pointsOfChapter(cid) { return KP.filter(function (k) { return k.chapter === cid; }); }
  function knowledgeOf(q) {
    return (q.knowledge || []).map(function (id) { return KMAP[id]; }).filter(Boolean);
  }
  function questionsOfKnowledge(kid) {
    return QS.filter(function (q) { return (q.knowledge || []).indexOf(kid) >= 0; });
  }
  function questionsOfChapter(cid) {
    var ids = pointsOfChapter(cid).map(function (k) { return k.id; });
    return QS.filter(function (q) {
      return (q.knowledge || []).some(function (k) { return ids.indexOf(k) >= 0; });
    });
  }
  function isMock(q) { return q.kind === 'mock' || q.kind === 'q19'; }

  /* ================= 本地状态 ================= */
  var KEY = 'gk.state.v1';
  var state = { attempts: {}, fav: {}, theme: 'light', examDate: '2027-06-07', pomo: { focus: 25, short: 5, long: 15 }, papers: {} };
  try {
    var raw = JSON.parse(localStorage.getItem(KEY) || '{}');
    Object.keys(raw || {}).forEach(function (k) { state[k] = raw[k]; });
    if (!state.attempts) state.attempts = {};
    if (!state.fav) state.fav = {};
    if (!state.papers) state.papers = {};
    if (!state.pomo) state.pomo = { focus: 25, short: 5, long: 15 };
  } catch (e) { /* 忽略损坏状态 */ }

  var saveTimer = null;
  function saveState() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () {
      try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* 空间不足 */ }
    }, 160);
  }
  function attempt(qid) { return state.attempts[qid] || null; }
  function isSolved(a) { return a && (a.status === 'correct' || a.status === 'selfA'); }

  /* 学习时间：gk.time.v1 */
  var TKEY = 'gk.time.v1';
  var timeData = { days: {}, logs: [] };
  try {
    var tRaw = JSON.parse(localStorage.getItem(TKEY) || '{}');
    if (tRaw && tRaw.days) timeData = tRaw;
    if (!timeData.logs) timeData.logs = [];
  } catch (e) { /* ignore */ }
  var timeSaveTimer = null;
  function saveTime() {
    clearTimeout(timeSaveTimer);
    timeSaveTimer = setTimeout(function () {
      try { localStorage.setItem(TKEY, JSON.stringify(timeData)); } catch (e) { /* ignore */ }
    }, 4000);
  }
  function dayKey(d) {
    d = d || new Date();
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day;
  }
  function dayRec(key) {
    key = key || dayKey();
    if (!timeData.days[key]) timeData.days[key] = { focus: 0, online: 0, pomos: 0 };
    return timeData.days[key];
  }
  function addOnline(sec) {
    var r = dayRec();
    r.online += sec;
    timeData.lastActive = Date.now();
    saveTime();
  }
  function addFocus(sec, pomo) {
    var r = dayRec();
    r.focus += sec;
    if (pomo) r.pomos += 1;
    saveTime();
  }
  function fmtMin(sec) {
    sec = Math.round(sec || 0);
    if (sec <= 0) return '0 分钟';
    if (sec < 60) return sec + ' 秒';
    var m = Math.round(sec / 60);
    if (m < 60) return m + ' 分钟';
    return (m / 60).toFixed(m % 60 ? 1 : 0) + ' 小时';
  }
  function fmtHMS(sec) {
    sec = Math.max(0, Math.round(sec));
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    if (h > 0) return h + ':' + (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  /* ================= 基础工具 ================= */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function mathify(s) { return String(s == null ? '' : s).replace(/@/g, '\\').replace(/§/g, '\\\\'); }
  function rich(s) { return esc(mathify(s)); }
  function plain(s) { return String(s == null ? '' : s).replace(/@/g, '\\').replace(/§/g, '\\\\').replace(/\$/g, ''); }
  function renderMath(el) {
    if (!window.renderMathInElement || !el) return;
    try {
      window.renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false,
        strict: false
      });
    } catch (e) { /* 单条公式失败不影响整页 */ }
  }
  function mdToHtml(src) {
    var text = esc(mathify(src)).replace(/\r\n/g, '\n');
    var lines = text.split('\n');
    var out = [];
    var list = null;
    function closeList() { if (list) { out.push('</' + list + '>'); list = null; } }
    lines.forEach(function (line) {
      var t = line.trim();
      if (!t) { closeList(); return; }
      var m;
      if ((m = t.match(/^(#{1,4})\s+(.*)$/))) {
        closeList();
        var lv = m[1].length <= 2 ? 3 : 4;
        out.push('<h' + lv + '>' + inline(m[2]) + '</h' + lv + '>');
        return;
      }
      if ((m = t.match(/^[-*]\s+(.*)$/))) {
        if (list !== 'ul') { closeList(); out.push('<ul>'); list = 'ul'; }
        out.push('<li>' + inline(m[1]) + '</li>');
        return;
      }
      if ((m = t.match(/^\d+[.)]\s+(.*)$/))) {
        if (list !== 'ol') { closeList(); out.push('<ol>'); list = 'ol'; }
        out.push('<li>' + inline(m[1]) + '</li>');
        return;
      }
      closeList();
      out.push('<p>' + inline(t) + '</p>');
    });
    closeList();
    return out.join('');
  }
  function inline(s) {
    return s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/`([^`]+)`/g, '<code>$1</code>');
  }
  function toast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(t._timer);
    t._timer = setTimeout(function () { t.hidden = true; }, 2600);
  }
  function scrollTop() { window.scrollTo(0, 0); }
  function beep() {
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      var ctx = new AC();
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.value = 880; o.type = 'sine';
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.16, ctx.currentTime + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.9);
      o.start(); o.stop(ctx.currentTime + 0.95);
    } catch (e) { /* 浏览器限制音频 */ }
  }

  /* ================= 判分 ================= */
  function latexToPlain(s) {
    var t = plain(s);
    t = t.replace(/\\left|\\right|\\displaystyle|\\,|\\;|\\!|\\ /g, '');
    t = t.replace(/\\frac\s*\{([^{}]+)\}\s*\{([^{}]+)\}/g, '($1)/($2)');
    t = t.replace(/\\dfrac\s*\{([^{}]+)\}\s*\{([^{}]+)\}/g, '($1)/($2)');
    t = t.replace(/\\sqrt\s*\{([^{}]+)\}/g, 'sqrt($1)');
    t = t.replace(/\\pi/g, 'pi');
    t = t.replace(/\\times|\\cdot/g, '*');
    t = t.replace(/\\div/g, '/');
    t = t.replace(/\\pm/g, '±');
    t = t.replace(/\\ge/g, '>=').replace(/\\le/g, '<=');
    t = t.replace(/[{}]/g, '');
    return t;
  }
  function norm(s) {
    return latexToPlain(s).toLowerCase()
      .replace(/\s+/g, '')
      .replace(/\$/g, '')
      .replace(/（/g, '(').replace(/）/g, ')')
      .replace(/,/g, '')
      .replace(/−/g, '-')
      .replace(/π/g, 'pi')
      .replace(/\\infty/g, 'inf')
      .replace(/sqrt\(([^()]*)\)/g, 'sqrt$1');
  }
  function numericValue(s) {
    var t = norm(s).replace(/^\((.*)\)$/, '$1');
    var m = t.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
    if (m) return parseFloat(m[1]) / parseFloat(m[2]);
    if (/^-?\d+(\.\d+)?$/.test(t)) return parseFloat(t);
    var m2 = t.match(/^(-?\d*\.?\d*)sqrt(\d+(?:\.\d+)?)$/);
    if (m2) {
      var c = m2[1] === '' ? 1 : (m2[1] === '-' ? -1 : parseFloat(m2[1]));
      return c * Math.sqrt(parseFloat(m2[2]));
    }
    return NaN;
  }
  function sameNumber(a, b) {
    var x = numericValue(a), y = numericValue(b);
    if (isNaN(x) || isNaN(y)) return false;
    return Math.abs(x - y) < 1e-6;
  }
  function grade(q, input) {
    if (input == null || String(input).trim() === '') return 'wrong';
    if (q.type === 'single') {
      return String(input).trim().toUpperCase() === String(q.answer).trim().toUpperCase() ? 'correct' : 'wrong';
    }
    if (q.type === 'multiple') {
      var a = String(input).toUpperCase().split('').filter(function (c) { return /A-Z/.test(c); }).sort().join('');
      var ans = String(q.answer).toUpperCase().split('').filter(function (c) { return /A-Z/.test(c); }).sort().join('');
      if (a === ans) return 'correct';
      if (a && ans.indexOf(a) >= 0 && a.length < ans.length) return 'partial';
      return 'wrong';
    }
    if (q.type === 'fill') {
      var u = norm(input), target = norm(q.answer);
      if (u === target) return 'correct';
      if (sameNumber(u, target)) return 'correct';
      var acc = (q.accept || []);
      for (var i = 0; i < acc.length; i++) {
        var v = norm(acc[i]);
        if (u === v || sameNumber(u, v)) return 'correct';
      }
      return 'wrong';
    }
    return 'wrong';
  }
  function selfStatus(v) { return v === 'A' ? 'selfA' : v === 'B' ? 'selfB' : 'selfC'; }
  function statusText(a) {
    if (!a) return '未做';
    return { correct: '正确', partial: '部分正确', wrong: '错误', selfA: '自评：会', selfB: '自评：半懂', selfC: '自评：不会', attempted: '已作答' }[a.status] || '已作答';
  }
  function statusClass(a) {
    if (!a) return '';
    if (a.status === 'correct' || a.status === 'selfA') return 'ok';
    if (a.status === 'partial' || a.status === 'selfB' || a.status === 'attempted') return 'warn';
    return 'err';
  }
  function isWrong(a) { return a && (a.status === 'wrong' || a.status === 'partial' || a.status === 'selfB' || a.status === 'selfC'); }

  function setAttempt(qid, patch) {
    var old = state.attempts[qid] || {};
    Object.keys(patch).forEach(function (k) { old[k] = patch[k]; });
    old.ts = Date.now();
    state.attempts[qid] = old;
    saveState();
  }

  /* ================= 进度统计 ================= */
  function progress() {
    var real = QS.filter(function (q) { return q.kind === 'real'; });
    var done = 0, right = 0, wrong = 0, tried = 0;
    real.forEach(function (q) {
      var a = attempt(q.qid);
      if (a) tried++;
      if (isSolved(a)) right++;
      if (isWrong(a)) wrong++;
      if (isSolved(a)) done++;
    });
    var kDone = KP.filter(function (k) {
      return questionsOfKnowledge(k.id).some(function (q) { return isSolved(attempt(q.qid)); });
    }).length;
    return {
      total: real.length, tried: tried, right: right, wrong: wrong, kDone: kDone,
      pct: real.length ? Math.round(right / real.length * 100) : 0
    };
  }
  function paperStat(p) {
    var rec = state.papers[p.id] || {};
    var answers = rec.answers || {};
    var answered = p.questions.filter(function (q) { return answers[q.no] != null && String(answers[q.no]).trim() !== ''; }).length;
    var correct = 0;
    p.questions.forEach(function (q) {
      var a = attempt(q.qid);
      if (a && (a.status === 'correct' || a.status === 'selfA')) correct++;
    });
    return { answered: answered, total: p.questions.length, correct: correct, submitted: !!rec.submitted, score: rec.score };
  }
  function streak() {
    var n = 0, d = new Date();
    for (var i = 0; i < 400; i++) {
      var r = timeData.days[dayKey(d)];
      if (r && (r.focus > 0 || r.online > 60)) { n++; d.setDate(d.getDate() - 1); }
      else break;
    }
    return n;
  }
  function daysToExam() {
    var now = new Date(); now.setHours(0, 0, 0, 0);
    var t = new Date((state.examDate || '2027-06-07') + 'T00:00:00');
    if (isNaN(t.getTime())) t = new Date('2027-06-07T00:00:00');
    var diff = Math.ceil((t - now) / 86400000);
    return diff;
  }

  /* ================= 组件 HTML ================= */
  function typeLabel(t) { return { single: '单选', multiple: '多选', fill: '填空', solve: '解答' }[t] || t; }
  function diffDots(n) {
    var s = '';
    for (var i = 1; i <= 5; i++) s += i <= n ? '●' : '○';
    return '<span class="diff" title="难度 ' + n + '/5">' + s + '</span>';
  }
  function knChips(q) {
    return knowledgeOf(q).map(function (k) {
      return '<a class="badge" href="#/point/' + k.id + '">' + esc(k.title) + '</a>';
    }).join('');
  }
  function qMeta(q) {
    return '<span class="badge type">' + typeLabel(q.type) + '</span>' +
      '<span class="badge src">' + esc(q.source) + '</span>' +
      diffDots(q.difficulty || 3) +
      '<span class="badge">' + (q.score || 0) + ' 分</span>';
  }
  function selfCheckHtml(qid, current) {
    return '<div class="self-check" data-qid="' + qid + '"><span class="small muted" style="align-self:center">自评：</span>' +
      [['A', '会了'], ['B', '半懂'], ['C', '不会']].map(function (it) {
        return '<button data-act="self" data-qid="' + qid + '" data-val="' + it[0] + '"' + (current === selfStatus(it[0]) ? ' class="on"' : '') + '>' + it[1] + '</button>';
      }).join('') + '</div>';
  }
  function solutionHtml(q) {
    var steps = (q.solution || []).map(function (s, i) {
      return '<div class="sol-step"><span class="n">' + (i + 1) + '</span><div>' + rich(s) + '</div></div>';
    }).join('');
    return '<div class="solution" data-role="solution">' +
      '<h4>参考解析</h4>' + (steps || '<p class="muted small">暂无分步解析。</p>') +
      '<div class="answer-final"><b>参考答案：</b>' + rich(q.answer) + '</div></div>';
  }
  function hintsHtml(q) {
    return '<div class="hint-box" data-role="hint" hidden><b>提示阶梯</b><ol>' +
      (q.hints || []).map(function (h) { return '<li>' + rich(h) + '</li>'; }).join('') + '</ol></div>';
  }
  function rewardHtml(q) {
    if (!q.takeaway) return '';
    return '<div class="reward"><div class="r-title">练有所获 · 带走这一条</div><p>' + rich(q.takeaway) + '</p></div>';
  }
  function localDiagnosisHtml(q) {
    var kn = knowledgeOf(q);
    return '<div class="kcard" style="margin-top:12px">' +
      '<div class="k-label">卡壳诊断 · 本地</div>' +
      '<h3 style="margin:4px 0 6px">先分清：知识点层缺什么，真题层卡在哪</h3>' +
      (kn.length ? '<div class="k-section"><div class="k-label">知识点层（先补这些）</div><ul class="k-list">' +
        kn.map(function (k) { return '<li><a href="#/point/' + k.id + '">' + esc(k.title) + '</a>：' + rich(k.summary) + '</li>'; }).join('') + '</ul></div>' : '') +
      '<div class="k-section"><div class="k-label">真题层（这道题的入口）</div><ol class="k-list">' +
      (q.hints || []).map(function (h) { return '<li>' + rich(h) + '</li>'; }).join('') + '</ol></div>' +
      ((q.pitfalls || []).length ? '<div class="k-section"><div class="k-label">常见陷阱</div><ul class="pitfall-list">' + q.pitfalls.map(function (p) { return '<li>' + rich(p) + '</li>'; }).join('') + '</ul></div>' : '') +
      '</div>';
  }
  function feedbackHtml(q, a) {
    if (!a || !a.status) return '';
    var html = '';
    if (a.status === 'correct') html = '<div class="fb ok"><span>✓</span><div><b>答案正确。</b>别急着跳过——用自己的话复述关键一步，再对照解析检查有没有“蒙对”。</div></div>';
    else if (a.status === 'partial') html = '<div class="fb warn"><span>!</span><div><b>部分正确。</b>多选漏选了，先定位漏掉的那个选项对应哪个知识点。</div></div>';
    else if (a.status === 'wrong') html = '<div class="fb err"><span>×</span><div><b>答案不对。</b>数学答案可能只是形式不同，请对照解析确认；确实错了就自动进入错题本。</div></div>';
    else if (a.status === 'selfA') html = '<div class="fb ok"><span>✓</span><div><b>已自评“会了”。</b>隔 3 天回来重做一遍，确认不是“看懂了”。</div></div>';
    else if (a.status === 'selfB') html = '<div class="fb warn"><span>!</span><div><b>自评“半懂”。</b>把卡住的那一步抄下来，再让 AI 针对你的步骤分析。</div></div>';
    else if (a.status === 'selfC') html = '<div class="fb err"><span>×</span><div><b>自评“不会”。</b>先看知识点层，再看提示阶梯，最后才看解析。</div></div>';
    else if (a.status === 'attempted') html = '<div class="fb"><span>…</span><div>解答已保存。可以自评，或让 AI 批改你的步骤。</div></div>';
    return html;
  }
  function aiPanelHtml(q) {
    return '<div class="ai-panel">' +
      '<div class="ai-head"><span class="ai-dot"></span><b>AI 卡壳分析</b><span class="small">知识点层 / 真题层分开讲</span></div>' +
      '<div class="ai-body">' +
      '<textarea class="textarea" id="ai-work-' + q.qid + '" placeholder="写下你的思路或卡点：想到哪一步卡住？哪条公式不确定？（可留空，表示完全没思路）"></textarea>' +
      '<div class="ai-typ"><span>概念不清</span><span>方法选错</span><span>计算失误</span><span>审题偏差</span></div>' +
      '<div class="btn-row" style="margin-top:8px"><button class="btn sm primary" data-act="ai-run" data-qid="' + q.qid + '">分析我的思路</button>' +
      '<button class="btn sm ghost" data-act="ai-grade" data-qid="' + q.qid + '">AI 批改我的解答</button>' +
      '<span class="small muted">未配置 Key 时使用内置免费智能体</span></div>' +
      '<div class="ai-output" id="ai-out-' + q.qid + '"></div>' +
      '<div class="ai-meta" id="ai-meta-' + q.qid + '"></div>' +
      '</div></div>';
  }

  function emptyHtml(text) { return '<div class="empty">' + text + '</div>'; }
  function pageHead(eyebrow, title, lede, crumbs) {
    return '<div class="page-head">' +
      (crumbs ? '<div class="crumbs">' + crumbs + '</div>' : '') +
      (eyebrow ? '<div class="eyebrow">' + eyebrow + '</div>' : '') +
      '<h1>' + title + '</h1>' +
      (lede ? '<p class="lede">' + lede + '</p>' : '') + '</div>';
  }
  function pctOf(a, b) { return b ? Math.round(a / b * 100) : 0; }

  /* ================= 番茄钟 ================= */
  var PKEY = 'gk.pomo.v1';
  var pomo = { mode: 'focus', remain: 25 * 60, running: false, endAt: 0, cycles: 0 };
  try {
    var pRaw = JSON.parse(localStorage.getItem(PKEY) || '{}');
    Object.keys(pRaw || {}).forEach(function (k) { pomo[k] = pRaw[k]; });
  } catch (e) { /* ignore */ }
  function pomoSave() { try { localStorage.setItem(PKEY, JSON.stringify(pomo)); } catch (e) { /* ignore */ } }
  function pomoDuration(mode) {
    var m = mode || pomo.mode;
    var mins = state.pomo[m] || { focus: 25, short: 5, long: 15 }[m] || 25;
    return Math.max(1, mins) * 60;
  }
  function pomoRemain() {
    if (!pomo.running || !pomo.endAt) return Math.max(0, pomo.remain);
    return Math.max(0, (pomo.endAt - Date.now()) / 1000);
  }
  function pomoRender() {
    var rem = pomoRemain();
    var txt = fmtHMS(rem);
    var mini = document.getElementById('pomo-mini-time');
    if (mini) mini.textContent = txt;
    var miniBtn = document.getElementById('pomo-mini');
    if (miniBtn) miniBtn.classList.toggle('running', pomo.running);
    var w = document.getElementById('pomo-widget');
    if (!w) return;
    w.querySelector('.rt').textContent = txt;
    w.querySelector('.pomo-time').textContent = txt;
    w.querySelector('.pomo-mode').textContent = { focus: '专注', short: '短休息', long: '长休息' }[pomo.mode] +
      (pomo.mode === 'focus' ? ' · 第 ' + (pomo.cycles + 1) + ' 个番茄' : '');
    var total = pomoDuration();
    var c = w.querySelector('.fg');
    if (c) {
      var len = 2 * Math.PI * 35;
      c.setAttribute('stroke-dasharray', String(len));
      c.setAttribute('stroke-dashoffset', String(len * (1 - Math.min(1, (total - rem) / total))));
    }
    Array.prototype.forEach.call(w.querySelectorAll('.pomo-modes button'), function (b) {
      b.classList.toggle('on', b.getAttribute('data-mode') === pomo.mode);
    });
    var start = w.querySelector('[data-pomo="start"]');
    if (start) start.textContent = pomo.running ? '暂停' : '开始';
    var m = document.getElementById('pomo-mini');
    if (m) m.classList.toggle('running', pomo.running);
  }
  function pomoStart() {
    if (pomo.running) {
      pomo.remain = pomoRemain();
      pomo.running = false;
      pomo.endAt = 0;
    } else {
      pomo.remain = pomo.remain || pomoDuration();
      pomo.endAt = Date.now() + pomo.remain * 1000;
      pomo.running = true;
    }
    pomoSave();
    pomoRender();
  }
  function pomoReset() {
    pomo.running = false; pomo.endAt = 0;
    pomo.remain = pomoDuration();
    pomoSave(); pomoRender();
  }
  function pomoSetMode(mode) {
    pomo.mode = mode; pomo.running = false; pomo.endAt = 0;
    pomo.remain = pomoDuration(mode);
    pomoSave(); pomoRender();
  }
  function pomoComplete() {
    var mode = pomo.mode;
    var dur = pomoDuration(mode);
    pomo.running = false; pomo.endAt = 0;
    if (mode === 'focus') {
      addFocus(dur, true);
      pomo.cycles += 1;
      beep();
      var next = pomo.cycles % 4 === 0 ? 'long' : 'short';
      toast('番茄完成 +' + Math.round(dur / 60) + ' 分钟，进入' + (next === 'long' ? '长' : '短') + '休息');
      pomo.mode = next;
    } else {
      beep();
      toast('休息结束，开始下一个专注');
      pomo.mode = 'focus';
    }
    pomo.remain = pomoDuration(pomo.mode);
    pomoSave();
    pomoRender();
    if (location.hash.indexOf('#/stats') === 0) route(false);
  }
  function tickPomo() {
    if (!pomo.running) return;
    if (pomoRemain() <= 0) { pomoComplete(); return; }
    pomoRender();
  }
  function pomoWidgetHtml() {
    return '<div id="pomo-widget">' +
      '<div class="pomo-head" data-pomo="fold"><span class="pomo-dot"></span><b>番茄钟</b><button class="ph-x" data-pomo="hide" title="收起">−</button></div>' +
      '<div class="pomo-body">' +
      '<div class="pomo-ring"><svg width="86" height="86" viewBox="0 0 86 86"><circle class="bg" cx="43" cy="43" r="35" fill="none" stroke="#ece9df" stroke-width="5"/><circle class="fg" cx="43" cy="43" r="35" fill="none" stroke="var(--primary)" stroke-width="5" stroke-linecap="round"/></svg><div class="rt">25:00</div></div>' +
      '<div class="pomo-time" hidden>25:00</div>' +
      '<div class="pomo-mode">专注</div>' +
      '<div class="pomo-modes"><button data-mode="focus">专注</button><button data-mode="short">短休</button><button data-mode="long">长休</button></div>' +
      '<div class="pomo-actions"><button class="btn primary" data-pomo="start">开始</button><button class="btn ghost" data-pomo="reset">重置</button></div>' +
      '<div class="pomo-foot">完成番茄自动记入学习统计</div>' +
      '</div></div>';
  }
  function mountPomo() {
    if (document.getElementById('pomo-widget')) return;
    var d = document.createElement('div');
    d.innerHTML = pomoWidgetHtml();
    document.body.appendChild(d.firstChild);
    var w = document.getElementById('pomo-widget');
    w.addEventListener('click', function (e) {
      var t = e.target.closest('[data-pomo]');
      if (!t) {
        var mb = e.target.closest('.pomo-modes button');
        if (mb) pomoSetMode(mb.getAttribute('data-mode'));
        return;
      }
      var act = t.getAttribute('data-pomo');
      if (act === 'start') pomoStart();
      else if (act === 'reset') pomoReset();
      else if (act === 'hide') {
        w.classList.toggle('collapsed');
        w.querySelector('.pomo-body').hidden = w.classList.contains('collapsed');
        t.textContent = w.classList.contains('collapsed') ? '+' : '−';
      } else if (act === 'fold') {
        if (w.classList.contains('collapsed')) {
          w.classList.remove('collapsed');
          w.querySelector('.pomo-body').hidden = false;
          w.querySelector('.ph-x').textContent = '−';
        }
      }
    });
    pomoRender();
  }

  /* ================= 在线时间 ================= */
  var lastTick = Date.now();
  function tickOnline() {
    var now = Date.now();
    if (document.visibilityState === 'visible' && now - lastTick < 3000) addOnline(1);
    lastTick = now;
  }
  document.addEventListener('visibilitychange', function () { lastTick = Date.now(); });

  /* ================= 题目组件 ================= */
  function getInput(q) {
    var rec = state.papers[q.paperId];
    if (rec && rec.answers && rec.answers[q.no] != null) return rec.answers[q.no];
    var a = attempt(q.qid);
    return a && a.input != null ? a.input : '';
  }
  function saveInput(qid, val) {
    var q = QMAP[qid];
    if (!q) return;
    var rec = state.papers[q.paperId];
    if (rec) {
      if (!rec.answers) rec.answers = {};
      rec.answers[q.no] = val;
    }
    var a = state.attempts[qid] || {};
    a.input = val;
    state.attempts[qid] = a;
    saveState();
  }
  function optionsHtml(q, picked, showResult) {
    picked = String(picked || '').toUpperCase();
    var ans = String(q.answer || '').toUpperCase();
    return '<div class="options">' + (q.options || []).map(function (o) {
      var on = picked.indexOf(o.k) >= 0;
      var cls = on ? ' on' : '';
      if (showResult) {
        if (ans.indexOf(o.k) >= 0) cls = ' right';
        else if (on) cls = ' wrong';
        else cls = '';
      }
      return '<button type="button" class="opt' + cls + '" data-act="opt" data-qid="' + q.qid + '" data-key="' + o.k + '">' +
        '<span class="k">' + o.k + '</span><span>' + rich(o.t) + '</span></button>';
    }).join('') + '</div>';
  }
  function answerAreaHtml(q, mode) {
    var a = attempt(q.qid);
    var picked = getInput(q);
    var disabled = mode === 'review';
    var practice = mode === 'practice';
    if (q.type === 'single' || q.type === 'multiple') {
      return optionsHtml(q, picked, mode === 'review') +
        (practice ? '<div class="answer-row"><button class="btn sm primary" data-act="submit" data-qid="' + q.qid + '">提交答案</button>' +
          (q.type === 'multiple' ? '<span class="small muted">多选：少选有部分分</span>' : '') + '</div>' : '');
    }
    if (q.type === 'fill') {
      return '<div class="answer-row"><input class="fill-input" data-fill="' + q.qid + '" placeholder="填写答案（支持 1/2、sqrt2、pi）" value="' + esc(picked) + '"' + (disabled ? ' disabled' : '') + '>' +
        (practice ? '<button class="btn sm primary" data-act="submit" data-qid="' + q.qid + '">提交</button>' : '') + '</div>' +
        (mode === 'review' ? '<div class="small muted" style="margin-top:4px">你的答案：' + (picked ? rich(picked) : '未作答') + '</div>' : '');
    }
    return '<div style="display:flex;flex-direction:column;gap:8px">' +
      '<textarea class="textarea" data-fill="' + q.qid + '" placeholder="写下你的解答过程，至少写出关键步骤。"' + (disabled ? ' disabled' : '') + '>' + esc(picked) + '</textarea>' +
      (practice ? '<div class="btn-row"><button class="btn sm primary" data-act="submit" data-qid="' + q.qid + '">保存解答</button>' +
        '<button class="btn sm ghost" data-act="show-solution" data-qid="' + q.qid + '">看解析</button></div>' : '') +
      '</div>';
  }
  function retryBtn(qid) {
    return '<div class="btn-row" style="margin-top:8px"><button class="btn sm ghost" data-act="retry" data-qid="' + qid + '">再做一次</button></div>';
  }
  function selfBlock(q, a, allowRetry) {
    if (!a || !a.status) return '';
    var html = q.type === 'solve' ? selfCheckHtml(q.qid, a.status) : '';
    html += rewardHtml(q);
    if (allowRetry) html += retryBtn(q.qid);
    return html;
  }
  function budgetLine(q, a) {
    if (!a) return '<span class="small">建议用时 ' + (q.type === 'solve' ? '12-17' : q.type === 'fill' ? '3-5' : '2-4') + ' 分钟</span>';
    return '<span class="small">' + statusText(a) + (q.type !== 'solve' ? ' · 你的答案：' + (a.input ? esc(a.input) : '空') : '') + '</span>';
  }
  function questionCard(q, mode) {
    mode = mode || 'practice';
    var a = attempt(q.qid);
    var showResult = mode === 'review';
    var showAI = mode !== 'exam';
    var footer = '';
    if (mode === 'exam') {
      footer = '<div class="qfoot">' + budgetLine(q, a) + '<div class="qactions"><button class="hint-btn" data-act="hint" data-qid="' + q.qid + '">卡住了？看提示</button></div></div>' + hintsHtml(q);
    } else {
      footer = '<div class="qfoot">' + budgetLine(q, a) +
        '<div class="qactions"><button class="hint-btn" data-act="hint" data-qid="' + q.qid + '">提示阶梯</button>' +
        '<button class="hint-btn" data-act="show-solution" data-qid="' + q.qid + '">参考解析</button>' +
        '<button class="hint-btn" data-act="fav" data-qid="' + q.qid + '">' + (state.fav[q.qid] ? '★ 已收藏' : '☆ 收藏') + '</button></div></div>' +
        hintsHtml(q) +
        '<div data-role="fb">' + feedbackHtml(q, a) + '</div>' +
        '<div data-role="self">' + selfBlock(q, a, mode !== 'review') + '</div>' +
        '<div data-role="sol" ' + (showResult ? '' : 'hidden') + '>' + solutionHtml(q) + '</div>' +
        (showAI ? aiPanelHtml(q) : '');
    }
    return '<article class="qcard" id="card-' + q.qid + '" data-qid="' + q.qid + '">' +
      '<div class="qhead"><div class="qno">第 ' + q.no + ' 题' + (q.isQ19 ? ' <span class="badge q19">压轴</span>' : '') + '</div>' +
      '<div class="qmeta">' + qMeta(q) + '</div></div>' +
      '<div class="qstem">' + rich(q.stem) + '</div>' +
      answerAreaHtml(q, mode) + footer + '</article>';
  }

  function updateOptions(q) {
    var card = document.getElementById('card-' + q.qid);
    if (!card) return;
    var a = attempt(q.qid);
    var box = card.querySelector('.options');
    if (box && a && (a.status === 'correct' || a.status === 'wrong' || a.status === 'partial')) {
      box.outerHTML = optionsHtml(q, a.input, true);
    }
  }
  function refreshCard(q) {
    var card = document.getElementById('card-' + q.qid);
    if (!card) return;
    var a = attempt(q.qid);
    var fb = card.querySelector('[data-role="fb"]');
    if (fb) fb.innerHTML = feedbackHtml(q, a);
    var self = card.querySelector('[data-role="self"]');
    if (self) self.innerHTML = selfBlock(q, a, true);
    updateOptions(q);
    if (a && a.status) {
      var sol = card.querySelector('[data-role="sol"]');
      if (sol && a.status !== 'attempted') sol.hidden = false;
    }
    renderMath(card);
  }
  function submitQuestion(qid) {
    var q = QMAP[qid];
    if (!q) return;
    var input = getInput(q);
    if (q.type !== 'solve' && !String(input || '').trim()) { toast('先写出答案再提交'); return; }
    if (q.type === 'solve') {
      setAttempt(qid, { input: input, status: attempt(qid) && attempt(qid).status ? attempt(qid).status : 'attempted' });
      toast('解答已保存，可以自评或让 AI 批改');
    } else {
      var st = grade(q, input);
      setAttempt(qid, { input: input, status: st });
      if (st === 'correct') toast('答案正确');
      else if (st === 'partial') toast('部分正确，检查漏选的选项');
      else toast('答案不对，已记入错题本');
    }
    refreshCard(q);
    if (q.paperId !== 'q19') refreshExamChrome();
  }
  function toggleSolution(qid) {
    var card = document.getElementById('card-' + qid);
    if (!card) return;
    var sol = card.querySelector('[data-role="sol"]');
    if (!sol) return;
    sol.hidden = !sol.hidden;
    if (!sol.hidden) { renderMath(sol); sol.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
  }
  function toggleHint(qid) {
    var card = document.getElementById('card-' + qid);
    if (!card) return;
    var box = card.querySelector('[data-role="hint"]');
    if (!box) return;
    box.hidden = !box.hidden;
    if (!box.hidden) renderMath(box);
  }

  /* ================= AI 运行 ================= */
  var aiBusy = {};
  async function runAI(qid, kind) {
    if (aiBusy[qid]) return;
    var q = QMAP[qid];
    var out = document.getElementById('ai-out-' + qid);
    var meta = document.getElementById('ai-meta-' + qid);
    if (!out || !q || !window.GK_AI) return;
    var workEl = document.getElementById('ai-work-' + qid);
    var work = workEl ? workEl.value : '';
    if (kind === 'grade' && !String(work || getInput(q)).trim()) { toast('先写下你的解答，再让 AI 批改'); return; }
    aiBusy[qid] = true;
    out.innerHTML = '<div class="ai-loading">正在连接 AI，通常需要 10-20 秒…</div>';
    meta.innerHTML = '';
    var buf = '';
    var lastPaint = 0;
    function paint() {
      var now = Date.now();
      if (now - lastPaint < 260) return;
      lastPaint = now;
      out.innerHTML = mdToHtml(buf);
      renderMath(out);
    }
    try {
      var a = attempt(qid);
      var selfLabel = a ? statusText(a) : '未自评';
      var res = kind === 'grade'
        ? await window.GK_AI.grade(q, work || getInput(q), function (d) { buf += d; paint(); })
        : await window.GK_AI.diagnose(q, work, selfLabel, knowledgeOf(q), function (d) { buf += d; paint(); });
      out.innerHTML = mdToHtml(buf);
      renderMath(out);
      meta.innerHTML = '<span>通道：' + esc(res.provider) + '</span><span>仅作学习参考，请以标准答案为准</span>';
    } catch (e) {
      out.innerHTML = '<div class="ai-warn">AI 暂时不可用（' + esc(e && e.message ? e.message : '网络错误') + '）。下面是本地诊断，同样按「知识点层 / 真题层」拆分。</div>' + localDiagnosisHtml(q);
      renderMath(out);
      meta.innerHTML = '<span>已降级为本地诊断</span>';
    }
    aiBusy[qid] = false;
  }

  /* ================= 首页 ================= */
  function todayStats() {
    var r = dayRec();
    var week = 0;
    for (var i = 0; i < 7; i++) {
      var d = new Date(); d.setDate(d.getDate() - i);
      var x = timeData.days[dayKey(d)];
      if (x) week += x.focus || 0;
    }
    return { focus: r.focus || 0, online: r.online || 0, pomos: r.pomos || 0, week: week, streak: streak() };
  }
  function pickDaily(n) {
    var pool = QS.filter(function (q) { return q.kind === 'real' && !isSolved(attempt(q.qid)); });
    if (!pool.length) pool = QS.filter(function (q) { return q.kind === 'real'; });
    var seed = parseInt(dayKey().replace(/-/g, ''), 10) || 1;
    var out = [];
    for (var i = 0; i < pool.length && out.length < n; i++) {
      var idx = (seed * 7 + i * 137) % pool.length;
      if (out.indexOf(pool[idx]) < 0) out.push(pool[idx]);
    }
    return out;
  }
  function viewHome() {
    var p = progress(), t = todayStats();
    var days = daysToExam();
    var rec = pickDaily(3);
    var html = '<section class="hero"><div class="hero-deco">∑</div>' +
      '<div class="eyebrow">高三数学 · 真题 + 知识 + 反馈</div>' +
      '<h1>今天，向上走一阶。</h1>' +
      '<p>整套真题模考、第 19 题专项、知识点图谱，以及会分析你“卡在哪一步”的 AI 教练。先把一套卷子做完，再回来补知识。</p>' +
      '<div class="hero-actions">' +
      (days >= 0 ? '<span class="countdown">距高考 <b>' + days + '</b> 天</span>' : '<span class="countdown">高考已结束，继续向前</span>') +
      '<a class="btn primary" href="#/papers">开始一套模考</a>' +
      '<a class="btn ghost" href="#/knowledge">先补知识点</a></div></section>';

    html += '<div class="grid g4" style="margin-bottom:14px">' +
      statCard('今日专注', fmtMin(t.focus), '番茄钟自动记录') +
      statCard('今日在线', fmtMin(t.online), '页面可见时累计') +
      statCard('连续学习', t.streak + ' 天', t.streak ? '保持住' : '今天开始') +
      statCard('真题掌握', p.right + ' / ' + p.total, p.pct + '% · 错题 ' + p.wrong) +
      '</div>';

    html += '<div class="grid g3" style="margin-bottom:18px">' +
      quick('#/knowledge', '▤', '知识点图谱', p.kDone + ' / ' + KP.length + ' 个已通关') +
      quick('#/papers', '▦', '真题模考', PAPERS.filter(function (x) { return x.kind === 'real' && !x.archive; }).length + ' 套真题 + 模拟卷') +
      quick('#/q19', '◆', '第 19 题', Q19_ALL.length + ' 道压轴题专项拆解') +
      quick('#/bank', '⌕', '全题库', QS.length + ' 道题可筛选') +
      quick('#/bank/drill', '✎', '题感训练', DRILL.length + ' 道知识点母题 · 每点 ' + Math.round(DRILL.length / (KP.length || 1)) + ' 道') +
      quick('#/wrong', '✎', '错题本', p.wrong + ' 道待攻克') +
      quick('#/stats', '◔', '学习统计', '番茄 / 在线 / 手动记录') +
      '</div>';

    html += '<div class="grid g2">' +
      '<div class="card"><div class="card-title"><h3>今日推荐</h3><a class="small" href="#/bank">去题库</a></div>' +
      (rec.length ? rec.map(function (q) {
        return '<a class="mini-q" href="#/question/' + q.qid + '"><div class="mq-stem">' + rich(q.stem) + '</div>' +
          '<div class="mq-meta">' + esc(q.source) + ' · ' + typeLabel(q.type) + ' · 难度 ' + (q.difficulty || 3) + '/5</div></a>';
      }).join('') : emptyHtml('题库已通关，去模考检验一下。')) +
      '</div>' +
      '<div class="card"><div class="card-title"><h3>学习闭环</h3><a class="small" href="#/stats">看统计</a></div>' +
      '<ol class="steps-list">' +
      '<li><b>限时模考</b>：150 分钟整套卷，先暴露真实问题。</li>' +
      '<li><b>对答案 + 自评</b>：客观题自动判，解答题按“会 / 半懂 / 不会”自评。</li>' +
      '<li><b>AI 卡壳分析</b>：分成知识点层与真题层，指出你错在第几步。</li>' +
      '<li><b>回到知识点</b>：补公式、看易错、做同类题，再进错题本复盘。</li>' +
      '</ol></div></div>';

    var recent = PAPERS.filter(function (x) { return x.kind === 'real' && !x.archive; }).slice(0, 4);
    html += '<h2>最近真题卷</h2><div class="card">' + recent.map(function (paper) {
      var ps = paperStat(paper);
      return '<div class="paper-row"><div class="pr-main"><b><a href="#/paper/' + paper.id + '">' + esc(paper.title) + '</a></b>' +
        '<div class="pr-meta">' + paper.questions.length + ' 题 · 满分 ' + paper.total + ' 分 · ' + (paper.kind === 'mock' ? '模拟卷' : '真题') +
        (ps.submitted ? ' · 已交卷 ' + ps.score + ' 分' : '') + '</div></div>' +
        '<div class="progress-line"><span>' + ps.answered + '/' + ps.total + '</span><span class="pl-bar"><i style="width:' + pctOf(ps.answered, ps.total) + '%"></i></span></div>' +
        '<a class="btn sm" href="#/paper/' + paper.id + '">' + (ps.submitted ? '看结果' : ps.answered ? '继续' : '开考') + '</a></div>';
    }).join('') + '</div>';
    return html;
  }
  function statCard(label, val, sub) {
    return '<div class="stat-card"><div class="sl">' + label + '</div><div class="sv">' + val + '</div><div class="sx">' + sub + '</div></div>';
  }
  function quick(href, icon, title, sub) {
    return '<a class="quick-card" href="' + href + '"><span class="qi">' + icon + '</span><b>' + title + '</b><span>' + sub + '</span></a>';
  }

  /* ================= 知识点 ================= */
  function chapterProgress(cid) {
    var pts = pointsOfChapter(cid);
    var done = pts.filter(function (k) {
      return questionsOfKnowledge(k.id).some(function (q) { return isSolved(attempt(q.qid)); });
    }).length;
    return { done: done, total: pts.length };
  }
  function viewKnowledge() {
    var done = KP.filter(function (k) {
      return questionsOfKnowledge(k.id).some(function (q) { return isSolved(attempt(q.qid)); });
    }).length;
    var html = pageHead('知识层', '知识点图谱', '按高考题型分 10 章。每个知识点都按“本质 → 公式 → 题干信号 → 操作步骤 → 易错点 → 例题”组织，学完可以直接跳到相关真题。');
    html += '<div class="grid g3" style="margin-bottom:18px">' +
      statCard('知识点', KP.length + ' 个', CH.length + ' 个章节') +
      statCard('已通关', done + ' 个', '相关真题做对即点亮') +
      statCard('关联真题', QS.filter(function (q) { return q.kind === 'real'; }).length + ' 道', '知识点页可直接练') +
      '</div><div class="grid g2">';
    html += CH.map(function (c) {
      var pts = pointsOfChapter(c.id), pr = chapterProgress(c.id);
      return '<a class="chapter-card" href="#/knowledge/' + c.id + '"><div class="cc-top"><h3>' + esc(c.title) + '</h3><span class="badge">' + pts.length + ' 点</span></div>' +
        '<p>' + rich(c.intro || '') + '</p>' +
        '<div class="cc-meta"><span>通关 ' + pr.done + '/' + pr.total + '</span><span>真题 ' + questionsOfChapter(c.id).filter(function (q) { return q.kind !== 'drill'; }).length + ' 道</span></div>' +
        '<div class="cc-bar"><i style="width:' + pctOf(pr.done, pr.total) + '%"></i></div></a>';
    }).join('');
    html += '</div>';
    return html;
  }
  function viewChapter(cid) {
    var c = CHMAP[cid];
    if (!c) return viewNotFound('章节');
    var pts = pointsOfChapter(cid);
    var html = pageHead('知识点 · ' + esc(c.title), esc(c.title), rich(c.intro || ''), '<a href="#/knowledge">知识点</a> / ' + esc(c.title));
    if (c.examTip) html += '<div class="card" style="background:var(--primary-soft);border-color:transparent"><div class="k-label">高考怎么考</div><p style="margin:4px 0 0">' + rich(c.examTip) + '</p></div>';
    var qcount = questionsOfChapter(cid).filter(function (q) { return q.kind !== 'drill'; }).length;
    html += '<div class="btn-row" style="margin-top:14px"><span class="small muted">本章关联真题 ' + qcount + ' 道</span><a class="btn sm" href="#/bank">去题库筛选</a></div>';
    html += '<h2>知识点清单</h2><div class="point-list">';
    html += pts.map(function (k) {
      var qs = questionsOfKnowledge(k.id);
      var mastered = qs.some(function (q) { return isSolved(attempt(q.qid)); });
      return '<a class="point-card" href="#/point/' + k.id + '"><div class="pc-top"><b>' + esc(k.title) + '</b>' +
        '<span class="badge' + (mastered ? ' type' : '') + '">' + (mastered ? '已通关' : '题 ' + qs.length) + '</span></div>' +
        '<p>' + rich(k.summary) + '</p></a>';
    }).join('');
    html += '</div>';
    return html;
  }
  function viewPoint(kid) {
    var k = KMAP[kid];
    if (!k) return viewNotFound('知识点');
    var c = CHMAP[k.chapter];
    var qs = questionsOfKnowledge(kid);
    var html = pageHead('知识点 · ' + (c ? c.title : ''), esc(k.title), rich(k.summary),
      '<a href="#/knowledge">知识点</a> / <a href="#/knowledge/' + k.chapter + '">' + esc(c ? c.title : '') + '</a> / ' + esc(k.title));
    html += '<div class="kcard">';
    html += '<div class="k-label">本质讲解</div><p>' + rich(k.core) + '</p>';
    if ((k.formulas || []).length) {
      html += '<div class="k-section"><div class="k-label">公式与结论</div>' + k.formulas.map(function (f) {
        return '<div class="formula"><span class="fl">' + esc(f.label) + '</span><span class="ft">' + rich(f.tex) + '</span></div>';
      }).join('') + '</div>';
    }
    if ((k.signals || []).length) {
      html += '<div class="k-section"><div class="k-label">题干信号 → 动作</div><ul class="k-list">' +
        k.signals.map(function (s) { return '<li>' + rich(s) + '</li>'; }).join('') + '</ul></div>';
    }
    if ((k.methods || []).length) {
      html += '<div class="k-section"><div class="k-label">解题方法分类</div><div class="method-grid">' +
        k.methods.map(function (m) {
          return '<div class="method-card"><div class="mc-name">' + esc(m.name) + '</div>' +
            '<div class="mc-when"><b>适用信号</b>' + rich(m.when) + '</div>' +
            '<ol class="mc-steps">' + (m.steps || []).map(function (s) { return '<li>' + rich(s) + '</li>'; }).join('') + '</ol>' +
            (m.trap ? '<div class="mc-trap"><b>易错</b>' + rich(m.trap) + '</div>' : '') + '</div>';
        }).join('') + '</div></div>';
    }
    if ((k.steps || []).length) {
      html += '<div class="k-section"><div class="k-label">标准操作步骤</div><ol class="steps-list">' +
        k.steps.map(function (s) { return '<li>' + rich(s) + '</li>'; }).join('') + '</ol></div>';
    }
    if ((k.pitfalls || []).length) {
      html += '<div class="k-section"><div class="k-label">易错点</div><ul class="pitfall-list">' +
        k.pitfalls.map(function (s) { return '<li>' + rich(s) + '</li>'; }).join('') + '</ul></div>';
    }
    if (k.example) {
      html += '<div class="k-section"><div class="k-label">最小例题</div>' +
        '<div class="formula"><span class="ft">' + rich(k.example.stem) + '</span></div>' +
        '<p class="small"><b>答案：</b>' + rich(k.example.answer) + '</p>' +
        ((k.example.solution || []).length ? '<ol class="k-list">' + k.example.solution.map(function (s) { return '<li>' + rich(s) + '</li>'; }).join('') + '</ol>' : '') +
        '</div>';
    }
    if (k.takeaway) html += '<div class="takeaway"><div class="k-label">一句话带走</div><p>' + rich(k.takeaway) + '</p></div>';
    html += '</div>';

    html += '<div class="card" style="margin-top:14px"><div class="card-title"><h3>AI 把它讲成“能直接用”的版本</h3><span class="small muted">可选</span></div>' +
      '<div class="btn-row"><button class="btn sm primary" data-act="ai-explain" data-kid="' + kid + '">让 AI 讲这个知识点</button></div>' +
      '<div class="ai-output" id="ai-point-out"></div></div>';

    var realQ = qs.filter(function (q) { return q.kind !== 'drill'; });
    var drillQ = qs.filter(function (q) { return q.kind === 'drill'; });
    html += '<h2>相关真题 · 学完就练</h2>';
    if (!realQ.length) html += emptyHtml('这个知识点暂时没有关联真题，先做下面的母题。');
    else html += '<div class="card">' + realQ.slice(0, 10).map(function (q) {
      var a = attempt(q.qid);
      return '<div class="q-row"><div class="qr-main"><a class="qr-stem" href="#/question/' + q.qid + '">' + rich(q.stem) + '</a>' +
        '<div class="qr-meta"><span>' + esc(q.source) + '</span><span>' + typeLabel(q.type) + '</span><span>' + (q.score || 0) + ' 分</span>' + diffDots(q.difficulty || 3) + '</div></div>' +
        '<div class="qr-side"><span class="badge ' + statusClass(a) + '">' + statusText(a) + '</span><a class="btn sm" href="#/question/' + q.qid + '">做题</a></div></div>';
    }).join('') + '</div>';
    if (drillQ.length) {
      html += '<h2>题感母题 · 保持手感</h2><div class="card">' + drillQ.map(function (q) {
        var a = attempt(q.qid);
        return '<div class="q-row"><div class="qr-main"><a class="qr-stem" href="#/question/' + q.qid + '">' + rich(q.stem) + '</a>' +
          '<div class="qr-meta"><span>' + typeLabel(q.type) + '</span>' + diffDots(q.difficulty || 3) + '</div></div>' +
          '<div class="qr-side"><span class="badge ' + statusClass(a) + '">' + statusText(a) + '</span><a class="btn sm" href="#/question/' + q.qid + '">做题</a></div></div>';
      }).join('') + '</div>';
    }
    return html;
  }
  async function runExplain(kid) {
    var out = document.getElementById('ai-point-out');
    var k = KMAP[kid];
    if (!out || !k || !window.GK_AI) return;
    out.innerHTML = '<div class="ai-loading">正在连接 AI…</div>';
    var buf = '', last = 0;
    function paint() { if (Date.now() - last < 260) return; last = Date.now(); out.innerHTML = mdToHtml(buf); renderMath(out); }
    try {
      await window.GK_AI.explain(k, function (d) { buf += d; paint(); });
      out.innerHTML = mdToHtml(buf); renderMath(out);
    } catch (e) {
      out.innerHTML = '<div class="ai-warn">AI 暂时不可用（' + esc(e.message || '网络错误') + '）。下面用本地知识卡代替：</div>' +
        '<p><b>公式：</b></p>' + (k.formulas || []).map(function (f) { return '<div class="formula"><span class="ft">' + rich(f.tex) + '</span></div>'; }).join('') +
        '<p><b>易错：</b></p><ul class="pitfall-list">' + (k.pitfalls || []).map(function (p) { return '<li>' + rich(p) + '</li>'; }).join('') + '</ul>';
      renderMath(out);
    }
  }

  /* ================= 真题模考 ================= */
  var activePaper = null;
  function paperRemain(p) {
    var rec = state.papers[p.id];
    if (!rec) return (p.duration || 150) * 60;
    if (rec.submitted) return rec.remaining || 0;
    if (rec.running && rec.endAt) return Math.max(0, (rec.endAt - Date.now()) / 1000);
    return rec.remaining != null ? rec.remaining : (p.duration || 150) * 60;
  }
  function fmtRemain(sec) { return fmtHMS(sec); }
  function startPaper(pid) {
    var p = PAPERS.filter(function (x) { return x.id === pid; })[0];
    if (!p) return;
    state.papers[pid] = { startedAt: Date.now(), endAt: Date.now() + (p.duration || 150) * 60000, running: true, remaining: (p.duration || 150) * 60, answers: {}, submitted: false };
    saveState();
    route(false);
    scrollTop();
    toast('计时开始，先做会的题');
  }
  function pausePaper(pid) {
    var rec = state.papers[pid];
    if (!rec || rec.submitted) return;
    if (rec.running) {
      rec.remaining = Math.max(0, (rec.endAt - Date.now()) / 1000);
      rec.running = false; rec.endAt = 0;
    } else {
      rec.endAt = Date.now() + (rec.remaining || 0) * 1000;
      rec.running = true;
    }
    saveState();
    route(false);
  }
  function examScore(p) {
    var rec = state.papers[p.id] || {};
    var full = 0, obj = 0, selfN = 0;
    p.questions.forEach(function (q) {
      var a = attempt(q.qid);
      if (!a) return;
      if (q.type === 'solve') {
        if (a.status === 'selfA') { full += q.score || 0; selfN++; }
        else if (a.status === 'selfB') { full += Math.round((q.score || 0) / 2); selfN++; }
        else if (a.status === 'selfC') selfN++;
      } else if (a.status === 'correct') { full += q.score || 0; obj += q.score || 0; }
      else if (a.status === 'partial') { full += Math.round((q.score || 0) / 2); obj += Math.round((q.score || 0) / 2); }
    });
    return { score: Math.round(full), objective: obj, selfN: selfN, rec: rec };
  }
  function submitPaper(pid, auto) {
    var p = PAPERS.filter(function (x) { return x.id === pid; })[0];
    var rec = state.papers[pid];
    if (!p || !rec || rec.submitted) return;
    if (!auto && !window.confirm('交卷后将按客观题自动判分、解答题按自评计分。确定交卷吗？')) return;
    p.questions.forEach(function (q) {
      var val = rec.answers ? rec.answers[q.no] : '';
      if (q.type === 'solve') {
        if (val != null && String(val).trim()) {
          var old = attempt(q.qid);
          setAttempt(q.qid, { input: val, status: old && (old.status === 'selfA' || old.status === 'selfB' || old.status === 'selfC') ? old.status : 'attempted' });
        }
      } else if (val != null && String(val).trim()) {
        setAttempt(q.qid, { input: val, status: grade(q, val) });
      }
    });
    rec.remaining = paperRemain(p);
    rec.running = false; rec.endAt = 0; rec.submitted = true; rec.submittedAt = Date.now();
    rec.score = examScore(p).score;
    saveState();
    route(false);
    scrollTop();
    toast(auto ? '时间到，已自动交卷' : '已交卷，按解析逐题复盘');
  }
  function resetPaper(pid) {
    if (!window.confirm('重新模考会清空本卷的作答与计时，确定吗？')) return;
    var p = PAPERS.filter(function (x) { return x.id === pid; })[0];
    if (p) p.questions.forEach(function (q) { delete state.attempts[q.qid]; });
    delete state.papers[pid];
    saveState();
    route(false);
  }
  function updateExamBar() {
    if (!activePaper) return;
    var timer = document.getElementById('exam-timer');
    if (!timer) return;
    var rem = paperRemain(activePaper);
    timer.textContent = fmtRemain(rem);
    timer.classList.toggle('warn', rem < 15 * 60);
    var cnt = document.getElementById('exam-count');
    if (cnt) {
      var rec = state.papers[activePaper.id] || {};
      var ans = rec.answers || {};
      var n = activePaper.questions.filter(function (q) { return ans[q.no] != null && String(ans[q.no]).trim() !== ''; }).length;
      cnt.textContent = '已答 ' + n + ' / ' + activePaper.questions.length;
    }
    var rec2 = state.papers[activePaper.id];
    var pb = document.querySelector('[data-act="paper-pause"]');
    if (pb && rec2) pb.textContent = rec2.running ? '暂停' : '继续';
    var answered = state.papers[activePaper.id] && state.papers[activePaper.id].answers || {};
    Array.prototype.forEach.call(document.querySelectorAll('.sheet-cell'), function (cell) {
      var no = cell.getAttribute('data-no');
      var has = answered[no] != null && String(answered[no]).trim() !== '';
      cell.classList.toggle('done', !!has);
    });
  }
  function refreshExamChrome() { updateExamBar(); }
  function sheetHtml(p) {
    var rec = state.papers[p.id] || {};
    var ans = rec.answers || {};
    var mark = { single: '单', multiple: '多', fill: '填', solve: '解' };
    return '<div class="answer-sheet"><h4>答题卡</h4><div class="sheet-grid">' +
      p.questions.map(function (q) {
        var has = ans[q.no] != null && String(ans[q.no]).trim() !== '';
        return '<button class="sheet-cell' + (has ? ' done' : '') + '" data-act="sheet-jump" data-no="' + q.no + '">' + q.no +
          '<span class="sf">' + mark[q.type] + '</span></button>';
      }).join('') + '</div>' +
      '<div class="sheet-legend"><span><i style="background:var(--primary-soft);border:1px solid var(--primary)"></i>已答</span><span><i style="background:var(--bg);border:1px solid var(--border)"></i>未答</span></div>' +
      '<div class="btn-row" style="margin-top:10px"><button class="btn sm primary" style="width:100%" data-act="paper-submit">交卷</button></div>' +
      '<div class="small muted" style="margin-top:7px;line-height:1.55">客观题自动判分；解答题交卷后按“会 / 半懂 / 不会”自评计分。</div></div>';
  }
  function viewPaper(pid) {
    var p = PAPERS.filter(function (x) { return x.id === pid; })[0];
    if (!p) return viewNotFound('试卷');
    var rec = state.papers[pid];
    if (!rec) {
      var struct = p.questions.map(function (q) {
        return '<tr><td class="mono">' + q.no + '</td><td>' + typeLabel(q.type) + '</td><td>' + (q.score || 0) + ' 分</td><td class="qb-hide">' +
          ((q.knowledge || []).map(function (id) { return KMAP[id] ? KMAP[id].title : ''; }).filter(Boolean).join('、') || '综合') + '</td></tr>';
      }).join('');
      return pageHead(p.kind === 'mock' ? '优质模拟卷' : '历年真题', esc(p.title), '限时 ' + (p.duration || 150) + ' 分钟，满分 ' + p.total + ' 分。建议一次做完再对答案，模考的价值在于暴露问题，而不是刷分。', '<a href="#/papers">真题模考</a> / ' + esc(p.short)) +
        '<div class="grid g3" style="margin-bottom:16px">' +
        statCard('题目', p.questions.length + ' 题', p.note || '') +
        statCard('满分', p.total + ' 分', '新高考结构') +
        statCard('建议用时', (p.duration || 150) + ' 分钟', '计时可暂停') + '</div>' +
        '<div class="card"><div class="card-title"><h3>开始前</h3><span class="badge ' + (p.kind === 'mock' ? 'mock' : 'type') + '">' + (p.kind === 'mock' ? '模拟卷' : '真题') + '</span></div>' +
        '<ul class="k-list"><li>准备好草稿纸，中途尽量不查手机。</li><li>先做 1-14 题，再回头处理解答题；卡住超过 8 分钟先标记跳过。</li><li>交卷后先自评解答题，再看解析和 AI 诊断。</li></ul>' +
        '<div class="btn-row" style="margin-top:12px"><button class="btn primary" data-act="paper-start" data-pid="' + p.id + '">开始模考</button>' +
        '<a class="btn ghost" href="#/question/' + p.questions[0].qid + '">先逐题练习</a></div></div>' +
        '<h2>试卷结构</h2><div class="card" style="overflow:auto"><table style="width:100%;border-collapse:collapse;font-size:13.5px">' +
        '<thead><tr style="text-align:left;color:var(--text-faint)"><th style="padding:6px 4px">题号</th><th>题型</th><th>分值</th><th class="qb-hide">主要考点</th></tr></thead><tbody>' + struct + '</tbody></table></div>';
    }
    if (rec.submitted) {
      var es = examScore(p);
      var recAnswers = rec.answers || {};
      var objCount = p.questions.filter(function (q) { return q.type !== 'solve'; }).length;
      var objRight = p.questions.filter(function (q) {
        if (q.type === 'solve') return false;
        var a = attempt(q.qid);
        return a && (a.status === 'correct' || a.status === 'partial');
      }).length;
      var html = pageHead('模考结果', esc(p.title), '成绩只是体温计，真正的收获是下面每道题的“卡点 + 知识点 + 一句话方法”。', '<a href="#/papers">真题模考</a> / ' + esc(p.short));
      html += '<div class="result-banner"><div><div class="rb-score">' + es.score + '<span> / ' + p.total + ' 分</span></div><div class="small muted">客观题 ' + es.objective + ' 分 · 解答题自评 ' + es.selfN + ' 题</div></div>' +
        '<div class="rb-text">客观题答对或部分正确 <b>' + objRight + ' / ' + objCount + '</b>。解答题请逐题自评；自评“会 / 半懂”会计入分数，但请诚实。错题已自动进入错题本。</div>' +
        '<div class="btn-row"><a class="btn sm" href="#/wrong">去错题本</a><button class="btn sm ghost" data-act="paper-reset" data-pid="' + p.id + '">重新模考</button></div></div>';
      html += '<div class="card" style="margin-bottom:14px"><div class="small muted">提示：点击解答题下方的“自评”，分数会实时更新；解析默认展开，建议先自评再看。</div></div>';
      html += p.questions.map(function (q) {
        var a = attempt(q.qid);
        var input = recAnswers[q.no];
        return questionCard(q, 'review');
      }).join('');
      return html;
    }
    activePaper = p;
    var left = paperRemain(p);
    var html2 = pageHead(p.kind === 'mock' ? '模拟卷' : '真题模考', esc(p.title), '', '<a href="#/papers">真题模考</a> / ' + esc(p.short));
    html2 += '<div class="exam-bar"><span class="timer" id="exam-timer">' + fmtRemain(left) + '</span>' +
      '<span class="bar-meta" id="exam-count">已答 0 / ' + p.questions.length + '</span><span class="bar-sp"></span>' +
      '<button class="btn sm" data-act="paper-pause" data-pid="' + p.id + '">' + (rec.running ? '暂停' : '继续') + '</button>' +
      '<button class="btn sm primary" data-act="paper-submit" data-pid="' + p.id + '">交卷</button>' +
      '<a class="btn sm ghost" href="#/papers">退出</a></div>';
    html2 += '<div class="exam-layout"><div>' + p.questions.map(function (q) { return questionCard(q, 'exam'); }).join('') + '</div>' +
      '<div class="exam-side">' + sheetHtml(p) + '</div></div>';
    setTimeout(function () { updateExamBar(); }, 0);
    return html2;
  }
  function viewPapers() {
    var real = PAPERS.filter(function (p) { return p.kind === 'real' && !p.archive; });
    var mock = PAPERS.filter(function (p) { return p.kind === 'mock'; });
    var old = PAPERS.filter(function (p) { return p.archive; });
    var html = pageHead('模考', '真题与优质模拟卷', '整套限时训练才是真模考：150 分钟、19 题、交卷后逐题复盘。真题模考收录 2024—2026 年新高考卷与各地模考卷，更早年份的真题已并入知识点练习。');
    var years = [];
    real.forEach(function (p) { if (years.indexOf(p.year) < 0) years.push(p.year); });
    html += '<div class="card" style="background:var(--primary-soft);border-color:transparent;margin-bottom:18px"><div class="k-label">怎么用</div>' +
      '<p style="margin:4px 0 0" class="small">一轮：按年份整套做，记录分数；二轮：只做错题 + 第 19 题；考前：隔天一套，严格计时。计时可以暂停，但模考时尽量不用。</p></div>';
    years.forEach(function (y) {
      html += '<div class="year-head"><h2>' + y + ' 年</h2><span>' + real.filter(function (p) { return p.year === y; }).length + ' 套</span></div><div class="card">';
      html += real.filter(function (p) { return p.year === y; }).map(paperRow).join('');
      html += '</div>';
    });
    html += '<div class="year-head"><h2>各地模考卷</h2><span>' + mock.length + ' 套</span></div><div class="card">' +
      (mock.length ? mock.map(paperRow).join('') : emptyHtml('模拟卷正在整理中。')) + '</div>';
    if (old.length) {
      html += '<div class="year-head"><h2>往年真题 · 单题练习</h2><span>' + old.length + ' 套</span></div><div class="card">' +
        '<p class="small muted" style="margin:0 0 8px">2023 及更早的卷子不再作为整套模考，题目已进入题库与知识点练习，可按套查看或单题做。</p>' +
        old.map(function (p) { return paperRow(p); }).join('') + '</div>';
    }
    html += '<div class="card" style="margin-top:18px"><div class="k-label">说明</div><p class="small muted" style="margin:4px 0 0">真题卷题目依据公开试卷整理，个别题目为同考点等价改编；模拟卷为按新高考结构自编的仿真卷，用于补充题量与限时训练。</p></div>';
    return html;
  }
  function paperRow(p) {
    var ps = paperStat(p);
    return '<div class="paper-row"><div class="pr-main"><b><a href="#/paper/' + p.id + '">' + esc(p.title) + '</a></b>' +
      '<div class="pr-meta">' + p.questions.length + ' 题 · ' + p.total + ' 分 · ' + (p.kind === 'mock' ? '模拟' : '真题') +
      (ps.submitted ? ' · 得分 ' + ps.score : '') + '</div></div>' +
      '<div class="progress-line"><span>' + ps.answered + '/' + ps.total + '</span><span class="pl-bar"><i style="width:' + pctOf(ps.answered, ps.total) + '%"></i></span></div>' +
      '<a class="btn sm' + (ps.submitted ? '' : ' primary') + '" href="#/paper/' + p.id + '">' + (ps.submitted ? '复盘' : ps.answered ? '继续' : '开考') + '</a></div>';
  }

  /* ================= 第19题 ================= */
  function viewQ19() {
    var realCount = Q19_ALL.filter(function (q) { return q.kind === 'real'; }).length;
    var html = '<section class="q19-hero"><div class="eyebrow">新高考压轴</div><h1>第 19 题 · 压轴专项</h1>' +
      '<p class="lede">新高考 2024 起把最后一题（17 分）做成了“新定义 + 数列/组合/概率”的综合题。它考的不是套路，而是<b>现场翻译规则、从特殊到一般、写出可检验的推导</b>。这里单独拆解每一道。</p>' +
      '<div class="strategy">' +
      '<div class="st"><b>① 翻译定义</b>把题目里的新名词改写成“集合 / 数列 / 计数”的语言，先举 2 个具体例子。</div>' +
      '<div class="st"><b>② 先特殊后一般</b>先算 n=1,2,3，找规律并猜结论，再证明。</div>' +
      '<div class="st"><b>③ 写出可检验的中间量</b>每问至少留一个可代入验证的式子，避免空对空。</div>' +
      '<div class="st"><b>④ 限时取舍</b>第 (1) 问必拿，第 (2) 问抢步骤分，第 (3) 问只写关键构造。</div></div></section>';
    html += '<div class="grid g3" style="margin-bottom:18px">' +
      statCard('压轴题', Q19_ALL.length + ' 道', '真题 + 专项') +
      statCard('真题来源', realCount + ' 道', '2024 起 19 题结构') +
      statCard('专项加练', Q19_ALL.length - realCount + ' 道', '同结构仿真压轴') + '</div>';
    html += '<div class="card" style="margin-bottom:18px"><div class="k-label">五步拆解框架</div><ol class="steps-list">' +
      '<li><b>圈出新定义</b>：把“好数列 / 可分 / 有序数组”等名词抄下来，用一句话改写。</li>' +
      '<li><b>小规模试验</b>：n=1,2,3 手动枚举，写出具体对象集合。</li>' +
      '<li><b>找不变量</b>：计数、奇偶性、单调性、模运算、极端情形。</li>' +
      '<li><b>构造验证</b>：先猜构造，再验证满足所有条件；能构造就赢一半。</li>' +
      '<li><b>写清边界</b>：n 的范围、等号条件、空集/重复元素等边界情况。</li></ol></div>';
    html += '<h2>逐题拆解</h2><div class="card">';
    html += Q19_ALL.map(function (q) {
      var a = attempt(q.qid);
      return '<div class="q19-item"><div class="qi-top"><div><b>' + esc(q.paperTitle || q.source) + '</b> ' +
        '<span class="badge src">' + esc(q.source) + '</span> ' + diffDots(q.difficulty || 5) + '</div>' +
        '<a class="btn sm primary" href="#/question/' + q.qid + '">开始拆解</a></div>' +
        '<div class="qi-stem">' + rich(q.stem) + '</div>' +
        '<div class="qr-meta" style="margin-top:5px"><span class="badge ' + statusClass(a) + '">' + statusText(a) + '</span>' +
        knowledgeOf(q).map(function (k) { return '<a class="badge" href="#/point/' + k.id + '">' + esc(k.title) + '</a>'; }).join('') + '</div></div>';
    }).join('');
    html += '</div>';
    return html;
  }

  /* ================= 题库 ================= */
  var bank = { kw: '', ch: '', type: '', diff: '', kind: '', page: 1 };
  var BANK_PAGE = 12;
  function bankFiltered() {
    var kw = bank.kw.trim().toLowerCase();
    return QS.filter(function (q) {
      if (bank.kind && q.kind !== bank.kind) return false;
      if (bank.type && q.type !== bank.type) return false;
      if (bank.diff && (q.difficulty || 3) !== parseInt(bank.diff, 10)) return false;
      if (bank.ch) {
        if (!(q.knowledge || []).some(function (kid) { return KMAP[kid] && KMAP[kid].chapter === bank.ch; })) return false;
      }
      if (kw) {
        var hay = (plain(q.stem) + ' ' + q.source + ' ' + (q.knowledge || []).map(function (kid) { return KMAP[kid] ? KMAP[kid].title : ''; }).join(' ')).toLowerCase();
        if (hay.indexOf(kw) < 0) return false;
      }
      return true;
    }).sort(function (a, b) {
      if ((b.year || 0) !== (a.year || 0)) return (b.year || 0) - (a.year || 0);
      return a.qid.localeCompare(b.qid);
    });
  }
  function bankRowsHtml(list) {
    if (!list.length) return emptyHtml('没有符合条件的题目，换个筛选条件试试。');
    return list.map(function (q) {
      var a = attempt(q.qid);
      return '<div class="q-row"><div class="qr-main"><a class="qr-stem" href="#/question/' + q.qid + '">' + rich(q.stem) + '</a>' +
        '<div class="qr-meta"><span>' + esc(q.source) + '</span><span>' + typeLabel(q.type) + '</span><span>' + (q.score || 0) + ' 分</span>' + diffDots(q.difficulty || 3) +
        knowledgeOf(q).map(function (k) { return '<a class="badge" href="#/point/' + k.id + '">' + esc(k.title) + '</a>'; }).join('') + '</div></div>' +
        '<div class="qr-side"><span class="badge ' + statusClass(a) + '">' + statusText(a) + '</span><a class="btn sm" href="#/question/' + q.qid + '">做题</a></div></div>';
    }).join('');
  }
  function bankPagerHtml(total) {
    var pages = Math.max(1, Math.ceil(total / BANK_PAGE));
    if (bank.page > pages) bank.page = pages;
    return '<div class="pager"><button data-act="bank-page" data-page="' + (bank.page - 1) + '"' + (bank.page <= 1 ? ' disabled' : '') + '>上一页</button>' +
      '<span>第 ' + bank.page + ' / ' + pages + ' 页 · 共 ' + total + ' 题</span>' +
      '<button data-act="bank-page" data-page="' + (bank.page + 1) + '"' + (bank.page >= pages ? ' disabled' : '') + '>下一页</button></div>';
  }
  function viewBank() {
    var drillMode = location.hash.split('/')[2] === 'drill';
    if (drillMode && bank.kind !== 'drill') { bank.kind = 'drill'; bank.page = 1; }
    var html = drillMode
      ? pageHead('题感训练', '知识点母题', '每个知识点固定配 ' + Math.round(DRILL.length / (KP.length || 1)) + ' 道母题：3 单选 + 1 多选 + 1 填空 + 1 解答 + 2 道快判小模型。每天挑 2 个知识点，各做 4 题即可保持手感。')
      : pageHead('题库', '全题库筛选', '按章节、题型、难度、来源筛选。做题时先自己写，再提交看解析；卡住就用 AI 拆“知识点层 / 真题层”。');
    html += '<div class="filter-bar">' +
      '<input class="text-input grow" id="bank-kw" placeholder="搜索题干 / 来源 / 知识点" value="' + esc(bank.kw) + '">' +
      '<select class="select" id="bank-ch"><option value="">全部章节</option>' + CH.map(function (c) {
        return '<option value="' + c.id + '"' + (bank.ch === c.id ? ' selected' : '') + '>' + esc(c.title) + '</option>';
      }).join('') + '</select>' +
      '<select class="select" id="bank-type"><option value="">全部题型</option>' +
      [['single', '单选'], ['multiple', '多选'], ['fill', '填空'], ['solve', '解答']].map(function (t) {
        return '<option value="' + t[0] + '"' + (bank.type === t[0] ? ' selected' : '') + '>' + t[1] + '</option>';
      }).join('') + '</select>' +
      '<select class="select" id="bank-diff"><option value="">全部难度</option>' +
      [1, 2, 3, 4, 5].map(function (d) { return '<option value="' + d + '"' + (bank.diff == d ? ' selected' : '') + '>' + d + ' 星</option>'; }).join('') + '</select>' +
      '<select class="select" id="bank-kind"><option value="">全部来源</option><option value="real"' + (bank.kind === 'real' ? ' selected' : '') + '>仅真题</option><option value="mock"' + (bank.kind === 'mock' ? ' selected' : '') + '>仅模拟</option><option value="q19"' + (bank.kind === 'q19' ? ' selected' : '') + '>第19题专项</option><option value="drill"' + (bank.kind === 'drill' ? ' selected' : '') + '>仅知识点母题</option></select>' +
      '<button class="btn sm ghost" data-act="bank-reset">重置</button></div>' +
      '<div class="card" id="bank-list"></div><div id="bank-pager"></div>';
    html += '<div class="card" style="margin-top:16px"><div class="card-title"><h3>外部题库</h3><span class="small muted">' + (isAdmin() ? '管理者已解锁' : '仅管理者可更新') + '</span></div>' +
      (isAdmin() ? adminBankTools() : '<p class="small muted">题库由管理者维护。需要导入新试卷时，请到 <a href="#/settings">设置</a> 输入管理者密码解锁。</p>') +
      '<div class="ext-links"><div class="k-label">公开题库来源（自行整理后导入）</div>' +
      [['国家中小学智慧教育平台', 'https://basic.smartedu.cn/'], ['学科网', 'https://www.zxxk.com/'], ['组卷网', 'https://zujuan.xkw.com/'], ['菁优网', 'https://www.jyeoo.com/'], ['天星教育', 'https://www.tesoon.com/']]
        .map(function (l) { return '<a class="badge" href="' + l[1] + '" target="_blank" rel="noopener">' + l[0] + '</a>'; }).join('') +
      '</div></div>';
    setTimeout(renderBankList, 0);
    return html;
  }
  function parseCSV(text) {
    var s = String(text || '').replace(/^\uFEFF/, ''), rows = [], row = [], cell = '', q = false;
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      if (q) {
        if (c === '"') { if (s[i + 1] === '"') { cell += '"'; i++; } else q = false; }
        else cell += c;
      } else if (c === '"') q = true;
      else if (c === ',') { row.push(cell); cell = ''; }
      else if (c === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
      else if (c !== '\r') cell += c;
    }
    if (cell || row.length) { row.push(cell); rows.push(row); }
    return rows.filter(function (r) { return r.some(function (x) { return String(x).trim(); }); });
  }
  var HEAD_ALIAS = {
    stem: ['题目内容', '题干', '题目', 'stem'], a: ['选项a', '选项A', 'a'], b: ['选项b', '选项B', 'b'],
    c: ['选项c', '选项C', 'c'], d: ['选项d', '选项D', 'd'],
    answer: ['正确答案', '答案', 'answer'], type: ['题型', 'type'], diff: ['难度', 'difficulty'],
    kn: ['知识点', 'knowledge'], sol: ['解析', '解答', 'solution'], score: ['分值', 'score']
  };
  function headIndex(head) {
    var map = {};
    head.forEach(function (h, i) {
      var t = String(h).trim().toLowerCase();
      Object.keys(HEAD_ALIAS).forEach(function (k) {
        if (map[k] == null && HEAD_ALIAS[k].some(function (a) { return a.toLowerCase() === t; })) map[k] = i;
      });
    });
    return map;
  }
  function typeOf(t) {
    var s = String(t || '').trim().toLowerCase();
    if (/多选|multiple/.test(s)) return 'multiple';
    if (/填空|fill/.test(s)) return 'fill';
    if (/解答|solve|大题/.test(s)) return 'solve';
    return 'single';
  }
  function knIds(s) {
    var out = [];
    String(s || '').split(/[、,，;；|\/\s]+/).forEach(function (t) {
      if (!t) return;
      if (KMAP[t]) { out.push(t); return; }
      KP.forEach(function (k) { if (k.title === t && out.indexOf(k.id) < 0) out.push(k.id); });
    });
    return out;
  }
  function csvToPaper(rows, name) {
    var head = rows[0], ix = headIndex(head), qs = [], errs = [];
    rows.slice(1).forEach(function (r, ri) {
      var line = ri + 2;
      var stem = String(r[ix.stem] || '').trim();
      if (!stem) { errs.push('第 ' + line + ' 行：题目内容为空'); return; }
      var type = typeOf(r[ix.type]);
      var q = { no: qs.length + 1, type: type, score: parseInt(r[ix.score], 10) || (type === 'solve' ? 10 : 5), difficulty: Math.min(5, Math.max(1, parseInt(r[ix.diff], 10) || 3)), stem: stem, accept: [], solution: [], hints: [], pitfalls: [], knowledge: knIds(r[ix.kn]) };
      if (type === 'single' || type === 'multiple') {
        q.options = ['A', 'B', 'C', 'D'].map(function (k) {
          return { k: k, t: String(r[ix[k.toLowerCase()]] || '').trim() || '（缺选项）' };
        });
        q.answer = String(r[ix.answer] || '').replace(/[^A-Da-d]/g, '').toUpperCase();
        if (!q.answer) { errs.push('第 ' + line + ' 行：正确答案为空'); return; }
        if (type === 'single' && q.answer.length !== 1) { errs.push('第 ' + line + ' 行：单选题答案必须是 1 个选项'); return; }
      } else {
        q.answer = String(r[ix.answer] || '').trim();
        if (!q.answer) { errs.push('第 ' + line + ' 行：正确答案为空'); return; }
      }
      var sol = String(r[ix.sol] || '').trim();
      if (sol) q.solution = sol.split(/\n+/);
      q.takeaway = '';
      qs.push(q);
    });
    if (!qs.length) return { paper: null, errs: errs.length ? errs : ['没有可用数据行'] };
    return {
      paper: { id: 'ext-' + Date.now(), title: name || ('外部题库 · ' + new Date().toLocaleDateString()), short: name || '外部题库', year: new Date().getFullYear(), region: '外部题库', kind: 'ext', duration: 150, note: '通过 CSV 导入', questions: qs },
      errs: errs
    };
  }
  function jsonToPapers(obj) {
    var list = Array.isArray(obj) ? obj : (obj && Array.isArray(obj.questions) ? [obj] : (obj && Array.isArray(obj.papers) ? obj.papers : []));
    return list.filter(function (p) { return p && Array.isArray(p.questions) && p.questions.length; }).map(function (p, i) {
      var qs = p.questions.map(function (q, j) {
        q.no = q.no || j + 1;
        q.type = typeOf(q.type);
        q.stem = q.stem || q.题目内容 || q.题干 || '';
        q.answer = q.answer || q.正确答案 || q.答案 || '';
        q.options = q.options || (q['选项A'] ? ['A', 'B', 'C', 'D'].map(function (k) { return { k: k, t: String(q['选项' + k] || q[k] || '').trim() }; }) : undefined);
        if (typeof q.options === 'string') q.options = q.options.split(/\n+/).map(function (t, k) { return { k: 'ABCD'[k], t: t.replace(/^[A-D][.、)]\s*/, '') }; });
        q.solution = q.solution || q.analysis || (q.解析 ? String(q.解析).split(/\n+/) : []);
        q.knowledge = q.knowledge || knIds(q.知识点);
        q.accept = q.accept || [];
        q.hints = q.hints || []; q.pitfalls = q.pitfalls || []; q.takeaway = q.takeaway || '';
        return q;
      }).filter(function (q) { return q.stem && q.answer; });
      return { id: p.id || ('ext-' + Date.now() + '-' + i), title: p.title || p.name || ('外部试卷 ' + (i + 1)), short: p.short || p.title || '外部试卷', year: p.year || new Date().getFullYear(), region: p.region || '外部题库', kind: 'ext', duration: p.duration || 150, note: p.note || '通过 JSON 导入', questions: qs };
    }).filter(function (p) { return p.questions.length; });
  }
  function importExt(file) {
    if (!file) return;
    var rd = new FileReader();
    rd.onload = function () {
      var text = String(rd.result || '');
      var papers = [], errs = [];
      if (/\.csv$/i.test(file.name)) {
        var r = csvToPaper(parseCSV(text), file.name.replace(/\.csv$/i, ''));
        if (r.paper) papers.push(r.paper);
        errs = r.errs;
      } else {
        var obj;
        try { obj = JSON.parse(text); } catch (e) { toast('JSON 解析失败：' + e.message); return; }
        papers = jsonToPapers(obj);
        if (!papers.length) { toast('没有识别到试卷：需要含 questions 的数组或对象'); return; }
      }
      var old = EXTP.filter(function (p) { return papers.every(function (n) { return n.id !== p.id; }); });
      try { localStorage.setItem('gk.ext.v1', JSON.stringify(old.concat(papers))); } catch (e) { toast('保存失败，题库可能过大'); return; }
      var msg = '已导入 ' + papers.length + ' 套 / ' + papers.reduce(function (s, p) { return s + p.questions.length; }, 0) + ' 题';
      if (errs.length) msg += '；跳过 ' + errs.length + ' 行：' + errs.slice(0, 3).join('；');
      toast(msg);
      var rep = document.getElementById('ext-report');
      if (rep) rep.innerHTML = '<b>' + esc(msg) + '</b>' + (errs.length ? '<br>' + errs.map(esc).join('<br>') : '');
      setTimeout(function () { location.reload(); }, 1400);
    };
    rd.readAsText(file, 'utf-8');
  }
  function csvTemplate() {
    var rows = [['题目内容', '选项A', '选项B', '选项C', '选项D', '正确答案', '题型', '难度', '分值', '知识点', '解析'],
      ['已知集合 A={1,2}, B={2,3}, 则 A∩B=', '{2}', '{1,2}', '{2,3}', '{1,2,3}', 'A', '单选', '1', '5', '集合的运算', '交集取公共元素，只有 2。'],
      ['函数 f(x)=x^2 的导数 f\'(x)=', '', '', '', '', '2x', '填空', '2', '5', '导数与单调性', '幂函数求导。']];
    var csv = rows.map(function (r) { return r.map(function (c) { return '"' + String(c).replace(/"/g, '""') + '"'; }).join(','); }).join('\r\n');
    var blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = '题库模板.csv';
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }
  function renderBankList() {
    var list = bankFiltered();
    var start = (bank.page - 1) * BANK_PAGE;
    var pageList = list.slice(start, start + BANK_PAGE);
    var box = document.getElementById('bank-list');
    var pager = document.getElementById('bank-pager');
    if (box) { box.innerHTML = bankRowsHtml(pageList); renderMath(box); }
    if (pager) pager.innerHTML = bankPagerHtml(list.length);
  }

  /* ================= 错题本 ================= */
  function wrongList() {
    return QS.filter(function (q) { return isWrong(attempt(q.qid)); });
  }
  function viewWrong() {
    var list = wrongList().sort(function (a, b) { return (attempt(b.qid).ts || 0) - (attempt(a.qid).ts || 0); });
    var favs = QS.filter(function (q) { return state.fav[q.qid]; });
    var html = pageHead('复盘', '错题本', '错题不是收藏品。每次只挑 3 道：重做 → 说出卡点 → 回到知识点 → 再做一道同类题。');
    html += '<div class="grid g3" style="margin-bottom:18px">' +
      statCard('待攻克', list.length + ' 道', '错误 / 部分正确 / 自评不会') +
      statCard('收藏', favs.length + ' 道', '手动星标') +
      statCard('已掌握', progress().right + ' 道', '真题整体') + '</div>';
    if (!list.length) html += emptyHtml('错题本还是空的。去模考或题库做几道，错误会自动进来。');
    else {
      html += '<div class="card">' + list.map(function (q) {
        var a = attempt(q.qid);
        return '<div class="q-row"><div class="qr-main"><a class="qr-stem" href="#/question/' + q.qid + '">' + rich(q.stem) + '</a>' +
          '<div class="qr-meta"><span>' + esc(q.source) + '</span><span>' + typeLabel(q.type) + '</span><span class="badge ' + statusClass(a) + '">' + statusText(a) + '</span>' +
          knowledgeOf(q).map(function (k) { return '<a class="badge" href="#/point/' + k.id + '">' + esc(k.title) + '</a>'; }).join('') + '</div></div>' +
          '<div class="qr-side"><a class="btn sm primary" href="#/question/' + q.qid + '">重做</a><button class="btn sm ghost" data-act="wrong-remove" data-qid="' + q.qid + '">移出</button></div></div>';
      }).join('') + '</div>';
    }
    if (favs.length) {
      html += '<h2>收藏题</h2><div class="card">' + favs.map(function (q) {
        return '<div class="q-row"><div class="qr-main"><a class="qr-stem" href="#/question/' + q.qid + '">' + rich(q.stem) + '</a>' +
          '<div class="qr-meta"><span>' + esc(q.source) + '</span><span>' + typeLabel(q.type) + '</span></div></div>' +
          '<div class="qr-side"><a class="btn sm" href="#/question/' + q.qid + '">打开</a><button class="btn sm ghost" data-act="fav" data-qid="' + q.qid + '">取消收藏</button></div></div>';
      }).join('') + '</div>';
    }
    return html;
  }

  /* ================= 单题练习 ================= */
  function viewQuestion(qid) {
    var q = QMAP[qid];
    if (!q) return viewNotFound('题目');
    var html = pageHead('单题练习', '第 ' + q.no + ' 题', '', '<a href="#/bank">题库</a> / ' + esc(q.source));
    if (q.paperId && q.paperId !== 'q19' && q.paperId !== 'drill') {
      var p = PAPERS.filter(function (x) { return x.id === q.paperId; })[0];
      html += '<div class="card" style="padding:11px 16px"><div class="btn-row"><span class="small muted">来自整卷：' + esc(p.title) + '</span>' +
        '<a class="btn sm" href="#/paper/' + p.id + '">看整卷</a></div></div>';
    }
    html += '<div style="margin-top:14px">' + questionCard(q, 'practice') + '</div>';
    var kn = knowledgeOf(q);
    if (kn.length) {
      html += '<h2>本题涉及的知识点</h2><div class="card">' + kn.map(function (k) {
        return '<div class="point-card" style="margin-bottom:8px"><div class="pc-top"><b><a href="#/point/' + k.id + '">' + esc(k.title) + '</a></b><span class="badge">' + esc((CHMAP[k.chapter] || {}).title || '') + '</span></div>' +
          '<p>' + rich(k.summary) + '</p></div>';
      }).join('') + '</div>';
    }
    if ((q.pitfalls || []).length) {
      html += '<div class="card" style="margin-top:14px"><div class="k-label">这道题最常见的坑</div><ul class="pitfall-list">' +
        q.pitfalls.map(function (p) { return '<li>' + rich(p) + '</li>'; }).join('') + '</ul></div>';
    }
    var siblings = q.paperId && q.paperId !== 'q19' && q.paperId !== 'drill' ? (PAPERS.filter(function (x) { return x.id === q.paperId; })[0] || {}).questions || [] : [];
    var idx = siblings.indexOf(q);
    if (idx >= 0) {
      html += '<div class="btn-row" style="margin-top:18px">' +
        (idx > 0 ? '<a class="btn" href="#/question/' + siblings[idx - 1].qid + '">← 上一题</a>' : '') +
        (idx < siblings.length - 1 ? '<a class="btn" href="#/question/' + siblings[idx + 1].qid + '">下一题 →</a>' : '') +
        '<a class="btn ghost" href="#/paper/' + q.paperId + '">回到整卷</a></div>';
    }
    return html;
  }
  function viewNotFound(what) {
    return pageHead('未找到', '没有找到这个' + (what || '页面'), '链接可能过期了。') +
      '<div class="btn-row"><a class="btn primary" href="#/home">回首页</a><a class="btn" href="#/bank">去题库</a></div>';
  }

  /* ================= 学习统计 ================= */
  function lastDays(n) {
    var out = [];
    for (var i = n - 1; i >= 0; i--) {
      var d = new Date(); d.setDate(d.getDate() - i);
      var key = dayKey(d);
      out.push({ key: key, label: (d.getMonth() + 1) + '/' + d.getDate(), rec: timeData.days[key] || { focus: 0, online: 0, pomos: 0 } });
    }
    return out;
  }
  function viewStats() {
    var t = todayStats();
    var days = lastDays(7);
    var maxF = Math.max(1, Math.max.apply(null, days.map(function (d) { return d.rec.focus || 0; })));
    var html = pageHead('记录', '学习统计', '番茄钟负责“专注”，页面在线时间负责“在场”，手动记录补上线下学习。三者分开看，别用在线时长骗自己。');
    html += '<div class="grid g4" style="margin-bottom:18px">' +
      statCard('今日专注', fmtMin(t.focus), t.pomos + ' 个番茄') +
      statCard('今日在线', fmtMin(t.online), '页面可见时累计') +
      statCard('连续学习', t.streak + ' 天', '专注或在线超过 1 分钟') +
      statCard('近 7 天专注', fmtMin(t.week), '番茄 + 手动记录') + '</div>';

    html += '<div class="grid g2"><div class="card"><div class="card-title"><h3>近 7 天专注</h3><span class="small muted">分钟</span></div><div class="bars">' +
      days.map(function (d) {
        var v = Math.round((d.rec.focus || 0) / 60);
        var h = Math.max(2, Math.round((d.rec.focus || 0) / maxF * 100));
        return '<div class="bar-col"><span class="bv">' + (v || '') + '</span><div class="bar-wrap"><i class="bar" style="height:' + h + '%"></i></div><span class="bl">' + d.label + '</span></div>';
      }).join('') + '</div></div>';

    html += '<div class="card"><div class="card-title"><h3>番茄钟</h3><span class="badge type">' + t.pomos + ' 个 / 今日</span></div>' +
      '<p class="small muted">右下角的番茄钟随时可用：专注 25 分钟，休息 5 分钟；每 4 个番茄进一次长休息。完成的番茄会自动写入今日专注。</p>' +
      '<div class="btn-row"><button class="btn sm primary" data-act="pomo-open">打开番茄钟</button><span class="small muted">当前：' + ({ focus: '专注', short: '短休息', long: '长休息' }[pomo.mode]) + ' ' + fmtHMS(pomoRemain()) + '</span></div>' +
      '<div class="k-section"><div class="k-label">今日节奏</div><div class="small muted">专注 ' + fmtMin(t.focus) + ' · 在线 ' + fmtMin(t.online) + ' · 番茄 ' + t.pomos + ' 个</div></div></div></div>';

    var heat = lastDays(30);
    html += '<h2>近 30 天</h2><div class="card"><div class="heat">' +
      heat.map(function (d) {
        var score = (d.rec.focus || 0) + (d.rec.online || 0) * 0.5;
        var lv = score <= 0 ? '' : score < 900 ? 'l1' : score < 2400 ? 'l2' : score < 5400 ? 'l3' : 'l4';
        return '<i class="' + lv + '" title="' + d.key + ' · 专注 ' + fmtMin(d.rec.focus) + ' · 在线 ' + fmtMin(d.rec.online) + '"></i>';
      }).join('') + '</div>' +
      '<div class="sheet-legend" style="margin-top:8px"><span>少</span><i style="background:var(--bg-soft)"></i><i style="background:#dbe7d9"></i><i style="background:#b4cbb4"></i><i style="background:#86a78c"></i><i style="background:#5f7f66"></i><span>多</span></div></div>';

    html += '<h2 id="log">手动记录</h2><div class="card"><p class="small muted">线下刷卷、上课、整理错题都可以记在这里（番茄钟外的学习时间）。</p>' +
      '<div class="filter-bar" style="box-shadow:none;margin:10px 0 0;padding:0;border:none;background:transparent">' +
      '<input class="text-input" id="log-min" type="number" min="1" max="600" placeholder="分钟" style="width:100px">' +
      '<input class="text-input grow" id="log-note" placeholder="学了什么，例如：2024 新课标Ⅰ卷第 19 题 + 数列错题">' +
      '<button class="btn sm primary" data-act="log-add">记录</button></div>' +
      (timeData.logs && timeData.logs.length ? '<div style="margin-top:12px">' + timeData.logs.slice(0, 10).map(function (l, i) {
        return '<div class="log-row"><span class="lm">' + esc(l.date) + '</span><span class="ln">' + esc(l.note || '学习') + '</span><span class="mono">' + l.minutes + ' 分钟</span><button class="btn sm ghost" data-act="log-del" data-i="' + i + '">删除</button></div>';
      }).join('') + '</div>' : '<p class="small muted" style="margin-top:10px">还没有手动记录。</p>') + '</div>';

    var p = progress();
    html += '<h2>学习进度</h2><div class="grid g2"><div class="card"><div class="k-label">真题</div>' +
      '<div class="stat-card" style="border:none;box-shadow:none;padding:6px 0"><div class="sv">' + p.right + ' / ' + p.total + '</div><div class="sl">做对或自评“会”的真题</div></div>' +
      '<div class="cc-bar" style="height:7px"><i style="width:' + p.pct + '%"></i></div>' +
      '<div class="small muted" style="margin-top:8px">已尝试 ' + p.tried + ' 道 · 错题 ' + p.wrong + ' 道</div></div>' +
      '<div class="card"><div class="k-label">知识点</div>' +
      '<div class="stat-card" style="border:none;box-shadow:none;padding:6px 0"><div class="sv">' + p.kDone + ' / ' + KP.length + '</div><div class="sl">已被真题点亮的考点</div></div>' +
      '<div class="cc-bar" style="height:7px"><i style="width:' + pctOf(p.kDone, KP.length) + '%"></i></div>' +
      '<div class="small muted" style="margin-top:8px">点亮规则：该考点关联的任意一道真题做对或自评“会”。</div></div></div>';

    html += '<div class="card" style="margin-top:18px"><div class="card-title"><h3>AI 设置</h3><a class="btn sm" href="#/settings">打开设置</a></div>' +
      '<p class="small muted">默认 DeepSeek（需填 Key）；不填 Key 自动使用内置免费智能体，失败再降级到本地诊断。</p></div>';
    return html;
  }

  /* ================= 设置 ================= */
  var ADMIN_PASS = 'jjy';
  function isAdmin() { try { return sessionStorage.getItem('gk.admin') === '1'; } catch (e) { return false; } }
  function adminBankTools() {
    return '<div class="btn-row"><label class="btn sm primary" for="ext-file">导入题库（CSV / JSON）</label>' +
      '<input type="file" id="ext-file" accept=".csv,.json,text/csv,application/json" hidden>' +
      '<button class="btn sm ghost" data-act="ext-template">下载 CSV 模板</button>' +
      '<button class="btn sm ghost" data-act="ext-export">导出外部题库</button>' +
      '<button class="btn sm ghost" data-act="ext-clear">清空外部题库</button>' +
      '<span class="small muted">已接入 ' + EXTP.length + ' 套</span></div>' +
      '<p class="small muted" style="margin:8px 0 0">CSV 列：题目内容 / 选项A-D / 正确答案 / 题型（单选·多选·填空·解答）/ 难度（1-5）/ 分值 / 知识点 / 解析。导入时会校验空题干、空答案、单选题多答案；错误行会逐条提示。</p>' +
      '<div class="small muted" id="ext-report" style="margin-top:6px"></div>';
  }
  function adminCard() {
    if (!isAdmin()) {
      return '<div class="card"><div class="card-title"><h3>管理者模式</h3><span class="small muted">更新题库需要密码</span></div>' +
        '<p class="small muted">普通用户只能做题；管理者可以导入、导出、清空外部题库。</p>' +
        '<div class="btn-row"><input class="text-input" id="admin-pass" type="password" placeholder="管理者密码" style="max-width:200px">' +
        '<button class="btn primary" data-act="admin-unlock">进入管理者模式</button></div></div>';
    }
    return '<div class="card"><div class="card-title"><h3>管理者模式 · 已解锁</h3><button class="btn sm ghost" data-act="admin-lock">退出</button></div>' +
      '<p class="small muted">导入的试卷会与内置卷一起参与模考与题库，数据保存在本机浏览器。</p>' + adminBankTools() + '</div>';
  }
  function viewSettings() {
    var s = window.GK_AI ? window.GK_AI.settings() : { provider: 'deepseek', key: '', baseUrl: '', model: '' };
    var html = pageHead('设置', '偏好设置', 'AI 通道、外观、高考日期与番茄时长。所有数据只保存在本机浏览器。');
    html += '<div class="card"><div class="card-title"><h3>AI 通道</h3><span class="small muted">用于卡壳分析与批改</span></div>' +
      '<div class="radio-row" id="ai-provider">' +
      [['deepseek', 'DeepSeek（推荐）'], ['builtin', '内置免费智能体'], ['custom', '自定义兼容接口']].map(function (p) {
        return '<label class="' + (s.provider === p[0] ? 'on' : '') + '"><input type="radio" name="aip" value="' + p[0] + '"' + (s.provider === p[0] ? ' checked' : '') + '>' + p[1] + '</label>';
      }).join('') + '</div>' +
      '<div class="field"><label>API Key</label><input class="text-input" id="set-key" type="password" value="' + esc(s.key) + '" placeholder="sk-...（DeepSeek Key，仅存本机 localStorage）">' +
      '<div class="hint">留空则自动使用内置免费智能体（llm7.io → Pollinations），无需 Key。Key 在 platform.deepseek.com 创建。</div></div>' +
      '<div class="field"><label>接口地址</label><input class="text-input" id="set-url" value="' + esc(s.baseUrl || '') + '" placeholder="https://api.deepseek.com/v1/chat/completions">' +
      '<div class="hint">兼容 OpenAI 的 /chat/completions 接口均可；DeepSeek 官方地址：https://api.deepseek.com/v1/chat/completions</div></div>' +
      '<div class="field"><label>模型</label><input class="text-input" id="set-model" list="model-list" value="' + esc(s.model || '') + '" placeholder="deepseek-chat / deepseek-reasoner">' +
      '<datalist id="model-list"><option value="deepseek-chat"><option value="deepseek-reasoner"></datalist>' +
      '<div class="hint">deepseek-chat 快而稳，适合诊断与批改；deepseek-reasoner 带思维链，压轴题更准但更慢更贵。</div></div>' +
      '<div class="btn-row"><button class="btn primary" data-act="settings-save">保存 AI 设置</button><button class="btn ghost" data-act="ai-test">测试连通</button><span class="small muted" id="ai-test-out"></span></div></div>';

    html += '<div class="card"><div class="card-title"><h3>外观与节奏</h3></div>' +
      '<div class="field"><label>主题</label><div class="radio-row">' +
      '<label class="' + (state.theme !== 'dark' ? 'on' : '') + '"><input type="radio" name="theme" value="light"' + (state.theme !== 'dark' ? ' checked' : '') + '>柔和浅色</label>' +
      '<label class="' + (state.theme === 'dark' ? 'on' : '') + '"><input type="radio" name="theme" value="dark"' + (state.theme === 'dark' ? ' checked' : '') + '>护眼深色</label></div></div>' +
      '<div class="field"><label>高考日期（用于首页倒计时）</label><input class="text-input" id="set-exam" type="date" value="' + esc(state.examDate) + '"></div>' +
      '<div class="field"><label>番茄时长（分钟）</label><div class="btn-row">' +
      '<input class="text-input" id="set-focus" type="number" min="1" max="120" value="' + (state.pomo.focus || 25) + '" style="width:84px"> 专注 ' +
      '<input class="text-input" id="set-short" type="number" min="1" max="60" value="' + (state.pomo.short || 5) + '" style="width:84px"> 短休 ' +
      '<input class="text-input" id="set-long" type="number" min="1" max="90" value="' + (state.pomo.long || 15) + '" style="width:84px"> 长休</div></div>' +
      '<div class="btn-row"><button class="btn primary" data-act="settings-save">保存设置</button></div></div>';

    html += adminCard();

    html += '<div class="card"><div class="card-title"><h3>数据</h3></div>' +
      '<p class="small muted">答题记录、错题本、番茄与在线时长均存于本机。换设备不会同步。</p>' +
      '<div class="btn-row"><button class="btn ghost" data-act="data-export">导出数据（JSON）</button><button class="btn danger" data-act="data-clear">清空全部记录</button></div></div>';
    return html;
  }

  /* ================= 侧栏 / 目录 ================= */
  function sideLink(href, label, active, cnt) {
    return '<a class="side-link' + (active ? ' active' : '') + '" href="' + href + '">' + label +
      (cnt != null ? '<span class="cnt">' + cnt + '</span>' : '') + '</a>';
  }
  function sidebarHtml(main, seg) {
    var html = '';
    if (main === 'home') {
      html += '<div class="side-group"><div class="side-title">开始</div>' +
        sideLink('#/papers', '真题模考', false, PAPERS.filter(function (p) { return p.kind === 'real' && !p.archive; }).length) +
        sideLink('#/knowledge', '知识点图谱', false, KP.length) +
        sideLink('#/q19', '第 19 题专项', false, Q19_ALL.length) +
        sideLink('#/bank', '全题库', false, QS.length) +
        '</div><div class="side-group"><div class="side-title">复盘</div>' +
        sideLink('#/wrong', '错题本', false, wrongList().length) +
        sideLink('#/stats', '学习统计', false) +
        '</div>';
    } else if (main === 'knowledge' || main === 'point') {
      html += '<div class="side-group"><div class="side-title">知识点</div>' +
        sideLink('#/knowledge', '全部章节', !seg[1], CH.length);
      html += CH.map(function (c) {
        return sideLink('#/knowledge/' + c.id, esc(c.title), seg[1] === c.id, pointsOfChapter(c.id).length);
      }).join('');
      html += '</div>';
      if (seg[0] === 'point') {
        var k = KMAP[seg[1]];
        if (k) {
          html += '<div class="side-group"><div class="side-title">' + esc((CHMAP[k.chapter] || {}).title || '') + '</div>' +
            pointsOfChapter(k.chapter).map(function (p) {
              return sideLink('#/point/' + p.id, esc(p.title), p.id === k.id);
            }).join('') + '</div>';
        }
      }
    } else if (main === 'papers') {
      html += '<div class="side-group"><div class="side-title">模考</div>' +
        sideLink('#/papers', '全部试卷', !seg[1], PAPERS.length) +
        sideLink('#/q19', '第 19 题专项', false, Q19_ALL.length) +
        sideLink('#/wrong', '错题本', false, wrongList().length) + '</div>';
      html += '<div class="side-group"><div class="side-title">按年份</div>';
      var ys = [];
      PAPERS.forEach(function (p) { if (!p.archive && ys.indexOf(p.year) < 0) ys.push(p.year); });
      html += ys.map(function (y) {
        var first = PAPERS.filter(function (p) { return p.year === y && !p.archive; })[0];
        return sideLink('#/paper/' + first.id, y + ' 年', seg[1] === first.id);
      }).join('') + '</div>';
      if (seg[1]) {
        var cur = PAPERS.filter(function (p) { return p.id === seg[1]; })[0];
        if (cur) {
          html += '<div class="side-group"><div class="side-title">本卷</div>' +
            '<a class="side-link" href="#/paper/' + cur.id + '">试卷首页</a>' +
            '<a class="side-link" href="#/question/' + cur.questions[0].qid + '">逐题练习</a>' +
            '<a class="side-link" href="#/papers">返回列表</a></div>';
        }
      }
    } else if (main === 'q19') {
      html += '<div class="side-group"><div class="side-title">压轴专项</div>' +
        sideLink('#/q19', '总览与框架', true, Q19_ALL.length) +
        sideLink('#/bank', '题库中筛选', false) +
        sideLink('#/papers', '真题模考', false) + '</div>' +
        '<div class="side-group"><div class="side-title">真题压轴</div>' +
        Q19_ALL.filter(function (q) { return q.kind === 'real'; }).map(function (q) {
          return sideLink('#/question/' + q.qid, esc((q.short || q.source).replace(' · 第 19 题', '')), false);
        }).join('') + '</div>' +
        '<div class="side-group"><div class="side-title">专项加练</div>' +
        Q19_ALL.filter(function (q) { return q.kind !== 'real'; }).slice(0, 8).map(function (q) {
          return sideLink('#/question/' + q.qid, esc(q.tag || '压轴加练'), false);
        }).join('') + '</div>';
    } else if (main === 'bank') {
      html += '<div class="side-group"><div class="side-title">题库</div>' +
        sideLink('#/bank', '全部题目', !seg[1], QS.length) +
        sideLink('#/wrong', '错题本', false, wrongList().length) +
        sideLink('#/stats', '学习统计', false) + '</div>' +
        '<div class="side-group"><div class="side-title">按章节筛选</div>' +
        CH.map(function (c) {
          return '<a class="side-link" href="#/bank" data-bank-ch="' + c.id + '">' + esc(c.title) + '<span class="cnt">' + pointsOfChapter(c.id).length + '</span></a>';
        }).join('') + '</div>';
    } else if (main === 'wrong') {
      html += '<div class="side-group"><div class="side-title">复盘</div>' +
        sideLink('#/wrong', '错题本', true, wrongList().length) +
        sideLink('#/stats', '学习统计', false) +
        sideLink('#/bank', '去题库', false) + '</div>';
    } else if (main === 'stats') {
      html += '<div class="side-group"><div class="side-title">统计</div>' +
        sideLink('#/stats', '今日与近 7 天', true) +
        '<a class="side-link" href="#log">手动记录</a>' +
        sideLink('#/settings', 'AI 与偏好设置', false) +
        '</div>';
    } else {
      html += '<div class="side-group"><div class="side-title">设置</div>' +
        sideLink('#/settings', '偏好设置', true) +
        sideLink('#/stats', '学习统计', false) +
        sideLink('#/home', '回首页', false) + '</div>';
    }
    return html;
  }
  function tocRender() {
    var toc = document.getElementById('toc');
    if (!toc) return;
    var list = [];
    Array.prototype.forEach.call(document.querySelectorAll('#content h2, #content h3'), function (h, i) {
      if (!h.id) h.id = 'sec-' + i;
      list.push({ id: h.id, text: h.textContent, lv: h.tagName === 'H2' ? 2 : 3 });
    });
    if (list.length < 2) { toc.innerHTML = ''; return; }
    toc.innerHTML = '<div class="toc-title">本页目录</div>' + list.map(function (x) {
      return '<a href="#' + x.id + '" class="' + (x.lv === 3 ? 'lv3' : '') + '">' + esc(x.text) + '</a>';
    }).join('');
  }

  /* ================= 搜索 ================= */
  function doSearch(kw) {
    var box = document.getElementById('search-results');
    if (!box) return;
    kw = kw.trim();
    if (!kw) { box.innerHTML = '<p class="search-hint">输入关键词开始搜索；例如“导数”“外接球”“2024”。</p>'; return; }
    var low = kw.toLowerCase();
    var qs = QS.filter(function (q) {
      var hay = plain(q.stem) + ' ' + q.source + ' ' + (q.knowledge || []).map(function (k) { return KMAP[k] ? KMAP[k].title : ''; }).join(' ');
      return hay.toLowerCase().indexOf(low) >= 0;
    }).slice(0, 8);
    var ks = KP.filter(function (k) {
      return (plain(k.title) + ' ' + plain(k.summary) + ' ' + plain(k.core)).toLowerCase().indexOf(low) >= 0;
    }).slice(0, 5);
    var html = '';
    if (ks.length) {
      html += '<div class="side-title">知识点</div>' + ks.map(function (k) {
        return '<a class="sr-item" href="#/point/' + k.id + '"><span class="sr-title">' + esc(k.title) + '<span class="badge">' + esc((CHMAP[k.chapter] || {}).title || '') + '</span></span><span class="sr-sub">' + esc(k.summary) + '</span></a>';
      }).join('');
    }
    if (qs.length) {
      html += '<div class="side-title">题目</div>' + qs.map(function (q) {
        return '<a class="sr-item" href="#/question/' + q.qid + '"><span class="sr-title">第 ' + q.no + ' 题 <span class="badge">' + esc(q.source) + '</span></span><span class="sr-sub">' + esc(plain(q.stem).slice(0, 90)) + '</span></a>';
      }).join('');
    }
    if (!html) html = '<p class="search-hint">没有找到“' + esc(kw) + '”，试试更短的关键词。</p>';
    box.innerHTML = html;
  }
  function openSearch() {
    document.getElementById('search-overlay').hidden = false;
    document.body.classList.add('no-scroll');
    setTimeout(function () { var i = document.getElementById('search-input'); if (i) i.focus(); }, 30);
  }
  function closeSearch() {
    document.getElementById('search-overlay').hidden = true;
    document.body.classList.remove('no-scroll');
  }

  /* ================= 路由 ================= */
  var lastScroll = 0;
  function route(autoScroll) {
    if (autoScroll === undefined) autoScroll = true;
    var hash = location.hash || '#/home';
    if (hash === '#' || hash === '#/') { location.replace('#/home'); return; }
    if (hash.indexOf('#/') !== 0) hash = '#/home';
    var path = hash.replace(/^#\/?/, '');
    var seg = path.split('/').map(decodeURIComponent);
    var main = seg[0] || 'home';
    var content = document.getElementById('content');
    activePaper = null;
    var html = '', tab = main;
    if (main === 'home') html = viewHome();
    else if (main === 'knowledge') {
      if (seg[1] && KMAP[seg[1]]) html = viewPoint(seg[1]);
      else if (seg[1]) html = viewChapter(seg[1]);
      else html = viewKnowledge();
      tab = 'knowledge';
    }
    else if (main === 'point') { html = viewPoint(seg[1]); tab = 'knowledge'; }
    else if (main === 'papers') html = viewPapers();
    else if (main === 'paper') html = viewPaper(seg[1]);
    else if (main === 'q19') { html = viewQ19(); tab = 'q19'; }
    else if (main === 'bank') { html = viewBank(); tab = 'bank'; }
    else if (main === 'question') { html = viewQuestion(seg[1]); tab = 'bank'; }
    else if (main === 'wrong') { html = viewWrong(); tab = 'wrong'; }
    else if (main === 'stats') { html = viewStats(); tab = 'stats'; }
    else if (main === 'settings') { html = viewSettings(); tab = ''; }
    else html = viewNotFound('页面');

    content.innerHTML = html;
    renderMath(content);
    document.getElementById('sidebar').innerHTML = sidebarHtml(main, seg);
    tocRender();
    Array.prototype.forEach.call(document.querySelectorAll('#tabs a'), function (a) {
      a.classList.toggle('active', a.getAttribute('data-tab') === tab);
    });
    document.title = (main === 'home' ? '' : (document.querySelector('#content h1') ? document.querySelector('#content h1').textContent + ' · ' : '')) + '拾阶 · 高三数学';
    bindPageInputs(main);
    if (autoScroll) scrollTop();
  }
  function softRerender() {
    var y = window.scrollY;
    route(false);
    window.scrollTo(0, y);
  }
  function bindPageInputs(main) {
    if (main === 'bank') {
      var kw = document.getElementById('bank-kw');
      if (kw) {
        var timer = null;
        kw.addEventListener('input', function () {
          clearTimeout(timer);
          timer = setTimeout(function () {
            bank.kw = kw.value;
            bank.page = 1;
            renderBankList();
          }, 260);
        });
      }
      ['bank-ch', 'bank-type', 'bank-diff', 'bank-kind'].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('change', function () {
          bank[id.replace('bank-', '')] = el.value;
          bank.page = 1;
          renderBankList();
        });
      });
    }
    if (main === 'settings') {
      var prov = document.getElementById('ai-provider');
      if (prov) {
        prov.addEventListener('change', function () {
          Array.prototype.forEach.call(prov.querySelectorAll('label'), function (l) {
            l.classList.toggle('on', l.querySelector('input').checked);
          });
        });
      }
    }
  }

  /* ================= 事件 ================= */
  document.getElementById('content').addEventListener('click', function (e) {
    var el = e.target.closest('[data-act]');
    if (!el) return;
    var act = el.getAttribute('data-act');
    var qid = el.getAttribute('data-qid');
    var q = qid ? QMAP[qid] : null;

    if (act === 'opt') {
      if (!q) return;
      var key = el.getAttribute('data-key');
      var rec = state.papers[q.paperId];
      var review = !!(rec && rec.submitted);
      var inExam = !!(rec && !rec.submitted);
      if (review) return;
      var graded = attempt(qid);
      if (!inExam && graded && (graded.status === 'correct' || graded.status === 'wrong' || graded.status === 'partial')) {
        toast('本题已判分，点“再做一次”可以重做');
        return;
      }
      var cur = String(getInput(q) || '').toUpperCase();
      var val;
      if (q.type === 'multiple') {
        val = cur.indexOf(key) >= 0 ? cur.replace(key, '') : (cur + key).split('').sort().join('');
      } else {
        val = cur === key ? '' : key;
      }
      saveInput(qid, val);
      var card = document.getElementById('card-' + qid);
      if (card) {
        Array.prototype.forEach.call(card.querySelectorAll('.opt'), function (b) {
          b.classList.toggle('on', val.indexOf(b.getAttribute('data-key')) >= 0);
        });
      }
      updateExamBar();
      return;
    }
    if (act === 'retry') {
      if (!q) return;
      var at = state.attempts[qid];
      if (at) { delete at.status; delete at.input; saveState(); }
      var card = document.getElementById('card-' + qid);
      if (card) {
        var fb = card.querySelector('[data-role="fb"]');
        if (fb) fb.innerHTML = '';
        var sb = card.querySelector('[data-role="self"]');
        if (sb) sb.innerHTML = '';
        var opts = card.querySelector('.options');
        if (opts) opts.outerHTML = optionsHtml(q, getInput(q), false);
        var sol = card.querySelector('[data-role="sol"]');
        if (sol) sol.hidden = true;
        var ta = card.querySelector('[data-fill]');
        if (ta && q.type === 'solve') ta.value = '';
        renderMath(card);
      }
      toast('已清空判分，可以重做');
      return;
    }
    if (act === 'submit') {
      submitQuestion(qid);
      return;
    }
    if (act === 'hint') { toggleHint(qid); return; }
    if (act === 'show-solution') { toggleSolution(qid); return; }
    if (act === 'fav') {
      state.fav[qid] = !state.fav[qid];
      saveState();
      var box = el.closest('.qactions');
      if (box) el.textContent = state.fav[qid] ? '★ 已收藏' : '☆ 收藏';
      toast(state.fav[qid] ? '已收藏' : '已取消收藏');
      if (location.hash.indexOf('#/wrong') === 0) softRerender();
      return;
    }
    if (act === 'self') {
      if (!q) return;
      var v = el.getAttribute('data-val');
      setAttempt(qid, { status: selfStatus(v) });
      var rec2 = state.papers[q.paperId];
      if (rec2 && rec2.submitted) {
        rec2.score = examScore(PAPERS.filter(function (p) { return p.id === q.paperId; })[0] || { questions: [] }).score;
        saveState();
        softRerender();
      } else {
        refreshCard(q);
        toast(v === 'A' ? '已标记“会了”，三天后回做' : v === 'B' ? '已标记“半懂”，去针对卡点' : '已标记“不会”，先看知识点');
      }
      return;
    }
    if (act === 'wrong-remove') {
      if (!q) return;
      setAttempt(qid, { status: 'attempted' });
      softRerender();
      toast('已移出错题本');
      return;
    }
    if (act === 'paper-start') { startPaper(el.getAttribute('data-pid')); return; }
    if (act === 'paper-pause') { pausePaper(el.getAttribute('data-pid')); return; }
    if (act === 'paper-submit') {
      var pid = el.getAttribute('data-pid') || (activePaper && activePaper.id);
      if (pid) submitPaper(pid, false);
      return;
    }
    if (act === 'paper-reset') { resetPaper(el.getAttribute('data-pid')); return; }
    if (act === 'sheet-jump') {
      var target = document.getElementById('card-' + (activePaper ? activePaper.id + '-' + el.getAttribute('data-no') : ''));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (act === 'bank-page') {
      bank.page = parseInt(el.getAttribute('data-page'), 10) || 1;
      renderBankList();
      scrollTop();
      return;
    }
    if (act === 'bank-reset') {
      bank = { kw: '', ch: '', type: '', diff: '', kind: '', page: 1 };
      route(false);
      return;
    }
    if (act === 'admin-unlock') {
      var pv = (document.getElementById('admin-pass') || {}).value || '';
      if (pv !== ADMIN_PASS) { toast('密码不正确'); return; }
      try { sessionStorage.setItem('gk.admin', '1'); } catch (e) {}
      toast('管理者模式已开启');
      route(false);
      return;
    }
    if (act === 'admin-lock') {
      try { sessionStorage.removeItem('gk.admin'); } catch (e) {}
      toast('已退出管理者模式');
      route(false);
      return;
    }
    if (act === 'ext-template') { csvTemplate(); return; }
    if (act === 'ext-export') {
      var blob = new Blob([JSON.stringify(EXTP, null, 2)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'gk-ext-papers.json';
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
      return;
    }
    if (act === 'ext-clear') {
      localStorage.removeItem('gk.ext.v1');
      toast('已清空外部题库，正在刷新');
      setTimeout(function () { location.reload(); }, 500);
      return;
    }
    if (act === 'bank-ch') {
      bank.ch = el.getAttribute('data-bank-ch');
      bank.page = 1;
      location.hash = '#/bank';
      if (location.hash === '#/bank') route(false);
      setTimeout(renderBankList, 0);
      return;
    }
    if (act === 'ai-run') { runAI(qid, 'diagnose'); return; }
    if (act === 'ai-grade') { runAI(qid, 'grade'); return; }
    if (act === 'ai-explain') { runExplain(el.getAttribute('data-kid')); return; }
    if (act === 'log-add') {
      var min = parseInt(document.getElementById('log-min').value, 10);
      var note = document.getElementById('log-note').value.trim();
      if (!min || min <= 0 || min > 600) { toast('请填写 1-600 的分钟数'); return; }
      timeData.logs.unshift({ date: dayKey(), minutes: min, note: note, ts: Date.now() });
      addFocus(min * 60, false);
      saveTime();
      softRerender();
      toast('已记录 ' + min + ' 分钟');
      return;
    }
    if (act === 'log-del') {
      var i = parseInt(el.getAttribute('data-i'), 10);
      var item = timeData.logs[i];
      if (!item) return;
      timeData.logs.splice(i, 1);
      var r = dayRec(item.date);
      r.focus = Math.max(0, (r.focus || 0) - item.minutes * 60);
      saveTime();
      softRerender();
      return;
    }
    if (act === 'pomo-open') {
      var w = document.getElementById('pomo-widget');
      if (w) {
        w.classList.remove('collapsed');
        var body = w.querySelector('.pomo-body');
        if (body) body.hidden = false;
        var x = w.querySelector('.ph-x');
        if (x) x.textContent = '−';
        w.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;
    }
    if (act === 'settings-save') {
      if (window.GK_AI) {
        var provEl = document.querySelector('input[name="aip"]:checked');
        window.GK_AI.save({
          provider: provEl ? provEl.value : 'deepseek',
          key: (document.getElementById('set-key') || {}).value || '',
          baseUrl: (document.getElementById('set-url') || {}).value || '',
          model: (document.getElementById('set-model') || {}).value || ''
        });
      }
      var ex = document.getElementById('set-exam');
      if (ex && ex.value) state.examDate = ex.value;
      var f = parseInt((document.getElementById('set-focus') || {}).value, 10);
      var sh = parseInt((document.getElementById('set-short') || {}).value, 10);
      var lo = parseInt((document.getElementById('set-long') || {}).value, 10);
      if (f > 0) state.pomo.focus = f;
      if (sh > 0) state.pomo.short = sh;
      if (lo > 0) state.pomo.long = lo;
      var th = document.querySelector('input[name="theme"]:checked');
      if (th) { state.theme = th.value; applyTheme(); }
      saveState();
      pomoReset();
      toast('设置已保存');
      return;
    }
    if (act === 'ai-test') {
      var out = document.getElementById('ai-test-out');
      if (!out) return;
      out.textContent = '测试中…';
      window.GK_AI.test().then(function (r) {
        out.textContent = '连通正常（' + r.provider + '）';
      }).catch(function (err) {
        out.textContent = '失败：' + (err.message || '网络错误');
      });
      return;
    }
    if (act === 'data-export') {
      var blob = new Blob([JSON.stringify({ state: state, time: timeData, exportedAt: new Date().toISOString() }, null, 2)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = '拾阶-学习数据-' + dayKey() + '.json';
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
      return;
    }
    if (act === 'data-clear') {
      if (!window.confirm('将清空所有答题记录、错题本、番茄和在线时长，且无法恢复。确定吗？')) return;
      if (!window.confirm('再确认一次：真的清空全部数据？')) return;
      localStorage.removeItem(KEY);
      localStorage.removeItem(TKEY);
      localStorage.removeItem(PKEY);
      location.reload();
      return;
    }
  });

  document.getElementById('content').addEventListener('input', function (e) {
    var el = e.target;
    if (el.hasAttribute('data-fill')) {
      saveInput(el.getAttribute('data-fill'), el.value);
    }
  });
  document.getElementById('content').addEventListener('change', function (e) {
    if (e.target.name === 'theme') {
      state.theme = e.target.value;
      applyTheme();
      saveState();
      Array.prototype.forEach.call(document.querySelectorAll('input[name="theme"]'), function (r) {
        r.closest('label').classList.toggle('on', r.checked);
      });
    }
  });
  document.getElementById('content').addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      var card = e.target.closest('.qcard');
      if (card) { e.preventDefault(); submitQuestion(card.getAttribute('data-qid')); }
    }
  });

  /* ================= 全局交互 ================= */
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme === 'dark' ? 'dark' : 'light');
    try { localStorage.setItem('gk.theme', state.theme); } catch (e) { /* ignore */ }
  }
  document.getElementById('theme-toggle').addEventListener('click', function () {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    saveState();
    toast(state.theme === 'dark' ? '已切换护眼深色' : '已切换柔和浅色');
  });
  document.getElementById('pomo-mini').addEventListener('click', function () {
    var w = document.getElementById('pomo-widget');
    if (!w) return;
    w.classList.remove('collapsed');
    var body = w.querySelector('.pomo-body');
    if (body) body.hidden = false;
    w.querySelector('.ph-x').textContent = '−';
    w.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
  document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open');
  });
  document.getElementById('sidebar').addEventListener('click', function (e) {
    if (e.target.closest('a')) document.getElementById('sidebar').classList.remove('open');
  });
  document.getElementById('search-open').addEventListener('click', openSearch);
  document.getElementById('search-close').addEventListener('click', closeSearch);
  document.getElementById('search-overlay').addEventListener('click', function (e) {
    if (e.target === this) closeSearch();
  });
  document.getElementById('search-input').addEventListener('input', function () { doSearch(this.value); });
  document.getElementById('search-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      var first = document.querySelector('#search-results a');
      if (first) { closeSearch(); location.hash = first.getAttribute('href'); }
    }
  });
  document.addEventListener('keydown', function (e) {
    var tag = (e.target.tagName || '').toLowerCase();
    if (e.key === '/' && tag !== 'input' && tag !== 'textarea' && tag !== 'select') {
      e.preventDefault(); openSearch();
    }
    if (e.key === 'Escape') closeSearch();
  });
  window.addEventListener('hashchange', function () {
    var h = location.hash || '';
    if (h.indexOf('#/') === 0) route(true);
    else {
      var el = document.getElementById(h.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  document.getElementById('search-results').addEventListener('click', function (e) {
    if (e.target.closest('a')) closeSearch();
  });

  /* ================= 定时循环 ================= */
  setInterval(function () {
    tickPomo();
    tickOnline();
    if (activePaper) {
      var rec = state.papers[activePaper.id];
      if (rec && rec.running) {
        updateExamBar();
        if (paperRemain(activePaper) <= 0) submitPaper(activePaper.id, true);
      }
    }
  }, 1000);

  /* ================= 启动 ================= */
  function boot() {
    try {
      var savedTheme = localStorage.getItem('gk.theme');
      if (savedTheme) state.theme = savedTheme;
    } catch (e) { /* ignore */ }
    applyTheme();
    mountPomo();
    if (!location.hash || location.hash === '#' || location.hash === '#/') location.replace('#/home');
    route(true);
    if (pomo.remain == null) pomo.remain = pomoDuration();
    pomoRender();
    document.addEventListener('change', function (e) {
      if (e.target && e.target.id === 'ext-file') importExt(e.target.files && e.target.files[0]);
    });
  }
  boot();
})();
