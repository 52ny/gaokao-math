/* 知识点“保持题感”母题 42 道：导数 3 点 + 三角 4 点，每点 6 题
 * 公式约定：LaTeX 反斜杠一律写成 @；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_DRILL = window.GK_DRILL || [];
window.GK_DRILL.push(
  /* ================= k-dv-ineq：导数证不等式与构造函数 ================= */
  {
    id: 'dr-b-1', knowledge: ['k-dv-ineq'], type: 'single', difficulty: 2, score: 5,
    stem: `下列不等式在 $x>0$ 时恒成立的是`,
    options: [
      { k: 'A', t: `$@ln x@ge x-1$` },
      { k: 'B', t: `$e^x@le x+1$` },
      { k: 'C', t: `$@ln x@le x-1$` },
      { k: 'D', t: `$@ln x@ge@frac{1}{x}$` }
    ],
    answer: 'C', accept: [],
    solution: [
      `令 $h(x)=@ln x-x+1$，定义域 $x>0$，$h'(x)=@frac{1-x}{x}$。`,
      `当 $0<x<1$ 时 $h'(x)>0$，当 $x>1$ 时 $h'(x)<0$，故 $h(x)$ 在 $x=1$ 处取最大值 $h(1)=0$。`,
      `所以 $@ln x@le x-1$ 恒成立，选 C；A 与它方向相反，B 是 $e^x@ge x+1$ 的反向，D 在 $x=1$ 处不成立。`
    ],
    hints: ['把不等式移项后构造函数，用导数求最大值。'],
    pitfalls: ['把两条切线放缩的方向记反，$@ln x$ 在切线下侧、$e^x$ 在切线上侧。'],
    takeaway: '对数放缩 $@ln x@le x-1$，指数放缩 $e^x@ge x+1$，都是切线结论。'
  },
  {
    id: 'dr-b-2', knowledge: ['k-dv-ineq'], type: 'single', difficulty: 3, score: 5,
    stem: `设 $a=@frac{@ln2}{2}$，$b=@frac{@ln3}{3}$，$c=@frac{@ln5}{5}$，则 $a,b,c$ 的大小关系为`,
    options: [
      { k: 'A', t: `$c<a<b$` },
      { k: 'B', t: `$a<b<c$` },
      { k: 'C', t: `$b<a<c$` },
      { k: 'D', t: `$c<b<a$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `构造 $f(x)=@frac{@ln x}{x}$，$f'(x)=@frac{1-@ln x}{x^2}$，故 $f$ 在 $(0,e)$ 上递增，在 $(e,+@infty)$ 上递减。`,
      `因为 $3<e<5$，所以 $f(5)<f(3)$；又 $2<e<3$，所以 $f(2)<f(3)$，即 $b$ 最大。`,
      `比较 $a$ 与 $c$：$5@ln2$ 与 $2@ln5$ 即 $@ln32$ 与 $@ln25$，故 $a>c$。综上 $c<a<b$，选 A。`
    ],
    hints: ['把三个数统一看成同一个函数在 $2,3,5$ 处的取值。'],
    pitfalls: ['只比较 $2,3,5$ 的大小，忽略了函数在 $e$ 两侧的单调性不同。'],
    takeaway: '比较 $@frac{@ln n}{n}$ 型大小，先研究 $f(x)=@frac{@ln x}{x}$ 的单调性。'
  },
  {
    id: 'dr-b-3', knowledge: ['k-dv-ineq'], type: 'single', difficulty: 3, score: 5,
    stem: `若不等式 $e^x@ge ax$ 对任意 $x>0$ 恒成立，则实数 $a$ 的最大值为`,
    options: [
      { k: 'A', t: `$e$` },
      { k: 'B', t: `$1$` },
      { k: 'C', t: `$@frac{1}{e}$` },
      { k: 'D', t: `$e^2$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `由 $x>0$ 得 $a@le@frac{e^x}{x}$，问题转化为求 $g(x)=@frac{e^x}{x}$ 的最小值。`,
      `$g'(x)=@frac{e^x(x-1)}{x^2}$，故 $g$ 在 $(0,1)$ 上递减，在 $(1,+@infty)$ 上递增。`,
      `所以 $g(x)_{@min}=g(1)=e$，从而 $a@le e$，最大值为 $e$，选 A。`
    ],
    hints: ['先分离参数，再把恒成立问题转成求函数最小值。'],
    pitfalls: ['忘记 $x>0$ 时才能直接除以 $x$ 分离参数。'],
    takeaway: '恒成立求参数：能分离就分离，参数小于另一侧函数的最小值。'
  },
  {
    id: 'dr-b-4', knowledge: ['k-dv-ineq'], type: 'multiple', difficulty: 4, score: 6,
    stem: `已知函数 $f(x)=@ln x-x+1$，则下列结论正确的是`,
    options: [
      { k: 'A', t: `$f(x)$ 在 $(0,1)$ 上单调递增` },
      { k: 'B', t: `$f(x)$ 的最大值为 $0$` },
      { k: 'C', t: `$f(x)@le0$ 对任意 $x>0$ 恒成立` },
      { k: 'D', t: `$f(2)>0$` }
    ],
    answer: 'ABC', accept: [],
    solution: [
      `$f'(x)=@frac1x-1=@frac{1-x}{x}$，当 $0<x<1$ 时 $f'(x)>0$，故 A 正确。`,
      `当 $x>1$ 时 $f'(x)<0$，所以 $f(x)$ 在 $x=1$ 处取最大值 $f(1)=0$，B 正确。`,
      `由最大值非正得 $f(x)@le0$ 恒成立，C 正确；$f(2)=@ln2-1<0$，D 错误。`
    ],
    hints: ['先求导确定单调区间，再判断最大值与端点趋势。'],
    pitfalls: ['看到 $@ln2<1$ 却把 $f(2)$ 的符号判断反。'],
    takeaway: '作差构造后求出最大值，最大值非正即得原不等式。'
  },
  {
    id: 'dr-b-5', knowledge: ['k-dv-ineq'], type: 'fill', difficulty: 2, score: 5,
    stem: `曲线 $y=e^x$ 在点 $(0,1)$ 处的切线方程为 ________ .`,
    answer: `$y=x+1$`,
    accept: ['y=x+1', 'x+1'],
    solution: [
      `设 $y=e^x$，则 $y'=e^x$，在 $x=0$ 处切线斜率为 $e^0=1$。`,
      `由点斜式 $y-1=1@cdot(x-0)$，即 $y=x+1$。`
    ],
    hints: ['先求导得斜率，再用点斜式。'],
    pitfalls: ['把切点纵坐标写成 $0$，得到错误的截距。'],
    takeaway: '指数函数在 $x=0$ 处的切线正是放缩 $e^x@ge x+1$ 的等号位置。'
  },
  {
    id: 'dr-b-6', knowledge: ['k-dv-ineq'], type: 'solve', difficulty: 4, score: 10,
    stem: `已知函数 $f(x)=e^x-ax-1$。
(1) 当 $a=1$ 时，求 $f(x)$ 的最小值；
(2) 若 $f(x)@ge0$ 对任意 $x@in@mathbb{R}$ 恒成立，求实数 $a$ 的值。`,
    answer: `(1) $0$；(2) $a=1$`,
    accept: [],
    solution: [
      `(1) 当 $a=1$ 时 $f(x)=e^x-x-1$，$f'(x)=e^x-1$，故 $f$ 在 $(-@infty,0)$ 上递减，在 $(0,+@infty)$ 上递增。`,
      `所以 $f(x)_{@min}=f(0)=0$。`,
      `(2) $f'(x)=e^x-a$。若 $a@le0$，则 $f'(x)>0$，$f$ 在 $@mathbb{R}$ 上递增，而 $f(0)=0$，故 $x<0$ 时 $f(x)<0$，不合题意。`,
      `若 $a>0$，则 $f$ 在 $x=@ln a$ 处取最小值 $f(@ln a)=a-a@ln a-1$。`,
      `令 $h(a)=a-a@ln a-1$，$h'(a)=-@ln a$，故 $h$ 在 $a=1$ 处取最大值 $h(1)=0$。`,
      `要使 $f(x)@ge0$ 恒成立，需 $h(a)@ge0$，而 $h(a)@le0$，故只能 $a=1$。`
    ],
    hints: ['第 (2) 问先按 $a@le0$ 与 $a>0$ 讨论，$a>0$ 时最小值在 $x=@ln a$ 处。', '把最小值看成关于 $a$ 的函数，再求它的最大值。'],
    pitfalls: ['只讨论 $a>0$，漏掉 $a@le0$ 时 $x<0$ 使 $f(x)<0$ 的情形。', '由 $h(a)@ge0$ 直接写 $a@ge1$，忘记 $h(a)$ 本身不超过 $0$。'],
    takeaway: '含参恒成立：先分类求最小值，再把最小值非负转化为关于参数的不等式。'
  },

  /* ================= k-dv-param：含参分类讨论 ================= */
  {
    id: 'dr-b-7', knowledge: ['k-dv-param'], type: 'single', difficulty: 2, score: 5,
    stem: `若函数 $f(x)=x^3-3ax$ 在 $@mathbb{R}$ 上单调递增，则实数 $a$ 的取值范围是`,
    options: [
      { k: 'A', t: `$a@le0$` },
      { k: 'B', t: `$a@ge0$` },
      { k: 'C', t: `$a@le3$` },
      { k: 'D', t: `$a@ge3$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$f'(x)=3x^2-3a$，在 $@mathbb{R}$ 上单调递增需 $f'(x)@ge0$ 恒成立。`,
      `即 $3x^2@ge3a$ 对任意 $x$ 成立，而 $3x^2$ 的最小值为 $0$，故 $a@le0$。`,
      `当 $a@le0$ 时 $f'(x)@ge0$ 且仅在孤立点取等，符合题意，选 A。`
    ],
    hints: ['三次函数在 $@mathbb{R}$ 上递增，等价于导函数恒非负。'],
    pitfalls: ['解成 $a@ge0$，把 $3x^2@ge3a$ 的方向弄反。'],
    takeaway: '整段单调递增：导数恒非负；整段递减：导数恒非正。'
  },
  {
    id: 'dr-b-8', knowledge: ['k-dv-param'], type: 'single', difficulty: 3, score: 5,
    stem: `若函数 $f(x)=x^2-2ax+@ln x$ 在 $(0,+@infty)$ 上单调递增，则实数 $a$ 的最大值为`,
    options: [
      { k: 'A', t: `$@sqrt2$` },
      { k: 'B', t: `$2@sqrt2$` },
      { k: 'C', t: `$@frac{@sqrt2}{2}$` },
      { k: 'D', t: `$2$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$f'(x)=2x-2a+@frac1x$，要求在 $x>0$ 上 $f'(x)@ge0$ 恒成立。`,
      `分离参数得 $2a@le2x+@frac1x$，由基本不等式 $2x+@frac1x@ge2@sqrt2$，等号在 $x=@frac{@sqrt2}{2}$ 处成立。`,
      `所以 $2a@le2@sqrt2$，即 $a@le@sqrt2$，最大值为 $@sqrt2$，选 A。`
    ],
    hints: ['先求导，再分离参数，最后用基本不等式求下界。'],
    pitfalls: ['基本不等式取等条件写错，或忘记最后除以 $2$。'],
    takeaway: '恒成立问题分离参数后，用基本不等式求另一侧函数的最值。'
  },
  {
    id: 'dr-b-9', knowledge: ['k-dv-param'], type: 'single', difficulty: 3, score: 5,
    stem: `若函数 $f(x)=x^3-ax^2+1$ 在 $(0,1)$ 上单调递减，则实数 $a$ 的取值范围是`,
    options: [
      { k: 'A', t: `$a@ge@frac32$` },
      { k: 'B', t: `$a@le@frac32$` },
      { k: 'C', t: `$a@ge3$` },
      { k: 'D', t: `$a@ge2$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$f'(x)=3x^2-2ax=x(3x-2a)$，在 $(0,1)$ 上 $x>0$，故需 $3x-2a@le0$ 恒成立。`,
      `即 $a@ge@frac{3x}{2}$ 对 $x@in(0,1)$ 恒成立，而 $@frac{3x}{2}<@frac32$。`,
      `所以 $a@ge@frac32$；当 $a=@frac32$ 时 $f'(x)=3x(x-1)<0$，符合题意，选 A。`
    ],
    hints: ['先提公因式 $x$，再对剩下的因式分离参数。'],
    pitfalls: ['把“恒小于零”转化成 $a$ 小于右侧函数的最大值，方向弄反。'],
    takeaway: '区间上单调递减：导数恒非正；参数与变量分离后取右侧函数的界。'
  },
  {
    id: 'dr-b-10', knowledge: ['k-dv-param'], type: 'multiple', difficulty: 4, score: 6,
    stem: `已知函数 $f(x)=@ln x-ax$，则下列结论正确的是`,
    options: [
      { k: 'A', t: `当 $a@le0$ 时，$f(x)$ 在 $(0,+@infty)$ 上单调递增` },
      { k: 'B', t: `当 $a>0$ 时，$f(x)$ 在 $x=@frac1a$ 处取得最大值` },
      { k: 'C', t: `若 $f(x)@le0$ 恒成立，则 $a@ge@frac1e$` },
      { k: 'D', t: `若 $f(x)$ 有两个零点，则 $a>@frac1e$` }
    ],
    answer: 'ABC', accept: [],
    solution: [
      `$f'(x)=@frac1x-a=@frac{1-ax}{x}$，定义域 $x>0$。当 $a@le0$ 时 $f'(x)>0$，A 正确。`,
      `当 $a>0$ 时，$0<x<@frac1a$ 时 $f'>0$，$x>@frac1a$ 时 $f'<0$，故在 $x=@frac1a$ 处取最大值 $f(@frac1a)=-@ln a-1$，B 正确。`,
      `$f(x)@le0$ 恒成立需最大值 $-@ln a-1@le0$，得 $a@ge@frac1e$，C 正确。`,
      `有两个零点需最大值大于 $0$，即 $-@ln a-1>0$，得 $0<a<@frac1e$，D 错误。`
    ],
    hints: ['先求导，再按 $a$ 的正负分类；最大值与零点个数都看同一个最大值。'],
    pitfalls: ['把“最大值小于等于零”与“最大值大于零”对应的参数范围搞混。'],
    takeaway: '$@ln x-ax$ 型函数：$a@le0$ 单调增，$a>0$ 在 $x=@frac1a$ 取最大值。'
  },
  {
    id: 'dr-b-11', knowledge: ['k-dv-param'], type: 'fill', difficulty: 3, score: 5,
    stem: `若函数 $f(x)=x^3-3x+a$ 在 $[-2,2]$ 上的最大值为 $5$，则 $a=$ ________ .`,
    answer: `$3$`,
    accept: ['3'],
    solution: [
      `$f'(x)=3x^2-3=3(x-1)(x+1)$，驻点为 $x=@pm1$。`,
      `计算得 $f(-2)=a-2$，$f(-1)=a+2$，$f(1)=a-2$，$f(2)=a+2$。`,
      `最大值为 $a+2=5$，故 $a=3$。`
    ],
    hints: ['闭区间最值要把极值和两个端点放在一起比较。'],
    pitfalls: ['只比较两个极值，漏掉端点 $x=2$。'],
    takeaway: '闭区间最值：极值加端点一起比，含参时直接由最大值的表达式解参数。'
  },
  {
    id: 'dr-b-12', knowledge: ['k-dv-param'], type: 'solve', difficulty: 4, score: 10,
    stem: `已知函数 $f(x)=x^2-2a@ln x$（$a@in@mathbb{R}$）。
(1) 讨论 $f(x)$ 的单调性；
(2) 若 $f(x)@ge0$ 对任意 $x>0$ 恒成立，求 $a$ 的取值范围。`,
    answer: `(1) 当 $a@le0$ 时，$f(x)$ 在 $(0,+@infty)$ 上单调递增；当 $a>0$ 时，$f(x)$ 在 $(0,@sqrt{a})$ 上单调递减，在 $(@sqrt{a},+@infty)$ 上单调递增；(2) $0@le a@le e$`,
    accept: [],
    solution: [
      `(1) 定义域 $x>0$，$f'(x)=2x-@frac{2a}{x}=@frac{2(x^2-a)}{x}$。`,
      `当 $a@le0$ 时 $x^2-a>0$，$f'(x)>0$，$f$ 在 $(0,+@infty)$ 上递增。`,
      `当 $a>0$ 时，$0<x<@sqrt{a}$ 时 $f'(x)<0$，$x>@sqrt{a}$ 时 $f'(x)>0$，故 $f$ 在 $(0,@sqrt{a})$ 上递减，在 $(@sqrt{a},+@infty)$ 上递增。`,
      `(2) 若 $a<0$，当 $x@to0^+$ 时 $-2a@ln x@to-@infty$，$f(x)@to-@infty$，不合题意；$a=0$ 时 $f(x)=x^2@ge0$，符合。`,
      `若 $a>0$，由 (1) 得最小值 $f(@sqrt{a})=a-2a@ln@sqrt{a}=a(1-@ln a)$。`,
      `需 $a(1-@ln a)@ge0$，即 $@ln a@le1$，得 $0<a@le e$。`,
      `综上 $a$ 的取值范围为 $0@le a@le e$。`
    ],
    hints: ['第 (1) 问按 $a@le0$ 与 $a>0$ 分类，注意定义域。', '第 (2) 问用第 (1) 问的最小值，并单独检查 $a<0$ 时 $x@to0^+$ 的趋势。'],
    pitfalls: ['忽略 $a<0$ 时 $f(x)$ 在 $x@to0^+$ 时趋于负无穷。', '把最小值 $a(1-@ln a)$ 中的 $@ln@sqrt{a}$ 算成 $@ln a$。'],
    takeaway: '含参单调性按导数零点是否在定义域内分类；恒成立再回代最小值。'
  },

  /* ================= k-dv-zero：零点个数与隐零点 ================= */
  {
    id: 'dr-b-13', knowledge: ['k-dv-zero'], type: 'single', difficulty: 2, score: 5,
    stem: `函数 $f(x)=e^x+x-2$ 的零点个数为`,
    options: [
      { k: 'A', t: `$0$` },
      { k: 'B', t: `$1$` },
      { k: 'C', t: `$2$` },
      { k: 'D', t: `$3$` }
    ],
    answer: 'B', accept: [],
    solution: [
      `$f'(x)=e^x+1>0$，故 $f(x)$ 在 $@mathbb{R}$ 上单调递增，至多一个零点。`,
      `又 $f(0)=1+0-2=-1<0$，$f(1)=e-1>0$，由零点存在定理知在 $(0,1)$ 内恰有一个零点。`,
      `所以零点个数为 $1$，选 B。`
    ],
    hints: ['先由导数判断单调性，再用两端异号说明存在。'],
    pitfalls: ['只算出一个函数值为负就下结论，没有说明单调性。'],
    takeaway: '零点个数：单调性定“至多”，端点异号定“至少”。'
  },
  {
    id: 'dr-b-14', knowledge: ['k-dv-zero'], type: 'single', difficulty: 3, score: 5,
    stem: `若函数 $f(x)=xe^x-a$ 有两个零点，则实数 $a$ 的取值范围是`,
    options: [
      { k: 'A', t: `$@left(-@frac1e,0@right)$` },
      { k: 'B', t: `$@left(0,@frac1e@right)$` },
      { k: 'C', t: `$(-@infty,0)$` },
      { k: 'D', t: `$@left(-@frac1e,+@infty@right)$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$f'(x)=(x+1)e^x$，故 $f$ 在 $(-@infty,-1)$ 上递减，在 $(-1,+@infty)$ 上递增。`,
      `最小值 $f(-1)=-@frac1e$；当 $x@to-@infty$ 时 $xe^x@to0^-$，当 $x@to+@infty$ 时 $f(x)@to+@infty$。`,
      `要有两个零点，需最小值小于 $0$ 且右端趋于正无穷，即 $-@frac1e<a<0$，选 A。`
    ],
    hints: ['先求 $xe^x$ 的单调性与最小值，再画水平线 $y=a$。'],
    pitfalls: ['把 $x@to-@infty$ 时 $xe^x@to0$ 误当成趋于负无穷。'],
    takeaway: '$f(x)=a$ 的根的个数，就是水平线与曲线 $y=f(x)$ 的交点个数。'
  },
  {
    id: 'dr-b-15', knowledge: ['k-dv-zero'], type: 'single', difficulty: 3, score: 5,
    stem: `若函数 $f(x)=x^3-3x+a$ 恰有两个零点，则实数 $a$ 的值为`,
    options: [
      { k: 'A', t: `$2$` },
      { k: 'B', t: `$-2$` },
      { k: 'C', t: `$@pm2$` },
      { k: 'D', t: `$0$` }
    ],
    answer: 'C', accept: [],
    solution: [
      `$f'(x)=3(x-1)(x+1)$，故极大值为 $f(-1)=a+2$，极小值为 $f(1)=a-2$。`,
      `三次函数恰有两个零点，等价于某个极值等于 $0$，即 $a+2=0$ 或 $a-2=0$。`,
      `所以 $a=@pm2$，选 C。`
    ],
    hints: ['三次函数有两个零点时，图像必与 $x$ 轴在极值点处相切。'],
    pitfalls: ['只解出一个 $a$，漏掉极大值或极小值为零的另一种情况。'],
    takeaway: '三次函数零点个数看两个极值的符号，相切对应极值为零。'
  },
  {
    id: 'dr-b-16', knowledge: ['k-dv-zero'], type: 'multiple', difficulty: 4, score: 6,
    stem: `已知函数 $f(x)=xe^x$，则下列结论正确的是`,
    options: [
      { k: 'A', t: `$f(x)$ 在 $(-@infty,-1)$ 上单调递减` },
      { k: 'B', t: `$f(x)$ 的最小值为 $-@frac1e$` },
      { k: 'C', t: `当 $-@frac1e<a<0$ 时，方程 $f(x)=a$ 有两个实根` },
      { k: 'D', t: `若方程 $f(x)=a$ 恰有一个实根，则 $a@ge0$` }
    ],
    answer: 'ABC', accept: [],
    solution: [
      `$f'(x)=(x+1)e^x$，当 $x<-1$ 时 $f'<0$，故 A 正确。`,
      `当 $x>-1$ 时 $f'>0$，所以最小值 $f(-1)=-@frac1e$，B 正确。`,
      `当 $-@frac1e<a<0$ 时，水平线 $y=a$ 与曲线有两个交点，C 正确。`,
      `当 $a=-@frac1e$ 时方程也恰有一个实根（切点），故 D 错误。`
    ],
    hints: ['先求导画出 $xe^x$ 的草图，注意 $x@to-@infty$ 时函数值趋于 $0^-$。'],
    pitfalls: ['漏掉相切时 $a=-@frac1e$ 也只有一个实根。'],
    takeaway: '零点个数要把极小值、渐近值一起看，相切算一个根。'
  },
  {
    id: 'dr-b-17', knowledge: ['k-dv-zero'], type: 'fill', difficulty: 3, score: 5,
    stem: `函数 $f(x)=x^2-2@ln x$ 的零点个数为 ________ .`,
    answer: `$0$`,
    accept: ['0'],
    solution: [
      `定义域 $x>0$，$f'(x)=2x-@frac2x=@frac{2(x^2-1)}{x}$。`,
      `故 $f$ 在 $(0,1)$ 上递减，在 $(1,+@infty)$ 上递增，最小值 $f(1)=1$。`,
      `因为最小值 $1>0$，所以图像全在 $x$ 轴上方，零点个数为 $0$。`
    ],
    hints: ['先求最小值，最小值大于零就没有零点。'],
    pitfalls: ['看到 $x^2$ 与 $@ln x$ 都过 $(1,0)$ 就误判 $x=1$ 是零点。'],
    takeaway: '零点个数先看最小值符号，不能只凭特殊点猜。'
  },
  {
    id: 'dr-b-18', knowledge: ['k-dv-zero'], type: 'solve', difficulty: 5, score: 12,
    stem: `已知函数 $f(x)=e^x-ax-1$。
(1) 当 $a=1$ 时，求 $f(x)$ 的最小值；
(2) 讨论 $f(x)$ 的零点个数。`,
    answer: `(1) $0$；(2) 当 $a@le0$ 或 $a=1$ 时，$f(x)$ 恰有 $1$ 个零点；当 $a>0$ 且 $a@ne1$ 时，$f(x)$ 恰有 $2$ 个零点`,
    accept: [],
    solution: [
      `(1) 当 $a=1$ 时 $f(x)=e^x-x-1$，$f'(x)=e^x-1$，故最小值为 $f(0)=0$。`,
      `(2) $f'(x)=e^x-a$。若 $a@le0$，则 $f'(x)>0$，$f$ 在 $@mathbb{R}$ 上递增；又 $f(0)=0$，故恰有一个零点 $x=0$。`,
      `若 $a>0$，则 $f$ 在 $(-@infty,@ln a)$ 上递减，在 $(@ln a,+@infty)$ 上递增，最小值 $f(@ln a)=a-a@ln a-1$。`,
      `令 $h(a)=a-a@ln a-1$，$h'(a)=-@ln a$，故 $h(a)$ 在 $a=1$ 处取最大值 $0$，且仅当 $a=1$ 时 $h(a)=0$。`,
      `当 $a=1$ 时最小值 $0$，$f$ 恰有一个零点 $x=0$；当 $a>0$ 且 $a@ne1$ 时最小值小于 $0$，而 $x@to@pm@infty$ 时 $f(x)@to+@infty$，故有两个零点。`,
      `综上：$a@le0$ 或 $a=1$ 时恰有 $1$ 个零点；$a>0$ 且 $a@ne1$ 时恰有 $2$ 个零点。`
    ],
    hints: ['第 (2) 问先按 $a@le0$ 与 $a>0$ 分类，$a>0$ 时最小值在 $x=@ln a$ 处。', '把最小值 $a-a@ln a-1$ 看成关于 $a$ 的函数，求其最大值。'],
    pitfalls: ['漏掉 $a<0$ 时 $f$ 单调递增、零点仍只有一个的情形。', '把 $a=1$ 的相切情形算成两个零点。'],
    takeaway: '含参零点个数：分类求极值，再用极值与 $0$ 的大小关系数交点。'
  },

  /* ================= k-tr-identity：三角恒等变换 ================= */
  {
    id: 'dr-b-19', knowledge: ['k-tr-identity'], type: 'single', difficulty: 1, score: 5,
    stem: `已知 $@sin@alpha=@frac35$，且 $@alpha@in@left(@frac{@pi}{2},@pi@right)$，则 $@cos@alpha=$`,
    options: [
      { k: 'A', t: `$-@frac45$` },
      { k: 'B', t: `$@frac45$` },
      { k: 'C', t: `$-@frac35$` },
      { k: 'D', t: `$@frac35$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `由 $@sin^2@alpha+@cos^2@alpha=1$ 得 $@cos^2@alpha=1-@frac{9}{25}=@frac{16}{25}$。`,
      `因为 $@alpha$ 在第二象限，$@cos@alpha<0$，所以 $@cos@alpha=-@frac45$，选 A。`
    ],
    hints: ['先由平方关系求绝对值，再按象限定符号。'],
    pitfalls: ['只算平方根取正，忽略第二象限余弦为负。'],
    takeaway: '同角关系求值：平方关系定大小，象限定符号。'
  },
  {
    id: 'dr-b-20', knowledge: ['k-tr-identity'], type: 'single', difficulty: 2, score: 5,
    stem: `已知 $@tan@alpha=2$，则 $@sin2@alpha=$`,
    options: [
      { k: 'A', t: `$@frac45$` },
      { k: 'B', t: `$-@frac45$` },
      { k: 'C', t: `$@frac25$` },
      { k: 'D', t: `$@frac43$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `由万能公式 $@sin2@alpha=@frac{2@tan@alpha}{1+@tan^2@alpha}$。`,
      `代入 $@tan@alpha=2$ 得 $@sin2@alpha=@frac{4}{1+4}=@frac45$，选 A。`
    ],
    hints: ['把正弦二倍角写成只含正切的齐次式。'],
    pitfalls: ['分母忘记加 $1$，写成 $@frac{2@tan@alpha}{@tan^2@alpha}$。'],
    takeaway: '已知正切求二倍角正弦，直接用 $@frac{2t}{1+t^2}$。'
  },
  {
    id: 'dr-b-21', knowledge: ['k-tr-identity'], type: 'single', difficulty: 3, score: 5,
    stem: `已知 $@sin@left(@alpha+@frac{@pi}{6}@right)=@frac45$，且 $@alpha@in@left(0,@frac{@pi}{3}@right)$，则 $@sin@alpha=$`,
    options: [
      { k: 'A', t: `$@frac{4@sqrt3-3}{10}$` },
      { k: 'B', t: `$@frac{4@sqrt3+3}{10}$` },
      { k: 'C', t: `$@frac{3-4@sqrt3}{10}$` },
      { k: 'D', t: `$@frac{3+4@sqrt3}{10}$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `由 $@alpha@in@left(0,@frac{@pi}{3}@right)$ 得 $@alpha+@frac{@pi}{6}@in@left(@frac{@pi}{6},@frac{@pi}{2}@right)$，故 $@cos@left(@alpha+@frac{@pi}{6}@right)=@frac35$。`,
      `拆角 $@alpha=@left(@alpha+@frac{@pi}{6}@right)-@frac{@pi}{6}$，则 $@sin@alpha=@sin@left(@alpha+@frac{@pi}{6}@right)@cos@frac{@pi}{6}-@cos@left(@alpha+@frac{@pi}{6}@right)@sin@frac{@pi}{6}$。`,
      `代入得 $@sin@alpha=@frac45@cdot@frac{@sqrt3}{2}-@frac35@cdot@frac12=@frac{4@sqrt3-3}{10}$，选 A。`
    ],
    hints: ['先由角的范围确定余弦为正，再把所求角拆成已知角的差。'],
    pitfalls: ['不判断 $@alpha+@frac{@pi}{6}$ 的范围，余弦符号取错。'],
    takeaway: '给复合角求单角：先定范围，再用“所求角 = 已知角减特殊角”拆开。'
  },
  {
    id: 'dr-b-22', knowledge: ['k-tr-identity'], type: 'multiple', difficulty: 3, score: 6,
    stem: `已知 $@tan@alpha=2$，则下列各式正确的是`,
    options: [
      { k: 'A', t: `$@sin2@alpha=@frac45$` },
      { k: 'B', t: `$@cos2@alpha=-@frac35$` },
      { k: 'C', t: `$@tan2@alpha=-@frac43$` },
      { k: 'D', t: `$@sin^2@alpha=@frac15$` }
    ],
    answer: 'ABC', accept: [],
    solution: [
      `由万能公式 $@sin2@alpha=@frac{2@tan@alpha}{1+@tan^2@alpha}=@frac45$，A 正确。`,
      `$@cos2@alpha=@frac{1-@tan^2@alpha}{1+@tan^2@alpha}=@frac{1-4}{1+4}=-@frac35$，B 正确。`,
      `$@tan2@alpha=@frac{2@tan@alpha}{1-@tan^2@alpha}=@frac{4}{1-4}=-@frac43$，C 正确。`,
      `$@sin^2@alpha=@frac{@tan^2@alpha}{1+@tan^2@alpha}=@frac45$，D 错误。`
    ],
    hints: ['把二倍角与 $@sin^2@alpha$ 都写成只含 $@tan@alpha$ 的齐次式。'],
    pitfalls: ['$@cos2@alpha$ 与 $@sin2@alpha$ 的分子记混，正负号出错。'],
    takeaway: '正切已知时，二倍角与平方关系都可化为 $t=@tan@alpha$ 的有理式。'
  },
  {
    id: 'dr-b-23', knowledge: ['k-tr-identity'], type: 'fill', difficulty: 2, score: 5,
    stem: `计算：$@sin@frac{@pi}{12}@cos@frac{@pi}{12}=$ ________ .`,
    answer: `$@frac{1}{4}$`,
    accept: ['1/4', '0.25'],
    solution: [
      `由二倍角公式 $@sin2@theta=2@sin@theta@cos@theta$，得 $@sin@frac{@pi}{12}@cos@frac{@pi}{12}=@frac12@sin@frac{@pi}{6}$。`,
      `又 $@sin@frac{@pi}{6}=@frac12$，所以原式 $=@frac12@cdot@frac12=@frac14$。`
    ],
    hints: ['看到正弦乘余弦，先补一个 $2$ 凑二倍角。'],
    pitfalls: ['漏乘 $@frac12$，把结果写成 $@frac12$。'],
    takeaway: '$@sin@theta@cos@theta=@frac12@sin2@theta$，是降次与凑角的常用桥梁。'
  },
  {
    id: 'dr-b-24', knowledge: ['k-tr-identity'], type: 'solve', difficulty: 4, score: 10,
    stem: `已知函数 $f(x)=@sqrt3@sin2x+2@cos^2x$。
(1) 求 $f(x)$ 的最小正周期与最大值；
(2) 求 $f(x)$ 在 $@left[0,@frac{@pi}{2}@right]$ 上的单调递增区间。`,
    answer: `(1) 最小正周期为 $@pi$，最大值为 $3$；(2) $@left[0,@frac{@pi}{6}@right]$`,
    accept: [],
    solution: [
      `(1) 由降幂公式 $2@cos^2x=1+@cos2x$，得 $f(x)=@sqrt3@sin2x+@cos2x+1$。`,
      `辅助角合成得 $f(x)=2@sin@left(2x+@frac{@pi}{6}@right)+1$，故最小正周期 $T=@frac{2@pi}{2}=@pi$，最大值 $2+1=3$。`,
      `(2) 令 $2x+@frac{@pi}{6}@in@left[-@frac{@pi}{2}+2k@pi,@frac{@pi}{2}+2k@pi@right]$，得 $x@in@left[-@frac{@pi}{3}+k@pi,@frac{@pi}{6}+k@pi@right]$。`,
      `与 $@left[0,@frac{@pi}{2}@right]$ 取交集，得单调递增区间 $@left[0,@frac{@pi}{6}@right]$。`
    ],
    hints: ['先用降幂公式把平方项化为二倍角，再用辅助角合成一个正弦。', '求单调区间时把整体相位放进正弦的单调区间，再与给定区间取交集。'],
    pitfalls: ['辅助角合成时相位写成 $@frac{@pi}{3}$，应对应 $@tan@varphi=@frac{1}{@sqrt3}$。', '把相位区间直接当成 $x$ 的区间，忘记解出 $x$。'],
    takeaway: '三角化简三步：降幂、辅助角、整体代换；单调区间最后要与定义区间取交集。'
  },

  /* ================= k-tr-graph：三角函数的图像与性质 ================= */
  {
    id: 'dr-b-25', knowledge: ['k-tr-graph'], type: 'single', difficulty: 1, score: 5,
    stem: `函数 $y=2@sin@left(3x+@frac{@pi}{4}@right)$ 的最小正周期为`,
    options: [
      { k: 'A', t: `$@frac{2@pi}{3}$` },
      { k: 'B', t: `$@frac{@pi}{3}$` },
      { k: 'C', t: `$3@pi$` },
      { k: 'D', t: `$2@pi$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `对 $y=A@sin(@omega x+@varphi)$，最小正周期 $T=@frac{2@pi}{@omega}$。`,
      `此处 $@omega=3$，故 $T=@frac{2@pi}{3}$，选 A。`
    ],
    hints: ['只看 $x$ 前的系数，与振幅、相位无关。'],
    pitfalls: ['把 $@omega$ 误看成 $@frac{@pi}{4}$ 或振幅 $2$。'],
    takeaway: '周期只由 $@omega$ 决定：$T=@frac{2@pi}{@omega}$。'
  },
  {
    id: 'dr-b-26', knowledge: ['k-tr-graph'], type: 'single', difficulty: 2, score: 5,
    stem: `将函数 $y=@sin@left(2x+@frac{@pi}{3}@right)$ 的图像向左平移 $@frac{@pi}{6}$ 个单位，所得函数解析式为`,
    options: [
      { k: 'A', t: `$y=@sin@left(2x+@frac{2@pi}{3}@right)$` },
      { k: 'B', t: `$y=@sin@left(2x+@frac{@pi}{3}@right)$` },
      { k: 'C', t: `$y=@sin@left(2x+@frac{@pi}{6}@right)$` },
      { k: 'D', t: `$y=@sin2x$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `向左平移 $@frac{@pi}{6}$，把 $x$ 换成 $x+@frac{@pi}{6}$。`,
      `得 $y=@sin@left[2@left(x+@frac{@pi}{6}@right)+@frac{@pi}{3}@right]=@sin@left(2x+@frac{2@pi}{3}@right)$。`,
      `所以选 A。`
    ],
    hints: ['平移多少就替换多少，且替换的是 $x$ 本身。'],
    pitfalls: ['把 $@frac{@pi}{6}$ 直接加在括号外，得到 $@sin@left(2x+@frac{@pi}{2}@right)$。'],
    takeaway: '左右平移只动 $x$：左加右减，先写 $x@pm h$ 再代入。'
  },
  {
    id: 'dr-b-27', knowledge: ['k-tr-graph'], type: 'single', difficulty: 3, score: 5,
    stem: `已知函数 $f(x)=A@sin(@omega x+@varphi)+B$（$A>0$，$@omega>0$，$|@varphi|<@frac{@pi}{2}$）的最大值为 $3$，最小值为 $-1$，最小正周期为 $@pi$，且 $f(0)=1$，则 $f(x)=$`,
    options: [
      { k: 'A', t: `$2@sin2x+1$` },
      { k: 'B', t: `$2@sin@left(2x+@frac{@pi}{6}@right)+1$` },
      { k: 'C', t: `$2@sin@left(2x+@frac{@pi}{2}@right)+1$` },
      { k: 'D', t: `$2@sin@left(x+@frac{@pi}{2}@right)+1$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `由最值 $A=@frac{3-(-1)}{2}=2$，$B=@frac{3+(-1)}{2}=1$。`,
      `由周期 $@frac{2@pi}{@omega}=@pi$ 得 $@omega=2$。`,
      `由 $f(0)=2@sin@varphi+1=1$ 得 $@sin@varphi=0$，结合 $|@varphi|<@frac{@pi}{2}$ 得 $@varphi=0$。`,
      `所以 $f(x)=2@sin2x+1$，选 A。`
    ],
    hints: ['先用最值定 $A,B$，再用周期定 $@omega$，最后代入特殊点定 $@varphi$。'],
    pitfalls: ['把 $B$ 算成 $@frac{3-(-1)}{2}$，与 $A$ 混淆。'],
    takeaway: '图像求解析式：最值定 $A,B$，周期定 $@omega$，特殊点定 $@varphi$。'
  },
  {
    id: 'dr-b-28', knowledge: ['k-tr-graph'], type: 'multiple', difficulty: 3, score: 6,
    stem: `已知函数 $f(x)=@sin@left(2x+@frac{@pi}{6}@right)$，则下列结论正确的是`,
    options: [
      { k: 'A', t: `$f(x)$ 的最小正周期为 $@pi$` },
      { k: 'B', t: `$f(x)$ 的图像关于直线 $x=@frac{@pi}{6}$ 对称` },
      { k: 'C', t: `$f(x)$ 在 $@left[0,@frac{@pi}{6}@right]$ 上单调递增` },
      { k: 'D', t: `$f(x)$ 的图像关于点 $@left(@frac{@pi}{12},0@right)$ 对称` }
    ],
    answer: 'ABC', accept: [],
    solution: [
      `$@omega=2$，故周期 $T=@pi$，A 正确。`,
      `把 $x=@frac{@pi}{6}$ 代入相位得 $2@cdot@frac{@pi}{6}+@frac{@pi}{6}=@frac{@pi}{2}$，取到最大值 $1$，故 B 正确。`,
      `当 $x@in@left[0,@frac{@pi}{6}@right]$ 时，相位 $@in@left[@frac{@pi}{6},@frac{@pi}{2}@right]$，正弦单调递增，C 正确。`,
      `把 $x=@frac{@pi}{12}$ 代入相位得 $@frac{@pi}{3}$，函数值为 $@frac{@sqrt3}{2}@ne0$，故 D 错误。`
    ],
    hints: ['对称轴看相位是否为 $@frac{@pi}{2}+k@pi$，对称中心看相位是否为 $k@pi$。'],
    pitfalls: ['求单调区间时没有把 $2x+@frac{@pi}{6}$ 整体代入，直接对 $x$ 判断。'],
    takeaway: '图像性质全部化为整体相位：轴看 $@frac{@pi}{2}+k@pi$，中心看 $k@pi$，单调看正弦区间。'
  },
  {
    id: 'dr-b-29', knowledge: ['k-tr-graph'], type: 'fill', difficulty: 3, score: 5,
    stem: `函数 $y=3@sin@left(2x-@frac{@pi}{6}@right)$ 的图像在 $y$ 轴右侧的第一条对称轴为 $x=$ ________ .`,
    answer: `$@frac{@pi}{3}$`,
    accept: ['π/3', 'pi/3'],
    solution: [
      `令 $2x-@frac{@pi}{6}=@frac{@pi}{2}+k@pi$，解得 $x=@frac{@pi}{3}+@frac{k@pi}{2}$。`,
      `$k=0$ 得 $x=@frac{@pi}{3}>0$；$k=-1$ 得 $x=-@frac{@pi}{6}<0$。`,
      `故 $y$ 轴右侧第一条对称轴为 $x=@frac{@pi}{3}$。`
    ],
    hints: ['先写出对称轴的通式，再取最小的正数。'],
    pitfalls: ['只写通式不取 $k$，或把 $k=-1$ 的负值当成第一条。'],
    takeaway: '对称轴通式写出后，按“$y$ 轴右侧第一条”筛选最小的正值。'
  },
  {
    id: 'dr-b-30', knowledge: ['k-tr-graph'], type: 'solve', difficulty: 4, score: 10,
    stem: `已知函数 $f(x)=@sqrt3@sin@omega x+@cos@omega x$（$@omega>0$）的最小正周期为 $@pi$。
(1) 求 $@omega$ 及 $f(x)$ 的最大值；
(2) 求 $f(x)$ 在 $@left[0,@frac{@pi}{2}@right]$ 上的单调递减区间。`,
    answer: `(1) $@omega=2$，最大值为 $2$；(2) $@left[@frac{@pi}{6},@frac{@pi}{2}@right]$`,
    accept: [],
    solution: [
      `(1) 辅助角合成得 $f(x)=2@sin@left(@omega x+@frac{@pi}{6}@right)$。`,
      `由周期 $@frac{2@pi}{@omega}=@pi$ 得 $@omega=2$；最大值为 $2$。`,
      `(2) 令 $2x+@frac{@pi}{6}@in@left[@frac{@pi}{2}+2k@pi,@frac{3@pi}{2}+2k@pi@right]$，得 $x@in@left[@frac{@pi}{6}+k@pi,@frac{2@pi}{3}+k@pi@right]$。`,
      `与 $@left[0,@frac{@pi}{2}@right]$ 取交集，得单调递减区间 $@left[@frac{@pi}{6},@frac{@pi}{2}@right]$。`
    ],
    hints: ['先把 $@sqrt3@sin@omega x+@cos@omega x$ 合成一个正弦，再由周期求 $@omega$。', '整体相位落入 $@left[@frac{@pi}{2}+2k@pi,@frac{3@pi}{2}+2k@pi@right]$ 时正弦递减。'],
    pitfalls: ['辅助角相位写成 $@frac{@pi}{3}$，应对应 $@cos@varphi=@frac{@sqrt3}{2}$、$@sin@varphi=@frac12$。', '忘记与给定区间取交集。'],
    takeaway: '三角性质题统一流程：辅助角化一名一角，再由整体相位读周期、单调与最值。'
  },

  /* ================= k-tr-solve：正余弦定理解三角形 ================= */
  {
    id: 'dr-b-31', knowledge: ['k-tr-solve'], type: 'single', difficulty: 2, score: 5,
    stem: `在 $@triangle ABC$ 中，$a=3$，$b=2$，$C=@frac{@pi}{3}$，则 $c=$`,
    options: [
      { k: 'A', t: `$@sqrt7$` },
      { k: 'B', t: `$@sqrt5$` },
      { k: 'C', t: `$@sqrt{13}$` },
      { k: 'D', t: `$7$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `由余弦定理 $c^2=a^2+b^2-2ab@cos C$。`,
      `代入得 $c^2=9+4-2@cdot3@cdot2@cdot@frac12=13-6=7$。`,
      `所以 $c=@sqrt7$，选 A。`
    ],
    hints: ['已知两边及夹角，直接用余弦定理。'],
    pitfalls: ['余弦定理中漏掉 $2ab@cos C$ 的系数 $2$。'],
    takeaway: '两边夹一角求第三边，余弦定理一步到位。'
  },
  {
    id: 'dr-b-32', knowledge: ['k-tr-solve'], type: 'single', difficulty: 3, score: 5,
    stem: `在 $@triangle ABC$ 中，$a=2$，$b=@sqrt3$，$B=@frac{@pi}{3}$，则 $A=$`,
    options: [
      { k: 'A', t: `$@frac{@pi}{2}$` },
      { k: 'B', t: `$@frac{@pi}{3}$` },
      { k: 'C', t: `$@frac{@pi}{4}$` },
      { k: 'D', t: `$@frac{2@pi}{3}$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `由正弦定理 $@frac{a}{@sin A}=@frac{b}{@sin B}$，得 $@sin A=@frac{a@sin B}{b}$。`,
      `代入得 $@sin A=@frac{2@cdot@frac{@sqrt3}{2}}{@sqrt3}=1$。`,
      `又 $A@in(0,@pi)$，故 $A=@frac{@pi}{2}$，选 A。`
    ],
    hints: ['已知两边及其中一边的对角，先用正弦定理求另一角的正弦。'],
    pitfalls: ['不检验 $A$ 的范围，写出两个可能的角。'],
    takeaway: '正弦定理求角后，用内角和与“大边对大角”检验取舍。'
  },
  {
    id: 'dr-b-33', knowledge: ['k-tr-solve'], type: 'single', difficulty: 3, score: 5,
    stem: `在 $@triangle ABC$ 中，角 $A,B,C$ 的对边分别为 $a,b,c$，且 $(2b-c)@cos A=a@cos C$，则 $A=$`,
    options: [
      { k: 'A', t: `$@frac{@pi}{3}$` },
      { k: 'B', t: `$@frac{@pi}{6}$` },
      { k: 'C', t: `$@frac{@pi}{4}$` },
      { k: 'D', t: `$@frac{2@pi}{3}$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `展开得 $2b@cos A-c@cos A=a@cos C$，即 $2b@cos A=c@cos A+a@cos C$。`,
      `由射影定理 $c@cos A+a@cos C=b$，故 $2b@cos A=b$。`,
      `因为 $b>0$，所以 $@cos A=@frac12$，又 $A@in(0,@pi)$，得 $A=@frac{@pi}{3}$，选 A。`
    ],
    hints: ['把含 $a,c$ 的项合在一起，联想射影定理 $c@cos A+a@cos C=b$。'],
    pitfalls: ['直接用正弦定理把边换成角后陷入复杂化简，忘记射影关系。'],
    takeaway: '出现 $c@cos A+a@cos C$ 就想射影定理，可一步消去两边。'
  },
  {
    id: 'dr-b-34', knowledge: ['k-tr-solve'], type: 'multiple', difficulty: 4, score: 6,
    stem: `在 $@triangle ABC$ 中，角 $A,B,C$ 的对边分别为 $a,b,c$，已知 $a=@sqrt3$，$A=@frac{@pi}{3}$，则下列结论正确的是`,
    options: [
      { k: 'A', t: `$b^2+c^2-bc=3$` },
      { k: 'B', t: `若 $b=1$，则 $B=@frac{@pi}{6}$` },
      { k: 'C', t: `$@triangle ABC$ 面积的最大值为 $@frac{3@sqrt3}{4}$` },
      { k: 'D', t: `若 $b+c=3$，则 $a$ 边上的高为 $@sqrt3$` }
    ],
    answer: 'ABC', accept: [],
    solution: [
      `由余弦定理 $3=b^2+c^2-2bc@cdot@frac12=b^2+c^2-bc$，A 正确。`,
      `若 $b=1$，由正弦定理 $@sin B=@frac{b@sin A}{a}=@frac{1@cdot@frac{@sqrt3}{2}}{@sqrt3}=@frac12$；因 $b<a$，故 $B<A=@frac{@pi}{3}$，只能 $B=@frac{@pi}{6}$，B 正确。`,
      `由 $b^2+c^2@ge2bc$ 得 $3=b^2+c^2-bc@ge bc$，故 $S=@frac12bc@sin A=@frac{@sqrt3}{4}bc@le@frac{3@sqrt3}{4}$，C 正确。`,
      `若 $b+c=3$，则 $3=(b+c)^2-3bc=9-3bc$，得 $bc=2$，此时 $S=@frac{@sqrt3}{2}$，$a$ 边上的高 $h=@frac{2S}{a}=1$，D 错误。`
    ],
    hints: ['先由余弦定理写出 $b,c$ 的关系，再用基本不等式处理面积。', '第 D 项先由 $b+c$ 求 $bc$，再用面积反求高。'],
    pitfalls: ['第 B 项忽略 $b<a$ 的限制，多写出一个钝角解。'],
    takeaway: '一角一对边的解三角形：余弦定理给边关系，基本不等式给最值。'
  },
  {
    id: 'dr-b-35', knowledge: ['k-tr-solve'], type: 'fill', difficulty: 3, score: 5,
    stem: `在 $@triangle ABC$ 中，$a=1$，$b=@sqrt3$，$A=@frac{@pi}{6}$，则 $B=$ ________ .`,
    answer: `$@frac{@pi}{3}$ 或 $@frac{2@pi}{3}$`,
    accept: ['π/3或2π/3', 'π/3,2π/3', 'π/3, 2π/3'],
    solution: [
      `由正弦定理 $@sin B=@frac{b@sin A}{a}=@frac{@sqrt3@cdot@frac12}{1}=@frac{@sqrt3}{2}$。`,
      `所以 $B=@frac{@pi}{3}$ 或 $B=@frac{2@pi}{3}$。`,
      `又 $b>a$，故 $B>A=@frac{@pi}{6}$，两个值都满足内角和条件，均保留。`
    ],
    hints: ['先求正弦值，再写出一个周期内的两个角，最后用内角和检验。'],
    pitfalls: ['只写锐角解，漏掉钝角解；或没有用 $b>a$ 检验导致误删。'],
    takeaway: '两边一对角可能两解：正弦值给两个角，内角和与大边对大角负责取舍。'
  },
  {
    id: 'dr-b-36', knowledge: ['k-tr-solve'], type: 'solve', difficulty: 4, score: 10,
    stem: `在 $@triangle ABC$ 中，角 $A,B,C$ 的对边分别为 $a,b,c$，且 $@frac{2a-c}{b}=@frac{@cos C}{@cos B}$。
(1) 求 $B$；
(2) 若 $b=@sqrt3$，求 $@triangle ABC$ 面积的最大值。`,
    answer: `(1) $B=@frac{@pi}{3}$；(2) $@frac{3@sqrt3}{4}$`,
    accept: [],
    solution: [
      `(1) 交叉相乘得 $(2a-c)@cos B=b@cos C$，即 $2a@cos B=c@cos B+b@cos C$。`,
      `由射影定理 $c@cos B+b@cos C=a$，故 $2a@cos B=a$。`,
      `因为 $a>0$，所以 $@cos B=@frac12$，又 $B@in(0,@pi)$，得 $B=@frac{@pi}{3}$。`,
      `(2) 由余弦定理 $3=a^2+c^2-2ac@cos B=a^2+c^2-ac$。`,
      `由 $a^2+c^2@ge2ac$ 得 $3@ge ac$。`,
      `所以 $S=@frac12ac@sin B=@frac{@sqrt3}{4}ac@le@frac{3@sqrt3}{4}$，当 $a=c=@sqrt3$ 时取等。`
    ],
    hints: ['第 (1) 问先交叉相乘，再联想射影定理把右边的两项合成 $a$。', '第 (2) 问用余弦定理加基本不等式压出 $ac$ 的上界。'],
    pitfalls: ['交叉相乘后直接把边全换成角，导致化简复杂。', '第 (2) 问求出 $ac$ 上界但不写取等条件。'],
    takeaway: '含边角混合式先化成射影结构求角，再用余弦定理与基本不等式求面积最值。'
  },

  /* ================= k-tr-maxmin：三角最值与取值范围 ================= */
  {
    id: 'dr-b-37', knowledge: ['k-tr-maxmin'], type: 'single', difficulty: 1, score: 5,
    stem: `函数 $y=@sin x+@cos x$ 的最大值为`,
    options: [
      { k: 'A', t: `$@sqrt2$` },
      { k: 'B', t: `$2$` },
      { k: 'C', t: `$1$` },
      { k: 'D', t: `$@sqrt3$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `辅助角合成得 $y=@sqrt2@sin@left(x+@frac{@pi}{4}@right)$。`,
      `因为正弦的最大值为 $1$，所以 $y$ 的最大值为 $@sqrt2$，选 A。`
    ],
    hints: ['先合成一个正弦，再读振幅。'],
    pitfalls: ['把两个系数直接相加，得到最大值 $2$。'],
    takeaway: '$a@sin x+b@cos x$ 的最大值为 $@sqrt{a^2+b^2}$。'
  },
  {
    id: 'dr-b-38', knowledge: ['k-tr-maxmin'], type: 'single', difficulty: 2, score: 5,
    stem: `函数 $y=2@sin x-3@cos x$ 的最大值为`,
    options: [
      { k: 'A', t: `$@sqrt{13}$` },
      { k: 'B', t: `$13$` },
      { k: 'C', t: `$@sqrt5$` },
      { k: 'D', t: `$5$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `辅助角合成得 $y=@sqrt{2^2+(-3)^2}@sin(x+@varphi)=@sqrt{13}@sin(x+@varphi)$。`,
      `所以最大值为 $@sqrt{13}$，选 A。`
    ],
    hints: ['系数平方和开根号就是振幅。'],
    pitfalls: ['把 $-3$ 的平方漏掉，算成 $@sqrt5$。'],
    takeaway: '辅助角振幅 $@sqrt{a^2+b^2}$，与系数正负无关。'
  },
  {
    id: 'dr-b-39', knowledge: ['k-tr-maxmin'], type: 'single', difficulty: 3, score: 5,
    stem: `在 $@triangle ABC$ 中，$a=2$，$A=@frac{2@pi}{3}$，则 $@triangle ABC$ 面积的最大值为`,
    options: [
      { k: 'A', t: `$@frac{@sqrt3}{3}$` },
      { k: 'B', t: `$@frac{@sqrt3}{2}$` },
      { k: 'C', t: `$@frac{2@sqrt3}{3}$` },
      { k: 'D', t: `$@sqrt3$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `由余弦定理 $4=b^2+c^2-2bc@cos@frac{2@pi}{3}=b^2+c^2+bc$。`,
      `由 $b^2+c^2@ge2bc$ 得 $4@ge3bc$，即 $bc@le@frac43$。`,
      `所以 $S=@frac12bc@sin@frac{2@pi}{3}=@frac{@sqrt3}{4}bc@le@frac{@sqrt3}{3}$，当 $b=c$ 时取等，选 A。`
    ],
    hints: ['钝角余弦为负，余弦定理中 $+bc$ 的符号是本题关键。'],
    pitfalls: ['把 $@cos@frac{2@pi}{3}$ 写成 $@frac12$，导致 $bc$ 范围错误。'],
    takeaway: '已知一角一对边求面积最值：余弦定理 + 基本不等式，注意余弦的符号。'
  },
  {
    id: 'dr-b-40', knowledge: ['k-tr-maxmin'], type: 'multiple', difficulty: 3, score: 6,
    stem: `已知函数 $f(x)=@sin x+@sqrt3@cos x$，则下列结论正确的是`,
    options: [
      { k: 'A', t: `$f(x)$ 的最大值为 $2$` },
      { k: 'B', t: `$f(x)$ 的图像关于直线 $x=@frac{@pi}{6}$ 对称` },
      { k: 'C', t: `$f(x)$ 在 $@left[0,@frac{@pi}{3}@right]$ 上单调递增` },
      { k: 'D', t: `$f(x)$ 的图像向左平移 $@frac{@pi}{6}$ 后关于 $y$ 轴对称` }
    ],
    answer: 'ABD', accept: [],
    solution: [
      `辅助角合成得 $f(x)=2@sin@left(x+@frac{@pi}{3}@right)$，最大值为 $2$，A 正确。`,
      `$x=@frac{@pi}{6}$ 时相位为 $@frac{@pi}{2}$，取到最大值，故 B 正确。`,
      `$x@in@left[0,@frac{@pi}{3}@right]$ 时相位 $@in@left[@frac{@pi}{3},@frac{2@pi}{3}@right]$，先增后减，C 错误。`,
      `向左平移 $@frac{@pi}{6}$ 得 $y=2@sin@left(x+@frac{@pi}{2}@right)=2@cos x$，是偶函数，图像关于 $y$ 轴对称，D 正确。`
    ],
    hints: ['先辅助角合成，再逐项用整体相位判断对称性与单调性。', '平移后是否关于 $y$ 轴对称，看结果是否为偶函数。'],
    pitfalls: ['把 $[0,@frac{@pi}{3}]$ 的相位区间当成单调区间，忽略其中经过 $@frac{@pi}{2}$。'],
    takeaway: '三角函数的对称、单调、平移问题，全部回到整体相位与函数奇偶性。'
  },
  {
    id: 'dr-b-41', knowledge: ['k-tr-maxmin'], type: 'fill', difficulty: 3, score: 5,
    stem: `函数 $y=@sin x-@sqrt3@cos x$ 在 $@left[0,@frac{@pi}{2}@right]$ 上的最小值为 ________ .`,
    answer: `$-@sqrt{3}$`,
    accept: ['-√3', '-sqrt3'],
    solution: [
      `辅助角合成得 $y=2@sin@left(x-@frac{@pi}{3}@right)$。`,
      `当 $x@in@left[0,@frac{@pi}{2}@right]$ 时，$x-@frac{@pi}{3}@in@left[-@frac{@pi}{3},@frac{@pi}{6}@right]$。`,
      `正弦在 $x-@frac{@pi}{3}=-@frac{@pi}{3}$ 处取最小值 $-@frac{@sqrt3}{2}$，故 $y_{@min}=2@cdot@left(-@frac{@sqrt3}{2}@right)=-@sqrt3$。`
    ],
    hints: ['先合成一个正弦，再整体求出相位的范围。'],
    pitfalls: ['直接用 $x$ 的范围判断，忘记减去 $@frac{@pi}{3}$。'],
    takeaway: '给定区间求最值：先合成，再整体代换算相位范围，最后在正弦图像上取最值。'
  },
  {
    id: 'dr-b-42', knowledge: ['k-tr-maxmin'], type: 'solve', difficulty: 5, score: 12,
    stem: `在 $@triangle ABC$ 中，角 $A,B,C$ 的对边分别为 $a,b,c$，且 $b@cos C+c@cos B=2a@cos A$。
(1) 求 $A$；
(2) 若 $a=2$，求 $@triangle ABC$ 周长的取值范围。`,
    answer: `(1) $A=@frac{@pi}{3}$；(2) $(4,6]$`,
    accept: [],
    solution: [
      `(1) 由射影定理 $b@cos C+c@cos B=a$，代入得 $a=2a@cos A$。`,
      `因为 $a>0$，所以 $@cos A=@frac12$，又 $A@in(0,@pi)$，得 $A=@frac{@pi}{3}$。`,
      `(2) 由余弦定理 $4=b^2+c^2-2bc@cos@frac{@pi}{3}=b^2+c^2-bc$。`,
      `设 $s=b+c$，则 $bc=@frac{s^2-4}{3}$。由 $bc@le@frac{s^2}{4}$ 得 $@frac{s^2-4}{3}@le@frac{s^2}{4}$，解得 $s@le4$。`,
      `又由三角形两边之和大于第三边得 $s>a=2$，故 $2<s@le4$。`,
      `周长 $s+2@in(4,6]$，当 $b=c=2$ 时取到 $6$。`
    ],
    hints: ['第 (1) 问先用射影定理把左边合成 $a$。', '第 (2) 问设 $s=b+c$，用余弦定理与 $bc@le@frac{s^2}{4}$ 建立 $s$ 的不等式。'],
    pitfalls: ['第 (2) 问只写 $s@le4$，漏掉三角形不等式给出的 $s>2$。', '把周长范围写成闭区间 $(4,6]$ 以外的形式，忽略 $s=2$ 退化取不到。'],
    takeaway: '解三角形周长范围：射影定理求角，余弦定理配基本不等式，再用三角形不等式定端点。'
  }
);
