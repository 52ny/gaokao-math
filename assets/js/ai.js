/* AI 接入层：DeepSeek / 内置免费智能体 / 自定义 OpenAI 兼容接口
 * 所有请求直连浏览器；失败时由页面降级为本地诊断。
 */
(function () {
  'use strict';

  var BUILTIN = [
    { name: 'llm7.io', url: 'https://api.llm7.io/v1/chat/completions', model: 'gpt-oss:20b' },
    { name: 'Pollinations', url: 'https://text.pollinations.ai/openai', model: 'openai' }
  ];
  var DEEPSEEK_URL = 'https://api.deepseek.com/v1/chat/completions';

  function settings() {
    var s = {};
    try { s = JSON.parse(localStorage.getItem('gk.ai.v1') || '{}'); } catch (e) { s = {}; }
    return {
      provider: s.provider || 'deepseek',
      baseUrl: s.baseUrl || DEEPSEEK_URL,
      model: s.model || 'deepseek-chat',
      key: s.key || ''
    };
  }

  function save(patch) {
    var s = settings();
    Object.keys(patch || {}).forEach(function (k) { s[k] = patch[k]; });
    localStorage.setItem('gk.ai.v1', JSON.stringify(s));
    return s;
  }

  function plain(s) {
    return String(s == null ? '' : s).replace(/@/g, '\\').replace(/§/g, '\\\\');
  }

  function compact(q) {
    return {
      stem: plain(q.stem),
      type: q.type,
      answer: plain(q.answer),
      options: (q.options || []).map(function (o) { return o.k + '. ' + plain(o.t); }).join(' | '),
      solution: (q.solution || []).map(plain),
      pitfalls: q.pitfalls || [],
      takeaway: plain(q.takeaway || ''),
      source: q.source || ''
    };
  }

  function buildDiagnose(q, work, self, kn) {
    var c = compact(q);
    var system = '你是高三数学备考教练，熟悉新高考Ⅰ/Ⅱ卷与全国卷。你的任务是诊断学生卡壳的真正原因，' +
      '把问题拆成“知识点层”和“真题层”两部分，要求直接、具体、可执行。' +
      '必须使用简体中文；数学公式用 $...$ 包裹；不要使用代码块；不要编造题目条件；不要整段复述标准答案。';
    var user = [
      '学生正在做一道高考数学题，请分析他的思路问题。',
      '',
      '【题目】' + c.stem,
      c.options ? '【选项】' + c.options : '',
      '【题型】' + ({ single: '单选', multiple: '多选', fill: '填空', solve: '解答' }[c.type] || c.type) + '，来源：' + (c.source || ''),
      '【参考答案】' + c.answer,
      '【参考解法】\n' + c.solution.map(function (s, i) { return (i + 1) + '. ' + s; }).join('\n'),
      '【涉及知识点】' + (kn || []).map(function (k) { return k.title + '（' + plain(k.summary) + '）'; }).join('；'),
      '【常见错误】' + c.pitfalls.join('；'),
      '【学生的思路 / 卡点】' + (work && work.trim() ? work.trim() : '（学生完全没思路，或不愿写）'),
      '【学生自评】' + (self || '未自评'),
      '',
      '严格按以下结构输出，总字数 500-700：',
      '## 卡点定位',
      '第一行用粗体标注类型（概念不清 / 方法选错 / 计算失误 / 逻辑跳步 / 审题偏差），然后用 2-3 句说明具体卡在哪一步。若学生写了思路，要指出他的第一步错在哪里。',
      '## 知识点层：需要补什么',
      '3-4 条 bullet，格式：**知识点名** —— 它在这道题里承担什么作用。只讲知识本身，不写本题步骤。',
      '## 真题层：这道题怎么切入',
      '3-4 条 bullet，每条写“看到什么条件 → 做什么动作”，点出关键转化，但不要给出完整计算。',
      '## 提示阶梯',
      '两条由浅入深的提示：第一条只指方向，第二条可以点出关键公式或中间结论。',
      '## 练有所获',
      '- 一句可以背下来的方法论',
      '- 一道同结构的加练建议（写清练什么条件、什么设问）'
    ].filter(Boolean).join('\n');
    return [{ role: 'system', content: system }, { role: 'user', content: user }];
  }

  function buildGrade(q, myAnswer) {
    var c = compact(q);
    var system = '你是高三数学阅卷老师。请按新高考评分标准点评学生解答，必须使用简体中文，公式用 $...$。' +
      '不要使用代码块，不要人身评价。';
    var user = [
      '【题目】' + c.stem,
      '【参考答案】' + c.answer,
      '【参考解法】\n' + c.solution.map(function (s, i) { return (i + 1) + '. ' + s; }).join('\n'),
      '【学生解答】' + (myAnswer || '（空）'),
      '',
      '请按以下结构输出（400 字以内）：',
      '## 预估得分',
      '给出 0-100% 的完成度，并说明扣分点。',
      '## 关键错误',
      '2-3 条，指出第几步、哪条逻辑或计算有问题；若正确也请指出可以更简洁的地方。',
      '## 补一行',
      '用一句话补上学生缺失的关键步骤。',
      '## 下一步',
      '一句可执行的改进建议。'
    ].join('\n');
    return [{ role: 'system', content: system }, { role: 'user', content: user }];
  }

  function buildExplain(point) {
    var system = '你是高三数学老师。用简体中文把知识点讲透，公式用 $...$，不要代码块。语气直接、具体。';
    var user = [
      '请把下面这个高考数学知识点讲成“学生能立刻用”的版本：',
      '【知识点】' + point.title,
      '【概述】' + plain(point.summary),
      '【核心讲解】' + plain(point.core),
      '【公式】' + (point.formulas || []).map(function (f) { return f.label + '：' + plain(f.tex); }).join('；'),
      '【常见易错】' + (point.pitfalls || []).join('；'),
      '',
      '按以下结构输出（400 字以内）：',
      '## 一句话本质',
      '## 什么时候会用到（3 个题干信号）',
      '## 一个最小例题（自己编一道 2 步能做完的小题，并给答案）',
      '## 最容易错的 1 个地方'
    ].join('\n');
    return [{ role: 'system', content: system }, { role: 'user', content: user }];
  }

  function endpoints() {
    var s = settings();
    if (s.provider === 'deepseek') {
      if (s.key) return [{ name: 'DeepSeek', url: s.baseUrl || DEEPSEEK_URL, model: s.model || 'deepseek-chat', key: s.key }];
      return BUILTIN;
    }
    if (s.provider === 'custom') {
      if (!s.baseUrl) throw new Error('还没有填写接口地址，请到「学习统计 → AI 设置」里配置。');
      if (!s.key) throw new Error('还没有填写 API Key，请到「学习统计 → AI 设置」里配置。');
      return [{ name: '自定义接口', url: s.baseUrl, model: s.model || 'deepseek-chat', key: s.key }];
    }
    return BUILTIN;
  }

  async function streamOnce(ep, messages, onDelta, signal) {
    var headers = { 'Content-Type': 'application/json' };
    if (ep.key) headers.Authorization = 'Bearer ' + ep.key;
    var body = { model: ep.model, messages: messages, stream: true };
    if (!/reasoner/.test(ep.model)) body.temperature = 0.35;
    var res = await fetch(ep.url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
      signal: signal
    });
    if (!res.ok) {
      var detail = '';
      try {
        var err = await res.json();
        detail = (err && err.error && (err.error.message || err.error.type)) || '';
      } catch (e) { /* ignore */ }
      var tip = { 400: '请求格式有误', 401: 'API Key 无效或未填写', 402: '账户余额不足', 403: '无权限访问该模型', 404: '接口地址或模型名不存在', 429: '请求过于频繁或额度用尽', 500: '服务端错误', 503: '服务繁忙' }[res.status] || '请求失败';
      throw new Error(ep.name + '：' + tip + '（HTTP ' + res.status + '）' + (detail ? ' · ' + detail : ''));
    }
    var ctype = res.headers.get('content-type') || '';
    if (!res.body || ctype.indexOf('text/event-stream') < 0) {
      var data = await res.json();
      var text = data && data.choices && data.choices[0] && (data.choices[0].message || {}).content;
      if (!text) throw new Error(ep.name + ' 返回内容为空');
      onDelta(text);
      return text;
    }
    var reader = res.body.getReader();
    var decoder = new TextDecoder('utf-8');
    var buf = '';
    var full = '';
    while (true) {
      var chunk = await reader.read();
      if (chunk.done) break;
      buf += decoder.decode(chunk.value, { stream: true });
      var lines = buf.split('\n');
      buf = lines.pop();
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (!line || line.indexOf('data:') !== 0) continue;
        var payload = line.slice(5).trim();
        if (payload === '[DONE]') continue;
        try {
          var j = JSON.parse(payload);
          var d = j.choices && j.choices[0] && (j.choices[0].delta || {});
          if (d && d.content) { full += d.content; onDelta(d.content); }
        } catch (e) { /* 忽略不完整分片 */ }
      }
    }
    if (!full.trim()) throw new Error(ep.name + ' 没有返回内容');
    return full;
  }

  async function chat(messages, onDelta) {
    var list = endpoints();
    var lastErr = null;
    for (var i = 0; i < list.length; i++) {
      var ctrl = new AbortController();
      var timer = setTimeout(function () { ctrl.abort(); }, 90000);
      try {
        var text = await streamOnce(list[i], messages, onDelta, ctrl.signal);
        clearTimeout(timer);
        return { text: text, provider: list[i].name };
      } catch (e) {
        clearTimeout(timer);
        lastErr = e;
      }
    }
    throw lastErr || new Error('所有 AI 通道都不可用');
  }

  function test() {
    return chat([{ role: 'user', content: '只回复四个字：连通正常' }], function () {});
  }

  window.GK_AI = {
    settings: settings,
    save: save,
    chat: chat,
    test: test,
    diagnose: function (q, work, self, kn, onDelta) { return chat(buildDiagnose(q, work, self, kn), onDelta); },
    grade: function (q, myAnswer, onDelta) { return chat(buildGrade(q, myAnswer), onDelta); },
    explain: function (point, onDelta) { return chat(buildExplain(point), onDelta); },
    builtinNames: BUILTIN.map(function (b) { return b.name; })
  };
})();
