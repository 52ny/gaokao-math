/* 知识点母题集 A：集合与逻辑、函数、导数（8 个知识点 × 6 题 = 48 题）
 * 公式约定：LaTeX 反斜杠一律写成 @，公式用 $...$ 包裹。
 */
window.GK_DRILL = window.GK_DRILL || [];
window.GK_DRILL.push(
  {
    id: 'dr-a-1', knowledge: ['k-set-ops'], type: 'single', difficulty: 1, score: 5,
    stem: `已知集合 $A=@left@{x@mid -1<x@le2@right@}$，$B=@left@{x@mid x^2-4x+3<0@right@}$，则 $A@cap B=$`,
    options: [
      { k: 'A', t: `$@left(1,2@right)$` },
      { k: 'B', t: `$@left(1,2@right]$` },
      { k: 'C', t: `$@left[1,2@right]$` },
      { k: 'D', t: `$@left[1,3@right)$` }
    ],
    answer: 'B', accept: [],
    solution: [
      `$B$ 中不等式化为 $(x-1)(x-3)<0$，得 $B=(1,3)$。`,
      `$A=(-1,2]$，与 $(1,3)$ 取公共部分得 $(1,2]$。`,
      `端点 $2$ 属于 $A$，取到；端点 $1$ 不属于 $B$，不取。`
    ],
    hints: ['先解一元二次不等式，把 $B$ 化成区间。', '交集取两个区间的重叠部分，再逐个核对端点。'],
    pitfalls: ['把 $B$ 的端点 $1,3$ 当成可取，误选 $[1,3]$。'],
    takeaway: '集合交集：先解不等式，再画数轴抠端点。'
  },
  {
    id: 'dr-a-2', knowledge: ['k-set-ops'], type: 'single', difficulty: 2, score: 5,
    stem: `已知集合 $A=@left@{x@mid -1@le x@le2@right@}$，$B=@left@{y@mid y=2^x@right@}$，则 $A@cap B=$`,
    options: [
      { k: 'A', t: `$@left(0,2@right]$` },
      { k: 'B', t: `$@left[0,2@right]$` },
      { k: 'C', t: `$@left(0,2@right)$` },
      { k: 'D', t: `$@left[0,+@infty@right)$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$B$ 的代表元素是 $y$，由 $2^x>0$ 得 $B=(0,+@infty)$。`,
      `$A=[-1,2]$，与 $B$ 取交集得 $(0,2]$。`,
      `$0$ 不在 $B$ 中，$2$ 在 $A$ 中，故右端取到、左端不取。`
    ],
    hints: ['先看竖线前的代表元素，$B$ 是值域不是定义域。', '交集只保留同时属于两个集合的部分。'],
    pitfalls: ['把 $B$ 看成 $x$ 的范围，误选 $[0,2]$。'],
    takeaway: '看到代表元素是 $y$ 就想值域，指数函数值域为正。'
  },
  {
    id: 'dr-a-3', knowledge: ['k-set-ops'], type: 'single', difficulty: 3, score: 5,
    stem: `已知集合 $A=@left@{x@mid ax+1=0@right@}$，$B=@left@{1,2@right@}$，若 $A@subseteq B$，则实数 $a$ 的取值集合为`,
    options: [
      { k: 'A', t: `$@left@{-1,-@frac12@right@}$` },
      { k: 'B', t: `$@left@{0,-1@right@}$` },
      { k: 'C', t: `$@left@{0,-1,-@frac12@right@}$` },
      { k: 'D', t: `$@left@{-1,-@frac12,0,1@right@}$` }
    ],
    answer: 'C', accept: [],
    solution: [
      `当 $a=0$ 时方程无解，$A=@varnothing@subseteq B$，符合题意。`,
      `当 $a@ne0$ 时 $A=@left@{-@frac1a@right@}$，由 $A@subseteq B$ 得 $-@frac1a=1$ 或 $-@frac1a=2$。`,
      `解得 $a=-1$ 或 $a=-@frac12$，合并得 $a@in@left@{0,-1,-@frac12@right@}$。`
    ],
    hints: ['含参集合先讨论 $a=0$，即 $A=@varnothing$ 的情况。', '再把元素代回，求出 $a$ 后逐个检验。'],
    pitfalls: ['漏掉 $a=0$ 时 $A=@varnothing$ 的情形，答案少一个 $0$。'],
    takeaway: '子集问题先问空集，再代元素。'
  },
  {
    id: 'dr-a-4', knowledge: ['k-set-ops'], type: 'multiple', difficulty: 3, score: 6,
    stem: `设全集 $U=@mathbb{R}$，集合 $A=@left@{x@mid x^2-x-6@le0@right@}$，$B=@left@{x@mid |x-1|<2@right@}$，则下列结论正确的是`,
    options: [
      { k: 'A', t: `$A@cap B=@left(-1,3@right)$` },
      { k: 'B', t: `$A@cup B=@left[-2,3@right)$` },
      { k: 'C', t: `$C_U A=@left(-@infty,-2@right)@cup@left(3,+@infty@right)$` },
      { k: 'D', t: `$A@cap C_U B=@left[-2,-1@right]@cup@left@{3@right@}$` }
    ],
    answer: 'ACD', accept: [],
    solution: [
      `$x^2-x-6@le0$ 得 $A=[-2,3]$；$|x-1|<2$ 得 $B=(-1,3)$。`,
      `$A@cap B=(-1,3)$，A 正确；$A@cup B=[-2,3]$，B 错误。`,
      `$C_U A=(-@infty,-2)@cup(3,+@infty)$，C 正确。`,
      `$C_U B=(-@infty,-1]@cup[3,+@infty)$，与 $A$ 取交集得 $[-2,-1]@cup@left@{3@right@}$，D 正确。`
    ],
    hints: ['先把两个集合都化成区间。', '求补集时把端点的开闭反过来。'],
    pitfalls: ['求补集没有反转端点开闭。', '并集右端点 $3$ 属于 $A$，应取到。'],
    takeaway: '集合多选题：逐个算区间，端点开闭逐一核对。'
  },
  {
    id: 'dr-a-5', knowledge: ['k-set-ops'], type: 'fill', difficulty: 2, score: 5,
    stem: `满足 $@left@{1,2@right@}@subseteq A@subseteq@left@{1,2,3,4,5@right@}$ 的集合 $A$ 的个数为 ________ .`,
    answer: `$8$`, accept: ['8'],
    solution: [
      `$A$ 必须含有 $1,2$，还可从 $3,4,5$ 中任选若干。`,
      `每个元素都有“取”与“不取”两种选择，共 $2^3=8$ 个。`
    ],
    hints: ['先固定必须有的元素，再数可以自由选择的元素。'],
    pitfalls: ['把 $@subseteq$ 当成真子集，少算 $A=@left@{1,2,3,4,5@right@}$。'],
    takeaway: '子集计数：必选先固定，可选按 $2^n$ 计算。'
  },
  {
    id: 'dr-a-6', knowledge: ['k-set-ops'], type: 'solve', difficulty: 4, score: 12,
    stem: `已知集合 $A=@left@{x@mid x^2-4x-5@le0@right@}$，$B=@left@{x@mid 2a-1@le x@le a+2@right@}$。(1) 当 $a=1$ 时，求 $A@cap B$ 与 $A@cup B$；(2) 若 $B@subseteq A$，求实数 $a$ 的取值范围。`,
    answer: `(1) $A@cap B=@left[1,3@right]$，$A@cup B=@left[-1,5@right]$；(2) $a@ge0$`, accept: [],
    solution: [
      `由 $x^2-4x-5@le0$ 得 $(x-5)(x+1)@le0$，即 $A=[-1,5]$。`,
      `(1) 当 $a=1$ 时 $B=[1,3]$，故 $A@cap B=[1,3]$，$A@cup B=[-1,5]$。`,
      `(2) 当 $2a-1>a+2$，即 $a>3$ 时 $B=@varnothing@subseteq A$，符合。`,
      `当 $a@le3$ 时 $B@ne@varnothing$，由 $B@subseteq A$ 得 $2a-1@ge-1$ 且 $a+2@le5$，即 $0@le a@le3$。`,
      `合并得 $a@ge0$。`
    ],
    hints: ['第 (2) 问先判断 $B$ 能否为空集。', '空集对应区间左端点大于右端点，这一支不能漏。'],
    pitfalls: ['只解端点不等式，漏掉 $B=@varnothing$。', '把 $2a-1@le a+2$ 的方向写反。'],
    takeaway: '含参区间子集：先分空与非空，再列端点不等式。'
  },
  {
    id: 'dr-a-7', knowledge: ['k-logic'], type: 'single', difficulty: 1, score: 5,
    stem: `命题“$@forall x>0$，$x^2+x+1>0$”的否定是`,
    options: [
      { k: 'A', t: `$@exists x@le0$，$x^2+x+1@le0$` },
      { k: 'B', t: `$@exists x>0$，$x^2+x+1@le0$` },
      { k: 'C', t: `$@forall x>0$，$x^2+x+1@le0$` },
      { k: 'D', t: `$@exists x>0$，$x^2+x+1<0$` }
    ],
    answer: 'B', accept: [],
    solution: [
      `全称命题的否定是存在命题，量词由 $@forall$ 改为 $@exists$。`,
      `条件 $x>0$ 保持不变，结论 $>0$ 的否定是 $@le0$。`,
      `故否定为“$@exists x>0$，$x^2+x+1@le0$”。`
    ],
    hints: ['否定只改量词和结论，条件的范围不动。'],
    pitfalls: ['结论只改“$>$”为“$<$”，忘记取等。', '把条件 $x>0$ 也否定掉。'],
    takeaway: '量词否定：改量词、否结论，条件不动。'
  },
  {
    id: 'dr-a-8', knowledge: ['k-logic'], type: 'single', difficulty: 2, score: 5,
    stem: `已知 $p$：$x+y>2$，$q$：$x>1$ 且 $y>1$，则 $p$ 是 $q$ 的`,
    options: [
      { k: 'A', t: `充分不必要条件` },
      { k: 'B', t: `必要不充分条件` },
      { k: 'C', t: `充要条件` },
      { k: 'D', t: `既不充分也不必要条件` }
    ],
    answer: 'B', accept: [],
    solution: [
      `若 $x>1$ 且 $y>1$，则 $x+y>2$，所以 $q@Rightarrow p$，$p$ 是 $q$ 的必要条件。`,
      `取 $x=3,y=0$，满足 $x+y>2$ 但不满足 $x>1$ 且 $y>1$，所以 $p$ 不能推出 $q$。`,
      `故 $p$ 是 $q$ 的必要不充分条件。`
    ],
    hints: ['举反例否定充分性最快。', '按“小范围推大范围”理解方向。'],
    pitfalls: ['把“$p$ 是 $q$ 的…”方向看反。'],
    takeaway: '充分必要看谁推谁：小范围推大范围。'
  },
  {
    id: 'dr-a-9', knowledge: ['k-logic'], type: 'single', difficulty: 3, score: 5,
    stem: `已知 $p$：$|x-1|<2$，$q$：$x^2-(2a+1)x+a(a+1)@le0$。若 $p$ 是 $q$ 的必要不充分条件，则实数 $a$ 的取值范围是`,
    options: [
      { k: 'A', t: `$@left(-1,2@right)$` },
      { k: 'B', t: `$@left[-1,2@right]$` },
      { k: 'C', t: `$@left(0,2@right)$` },
      { k: 'D', t: `$@left(-1,2@right]$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$p$：$-1<x<3$；$q$：$(x-a)(x-a-1)@le0$，即 $a@le x@le a+1$。`,
      `必要性要求 $q@Rightarrow p$，即 $[a,a+1]@subseteq(-1,3)$。`,
      `所以 $a>-1$ 且 $a+1<3$，得 $-1<a<2$；区间长度不同，真包含自动成立。`
    ],
    hints: ['把 $q$ 因式分解成区间 $[a,a+1]$。', '$q$ 含于 $p$，注意 $p$ 是开区间。'],
    pitfalls: ['端点取等：$a=-1$ 时左端点 $-1$ 不在 $p$ 内。'],
    takeaway: '充要条件转集合包含，开区间端点不能取等。'
  },
  {
    id: 'dr-a-10', knowledge: ['k-logic'], type: 'multiple', difficulty: 3, score: 6,
    stem: `下列命题中，正确的是`,
    options: [
      { k: 'A', t: `命题“$@forall x@in@mathbb{R}$，$x^2@ge0$”的否定是“$@exists x@in@mathbb{R}$，$x^2<0$”` },
      { k: 'B', t: `“$x=1$”是“$x^2=1$”的充分不必要条件` },
      { k: 'C', t: `命题“若 $x>2$，则 $x^2>4$”的逆否命题是真命题` },
      { k: 'D', t: `“$a=0$”是“$ab=0$”的必要不充分条件` }
    ],
    answer: 'ABC', accept: [],
    solution: [
      `A 中全称改存在、结论取反，正确。`,
      `B 中 $x=1@Rightarrow x^2=1$，但 $x=-1$ 时 $x^2=1$ 而 $x@ne1$，故为充分不必要，正确。`,
      `C 中原命题为真，逆否命题与原命题同真假，正确。`,
      `D 中 $a=0@Rightarrow ab=0$，反之不成立，应为充分不必要，错误。`
    ],
    hints: ['逐项判断，量词题先改量词再否结论。', '逆否命题与原命题同真假。'],
    pitfalls: ['误以为 $ab=0$ 一定能推出 $a=0$，忽略 $b=0$。'],
    takeaway: '逻辑多选：否定看量词，条件看方向，逆否看等价。'
  },
  {
    id: 'dr-a-11', knowledge: ['k-logic'], type: 'fill', difficulty: 3, score: 5,
    stem: `若命题“$@forall x@in@left[1,2@right]$，$x^2-ax+1@ge0$”是真命题，则实数 $a$ 的最大值为 ________ .`,
    answer: `$2$`, accept: ['2'],
    solution: [
      `因为 $x>0$，原不等式等价于 $a@le x+@frac1x$ 在 $[1,2]$ 上恒成立。`,
      `由基本不等式 $x+@frac1x@ge2$，等号在 $x=1$ 处成立，且 $1@in[1,2]$。`,
      `所以 $a@le2$，$a$ 的最大值为 $2$。`
    ],
    hints: ['分离参数，把 $a$ 单独放到一边。', '$x+@frac1x$ 在 $[1,2]$ 上的最小值用基本不等式。'],
    pitfalls: ['忘记验证取等点 $x=1$ 是否在给定区间内。'],
    takeaway: '恒成立分离参数，再求最值并验证取等。'
  },
  {
    id: 'dr-a-12', knowledge: ['k-logic'], type: 'solve', difficulty: 3, score: 12,
    stem: `已知 $p$：$|x-1|@le2$，$q$：$x^2-2mx+m^2-9@le0$。(1) 当 $m=0$ 时，判断 $p$ 是 $q$ 的什么条件；(2) 若 $p$ 是 $q$ 的充分不必要条件，求实数 $m$ 的取值范围。`,
    answer: `(1) 充分不必要条件；(2) $0@le m@le2$`, accept: [],
    solution: [
      `$p$：$-1@le x@le3$，即 $p$ 对应区间 $[-1,3]$。`,
      `$q$：$(x-m)^2@le9$，即 $m-3@le x@le m+3$，对应区间 $[m-3,m+3]$。`,
      `(1) 当 $m=0$ 时 $q$ 对应 $[-3,3]$，$[-1,3]@subsetneq[-3,3]$，故 $p$ 是 $q$ 的充分不必要条件。`,
      `(2) 由 $[-1,3]@subseteq[m-3,m+3]$ 得 $m-3@le-1$ 且 $m+3@ge3$，即 $0@le m@le2$；两区间长度不同，真包含成立。`
    ],
    hints: ['先把两个条件都化成区间。', '充分不必要即 $p$ 对应区间是 $q$ 对应区间的真子集。'],
    pitfalls: ['把包含方向写反，误解成 $q@subseteq p$。'],
    takeaway: '充要条件题一律翻译成区间包含。'
  },
  {
    id: 'dr-a-13', knowledge: ['k-fn-prop'], type: 'single', difficulty: 1, score: 5,
    stem: `下列函数中，为奇函数的是`,
    options: [
      { k: 'A', t: `$f(x)=x^2+1$` },
      { k: 'B', t: `$f(x)=x^3+x$` },
      { k: 'C', t: `$f(x)=2^x$` },
      { k: 'D', t: `$f(x)=|x|$` }
    ],
    answer: 'B', accept: [],
    solution: [
      `四个函数的定义域都是 $@mathbb{R}$，关于原点对称。`,
      `B 中 $f(-x)=-x^3-x=-(x^3+x)=-f(x)$，为奇函数。`,
      `A、D 为偶函数，C 满足 $f(-x)=2^{-x}$，与 $f(x)$、$-f(x)$ 都不相等。`
    ],
    hints: ['先看定义域是否关于原点对称，再代 $-x$ 比较。'],
    pitfalls: ['把 $2^x$ 当成偶函数。'],
    takeaway: '奇偶判断：定义域对称 + 代 $-x$ 比较。'
  },
  {
    id: 'dr-a-14', knowledge: ['k-fn-prop'], type: 'single', difficulty: 2, score: 5,
    stem: `设 $f(x)$ 是定义在 $@mathbb{R}$ 上的奇函数，且 $f(x+2)=-f(x)$。当 $0@le x@le1$ 时，$f(x)=x$，则 $f(2027.5)=$`,
    options: [
      { k: 'A', t: `$-@frac12$` },
      { k: 'B', t: `$@frac12$` },
      { k: 'C', t: `$1$` },
      { k: 'D', t: `$-1$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `由 $f(x+2)=-f(x)$ 再代一次得 $f(x+4)=-f(x+2)=f(x)$，周期 $T=4$。`,
      `$2027.5=4@times506+3.5$，故 $f(2027.5)=f(3.5)=f(-0.5)$。`,
      `由奇函数得 $f(-0.5)=-f(0.5)=-0.5$，即 $f(2027.5)=-@frac12$。`
    ],
    hints: ['由 $f(x+2)=-f(x)$ 再代一次推出周期 $4$。', '把大自变量减去周期的整数倍。'],
    pitfalls: ['把周期当成 $2$，压缩到 $f(1.5)$ 后无法求值。'],
    takeaway: '递推式代两次出周期，大自变量先压缩。'
  },
  {
    id: 'dr-a-15', knowledge: ['k-fn-prop'], type: 'single', difficulty: 3, score: 5,
    stem: `设 $f(x)$ 是定义在 $@mathbb{R}$ 上的奇函数，且 $f(x+1)$ 是偶函数，则 $f(2024)=$`,
    options: [
      { k: 'A', t: `$0$` },
      { k: 'B', t: `$1$` },
      { k: 'C', t: `$-1$` },
      { k: 'D', t: `无法确定` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$f(x+1)$ 为偶函数，即 $f(1+x)=f(1-x)$。`,
      `又 $f$ 为奇函数，$f(1-x)=-f(x-1)$，所以 $f(1+x)=-f(x-1)$。`,
      `令 $t=x-1$ 得 $f(t+2)=-f(t)$，再代一次得 $f(t+4)=f(t)$，周期为 $4$。`,
      `$2024=4@times506$，故 $f(2024)=f(0)=0$。`
    ],
    hints: ['把“$f(x+1)$ 是偶函数”翻译成 $f(1+x)=f(1-x)$。', '再用奇函数把 $f(1-x)$ 变成 $-f(x-1)$。'],
    pitfalls: ['把 $f(x+1)$ 为偶函数误写成 $f(x+1)=f(-x-1)$。'],
    takeaway: '一轴一心组合出周期：$f(x+1)$ 为偶 + 奇函数得 $T=4$。'
  },
  {
    id: 'dr-a-16', knowledge: ['k-fn-prop'], type: 'multiple', difficulty: 3, score: 6,
    stem: `关于函数 $f(x)=@ln@frac{1-x}{1+x}$，下列结论正确的是`,
    options: [
      { k: 'A', t: `定义域为 $@left(-1,1@right)$` },
      { k: 'B', t: `$f(x)$ 是奇函数` },
      { k: 'C', t: `$f(x)$ 在 $@left(-1,1@right)$ 上单调递增` },
      { k: 'D', t: `$f(x)$ 有唯一零点 $x=0$` }
    ],
    answer: 'ABD', accept: [],
    solution: [
      `由 $@frac{1-x}{1+x}>0$ 得 $-1<x<1$，A 正确。`,
      `$f(-x)=@ln@frac{1+x}{1-x}=-@ln@frac{1-x}{1+x}=-f(x)$，B 正确。`,
      `$f'(x)=-@frac{2}{1-x^2}<0$，在 $(-1,1)$ 上单调递减，C 错误。`,
      `$f(0)=0$，且 $f$ 单调，零点唯一，D 正确。`
    ],
    hints: ['先解分式不等式定定义域。', '判断单调性可用导数，也可用复合函数“同增异减”。'],
    pitfalls: ['忽略真数大于零，把定义域写成 $x@ne-1$。'],
    takeaway: '对数型函数：定义域优先，奇偶与单调再各走一步。'
  },
  {
    id: 'dr-a-17', knowledge: ['k-fn-prop'], type: 'fill', difficulty: 3, score: 5,
    stem: `已知函数 $f(x)$ 对任意实数 $x,y$ 都有 $f(x+y)=f(x)+f(y)+2xy$，且 $f(1)=1$，则 $f(3)=$ ________ .`,
    answer: `$9$`, accept: ['9'],
    solution: [
      `令 $x=y=1$，得 $f(2)=f(1)+f(1)+2@times1@times1=4$。`,
      `再令 $x=2,y=1$，得 $f(3)=f(2)+f(1)+2@times2@times1=9$。`
    ],
    hints: ['赋值 $x=y=1$ 求 $f(2)$。', '再把 $3$ 拆成 $2+1$ 推 $f(3)$。'],
    pitfalls: ['把 $2xy$ 这一项漏掉，得到 $f(3)=3$。'],
    takeaway: '抽象函数赋值：先拆出已知，再逐层推到目标。'
  },
  {
    id: 'dr-a-18', knowledge: ['k-fn-prop'], type: 'solve', difficulty: 4, score: 12,
    stem: `设 $f(x)$ 是定义在 $@left[-2,2@right]$ 上的奇函数，且在 $@left[-2,2@right]$ 上单调递增，$f(1)=1$。(1) 求 $f(0)$ 与 $f(-1)$；(2) 解不等式 $f(1-x)+f(1-x^2)<0$。`,
    answer: `(1) $f(0)=0$，$f(-1)=-1$；(2) $@left(1,@sqrt3@right]$`, accept: [],
    solution: [
      `(1) 奇函数在 $x=0$ 有定义，故 $f(0)=0$；$f(-1)=-f(1)=-1$。`,
      `(2) 原不等式化为 $f(1-x)<-f(1-x^2)=f(x^2-1)$，由单调递增得 $1-x<x^2-1$。`,
      `即 $x^2+x-2>0$，解得 $x>1$ 或 $x<-2$。`,
      `定义域要求 $-2@le1-x@le2$ 且 $-2@le1-x^2@le2$，即 $-1@le x@le3$ 且 $|x|@le@sqrt3$，交集为 $@left[-1,@sqrt3@right]$。`,
      `与解集取交集得 $x@in@left(1,@sqrt3@right]$。`
    ],
    hints: ['先用奇函数把 $-f(1-x^2)$ 写成 $f(x^2-1)$。', '解出不等式后必须与定义域取交集。'],
    pitfalls: ['只用单调性解不等式，忘记括号内的自变量都要落在 $[-2,2]$ 内。'],
    takeaway: '抽象不等式三步：奇偶转化、单调去 $f$、定义域取交。'
  },
  {
    id: 'dr-a-19', knowledge: ['k-fn-elem'], type: 'single', difficulty: 2, score: 5,
    stem: `设 $a=@ln2$，$b=2^{0.1}$，$c=@log_{0.5}2$，则`,
    options: [
      { k: 'A', t: `$c<a<b$` },
      { k: 'B', t: `$a<b<c$` },
      { k: 'C', t: `$c<b<a$` },
      { k: 'D', t: `$a<c<b$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$c=@log_{0.5}2=@frac{@ln2}{@ln0.5}=-1<0$。`,
      `$a=@ln2@in(0,1)$，而 $b=2^{0.1}>2^0=1$。`,
      `所以 $c<a<b$。`
    ],
    hints: ['先判断三个数与 $0$、$1$ 的大小关系，不要直接估。'],
    pitfalls: ['把 $@log_{0.5}2$ 当成正数。'],
    takeaway: '比较大小：先插 $0$ 和 $1$，再细分。'
  },
  {
    id: 'dr-a-20', knowledge: ['k-fn-elem'], type: 'single', difficulty: 2, score: 5,
    stem: `已知 $3^a=5$，则 $@log_3 45=$`,
    options: [
      { k: 'A', t: `$a+2$` },
      { k: 'B', t: `$a+1$` },
      { k: 'C', t: `$2a$` },
      { k: 'D', t: `$a^2$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `由 $3^a=5$ 得 $@log_3 5=a$。`,
      `$@log_3 45=@log_3(9@times5)=@log_3 9+@log_3 5=2+a$。`
    ],
    hints: ['把 $45$ 拆成 $9@times5$。', '由 $3^a=5$ 得 $@log_3 5=a$。'],
    pitfalls: ['把 $@log_3 5$ 与 $@log_5 3$ 混淆。'],
    takeaway: '对数化积为和，先把真数拆成底数的幂乘已知。'
  },
  {
    id: 'dr-a-21', knowledge: ['k-fn-elem'], type: 'single', difficulty: 3, score: 5,
    stem: `函数 $f(x)=@log_{0.5}(x^2-2x-3)$ 的单调递增区间是`,
    options: [
      { k: 'A', t: `$@left(-@infty,-1@right)$` },
      { k: 'B', t: `$@left(3,+@infty@right)$` },
      { k: 'C', t: `$@left(-@infty,1@right)$` },
      { k: 'D', t: `$@left(1,+@infty@right)$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `由 $x^2-2x-3>0$ 得 $x<-1$ 或 $x>3$。`,
      `外层底数 $0.5<1$，函数递减；要使整体递增，需内层 $u=x^2-2x-3$ 递减。`,
      `$u$ 在 $x<1$ 上递减，与定义域取交集得 $(-@infty,-1)$。`
    ],
    hints: ['先写真数大于零得定义域。', '外层底数小于 $1$，复合函数用“同增异减”。'],
    pitfalls: ['忘记定义域，直接写 $(-@infty,1)$。'],
    takeaway: '对数复合：定义域先定，再用同增异减。'
  },
  {
    id: 'dr-a-22', knowledge: ['k-fn-elem'], type: 'multiple', difficulty: 3, score: 6,
    stem: `已知函数 $f(x)=@ln x$，$g(x)=e^x$，则下列结论正确的是`,
    options: [
      { k: 'A', t: `两图像关于直线 $y=x$ 对称` },
      { k: 'B', t: `$f(x)$ 在 $@left(0,+@infty@right)$ 上单调递增` },
      { k: 'C', t: `$g(x)$ 的值域为 $@left(0,+@infty@right)$` },
      { k: 'D', t: `$f(x)$ 的图像经过点 $(0,1)$` }
    ],
    answer: 'ABC', accept: [],
    solution: [
      `$y=@ln x$ 与 $y=e^x$ 互为反函数，图像关于 $y=x$ 对称，A 正确。`,
      `$@ln x$ 在 $(0,+@infty)$ 上递增，B 正确；$e^x$ 的值域为 $(0,+@infty)$，C 正确。`,
      `$@ln x$ 恒过点 $(1,0)$，不是 $(0,1)$，D 错误。`
    ],
    hints: ['指对函数互为反函数。', '$@ln x$ 的定点是 $(1,0)$。'],
    pitfalls: ['把 $@ln x$ 的定点记成 $(0,1)$。'],
    takeaway: '指对互反：图像关于 $y=x$ 对称，定点互换。'
  },
  {
    id: 'dr-a-23', knowledge: ['k-fn-elem'], type: 'fill', difficulty: 3, score: 5,
    stem: `已知 $@log_a 2=m$，$@log_a 3=n$，则 $a^{2m+n}=$ ________ .`,
    answer: `$12$`, accept: ['12'],
    solution: [
      `由对数定义得 $a^m=2$，$a^n=3$。`,
      `$a^{2m+n}=(a^m)^2@cdot a^n=2^2@times3=12$。`
    ],
    hints: ['先把对数式翻译成指数式。', '注意 $a^{2m}=(a^m)^2$。'],
    pitfalls: ['把 $a^{2m+n}$ 直接算成 $2m+n$。'],
    takeaway: '对数与指数互化，指数相加变乘法。'
  },
  {
    id: 'dr-a-24', knowledge: ['k-fn-elem'], type: 'solve', difficulty: 4, score: 12,
    stem: `已知函数 $f(x)=@frac{2^x-1}{2^x+1}$。(1) 判断 $f(x)$ 的奇偶性；(2) 解不等式 $f(x)>@frac13$。`,
    answer: `(1) 奇函数；(2) $@left(1,+@infty@right)$`, accept: [],
    solution: [
      `(1) 定义域为 $@mathbb{R}$。$f(-x)=@frac{2^{-x}-1}{2^{-x}+1}=@frac{1-2^x}{1+2^x}=-@frac{2^x-1}{2^x+1}=-f(x)$，故为奇函数。`,
      `(2) 因为 $2^x+1>0$，去分母得 $3(2^x-1)>2^x+1$。`,
      `整理得 $2@cdot2^x>4$，即 $2^x>2$，所以 $x>1$。`
    ],
    hints: ['第 (1) 问把 $2^{-x}$ 写成 $@frac{1}{2^x}$ 再通分。', '第 (2) 问分母恒正，可直接去分母。'],
    pitfalls: ['去分母时没有说明 $2^x+1>0$。'],
    takeaway: '分式指数函数：奇偶靠通分，不等式靠分母恒正。'
  },
  {
    id: 'dr-a-25', knowledge: ['k-fn-zero'], type: 'single', difficulty: 2, score: 5,
    stem: `函数 $f(x)=@ln x+x-3$ 的零点所在的区间是`,
    options: [
      { k: 'A', t: `$@left(1,2@right)$` },
      { k: 'B', t: `$@left(2,3@right)$` },
      { k: 'C', t: `$@left(3,4@right)$` },
      { k: 'D', t: `$@left(0,1@right)$` }
    ],
    answer: 'B', accept: [],
    solution: [
      `$f(x)$ 在 $(0,+@infty)$ 上连续且单调递增，零点至多一个。`,
      `$f(2)=@ln2-1<0$，$f(3)=@ln3>0$。`,
      `由零点存在定理，零点在 $(2,3)$ 内。`
    ],
    hints: ['先看单调性，保证零点唯一。', '计算 $f(2)$ 与 $f(3)$ 的符号。'],
    pitfalls: ['只用 $@ln2<1$ 就下结论，没有说明单调性。'],
    takeaway: '零点定位：单调 + 两端异号。'
  },
  {
    id: 'dr-a-26', knowledge: ['k-fn-zero'], type: 'single', difficulty: 3, score: 5,
    stem: `方程 $@ln x=x-2$ 的实数解的个数为`,
    options: [
      { k: 'A', t: `$0$` },
      { k: 'B', t: `$1$` },
      { k: 'C', t: `$2$` },
      { k: 'D', t: `$3$` }
    ],
    answer: 'C', accept: [],
    solution: [
      `令 $h(x)=@ln x-x+2$，定义域 $x>0$，$h'(x)=@frac1x-1$。`,
      `$h$ 在 $(0,1)$ 上递增、在 $(1,+@infty)$ 上递减，最大值 $h(1)=1>0$。`,
      `当 $x@to0^+$ 与 $x@to+@infty$ 时 $h(x)@to-@infty$，故 $1$ 的左右各有一个零点，共 $2$ 个。`
    ],
    hints: ['移项构造函数，求导找最大值。', '最大值大于零且两端趋于负无穷，说明两侧各一个零点。'],
    pitfalls: ['只看最大值大于零就判断解的个数，没有看两端趋势。'],
    takeaway: '方程根的个数：构造、求最值、看两端。'
  },
  {
    id: 'dr-a-27', knowledge: ['k-fn-zero'], type: 'single', difficulty: 3, score: 5,
    stem: `若函数 $f(x)=@ln x-ax$ 有两个零点，则实数 $a$ 的取值范围是`,
    options: [
      { k: 'A', t: `$@left(0,@frac1e@right)$` },
      { k: 'B', t: `$@left(-@infty,@frac1e@right)$` },
      { k: 'C', t: `$@left(@frac1e,+@infty@right)$` },
      { k: 'D', t: `$@left(0,e@right)$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `令 $a=@frac{@ln x}{x}=g(x)$，零点个数即水平线 $y=a$ 与 $y=g(x)$ 的交点个数。`,
      `$g'(x)=@frac{1-@ln x}{x^2}$，$g$ 在 $(0,e)$ 上递增、在 $(e,+@infty)$ 上递减，最大值 $g(e)=@frac1e$。`,
      `又 $x@to0^+$ 时 $g(x)@to-@infty$，$x@to+@infty$ 时 $g(x)@to0^+$。`,
      `要有两个交点，需 $0<a<@frac1e$。`
    ],
    hints: ['分离参数，把零点个数变成水平线与曲线的交点个数。', '先求 $@frac{@ln x}{x}$ 的单调性与最大值。'],
    pitfalls: ['忽略 $x@to0^+$ 时 $g(x)@to-@infty$，把范围写成 $a<@frac1e$。'],
    takeaway: '零点个数：分离参数 + 画水平线，注意两端趋势。'
  },
  {
    id: 'dr-a-28', knowledge: ['k-fn-zero'], type: 'multiple', difficulty: 3, score: 6,
    stem: `已知函数 $f(x)=x^3-3x+1$，下列结论正确的是`,
    options: [
      { k: 'A', t: `$f(x)$ 有三个零点` },
      { k: 'B', t: `$f(x)$ 的极大值为 $3$` },
      { k: 'C', t: `$f(x)$ 的极小值为 $-1$` },
      { k: 'D', t: `$f(x)$ 在 $@left(1,+@infty@right)$ 上单调递减` }
    ],
    answer: 'ABC', accept: [],
    solution: [
      `$f'(x)=3(x-1)(x+1)$，极大值 $f(-1)=3$，极小值 $f(1)=-1$，B、C 正确。`,
      `$f(x)$ 在 $(-@infty,-1)$ 上递增、$(-1,1)$ 上递减、$(1,+@infty)$ 上递增，D 错误。`,
      `$f(-@infty)@to-@infty$，$f(-1)>0$，$f(1)<0$，$f(+@infty)@to+@infty$，三段各有一个零点，共 $3$ 个，A 正确。`
    ],
    hints: ['先求导定极值，再用极值符号数零点。', '两端趋势也要看，才能确定最外侧的零点。'],
    pitfalls: ['极值异号只能说明中间有零点，两侧还需看趋势。'],
    takeaway: '三次函数零点：极值异号 + 两端趋势。'
  },
  {
    id: 'dr-a-29', knowledge: ['k-fn-zero'], type: 'fill', difficulty: 3, score: 5,
    stem: `若函数 $f(x)=2^x+x-a$ 在区间 $(0,1)$ 内有零点，则实数 $a$ 的取值范围是 ________ .`,
    answer: `$@left(1,3@right)$`, accept: ['1<a<3', '(1,3)'],
    solution: [
      `$f(x)$ 在 $@mathbb{R}$ 上单调递增，零点至多一个。`,
      `零点在 $(0,1)$ 内等价于 $f(0)<0$ 且 $f(1)>0$。`,
      `即 $1-a<0$ 且 $3-a>0$，解得 $1<a<3$。`
    ],
    hints: ['先说明 $f$ 单调，零点至多一个。', '开区间内有零点等价于两端严格异号。'],
    pitfalls: ['写成 $1@le a@le3$，端点处零点不在开区间内。'],
    takeaway: '开区间零点：两端严格异号。'
  },
  {
    id: 'dr-a-30', knowledge: ['k-fn-zero'], type: 'solve', difficulty: 5, score: 12,
    stem: `已知函数 $f(x)=e^x-ax-1$。(1) 当 $a=1$ 时，求 $f(x)$ 的极小值；(2) 若 $f(x)$ 有两个零点，求实数 $a$ 的取值范围。`,
    answer: `(1) $0$；(2) $@left(0,1@right)@cup@left(1,+@infty@right)$`, accept: [],
    solution: [
      `(1) 当 $a=1$ 时 $f'(x)=e^x-1$，$f$ 在 $x=0$ 处取极小值 $f(0)=0$。`,
      `(2) 注意到 $f(0)=0$ 恒成立，关键是再找一个零点。$f'(x)=e^x-a$。`,
      `当 $a@le0$ 时 $f'(x)>0$，$f$ 严格递增，只有一个零点，不符合。`,
      `当 $a>0$ 时，$f$ 在 $x=@ln a$ 处取最小值 $f(@ln a)=a-a@ln a-1$。`,
      `令 $g(a)=a-a@ln a-1$，$g'(a)=-@ln a$，故 $g$ 在 $(0,1)$ 上递增、在 $(1,+@infty)$ 上递减，$g(a)@le g(1)=0$，仅 $a=1$ 取等。`,
      `所以 $a>0$ 且 $a@ne1$ 时最小值小于 $0$，结合 $f(0)=0$ 与两端趋势，恰有两个零点。`,
      `综上 $a@in(0,1)@cup(1,+@infty)$。`
    ],
    hints: ['注意 $f(0)=0$ 恒成立，关键是再找一个零点。', '按 $a@le0$ 与 $a>0$ 分类，后者看最小值。'],
    pitfalls: ['漏掉 $a=1$ 时最小值恰为 $0$，此时只有一个零点。', '$a@le0$ 时函数严格递增，不可能有两个零点。'],
    takeaway: '指数含参零点：先找定点，再按最小值符号分类。'
  },
  {
    id: 'dr-a-31', knowledge: ['k-fn-model'], type: 'single', difficulty: 1, score: 5,
    stem: `要由 $y=f(x)$ 的图像得到 $y=f(2x-1)$ 的图像，可先将 $y=f(x)$ 图像上所有点的横坐标缩短为原来的 $@frac12$（纵坐标不变），再`,
    options: [
      { k: 'A', t: `向右平移 $@frac12$ 个单位` },
      { k: 'B', t: `向左平移 $@frac12$ 个单位` },
      { k: 'C', t: `向右平移 $1$ 个单位` },
      { k: 'D', t: `向左平移 $1$ 个单位` }
    ],
    answer: 'A', accept: [],
    solution: [
      `横坐标缩短为原来的 $@frac12$ 后，图像对应 $y=f(2x)$。`,
      `再向右平移 $@frac12$ 个单位，得 $y=f@left(2@left(x-@frac12@right)@right)=f(2x-1)$。`
    ],
    hints: ['先伸缩后平移，平移量是按 $x$ 本身算的。'],
    pitfalls: ['把平移量当成 $1$，忽略了先伸缩已经改变横坐标。'],
    takeaway: '变换顺序：先伸缩后平移，平移量按 $x$ 的实际改变算。'
  },
  {
    id: 'dr-a-32', knowledge: ['k-fn-model'], type: 'single', difficulty: 1, score: 5,
    stem: `某放射性物质的质量 $M$（单位：g）与时间 $t$（单位：天）满足 $M=8@cdot@left(@frac12@right)^{@frac{t}{30}}$，则 $90$ 天后该物质的质量为`,
    options: [
      { k: 'A', t: `$4$ g` },
      { k: 'B', t: `$2$ g` },
      { k: 'C', t: `$1$ g` },
      { k: 'D', t: `$0.5$ g` }
    ],
    answer: 'C', accept: [],
    solution: [
      `$t=90$ 时指数为 $@frac{90}{30}=3$。`,
      `$M=8@cdot@left(@frac12@right)^3=8@cdot@frac18=1$（g）。`
    ],
    hints: ['先算经过了几个半衰期。'],
    pitfalls: ['把半衰期当成 $90$ 天。'],
    takeaway: '指数衰减模型：先算经过的半衰期个数。'
  },
  {
    id: 'dr-a-33', knowledge: ['k-fn-model'], type: 'single', difficulty: 3, score: 5,
    stem: `某产品售价为 $p=60-@frac{x}{10}$（元/件）时，可售出 $x$ 件，生产 $x$ 件的成本为 $2000+20x$（元），$0@le x@le300$。则利润最大时 $x=$`,
    options: [
      { k: 'A', t: `$100$` },
      { k: 'B', t: `$150$` },
      { k: 'C', t: `$200$` },
      { k: 'D', t: `$250$` }
    ],
    answer: 'C', accept: [],
    solution: [
      `利润 $L=x@left(60-@frac{x}{10}@right)-(2000+20x)=-@frac{x^2}{10}+40x-2000$。`,
      `配方得 $L=-@frac{1}{10}(x-200)^2+2000$。`,
      `当 $x=200$ 时取最大值，且 $200@in[0,300]$。`
    ],
    hints: ['利润 = 收入 - 成本，先写出二次函数。', '配方找顶点，再确认顶点在定义域内。'],
    pitfalls: ['忘记减去成本中的 $20x$。'],
    takeaway: '利润模型：收入减成本，配方看顶点是否在定义域内。'
  },
  {
    id: 'dr-a-34', knowledge: ['k-fn-model'], type: 'multiple', difficulty: 3, score: 6,
    stem: `已知函数 $y=f(x)$ 的图像，下列说法正确的是`,
    options: [
      { k: 'A', t: `$y=f(-x)$ 与 $y=f(x)$ 的图像关于 $y$ 轴对称` },
      { k: 'B', t: `$y=-f(x)$ 与 $y=f(x)$ 的图像关于 $x$ 轴对称` },
      { k: 'C', t: `$y=f(x+1)$ 的图像可由 $y=f(x)$ 的图像向左平移 $1$ 个单位得到` },
      { k: 'D', t: `$y=f(2x)$ 的图像可由 $y=f(x)$ 的图像横坐标伸长为原来的 $2$ 倍得到` }
    ],
    answer: 'ABC', accept: [],
    solution: [
      `把 $(x,y)$ 换成 $(-x,y)$ 即关于 $y$ 轴对称，A 正确。`,
      `把 $(x,y)$ 换成 $(x,-y)$ 即关于 $x$ 轴对称，B 正确。`,
      `$f(x+1)$ 是把 $x$ 换成 $x+1$，图像左移 $1$ 个单位，C 正确。`,
      `$f(2x)$ 是横坐标缩短为原来的 $@frac12$，不是伸长 $2$ 倍，D 错误。`
    ],
    hints: ['逐个对照三种对称与平移、伸缩规则。'],
    pitfalls: ['横向伸缩误记为“系数几就伸长几倍”。'],
    takeaway: '对称认符号位置，伸缩认 $x$ 前的系数。'
  },
  {
    id: 'dr-a-35', knowledge: ['k-fn-model'], type: 'fill', difficulty: 3, score: 5,
    stem: `某药物在血液中的浓度 $C$（单位：mg/L）与时间 $t$（单位：h）满足 $C=C_0e^{-kt}$。已知服药 $2$ h 后浓度降为初始浓度的一半，则 $k=$ ________ .`,
    answer: `$@frac{@ln2}{2}$`, accept: ['ln2/2', '(ln2)/2', '0.5ln2'],
    solution: [
      `由题意 $C_0e^{-2k}=@frac{C_0}{2}$，即 $e^{-2k}=@frac12$。`,
      `两边取自然对数得 $-2k=-@ln2$，所以 $k=@frac{@ln2}{2}$。`
    ],
    hints: ['把“降为一半”翻译成 $e^{-2k}=@frac12$。', '两边取自然对数解 $k$。'],
    pitfalls: ['把 $e^{-2k}=@frac12$ 解成 $k=@ln2$。'],
    takeaway: '半衰期型：$e^{-kt}=@frac12$，取对数解 $k$。'
  },
  {
    id: 'dr-a-36', knowledge: ['k-fn-model'], type: 'solve', difficulty: 4, score: 12,
    stem: `某网店销售一种商品，每件进价 $30$ 元。当售价为 $x$ 元/件（$30@le x@le60$）时，日销量为 $90-x$ 件。设日利润为 $L(x)$ 元。(1) 求 $L(x)$ 的最大值及此时售价；(2) 若日利润不低于 $700$ 元，求售价 $x$ 的取值范围。`,
    answer: `(1) 售价 $60$ 元/件时利润最大，最大值为 $900$ 元；(2) $@left[60-10@sqrt2,60@right]$`, accept: [],
    solution: [
      `(1) $L(x)=(x-30)(90-x)=-x^2+120x-2700=-(x-60)^2+900$。`,
      `因为 $x@in[30,60]$，所以 $x=60$ 时 $L$ 取最大值 $900$。`,
      `(2) 由 $-x^2+120x-2700@ge700$ 得 $x^2-120x+3400@le0$。`,
      `解得 $60-10@sqrt2@le x@le60+10@sqrt2$，与 $30@le x@le60$ 取交集得 $x@in@left[60-10@sqrt2,60@right]$。`
    ],
    hints: ['利润 =（售价 - 进价）× 销量。', '第 (2) 问解二次不等式后要与定义域取交集。'],
    pitfalls: ['第 (2) 问忘记与 $x@le60$ 取交集。'],
    takeaway: '二次利润模型：配方定最值，解不等式注意定义域。'
  },
  {
    id: 'dr-a-37', knowledge: ['k-dv-monotone'], type: 'single', difficulty: 1, score: 5,
    stem: `函数 $f(x)=x^3-3x^2+1$ 的单调递减区间是`,
    options: [
      { k: 'A', t: `$@left(0,2@right)$` },
      { k: 'B', t: `$@left(-@infty,0@right)$` },
      { k: 'C', t: `$@left(2,+@infty@right)$` },
      { k: 'D', t: `$@left(-2,0@right)$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$f'(x)=3x^2-6x=3x(x-2)$。`,
      `令 $f'(x)<0$，得 $0<x<2$。`,
      `故单调递减区间为 $(0,2)$。`
    ],
    hints: ['求导后因式分解，解导函数小于零的不等式。'],
    pitfalls: ['把两个单调区间用并集连起来。'],
    takeaway: '单调区间解导数不等式，多个区间不能并。'
  },
  {
    id: 'dr-a-38', knowledge: ['k-dv-monotone'], type: 'single', difficulty: 2, score: 5,
    stem: `若函数 $f(x)=x^3-ax$ 在 $@left[1,+@infty@right)$ 上单调递增，则实数 $a$ 的取值范围是`,
    options: [
      { k: 'A', t: `$a@le3$` },
      { k: 'B', t: `$a<3$` },
      { k: 'C', t: `$a@ge3$` },
      { k: 'D', t: `$a@le1$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `已知递增，需 $f'(x)=3x^2-a@ge0$ 在 $[1,+@infty)$ 上恒成立。`,
      `即 $a@le3x^2$ 恒成立，而 $3x^2$ 在 $[1,+@infty)$ 上的最小值为 $3$。`,
      `所以 $a@le3$，且 $a=3$ 时仅 $x=1$ 处导数为 $0$，仍递增。`
    ],
    hints: ['已知递增转为导函数不小于零恒成立。', '分离参数后求 $3x^2$ 在区间上的最小值。'],
    pitfalls: ['把“递增”写成导函数严格大于零，漏掉等号。'],
    takeaway: '已知单调转恒成立，等号必须验证。'
  },
  {
    id: 'dr-a-39', knowledge: ['k-dv-monotone'], type: 'single', difficulty: 3, score: 5,
    stem: `若函数 $f(x)=x^3-ax^2+1$ 在区间 $(0,2)$ 内不单调，则实数 $a$ 的取值范围是`,
    options: [
      { k: 'A', t: `$@left(0,3@right)$` },
      { k: 'B', t: `$@left(0,3@right]$` },
      { k: 'C', t: `$@left[0,3@right)$` },
      { k: 'D', t: `$@left(0,2@right)$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$f'(x)=3x^2-2ax=x(3x-2a)$，驻点为 $x=0$ 与 $x=@frac{2a}{3}$。`,
      `在 $(0,2)$ 内不单调，等价于驻点 $@frac{2a}{3}$ 落在区间内部，且在两侧变号。`,
      `由 $0<@frac{2a}{3}<2$ 得 $0<a<3$。`
    ],
    hints: ['不单调说明导数在区间内有变号零点。', '先求导并因式分解，找出驻点。'],
    pitfalls: ['把端点 $a=3$ 算进去，此时驻点为 $2$，在开区间外。'],
    takeaway: '区间内不单调 = 驻点在区间内部且变号。'
  },
  {
    id: 'dr-a-40', knowledge: ['k-dv-monotone'], type: 'multiple', difficulty: 3, score: 6,
    stem: `设 $f(x)$ 在区间 $(a,b)$ 内可导，下列说法正确的是`,
    options: [
      { k: 'A', t: `若 $f'(x)>0$ 在 $(a,b)$ 内恒成立，则 $f(x)$ 在 $(a,b)$ 内单调递增` },
      { k: 'B', t: `若 $f(x)$ 在 $(a,b)$ 内单调递增，则 $f'(x)>0$ 在 $(a,b)$ 内恒成立` },
      { k: 'C', t: `若 $f'(x)@ge0$ 在 $(a,b)$ 内恒成立，则 $f(x)$ 在 $(a,b)$ 内单调不减` },
      { k: 'D', t: `若 $f(x)$ 在 $(a,b)$ 内单调递增，则 $f'(x)@ge0$ 在 $(a,b)$ 内恒成立` }
    ],
    answer: 'ACD', accept: [],
    solution: [
      `A 是导数与单调性的基本定理，正确。`,
      `C 中导数非负只能排除下降，允许个别点导数为零，函数单调不减，正确。`,
      `D 中递增函数的导数处处非负，正确。`,
      `B 错误，反例 $f(x)=x^3$ 在 $x=0$ 处导数为 $0$。`
    ],
    hints: ['注意个别点导数为零不影响单调性。', '反例可考虑 $f(x)=x^3$ 在 $x=0$ 附近。'],
    pitfalls: ['把递增的必要条件写成导函数严格大于零恒成立。'],
    takeaway: '递增看导函数不小于零，严格不等只是充分条件。'
  },
  {
    id: 'dr-a-41', knowledge: ['k-dv-monotone'], type: 'fill', difficulty: 3, score: 5,
    stem: `若函数 $f(x)=ax-@ln x$ 在 $(0,+@infty)$ 上单调递减，则实数 $a$ 的取值范围是 ________ .`,
    answer: `$a@le0$`, accept: ['a<=0', 'a≤0', '(-inf,0]'],
    solution: [
      `$f'(x)=a-@frac1x$，需 $a-@frac1x@le0$ 在 $(0,+@infty)$ 上恒成立。`,
      `即 $a@le@frac1x$ 对任意 $x>0$ 成立，而 $@frac1x$ 的下确界为 $0$（取不到）。`,
      `所以 $a@le0$；$a=0$ 时 $f'(x)=-@frac1x<0$，确实递减。`
    ],
    hints: ['单调递减转为导函数不大于零恒成立。', '$@frac1x$ 在 $(0,+@infty)$ 上的下确界是 $0$。'],
    pitfalls: ['把下确界当作最小值，写成 $a<0$。'],
    takeaway: '恒成立取到的是下确界，等号能否取到要单独看。'
  },
  {
    id: 'dr-a-42', knowledge: ['k-dv-monotone'], type: 'solve', difficulty: 4, score: 12,
    stem: `已知函数 $f(x)=x@ln x-ax+1$。(1) 讨论 $f(x)$ 的单调性；(2) 若 $f(x)@ge0$ 对任意 $x>0$ 恒成立，求实数 $a$ 的最大值。`,
    answer: `(1) 在 $@left(0,e^{a-1}@right)$ 上单调递减，在 $@left(e^{a-1},+@infty@right)$ 上单调递增；(2) $1$`, accept: [],
    solution: [
      `定义域为 $x>0$，$f'(x)=@ln x+1-a$。`,
      `令 $f'(x)=0$ 得 $x=e^{a-1}$，故 $f$ 在 $(0,e^{a-1})$ 上递减，在 $(e^{a-1},+@infty)$ 上递增。`,
      `(2) 最小值为 $f(e^{a-1})=e^{a-1}(a-1)-a e^{a-1}+1=1-e^{a-1}$。`,
      `由 $1-e^{a-1}@ge0$ 得 $e^{a-1}@le1$，即 $a@le1$。`,
      `所以 $a$ 的最大值为 $1$。`
    ],
    hints: ['求导后令导函数为零，得 $x=e^{a-1}$。', '最小值代入后大部分项抵消，只剩 $1-e^{a-1}$。'],
    pitfalls: ['忘记写定义域 $x>0$。', '代入最小值时符号算错。'],
    takeaway: '含参对数函数：驻点 $e^{a-1}$，最小值代入化简。'
  },
  {
    id: 'dr-a-43', knowledge: ['k-dv-extreme'], type: 'single', difficulty: 2, score: 5,
    stem: `函数 $f(x)=x^3-3x^2+1$ 的极大值为`,
    options: [
      { k: 'A', t: `$1$` },
      { k: 'B', t: `$0$` },
      { k: 'C', t: `$-3$` },
      { k: 'D', t: `$3$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$f'(x)=3x^2-6x=3x(x-2)$，驻点为 $0$ 与 $2$。`,
      `$x<0$ 时 $f'>0$，$0<x<2$ 时 $f'<0$，故 $x=0$ 处取极大值。`,
      `$f(0)=1$。`
    ],
    hints: ['求出导函数后令其为零，再列表判断左右符号。'],
    pitfalls: ['把 $x=2$ 处的极小值当成极大值。'],
    takeaway: '极值看两侧导数符号，不是只看导数为零。'
  },
  {
    id: 'dr-a-44', knowledge: ['k-dv-extreme'], type: 'single', difficulty: 2, score: 5,
    stem: `函数 $f(x)=x^3-3x+1$ 在 $@left[0,2@right]$ 上的最大值为`,
    options: [
      { k: 'A', t: `$1$` },
      { k: 'B', t: `$-1$` },
      { k: 'C', t: `$3$` },
      { k: 'D', t: `$5$` }
    ],
    answer: 'C', accept: [],
    solution: [
      `$f'(x)=3(x-1)(x+1)$，$[0,2]$ 内驻点为 $x=1$。`,
      `$f(0)=1$，$f(1)=-1$，$f(2)=3$。`,
      `比较得最大值为 $3$。`
    ],
    hints: ['闭区间最值：极值点和两个端点都要算。'],
    pitfalls: ['只比较极值，漏掉端点 $x=2$。'],
    takeaway: '闭区间最值 = 极值 + 端点，一起比。'
  },
  {
    id: 'dr-a-45', knowledge: ['k-dv-extreme'], type: 'single', difficulty: 3, score: 5,
    stem: `已知函数 $f(x)=x^3-3x^2+a$ 的极大值与极小值之和为 $0$，则 $a=$`,
    options: [
      { k: 'A', t: `$2$` },
      { k: 'B', t: `$-2$` },
      { k: 'C', t: `$4$` },
      { k: 'D', t: `$0$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$f'(x)=3x(x-2)$，极大值为 $f(0)=a$，极小值为 $f(2)=a-4$。`,
      `由 $a+(a-4)=0$ 得 $2a=4$，即 $a=2$。`
    ],
    hints: ['先求两个极值点，再把极值都写成含 $a$ 的式子。'],
    pitfalls: ['把极小值算成 $a+4$。'],
    takeaway: '含参极值：先定极值点，再把极值写成参数的式子。'
  },
  {
    id: 'dr-a-46', knowledge: ['k-dv-extreme'], type: 'multiple', difficulty: 3, score: 6,
    stem: `已知函数 $f(x)=x^3-3x+1$，下列结论正确的是`,
    options: [
      { k: 'A', t: `极大值为 $3$` },
      { k: 'B', t: `极小值为 $-1$` },
      { k: 'C', t: `在 $@left[-2,2@right]$ 上的最大值为 $3$` },
      { k: 'D', t: `在 $@left[-2,2@right]$ 上的最小值为 $-3$` }
    ],
    answer: 'ABC', accept: [],
    solution: [
      `$f'(x)=3(x-1)(x+1)$，极大值 $f(-1)=3$，极小值 $f(1)=-1$，A、B 正确。`,
      `端点值 $f(-2)=-1$，$f(2)=3$。`,
      `与极值比较得最大值 $3$、最小值 $-1$，C 正确、D 错误。`
    ],
    hints: ['先求极值，再补端点。', '$f(-2)$ 与 $f(2)$ 都要算。'],
    pitfalls: ['把端点 $f(-2)=-1$ 误算成 $-3$。'],
    takeaway: '闭区间最值：极值与端点一起比较。'
  },
  {
    id: 'dr-a-47', knowledge: ['k-dv-extreme'], type: 'fill', difficulty: 3, score: 5,
    stem: `若函数 $f(x)=x^3-3x^2+ax$ 有两个极值点，则实数 $a$ 的取值范围是 ________ .`,
    answer: `$a<3$`, accept: ['a<3', '(-inf,3)'],
    solution: [
      `$f'(x)=3x^2-6x+a$，两个极值点等价于 $f'(x)=0$ 有两个不同实根且变号。`,
      `二次项系数为正，只需判别式 $@Delta=36-12a>0$。`,
      `解得 $a<3$。`
    ],
    hints: ['两个极值点等价于导函数有两个不同零点。', '对导函数用判别式。'],
    pitfalls: ['忘记说明开口向上，两个不同零点一定会变号。'],
    takeaway: '极值点个数 → 导函数变号零点个数，二次式看判别式。'
  },
  {
    id: 'dr-a-48', knowledge: ['k-dv-extreme'], type: 'solve', difficulty: 4, score: 12,
    stem: `已知函数 $f(x)=x^3-3x^2+a$。(1) 求 $f(x)$ 的极值；(2) 若 $f(x)$ 有三个零点，求 $a$ 的取值范围；(3) 若 $f(x)@ge0$ 对任意 $x@in@left[0,3@right]$ 恒成立，求 $a$ 的最小值。`,
    answer: `(1) 极大值 $f(0)=a$，极小值 $f(2)=a-4$；(2) $0<a<4$；(3) $4$`, accept: [],
    solution: [
      `$f'(x)=3x^2-6x=3x(x-2)$，故极大值为 $f(0)=a$，极小值为 $f(2)=a-4$。`,
      `(2) 三个零点要求极大值大于 $0$、极小值小于 $0$，即 $a>0$ 且 $a-4<0$，得 $0<a<4$。`,
      `(3) 在 $[0,3]$ 上，$f(0)=a$，$f(2)=a-4$，$f(3)=a$，最小值为 $a-4$。`,
      `由 $a-4@ge0$ 得 $a@ge4$，故 $a$ 的最小值为 $4$。`
    ],
    hints: ['先列表写清极大值、极小值，再用极值符号定零点个数。', '第 (3) 问最小值在 $x=2$ 处取得，别忘了也看端点。'],
    pitfalls: ['第 (2) 问取等：$a=0$ 或 $a=4$ 时出现重零点，只有两个不同零点。', '第 (3) 问漏算端点 $f(3)$。'],
    takeaway: '三次函数零点个数由极值符号决定，闭区间最值再补端点。'
  }
);
