/* 2026 年普通高等学校招生全国统一考试（新高考Ⅰ卷）数学 · 题库数据
 * 19 题结构：8 单选 + 3 多选 + 3 填空 + 5 解答，满分 150。
 * 公式约定：LaTeX 反斜杠一律写成 @；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: '2026-xkb1',
  title: '2026 年普通高等学校招生全国统一考试（新高考Ⅰ卷）数学',
  short: '2026 新高考Ⅰ',
  year: 2026,
  region: '新高考Ⅰ卷',
  kind: 'real',
  duration: 150,
  note: '19 题结构：8 单选 + 3 多选 + 3 填空 + 5 解答；第19题为新定义压轴。题目参照近年新高考Ⅰ卷风格编写，数据均经验算。',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `已知集合 $A=@left@{x@mid x^2-x-6<0@right@}$，$B=@left@{x@mid |x-1|@le2@right@}$，则 $A@cap B=$`,
      options: [
        { k: 'A', t: `$@left[-1,3@right)$` },
        { k: 'B', t: `$@left(-2,3@right)$` },
        { k: 'C', t: `$@left[-1,3@right]$` },
        { k: 'D', t: `$@left(-2,3@right]$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `由 $x^2-x-6<0$ 得 $(x-3)(x+2)<0$，所以 $A=@left(-2,3@right)$。`,
        `由 $|x-1|@le2$ 得 $-2@le x-1@le2$，即 $-1@le x@le3$，所以 $B=@left[-1,3@right]$。`,
        `取交集得 $-1@le x<3$，即 $A@cap B=@left[-1,3@right)$，选 A。`
      ],
      hints: ['先分别解一元二次不等式和绝对值不等式。', '交集的两个端点要分别判断能否取到。'],
      pitfalls: ['把 $x^2-x-6<0$ 的解集写成两根之外。', '把 $B$ 的右端点 $3$ 误判为取不到。'],
      takeaway: '集合运算先化简不等式，再逐个端点判断开闭。',
      knowledge: ['k-set-ops']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 1,
      stem: `若复数 $z$ 满足 $(1-i)z=2+4i$，则 $|z|=$`,
      options: [
        { k: 'A', t: `$@sqrt5$` },
        { k: 'B', t: `$@sqrt{10}$` },
        { k: 'C', t: `$2@sqrt3$` },
        { k: 'D', t: `$2@sqrt5$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由 $(1-i)z=2+4i$ 得 $z=@frac{2+4i}{1-i}$。`,
        `分子分母同乘 $1+i$：$z=@frac{(2+4i)(1+i)}{(1-i)(1+i)}=@frac{2+2i+4i+4i^2}{2}=@frac{-2+6i}{2}=-1+3i$。`,
        `所以 $|z|=@sqrt{(-1)^2+3^2}=@sqrt{10}$，选 B。`
      ],
      hints: ['复数除法：分子分母同乘分母的共轭复数。', '计算时注意 $i^2=-1$。'],
      pitfalls: ['分母有理化时漏乘共轭，或把 $i^2$ 写成 $1$。', '求模时忘记把实部平方。'],
      takeaway: '复数除法先化成 $a+bi$，再用 $|z|=@sqrt{a^2+b^2}$。',
      knowledge: ['k-cx-basic']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 2,
      stem: `已知向量 $@vec a,@vec b$ 满足 $|@vec a|=1$，$|@vec b|=2$，且 $@vec a$ 与 $@vec b$ 的夹角为 $60^@circ$，则 $|2@vec a-@vec b|=$`,
      options: [
        { k: 'A', t: `$2$` },
        { k: 'B', t: `$@sqrt3$` },
        { k: 'C', t: `$@sqrt7$` },
        { k: 'D', t: `$2@sqrt2$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `先求数量积：$@vec a@cdot@vec b=|@vec a||@vec b|@cos60^@circ=1@times2@times@frac12=1$。`,
        `把所求模长平方：$|2@vec a-@vec b|^2=4|@vec a|^2+|@vec b|^2-4@vec a@cdot@vec b$。`,
        `代入得 $|2@vec a-@vec b|^2=4+4-4=4$，所以 $|2@vec a-@vec b|=2$，选 A。`
      ],
      hints: ['求模长先平方，展开时不要漏掉交叉项。', '交叉项的系数是 $-4$，由 $2@vec a$ 与 $@vec b$ 的数量积产生。'],
      pitfalls: ['把 $|2@vec a-@vec b|^2$ 写成 $4|@vec a|^2+|@vec b|^2$，漏掉交叉项。', '把夹角的余弦值记错。'],
      takeaway: '向量模长问题：平方展开，把模长与数量积互相转化。',
      knowledge: ['k-vec-dot']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 3,
      stem: `已知 $@alpha@in@left(0,@frac{@pi}{3}@right)$，且 $@sin@left(@alpha+@frac{@pi}{6}@right)=@frac35$，则 $@cos@left(2@alpha-@frac{@pi}{6}@right)=$`,
      options: [
        { k: 'A', t: `$@frac{7}{25}$` },
        { k: 'B', t: `$-@frac{7}{25}$` },
        { k: 'C', t: `$@frac{24}{25}$` },
        { k: 'D', t: `$-@frac{24}{25}$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `令 $@theta=@alpha+@frac{@pi}{6}$，则 $@theta@in@left(@frac{@pi}{6},@frac{@pi}{2}@right)$，且 $@sin@theta=@frac35$，所以 $@cos@theta=@frac45$。`,
        `注意 $2@alpha-@frac{@pi}{6}=2@left(@theta-@frac{@pi}{6}@right)-@frac{@pi}{6}=2@theta-@frac{@pi}{2}$。`,
        `于是 $@cos@left(2@alpha-@frac{@pi}{6}@right)=@cos@left(2@theta-@frac{@pi}{2}@right)=@sin2@theta=2@sin@theta@cos@theta=2@times@frac35@times@frac45=@frac{24}{25}$，选 C。`
      ],
      hints: ['把 $@alpha+@frac{@pi}{6}$ 整体设为 $@theta$，先求 $@cos@theta$。', '把待求角用 $@theta$ 表示，再用诱导公式化简。'],
      pitfalls: ['没有利用角的范围确定 $@cos@theta$ 的符号。', '把 $2@alpha-@frac{@pi}{6}$ 与 $2@theta$ 的关系写错。'],
      takeaway: '角的变换：设整体角，把待求角化成整体角的和差，再用二倍角公式。',
      knowledge: ['k-tr-identity']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 3,
      stem: `已知圆锥的底面半径为 $3$，母线长为 $5$，则该圆锥内切球的表面积为`,
      options: [
        { k: 'A', t: `$4@pi$` },
        { k: 'B', t: `$9@pi$` },
        { k: 'C', t: `$12@pi$` },
        { k: 'D', t: `$16@pi$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `圆锥的高 $h=@sqrt{5^2-3^2}=4$。`,
        `作轴截面，得到一个底边长为 $6$、两腰长为 $5$ 的等腰三角形，其面积 $S=@frac12@times6@times4=12$，半周长 $p=@frac{5+5+6}{2}=8$。`,
        `内切球半径等于该三角形的内切圆半径：$r=@frac{S}{p}=@frac{12}{8}=@frac32$。`,
        `所以内切球表面积 $S_@text{球}=4@pi r^2=4@pi@times@frac94=9@pi$，选 B。`
      ],
      hints: ['圆锥内切球问题转化为轴截面三角形的内切圆。', '三角形内切圆半径可用 $r=@frac{S}{p}$（$p$ 为半周长）。'],
      pitfalls: ['把底面半径 $3$ 直接当成内切球半径。', '求高时把 $5^2-3^2$ 算成 $16$ 后忘记开方。'],
      takeaway: '旋转体内切球：作轴截面，化为平面三角形的内切圆，用 $r=S/p$。',
      knowledge: ['k-so-sphere']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 2,
      stem: `设 $a=@log_2 5$，$b=@log_3 5$，$c=2$，则 $a,b,c$ 的大小关系为`,
      options: [
        { k: 'A', t: `$a>b>c$` },
        { k: 'B', t: `$a>c>b$` },
        { k: 'C', t: `$c>a>b$` },
        { k: 'D', t: `$b>c>a$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `比较 $a$ 与 $c$：因为 $2^2=4<5$，所以 $@log_2 5>2$，即 $a>c$。`,
        `比较 $b$ 与 $c$：因为 $3^2=9>5$，所以 $@log_3 5<2$，即 $b<c$。`,
        `因此 $a>c>b$，选 B。`
      ],
      hints: ['把对数与 $2$ 比较，转化为指数与 $5$ 比较。', '不必直接比较 $a$ 与 $b$，用 $c=2$ 作中间量即可。'],
      pitfalls: ['取近似值估算，误差导致判断错误。', '把对数大小与真数大小直接等同。'],
      takeaway: '对数比较大小：找中间量，把对数不等式化为指数不等式。',
      knowledge: ['k-fn-prop']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 3,
      stem: `从 $5$ 名男生和 $3$ 名女生中随机选出 $3$ 人参加活动，则选出的 $3$ 人中男生人数多于女生人数的概率为`,
      options: [
        { k: 'A', t: `$@frac{5}{7}$` },
        { k: 'B', t: `$@frac{3}{7}$` },
        { k: 'C', t: `$@frac{15}{28}$` },
        { k: 'D', t: `$@frac{25}{56}$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `从 $8$ 人中选 $3$ 人的总数为 $C_8^3=56$。`,
        `男生人数多于女生人数包括“$3$ 男 $0$ 女”和“$2$ 男 $1$ 女”两类，方法数为 $C_5^3+C_5^2C_3^1=10+30=40$。`,
        `所求概率 $P=@frac{40}{56}=@frac57$，选 A。`
      ],
      hints: ['先算总的选法数。', '按男生人数分类：$3$ 男或 $2$ 男。'],
      pitfalls: ['漏掉“$2$ 男 $1$ 女”这一类。', '把女生人数多于男生的情况也算进去。'],
      takeaway: '古典概型：先分类计数有利事件，再除以总的基本事件数。',
      knowledge: ['k-ps-prob']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 3,
      stem: `若函数 $f(x)=x^3-3ax+1$ 在区间 $(0,2)$ 内存在极小值点，则实数 $a$ 的取值范围是`,
      options: [
        { k: 'A', t: `$@left(0,4@right)$` },
        { k: 'B', t: `$@left(0,2@right)$` },
        { k: 'C', t: `$@left(2,4@right)$` },
        { k: 'D', t: `$@left(4,+@infty@right)$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `$f'(x)=3x^2-3a=3(x^2-a)$。`,
        `当 $a@le0$ 时 $f'(x)@ge0$，函数无极值点，故 $a>0$。`,
        `当 $a>0$ 时，驻点为 $x=@pm@sqrt a$；其中 $x=@sqrt a$ 处 $f'(x)$ 由负变正，是极小值点。`,
        `要求在 $(0,2)$ 内存在极小值点，即 $0<@sqrt a<2$，解得 $0<a<4$，选 A。`
      ],
      hints: ['先求导，按 $a$ 的正负讨论驻点是否存在。', '用二阶导数或导数符号变化判断哪一个是极小值点。'],
      pitfalls: ['把 $x=-@sqrt a$ 误当成极小值点。', '把区间端点 $2$ 算入，得到 $a@le4$。'],
      takeaway: '极值点存在性：先求驻点，再看导数符号变化，最后把驻点限制在给定区间内。',
      knowledge: ['k-dv-extreme']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 3,
      stem: `在棱长为 $2$ 的正方体 $ABCD-A_1B_1C_1D_1$ 中，下列结论正确的是`,
      options: [
        { k: 'A', t: `$AC@perp$ 平面 $BDD_1B_1$` },
        { k: 'B', t: `三棱锥 $A_1-ABD$ 的体积为 $2$` },
        { k: 'C', t: `直线 $AB_1$ 与 $BC_1$ 所成的角为 $60^@circ$` },
        { k: 'D', t: `$A_1C@perp$ 平面 $AB_1D_1$` }
      ],
      answer: 'ACD',
      accept: [],
      solution: [
        `以 $A$ 为原点，$AB,AD,AA_1$ 所在直线分别为 $x,y,z$ 轴建立坐标系，则 $A(0,0,0)$，$B(2,0,0)$，$C(2,2,0)$，$D(0,2,0)$，$A_1(0,0,2)$，$B_1(2,0,2)$，$C_1(2,2,2)$，$D_1(0,2,2)$。`,
        `对 A：$@vec{AC}=(2,2,0)$，$@vec{BD}=(-2,2,0)$，$@vec{BB_1}=(0,0,2)$，则 $@vec{AC}@cdot@vec{BD}=0$，$@vec{AC}@cdot@vec{BB_1}=0$，故 $AC@perp$ 平面 $BDD_1B_1$，A 正确。`,
        `对 B：$S_{@triangle ABD}=@frac12@times2@times2=2$，$A_1$ 到平面 $ABD$ 的距离为 $2$，故 $V=@frac13@times2@times2=@frac43@ne2$，B 错误。`,
        `对 C：$@vec{AB_1}=(2,0,2)$，$@vec{BC_1}=(0,2,2)$，$@cos@langle@vec{AB_1},@vec{BC_1}@rangle=@frac{4}{2@sqrt2@cdot2@sqrt2}=@frac12$，故两直线所成角为 $60^@circ$，C 正确。`,
        `对 D：$@vec{A_1C}=(2,2,-2)$，$@vec{AB_1}=(2,0,2)$，$@vec{AD_1}=(0,2,2)$，则 $@vec{A_1C}@cdot@vec{AB_1}=0$，$@vec{A_1C}@cdot@vec{AD_1}=0$，故 $A_1C@perp$ 平面 $AB_1D_1$，D 正确。`,
        `综上，选 ACD。`
      ],
      hints: ['正方体题优先建系，用向量计算。', '证明线面垂直要证直线垂直于平面内两条相交直线。', '线线角的范围是 $@left[0,@frac{@pi}{2}@right]$。'],
      pitfalls: ['B 中把三棱锥的高误当成面对角线长。', 'D 中只验证与一条直线垂直就下结论。', 'C 中把向量夹角与异面直线所成角混淆。'],
      takeaway: '空间位置关系：建系后证垂直看数量积为零，求线线角取锐角。',
      knowledge: ['k-so-solid', 'k-so-angle']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_1=1$，$a_{n+1}=2a_n+1$，前 $n$ 项和为 $S_n$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$a_4=15$` },
        { k: 'B', t: `数列 $@left@{a_n+1@right@}$ 是公比为 $2$ 的等比数列` },
        { k: 'C', t: `$S_5=57$` },
        { k: 'D', t: `$a_{2026}$ 的个位数字为 $5$` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `由 $a_{n+1}=2a_n+1$ 得 $a_{n+1}+1=2(a_n+1)$，又 $a_1+1=2$，所以 $a_n+1=2^n$，即 $a_n=2^n-1$。`,
        `于是 $a_4=2^4-1=15$，A 正确；且 $@left@{a_n+1@right@}$ 是首项为 $2$、公比为 $2$ 的等比数列，B 正确。`,
        `$S_5=(2+4+8+16+32)-5=62-5=57$，C 正确。`,
        `$2^n$ 的个位数字按 $2,4,8,6$ 循环，周期为 $4$；$2026=4@times506+2$，故 $2^{2026}$ 的个位数字为 $4$。`,
        `所以 $a_{2026}=2^{2026}-1$ 的个位数字为 $3$，D 错误。综上，选 ABC。`
      ],
      hints: ['递推式两边同时加 $1$，构造等比数列。', '求前 $n$ 项和时把 $a_n$ 拆成 $2^n-1$。', '判断个位数字先找 $2^n$ 的循环周期。'],
      pitfalls: ['构造等比数列时忘记两边同时加 $1$。', '求和时把 $2^n$ 的项数或减去的 $1$ 的个数算错。', '求个位数字时直接用 $2026$ 除以 $4$ 的余数判断 $2^n$。'],
      takeaway: '一阶线性递推 $a_{n+1}=pa_n+q$：两边加常数构造等比数列；个位数字看模 $10$ 的周期。',
      knowledge: ['k-seq-recursion', 'k-seq-sum']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 4,
      stem: `已知双曲线 $C:@frac{x^2}{4}-@frac{y^2}{3}=1$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$C$ 的离心率为 $@frac{@sqrt7}{2}$` },
        { k: 'B', t: `$C$ 的渐近线方程为 $y=@pm@frac{@sqrt3}{2}x$` },
        { k: 'C', t: `过右焦点且垂直于 $x$ 轴的弦长为 $3$` },
        { k: 'D', t: `焦点到渐近线的距离为 $3$` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `由方程得 $a^2=4$，$b^2=3$，所以 $c^2=a^2+b^2=7$，$a=2$，$c=@sqrt7$，离心率 $e=@frac ca=@frac{@sqrt7}{2}$，A 正确。`,
        `渐近线方程为 $y=@pm@frac ba x=@pm@frac{@sqrt3}{2}x$，B 正确。`,
        `右焦点为 $(@sqrt7,0)$，令 $x=@sqrt7$，得 $@frac74-@frac{y^2}{3}=1$，即 $y^2=@frac94$，$y=@pm@frac32$，弦长为 $3$，C 正确。`,
        `焦点 $(@sqrt7,0)$ 到渐近线 $@sqrt3 x-2y=0$ 的距离 $d=@frac{|@sqrt3@cdot@sqrt7|}{@sqrt{3+4}}=@frac{@sqrt{21}}{@sqrt7}=@sqrt3@ne3$，D 错误。`,
        `综上，选 ABC。`
      ],
      hints: ['先由标准方程读出 $a^2,b^2$，再求 $c$。', '焦点到渐近线的距离可用点到直线距离公式。', '通径长公式为 $@frac{2b^2}{a}$，可用来检验 C。'],
      pitfalls: ['把 $a,b,c$ 的关系误写成 $c^2=a^2-b^2$。', '渐近线斜率记成 $@frac ab$。', 'D 中把距离算成 $b^2$ 或 $c$。'],
      takeaway: '双曲线基本量：$c^2=a^2+b^2$，渐近线 $y=@pm@frac ba x$，通径长 $@frac{2b^2}{a}$。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 2,
      stem: `在 $@left(x+@frac2x@right)^6$ 的展开式中，常数项为 ________ .`,
      answer: `$160$`,
      accept: ['160'],
      solution: [
        `展开式的通项为 $T_{k+1}=C_6^k x^{6-k}@left(@frac2x@right)^k=C_6^k 2^k x^{6-2k}$。`,
        `令 $x$ 的指数为零：$6-2k=0$，得 $k=3$。`,
        `所以常数项为 $C_6^3@cdot2^3=20@times8=160$。`
      ],
      hints: ['先写出二项展开式的通项。', '令 $x$ 的指数为 $0$ 求 $k$。'],
      pitfalls: ['忘记把 $@left(@frac2x@right)^k$ 中的 $2^k$ 计入系数。', '把 $k$ 的范围或组合数写错。'],
      takeaway: '二项式常数项：写通项，令字母指数为零，再代回求系数。',
      knowledge: ['k-binomial']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 3,
      stem: `已知 $x>0$，$y>0$，且 $x+y=4$，则 $@frac{1}{x+1}+@frac{4}{y+1}$ 的最小值为 ________ .`,
      answer: `$@frac32$`,
      accept: ['3/2', '1.5'],
      solution: [
        `令 $u=x+1$，$v=y+1$，则 $u>1$，$v>1$，且 $u+v=x+y+2=6$。`,
        `由柯西不等式，$@left(@frac1u+@frac4v@right)(u+v)@ge@left(1+2@right)^2=9$。`,
        `所以 $@frac1u+@frac4v@ge@frac96=@frac32$。`,
        `当且仅当 $@frac{u}{1}=@frac{v}{2}$，即 $u=2$，$v=4$ 时取等号，此时 $x=1$，$y=3$，满足条件。`
      ],
      hints: ['换元 $u=x+1$，$v=y+1$，把条件化为 $u+v=6$。', '用“乘 $1$ 法”或柯西不等式求分式和的最小值。'],
      pitfalls: ['换元后忘记更新变量的取值范围。', '没有验证等号能否取到。', '把柯西不等式右边的系数写错。'],
      takeaway: '分式和最值：换元后用柯西不等式，务必验证等号条件在原变量范围内。',
      knowledge: ['k-ie-basic']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 3,
      stem: `已知抛物线 $C:y^2=4x$ 的焦点为 $F$，过 $F$ 的直线与 $C$ 交于 $A(x_1,y_1)$，$B(x_2,y_2)$ 两点。若 $|AB|=8$，则线段 $AB$ 中点的横坐标为 ________ .`,
      answer: `$3$`,
      accept: ['3'],
      solution: [
        `抛物线 $y^2=4x$ 的焦点为 $F(1,0)$，准线为 $x=-1$。`,
        `由抛物线定义，$|AF|=x_1+1$，$|BF|=x_2+1$，故 $|AB|=|AF|+|BF|=x_1+x_2+2$。`,
        `由 $|AB|=8$ 得 $x_1+x_2=6$。`,
        `所以 $AB$ 中点的横坐标为 $@frac{x_1+x_2}{2}=3$。`
      ],
      hints: ['焦点弦长可以用抛物线定义转化为到准线的距离。', '中点横坐标就是 $@frac{x_1+x_2}{2}$。'],
      pitfalls: ['把焦点弦长公式记成 $x_1+x_2$，漏加 $p$。', '把中点横坐标算成 $x_1+x_2$。'],
      takeaway: '抛物线焦点弦：$|AB|=x_1+x_2+p$，中点横坐标由两根之和直接得到。',
      knowledge: ['k-ag-chord']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `在 $@triangle ABC$ 中，内角 $A,B,C$ 所对的边分别为 $a,b,c$，已知 $(2b-c)@cos A=a@cos C$。（1）求 $A$；（2）若 $a=3$，求 $@triangle ABC$ 面积的最大值。`,
      answer: `（1）$@frac{@pi}{3}$；（2）$@frac{9@sqrt3}{4}$`,
      accept: [],
      solution: [
        `（1）由正弦定理 $a=2R@sin A$，$b=2R@sin B$，$c=2R@sin C$，代入已知得 $(2@sin B-@sin C)@cos A=@sin A@cos C$。`,
        `移项整理得 $2@sin B@cos A=@sin A@cos C+@sin C@cos A=@sin(A+C)$。`,
        `因为 $A+B+C=@pi$，所以 $@sin(A+C)=@sin B$；又 $@sin B>0$，故 $2@cos A=1$，$@cos A=@frac12$，从而 $A=@frac{@pi}{3}$。`,
        `（2）由正弦定理 $2R=@frac{a}{@sin A}=@frac{3}{@frac{@sqrt3}{2}}=2@sqrt3$，故 $b=2@sqrt3@sin B$，$c=2@sqrt3@sin C$。`,
        `面积 $S=@frac12bc@sin A=@frac12@cdot12@sin B@sin C@cdot@frac{@sqrt3}{2}=3@sqrt3@sin B@sin C$。`,
        `由 $B+C=@frac{2@pi}{3}$ 得 $@sin B@sin C=@frac12[@cos(B-C)-@cos(B+C)]=@frac12[@cos(B-C)+@frac12]@le@frac34$，当 $B=C=@frac{@pi}{3}$ 时取等号，故 $S@le3@sqrt3@cdot@frac34=@frac{9@sqrt3}{4}$。`
      ],
      hints: ['第 (1) 问用正弦定理把边化成角，再用和角公式。', '第 (2) 问把 $b,c$ 都用 $B,C$ 表示，面积化为 $@sin B@sin C$。', '用积化和差把 $@sin B@sin C$ 化成 $@cos(B-C)$ 的表达式。'],
      pitfalls: ['第 (1) 问约去 $@sin B$ 时不说明 $@sin B>0$。', '第 (2) 问忘记 $B+C=@frac{2@pi}{3}$ 这个约束，把 $@sin B@sin C$ 的最大值误当成 $1$。'],
      takeaway: '解三角形最值：边化角后，用和差化积把双变量压成单变量，再由余弦的有界性求最值。',
      knowledge: ['k-tr-solve', 'k-tr-maxmin']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 4,
      stem: `在四棱锥 $P-ABCD$ 中，底面 $ABCD$ 是矩形，$AB=2$，$AD=1$，$PA@perp$ 平面 $ABCD$，$PA=2$。（1）证明：平面 $PCD@perp$ 平面 $PAD$；（2）求直线 $PB$ 与平面 $PCD$ 所成角的正弦值。`,
      answer: `（1）证明见解析；（2）$@frac{@sqrt{10}}{10}$`,
      accept: [],
      solution: [
        `以 $A$ 为原点，$AB,AD,AP$ 所在直线分别为 $x,y,z$ 轴建立坐标系，则 $A(0,0,0)$，$B(2,0,0)$，$C(2,1,0)$，$D(0,1,0)$，$P(0,0,2)$。`,
        `（1）$@vec{CD}=(-2,0,0)$，$@vec{AD}=(0,1,0)$，$@vec{AP}=(0,0,2)$，则 $@vec{CD}@cdot@vec{AD}=0$，$@vec{CD}@cdot@vec{AP}=0$。`,
        `所以 $CD@perp AD$，$CD@perp AP$；又 $AD@cap AP=A$，$AD,AP@subset$ 平面 $PAD$，故 $CD@perp$ 平面 $PAD$。`,
        `因为 $CD@subset$ 平面 $PCD$，所以平面 $PCD@perp$ 平面 $PAD$。`,
        `（2）平面 $PCD$ 中 $@vec{DC}=(2,0,0)$，$@vec{DP}=(0,-1,2)$，设平面 $PCD$ 的法向量为 $@vec n=(x,y,z)$，由 $@vec n@cdot@vec{DC}=0$，$@vec n@cdot@vec{DP}=0$ 可取 $@vec n=(0,2,1)$。`,
        `又 $@vec{PB}=(2,0,-2)$，设直线 $PB$ 与平面 $PCD$ 所成角为 $@theta$，则 $@sin@theta=@frac{|@vec{PB}@cdot@vec n|}{|@vec{PB}||@vec n|}=@frac{2}{2@sqrt2@cdot@sqrt5}=@frac{@sqrt{10}}{10}$。`
      ],
      hints: ['建系前先确认 $AB,AD,AP$ 两两垂直。', '证明面面垂直，先证其中一个平面内有一条直线垂直于另一个平面。', '线面角用 $@sin@theta=@frac{|@vec a@cdot@vec n|}{|@vec a||@vec n|}$。'],
      pitfalls: ['证明线面垂直时漏写“两条相交直线”。', '求法向量时把 $@vec{DC}$ 与 $@vec{DP}$ 算错。', '线面角误用余弦公式。'],
      takeaway: '立体几何解答题：能建系就建系，面面垂直找线面垂直，线面角用正弦公式。',
      knowledge: ['k-so-parallel', 'k-so-angle']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 3,
      stem: `甲、乙两人进行乒乓球比赛，采用三局两胜制，即先胜两局者获胜，比赛结束。设每局甲获胜的概率为 $@frac23$，乙获胜的概率为 $@frac13$，各局结果相互独立。（1）求甲获胜的概率；（2）设 $X$ 为比赛结束时进行的局数，求 $X$ 的分布列和数学期望 $E(X)$；（3）在甲获胜的条件下，求比赛打满三局的概率。`,
      answer: `（1）$@frac{20}{27}$；（2）$P(X=2)=@frac59$，$P(X=3)=@frac49$，$E(X)=@frac{22}{9}$；（3）$@frac25$`,
      accept: [],
      solution: [
        `记每局甲胜的概率为 $p=@frac23$，乙胜的概率为 $1-p=@frac13$，各局相互独立。`,
        `（1）甲获胜有两种情形：以 $2:0$ 获胜，概率为 $p^2=@frac49$；以 $2:1$ 获胜，前三局中前两局一胜一负、第三局甲胜，概率为 $C_2^1p(1-p)p=2@times@frac23@times@frac13@times@frac23=@frac{8}{27}$。`,
        `所以甲获胜的概率为 $@frac49+@frac{8}{27}=@frac{20}{27}$。`,
        `（2）$X=2$ 表示有一方连胜两局，概率 $P(X=2)=p^2+(1-p)^2=@frac49+@frac19=@frac59$；于是 $P(X=3)=1-P(X=2)=@frac49$。`,
        `所以 $E(X)=2@times@frac59+3@times@frac49=@frac{10}{9}+@frac{12}{9}=@frac{22}{9}$。`,
        `（3）比赛打满三局且甲获胜，就是甲以 $2:1$ 获胜，概率为 $@frac{8}{27}$。故所求条件概率为 $@frac{@frac{8}{27}}{@frac{20}{27}}=@frac25$。`
      ],
      hints: ['三局两胜中，甲获胜只可能是 $2:0$ 或 $2:1$。', '求 $X$ 的分布列时，先算 $X=2$ 更简单。', '条件概率用 $P(A|B)=@frac{P(AB)}{P(B)}$。'],
      pitfalls: ['计算 $2:1$ 获胜时漏乘 $C_2^1$。', '把 $P(X=3)$ 直接用 $p(1-p)$ 计算，漏掉两种情况。', '第 (3) 问把分母写成 $1$ 或把分子写成 $P(X=3)$。'],
      takeaway: '比赛制概率：按获胜比分分类，注意“最后一局必须赢”；条件概率回到定义式。',
      knowledge: ['k-ps-prob', 'k-ps-dist', 'k-ps-expect']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 4,
      stem: `已知函数 $f(x)=@ln x-a(x-1)$，$a@in@mathbb{R}$。（1）讨论 $f(x)$ 的单调性；（2）若 $f(x)@le0$ 对任意 $x>0$ 恒成立，求 $a$ 的值；（3）证明：对任意 $x>1$，$@ln x>@frac{2(x-1)}{x+1}$。`,
      answer: `（1）当 $a@le0$ 时，$f(x)$ 在 $(0,+@infty)$ 上单调递增；当 $a>0$ 时，$f(x)$ 在 $@left(0,@frac1a@right)$ 上单调递增，在 $@left(@frac1a,+@infty@right)$ 上单调递减。（2）$a=1$。（3）证明见解析`,
      accept: [],
      solution: [
        `（1）定义域为 $(0,+@infty)$，$f'(x)=@frac1x-a=@frac{1-ax}{x}$。当 $a@le0$ 时 $f'(x)>0$，$f(x)$ 在 $(0,+@infty)$ 上单调递增；当 $a>0$ 时，$f(x)$ 在 $@left(0,@frac1a@right)$ 上单调递增，在 $@left(@frac1a,+@infty@right)$ 上单调递减。`,
        `（2）若 $a@le0$，则 $f(x)$ 单调递增，而 $f(1)=0$，故 $x>1$ 时 $f(x)>0$，与 $f(x)@le0$ 恒成立矛盾，所以 $a>0$。`,
        `此时 $f(x)$ 的最大值为 $f@left(@frac1a@right)=@ln@frac1a-a@left(@frac1a-1@right)=a-@ln a-1$。令 $@varphi(a)=a-@ln a-1$，则 $@varphi'(a)=1-@frac1a$，$@varphi(a)$ 在 $(0,1)$ 上递减，在 $(1,+@infty)$ 上递增，最小值为 $@varphi(1)=0$。`,
        `由 $f(x)@le0$ 恒成立得 $@varphi(a)@le0$，而 $@varphi(a)@ge0$ 恒成立，故只能 $@varphi(a)=0$，即 $a=1$；当 $a=1$ 时确实有 $f(x)@le0$。`,
        `（3）令 $h(x)=@ln x-@frac{2(x-1)}{x+1}$，$x>1$，则 $h'(x)=@frac1x-@frac{4}{(x+1)^2}=@frac{(x-1)^2}{x(x+1)^2}>0$，所以 $h(x)$ 在 $(1,+@infty)$ 上单调递增。又 $h(1)=0$，故 $x>1$ 时 $h(x)>0$，即 $@ln x>@frac{2(x-1)}{x+1}$。`
      ],
      hints: ['第 (1) 问按 $a$ 的正负讨论导函数符号。', '第 (2) 问先排除 $a@le0$，再研究最大值关于 $a$ 的函数。', '第 (3) 问构造差函数，求导后通分看符号。'],
      pitfalls: ['忽略定义域 $x>0$。', '第 (2) 问只令最大值等于 $0$，不说明 $@varphi(a)@ge0$ 恒成立。', `第 (3) 问求导后没有通分，误判 $h'(x)$ 的符号。`],
      takeaway: '含参恒成立：先找最值，再把“最值 ≤ 0”转化为参数函数的最值；证明不等式用差函数加导数。',
      knowledge: ['k-dv-monotone', 'k-dv-ineq', 'k-dv-param']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 5,
      stem: `设 $n@ge2$。若集合 $A@subseteq@left@{1,2,@dots,n@right@}$ 满足：对任意 $a,b@in A$（$a,b$ 可以相同），都有 $a+b@notin A$，则称 $A$ 为 $n$-无和集。（1）分别判断 $A=@left@{1,4,6@right@}$ 与 $B=@left@{2,3,4@right@}$ 是否为 $6$-无和集；（2）证明：若 $A$ 是 $n$-无和集，则 $|A|@le@left@lceil@frac n2@right@rceil$；（3）当 $n=2026$ 时，求 $|A|$ 的最大值，并写出两个不同的达到最大值的 $2026$-无和集。`,
      answer: `（1）$A$ 是 $6$-无和集，$B$ 不是；（2）证明见解析；（3）最大值为 $1013$，例如 $@left@{1,3,5,@dots,2025@right@}$ 与 $@left@{1014,1015,@dots,2026@right@}$`,
      accept: [],
      solution: [
        `（1）对 $A=@left@{1,4,6@right@}$，逐一检验：$1+1=2$，$1+4=5$，$1+6=7$，$4+4=8$，$4+6=10$，$6+6=12$，这些和都不属于 $A$，故 $A$ 是 $6$-无和集；而对 $B=@left@{2,3,4@right@}$，有 $2+2=4@in B$，违反定义，故 $B$ 不是 $6$-无和集。`,
        `（2）若 $A$ 为空集，则 $|A|=0@le@left@lceil@frac n2@right@rceil$ 显然成立。若 $A$ 非空，设 $m$ 为 $A$ 中的最大元素。对任意 $a@in A$，若 $m-a@in A$，则 $a+(m-a)=m@in A$，与无和集的定义矛盾，故 $m-a@notin A$。`,
        `于是集合 $A$ 与 $m-A=@left@{m-a@mid a@in A@right@}$ 没有公共元素。又 $A@subseteq@left@{1,2,@dots,n@right@}$，$m-A@subseteq@left@{0,1,@dots,n@right@}$，所以这两个集合的元素总数不超过 $n+1$。`,
        `即 $2|A|@le n+1$，所以 $|A|@le@frac{n+1}{2}$。由于 $|A|$ 是整数，故 $|A|@le@left@lceil@frac n2@right@rceil$。`,
        `（3）当 $n=2026$ 时，由（2）得 $|A|@le@left@lceil@frac{2026}{2}@right@rceil=1013$。取 $A_1=@left@{1,3,5,@dots,2025@right@}$，它含 $1013$ 个奇数；任意两个奇数之和为偶数，不属于 $A_1$，故 $A_1$ 是无和集。`,
        `再取 $A_2=@left@{1014,1015,@dots,2026@right@}$，它也含 $1013$ 个元素；其中任意两个元素之和至少为 $1014+1014=2028>2026$，不属于 $A_2$，故 $A_2$ 也是无和集。因此最大值为 $1013$。`
      ],
      hints: ['第 (1) 问把 $A$ 中元素两两（含自身）相加，逐一检验。', '第 (2) 问设最大元素 $m$，证明 $A$ 与 $m-A$ 不相交，再数元素个数。', '第 (3) 问用上界 $1013$，再分别用“全取奇数”和“全取大于 $1013$ 的数”构造。'],
      pitfalls: ['第 (1) 问只检验不同元素之和，漏掉 $2+2$ 这类相同元素相加。', '第 (2) 问没有说明 $m-a@notin A$ 的理由，直接默认。', '第 (3) 问只给出集合而不验证它确实是无和集。'],
      takeaway: '新定义无和集：先按定义逐项验证，再用“最大元素与 $m-A$ 不相交”证明上界，最后用奇数和上半区间构造达到上界。',
      knowledge: ['k-count']
    }
  ]
});
