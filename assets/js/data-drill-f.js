/* 保持题感 · 42 个知识点 × 2 道母题（1 单选 + 1 填空）
 * 公式约定：LaTeX 反斜杠一律写成 @；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_DRILL = window.GK_DRILL || [];
window.GK_DRILL.push(
  {
    id: 'dr-f-1', knowledge: ['k-set-ops'], type: 'single', difficulty: 2, score: 5,
    stem: `已知集合 $A=@left@{x@mid x^2-2x-3@le0@right@}$，$B=@left@{x@mid 2^x<4@right@}$，则 $A@cap B=$`,
    options: [
      { k: 'A', t: `$[-1,2)$` },
      { k: 'B', t: `$[-1,2]$` },
      { k: 'C', t: `$(2,3]$` },
      { k: 'D', t: `$[-1,3]$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `由 $x^2-2x-3@le0$ 得 $A=[-1,3]$。`,
      `由 $2^x<4=2^2$ 得 $B=(-@infty,2)$。`,
      `在数轴上取交集，$A@cap B=[-1,2)$。`
    ],
    hints: [
      '先把两个集合都化简成区间，再取交集。'
    ],
    pitfalls: [
      '把 $2^x<4$ 解成 $x<2$ 后误写成闭区间 $(-@infty,2]$。'
    ],
    takeaway: '集合运算先化简，再在数轴上取交并，端点开闭单独检查。'
  },
  {
    id: 'dr-f-2', knowledge: ['k-set-ops'], type: 'fill', difficulty: 1, score: 5,
    stem: `已知集合 $A=@left@{x@in@mathbb{Z}@mid -2<x<3@right@}$，则 $A$ 的子集个数为 ________ .`,
    answer: `$16$`, accept: ['16'],
    solution: [
      `先列出整数元素：$A=@left@{-1,0,1,2@right@}$。`,
      `$A$ 中有 $4$ 个元素，子集个数为 $2^4=16$。`
    ],
    hints: [
      '先数清集合里有几个元素。'
    ],
    pitfalls: [
      '把端点 $-2,3$ 也算进去，得到 $6$ 个元素。'
    ],
    takeaway: '含 $n$ 个元素的有限集，子集有 $2^n$ 个。'
  },
  {
    id: 'dr-f-3', knowledge: ['k-logic'], type: 'single', difficulty: 2, score: 5,
    stem: `已知 $p$：$x>2$，$q$：$x^2>4$，则 $p$ 是 $q$ 的`,
    options: [
      { k: 'A', t: `充分不必要条件` },
      { k: 'B', t: `必要不充分条件` },
      { k: 'C', t: `充要条件` },
      { k: 'D', t: `既不充分也不必要条件` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$x^2>4$ 的解集是 $x>2$ 或 $x<-2$。`,
      `$p@Rightarrow q$，但 $q$ 中的 $x<-2$ 不能推出 $p$。`,
      `故 $p$ 是 $q$ 的充分不必要条件。`
    ],
    hints: [
      '先把 $q$ 的解集解出来，再比较范围大小。'
    ],
    pitfalls: [
      '只看到 $x>2$ 时 $x^2>4$，就误判为充要条件。'
    ],
    takeaway: '小范围推出大范围：小的是充分的，不是必要的。'
  },
  {
    id: 'dr-f-4', knowledge: ['k-logic'], type: 'fill', difficulty: 3, score: 5,
    stem: `若命题“$@exists x@in@mathbb{R}$，$x^2-2ax+a<0$”是假命题，则实数 $a$ 的取值范围是 ________ .`,
    answer: `$[0,1]$`, accept: ['0<=a<=1', '[0,1]', '0≤a≤1'],
    solution: [
      `特称命题为假，则其否定“$@forall x@in@mathbb{R}$，$x^2-2ax+a@ge0$”为真。`,
      `二次函数恒非负，需 $@Delta=4a^2-4a@le0$。`,
      `解得 $0@le a@le1$，即 $[0,1]$。`
    ],
    hints: [
      '存在性命题为假，等价于全称否定为真。'
    ],
    pitfalls: [
      '把“假”只当成 $@Delta<0$，漏掉 $@Delta=0$ 的情形。'
    ],
    takeaway: '恒成立问题用判别式，注意等号能否取到。'
  },
  {
    id: 'dr-f-5', knowledge: ['k-fn-prop'], type: 'single', difficulty: 2, score: 5,
    stem: `已知 $f(x)$ 是定义在 $@mathbb{R}$ 上的偶函数，且在 $[0,+@infty)$ 上单调递增，则`,
    options: [
      { k: 'A', t: `$f(1)<f(-2)<f(3)$` },
      { k: 'B', t: `$f(-2)<f(1)<f(3)$` },
      { k: 'C', t: `$f(3)<f(-2)<f(1)$` },
      { k: 'D', t: `$f(1)<f(3)<f(-2)$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `偶函数满足 $f(-2)=f(2)$。`,
      `因为 $f$ 在 $[0,+@infty)$ 上递增，且 $1<2<3$，`,
      `所以 $f(1)<f(2)<f(3)$，即 $f(1)<f(-2)<f(3)$。`
    ],
    hints: [
      '用偶函数把负自变量翻成正的。'
    ],
    pitfalls: [
      '直接按 $-2<1<3$ 比较函数值。'
    ],
    takeaway: '偶函数比较大小，先统一到非负区间再用单调性。'
  },
  {
    id: 'dr-f-6', knowledge: ['k-fn-prop'], type: 'fill', difficulty: 3, score: 5,
    stem: `已知函数 $f(x)=ax^2+bx+3a+b$ 是定义在 $[a-1,2a]$ 上的偶函数，则 $a+b=$ ________ .`,
    answer: `$@frac13$`, accept: ['1/3'],
    solution: [
      `偶函数的定义域关于原点对称：$(a-1)+2a=0$，得 $a=@frac13$。`,
      `由 $f(-x)=f(x)$ 得 $bx=-bx$ 对任意 $x$ 成立，故 $b=0$。`,
      `所以 $a+b=@frac13$。`
    ],
    hints: [
      '偶函数的第一关是定义域对称。'
    ],
    pitfalls: [
      '只令 $b=0$，忘记定义域必须关于原点对称。'
    ],
    takeaway: '判断奇偶性前，先检查定义域是否对称。'
  },
  {
    id: 'dr-f-7', knowledge: ['k-fn-elem'], type: 'single', difficulty: 2, score: 5,
    stem: `设 $a=@log_2 3$，$b=@log_3 2$，$c=@ln2$，则 $a,b,c$ 的大小关系为`,
    options: [
      { k: 'A', t: `$a>b>c$` },
      { k: 'B', t: `$a>c>b$` },
      { k: 'C', t: `$c>a>b$` },
      { k: 'D', t: `$b>c>a$` }
    ],
    answer: 'B', accept: [],
    solution: [
      `$a=@log_2 3>1$，而 $b=@log_3 2<1$，$c=@ln2<1$，故 $a$ 最大。`,
      `$@ln2@approx0.693$，$@log_3 2=@frac{@ln2}{@ln3}@approx0.631$，所以 $c>b$。`,
      `因此 $a>c>b$。`
    ],
    hints: [
      '先按与 $1$ 的大小分组，再比较两个小于 $1$ 的数。'
    ],
    pitfalls: [
      '想当然认为底小真小，误判 $b>c$。'
    ],
    takeaway: '对数比较大小，先找中间量 $1$，再换底或看图像。'
  },
  {
    id: 'dr-f-8', knowledge: ['k-fn-elem'], type: 'fill', difficulty: 2, score: 5,
    stem: `计算：$2^{@log_2 3+@log_4 9}=$ ________ .`,
    answer: `$9$`, accept: ['9'],
    solution: [
      `由换底关系 $@log_4 9=@log_{2^2}3^2=@log_2 3$。`,
      `指数为 $2@log_2 3=@log_2 9$。`,
      `所以 $2^{@log_2 9}=9$。`
    ],
    hints: [
      '先把不同底的对数统一成以 $2$ 为底。'
    ],
    pitfalls: [
      '把 $@log_4 9$ 误当成 $@log_2 9$ 或 $2@log_2 9$。'
    ],
    takeaway: '$@log_{a^m}b^n=@frac{n}{m}@log_a b$。'
  },
  {
    id: 'dr-f-9', knowledge: ['k-fn-zero'], type: 'single', difficulty: 3, score: 5,
    stem: `若函数 $f(x)=@ln x+x-a$ 在区间 $(1,e)$ 内有零点，则实数 $a$ 的取值范围是`,
    options: [
      { k: 'A', t: `$(1,1+e)$` },
      { k: 'B', t: `$(1,e)$` },
      { k: 'C', t: `$(0,1)$` },
      { k: 'D', t: `$(1+e,+@infty)$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$f'(x)=@frac1x+1>0$，所以 $f(x)$ 在 $(0,+@infty)$ 上单调递增。`,
      `在 $(1,e)$ 内有零点，只需 $f(1)<0$ 且 $f(e)>0$。`,
      `即 $1-a<0$ 且 $1+e-a>0$，解得 $1<a<1+e$。`
    ],
    hints: [
      '单调函数在开区间内有零点，只需两个端点函数值异号。'
    ],
    pitfalls: [
      '把 $f(e)>0$ 解成 $a>1+e$，不等号方向弄反。'
    ],
    takeaway: '零点存在定理加单调性，就能锁定唯一零点的参数范围。'
  },
  {
    id: 'dr-f-10', knowledge: ['k-fn-zero'], type: 'fill', difficulty: 4, score: 5,
    stem: `若函数 $f(x)=x^2-2ax+1$ 在区间 $(0,2)$ 内有两个不同的零点，则实数 $a$ 的取值范围是 ________ .`,
    answer: `$(1,@frac54)$`, accept: ['(1,5/4)', '1<a<5/4', '1<a<1.25'],
    solution: [
      `判别式 $@Delta=4a^2-4>0$，得 $a>1$ 或 $a<-1$。`,
      `对称轴 $x=a$ 需满足 $0<a<2$；又 $f(0)=1>0$，只需 $f(2)=5-4a>0$。`,
      `综合得 $1<a<@frac54$。`
    ],
    hints: [
      '根的分布看三件事：判别式、对称轴、端点函数值。'
    ],
    pitfalls: [
      '只写 $@Delta>0$，忽略两根都必须落在 $(0,2)$ 内。'
    ],
    takeaway: '二次函数根的分布，画抛物线一定看清轴和端点。'
  },
  {
    id: 'dr-f-11', knowledge: ['k-fn-model'], type: 'single', difficulty: 2, score: 5,
    stem: `将函数 $y=@log_2 x$ 图像上所有点的横坐标缩短为原来的 $@frac12$（纵坐标不变），再向右平移 $1$ 个单位，所得函数的解析式为`,
    options: [
      { k: 'A', t: `$y=@log_2(2x-2)$` },
      { k: 'B', t: `$y=@log_2(2x-1)$` },
      { k: 'C', t: `$y=@log_2(2x)-1$` },
      { k: 'D', t: `$y=@log_2@left(@frac x2-1@right)$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `横坐标缩短为原来的 $@frac12$，得 $y=@log_2(2x)$。`,
      `再向右平移 $1$ 个单位，把 $x$ 换成 $x-1$。`,
      `得 $y=@log_2(2(x-1))=@log_2(2x-2)$。`
    ],
    hints: [
      '平移是对自变量 $x$ 整体减 $1$。'
    ],
    pitfalls: [
      '把右移写成在函数值上减 $1$，得到 $y=@log_2(2x)-1$。'
    ],
    takeaway: '先伸缩后平移，平移量只作用在 $x$ 上。'
  },
  {
    id: 'dr-f-12', knowledge: ['k-fn-model'], type: 'fill', difficulty: 1, score: 5,
    stem: `已知函数 $y=a@cdot b^x$（$a>0$，$b>0$ 且 $b@ne1$）的图像经过点 $(0,3)$ 和 $(2,12)$，则当 $x=3$ 时 $y=$ ________ .`,
    answer: `$24$`, accept: ['24'],
    solution: [
      `代入 $(0,3)$ 得 $a=3$。`,
      `代入 $(2,12)$ 得 $3b^2=12$，即 $b=2$。`,
      `所以 $x=3$ 时 $y=3@cdot2^3=24$。`
    ],
    hints: [
      '先由 $x=0$ 定初值 $a$，再由 $x=2$ 定增长倍数。'
    ],
    pitfalls: [
      '解 $b^2=4$ 时把 $b=-2$ 也保留。'
    ],
    takeaway: '指数模型待定系数，先定初值再定倍数。'
  },
  {
    id: 'dr-f-13', knowledge: ['k-dv-monotone'], type: 'single', difficulty: 2, score: 5,
    stem: `函数 $f(x)=xe^x$ 的单调递减区间是`,
    options: [
      { k: 'A', t: `$(-@infty,-1)$` },
      { k: 'B', t: `$(-1,+@infty)$` },
      { k: 'C', t: `$(-@infty,1)$` },
      { k: 'D', t: `$(1,+@infty)$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$f'(x)=e^x+xe^x=e^x(x+1)$。`,
      `因为 $e^x>0$，所以 $f'(x)<0$ 等价于 $x<-1$。`,
      `故单调递减区间为 $(-@infty,-1)$。`
    ],
    hints: [
      '乘积求导后提取 $e^x$，它恒为正。'
    ],
    pitfalls: [
      '把 $e^x(x+1)$ 的符号误认为由 $e^x$ 决定。'
    ],
    takeaway: '含 $e^x$ 的导数，符号只看剩下的因式。'
  },
  {
    id: 'dr-f-14', knowledge: ['k-dv-monotone'], type: 'fill', difficulty: 3, score: 5,
    stem: `若函数 $f(x)=x^3-ax^2+1$ 在区间 $(1,+@infty)$ 上单调递增，则实数 $a$ 的取值范围是 ________ .`,
    answer: `$(-@infty,@frac32]$`, accept: ['a<=3/2', '(-∞,3/2]', 'a≤3/2'],
    solution: [
      `$f'(x)=3x^2-2ax=x(3x-2a)$。`,
      `当 $x>1$ 时 $x>0$，只需 $3x-2a@ge0$ 恒成立，即 $a@le@frac{3x}{2}$。`,
      `而 $@frac{3x}{2}>@frac32$，故 $a@le@frac32$。`
    ],
    hints: [
      '区间上单调递增，转化为导函数在区间上非负。'
    ],
    pitfalls: [
      '只检验 $x=1$ 处导数非负就得到 $a@le@frac32$，没有说明对一切 $x>1$ 成立。'
    ],
    takeaway: '“在某区间上单调”是导数的恒成立问题，不是单点检验。'
  },
  {
    id: 'dr-f-15', knowledge: ['k-dv-extreme'], type: 'single', difficulty: 2, score: 5,
    stem: `函数 $f(x)=xe^{-x}$ 的极大值为`,
    options: [
      { k: 'A', t: `$@frac1e$` },
      { k: 'B', t: `$e$` },
      { k: 'C', t: `$1$` },
      { k: 'D', t: `$0$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$f'(x)=e^{-x}-xe^{-x}=e^{-x}(1-x)$。`,
      `$x<1$ 时 $f'(x)>0$，$x>1$ 时 $f'(x)<0$，故 $x=1$ 为极大值点。`,
      `极大值为 $f(1)=@frac1e$。`
    ],
    hints: [
      '先求导找到 $x=1$ 这个变号点。'
    ],
    pitfalls: [
      '把极大值点 $x=1$ 当成极大值。'
    ],
    takeaway: '极值问的是函数值，不是自变量的取值。'
  },
  {
    id: 'dr-f-16', knowledge: ['k-dv-extreme'], type: 'fill', difficulty: 2, score: 5,
    stem: `函数 $f(x)=x^3-3x^2+a$ 的极大值与极小值之差为 ________ .`,
    answer: `$4$`, accept: ['4'],
    solution: [
      `$f'(x)=3x^2-6x=3x(x-2)$，极值点为 $x=0,2$。`,
      `极大值 $f(0)=a$，极小值 $f(2)=a-4$。`,
      `两者之差为 $a-(a-4)=4$。`
    ],
    hints: [
      '先求导定极值点，再作差。'
    ],
    pitfalls: [
      '用极小值减极大值，得到 $-4$。'
    ],
    takeaway: '三次函数的极值差与常数项 $a$ 无关。'
  },
  {
    id: 'dr-f-17', knowledge: ['k-dv-ineq'], type: 'single', difficulty: 2, score: 5,
    stem: `函数 $f(x)=x-@ln x$ 的最小值为`,
    options: [
      { k: 'A', t: `$1$` },
      { k: 'B', t: `$e$` },
      { k: 'C', t: `$@frac1e$` },
      { k: 'D', t: `$0$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `定义域为 $x>0$，$f'(x)=1-@frac1x=@frac{x-1}{x}$。`,
      `$0<x<1$ 时递减，$x>1$ 时递增。`,
      `故最小值为 $f(1)=1$。`
    ],
    hints: [
      '先写定义域，再求导找最小值点 $x=1$。'
    ],
    pitfalls: [
      '忽略定义域，把 $x=0$ 代入原函数。'
    ],
    takeaway: '$x-@ln x@ge1$ 是常用的切线不等式。'
  },
  {
    id: 'dr-f-18', knowledge: ['k-dv-ineq'], type: 'fill', difficulty: 3, score: 5,
    stem: `若不等式 $@ln x@le ax$ 对任意 $x>0$ 恒成立，则实数 $a$ 的最小值为 ________ .`,
    answer: `$@frac1e$`, accept: ['1/e'],
    solution: [
      `当 $x>0$ 时，分离参数得 $a@ge@frac{@ln x}{x}$。`,
      `令 $g(x)=@frac{@ln x}{x}$，$g'(x)=@frac{1-@ln x}{x^2}$，故 $g$ 在 $x=e$ 处取最大值 $@frac1e$。`,
      `所以 $a@ge@frac1e$，最小值为 $@frac1e$。`
    ],
    hints: [
      '分离参数，转化为求 $@frac{@ln x}{x}$ 的最大值。'
    ],
    pitfalls: [
      '把 $@frac{@ln x}{x}$ 的最大值求成 $e$。'
    ],
    takeaway: '恒成立先分离参数，再对单变量函数求最值。'
  },
  {
    id: 'dr-f-19', knowledge: ['k-dv-param'], type: 'single', difficulty: 3, score: 5,
    stem: `若函数 $f(x)=x^3-ax^2+3x$ 在 $@mathbb{R}$ 上单调递增，则实数 $a$ 的取值范围是`,
    options: [
      { k: 'A', t: `$[-3,3]$` },
      { k: 'B', t: `$(-3,3)$` },
      { k: 'C', t: `$(-@infty,3]$` },
      { k: 'D', t: `$[3,+@infty)$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$f'(x)=3x^2-2ax+3$，在 $@mathbb{R}$ 上单调递增需 $f'(x)@ge0$ 恒成立。`,
      `二次项系数为正，需 $@Delta=4a^2-36@le0$。`,
      `解得 $-3@le a@le3$。`
    ],
    hints: [
      '三次函数在 $@mathbb{R}$ 上单调增，导数是二次且恒非负。'
    ],
    pitfalls: [
      '只写 $@Delta<0$，丢掉 $a=@pm3$ 时导数仍非负的情形。'
    ],
    takeaway: '导数恒非负用 $@Delta@le0$，等号情形要单独想清楚。'
  },
  {
    id: 'dr-f-20', knowledge: ['k-dv-param'], type: 'fill', difficulty: 3, score: 5,
    stem: `若函数 $f(x)=x^3-3ax$ 在区间 $(0,1)$ 内有极值点，则实数 $a$ 的取值范围是 ________ .`,
    answer: `$(0,1)$`, accept: ['0<a<1', '(0,1)'],
    solution: [
      `$f'(x)=3x^2-3a=3(x^2-a)$。`,
      `极值点需 $x=@sqrt a$ 落在 $(0,1)$ 内。`,
      `故 $0<a<1$。`
    ],
    hints: [
      '极值点必须是导数为零且左右变号的点。'
    ],
    pitfalls: [
      '把 $a=1$ 也包含进去，此时极值点在端点 $x=1$ 处。'
    ],
    takeaway: '极值点在开区间内，参数范围也取开区间。'
  },
  {
    id: 'dr-f-21', knowledge: ['k-dv-zero'], type: 'single', difficulty: 3, score: 5,
    stem: `若函数 $f(x)=e^x-ax$ 有两个零点，则实数 $a$ 的取值范围是`,
    options: [
      { k: 'A', t: `$(e,+@infty)$` },
      { k: 'B', t: `$(0,e)$` },
      { k: 'C', t: `$(1,+@infty)$` },
      { k: 'D', t: `$(0,@frac1e)$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$x=0$ 不是零点，于是方程化为 $a=@frac{e^x}{x}$。`,
      `令 $g(x)=@frac{e^x}{x}$，$g$ 在 $x=1$ 处取最小值 $e$。`,
      `直线 $y=a$ 与 $g$ 的图像有两个交点需 $a>e$。`
    ],
    hints: [
      '分离参数，把零点个数转化成水平线与曲线的交点个数。'
    ],
    pitfalls: [
      '把相切时的 $a=e$ 也算成两个零点。'
    ],
    takeaway: '分离参数后，零点个数看水平线与曲线的最值关系。'
  },
  {
    id: 'dr-f-22', knowledge: ['k-dv-zero'], type: 'fill', difficulty: 3, score: 5,
    stem: `若函数 $f(x)=x^2-2@ln x-a$ 有两个零点，则实数 $a$ 的取值范围是 ________ .`,
    answer: `$(1,+@infty)$`, accept: ['a>1', '(1,+∞)'],
    solution: [
      `定义域 $x>0$，$f'(x)=2x-@frac2x=@frac{2(x^2-1)}{x}$。`,
      `$f$ 在 $(0,1)$ 上递减，在 $(1,+@infty)$ 上递增，最小值为 $f(1)=1-a$。`,
      `两端都趋于 $+@infty$，故有两个零点需 $1-a<0$，即 $a>1$。`
    ],
    hints: [
      '先看最小值，再确认定义域两端都趋于 $+@infty$。'
    ],
    pitfalls: [
      '只写最小值小于 $0$，没有检查两端的趋势。'
    ],
    takeaway: '零点个数由极值符号与两端趋势共同决定。'
  },
  {
    id: 'dr-f-23', knowledge: ['k-tr-identity'], type: 'single', difficulty: 2, score: 5,
    stem: `已知 $@sin@alpha+@cos@alpha=@frac12$，则 $@sin2@alpha=$`,
    options: [
      { k: 'A', t: `$-@frac34$` },
      { k: 'B', t: `$@frac34$` },
      { k: 'C', t: `$-@frac{7}{16}$` },
      { k: 'D', t: `$@frac{7}{16}$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `两边平方得 $@sin^2@alpha+@cos^2@alpha+2@sin@alpha@cos@alpha=@frac14$。`,
      `即 $1+@sin2@alpha=@frac14$。`,
      `所以 $@sin2@alpha=-@frac34$。`
    ],
    hints: [
      '两边平方，中间项正好是 $@sin2@alpha$。'
    ],
    pitfalls: [
      '平方后忘记左边还有 $@sin^2+@cos^2=1$。'
    ],
    takeaway: '$@sin@alpha@pm@cos@alpha$ 与 $@sin2@alpha$ 通过平方互化。'
  },
  {
    id: 'dr-f-24', knowledge: ['k-tr-identity'], type: 'fill', difficulty: 2, score: 5,
    stem: `已知 $@tan@alpha=2$，则 $@cos2@alpha=$ ________ .`,
    answer: `$-@frac35$`, accept: ['-3/5'],
    solution: [
      `由万能公式 $@cos2@alpha=@frac{1-@tan^2@alpha}{1+@tan^2@alpha}$。`,
      `代入得 $@frac{1-4}{1+4}=-@frac35$。`
    ],
    hints: [
      '把 $@cos2@alpha$ 化成只含 $@tan@alpha$ 的齐次式。'
    ],
    pitfalls: [
      '公式记成 $@frac{@tan^2@alpha-1}{1+@tan^2@alpha}$，符号出错。'
    ],
    takeaway: '已知正切求二倍角，直接用万能公式最快。'
  },
  {
    id: 'dr-f-25', knowledge: ['k-tr-graph'], type: 'single', difficulty: 3, score: 5,
    stem: `函数 $y=2@sin@left(2x-@frac{@pi}{6}@right)$ 的对称中心为`,
    options: [
      { k: 'A', t: `$@left(@frac{@pi}{12}+@frac{k@pi}{2},0@right)$` },
      { k: 'B', t: `$@left(@frac{@pi}{6}+@frac{k@pi}{2},0@right)$` },
      { k: 'C', t: `$@left(@frac{@pi}{12}+k@pi,0@right)$` },
      { k: 'D', t: `$@left(@frac{@pi}{6}+k@pi,0@right)$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `正弦函数的对称中心在零点处，令 $2x-@frac{@pi}{6}=k@pi$。`,
      `解得 $x=@frac{@pi}{12}+@frac{k@pi}{2}$。`,
      `纵坐标为 $0$，故对称中心是 $@left(@frac{@pi}{12}+@frac{k@pi}{2},0@right)$。`
    ],
    hints: [
      '对称中心的相位满足 $=k@pi$。'
    ],
    pitfalls: [
      '把对称中心与对称轴的相位 $@frac{@pi}{2}+k@pi$ 弄混。'
    ],
    takeaway: '对称中心令相位 $=k@pi$，对称轴令相位 $=@frac{@pi}{2}+k@pi$。'
  },
  {
    id: 'dr-f-26', knowledge: ['k-tr-graph'], type: 'fill', difficulty: 3, score: 5,
    stem: `将函数 $y=@sin2x$ 的图像向右平移 $@frac{@pi}{6}$ 个单位，所得函数在 $@left[0,@frac{@pi}{2}@right]$ 上的最小值为 ________ .`,
    answer: `$-@frac{@sqrt3}{2}$`, accept: ['-sqrt3/2', '-√3/2'],
    solution: [
      `平移后解析式为 $y=@sin@left(2x-@frac{@pi}{3}@right)$。`,
      `当 $x@in@left[0,@frac{@pi}{2}@right]$ 时，$2x-@frac{@pi}{3}@in@left[-@frac{@pi}{3},@frac{2@pi}{3}@right]$。`,
      `最小值在左端点取得：$@sin@left(-@frac{@pi}{3}@right)=-@frac{@sqrt3}{2}$。`
    ],
    hints: [
      '先写解析式，再整体求出相位的范围。'
    ],
    pitfalls: [
      '直接取 $@sin$ 的最小值 $-1$，忽略相位到不了 $-@frac{@pi}{2}$。'
    ],
    takeaway: '三角函数区间最值，先算整体相位范围再取值。'
  },
  {
    id: 'dr-f-27', knowledge: ['k-tr-solve'], type: 'single', difficulty: 2, score: 5,
    stem: `在 $@triangle ABC$ 中，$a=3$，$b=5$，$c=7$，则最大角为`,
    options: [
      { k: 'A', t: `$60^@circ$` },
      { k: 'B', t: `$90^@circ$` },
      { k: 'C', t: `$120^@circ$` },
      { k: 'D', t: `$150^@circ$` }
    ],
    answer: 'C', accept: [],
    solution: [
      `大边对大角，最大边 $c=7$ 所对的角 $C$ 最大。`,
      `由余弦定理 $@cos C=@frac{3^2+5^2-7^2}{2@times3@times5}=@frac{-15}{30}=-@frac12$。`,
      `所以 $C=120^@circ$。`
    ],
    hints: [
      '先锁定最大边所对的角。'
    ],
    pitfalls: [
      '余弦定理分子符号算错，得到 $60^@circ$。'
    ],
    takeaway: '已知三边求角，余弦定理的符号直接决定钝角还是锐角。'
  },
  {
    id: 'dr-f-28', knowledge: ['k-tr-solve'], type: 'fill', difficulty: 2, score: 5,
    stem: `在 $@triangle ABC$ 中，$b=1$，$c=2$，$A=120^@circ$，则 $a=$ ________ .`,
    answer: `$@sqrt7$`, accept: ['sqrt7', '√7'],
    solution: [
      `由余弦定理 $a^2=b^2+c^2-2bc@cos A$。`,
      `代入得 $a^2=1+4-2@times1@times2@times@left(-@frac12@right)=7$。`,
      `所以 $a=@sqrt7$。`
    ],
    hints: [
      '两边夹一角，直接套余弦定理。'
    ],
    pitfalls: [
      '把 $@cos120^@circ$ 写成 $@frac12$，得 $a=@sqrt3$。'
    ],
    takeaway: '钝角余弦为负，代入时注意符号。'
  },
  {
    id: 'dr-f-29', knowledge: ['k-tr-maxmin'], type: 'single', difficulty: 3, score: 5,
    stem: `函数 $y=@sin x+@sin@left(x+@frac{@pi}{3}@right)$ 的最大值为`,
    options: [
      { k: 'A', t: `$1$` },
      { k: 'B', t: `$@sqrt2$` },
      { k: 'C', t: `$@sqrt3$` },
      { k: 'D', t: `$2$` }
    ],
    answer: 'C', accept: [],
    solution: [
      `展开合并：$y=@sin x+@frac12@sin x+@frac{@sqrt3}{2}@cos x=@frac32@sin x+@frac{@sqrt3}{2}@cos x$。`,
      `振幅为 $@sqrt{@left(@frac32@right)^2+@left(@frac{@sqrt3}{2}@right)^2}=@sqrt3$。`,
      `故最大值为 $@sqrt3$。`
    ],
    hints: [
      '先用和角公式展开，再合并同名函数。'
    ],
    pitfalls: [
      '把两个 $@sin$ 的最大值直接相加，误得 $2$。'
    ],
    takeaway: '化成 $A@sin(@omega x+@varphi)$ 后，最值看振幅。'
  },
  {
    id: 'dr-f-30', knowledge: ['k-tr-maxmin'], type: 'fill', difficulty: 3, score: 5,
    stem: `函数 $y=@cos^2 x+2@sin x$ 的最大值为 ________ .`,
    answer: `$2$`, accept: ['2'],
    solution: [
      `令 $t=@sin x@in[-1,1]$，则 $y=1-t^2+2t=-(t-1)^2+2$。`,
      `当 $t=1$ 时取得最大值 $2$。`
    ],
    hints: [
      '用 $@cos^2x=1-@sin^2x$ 换成单变量。'
    ],
    pitfalls: [
      '换元后不写 $t@in[-1,1]$，把顶点位置判断错。'
    ],
    takeaway: '三角换元必须标出新变量的取值范围。'
  },
  {
    id: 'dr-f-31', knowledge: ['k-so-solid'], type: 'single', difficulty: 2, score: 5,
    stem: `正三棱锥的底面边长为 $2$，高为 $@sqrt3$，则该正三棱锥的体积为`,
    options: [
      { k: 'A', t: `$1$` },
      { k: 'B', t: `$@sqrt3$` },
      { k: 'C', t: `$2$` },
      { k: 'D', t: `$3$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `底面正三角形面积 $S=@frac{@sqrt3}{4}@times2^2=@sqrt3$。`,
      `由锥体体积公式 $V=@frac13Sh=@frac13@times@sqrt3@times@sqrt3=1$。`
    ],
    hints: [
      '先算正三角形面积，再用锥体体积公式。'
    ],
    pitfalls: [
      '忘记乘 $@frac13$，得到 $3$。'
    ],
    takeaway: '锥体体积是同底等高柱体的三分之一。'
  },
  {
    id: 'dr-f-32', knowledge: ['k-so-solid'], type: 'fill', difficulty: 3, score: 5,
    stem: `已知圆台的上、下底面半径分别为 $1$ 和 $2$，高为 $3$，则该圆台的体积为 ________ .`,
    answer: `$7@pi$`, accept: ['7π', '7pi'],
    solution: [
      `圆台体积 $V=@frac{@pi h}{3}(R^2+Rr+r^2)$。`,
      `代入得 $V=@frac{@pi@times3}{3}(4+2+1)=7@pi$。`
    ],
    hints: [
      '圆台体积公式中三个平方项相加。'
    ],
    pitfalls: [
      '漏掉中间项 $Rr$，算成 $5@pi$。'
    ],
    takeaway: '圆台公式 $(R^2+Rr+r^2)$ 不能少中间项。'
  },
  {
    id: 'dr-f-33', knowledge: ['k-so-parallel'], type: 'single', difficulty: 2, score: 5,
    stem: `设 $m,n$ 是两条不同的直线，$@alpha$ 是一个平面，且 $m@parallel@alpha$，$n@subset@alpha$，则 $m$ 与 $n$ 的位置关系是`,
    options: [
      { k: 'A', t: `平行` },
      { k: 'B', t: `异面` },
      { k: 'C', t: `平行或异面` },
      { k: 'D', t: `相交` }
    ],
    answer: 'C', accept: [],
    solution: [
      `$m@parallel@alpha$ 说明 $m$ 与平面 $@alpha$ 没有公共点。`,
      `$n@subset@alpha$，所以 $m$ 与 $n$ 也没有公共点，不可能相交。`,
      `没有公共点的两条直线平行或异面。`
    ],
    hints: [
      '线面平行意味着直线与平面无公共点。'
    ],
    pitfalls: [
      '由线面平行直接断定线线平行。'
    ],
    takeaway: '线面平行只能推出线线平行或异面，不能直接升级为平行。'
  },
  {
    id: 'dr-f-34', knowledge: ['k-so-parallel'], type: 'fill', difficulty: 1, score: 5,
    stem: `在棱长为 $1$ 的正方体 $ABCD-A_1B_1C_1D_1$ 中，与直线 $AB$ 平行的棱共有 ________ 条。`,
    answer: `$3$`, accept: ['3'],
    solution: [
      `与 $AB$ 同方向的棱还有 $CD$、$A_1B_1$、$C_1D_1$。`,
      `除去 $AB$ 自身，共 $3$ 条。`
    ],
    hints: [
      '按方向数：同一组平行棱共 $4$ 条。'
    ],
    pitfalls: [
      '把 $AB$ 自身也数进去，得到 $4$。'
    ],
    takeaway: '正方体每组平行棱有 $4$ 条，与指定棱平行的有 $3$ 条。'
  },
  {
    id: 'dr-f-35', knowledge: ['k-so-angle'], type: 'single', difficulty: 3, score: 5,
    stem: `在棱长为 $1$ 的正方体 $ABCD-A_1B_1C_1D_1$ 中，异面直线 $A_1C_1$ 与 $BD_1$ 所成角为`,
    options: [
      { k: 'A', t: `$30^@circ$` },
      { k: 'B', t: `$45^@circ$` },
      { k: 'C', t: `$60^@circ$` },
      { k: 'D', t: `$90^@circ$` }
    ],
    answer: 'D', accept: [],
    solution: [
      `在正方体中 $A_1C_1@perp B_1D_1$，且 $A_1C_1@perp BB_1$。`,
      `所以 $A_1C_1@perp$ 平面 $BB_1D_1D$，而 $BD_1$ 在该平面内。`,
      `故 $A_1C_1@perp BD_1$，所成角为 $90^@circ$。`
    ],
    hints: [
      '想办法证明一条线垂直于另一条线所在的平面。'
    ],
    pitfalls: [
      '把 $A_1C_1$ 与 $BD_1$ 当成共面直线去算。'
    ],
    takeaway: '异面直线证垂直，常用线面垂直转化。'
  },
  {
    id: 'dr-f-36', knowledge: ['k-so-angle'], type: 'fill', difficulty: 3, score: 5,
    stem: `在长方体 $ABCD-A_1B_1C_1D_1$ 中，$AB=2$，$AD=1$，$AA_1=2$，则直线 $AC_1$ 与平面 $ABCD$ 所成角的正切值为 ________ .`,
    answer: `$@frac{2@sqrt5}{5}$`, accept: ['2sqrt5/5', '2√5/5'],
    solution: [
      `$C_1$ 在底面的射影为 $C$，故射影为 $AC$。`,
      `$AC=@sqrt{2^2+1^2}=@sqrt5$，竖直高度 $CC_1=2$。`,
      `$@tan@theta=@frac{2}{@sqrt5}=@frac{2@sqrt5}{5}$。`
    ],
    hints: [
      '线面角的正切等于竖直高度比射影长度。'
    ],
    pitfalls: [
      '把 $AC_1$ 的长度当成射影长度。'
    ],
    takeaway: '线面角先找射影，正切看“高比射影”。'
  },
  {
    id: 'dr-f-37', knowledge: ['k-so-sphere'], type: 'single', difficulty: 2, score: 5,
    stem: `棱长为 $2$ 的正方体的外接球的体积为`,
    options: [
      { k: 'A', t: `$4@sqrt3@pi$` },
      { k: 'B', t: `$12@pi$` },
      { k: 'C', t: `$8@sqrt3@pi$` },
      { k: 'D', t: `$4@pi$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `外接球直径等于体对角线 $2@sqrt3$，故 $R=@sqrt3$。`,
      `$V=@frac43@pi R^3=@frac43@pi@times3@sqrt3=4@sqrt3@pi$。`
    ],
    hints: [
      '正方体外接球直径就是体对角线。'
    ],
    pitfalls: [
      '把棱长当成半径，得到 $@frac{32@pi}{3}$。'
    ],
    takeaway: '正方体外接球半径 $R=@frac{@sqrt3}{2}a$。'
  },
  {
    id: 'dr-f-38', knowledge: ['k-so-sphere'], type: 'fill', difficulty: 4, score: 5,
    stem: `棱长为 $2$ 的正四面体的内切球半径为 ________ .`,
    answer: `$@frac{@sqrt6}{6}$`, accept: ['sqrt6/6', '√6/6'],
    solution: [
      `正四面体的高 $h=@frac{@sqrt6}{3}@times2=@frac{2@sqrt6}{3}$。`,
      `内切球半径 $r=@frac h4=@frac{@sqrt6}{6}$。`
    ],
    hints: [
      '正四面体内切球半径是高的四分之一。'
    ],
    pitfalls: [
      '误用外接球半径 $@frac34h$。'
    ],
    takeaway: '正四面体 $r=@frac h4$，$R=@frac{3h}{4}$。'
  },
  {
    id: 'dr-f-39', knowledge: ['k-seq-basic'], type: 'single', difficulty: 2, score: 5,
    stem: `已知等差数列 $@left@{a_n@right@}$ 中，$a_3+a_7=10$，则其前 $9$ 项和 $S_9=$`,
    options: [
      { k: 'A', t: `$30$` },
      { k: 'B', t: `$45$` },
      { k: 'C', t: `$50$` },
      { k: 'D', t: `$90$` }
    ],
    answer: 'B', accept: [],
    solution: [
      `由下标和相等，$a_1+a_9=a_3+a_7=10$。`,
      `$S_9=@frac{9(a_1+a_9)}{2}=@frac{9@times10}{2}=45$。`
    ],
    hints: [
      '$3+7=1+9$，用等差中项性质整体替换。'
    ],
    pitfalls: [
      '把 $S_9$ 写成 $9(a_3+a_7)$，多乘了 $2$。'
    ],
    takeaway: '等差求和优先凑 $a_1+a_n$ 的整体。'
  },
  {
    id: 'dr-f-40', knowledge: ['k-seq-basic'], type: 'fill', difficulty: 2, score: 5,
    stem: `已知等比数列 $@left@{a_n@right@}$ 中，$a_2a_6=16$，$a_3=2$，则 $a_5=$ ________ .`,
    answer: `$8$`, accept: ['8'],
    solution: [
      `等比数列中下标和相等则积相等：$a_2a_6=a_3a_5$。`,
      `所以 $16=2a_5$，得 $a_5=8$。`
    ],
    hints: [
      '利用 $2+6=3+5$ 的项积性质。'
    ],
    pitfalls: [
      '把 $a_2a_6$ 写成 $a_4^2$，与 $a_3$ 联系不上。'
    ],
    takeaway: '等比数列下标和相等，则对应项之积相等。'
  },
  {
    id: 'dr-f-41', knowledge: ['k-seq-sum'], type: 'single', difficulty: 3, score: 5,
    stem: `已知数列 $@left@{a_n@right@}$ 的通项 $a_n=n+2^n$，则其前 $n$ 项和 $S_n=$`,
    options: [
      { k: 'A', t: `$@frac{n(n+1)}{2}+2^{n+1}-2$` },
      { k: 'B', t: `$@frac{n(n+1)}{2}+2^n-2$` },
      { k: 'C', t: `$@frac{n(n+1)}{2}+2^{n+1}-1$` },
      { k: 'D', t: `$n(n+1)+2^{n+1}-2$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `分组求和：$S_n=(1+2+@cdots+n)+(2+2^2+@cdots+2^n)$。`,
      `前一组为 $@frac{n(n+1)}{2}$，后一组为 $2^{n+1}-2$。`,
      `故 $S_n=@frac{n(n+1)}{2}+2^{n+1}-2$。`
    ],
    hints: [
      '一个等差加一个等比，拆成两组分别求和。'
    ],
    pitfalls: [
      '等比部分项数数成 $n-1$，写成 $2^n-2$。'
    ],
    takeaway: '分组求和：等差、等比各用各的公式。'
  },
  {
    id: 'dr-f-42', knowledge: ['k-seq-sum'], type: 'fill', difficulty: 3, score: 5,
    stem: `数列 $@left@{(-1)^n(2n-1)@right@}$ 的前 $10$ 项和为 ________ .`,
    answer: `$10$`, accept: ['10'],
    solution: [
      `相邻两项配对：$(-1+3)+(-5+7)+@cdots+(-17+19)$。`,
      `每组和为 $2$，共 $5$ 组。`,
      `所以前 $10$ 项和为 $2@times5=10$。`
    ],
    hints: [
      '正负交替，两项一组看规律。'
    ],
    pitfalls: [
      '逐项硬加，符号出错。'
    ],
    takeaway: '交错数列先配对，再数一共有几组。'
  },
  {
    id: 'dr-f-43', knowledge: ['k-seq-recursion'], type: 'single', difficulty: 2, score: 5,
    stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_1=1$，$a_{n+1}=a_n+2^n$，则 $a_5=$`,
    options: [
      { k: 'A', t: `$15$` },
      { k: 'B', t: `$16$` },
      { k: 'C', t: `$31$` },
      { k: 'D', t: `$13$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `用累加法：$a_5=a_1+2^1+2^2+2^3+2^4$。`,
      `$=1+(2+4+8+16)=15$。`
    ],
    hints: [
      '递推形如“差为等比”，用累加法。'
    ],
    pitfalls: [
      '把 $2^1+@cdots+2^4$ 当成 $2^5-1=31$。'
    ],
    takeaway: '$a_{n+1}-a_n=f(n)$ 用累加，注意项数与首项。'
  },
  {
    id: 'dr-f-44', knowledge: ['k-seq-recursion'], type: 'fill', difficulty: 2, score: 5,
    stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_1=3$，$a_{n+1}=2a_n-1$，则 $a_4=$ ________ .`,
    answer: `$17$`, accept: ['17'],
    solution: [
      `逐项计算：$a_2=2@times3-1=5$。`,
      `$a_3=2@times5-1=9$，$a_4=2@times9-1=17$。`
    ],
    hints: [
      '项数不多，直接逐项递推。'
    ],
    pitfalls: [
      '忘记减 $1$，把 $a_4$ 算成 $24$。'
    ],
    takeaway: '$a_{n+1}=pa_n+q$ 可化为等比，也可先逐项算。'
  },
  {
    id: 'dr-f-45', knowledge: ['k-seq-ineq'], type: 'single', difficulty: 3, score: 5,
    stem: `已知数列 $@left@{a_n@right@}$ 的通项 $a_n=2^n-1$，其前 $n$ 项和为 $S_n$。若 $S_n>1000$，则 $n$ 的最小值为`,
    options: [
      { k: 'A', t: `$8$` },
      { k: 'B', t: `$9$` },
      { k: 'C', t: `$10$` },
      { k: 'D', t: `$11$` }
    ],
    answer: 'B', accept: [],
    solution: [
      `$S_n=(2+2^2+@cdots+2^n)-n=2^{n+1}-2-n$。`,
      `$S_8=512-2-8=502$，$S_9=1024-2-9=1013$。`,
      `故 $n$ 的最小值为 $9$。`
    ],
    hints: [
      '先写出 $S_n$ 的闭式，再代入临界值试算。'
    ],
    pitfalls: [
      '由 $2^n>1000$ 直接得 $n=10$，忽略减去的 $n$。'
    ],
    takeaway: '指数型求和后试值找临界，别跳步。'
  },
  {
    id: 'dr-f-46', knowledge: ['k-seq-ineq'], type: 'fill', difficulty: 3, score: 5,
    stem: `数列 $@left@{a_n@right@}$ 的通项 $a_n=@frac{1}{n(n+2)}$，则其前 $5$ 项和 $S_5=$ ________ .`,
    answer: `$@frac{25}{42}$`, accept: ['25/42'],
    solution: [
      `裂项：$@frac{1}{n(n+2)}=@frac12@left(@frac1n-@frac{1}{n+2}@right)$。`,
      `$S_5=@frac12@left(1+@frac12-@frac16-@frac17@right)=@frac12@times@frac{25}{21}=@frac{25}{42}$。`
    ],
    hints: [
      '裂项后只剩首尾各两项，别忘了系数 $@frac12$。'
    ],
    pitfalls: [
      '漏写裂项系数 $@frac12$，得到 $@frac{25}{21}$。'
    ],
    takeaway: '$@frac{1}{n(n+k)}$ 的裂项系数是 $@frac1k$。'
  },
  {
    id: 'dr-f-47', knowledge: ['k-vec-linear'], type: 'single', difficulty: 2, score: 5,
    stem: `在平行四边形 $ABCD$ 中，$E$ 为 $AB$ 的中点，$F$ 为 $CD$ 的中点，则 $@vec{EF}=$`,
    options: [
      { k: 'A', t: `$@vec{AB}$` },
      { k: 'B', t: `$@vec{AD}$` },
      { k: 'C', t: `$@vec{AC}$` },
      { k: 'D', t: `$@vec{BD}$` }
    ],
    answer: 'B', accept: [],
    solution: [
      `取基底 $@vec{AB}=@vec u$，$@vec{AD}=@vec v$，则 $E$ 对应 $@frac12@vec u$。`,
      `$C$ 对应 $@vec u+@vec v$，$D$ 对应 $@vec v$，故 $F$ 对应 $@frac12@vec u+@vec v$。`,
      `所以 $@vec{EF}=@vec v=@vec{AD}$。`
    ],
    hints: [
      '选 $@vec{AB}$、$@vec{AD}$ 作基底，把各点位置写出来。'
    ],
    pitfalls: [
      '把 $F$ 的位置写成 $@vec u+@frac12@vec v$。'
    ],
    takeaway: '平行四边形对边中点连线平行且等于另一组对边。'
  },
  {
    id: 'dr-f-48', knowledge: ['k-vec-linear'], type: 'fill', difficulty: 2, score: 5,
    stem: `设 $G$ 为 $@triangle ABC$ 的重心，若 $@vec{AG}=x@vec{AB}+y@vec{AC}$，则 $xy=$ ________ .`,
    answer: `$@frac19$`, accept: ['1/9'],
    solution: [
      `重心性质：$@vec{AG}=@frac13@left(@vec{AB}+@vec{AC}@right)$。`,
      `故 $x=y=@frac13$，$xy=@frac19$。`
    ],
    hints: [
      '重心把中线分成 $2:1$。'
    ],
    pitfalls: [
      '把系数记成 $@frac12$，得到 $@frac14$。'
    ],
    takeaway: '重心向量 $@vec{AG}=@frac13(@vec{AB}+@vec{AC})$。'
  },
  {
    id: 'dr-f-49', knowledge: ['k-vec-dot'], type: 'single', difficulty: 2, score: 5,
    stem: `已知 $|@vec a|=1$，$|@vec b|=2$，$@vec a$ 与 $@vec b$ 的夹角为 $120^@circ$，则 $(@vec a+@vec b)@cdot@vec a=$`,
    options: [
      { k: 'A', t: `$0$` },
      { k: 'B', t: `$1$` },
      { k: 'C', t: `$-1$` },
      { k: 'D', t: `$2$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$(@vec a+@vec b)@cdot@vec a=|@vec a|^2+@vec a@cdot@vec b$。`,
      `$=1+1@times2@times@cos120^@circ=1-1=0$。`
    ],
    hints: [
      '展开后只剩 $|@vec a|^2$ 与 $@vec a@cdot@vec b$。'
    ],
    pitfalls: [
      '把 $@cos120^@circ$ 写成 $@frac12$，得到 $2$。'
    ],
    takeaway: '数量积展开后，夹角余弦的符号不能丢。'
  },
  {
    id: 'dr-f-50', knowledge: ['k-vec-dot'], type: 'fill', difficulty: 2, score: 5,
    stem: `已知 $|@vec a|=|@vec b|=1$，$|@vec a+@vec b|=@sqrt3$，则 $@vec a$ 与 $@vec b$ 的夹角为 ________ .`,
    answer: `$@frac{@pi}{3}$`, accept: ['π/3', 'pi/3'],
    solution: [
      `两边平方：$3=1+1+2@vec a@cdot@vec b$，得 $@vec a@cdot@vec b=@frac12$。`,
      `又 $@vec a@cdot@vec b=@cos@theta$，所以 $@cos@theta=@frac12$。`,
      `故夹角 $@theta=@frac{@pi}{3}$。`
    ],
    hints: [
      '遇到模的关系，先平方化为数量积。'
    ],
    pitfalls: [
      '平方后漏掉交叉项 $2@vec a@cdot@vec b$。'
    ],
    takeaway: '模与数量积互化，平方是最通用的手段。'
  },
  {
    id: 'dr-f-51', knowledge: ['k-vec-coord'], type: 'single', difficulty: 3, score: 5,
    stem: `已知 $@vec a=(1,2)$，$@vec b=(-1,3)$，则 $@vec a$ 在 $@vec b$ 上的投影向量为`,
    options: [
      { k: 'A', t: `$@left(-@frac12,@frac32@right)$` },
      { k: 'B', t: `$@left(@frac12,-@frac32@right)$` },
      { k: 'C', t: `$(-1,3)$` },
      { k: 'D', t: `$(1,2)$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$@vec a@cdot@vec b=-1+6=5$，$|@vec b|^2=1+9=10$。`,
      `投影向量为 $@frac{@vec a@cdot@vec b}{|@vec b|^2}@vec b=@frac{5}{10}(-1,3)$。`,
      `即 $@left(-@frac12,@frac32@right)$。`
    ],
    hints: [
      '投影向量要乘上 $@vec b$ 的方向，而不只是算一个数。'
    ],
    pitfalls: [
      '只算出投影数量 $@frac{5}{@sqrt{10}}$，忘了乘方向。'
    ],
    takeaway: '投影向量 $=@frac{@vec a@cdot@vec b}{|@vec b|^2}@vec b$。'
  },
  {
    id: 'dr-f-52', knowledge: ['k-vec-coord'], type: 'fill', difficulty: 2, score: 5,
    stem: `已知 $@vec a=(2,1)$，$@vec b=(1,-1)$，若 $(@vec a+@lambda@vec b)@perp@vec b$，则 $@lambda=$ ________ .`,
    answer: `$-@frac12$`, accept: ['-1/2'],
    solution: [
      `垂直等价于数量积为 $0$：$(@vec a+@lambda@vec b)@cdot@vec b=0$。`,
      `即 $@vec a@cdot@vec b+@lambda|@vec b|^2=1+2@lambda=0$。`,
      `解得 $@lambda=-@frac12$。`
    ],
    hints: [
      '把垂直条件写成数量积为零。'
    ],
    pitfalls: [
      '把 $|@vec b|^2$ 算成 $(1-1)^2=0$。'
    ],
    takeaway: '坐标下 $|@vec b|^2=x^2+y^2$，不是 $(x+y)^2$。'
  },
  {
    id: 'dr-f-53', knowledge: ['k-cx-basic'], type: 'single', difficulty: 2, score: 5,
    stem: `已知 $i$ 为虚数单位，则复数 $z=@frac{1+2i}{2-i}=$`,
    options: [
      { k: 'A', t: `$i$` },
      { k: 'B', t: `$-i$` },
      { k: 'C', t: `$1$` },
      { k: 'D', t: `$1+i$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `分子分母同乘 $2+i$：$z=@frac{(1+2i)(2+i)}{(2-i)(2+i)}$。`,
      `分子 $=2+i+4i+2i^2=5i$，分母 $=4+1=5$。`,
      `所以 $z=i$。`
    ],
    hints: [
      '分母实数化，乘的是分母的共轭 $2+i$。'
    ],
    pitfalls: [
      '乘错成 $2-i$，相当于没有有理化。'
    ],
    takeaway: '复数除法先乘分母共轭，分母变为 $c^2+d^2$。'
  },
  {
    id: 'dr-f-54', knowledge: ['k-cx-basic'], type: 'fill', difficulty: 1, score: 5,
    stem: `已知 $i$ 为虚数单位，则 $i^{2026}=$ ________ .`,
    answer: `$-1$`, accept: ['-1'],
    solution: [
      `$2026=4@times506+2$。`,
      `$i^{2026}=i^2=-1$。`
    ],
    hints: [
      '$i$ 的幂以 $4$ 为周期。'
    ],
    pitfalls: [
      '余数算错，把 $2026$ 当成 $4$ 的倍数。'
    ],
    takeaway: '$i^n$ 只看 $n$ 除以 $4$ 的余数：$0,1,2,3$ 对应 $1,i,-1,-i$。'
  },
  {
    id: 'dr-f-55', knowledge: ['k-cx-geo'], type: 'single', difficulty: 2, score: 5,
    stem: `已知复数 $z$ 满足 $|z-3-4i|=2$，则 $|z|$ 的最大值为`,
    options: [
      { k: 'A', t: `$3$` },
      { k: 'B', t: `$5$` },
      { k: 'C', t: `$7$` },
      { k: 'D', t: `$10$` }
    ],
    answer: 'C', accept: [],
    solution: [
      `$z$ 对应以 $(3,4)$ 为圆心、$2$ 为半径的圆。`,
      `$|z|$ 是圆上的点到原点的距离，圆心到原点距离为 $5$。`,
      `最大值 $=5+2=7$。`
    ],
    hints: [
      '把 $|z-z_0|$ 看成点到圆心的距离。'
    ],
    pitfalls: [
      '只算圆心到原点的距离 $5$，忘记加半径。'
    ],
    takeaway: '圆上点到定点距离的最值 $=$ 圆心距 $@pm$ 半径。'
  },
  {
    id: 'dr-f-56', knowledge: ['k-cx-geo'], type: 'fill', difficulty: 3, score: 5,
    stem: `已知复数 $z$ 满足 $|z-2i|=|z|$，则复数 $z$ 在复平面内对应点的轨迹方程为 ________ .`,
    answer: `$y=1$`, accept: ['y=1'],
    solution: [
      `设 $z=x+yi$，则 $|z-2i|^2=x^2+(y-2)^2$，$|z|^2=x^2+y^2$。`,
      `由 $x^2+(y-2)^2=x^2+y^2$ 得 $-4y+4=0$。`,
      `即轨迹为直线 $y=1$。`
    ],
    hints: [
      '两边都是距离，平方去根号。'
    ],
    pitfalls: [
      '以为轨迹是圆，没有发现 $x^2$ 抵消。'
    ],
    takeaway: '到两点距离相等，轨迹是这两点连线的中垂线。'
  },
  {
    id: 'dr-f-57', knowledge: ['k-ag-line'], type: 'single', difficulty: 2, score: 5,
    stem: `过点 $P(2,3)$ 作圆 $x^2+y^2=4$ 的切线，切点为 $T$，则 $|PT|=$`,
    options: [
      { k: 'A', t: `$3$` },
      { k: 'B', t: `$@sqrt{13}$` },
      { k: 'C', t: `$@sqrt5$` },
      { k: 'D', t: `$2$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `圆心为原点，$|OP|=@sqrt{2^2+3^2}=@sqrt{13}$，半径 $r=2$。`,
      `由勾股定理 $|PT|^2=|OP|^2-r^2=13-4=9$。`,
      `所以 $|PT|=3$。`
    ],
    hints: [
      '切线长用勾股定理：$PT^2=OP^2-r^2$。'
    ],
    pitfalls: [
      '把 $|OP|$ 当成切线长。'
    ],
    takeaway: '切线长平方 $=$ 点与圆心距离平方 $-r^2$。'
  },
  {
    id: 'dr-f-58', knowledge: ['k-ag-line'], type: 'fill', difficulty: 3, score: 5,
    stem: `直线 $3x+4y-5=0$ 被圆 $x^2+y^2=4$ 截得的弦长为 ________ .`,
    answer: `$2@sqrt3$`, accept: ['2sqrt3', '2√3'],
    solution: [
      `圆心到直线的距离 $d=@frac{|-5|}{@sqrt{3^2+4^2}}=1$。`,
      `由垂径定理，半弦长 $=@sqrt{r^2-d^2}=@sqrt{4-1}=@sqrt3$。`,
      `弦长为 $2@sqrt3$。`
    ],
    hints: [
      '半弦、弦心距、半径构成直角三角形。'
    ],
    pitfalls: [
      '把 $d=1$ 当成半弦长。'
    ],
    takeaway: '弦长 $=2@sqrt{r^2-d^2}$。'
  },
  {
    id: 'dr-f-59', knowledge: ['k-ag-conic'], type: 'single', difficulty: 1, score: 5,
    stem: `双曲线 $@frac{x^2}{9}-@frac{y^2}{16}=1$ 的离心率为`,
    options: [
      { k: 'A', t: `$@frac53$` },
      { k: 'B', t: `$@frac43$` },
      { k: 'C', t: `$@frac54$` },
      { k: 'D', t: `$@frac35$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$a=3$，$b=4$。`,
      `双曲线中 $c^2=a^2+b^2=25$，故 $c=5$。`,
      `离心率 $e=@frac ca=@frac53$。`
    ],
    hints: [
      '双曲线 $c$ 最大，用 $c^2=a^2+b^2$。'
    ],
    pitfalls: [
      '套用椭圆关系 $c^2=a^2-b^2$，算出负数。'
    ],
    takeaway: '椭圆 $c^2=a^2-b^2$，双曲线 $c^2=a^2+b^2$，别混。'
  },
  {
    id: 'dr-f-60', knowledge: ['k-ag-conic'], type: 'fill', difficulty: 2, score: 5,
    stem: `抛物线 $x^2=-8y$ 的准线方程为 ________ .`,
    answer: `$y=2$`, accept: ['y=2'],
    solution: [
      `$2p=8$，即 $p=4$，抛物线开口向下。`,
      `准线在焦点上方，方程为 $y=@frac p2=2$。`
    ],
    hints: [
      '先判断开口方向，再定准线在焦点的哪一侧。'
    ],
    pitfalls: [
      '写成 $y=-2$，方向弄反。'
    ],
    takeaway: '$x^2=-2py$ 的准线是 $y=@frac p2$。'
  },
  {
    id: 'dr-f-61', knowledge: ['k-ag-chord'], type: 'single', difficulty: 2, score: 5,
    stem: `过椭圆 $@frac{x^2}{4}+y^2=1$ 的右焦点且垂直于长轴的弦长为`,
    options: [
      { k: 'A', t: `$1$` },
      { k: 'B', t: `$2$` },
      { k: 'C', t: `$@sqrt3$` },
      { k: 'D', t: `$@frac12$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$a=2$，$b=1$，$c=@sqrt3$，右焦点横坐标为 $@sqrt3$。`,
      `代入椭圆得 $y^2=1-@frac34=@frac14$，即 $y=@pm@frac12$。`,
      `弦长为 $1$。`
    ],
    hints: [
      '通径公式 $@frac{2b^2}{a}$。'
    ],
    pitfalls: [
      '把弦长算成 $@frac{b^2}{a}=@frac12$。'
    ],
    takeaway: '椭圆通径长为 $@frac{2b^2}{a}$。'
  },
  {
    id: 'dr-f-62', knowledge: ['k-ag-chord'], type: 'fill', difficulty: 3, score: 5,
    stem: `过抛物线 $y^2=4x$ 的焦点 $F$ 的弦 $AB$ 的中点的横坐标为 $3$，则 $|AB|=$ ________ .`,
    answer: `$8$`, accept: ['8'],
    solution: [
      `焦点弦长 $|AB|=x_1+x_2+p$，这里 $p=2$。`,
      `中点横坐标为 $3$，故 $x_1+x_2=6$。`,
      `所以 $|AB|=6+2=8$。`
    ],
    hints: [
      '焦点弦长等于两端横坐标之和加 $p$。'
    ],
    pitfalls: [
      '把中点横坐标直接当成 $x_1+x_2=3$。'
    ],
    takeaway: '抛物线焦点弦 $|AB|=x_1+x_2+p$。'
  },
  {
    id: 'dr-f-63', knowledge: ['k-ag-vector'], type: 'single', difficulty: 3, score: 5,
    stem: `已知抛物线 $y^2=4x$ 的焦点为 $F$，动点 $P$ 在抛物线上，$M$ 为 $PF$ 的中点，则点 $M$ 的轨迹方程为`,
    options: [
      { k: 'A', t: `$y^2=2x-1$` },
      { k: 'B', t: `$y^2=2x+1$` },
      { k: 'C', t: `$y^2=4x-1$` },
      { k: 'D', t: `$y^2=x-@frac12$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$F(1,0)$，设 $M(x,y)$，则 $P(2x-1,2y)$。`,
      `把 $P$ 代入 $y^2=4x$：$(2y)^2=4(2x-1)$。`,
      `化简得 $y^2=2x-1$。`
    ],
    hints: [
      '用中点坐标反解出 $P$ 的坐标，再代回原方程。'
    ],
    pitfalls: [
      '只把中点坐标代入抛物线，没有先反解 $P$。'
    ],
    takeaway: '相关点法：设所求点，反解已知点，代回原方程。'
  },
  {
    id: 'dr-f-64', knowledge: ['k-ag-vector'], type: 'fill', difficulty: 3, score: 5,
    stem: `过抛物线 $y^2=4x$ 的焦点 $F$ 的直线交抛物线于 $A,B$ 两点，则 $@frac{1}{|AF|}+@frac{1}{|BF|}=$ ________ .`,
    answer: `$1$`, accept: ['1'],
    solution: [
      `设焦点弦 $x=my+1$，代入 $y^2=4x$ 得 $y^2-4my-4=0$。`,
      `由此得 $x_1x_2=1$。`,
      `$@frac{1}{|AF|}+@frac{1}{|BF|}=@frac{x_1+x_2+2}{(x_1+1)(x_2+1)}=@frac{x_1+x_2+2}{x_1x_2+x_1+x_2+1}=1$。`
    ],
    hints: [
      '焦半径 $|AF|=x_1+1$，再用韦达定理。'
    ],
    pitfalls: [
      '把 $|AF|$ 当成 $x_1$，漏掉到准线的距离。'
    ],
    takeaway: '抛物线焦点弦满足 $@frac{1}{|AF|}+@frac{1}{|BF|}=@frac2p$。'
  },
  {
    id: 'dr-f-65', knowledge: ['k-ag-area'], type: 'single', difficulty: 3, score: 5,
    stem: `已知椭圆 $@frac{x^2}{9}+@frac{y^2}{4}=1$ 的左、右焦点分别为 $F_1,F_2$，$P$ 为椭圆上一点，且 $@angle F_1PF_2=60^@circ$，则 $@triangle PF_1F_2$ 的面积为`,
    options: [
      { k: 'A', t: `$@frac{4@sqrt3}{3}$` },
      { k: 'B', t: `$2@sqrt3$` },
      { k: 'C', t: `$4$` },
      { k: 'D', t: `$@frac{2@sqrt3}{3}$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `焦点三角形面积公式 $S=b^2@tan@frac{@theta}{2}$，这里 $b^2=4$，$@theta=60^@circ$。`,
      `$S=4@tan30^@circ=@frac{4@sqrt3}{3}$。`
    ],
    hints: [
      '焦点三角形面积只与 $b$ 和顶角有关。'
    ],
    pitfalls: [
      '误用 $S=@frac12b^2@sin@theta$。'
    ],
    takeaway: '$S_{@triangle PF_1F_2}=b^2@tan@frac{@theta}{2}$。'
  },
  {
    id: 'dr-f-66', knowledge: ['k-ag-area'], type: 'fill', difficulty: 3, score: 5,
    stem: `已知直线 $y=x+1$ 与椭圆 $@frac{x^2}{4}+y^2=1$ 交于 $A,B$ 两点，$O$ 为坐标原点，则 $@triangle OAB$ 的面积为 ________ .`,
    answer: `$@frac45$`, accept: ['4/5'],
    solution: [
      `联立得 $5x^2+8x=0$，解得 $x=0$ 或 $x=-@frac85$。`,
      `两交点为 $(0,1)$ 与 $@left(-@frac85,-@frac35@right)$。`,
      `$S=@frac12|x_1y_2-x_2y_1|=@frac12@times@frac85=@frac45$。`
    ],
    hints: [
      '有具体交点时，用坐标叉积算面积最快。'
    ],
    pitfalls: [
      '忘记乘 $@frac12$，得到 $@frac85$。'
    ],
    takeaway: '三角形面积 $S=@frac12|x_1y_2-x_2y_1|$。'
  },
  {
    id: 'dr-f-67', knowledge: ['k-ps-prob'], type: 'single', difficulty: 2, score: 5,
    stem: `从 $1,2,3,4$ 中任取两个不同的数，则这两个数之和为奇数的概率为`,
    options: [
      { k: 'A', t: `$@frac13$` },
      { k: 'B', t: `$@frac12$` },
      { k: 'C', t: `$@frac23$` },
      { k: 'D', t: `$@frac34$` }
    ],
    answer: 'C', accept: [],
    solution: [
      `任取两个数共有 $C_4^2=6$ 种等可能取法。`,
      `和为奇数必须一奇一偶：奇数有 $2$ 个，偶数有 $2$ 个，共 $2@times2=4$ 种。`,
      `概率为 $@frac46=@frac23$。`
    ],
    hints: [
      '和为奇数等价于两个数一奇一偶。'
    ],
    pitfalls: [
      '按顺序算成 $12$ 种取法，却只数了 $4$ 种有利情形。'
    ],
    takeaway: '古典概型用组合数数样本点，先看清“一奇一偶”的结构。'
  },
  {
    id: 'dr-f-68', knowledge: ['k-ps-prob'], type: 'fill', difficulty: 2, score: 5,
    stem: `甲、乙两人独立解同一道题，甲解出的概率为 $0.6$，乙解出的概率为 $0.5$，则至少有一人解出的概率为 ________ .`,
    answer: `$0.8$`, accept: ['0.8', '4/5'],
    solution: [
      `“至少一人解出”的对立事件是“两人都没解出”。`,
      `两人都没解出的概率为 $0.4@times0.5=0.2$。`,
      `所求概率为 $1-0.2=0.8$。`
    ],
    hints: [
      '至少一人解出，用对立事件“两人都未解出”。'
    ],
    pitfalls: [
      '把两个概率直接相加，得到 $1.1$。'
    ],
    takeaway: '独立事件“至少一个发生”用 $1$ 减去全不发生。'
  },
  {
    id: 'dr-f-69', knowledge: ['k-ps-dist'], type: 'single', difficulty: 2, score: 5,
    stem: `已知随机变量 $X@sim B@left(4,@frac12@right)$，则 $P(X=2)=$`,
    options: [
      { k: 'A', t: `$@frac38$` },
      { k: 'B', t: `$@frac14$` },
      { k: 'C', t: `$@frac12$` },
      { k: 'D', t: `$@frac58$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `二项分布 $P(X=k)=C_4^k@left(@frac12@right)^4$。`,
      `$P(X=2)=C_4^2@left(@frac12@right)^4=@frac{6}{16}$。`,
      `即 $@frac38$。`
    ],
    hints: [
      '先写二项分布的概率公式，再代入 $k=2$。'
    ],
    pitfalls: [
      '漏掉组合数 $C_4^2$，只算 $@left(@frac12@right)^4$。'
    ],
    takeaway: '二项分布求单点概率：组合数乘两次概率。'
  },
  {
    id: 'dr-f-70', knowledge: ['k-ps-dist'], type: 'fill', difficulty: 2, score: 5,
    stem: `已知随机变量 $X@sim B@left(3,@frac13@right)$，则 $E(X)+D(X)=$ ________ .`,
    answer: `$@frac53$`, accept: ['5/3'],
    solution: [
      `$E(X)=np=3@times@frac13=1$。`,
      `$D(X)=np(1-p)=3@times@frac13@times@frac23=@frac23$。`,
      `所以 $E(X)+D(X)=1+@frac23=@frac53$。`
    ],
    hints: [
      '二项分布直接用 $E=np$，$D=np(1-p)$。'
    ],
    pitfalls: [
      '把方差写成 $np=1$，忘记乘 $1-p$。'
    ],
    takeaway: '二项分布的数字特征公式要记准，方差别漏 $(1-p)$。'
  },
  {
    id: 'dr-f-71', knowledge: ['k-ps-stat'], type: 'single', difficulty: 2, score: 5,
    stem: `数据 $2,4,6,8$ 的方差为`,
    options: [
      { k: 'A', t: `$4$` },
      { k: 'B', t: `$5$` },
      { k: 'C', t: `$6$` },
      { k: 'D', t: `$8$` }
    ],
    answer: 'B', accept: [],
    solution: [
      `平均数 $@bar x=@frac{2+4+6+8}{4}=5$。`,
      `偏差平方和为 $9+1+1+9=20$。`,
      `方差 $s^2=@frac{20}{4}=5$。`
    ],
    hints: [
      '先算平均数，再算各数据与平均数的差的平方和。'
    ],
    pitfalls: [
      '除以 $n-1$ 而不是 $n$（中学方差除以 $n$）。'
    ],
    takeaway: '方差 $=@frac1n@sum(x_i-@bar x)^2$。'
  },
  {
    id: 'dr-f-72', knowledge: ['k-ps-stat'], type: 'fill', difficulty: 2, score: 5,
    stem: `数据 $1,2,2,3$ 的方差为 ________ .`,
    answer: `$@frac12$`, accept: ['1/2', '0.5'],
    solution: [
      `平均数 $@bar x=@frac{1+2+2+3}{4}=2$。`,
      `偏差平方和为 $1+0+0+1=2$。`,
      `方差 $s^2=@frac24=@frac12$。`
    ],
    hints: [
      '数据有重复，先算平均数再逐个求偏差平方。'
    ],
    pitfalls: [
      '只算偏差之和，得到 $0$。'
    ],
    takeaway: '方差是偏差平方的平均，不是偏差的平均。'
  },
  {
    id: 'dr-f-73', knowledge: ['k-ps-expect'], type: 'single', difficulty: 2, score: 5,
    stem: `袋中有 $3$ 个红球、$2$ 个白球，从中任取一个球。若取到红球得 $2$ 分，取到白球得 $-1$ 分，记得分为 $X$，则 $E(X)=$`,
    options: [
      { k: 'A', t: `$@frac45$` },
      { k: 'B', t: `$1$` },
      { k: 'C', t: `$@frac65$` },
      { k: 'D', t: `$@frac25$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$P(X=2)=@frac35$，$P(X=-1)=@frac25$。`,
      `$E(X)=2@times@frac35+(-1)@times@frac25$。`,
      `$=@frac65-@frac25=@frac45$。`
    ],
    hints: [
      '先写分布列，再按定义加权求和。'
    ],
    pitfalls: [
      '把白球的得分当成 $1$ 而不是 $-1$。'
    ],
    takeaway: '期望是取值乘概率的求和，负值要带符号。'
  },
  {
    id: 'dr-f-74', knowledge: ['k-ps-expect'], type: 'fill', difficulty: 2, score: 5,
    stem: `已知随机变量 $X@sim B(10,0.3)$，则 $E(2X+1)=$ ________ .`,
    answer: `$7$`, accept: ['7'],
    solution: [
      `$E(X)=np=10@times0.3=3$。`,
      `由期望的线性性质 $E(2X+1)=2E(X)+1$。`,
      `$=2@times3+1=7$。`
    ],
    hints: [
      '先求 $E(X)$，再用线性性质。'
    ],
    pitfalls: [
      '把 $E(2X+1)$ 算成 $2E(X)$，漏掉常数项。'
    ],
    takeaway: '$E(aX+b)=aE(X)+b$。'
  },
  {
    id: 'dr-f-75', knowledge: ['k-ps-sampling'], type: 'single', difficulty: 2, score: 5,
    stem: `某校高一、高二、高三学生人数分别为 $400,300,300$，现用分层抽样的方法抽取一个容量为 $50$ 的样本，则高二年级应抽取的人数为`,
    options: [
      { k: 'A', t: `$10$` },
      { k: 'B', t: `$15$` },
      { k: 'C', t: `$20$` },
      { k: 'D', t: `$12$` }
    ],
    answer: 'B', accept: [],
    solution: [
      `总人数 $400+300+300=1000$，抽样比为 $@frac{50}{1000}=@frac1{20}$。`,
      `高二应抽 $300@times@frac1{20}=15$ 人。`
    ],
    hints: [
      '分层抽样按比例分配，先求抽样比。'
    ],
    pitfalls: [
      '直接按 $50@div3$ 平均分。'
    ],
    takeaway: '分层抽样：各层人数乘同一个抽样比。'
  },
  {
    id: 'dr-f-76', knowledge: ['k-ps-sampling'], type: 'fill', difficulty: 1, score: 5,
    stem: `用简单随机抽样从 $10$ 个个体中抽取 $3$ 个，则每个个体被抽到的概率为 ________ .`,
    answer: `$@frac{3}{10}$`, accept: ['3/10', '0.3'],
    solution: [
      `每个个体在每一次抽取中被抽到的机会相同。`,
      `抽取 $3$ 个，每个个体被抽到的概率为 $@frac{3}{10}$。`
    ],
    hints: [
      '简单随机抽样中每个个体被抽到的概率都相等。'
    ],
    pitfalls: [
      '把概率算成 $@frac1{10}$。'
    ],
    takeaway: '从 $N$ 个中抽 $n$ 个，每个个体被抽到的概率是 $@frac nN$。'
  },
  {
    id: 'dr-f-77', knowledge: ['k-ie-basic'], type: 'single', difficulty: 3, score: 5,
    stem: `已知 $x>0$，$y>0$，且 $x+2y=1$，则 $@frac1x+@frac1y$ 的最小值为`,
    options: [
      { k: 'A', t: `$3+2@sqrt2$` },
      { k: 'B', t: `$4$` },
      { k: 'C', t: `$5$` },
      { k: 'D', t: `$3+@sqrt2$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `用“$1$”的代换：$@left(@frac1x+@frac1y@right)(x+2y)=3+@frac{2y}{x}+@frac{x}{y}$。`,
      `由基本不等式 $@frac{2y}{x}+@frac{x}{y}@ge2@sqrt2$。`,
      `故最小值为 $3+2@sqrt2$。`
    ],
    hints: [
      '把所求式子乘以已知的 $x+2y$（它等于 $1$）。'
    ],
    pitfalls: [
      '直接对 $@frac1x+@frac1y$ 用基本不等式，取等条件与 $x+2y=1$ 不符。'
    ],
    takeaway: '已知和为定值求倒数和，用乘 $1$ 法。'
  },
  {
    id: 'dr-f-78', knowledge: ['k-ie-basic'], type: 'fill', difficulty: 1, score: 5,
    stem: `已知 $x>0$，则 $x+@frac9x$ 的最小值为 ________ .`,
    answer: `$6$`, accept: ['6'],
    solution: [
      `由基本不等式 $x+@frac9x@ge2@sqrt{x@cdot@frac9x}=6$。`,
      `当且仅当 $x=3$ 时取等。`
    ],
    hints: [
      '两项均为正，直接用 $a+b@ge2@sqrt{ab}$。'
    ],
    pitfalls: [
      '把取等条件写成 $x=9$。'
    ],
    takeaway: '$x+@frac ax@ge2@sqrt a$，取等于 $x=@sqrt a$。'
  },
  {
    id: 'dr-f-79', knowledge: ['k-ie-abs'], type: 'single', difficulty: 2, score: 5,
    stem: `若不等式 $|x-a|<1$ 的解集为 $(1,3)$，则 $a=$`,
    options: [
      { k: 'A', t: `$2$` },
      { k: 'B', t: `$1$` },
      { k: 'C', t: `$3$` },
      { k: 'D', t: `$4$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$|x-a|<1$ 的解集为 $(a-1,a+1)$。`,
      `对照 $(1,3)$ 得 $a-1=1$，$a+1=3$。`,
      `所以 $a=2$。`
    ],
    hints: [
      '先写出绝对值不等式解集的一般形式。'
    ],
    pitfalls: [
      '把端点对应反，解出 $a=1$。'
    ],
    takeaway: '$|x-a|<r$ 的解集是以 $a$ 为中心、$r$ 为半径的开区间。'
  },
  {
    id: 'dr-f-80', knowledge: ['k-ie-abs'], type: 'fill', difficulty: 3, score: 5,
    stem: `不等式 $|x-1|+|x+2|@le5$ 的解集为 ________ .`,
    answer: `$[-3,2]$`, accept: ['-3<=x<=2', '[-3,2]', '-3≤x≤2'],
    solution: [
      `当 $x>1$ 时，$2x+1@le5$，得 $x@le2$。`,
      `当 $-2@le x@le1$ 时，左边恒为 $3$，全部满足。`,
      `当 $x<-2$ 时，$-2x-1@le5$，得 $x@ge-3$；综合得 $[-3,2]$。`
    ],
    hints: [
      '用数轴上看“到 $1$ 与 $-2$ 的距离之和不大于 $5$”。'
    ],
    pitfalls: [
      '只解出 $x@le2$，漏掉左半支 $x@ge-3$。'
    ],
    takeaway: '双绝对值不等式，分区间讨论或借助几何意义。'
  },
  {
    id: 'dr-f-81', knowledge: ['k-count'], type: 'single', difficulty: 3, score: 5,
    stem: `从 $5$ 名男生和 $4$ 名女生中选 $3$ 人参加活动，要求至少有 $1$ 名女生，则不同的选法共有`,
    options: [
      { k: 'A', t: `$74$` },
      { k: 'B', t: `$84$` },
      { k: 'C', t: `$64$` },
      { k: 'D', t: `$30$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `不加限制共有 $C_9^3=84$ 种。`,
      `全是男生有 $C_5^3=10$ 种。`,
      `至少一名女生：$84-10=74$ 种。`
    ],
    hints: [
      '“至少一名女生”用对立事件：一名女生都没有。'
    ],
    pitfalls: [
      '用 $C_4^1C_8^2$ 直接算，会重复计数。'
    ],
    takeaway: '至少问题先算对立面，再用总数相减。'
  },
  {
    id: 'dr-f-82', knowledge: ['k-count'], type: 'fill', difficulty: 3, score: 5,
    stem: `用 $0,1,2,3$ 这四个数字组成没有重复数字的四位偶数，共有 ________ 个。`,
    answer: `$10$`, accept: ['10'],
    solution: [
      `末位为 $0$：其余三位任意排，有 $3!=6$ 个。`,
      `末位为 $2$：首位不能为 $0$，有 $2$ 种；中间两位排剩下两个数，有 $2!=2$ 种，共 $4$ 个。`,
      `合计 $6+4=10$ 个。`
    ],
    hints: [
      '按末位是否为 $0$ 分类，注意首位不能为 $0$。'
    ],
    pitfalls: [
      '末位为 $2$ 时忘记首位不能取 $0$，多算 $2$ 个。'
    ],
    takeaway: '含 $0$ 的排列问题，优先安排特殊位置。'
  },
  {
    id: 'dr-f-83', knowledge: ['k-binomial'], type: 'single', difficulty: 2, score: 5,
    stem: `在 $(x-2)^5$ 的展开式中，$x^3$ 的系数为`,
    options: [
      { k: 'A', t: `$40$` },
      { k: 'B', t: `$-40$` },
      { k: 'C', t: `$80$` },
      { k: 'D', t: `$-80$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `通项 $T_{k+1}=C_5^k x^{5-k}(-2)^k$。`,
      `令 $5-k=3$，得 $k=2$。`,
      `系数为 $C_5^2@times(-2)^2=10@times4=40$。`
    ],
    hints: [
      '先写通项，再令 $x$ 的指数等于 $3$。'
    ],
    pitfalls: [
      '漏掉 $(-2)^2$ 的符号或数值。'
    ],
    takeaway: '二项式系数与项的系数不是一回事，负号要跟着算。'
  },
  {
    id: 'dr-f-84', knowledge: ['k-binomial'], type: 'fill', difficulty: 2, score: 5,
    stem: `在 $@left(x+@frac1x@right)^8$ 的展开式中，常数项为 ________ .`,
    answer: `$70$`, accept: ['70'],
    solution: [
      `通项 $T_{k+1}=C_8^k x^{8-k}x^{-k}=C_8^k x^{8-2k}$。`,
      `令 $8-2k=0$，得 $k=4$。`,
      `常数项为 $C_8^4=70$。`
    ],
    hints: [
      '令指数 $8-2k=0$，解出 $k$。'
    ],
    pitfalls: [
      '把 $C_8^4$ 与 $C_8^3$ 记混。'
    ],
    takeaway: '常数项令指数为零，二项式系数关于中间对称。'
  }
);
