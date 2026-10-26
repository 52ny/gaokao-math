window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: '2023-xkb1',
  title: '2023 年普通高等学校招生全国统一考试（新课标Ⅰ卷）· 19 题结构重排',
  short: '2023 新课标Ⅰ',
  year: 2023,
  region: '新课标Ⅰ卷',
  kind: 'real',
  duration: 150,
  note: '按 2024 起 19 题结构重排：8 单选 + 3 多选 + 3 填空 + 5 解答',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `已知集合 $M=@left@{-2,-1,0,1,2@right@}$，$N=@left@{x@mid x^2-x-6@ge0@right@}$，则 $M@cap N=$`,
      options: [
        { k: 'A', t: `$@left@{-2@right@}$` },
        { k: 'B', t: `$@left@{-2,-1@right@}$` },
        { k: 'C', t: `$@left@{2@right@}$` },
        { k: 'D', t: `$@left@{2,3@right@}$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `由 $x^2-x-6@ge0$ 得 $(x-3)(x+2)@ge0$，所以 $x@le-2$ 或 $x@ge3$，即 $N=(-@infty,-2]@cup[3,+@infty)$。`,
        `$M$ 中满足条件的元素只有 $-2$，所以 $M@cap N=@left@{-2@right@}$，选 A。`
      ],
      hints: ['先把 $x^2-x-6$ 因式分解，写出 $N$ 的区间。', '再逐个检查 $M$ 中元素是否落在 $N$ 中。'],
      pitfalls: ['不等式方向或端点弄反，误把 $2$ 算进交集。', '把区间端点与集合元素混淆。'],
      takeaway: '集合交集：先解不等式化简 $N$，再逐元素判断。',
      knowledge: ['k-set-ops']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 2,
      stem: `已知向量 $@vec{a}=(1,1)$，$@vec{b}=(1,-1)$。若 $(@vec{a}+@lambda@vec{b})@perp(@vec{a}+@mu@vec{b})$，则`,
      options: [
        { k: 'A', t: `$@lambda+@mu=1$` },
        { k: 'B', t: `$@lambda+@mu=-1$` },
        { k: 'C', t: `$@lambda@mu=1$` },
        { k: 'D', t: `$@lambda@mu=-1$` }
      ],
      answer: 'D',
      accept: [],
      solution: [
        `$@vec{a}@cdot@vec{a}=2$，$@vec{a}@cdot@vec{b}=0$，$@vec{b}@cdot@vec{b}=2$。`,
        `由垂直得 $(@vec{a}+@lambda@vec{b})@cdot(@vec{a}+@mu@vec{b})=2+2@lambda@mu=0$，故 $@lambda@mu=-1$，选 D。`
      ],
      hints: ['垂直条件等价于数量积为 $0$。', '先算 $@vec{a}@cdot@vec{a}$、$@vec{a}@cdot@vec{b}$、$@vec{b}@cdot@vec{b}$。'],
      pitfalls: ['展开数量积时漏项。', '把 $@lambda@mu$ 的符号写反。'],
      takeaway: '向量垂直等价于数量积为 $0$，按分配律展开即可。',
      knowledge: ['k-vec-dot', 'k-vec-coord']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 3,
      stem: `已知 $@sin(@alpha-@beta)=@frac{1}{3}$，$@cos@alpha@sin@beta=@frac{1}{6}$，则 $@cos(2@alpha+2@beta)=$`,
      options: [
        { k: 'A', t: `$@frac{1}{9}$` },
        { k: 'B', t: `$-@frac{1}{9}$` },
        { k: 'C', t: `$@frac{1}{3}$` },
        { k: 'D', t: `$-@frac{1}{3}$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `由 $@sin(@alpha-@beta)=@sin@alpha@cos@beta-@cos@alpha@sin@beta=@frac{1}{3}$，且 $@cos@alpha@sin@beta=@frac{1}{6}$，得 $@sin@alpha@cos@beta=@frac{1}{3}+@frac{1}{6}=@frac{1}{2}$。`,
        `所以 $@sin(@alpha+@beta)=@sin@alpha@cos@beta+@cos@alpha@sin@beta=@frac{1}{2}+@frac{1}{6}=@frac{2}{3}$。`,
        `于是 $@cos(2@alpha+2@beta)=1-2@sin^2(@alpha+@beta)=1-2@cdot@frac{4}{9}=@frac{1}{9}$，选 A。`
      ],
      hints: ['先展开 $@sin(@alpha-@beta)$，求出 $@sin@alpha@cos@beta$。', '再整体求 $@sin(@alpha+@beta)$，用倍角公式。'],
      pitfalls: ['两角差的正弦展开符号写错。', '把 $@cos(2@theta)$ 写成 $2@cos^2@theta-1$ 后代入错误的值。'],
      takeaway: '给两角差与一个混合项，先补齐另一个混合项，再整体套倍角公式。',
      knowledge: ['k-tr-identity']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 3,
      stem: `设函数 $f(x)=2^{x(x-a)}$ 在区间 $(0,1)$ 上单调递减，则 $a$ 的取值范围是`,
      options: [
        { k: 'A', t: `$(-@infty,-2]$` },
        { k: 'B', t: `$[-2,0)$` },
        { k: 'C', t: `$(0,2]$` },
        { k: 'D', t: `$[2,+@infty)$` }
      ],
      answer: 'D',
      accept: [],
      solution: [
        `令 $u=x^2-ax$，则 $u@prime=2x-a$。外层 $2^u$ 关于 $u$ 递增，故需 $u$ 在 $(0,1)$ 上递减，即 $2x-a@le0$ 对 $x@in(0,1)$ 恒成立。`,
        `于是 $a@ge2x$ 对 $x@in(0,1)$ 恒成立，得 $a@ge2$。当 $a=2$ 时 $u@prime=2x-2<0$，仍严格递减，所以 $a@in[2,+@infty)$，选 D。`
      ],
      hints: ['复合函数单调性：外层递增，只需内层递减。', '在区间上递减要求导数 $@le0$ 恒成立。'],
      pitfalls: ['把 $a@ge2$ 误写成 $a>2$，忽略端点。', '把内层误当增函数讨论。'],
      takeaway: '复合函数单调性看内外层；恒成立问题转化为最值。',
      knowledge: ['k-dv-monotone', 'k-fn-prop']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 3,
      stem: `设椭圆 $C_1:@frac{x^2}{a^2}+y^2=1(a>1)$，$C_2:@frac{x^2}{4}+y^2=1$ 的离心率分别为 $e_1,e_2$。若 $e_2=@sqrt{3}e_1$，则 $a=$`,
      options: [
        { k: 'A', t: `$@frac{2@sqrt{3}}{3}$` },
        { k: 'B', t: `$@sqrt{2}$` },
        { k: 'C', t: `$@sqrt{3}$` },
        { k: 'D', t: `$2$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `对 $C_2$，$a^2=4$，$b^2=1$，$c^2=3$，故 $e_2=@frac{@sqrt{3}}{2}$。`,
        `对 $C_1$，$c^2=a^2-1$，$e_1=@frac{@sqrt{a^2-1}}{a}$。由 $e_2=@sqrt{3}e_1$ 得 $@frac{@sqrt{3}}{2}=@sqrt{3}@cdot@frac{@sqrt{a^2-1}}{a}$，即 $@frac{@sqrt{a^2-1}}{a}=@frac{1}{2}$。`,
        `平方得 $4(a^2-1)=a^2$，$a^2=@frac{4}{3}$。又 $a>1$，故 $a=@frac{2@sqrt{3}}{3}$，选 A。`
      ],
      hints: ['先分别写出两个椭圆的 $a,b,c$。', '把 $e_2=@sqrt{3}e_1$ 两边平方去根号。'],
      pitfalls: ['把 $C_2$ 的 $b^2$ 误当成 $4$，导致 $e_2$ 算错。', '开方后忘记 $a>1$ 的取舍。'],
      takeaway: '椭圆离心率统一用 $a,c$ 表示，平方去根号。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 3,
      stem: `过点 $(0,-2)$ 与圆 $x^2+y^2-4x-1=0$ 相切的两条直线的夹角为 $@alpha$，则 $@sin@alpha=$`,
      options: [
        { k: 'A', t: `$@frac{@sqrt{10}}{4}$` },
        { k: 'B', t: `$@frac{@sqrt{15}}{4}$` },
        { k: 'C', t: `$@frac{@sqrt{6}}{4}$` },
        { k: 'D', t: `$@frac{@sqrt{5}}{4}$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `圆化为 $(x-2)^2+y^2=5$，圆心 $C(2,0)$，半径 $r=@sqrt{5}$。点 $P(0,-2)$ 到圆心的距离 $|PC|=@sqrt{4+4}=2@sqrt{2}>r$，故两条切线存在。`,
        `连心线 $PC$ 平分两切线的夹角，设半角为 $@frac{@alpha}{2}$，则 $@sin@frac{@alpha}{2}=@frac{r}{|PC|}=@frac{@sqrt{5}}{2@sqrt{2}}=@frac{@sqrt{10}}{4}$，于是 $@cos@frac{@alpha}{2}=@sqrt{1-@frac{10}{16}}=@frac{@sqrt{6}}{4}$。`,
        `所以 $@sin@alpha=2@sin@frac{@alpha}{2}@cos@frac{@alpha}{2}=2@cdot@frac{@sqrt{10}}{4}@cdot@frac{@sqrt{6}}{4}=@frac{@sqrt{15}}{4}$，选 B。`
      ],
      hints: ['先化标准方程，求圆心、半径和点到圆心的距离。', '连心线平分切线的夹角，半角正弦等于 $@frac{r}{|PC|}$。'],
      pitfalls: ['把 $@alpha$ 当成半角，直接写 $@sin@alpha=@frac{r}{|PC|}$。', '未验证点在圆外。'],
      takeaway: '圆外一点的两条切线：连心线平分夹角，$@sin@frac{@alpha}{2}=@frac{r}{d}$。',
      knowledge: ['k-ag-line']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 3,
      stem: `记 $S_n$ 为数列 $@left@{a_n@right@}$ 的前 $n$ 项和。设甲：$@left@{a_n@right@}$ 为等差数列；乙：$@left@{@frac{S_n}{n}@right@}$ 为等差数列。则`,
      options: [
        { k: 'A', t: `甲是乙的充分条件但不是必要条件` },
        { k: 'B', t: `甲是乙的必要条件但不是充分条件` },
        { k: 'C', t: `甲是乙的充要条件` },
        { k: 'D', t: `甲既不是乙的充分条件也不是必要条件` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `若 $@left@{a_n@right@}$ 为等差数列，设公差为 $d$，则 $S_n=@frac{n(a_1+a_n)}{2}$，$@frac{S_n}{n}=a_1+@frac{(n-1)d}{2}$，它是公差为 $@frac{d}{2}$ 的等差数列，故甲能推出乙。`,
        `若 $@left@{@frac{S_n}{n}@right@}$ 为等差数列，设 $@frac{S_n}{n}=A+(n-1)D$，则 $S_n=nA+n(n-1)D$。当 $n@ge2$ 时 $a_n=S_n-S_{n-1}=A+2(n-1)D$，且 $n=1$ 时 $a_1=S_1=A$ 也符合，故 $@left@{a_n@right@}$ 是公差为 $2D$ 的等差数列，乙能推出甲。`,
        `所以甲是乙的充要条件，选 C。`
      ],
      hints: ['用 $S_n=@frac{n(a_1+a_n)}{2}$ 看 $@frac{S_n}{n}$ 是否等差。', '反过来设 $@frac{S_n}{n}$ 等差，用 $a_n=S_n-S_{n-1}$ 恢复通项。'],
      pitfalls: ['只验证了一个方向就下结论。', '$a_n=S_n-S_{n-1}$ 只对 $n@ge2$ 成立，需单独检查 $n=1$。'],
      takeaway: '判断等差与 $@frac{S_n}{n}$ 的关系：正推用求和公式，反推用 $a_n=S_n-S_{n-1}$。',
      knowledge: ['k-logic', 'k-seq-basic']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 3,
      stem: `噪声污染问题越来越受到重视。用声压级来度量噪声的强弱：$L=20@lg@frac{p}{p_0}$（单位：dB），其中 $p$ 为声压，$p_0=2@times10^{-5}$ Pa 为基准声压。则下列结论正确的是`,
      options: [
        { k: 'A', t: `当 $p=2@times10^{-3}$ Pa 时，声压级为 $40$ dB` },
        { k: 'B', t: `当 $p=2@times10^{-4}$ Pa 时，声压级为 $30$ dB` },
        { k: 'C', t: `若声压级为 $60$ dB，则声压为 $2@times10^{-3}$ Pa` },
        { k: 'D', t: `声压级从 $40$ dB 增加到 $50$ dB，声压变为原来的 $10$ 倍` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `A：$@frac{p}{p_0}=@frac{2@times10^{-3}}{2@times10^{-5}}=100$，$L=20@lg100=40$ dB，正确。`,
        `B：$@frac{p}{p_0}=@frac{2@times10^{-4}}{2@times10^{-5}}=10$，$L=20@lg10=20$ dB，不是 $30$ dB，错误。`,
        `C：由 $20@lg@frac{p}{p_0}=60$ 得 $@frac{p}{p_0}=10^3$，$p=2@times10^{-5}@times10^3=2@times10^{-2}$ Pa，错误。`,
        `D：声压级增加 $10$ dB 时 $@frac{p}{p_0}$ 变为原来的 $10^{@frac{10}{20}}=@sqrt{10}$ 倍，不是 $10$ 倍，错误。`,
        `所以选 A。`
      ],
      hints: ['把声压级化成指数形式 $@frac{p}{p_0}=10^{@frac{L}{20}}$。', '逐项代入计算，特别是 $60$ dB 与声压级增加 $10$ dB 两种情形。'],
      pitfalls: ['把 $20@lg$ 当成 $10@lg$。', '误以为声压级增加 $10$ dB 时声压变为 $10$ 倍。'],
      takeaway: '对数型实际问题：先解出 $@frac{p}{p_0}$ 的指数表达式，再逐项验算。',
      knowledge: ['k-fn-model']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 2,
      stem: `有一组样本数据 $x_1,x_2,@dots,x_6$，其中 $x_1$ 是最小值，$x_6$ 是最大值，则`,
      options: [
        { k: 'A', t: `$x_2,x_3,x_4,x_5$ 的平均数等于 $x_1,x_2,@dots,x_6$ 的平均数` },
        { k: 'B', t: `$x_2,x_3,x_4,x_5$ 的中位数等于 $x_1,x_2,@dots,x_6$ 的中位数` },
        { k: 'C', t: `$x_2,x_3,x_4,x_5$ 的标准差不小于 $x_1,x_2,@dots,x_6$ 的标准差` },
        { k: 'D', t: `$x_2,x_3,x_4,x_5$ 的极差不大于 $x_1,x_2,@dots,x_6$ 的极差` }
      ],
      answer: 'BD',
      accept: [],
      solution: [
        `6 个数据的中位数是 $@frac{x_3+x_4}{2}$，去掉最小值与最大值后 4 个数据的中位数仍是 $@frac{x_3+x_4}{2}$，故 B 正确。`,
        `后四个数据的极差为 $x_5-x_2$，全体数据的极差为 $x_6-x_1$，显然 $x_5-x_2@le x_6-x_1$，故 D 正确。`,
        `平均数不一定相等，A 错误；例如 $x_1=-10,x_6=10$，其余四个数均为 $0$，后四个数的标准差为 $0$，小于全体数据的标准差，故 C 错误。`,
        `所以选 BD。`
      ],
      hints: ['中位数只与中间两个数有关。', '极差是最大值减最小值；标准差不满足“不小于”。'],
      pitfalls: ['误以为去掉极端值平均数不变。', '把标准差与极差的单调关系混淆。'],
      takeaway: '去掉最小、最大值：中位数不变、极差变小；平均数与标准差要具体看。',
      knowledge: ['k-ps-stat']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 4,
      stem: `已知函数 $f(x)$ 的定义域为 $@mathbf{R}$，且 $f(xy)=y^2f(x)+x^2f(y)$ 对任意 $x,y@in@mathbf{R}$ 成立，则`,
      options: [
        { k: 'A', t: `$f(0)=0$` },
        { k: 'B', t: `$f(1)=0$` },
        { k: 'C', t: `$f(x)$ 是偶函数` },
        { k: 'D', t: `对任意 $x@ne0$，$f(x)+f@left(@frac{1}{x}@right)=0$` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `令 $x=y=1$，得 $f(1)=2f(1)$，故 $f(1)=0$，B 正确。`,
        `令 $y=0$，得 $f(0)=x^2f(0)$ 对任意 $x$ 成立，取 $x=2$ 得 $f(0)=0$，A 正确。`,
        `令 $x=y=-1$，得 $f(1)=2f(-1)$，故 $f(-1)=0$。再令 $y=-1$，得 $f(-x)=f(x)+x^2f(-1)=f(x)$，所以 $f(x)$ 为偶函数，C 正确。`,
        `取 $f(x)=x^2@ln|x|$（$x@ne0$），$f(0)=0$，可验证它满足题设方程，但 $f(2)+f@left(@frac{1}{2}@right)=4@ln2-@frac{1}{4}@ln2@ne0$，故 D 错误。`,
        `所以选 ABC。`
      ],
      hints: ['反复代入 $x=y=1$、$y=0$、$x=y=-1$ 等特殊值。', '判断 D 可用一个具体函数作反例。'],
      pitfalls: ['由 $f(0)=x^2f(0)$ 直接约去 $f(0)$，忽略它可能为 $0$ 的讨论。', '认为偶函数必然满足 $f(x)+f@left(@frac{1}{x}@right)=0$。'],
      takeaway: '抽象函数：先代特殊值定常数，再构造反例排除错误选项。',
      knowledge: ['k-fn-prop', 'k-fn-elem']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 4,
      stem: `下列物体中，能够被整体放入棱长为 $1$（单位：m）的正方体容器（容器壁厚度忽略不计）内的有`,
      options: [
        { k: 'A', t: `直径为 $0.99$ m 的球体` },
        { k: 'B', t: `所有棱长均为 $1.4$ m 的四面体` },
        { k: 'C', t: `底面直径为 $0.01$ m，高为 $1.8$ m 的圆柱体` },
        { k: 'D', t: `底面直径为 $1.2$ m，高为 $0.01$ m 的圆柱体` }
      ],
      answer: 'ABD',
      accept: [],
      solution: [
        `A：球直径 $0.99<1$，可以放入，正确。`,
        `B：取正方体四个互不相邻的顶点，可构成棱长为 $@sqrt{2}$ 的正四面体。$1.4<@sqrt{2}$，故该四面体可放入，正确。`,
        `C：正方体内任意两点距离不超过体对角线 $@sqrt{3}$，而圆柱高 $1.8>@sqrt{3}$，不能放入，错误。`,
        `D：取垂直于体对角线且过中心的截面，它是边长为 $@frac{@sqrt{2}}{2}$ 的正六边形，内切圆半径为 $@frac{@sqrt{6}}{4}@approx0.612$。沿体对角线方向偏移 $t$ 后，截面正六边形的内切圆半径为 $@frac{@sqrt{3}/2-t}{@sqrt{2}}$，当 $t=0.005$ 时约为 $0.609>0.6$，故直径 $1.2$、高 $0.01$ 的扁圆柱可放入，正确。`,
        `所以选 ABD。`
      ],
      hints: ['抓住正方体内最长距离是体对角线 $@sqrt{3}$。', '球的直径与正方体棱长比较；正四面体取正方体的四个隔顶点。', '扁圆柱可借助垂直于体对角线的正六边形截面判断。'],
      pitfalls: ['以为圆柱只要高小于 $1$ 就能放入。', '忽略圆片可以斜放，仍用底面正方形内切圆直径 $1$ 判断。'],
      takeaway: '容器容纳问题：先找最长可用线段，再用截面圆与内切圆半径估计。',
      knowledge: ['k-so-solid', 'k-so-sphere']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 3,
      stem: `某长方形纸的规格为 $20@text{dm}@times12@text{dm}$。沿对称轴对折 $1$ 次，可得到 $10@times12$ 与 $20@times6$ 两种规格，面积之和为 $240@text{dm}^2$；对折 $2$ 次，可得到 $5@times12$、$10@times6$、$20@times3$ 三种规格，面积之和为 $180@text{dm}^2$。以此类推，对折 $n$ 次后，所有规格的图形的面积之和为 ________ $@text{dm}^2$。`,
      answer: `$@frac{240(n+1)}{2^n}$`,
      accept: ['240(n+1)/2^n', '(n+1)240/2^n', '240(n+1)2^{-n}'],
      solution: [
        `对折 $n$ 次后，每一种规格的长、宽分别为 $@frac{20}{2^i}$ 与 $@frac{12}{2^{n-i}}$，其中 $i=0,1,2,@dots,n$，共 $n+1$ 种。`,
        `每一种规格的面积都是 $@frac{20@times12}{2^n}=@frac{240}{2^n}$，所以面积之和为 $S_n=(n+1)@cdot@frac{240}{2^n}$。`,
        `检验：$n=1$ 时 $S_1=@frac{480}{2}=240$，$n=2$ 时 $S_2=@frac{720}{4}=180$，与题设一致。`
      ],
      hints: ['先写出对折 $n$ 次后每种规格的长和宽。', '每种规格面积相同，只需数规格种数。'],
      pitfalls: ['把规格种数误当成 $2^n$ 或 $n$。', '忘记每种规格的面积是 $@frac{240}{2^n}$。'],
      takeaway: '折叠计数：两个方向分别减半，规格数为 $n+1$，总面积等于单块面积乘种数。',
      knowledge: ['k-count']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 3,
      stem: `已知函数 $f(x)=@cos(@omega x)-1(@omega>0)$ 在区间 $[0,2@pi]$ 上有且仅有 $3$ 个零点，则 $@omega$ 的取值范围是 ________。`,
      answer: `$[2,3)$`,
      accept: ['[2,3)', '2<=omega<3', '2≤ω<3', '2≤@omega<3'],
      solution: [
        `$f(x)=0$ 即 $@cos(@omega x)=1$，所以 $@omega x=2k@pi$，$x=@frac{2k@pi}{@omega}$（$k@in@mathbf{Z}$）。`,
        `在 $[0,2@pi]$ 内的零点依次为 $0,@frac{2@pi}{@omega},@frac{4@pi}{@omega},@dots$，共 $3$ 个当且仅当 $@frac{4@pi}{@omega}@le2@pi$ 且 $@frac{6@pi}{@omega}>2@pi$。`,
        `解得 $@omega@ge2$ 且 $@omega<3$，即 $@omega@in[2,3)$。`
      ],
      hints: ['把零点写成 $x=@frac{2k@pi}{@omega}$。', '“恰有 3 个”要保证第 3 个落在区间内、第 4 个落在区间外。'],
      pitfalls: ['漏掉 $x=0$ 这个零点。', '把区间端点取开闭弄反，得到 $[2,3]$。'],
      takeaway: '余弦型零点计数：写出通解，用“第 3 个在内、第 4 个在外”夹出范围。',
      knowledge: ['k-fn-zero', 'k-tr-graph']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 4,
      stem: `设等差数列 $@left@{a_n@right@}$ 的公差为 $d$，且 $d>1$。令 $b_n=@frac{n(n+1)}{a_n}$，$S_n,T_n$ 分别为数列 $@left@{a_n@right@},@left@{b_n@right@}$ 的前 $n$ 项和。若 $@left@{b_n@right@}$ 为等差数列，且 $S_{99}-T_{99}=99$，则 $d=$ ________。`,
      answer: `$@frac{51}{50}$`,
      accept: ['51/50', '1.02'],
      solution: [
        `设 $a_n=a_1+(n-1)d$。由 $@left@{b_n@right@}$ 为等差数列得 $2b_2=b_1+b_3$，即 $@frac{12}{a_1+d}=@frac{2}{a_1}+@frac{12}{a_1+2d}$。`,
        `去分母化简得 $a_1^2-3a_1d+2d^2=0$，即 $(a_1-d)(a_1-2d)=0$，所以 $a_1=d$ 或 $a_1=2d$。`,
        `若 $a_1=d$，则 $a_n=nd$，$b_n=@frac{n+1}{d}$，$S_{99}=4950d$，$T_{99}=@frac{5049}{d}$。由 $4950d-@frac{5049}{d}=99$ 得 $50d^2-d-51=0$，解得 $d=@frac{51}{50}$ 或 $d=-1$，结合 $d>1$ 得 $d=@frac{51}{50}$。`,
        `若 $a_1=2d$，则 $a_n=(n+1)d$，$b_n=@frac{n}{d}$，$S_{99}=5049d$，$T_{99}=@frac{4950}{d}$。由 $5049d-@frac{4950}{d}=99$ 得 $51d^2-d-50=0$，解得 $d=1$ 或 $d=-@frac{50}{51}$，均不满足 $d>1$。`,
        `综上，$d=@frac{51}{50}$。`
      ],
      hints: ['把 $b_n$ 的通项化简，再用 $2b_2=b_1+b_3$ 列方程。', '得到 $a_1=d$ 或 $a_1=2d$ 后分别代入 $S_{99}-T_{99}=99$。', '解出增根后用 $d>1$ 舍去。'],
      pitfalls: ['未化简 $b_n$ 就判断等差，计算量过大且易错。', '解出 $d=1$ 或负值后未按 $d>1$ 舍去。'],
      takeaway: '等差条件用 $2b_2=b_1+b_3$ 起步；分情况求解后逐一验根并舍去增根。',
      knowledge: ['k-seq-basic', 'k-seq-sum']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `已知在 $@triangle ABC$ 中，$A+B=3C$，$2@sin(A-C)=@sin B$。(1) 求 $@sin A$；(2) 设 $AB=5$，求 $AB$ 边上的高。`,
      answer: `(1) $@frac{3@sqrt{10}}{10}$；(2) $6$`,
      accept: [],
      solution: [
        `(1) 由 $A+B+C=@pi$ 且 $A+B=3C$ 得 $4C=@pi$，$C=@frac{@pi}{4}$，$A+B=@frac{3@pi}{4}$。`,
        `由 $2@sin(A-@frac{@pi}{4})=@sin(@frac{3@pi}{4}-A)$，展开得 $@sqrt{2}(@sin A-@cos A)=@frac{@sqrt{2}}{2}(@sin A+@cos A)$，化简得 $@sin A=3@cos A$，即 $@tan A=3$。`,
        `因为 $A@in(0,@frac{3@pi}{4})$ 且 $@tan A>0$，所以 $A$ 为锐角，$@sin A=@frac{3}{@sqrt{10}}=@frac{3@sqrt{10}}{10}$。`,
        `(2) 由 $@sin A=@frac{3@sqrt{10}}{10}$，$@cos A=@frac{@sqrt{10}}{10}$，得 $@sin B=@sin(@frac{3@pi}{4}-A)=@frac{@sqrt{2}}{2}(@sin A+@cos A)=@frac{2@sqrt{5}}{5}$。`,
        `由正弦定理 $@frac{AC}{@sin B}=@frac{AB}{@sin C}$，得 $AC=5@cdot@frac{2@sqrt{5}/5}{@sqrt{2}/2}=2@sqrt{10}$。`,
        `$AB$ 边上的高 $h=AC@sin A=2@sqrt{10}@cdot@frac{3@sqrt{10}}{10}=6$。`
      ],
      hints: ['先用 $A+B+C=@pi$ 与 $A+B=3C$ 求出 $C$。', '把 $@sin B$ 换成 $@sin(@frac{3@pi}{4}-A)$ 展开，得到 $@tan A$。', '第 (2) 问先用正弦定理求 $AC$，再用 $h=AC@sin A$。'],
      pitfalls: ['忘记使用 $A+B+C=@pi$，$C$ 求不出。', '由平方关系求 $@sin A$ 时未说明 $A$ 为锐角而出现负值。', '第 (2) 问误把 $AB$ 当成 $a$，或把高算成 $@frac{2S}{a}$。'],
      takeaway: '解三角形：内角关系先定角，正弦展开求三角函数值；高优先用“邻边乘对应角正弦”。',
      knowledge: ['k-tr-solve', 'k-tr-identity']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 4,
      stem: `在直三棱柱 $ABC-A_1B_1C_1$ 中，$AB=AC=2$，$@angle BAC=90^@circ$，$AA_1=3$，$D$ 为 $B_1C$ 的中点，$E$ 为 $A_1B_1$ 的中点。(1) 证明：$DE@parallel$ 平面 $A_1BC$；(2) 求平面 $A_1BC$ 与平面 $ABC$ 夹角的余弦值；(3) 求点 $B_1$ 到平面 $A_1BC$ 的距离。`,
      answer: `(1) 证明见解析；(2) $@frac{@sqrt{22}}{11}$；(3) $@frac{3@sqrt{22}}{11}$`,
      accept: [],
      solution: [
        `(1) 在 $@triangle A_1B_1C$ 中，$E$ 是 $A_1B_1$ 的中点，$D$ 是 $B_1C$ 的中点，所以 $DE$ 是中位线，$DE@parallel A_1C$。`,
        `又 $A_1C@subset$ 平面 $A_1BC$，而 $DE@not@subset$ 平面 $A_1BC$，所以 $DE@parallel$ 平面 $A_1BC$。`,
        `(2) 以 $A$ 为原点，$AB,AC,AA_1$ 所在直线分别为 $x,y,z$ 轴建立空间直角坐标系，则 $A(0,0,0)$，$B(2,0,0)$，$C(0,2,0)$，$A_1(0,0,3)$，$B_1(2,0,3)$。`,
        `平面 $ABC$ 的一个法向量为 $@vec{n}_1=(0,0,1)$。设平面 $A_1BC$ 的法向量为 $@vec{n}_2=(x,y,z)$，由 $@overrightarrow{BC}=(-2,2,0)$，$@overrightarrow{BA_1}=(-2,0,3)$，得 $-2x+2y=0$ 且 $-2x+3z=0$，可取 $@vec{n}_2=(3,3,2)$。`,
        `$@cos@theta=@frac{|@vec{n}_1@cdot@vec{n}_2|}{|@vec{n}_1||@vec{n}_2|}=@frac{2}{@sqrt{22}}=@frac{@sqrt{22}}{11}$，即所求余弦值为 $@frac{@sqrt{22}}{11}$。`,
        `(3) 由 (2) 知平面 $A_1BC$ 的方程为 $3x+3y+2z=6$，又 $B_1(2,0,3)$，所以点 $B_1$ 到平面 $A_1BC$ 的距离 $d=@frac{|3@times2+3@times0+2@times3-6|}{@sqrt{3^2+3^2+2^2}}=@frac{6}{@sqrt{22}}=@frac{3@sqrt{22}}{11}$。`
      ],
      hints: ['第 (1) 问在 $@triangle A_1B_1C$ 中用中位线找平行关系。', '第 (2) 问以 $A$ 为原点建系，写出 $A_1,B,C$ 坐标。', '两平面夹角余弦取两法向量夹角余弦的绝对值。', '第 (3) 问用点到平面的距离公式，先写出平面方程。'],
      pitfalls: ['只写 $DE@parallel A_1C$，漏掉“$DE$ 不在平面内”，证明不完整。', '建系时 $z$ 轴方向或 $A_1$ 坐标写错。', '二面角余弦忘记取绝对值。', '第 (3) 问平面方程常数项写错。'],
      takeaway: '线面平行借中位线并补“线不在面内”；二面角用两法向量夹角余弦的绝对值；点面距用 $@frac{|Ax_0+By_0+Cz_0+D|}{@sqrt{A^2+B^2+C^2}}$。',
      knowledge: ['k-so-parallel', 'k-so-angle']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 4,
      stem: `甲、乙两人投篮，每次由其中一人投篮。规则如下：若命中，则此人继续投篮；若未命中，则换为对方投篮。无论之前投篮情况如何，甲每次投篮的命中率均为 $0.6$，乙每次投篮的命中率均为 $0.8$。由抽签确定第 $1$ 次投篮的人，第 $1$ 次投篮的人是甲的概率为 $0.5$。(1) 求第 $2$ 次投篮的人是乙的概率；(2) 求第 $i$ 次投篮的人是甲的概率；(3) 记前 $n$ 次投篮中甲投篮的次数为 $X$，求 $E(X)$。`,
      answer: `(1) $@frac{3}{5}$；(2) $p_i=@frac{1}{3}+@frac{1}{6}@left(@frac{2}{5}@right)^{i-1}$；(3) $E(X)=@frac{n}{3}+@frac{5}{18}-@frac{5}{18}@left(@frac{2}{5}@right)^n$`,
      accept: [],
      solution: [
        `(1) 若第 $1$ 次是甲，则第 $2$ 次是乙的概率为 $1-0.6=0.4$；若第 $1$ 次是乙，则第 $2$ 次是乙的概率为 $0.8$。所以所求概率为 $0.5@times0.4+0.5@times0.8=0.6=@frac{3}{5}$。`,
        `(2) 设第 $i$ 次投篮的人是甲的概率为 $p_i$，则 $p_1=0.5$，且 $p_{i+1}=0.6p_i+0.2(1-p_i)=0.4p_i+0.2$。`,
        `该递推的不动点为 $@frac{1}{3}$，所以 $p_{i+1}-@frac{1}{3}=@frac{2}{5}@left(p_i-@frac{1}{3}@right)$，而 $p_1-@frac{1}{3}=@frac{1}{6}$，故 $p_i=@frac{1}{3}+@frac{1}{6}@left(@frac{2}{5}@right)^{i-1}$。`,
        `(3) 由期望的线性性，$E(X)=@sum@limits_{i=1}^n p_i=@frac{n}{3}+@frac{1}{6}@cdot@frac{1-(2/5)^n}{1-2/5}=@frac{n}{3}+@frac{5}{18}-@frac{5}{18}@left(@frac{2}{5}@right)^n$。`
      ],
      hints: ['设 $p_i$ 为第 $i$ 次是甲的概率，写出 $p_{i+1}$ 与 $p_i$ 的递推式。', '一阶线性递推用不动点 $@frac{1}{3}$ 构造等比数列。', '第 (3) 问把 $E(X)$ 写成各次概率之和，再用等比数列求和。'],
      pitfalls: ['把“未命中才换人”理解反，转移概率写错。', '误以为 $X$ 服从二项分布而直接套 $np$。', '等比求和时项数或首项写错。'],
      takeaway: '两人轮换投篮是两状态递推：列转移式、找不动点、化等比；期望等于各次概率之和。',
      knowledge: ['k-ps-prob', 'k-ps-expect']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 4,
      stem: `已知函数 $f(x)=a(@text{e}^x+a)-x$。(1) 讨论 $f(x)$ 的单调性；(2) 证明：当 $a>0$ 时，$f(x)>2@ln a+@frac{3}{2}$；(3) 当 $a=1$ 时，求 $f(x)$ 在 $@left[-1,1@right]$ 上的最大值和最小值。`,
      answer: `(1) 当 $a@le0$ 时在 $@mathbf{R}$ 上单调递减；当 $a>0$ 时在 $(-@infty,-@ln a)$ 上单调递减、在 $(-@ln a,+@infty)$ 上单调递增；(2) 证明见解析；(3) 最大值 $@text{e}$，最小值 $2$`,
      accept: [],
      solution: [
        `(1) $f@prime(x)=a@text{e}^x-1$。若 $a@le0$，则 $a@text{e}^x@le0$，$f@prime(x)<0$，所以 $f(x)$ 在 $@mathbf{R}$ 上单调递减。`,
        `若 $a>0$，令 $f@prime(x)=0$ 得 $x=-@ln a$。当 $x<-@ln a$ 时 $f@prime(x)<0$，当 $x>-@ln a$ 时 $f@prime(x)>0$。所以 $f(x)$ 在 $(-@infty,-@ln a)$ 上单调递减，在 $(-@ln a,+@infty)$ 上单调递增。`,
        `(2) 当 $a>0$ 时，由 (1) 知 $f(x)@ge f(-@ln a)=a@left(@frac{1}{a}+a@right)+@ln a=1+a^2+@ln a$。`,
        `要证 $f(x)>2@ln a+@frac{3}{2}$，只需证 $a^2-@ln a-@frac{1}{2}>0$。令 $g(a)=a^2-@ln a-@frac{1}{2}(a>0)$，则 $g@prime(a)=2a-@frac{1}{a}$。`,
        `$g@prime(a)=0$ 得 $a=@frac{@sqrt{2}}{2}$，且 $g(a)$ 在 $(0,@frac{@sqrt{2}}{2})$ 上递减、在 $(@frac{@sqrt{2}}{2},+@infty)$ 上递增，所以 $g(a)@ge g@left(@frac{@sqrt{2}}{2}@right)=@frac{1}{2}+@frac{1}{2}@ln2-@frac{1}{2}=@frac{@ln2}{2}>0$。`,
        `因此 $f(x)@ge1+a^2+@ln a>2@ln a+@frac{3}{2}$，结论成立。`,
        `(3) 当 $a=1$ 时，$f(x)=@text{e}^x+1-x$，$f@prime(x)=@text{e}^x-1$。令 $f@prime(x)=0$ 得 $x=0$。`,
        `当 $-1@le x<0$ 时 $f@prime(x)<0$，当 $0<x@le1$ 时 $f@prime(x)>0$，所以 $f(x)$ 在 $@left[-1,0@right]$ 上递减、在 $@left[0,1@right]$ 上递增，最小值为 $f(0)=2$。`,
        `又 $f(-1)=@frac{1}{@text{e}}+2$，$f(1)=@text{e}$，且 $@frac{1}{@text{e}}+2<@text{e}$（因为 $@text{e}^2-2@text{e}-1>0$），所以最大值为 $@text{e}$。`
      ],
      hints: ['先求导，按 $a@le0$ 与 $a>0$ 分类。', '第 (2) 问先求最小值，把目标化为关于 $a$ 的单变量不等式，再构造函数 $g(a)=a^2-@ln a-@frac{1}{2}$。', '第 (3) 问先找驻点，再把驻点值与两个端点值一起比较。'],
      pitfalls: ['忽略 $a=0$ 时 $f@prime(x)=-1$ 也属于递减。', '第 (2) 问只说明最小值不小于右边，未严格证明大于。', '第 (3) 问只算驻点函数值，漏比端点值。'],
      takeaway: '含参单调性按导数零点是否存在分类；不等式证明走“最小值加构造函数”路线；闭区间最值要把端点纳入比较。',
      knowledge: ['k-dv-monotone', 'k-dv-ineq']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 5,
      stem: `在直角坐标系 $xOy$ 中，点 $P$ 到 $x$ 轴的距离等于点 $P$ 到点 $(0,@frac{1}{2})$ 的距离，记动点 $P$ 的轨迹为 $W$。(1) 求 $W$ 的方程；(2) 已知矩形 $ABCD$ 有三个顶点在 $W$ 上，证明：矩形 $ABCD$ 的周长大于 $3@sqrt{3}$。`,
      answer: `(1) $W:y=x^2+@frac{1}{4}$；(2) 证明见解析`,
      accept: [],
      solution: [
        `(1) 设 $P(x,y)$，由题意 $|y|=@sqrt{x^2+@left(y-@frac{1}{2}@right)^2}$。两边平方得 $y^2=x^2+y^2-y+@frac{1}{4}$，所以 $W$ 的方程为 $y=x^2+@frac{1}{4}$。`,
        `(2) 设三个在 $W$ 上的顶点为相邻的 $A,B,C$，其中 $B$ 是矩形的直角顶点。设 $A=(a,a^2+@frac{1}{4})$，$B=(b,b^2+@frac{1}{4})$，$C=(c,c^2+@frac{1}{4})$。`,
        `直线 $AB,BC$ 的斜率分别为 $a+b$ 与 $b+c$，由 $AB@perp BC$ 得 $(a+b)(b+c)=-1$。令 $m=a+b$，$n=b+c$，$u=a-b$，$v=c-b$，则 $mn=-1$，且 $u-v=m-n=m+@frac{1}{m}$，故 $|u-v|=|m|+@frac{1}{|m|}$。`,
        `又 $|AB|=|u|@sqrt{1+m^2}$，$|BC|=|v|@sqrt{1+n^2}$，其中 $@sqrt{1+n^2}=@frac{@sqrt{1+m^2}}{|m|}$。记矩形周长的一半为 $L=|AB|+|BC|$，则 $L@ge@min@left@{@sqrt{1+m^2},@sqrt{1+n^2}@right@}(|u|+|v|)@ge@min@left@{@sqrt{1+m^2},@sqrt{1+n^2}@right@}|u-v|$。`,
        `令 $s=|m|>0$，则 $L@ge@sqrt{1+s^2}@cdot@min@left@{1,@frac{1}{s}@right@}@left(s+@frac{1}{s}@right)$。若 $0<s@le1$，则 $L@ge@frac{(1+s^2)^{3/2}}{s}$，而 $4(1+s^2)^3-27s^2=(2s^2-1)^2(s^2+4)@ge0$，故 $L@ge@frac{3@sqrt{3}}{2}$。若 $s>1$，则 $L@ge@frac{(1+s^2)^{3/2}}{s^2}$，令 $t=s^2>1$，由 $@frac{(1+t)^3}{t^2}@ge@frac{27}{4}$（等号仅在 $t=2$）也得 $L@ge@frac{3@sqrt{3}}{2}$。`,
        `等号情形要求 $|u|=0$ 或 $|v|=0$，即 $A$ 与 $B$ 或 $C$ 与 $B$ 重合，这与三个顶点互不相同矛盾，所以 $L>@frac{3@sqrt{3}}{2}$，从而周长 $2L>3@sqrt{3}$。`
      ],
      hints: ['第 (1) 问把“到 $x$ 轴距离”写成 $|y|$，再两边平方。', '第 (2) 问设相邻三点 $A,B,C$ 且 $B$ 为直角顶点，用两斜率乘积为 $-1$。', '把两条直角边长写成 $|横坐标差|@sqrt{1+@text{斜率}^2}$，再用 $|u|+|v|@ge|u-v|$ 放缩。'],
      pitfalls: ['第 (1) 问把到定点的距离写成 $@sqrt{x^2+@frac{1}{4}}$，漏掉 $(y-@frac{1}{2})^2$。', '第 (2) 问只得到 $@ge$ 而未说明等号对应退化情形，结论应为严格大于。', '设点时未说明 $B$ 是三个顶点中的直角顶点。'],
      takeaway: '抛物线内接矩形：垂直设参、边长用斜率表示、放缩成单变量求下界，并检查等号是否可取。',
      knowledge: ['k-ag-conic', 'k-ag-line']
    }
  ]
});
