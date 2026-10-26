/* 2021 年普通高等学校招生全国统一考试（新高考Ⅰ卷）数学 · 19 题结构重排
 * 公式约定：LaTeX 反斜杠一律写成 @；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: '2021-xgk1',
  title: '2021 年普通高等学校招生全国统一考试（新高考Ⅰ卷）· 19 题结构重排',
  short: '2021 新高考Ⅰ',
  year: 2021, region: '新高考Ⅰ卷', kind: 'real', duration: 150,
  note: '按 19 题结构重排',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `设集合 $A=@left@{x@mid -2<x<4@right@}$，$B=@left@{2,3,4,5@right@}$，则 $A@cap B=$`,
      options: [
        { k: 'A', t: `$@left@{2@right@}$` },
        { k: 'B', t: `$@left@{2,3@right@}$` },
        { k: 'C', t: `$@left@{3,4@right@}$` },
        { k: 'D', t: `$@left@{2,3,4@right@}$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `集合 $A$ 是 $-2$ 与 $4$ 之间的实数，即 $A=@left(-2,4@right)$。`,
        `$B$ 中的元素 $2,3$ 满足 $-2<x<4$；而 $4$ 是开区间的右端点，不满足，$5$ 更不在区间内。`,
        `所以 $A@cap B=@left@{2,3@right@}$，选 B。`
      ],
      hints: ['先明确 $A$ 是开区间，再逐个检验 $B$ 中的元素。', '交集只保留同时属于两个集合的元素。'],
      pitfalls: ['把 $4$ 也算进交集（区间右端点是开）。', '把交集与并集混淆。'],
      takeaway: '集合交集：先化简集合，再逐元素核对端点开闭。',
      knowledge: ['k-set-ops']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 2,
      stem: `已知 $z=2-i$，则 $z(@overline{z}+i)=$`,
      options: [
        { k: 'A', t: `$6-2i$` },
        { k: 'B', t: `$4-2i$` },
        { k: 'C', t: `$6+2i$` },
        { k: 'D', t: `$4+2i$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `由 $z=2-i$ 得 $@overline{z}=2+i$，所以 $@overline{z}+i=2+2i$。`,
        `$z(@overline{z}+i)=z@overline{z}+zi=|z|^2+zi=5+(2-i)i$。`,
        `因为 $(2-i)i=2i-i^2=1+2i$，所以原式 $=6+2i$，选 C。`
      ],
      hints: ['先求 $@overline{z}$，再算 $@overline{z}+i$。', '利用 $z@overline{z}=|z|^2$ 可减少展开。'],
      pitfalls: ['把 $@overline{z}$ 的虚部符号弄错。', '计算 $(2-i)i$ 时把 $-i^2$ 的符号写错。'],
      takeaway: '复数乘法先分清实部虚部，$i^2=-1$，$z@overline{z}=|z|^2$。',
      knowledge: ['k-cx-basic']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 2,
      stem: `已知圆锥的底面半径为 $@sqrt2$，其侧面展开图为一个半圆，则该圆锥的母线长为`,
      options: [
        { k: 'A', t: `$2$` },
        { k: 'B', t: `$2@sqrt2$` },
        { k: 'C', t: `$4$` },
        { k: 'D', t: `$4@sqrt2$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `圆锥底面周长为 $2@pi@sqrt2$。`,
        `侧面展开图是半径为母线 $l$ 的半圆，其弧长为 $@pi l$。`,
        `由 $@pi l=2@pi@sqrt2$ 得 $l=2@sqrt2$，选 B。`
      ],
      hints: ['侧面展开图的弧长等于底面圆周长。', '半圆弧长公式为 $@pi l$，不是 $2@pi l$。'],
      pitfalls: ['把半圆弧长当成 $2@pi l$。', '把底面半径与直径混淆。'],
      takeaway: '圆锥展开图：扇形弧长等于底面周长，扇形半径等于母线。',
      knowledge: ['k-so-solid']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 2,
      stem: `下列区间中，函数 $f(x)=7@sin@left(x-@frac{@pi}{6}@right)$ 单调递增的区间是`,
      options: [
        { k: 'A', t: `$@left(0,@frac{@pi}{2}@right)$` },
        { k: 'B', t: `$@left(@frac{@pi}{2},@pi@right)$` },
        { k: 'C', t: `$@left(@pi,@frac{3@pi}{2}@right)$` },
        { k: 'D', t: `$@left(@frac{3@pi}{2},2@pi@right)$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `正弦函数在 $@left(-@frac@pi2+2k@pi,@frac@pi2+2k@pi@right)$ 上单调递增，故需 $x-@frac@pi6@in@left(-@frac@pi2+2k@pi,@frac@pi2+2k@pi@right)$。`,
        `解得 $x@in@left(-@frac@pi3+2k@pi,@frac{2@pi}{3}+2k@pi@right)$。`,
        `取 $k=0$ 得 $@left(-@frac@pi3,@frac{2@pi}{3}@right)$，它包含 $@left(0,@frac@pi2@right)$，故选 A。`
      ],
      hints: ['先写出正弦函数单调递增时相位的范围。', '把 $x-@frac@pi6$ 整体代入，再解出 $x$。'],
      pitfalls: ['忘记加 $2k@pi$，只考虑一个周期。', '把正弦的单调递减区间当成递增区间。'],
      takeaway: '正弦型函数单调性：把相位当整体，代入 $@left(-@frac@pi2+2k@pi,@frac@pi2+2k@pi@right)$。',
      knowledge: ['k-tr-graph']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 2,
      stem: `已知 $F_1,F_2$ 是椭圆 $C:@frac{x^2}{9}+@frac{y^2}{4}=1$ 的两个焦点，点 $M$ 在 $C$ 上，则 $|MF_1|@cdot|MF_2|$ 的最大值为`,
      options: [
        { k: 'A', t: `$13$` },
        { k: 'B', t: `$12$` },
        { k: 'C', t: `$9$` },
        { k: 'D', t: `$6$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `由椭圆定义 $|MF_1|+|MF_2|=2a=6$。`,
        `由均值不等式 $|MF_1||MF_2|@le@left(@frac{6}{2}@right)^2=9$，当且仅当 $|MF_1|=|MF_2|=3$ 时取等。`,
        `此时 $M$ 为短轴端点，故最大值为 $9$，选 C。`
      ],
      hints: ['用椭圆定义把 $|MF_1|+|MF_2|$ 转化为定值 $2a$。', '两正数之和固定时，积在相等处最大。'],
      pitfalls: ['把 $2a$ 误算成 $a$。', '忽略取等条件是否能在椭圆上实现。'],
      takeaway: '椭圆焦点距离积：先用定义得和为 $2a$，再用均值不等式。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 3,
      stem: `若 $@tan@theta=-2$，则 $@frac{@sin@theta(1+@sin2@theta)}{@sin@theta+@cos@theta}=$`,
      options: [
        { k: 'A', t: `$-@frac65$` },
        { k: 'B', t: `$-@frac25$` },
        { k: 'C', t: `$@frac25$` },
        { k: 'D', t: `$@frac65$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `因为 $1+@sin2@theta=(@sin@theta+@cos@theta)^2$，所以原式 $=@sin@theta(@sin@theta+@cos@theta)=@sin^2@theta+@sin@theta@cos@theta$。`,
        `由 $@tan@theta=-2$ 得 $@sin@theta=-2@cos@theta$，且 $@cos^2@theta=@frac15$。`,
        `所以原式 $=4@cos^2@theta-2@cos^2@theta=2@cos^2@theta=@frac25$，选 C。`
      ],
      hints: ['注意 $1+@sin2@theta=(@sin@theta+@cos@theta)^2$，先约分。', '把结果化成齐次式，再用 $@tan@theta$ 求值。'],
      pitfalls: ['约去 $@sin@theta+@cos@theta$ 前未说明其不为 $0$。', '用 $@tan@theta=-2$ 时把 $@sin@theta,@cos@theta$ 的符号弄反。'],
      takeaway: '三角齐次式求值：先化同名，再除以 $@cos^2@theta$ 化为 $@tan@theta$ 的式子。',
      knowledge: ['k-tr-identity']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 4,
      stem: `若过点 $(a,b)$ 可以作曲线 $y=e^x$ 的两条切线，则`,
      options: [
        { k: 'A', t: `$e^b<a$` },
        { k: 'B', t: `$e^a<b$` },
        { k: 'C', t: `$0<a<e^b$` },
        { k: 'D', t: `$0<b<e^a$` }
      ],
      answer: 'D',
      accept: [],
      solution: [
        `设切点为 $(t,e^t)$，由 $y'=e^x$ 得切线方程 $y-e^t=e^t(x-t)$。`,
        `代入 $(a,b)$ 得 $b=e^t(a+1-t)$。`,
        `令 $@varphi(t)=e^t(a+1-t)$，则 $@varphi'(t)=e^t(a-t)$，故 $@varphi$ 在 $(-@infty,a)$ 上递增、在 $(a,+@infty)$ 上递减，最大值为 $@varphi(a)=e^a$。`,
        `又 $t@to-@infty$ 时 $@varphi(t)@to0$，$t@to+@infty$ 时 $@varphi(t)@to-@infty$，所以方程 $@varphi(t)=b$ 有两个不同实根当且仅当 $0<b<e^a$。`,
        `故选 D。`
      ],
      hints: ['设切点，写出切线方程，再代入定点。', '把“两条切线”转化为切点方程有两个不同实根。'],
      pitfalls: ['把切线方程写成 $y=e^t x$，漏掉截距。', '只求导不分析 $@varphi(t)$ 的值域，无法判断根的个数。'],
      takeaway: '过定点的切线条数：设切点建方程，用函数值域数根的个数。',
      knowledge: ['k-dv-param']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 3,
      stem: `有 $6$ 个相同的球，分别标有数字 $1,2,3,4,5,6$，从中有放回地随机取两次，每次取 $1$ 个球。甲表示事件“第一次取出的球的数字是 $1$”，乙表示事件“第二次取出的球的数字是 $2$”，丙表示事件“两次取出的球的数字之和是 $8$”，丁表示事件“两次取出的球的数字之和是 $7$”，则`,
      options: [
        { k: 'A', t: `甲与丙相互独立` },
        { k: 'B', t: `甲与丁相互独立` },
        { k: 'C', t: `乙与丙相互独立` },
        { k: 'D', t: `丙与丁相互独立` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `有放回取两次共有 $36$ 个等可能结果。`,
        `$P(甲)=P(乙)=@frac16$，$P(丙)=@frac5{36}$，$P(丁)=@frac16$。`,
        `$P(甲丁)=@frac1{36}=P(甲)P(丁)$，故甲与丁相互独立。`,
        `$P(甲丙)=0@ne P(甲)P(丙)$，$P(乙丙)=@frac1{36}@ne P(乙)P(丙)$，$P(丙丁)=0@ne P(丙)P(丁)$，故 A、C、D 均错。`,
        `选 B。`
      ],
      hints: ['先写出四个事件的概率。', '独立性的定义是 $P(EF)=P(E)P(F)$，逐个验证。'],
      pitfalls: ['把互斥当成独立。', '计算丙的概率时漏掉 $(4,4)$ 或数重。'],
      takeaway: '事件独立性必须用 $P(EF)=P(E)P(F)$ 验证，不能凭感觉。',
      knowledge: ['k-ps-prob']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 2,
      stem: `有一组样本数据 $x_1,x_2,@cdots,x_n$，由这组数据得到新样本数据 $y_i=x_i+c$（$i=1,2,@cdots,n$），其中 $c$ 为非零常数，则`,
      options: [
        { k: 'A', t: `两组样本数据的样本平均数相同` },
        { k: 'B', t: `两组样本数据的样本中位数相同` },
        { k: 'C', t: `两组样本数据的样本标准差相同` },
        { k: 'D', t: `两组样本数据的样本极差相同` }
      ],
      answer: 'CD',
      accept: [],
      solution: [
        `设原数据平均数为 $@overline{x}$，则新数据平均数为 $@overline{x}+c$，A 错。`,
        `中位数同样增加 $c$，B 错。`,
        `标准差刻画离散程度，整体平移不改变标准差，C 对。`,
        `极差为最大值减最小值，整体平移后极差不变，D 对。`,
        `选 CD。`
      ],
      hints: ['平移不改变数据的离散程度。', '平均数、中位数随平移变化，标准差、极差不变。'],
      pitfalls: ['认为中位数不变（实际也平移 $c$）。', '把极差与标准差混淆。'],
      takeaway: '数据整体加常数：均值、中位数平移，标准差、极差、方差不变。',
      knowledge: ['k-ps-stat']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知 $O$ 为坐标原点，点 $P_1(@cos@alpha,@sin@alpha)$，$P_2(@cos@beta,-@sin@beta)$，$P_3(@cos(@alpha+@beta),@sin(@alpha+@beta))$，$A(1,0)$，则`,
      options: [
        { k: 'A', t: `$|@overrightarrow{OP_1}|=|@overrightarrow{OP_2}|$` },
        { k: 'B', t: `$|@overrightarrow{AP_1}|=|@overrightarrow{AP_2}|$` },
        { k: 'C', t: `$@overrightarrow{OA}@cdot@overrightarrow{OP_3}=@overrightarrow{OP_1}@cdot@overrightarrow{OP_2}$` },
        { k: 'D', t: `$@overrightarrow{OA}@cdot@overrightarrow{OP_1}=@overrightarrow{OP_2}@cdot@overrightarrow{OP_3}$` }
      ],
      answer: 'AC',
      accept: [],
      solution: [
        `$|@overrightarrow{OP_1}|=|@overrightarrow{OP_2}|=1$，A 正确。`,
        `取 $@alpha=0$，$@beta=@frac@pi2$，则 $P_1=A$，$|AP_1|=0$，而 $|AP_2|=@sqrt2$，B 错误。`,
        `$@overrightarrow{OP_1}@cdot@overrightarrow{OP_2}=@cos@alpha@cos@beta-@sin@alpha@sin@beta=@cos(@alpha+@beta)=@overrightarrow{OA}@cdot@overrightarrow{OP_3}$，C 正确。`,
        `$@overrightarrow{OP_2}@cdot@overrightarrow{OP_3}=@cos(@alpha+2@beta)$，一般不等于 $@cos@alpha$；如 $@alpha=0,@beta=@frac@pi2$ 时分别为 $-1$ 和 $1$，D 错误。`,
        `选 AC。`
      ],
      hints: ['$P_1,P_2$ 都在单位圆上。', '判断恒等式可先化简，判断错误选项可举反例。'],
      pitfalls: ['把 $P_2$ 的坐标写成 $(@cos@beta,@sin@beta)$，忽略负号。', '用特殊值检验时选的点使式子恰好成立，得出错误结论。'],
      takeaway: '向量数量积与三角恒等变换结合：坐标化后直接用 $@cos(@alpha+@beta)$ 公式。',
      knowledge: ['k-vec-dot', 'k-tr-identity']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 4,
      stem: `已知点 $P$ 在圆 $(x-5)^2+(y-5)^2=16$ 上，点 $A(4,0)$，$B(0,2)$，则`,
      options: [
        { k: 'A', t: `点 $P$ 到直线 $AB$ 的距离小于 $10$` },
        { k: 'B', t: `点 $P$ 到直线 $AB$ 的距离大于 $2$` },
        { k: 'C', t: `当 $@angle PBA$ 最小时，$|PB|=3@sqrt2$` },
        { k: 'D', t: `当 $@angle PBA$ 最大时，$|PB|=3@sqrt2$` }
      ],
      answer: 'ACD',
      accept: [],
      solution: [
        `直线 $AB:x+2y-4=0$，圆心 $C(5,5)$，半径 $r=4$。`,
        `圆心到直线距离 $d=@frac{|5+10-4|}{@sqrt5}=@frac{11}{@sqrt5}>4$，故直线与圆相离，$P$ 到直线距离的范围为 $@left[@frac{11}{@sqrt5}-4,@frac{11}{@sqrt5}+4@right]@approx[0.92,8.92]$，A 对、B 错。`,
        `$|BC|=@sqrt{34}$，过 $B$ 的切线段长 $@sqrt{|BC|^2-r^2}=@sqrt{18}=3@sqrt2$。`,
        `当 $BP$ 与圆相切时 $@angle PBA$ 取得最值，两条切线对应的切点均在圆上，故最小、最大时都有 $|PB|=3@sqrt2$，C、D 对。`,
        `选 ACD。`
      ],
      hints: ['先求圆心到直线 $AB$ 的距离，判断直线与圆的位置关系。', '角度最值问题转化为切线问题。'],
      pitfalls: ['把圆心到直线的距离直接当成 $P$ 到直线距离的最值。', '认为两条切线对应的 $|PB|$ 不同。'],
      takeaway: '圆上动点到定直线距离：用圆心距加减半径；角度最值用切线。',
      knowledge: ['k-ag-line']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 2,
      stem: `已知函数 $f(x)=x^3(a@cdot2^x-2^{-x})$ 是偶函数，则 $a=$ ________ .`,
      answer: `$1$`,
      accept: ['1', 'a=1'],
      solution: [
        `$f(x)$ 为偶函数，故 $f(-x)=f(x)$ 对任意 $x$ 成立。`,
        `$f(-x)=-x^3(a@cdot2^{-x}-2^x)=x^3(2^x-a@cdot2^{-x})$。`,
        `与 $f(x)=x^3(a@cdot2^x-2^{-x})$ 比较同类项系数，得 $a=1$ 且 $-1=-a$，故 $a=1$。`
      ],
      hints: ['偶函数满足 $f(-x)=f(x)$ 对定义域内任意 $x$ 成立。', '分别比较 $2^x$ 与 $2^{-x}$ 的系数。'],
      pitfalls: ['只代一个特殊值就下结论（需恒等）。', '把 $(-x)^3$ 的负号漏掉。'],
      takeaway: '含参偶函数：写出 $f(-x)$，与 $f(x)$ 比较同类项系数。',
      knowledge: ['k-fn-prop']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 3,
      stem: `已知 $O$ 为坐标原点，抛物线 $C:y^2=2px$（$p>0$）的焦点为 $F$，$P$ 为 $C$ 上一点，$PF$ 与 $x$ 轴垂直，$Q$ 为 $x$ 轴上一点，且 $PQ@perp OP$。若 $|FQ|=6$，则 $C$ 的准线方程为 ________ .`,
      answer: `$x=-@frac{3}{2}$`,
      accept: ['x=-3/2', 'x=-1.5'],
      solution: [
        `由 $PF@perp x$ 轴知 $P$ 的横坐标为 $@frac p2$，代入 $y^2=2px$ 得 $|y_P|=p$，取 $P@left(@frac p2,p@right)$。`,
        `$k_{OP}=@frac{p}{p/2}=2$，由 $PQ@perp OP$ 得 $k_{PQ}=-@frac12$。`,
        `设 $Q(q,0)$，则 $@frac{0-p}{q-p/2}=-@frac12$，解得 $q=@frac{5p}{2}$。`,
        `$|FQ|=q-@frac p2=2p=6$，故 $p=3$，准线为 $x=-@frac p2=-@frac32$。`
      ],
      hints: ['$PF@perp x$ 轴说明 $P$ 的横坐标等于焦点横坐标。', '先用 $PQ@perp OP$ 求 $Q$ 的横坐标，再用 $|FQ|=6$。'],
      pitfalls: ['把抛物线准线写成 $x=-p$（应为 $x=-@frac p2$）。', '求 $PQ$ 斜率时把垂直关系写成斜率相等。'],
      takeaway: '抛物线几何性质：焦半径垂直 $x$ 轴时 $P$ 的纵坐标为 $@pm p$，垂直关系用斜率乘积 $-1$。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 2,
      stem: `用数字 $1,2,3,4,5,6$ 组成没有重复数字的六位数，其中个位数字小于十位数字的六位数的个数是 ________ .`,
      answer: `$360$`,
      accept: ['360'],
      solution: [
        `不考虑个位与十位的大小关系，$1,2,3,4,5,6$ 的排列共 $6!=720$ 个。`,
        `在每一个排列中，个位与十位数字不同，其中个位小于十位与个位大于十位的排列各占一半。`,
        `故所求个数为 $@frac{720}{2}=360$。`
      ],
      hints: ['先算所有六位数的个数 $6!$。', '个位与十位数字大小关系对称。'],
      pitfalls: ['把“个位小于十位”与“个位大于十位”的个数算得不一样。', '忘记数字不能重复。'],
      takeaway: '对称计数：全排列中个位与十位的大小关系各占一半。',
      knowledge: ['k-count']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `记 $@triangle ABC$ 的内角 $A,B,C$ 的对边分别为 $a,b,c$，已知 $b^2=ac$，点 $D$ 在边 $AC$ 上，且 $BD@sin@angle ABC=a@sin C$。（1）证明：$BD=b$；（2）若 $AD=2DC$，求 $@cos@angle ABC$。`,
      answer: `（1）证明见解析；（2）$@frac{7}{12}$`,
      accept: [],
      solution: [
        `（1）由 $b^2=ac$ 及正弦定理得 $@sin^2B=@sin A@sin C$。`,
        `在 $@triangle ABC$ 中，$a=@frac{b@sin A}{@sin B}$，代入 $BD@sin B=a@sin C$ 得 $BD=@frac{a@sin C}{@sin B}=@frac{b@sin A@sin C}{@sin^2B}=b$。`,
        `（2）由 $AD=2DC$ 得 $AD=@frac{2b}{3}$，$DC=@frac{b}{3}$。设 $@angle ADB=@theta$，在 $@triangle ABD$ 与 $@triangle CBD$ 中分别用余弦定理：`,
        `$c^2=b^2+@frac{4b^2}{9}-@frac{4b^2}{3}@cos@theta$，$a^2=b^2+@frac{b^2}{9}+@frac{2b^2}{3}@cos@theta$。`,
        `令 $u=@frac ab$，$v=@frac cb$，则 $uv=1$，且 $u^2=@frac{10}{9}+@frac{2}{3}@cos@theta$，$v^2=@frac{13}{9}-@frac{4}{3}@cos@theta$。消去 $@cos@theta$ 得 $6u^4-11u^2+3=0$，解得 $u^2=@frac32$ 或 $u^2=@frac13$。`,
        `若 $u^2=@frac13$，则 $v^2=3$，$@cos B=@frac{a^2+c^2-b^2}{2ac}=@frac76>1$，舍去；故 $u^2=@frac32$，$v^2=@frac23$，$@cos B=@frac{7}{12}$。`
      ],
      hints: ['第 (1) 问用正弦定理把边统一成正弦。', '第 (2) 问在两个三角形中分别用余弦定理，注意两角互补。', '把 $@frac ab,@frac cb$ 设成变量，利用 $b^2=ac$ 得到乘积为 $1$。'],
      pitfalls: ['第 (1) 问直接由 $b^2=ac$ 得出 $BD=b$，缺少正弦定理过渡。', '第 (2) 问忘记 $@angle CDB=@pi-@angle ADB$，余弦符号写错。', '解出两个 $u^2$ 后不检验 $@cos B@le1$。'],
      takeaway: '解三角形：边角混合条件先用正弦定理统一，双三角形问题用余弦定理并注意补角。',
      knowledge: ['k-tr-solve']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 3,
      stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_1=1$，$a_{n+1}=a_n+1$（$n$ 为奇数），$a_{n+1}=a_n+2$（$n$ 为偶数）。（1）记 $b_n=a_{2n}$，写出 $b_1,b_2$，并求数列 $@left@{b_n@right@}$ 的通项公式；（2）求 $@left@{a_n@right@}$ 的前 $20$ 项和。`,
      answer: `（1）$b_1=2$，$b_2=5$，$b_n=3n-1$；（2）$300$`,
      accept: [],
      solution: [
        `由 $a_1=1$ 得 $a_2=a_1+1=2$，$a_3=a_2+2=4$，故 $b_1=a_2=2$，$b_2=a_4=a_3+1=5$。`,
        `因为 $a_{2n+2}=a_{2n+1}+2=(a_{2n}+1)+2=a_{2n}+3$，所以 $b_{n+1}=b_n+3$。`,
        `故 $@left@{b_n@right@}$ 是首项为 $2$、公差为 $3$ 的等差数列，$b_n=3n-1$。`,
        `（2）由 $b_n=a_{2n}=3n-1$ 及 $a_{2n-1}=a_{2n}-1=3n-2$，得前 $20$ 项和`,
        `$S_{20}=@sum_{n=1}^{10}(a_{2n-1}+a_{2n})=@sum_{n=1}^{10}(6n-3)=6@cdot@frac{10@times11}{2}-30=300$。`
      ],
      hints: ['先算前几项找出 $b_n$ 的规律。', '由 $a_{2n+2}$ 与 $a_{2n}$ 的关系证明等差。', '求前 $20$ 项和时按奇偶项配对。'],
      pitfalls: ['把 $n$ 为奇数、偶数对应的递推式用反。', '求 $b_n$ 时首项或公差算错。', '求和时项数误算成 $20$ 项而不是 $10$ 对。'],
      takeaway: '分段递推数列：先算前几项找规律，再按奇偶项分组求和。',
      knowledge: ['k-seq-recursion', 'k-seq-sum']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 4,
      stem: `在三棱锥 $A-BCD$ 中，平面 $ABD@perp$ 平面 $BCD$，$AB=AD$，$O$ 为 $BD$ 的中点。（1）证明：$OA@perp CD$；（2）若 $@triangle OCD$ 是边长为 $1$ 的等边三角形，点 $E$ 在棱 $AD$ 上，$DE=2EA$，且二面角 $E-BC-D$ 的大小为 $45@circ$，求三棱锥 $A-BCD$ 的体积。`,
      answer: `（1）证明见解析；（2）$@frac{@sqrt3}{6}$`,
      accept: [],
      solution: [
        `（1）因为 $AB=AD$，$O$ 为 $BD$ 中点，所以 $AO@perp BD$。`,
        `又平面 $ABD@perp$ 平面 $BCD$，交线为 $BD$，$AO@subset$ 平面 $ABD$，故 $AO@perp$ 平面 $BCD$，从而 $AO@perp CD$。`,
        `（2）以 $O$ 为原点，$OB$ 所在直线为 $x$ 轴，平面 $BCD$ 内过 $O$ 且垂直于 $BD$ 的直线为 $y$ 轴，$OA$ 为 $z$ 轴建系。由 $@triangle OCD$ 为边长 $1$ 的等边三角形，$OD=1$，取 $B(-1,0,0)$，$D(1,0,0)$，$C@left(@frac12,@frac{@sqrt3}{2},0@right)$，$A(0,0,h)$。`,
        `由 $DE=2EA$ 得 $E@left(@frac13,0,@frac{2h}{3}@right)$。平面 $BCD$ 的法向量 $@vec n_1=(0,0,1)$；平面 $EBC$ 的法向量可取 $@vec n_2=(@sqrt3h,-3h,-2@sqrt3)$。`,
        `由 $|@cos45@circ|=@frac{|@vec n_1@cdot@vec n_2|}{|@vec n_1||@vec n_2|}=@frac{1}{@sqrt{h^2+1}}=@frac{@sqrt2}{2}$ 得 $h=1$。`,
        `$S_{@triangle BCD}=@frac12@cdot BD@cdot@frac{@sqrt3}{2}=@frac{@sqrt3}{2}$，故 $V=@frac13@cdot@frac{@sqrt3}{2}@cdot1=@frac{@sqrt3}{6}$。`
      ],
      hints: ['第 (1) 问用面面垂直的性质：垂直于交线的直线垂直于另一个平面。', '第 (2) 问建立空间直角坐标系，用二面角求高。', '注意 $E$ 分 $AD$ 的比是 $DE:EA=2:1$。'],
      pitfalls: ['第 (1) 问只由 $AB=AD$ 得 $AO@perp BD$，忘记说明 $AO@perp$ 平面 $BCD$。', '第 (2) 问 $E$ 的坐标按 $1:2$ 写反。', '把二面角的余弦值直接当成 $@cos45@circ$ 而不加绝对值。'],
      takeaway: '面面垂直转化为线面垂直；二面角问题建系后用法向量，注意夹角取绝对值。',
      knowledge: ['k-so-solid', 'k-so-angle']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 4,
      stem: `已知点 $F_1(-@sqrt{17},0)$，$F_2(@sqrt{17},0)$，点 $M$ 满足 $|MF_1|-|MF_2|=2$，记 $M$ 的轨迹为 $C$。（1）求 $C$ 的方程；（2）设 $T$ 在直线 $x=@frac12$ 上，过 $T$ 的两条直线分别交 $C$ 于 $A,B$ 两点和 $P,Q$ 两点，且 $|TA|@cdot|TB|=|TP|@cdot|TQ|$，求直线 $AB$ 的斜率与直线 $PQ$ 的斜率之和。`,
      answer: `（1）$x^2-@frac{y^2}{16}=1$（$x@ge1$）；（2）$0$`,
      accept: [],
      solution: [
        `（1）由 $|MF_1|-|MF_2|=2$ 知 $2a=2$，$a=1$；又 $c=@sqrt{17}$，故 $b^2=c^2-a^2=16$。`,
        `因为差为正，$M$ 在靠近 $F_2$ 的右支上，所以 $C:x^2-@frac{y^2}{16}=1$（$x@ge1$）。`,
        `（2）设 $T@left(@frac12,t@right)$，直线 $AB$ 的斜率为 $k_1$，取其上的点 $@left(@frac12+@lambda,t+k_1@lambda@right)$ 代入 $C$，得 $(16-k_1^2)@lambda^2+(16-2tk_1)@lambda-(t^2+12)=0$。`,
        `设两交点对应 $@lambda_1,@lambda_2$。因交点都在右支上，$@lambda_i@ge@frac12$，故 $@lambda_1@lambda_2=@frac{t^2+12}{k_1^2-16}>0$，即 $k_1^2>16$，且 $|TA||TB|=(1+k_1^2)@lambda_1@lambda_2=@frac{(1+k_1^2)(t^2+12)}{k_1^2-16}$。`,
        `对直线 $PQ$ 的斜率 $k_2$ 同理有 $|TP||TQ|=@frac{(1+k_2^2)(t^2+12)}{k_2^2-16}$。`,
        `由两式相等得 $(1+k_1^2)(k_2^2-16)=(1+k_2^2)(k_1^2-16)$，化简得 $k_1^2=k_2^2$；两直线不同，故 $k_1=-k_2$，即斜率之和为 $0$。`
      ],
      hints: ['第 (1) 问用双曲线定义，注意取右支。', '第 (2) 问设参数 $@lambda$，把交点转化为二次方程的两根。', '两交点都在右支上，故两根同号且为正。'],
      pitfalls: [
        `第 (1) 问忘记写 $x@ge1$，把整条双曲线当成轨迹。`,
        `第 (2) 问把距离乘积写成 $@lambda_1@lambda_2$，漏掉 $1+k_1^2$ 因子。`,
        `由 $k_1^2=k_2^2$ 得出 $k_1=k_2$，忘记两直线不同应取 $k_1=-k_2$。`
      ],
      takeaway: '直线与圆锥曲线交点距离积：用参数方程把点写成 $T+@lambda@vec v$，距离乘 $|@vec v|$，再用韦达定理。',
      knowledge: ['k-ag-conic', 'k-ag-chord']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 5,
      stem: `已知函数 $f(x)=x(1-@ln x)$。若两个不相等的正数 $u,v$ 满足 $f(u)=f(v)$，则称 $(u,v)$ 为 $f$ 的一对“平衡点”。（1）求 $f(x)$ 的单调区间及最大值；（2）证明：$f$ 的每一对平衡点 $(u,v)$ 中，一个在 $(0,1)$ 内，另一个在 $(1,e)$ 内；（3）设 $a,b$ 为两个不相等的正数，且 $b@ln a-a@ln b=a-b$，证明：$2<@frac1a+@frac1b<e$。`,
      answer: `（1）$f(x)$ 在 $(0,1)$ 上单调递增，在 $(1,+@infty)$ 上单调递减，最大值为 $1$；（2）证明见解析；（3）证明见解析`,
      accept: [],
      solution: [
        `（1）定义域为 $(0,+@infty)$，$f'(x)=1-(@ln x+1)=-@ln x$。当 $0<x<1$ 时 $f'(x)>0$，当 $x>1$ 时 $f'(x)<0$，故 $f(x)$ 在 $(0,1)$ 上递增、在 $(1,+@infty)$ 上递减，最大值为 $f(1)=1$。`,
        `（2）设 $u<v$ 且 $f(u)=f(v)$。若 $u,v$ 同属 $(0,1)$ 或同属 $(1,+@infty)$，则与 $f$ 在该区间上严格单调矛盾，故 $u<1<v$。`,
        `又 $u@in(0,1)$ 时 $f(u)>0$，故 $f(v)>0$，即 $v(1-@ln v)>0$，结合 $v>1$ 得 $v<e$，即 $v@in(1,e)$。`,
        `（3）令 $u=@frac1a$，$v=@frac1b$，则 $u@ne v$。将条件两边同除以 $ab$，得 $-u@ln u+v@ln v=v-u$，即 $u(1-@ln u)=v(1-@ln v)$，亦即 $f(u)=f(v)$，由（2）不妨设 $u<1<v<e$。`,
        `设 $F(x)=f(2-x)-f(x)$（$0<x<1$），则 $F'(x)=@ln[x(2-x)]<0$，$F(1)=0$，故 $F(x)>0$，即 $f(2-u)>f(v)$；由 $f$ 在 $(1,+@infty)$ 上递减得 $v>2-u$，所以 $u+v>2$。`,
        `设 $G(x)=f(x)-f(e-x)$（$0<x<1$），则 $G'(x)=-@ln[x(e-x)]$。因 $x(e-x)$ 在 $(0,1)$ 上递增，故 $G$ 在 $(0,1)$ 上先增后减，结合 $G(0^+)=0$、$G(1)>0$ 得 $G(x)>0$，即 $f(u)>f(e-u)$；由 $f$ 在 $(1,+@infty)$ 上递减得 $v<e-u$，所以 $u+v<e$。综上，$2<@frac1a+@frac1b<e$。`
      ],
      hints: ['第 (1) 问先求导，注意定义域为 $(0,+@infty)$。', '第 (2) 问用单调性说明两个变量分居 $1$ 的两侧，再用 $f(u)>0$ 定出上界。', '第 (3) 问令 $u=@frac1a,v=@frac1b$，把条件化为 $f(u)=f(v)$，再用极值点偏移构造 $f(2-x)-f(x)$ 与 $f(x)-f(e-x)$。'],
      pitfalls: ['第 (1) 问漏写定义域。', '第 (2) 问只说 $u@ne v$ 而没有说明二者必分居 $1$ 的两侧。', '第 (3) 问证明 $u+v<e$ 时没有说明 $e-u>1$，不能直接使用单调性。'],
      takeaway: '新定义“平衡点”本质是 $f(u)=f(v)$：先由单调性定位两侧，再用对称差函数比较，完成极值点偏移。',
      knowledge: ['k-dv-monotone', 'k-dv-ineq', 'k-dv-extreme']
    }
  ]
});
