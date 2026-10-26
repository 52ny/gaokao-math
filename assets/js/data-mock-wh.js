/* 2026 届武汉市四月调考风格仿真卷 · 题库数据
 * 仿真自编：19 题结构，8 单选 + 3 多选 + 3 填空 + 5 解答，满分 150。
 * 风格取向：重运算与规范表达，中档题扎实，第 19 题为新定义题。
 * 公式约定：LaTeX 反斜杠一律写成 @；公式用 $...$ 包裹；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: 'mock-wh',
  title: '2026 届武汉市四月调考风格仿真卷（数学）',
  short: '武汉四调仿真',
  year: 2026, region: '武汉四调', kind: 'mock', duration: 150,
  note: '仿真自编：19 题结构；第19题新定义',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `设全集 $U=@mathbb{R}$，集合 $A=@left@{x@mid |x-1|<2@right@}$，$B=@left@{x@mid x^2-4x+3@ge0@right@}$，则 $A@cap B=$`,
      options: [
        { k: 'A', t: `$@left(-1,1@right)$` },
        { k: 'B', t: `$@left(-1,1@right]$` },
        { k: 'C', t: `$@left[-1,1@right]$` },
        { k: 'D', t: `$@left(1,3@right)$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由 $|x-1|<2$ 得 $-1<x<3$，所以 $A=@left(-1,3@right)$。`,
        `由 $x^2-4x+3@ge0$ 得 $(x-1)(x-3)@ge0$，所以 $B=@left(-@infty,1@right]@cup@left[3,+@infty@right)$。`,
        `取交集得 $A@cap B=@left(-1,1@right]$，选 B。`
      ],
      hints: ['先分别解绝对值不等式与一元二次不等式，把集合化成区间。', '画数轴取交集，注意端点 $1$ 属于 $B$、$-1$ 不属于 $A$。'],
      pitfalls: ['把 $x^2-4x+3@ge0$ 的解集写成 $@left[1,3@right]$，不等号方向判断错误。', '把 $A$ 的端点 $-1$ 误当作取到，得出 $@left[-1,1@right]$。'],
      takeaway: '集合运算先化简：绝对值不等式看“夹”，二次不等式看“两根之外或之间”，最后逐端点定开闭。',
      knowledge: ['k-set-ops']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 1,
      stem: `若复数 $z$ 满足 $z(1+i)=2i$，其中 $i$ 为虚数单位，则 $z$ 的虚部为`,
      options: [
        { k: 'A', t: `$-1$` },
        { k: 'B', t: `$0$` },
        { k: 'C', t: `$1$` },
        { k: 'D', t: `$2$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `由 $z(1+i)=2i$ 得 $z=@frac{2i}{1+i}$。`,
        `分子分母同乘 $1-i$：$z=@frac{2i(1-i)}{(1+i)(1-i)}=@frac{2i-2i^2}{2}=@frac{2+2i}{2}=1+i$。`,
        `所以 $z$ 的虚部为 $1$，选 C。`
      ],
      hints: ['复数除法：分子分母同乘分母的共轭复数 $1-i$。', '虚部是 $i$ 的系数，不是 $|z|$，也不要漏掉符号。'],
      pitfalls: ['把虚部写成 $2$，误把分子中 $2i$ 的系数当作答案。', '计算 $(1+i)(1-i)$ 时写成 $2i$，导致分母出错。'],
      takeaway: '复数除法先分母实数化，结果写成 $a+bi$ 后再读实部、虚部。',
      knowledge: ['k-cx-basic']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 2,
      stem: `已知向量 $@vec a,@vec b$ 满足 $|@vec a|=|@vec b|=1$，且 $|@vec a+@vec b|=@sqrt3$，则 $@vec a$ 与 $@vec b$ 的夹角为`,
      options: [
        { k: 'A', t: `$60^@circ$` },
        { k: 'B', t: `$120^@circ$` },
        { k: 'C', t: `$30^@circ$` },
        { k: 'D', t: `$90^@circ$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `把 $|@vec a+@vec b|=@sqrt3$ 两边平方：$|@vec a|^2+2@vec a@cdot@vec b+|@vec b|^2=3$。`,
        `代入 $|@vec a|=|@vec b|=1$ 得 $2+2@vec a@cdot@vec b=3$，即 $@vec a@cdot@vec b=@frac12$。`,
        `设夹角为 $@theta$，则 $@cos@theta=@frac{@vec a@cdot@vec b}{|@vec a||@vec b|}=@frac12$，结合 $@theta@in@left[0,@pi@right]$ 得 $@theta=60^@circ$，选 A。`
      ],
      hints: ['已知模长关系求夹角，先把模长平方，出现数量积。', '数量积公式 $@vec a@cdot@vec b=|@vec a||@vec b|@cos@theta$。'],
      pitfalls: ['直接把 $|@vec a+@vec b|=@sqrt3$ 当成 $|@vec a|+|@vec b|$。', '平方后漏掉交叉项 $2@vec a@cdot@vec b$。'],
      takeaway: '向量模与夹角问题：平方展开是第一步，交叉项系数 $2$ 不能丢。',
      knowledge: ['k-vec-dot', 'k-vec-linear']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 3,
      stem: `已知 $@sin@alpha+@cos@alpha=@frac15$，且 $@alpha@in@left(0,@pi@right)$，则 $@tan@alpha=$`,
      options: [
        { k: 'A', t: `$@frac43$` },
        { k: 'B', t: `$@frac34$` },
        { k: 'C', t: `$-@frac34$` },
        { k: 'D', t: `$-@frac43$` }
      ],
      answer: 'D',
      accept: [],
      solution: [
        `两边平方得 $1+@sin2@alpha=@frac{1}{25}$，所以 $@sin2@alpha=-@frac{24}{25}<0$。又 $@alpha@in@left(0,@pi@right)$ 且 $@sin@alpha>0$，故 $@cos@alpha<0$，$@alpha$ 为钝角。`,
        `由 $( @sin@alpha-@cos@alpha)^2=1-@sin2@alpha=@frac{49}{25}$，且 $@sin@alpha-@cos@alpha>0$，得 $@sin@alpha-@cos@alpha=@frac75$。`,
        `与 $@sin@alpha+@cos@alpha=@frac15$ 联立，解得 $@sin@alpha=@frac45$，$@cos@alpha=-@frac35$。`,
        `所以 $@tan@alpha=@frac{@sin@alpha}{@cos@alpha}=-@frac43$，选 D。`
      ],
      hints: ['出现 $@sin@alpha@pm@cos@alpha$ 时，先平方得到 $@sin2@alpha$。', '由 $@sin2@alpha<0$ 判定 $@alpha$ 为钝角，确定 $@cos@alpha$ 的符号。', '再用 $( @sin@alpha-@cos@alpha)^2=1-@sin2@alpha$ 求出差值。'],
      pitfalls: ['由平方关系直接取 $@sin@alpha-@cos@alpha=@pm@frac75$ 而不定符号。', '忽略 $@alpha$ 的范围，误以为 $@cos@alpha>0$，把 $@tan@alpha$ 算成 $@frac43$。'],
      takeaway: '“和差与积”互相转化：平方得二倍角，再由角范围定符号。',
      knowledge: ['k-tr-identity']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 2,
      stem: `已知等比数列 $@left@{a_n@right@}$ 中，$a_1+a_3=10$，$a_2+a_4=20$，则 $a_5+a_6=$`,
      options: [
        { k: 'A', t: `$48$` },
        { k: 'B', t: `$64$` },
        { k: 'C', t: `$96$` },
        { k: 'D', t: `$128$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `设公比为 $q$，由 $a_2+a_4=q(a_1+a_3)$ 得 $10q=20$，所以 $q=2$。`,
        `由 $a_1+a_3=a_1(1+q^2)=5a_1=10$，得 $a_1=2$。`,
        `所以 $a_5+a_6=a_1q^4(1+q)=2@times16@times3=96$，选 C。`
      ],
      hints: ['把 $a_2+a_4$ 整体用 $q(a_1+a_3)$ 表示，先求公比。', '$a_5+a_6=a_1q^4(1+q)$，注意 $a_5$ 对应 $q^4$。'],
      pitfalls: ['把 $a_5$ 写成 $a_1q^5$，整体指数多算 $1$。', '求出 $q=2$ 后忘记回代求 $a_1$。'],
      takeaway: '等比数列基本量法：先用“整体比”求 $q$，再由一项定 $a_1$。',
      knowledge: ['k-seq-basic']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 2,
      stem: `长方体 $ABCD-A_1B_1C_1D_1$ 中，$AB=2$，$AD=2$，$AA_1=2@sqrt2$，则该长方体外接球的表面积为`,
      options: [
        { k: 'A', t: `$12@pi$` },
        { k: 'B', t: `$20@pi$` },
        { k: 'C', t: `$24@pi$` },
        { k: 'D', t: `$16@pi$` }
      ],
      answer: 'D',
      accept: [],
      solution: [
        `长方体外接球的直径等于其体对角线长：$(2R)^2=AB^2+AD^2+AA_1^2$。`,
        `代入得 $(2R)^2=4+4+8=16$，所以 $2R=4$，$R=2$。`,
        `表面积 $S=4@pi R^2=16@pi$，选 D。`
      ],
      hints: ['长方体外接球球心是体对角线中点。', '先算体对角线平方，再求半径，最后套球的表面积公式。'],
      pitfalls: ['把体对角线长直接当作半径。', '表面积公式写成 $@frac43@pi R^3$ 或漏乘 $4$。'],
      takeaway: '长方体外接球：$2R$ 等于体对角线，$R^2=@frac14(a^2+b^2+c^2)$。',
      knowledge: ['k-so-sphere', 'k-so-solid']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 3,
      stem: `已知双曲线 $C:@frac{x^2}{a^2}-@frac{y^2}{b^2}=1$（$a>0,b>0$）的右焦点为 $F$，$F$ 到一条渐近线的距离为 $2$，且 $C$ 的离心率为 $@sqrt3$，则 $a=$`,
      options: [
        { k: 'A', t: `$@sqrt3$` },
        { k: 'B', t: `$@sqrt2$` },
        { k: 'C', t: `$1$` },
        { k: 'D', t: `$2$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `双曲线的渐近线为 $bx@pm ay=0$，右焦点 $F(c,0)$。`,
        `焦点到渐近线的距离 $d=@frac{|bc|}{@sqrt{a^2+b^2}}=@frac{bc}{c}=b$，故 $b=2$。`,
        `由 $e=@frac ca=@sqrt3$ 得 $c^2=3a^2$，又 $c^2=a^2+b^2$，所以 $b^2=2a^2$。`,
        `代入 $b=2$ 得 $4=2a^2$，即 $a=@sqrt2$，选 B。`
      ],
      hints: ['记住结论：焦点到渐近线的距离等于 $b$。', '离心率与 $a,b$ 的关系：$e^2=1+@frac{b^2}{a^2}$。'],
      pitfalls: ['把焦点到渐近线的距离记成 $a$ 或 $c$。', '由 $e=@sqrt3$ 直接得 $c=@sqrt3$，忽略 $a$ 未知。'],
      takeaway: '双曲线“焦点到渐近线距离为 $b$”是高频结论，配合 $c^2=a^2+b^2$ 可快速定基本量。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 4,
      stem: `若函数 $f(x)=@ln x-ax+1$ 有两个零点，则实数 $a$ 的取值范围是`,
      options: [
        { k: 'A', t: `$@left(0,1@right)$` },
        { k: 'B', t: `$@left(0,e@right)$` },
        { k: 'C', t: `$@left(0,@frac1e@right)$` },
        { k: 'D', t: `$@left(1,e@right)$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `定义域为 $x>0$，$f'(x)=@frac1x-a$。当 $a@le0$ 时 $f'(x)>0$，$f$ 单调递增，至多一个零点，不合题意。`,
        `当 $a>0$ 时，$f$ 在 $@left(0,@frac1a@right)$ 上递增、在 $@left(@frac1a,+@infty@right)$ 上递减，最大值为 $f@left(@frac1a@right)=@ln@frac1a-1+1=-@ln a$。`,
        `又 $x@to0^+$ 与 $x@to+@infty$ 时均有 $f(x)@to-@infty$，所以有两个零点等价于最大值大于 $0$。`,
        `即 $-@ln a>0$，得 $0<a<1$，选 A。`
      ],
      hints: ['先求导，按 $a@le0$ 与 $a>0$ 分类讨论单调性。', '两个零点的关键是最值大于 $0$，同时两侧都要趋于 $-@infty$。'],
      pitfalls: ['漏掉 $a@le0$ 的讨论，直接默认 $a>0$。', '把条件写成 $-@ln a@ge0$，端点 $a=1$ 时只有一个零点。'],
      takeaway: '含参对数函数零点个数：导数定最值，最值符号定个数，端点单独检验。',
      knowledge: ['k-dv-zero', 'k-fn-zero']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知随机变量 $X$ 服从正态分布 $N(2,@sigma^2)$（$@sigma>0$），且 $P(X<0)=0.2$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$P(X>2)=0.5$` },
        { k: 'B', t: `$P(0<X<2)=0.3$` },
        { k: 'C', t: `$P(X>4)=0.3$` },
        { k: 'D', t: `$P(0<X<4)=0.6$` }
      ],
      answer: 'ABD',
      accept: [],
      solution: [
        `正态曲线关于 $x=2$ 对称，所以 $P(X<2)=P(X>2)=0.5$，A 正确。`,
        `由对称性，$P(X>4)=P(X<0)=0.2$，故 C 错误。`,
        `$P(0<X<2)=P(X<2)-P(X<0)=0.5-0.2=0.3$，B 正确。`,
        `$P(0<X<4)=1-P(X<0)-P(X>4)=1-0.2-0.2=0.6$，D 正确。`,
        `综上，选 ABD。`
      ],
      hints: ['正态分布的核心是对称轴 $x=@mu$。', '把所求区间拆成关于 $@mu$ 对称的两段，利用 $P(X<@mu)=0.5$。'],
      pitfalls: ['把 $P(X>4)$ 也算成 $0.3$，误以为与 $P(0<X<2)$ 相等。', '忽略对称性，试图用 $@sigma$ 求解却缺少条件。'],
      takeaway: '正态分布“对称轴两侧各 $0.5$”，对称区间概率相等，端点外概率可互推。',
      knowledge: ['k-ps-dist', 'k-ps-prob']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 4,
      stem: `已知函数 $f(x)=x^3-3x$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$f(x)$ 的极大值为 $2$` },
        { k: 'B', t: `$f(x)$ 在 $@left(-1,1@right)$ 上单调递减` },
        { k: 'C', t: `$f(x)$ 的图象关于原点对称` },
        { k: 'D', t: `过点 $(1,0)$ 可作曲线 $y=f(x)$ 的两条切线` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `$f'(x)=3x^2-3=3(x-1)(x+1)$，令 $f'(x)=0$ 得 $x=@pm1$。`,
        `当 $x<-1$ 或 $x>1$ 时 $f'(x)>0$，当 $-1<x<1$ 时 $f'(x)<0$，所以 $f$ 在 $x=-1$ 处取极大值 $f(-1)=2$，在 $x=1$ 处取极小值 $f(1)=-2$，A、B 正确。`,
        `因为 $f(-x)=-x^3+3x=-f(x)$，所以 $f(x)$ 为奇函数，图象关于原点对称，C 正确。`,
        `设切点为 $(t,t^3-3t)$，切线方程为 $y=(3t^2-3)(x-t)+t^3-3t$。代入点 $(1,0)$ 得 $2t^3-3t^2+3=0$。`,
        `令 $h(t)=2t^3-3t^2+3$，则 $h'(t)=6t(t-1)$，$h(t)$ 在 $t=0$ 处取极大值 $3$、在 $t=1$ 处取极小值 $2$，均大于 $0$，故方程只有一个实根，只能作一条切线，D 错误。`,
        `综上，选 ABC。`
      ],
      hints: ['先求导确定单调区间与极值。', '判断奇偶性只需比较 $f(-x)$ 与 $-f(x)$。', '“过某点的切线”要设切点，不能把该点当切点。'],
      pitfalls: ['把点 $(1,0)$ 直接当作切点，而 $f(1)=-2$，该点并不在曲线上。', '判断切线条数时只看判别式，忽略三次方程实根个数的讨论。'],
      takeaway: '三次函数性质：导数定单调与极值，奇偶性看对称；过点作切线必须设切点并解方程。',
      knowledge: ['k-dv-extreme', 'k-fn-prop']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 4,
      stem: `已知抛物线 $C:y^2=4x$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$C$ 的焦点坐标为 $(1,0)$` },
        { k: 'B', t: `过 $C$ 的焦点且垂直于 $x$ 轴的弦长为 $4$` },
        { k: 'C', t: `若点 $P$ 在 $C$ 上，$F$ 为焦点，且 $|PF|=3$，则 $P$ 到 $y$ 轴的距离为 $3$` },
        { k: 'D', t: `过点 $(0,1)$ 且与 $C$ 恰有一个公共点的直线有 $3$ 条` }
      ],
      answer: 'ABD',
      accept: [],
      solution: [
        `由 $2p=4$ 得 $p=2$，焦点 $F(1,0)$，准线 $x=-1$，A 正确。`,
        `过焦点且垂直于 $x$ 轴的弦为 $x=1$，代入得 $y=@pm2$，弦长为 $4$，B 正确。`,
        `由抛物线定义 $|PF|=x_P+1=3$，得 $x_P=2$，即 $P$ 到 $y$ 轴的距离为 $2$，C 错误。`,
        `过 $(0,1)$ 的直线中：$x=0$ 与抛物线切于顶点，只有一个公共点；$y=1$ 与抛物线交于 $@left(@frac14,1@right)$，只有一个公共点；设 $y=kx+1$（$k@ne0$），代入得 $k^2x^2+(2k-4)x+1=0$，由 $@Delta=0$ 得 $k=1$，即 $y=x+1$ 与抛物线相切。`,
        `共 $3$ 条，D 正确。综上，选 ABD。`
      ],
      hints: ['抛物线 $y^2=2px$ 的焦点为 $@left(@frac p2,0@right)$，准线为 $x=-@frac p2$。', '“只有一个公共点”包括相切与直线平行于对称轴两种情形。'],
      pitfalls: ['C 中把到焦点的距离直接当作到 $y$ 轴的距离，忘记减去 $1$。', 'D 中漏掉 $x=0$ 或 $y=1$，只数出相切的 $1$ 条。'],
      takeaway: '抛物线定义是“到焦点距离等于到准线距离”；直线与抛物线只有一个公共点要分相切与平行于轴讨论。',
      knowledge: ['k-ag-conic', 'k-ag-chord']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 3,
      stem: `将 $4$ 名男生和 $3$ 名女生排成一排，要求 $3$ 名女生互不相邻，则不同的排法共有 ________ 种.`,
      answer: `$1440$`,
      accept: ['1440'],
      solution: [
        `先排 $4$ 名男生，有 $@mathrm{A}_4^4=24$ 种排法。`,
        `$4$ 名男生排好后形成 $5$ 个空位（含两端），女生只能插入这些空位。`,
        `从 $5$ 个空位中选 $3$ 个排 $3$ 名女生，有 $@mathrm{A}_5^3=5@times4@times3=60$ 种。`,
        `由分步乘法计数原理，共有 $24@times60=1440$ 种。`
      ],
      hints: ['“互不相邻”用插空法：先排无限制的元素，再插入受限元素。', '$4$ 个元素形成 $5$ 个空位，不要漏掉两端。'],
      pitfalls: ['只算 $@mathrm{C}_5^3$ 而忘记女生内部还可排列。', '把空位数写成 $4$ 个，漏掉两端。'],
      takeaway: '插空法：$m$ 个已排元素形成 $m+1$ 个空，从中选位并排列受限元素。',
      knowledge: ['k-count']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 3,
      stem: `已知数列 $@left@{a_n@right@}$ 的通项公式为 $a_n=@frac{1}{(2n-1)(2n+1)}$，其前 $n$ 项和为 $S_n$，则 $S_{10}=$ ________ .`,
      answer: `$@frac{10}{21}$`,
      accept: ['10/21'],
      solution: [
        `裂项：$a_n=@frac{1}{(2n-1)(2n+1)}=@frac12@left(@frac{1}{2n-1}-@frac{1}{2n+1}@right)$。`,
        `所以 $S_n=@frac12@left[@left(1-@frac13@right)+@left(@frac13-@frac15@right)+@cdots+@left(@frac{1}{2n-1}-@frac{1}{2n+1}@right)@right]$。`,
        `中间项相消得 $S_n=@frac12@left(1-@frac{1}{2n+1}@right)=@frac{n}{2n+1}$。`,
        `令 $n=10$，得 $S_{10}=@frac{10}{21}$。`
      ],
      hints: ['分母是两个相差 $2$ 的一次因式，考虑裂项相消。', '裂项后前面要乘 $@frac12$，因为两项之差的分母差为 $2$。'],
      pitfalls: ['裂项时漏乘 $@frac12$，得到 $S_n=@frac{2n}{2n+1}$。', '把 $S_{10}$ 的末项写成 $@frac{1}{19}-@frac{1}{21}$ 后又多算一项。'],
      takeaway: '裂项相消：$@frac{1}{(2n-1)(2n+1)}=@frac12@left(@frac{1}{2n-1}-@frac{1}{2n+1}@right)$，求和后只剩首尾。',
      knowledge: ['k-seq-sum']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 4,
      stem: `在三棱锥 $P-ABC$ 中，$PA@perp$ 平面 $ABC$，$AB=AC=2$，$@angle BAC=120^@circ$，$PA=2$，则该三棱锥外接球的表面积为 ________ .`,
      answer: `$20@pi$`,
      accept: ['20π', '20pi'],
      solution: [
        `在 $@triangle ABC$ 中，由余弦定理 $BC^2=AB^2+AC^2-2@cdot AB@cdot AC@cos120^@circ=4+4+4=12$，所以 $BC=2@sqrt3$。`,
        `设 $@triangle ABC$ 外接圆半径为 $r$，由正弦定理 $2r=@frac{BC}{@sin120^@circ}=@frac{2@sqrt3}{@sqrt3/2}=4$，得 $r=2$。`,
        `因为 $PA@perp$ 平面 $ABC$，外接球球心在过 $@triangle ABC$ 外心且垂直于底面的直线上，所以 $R^2=r^2+@left(@frac{PA}{2}@right)^2=4+1=5$。`,
        `外接球表面积 $S=4@pi R^2=20@pi$。`
      ],
      hints: ['先求底面外接圆半径，再用“底面外接圆半径 + 高的一半”求球半径。', '不要误以为球心在底面上，球心到 $P$、$A$ 距离相等，故在 $PA$ 的中垂面上。'],
      pitfalls: ['把 $R^2$ 写成 $r^2+PA^2$，忘记取高的一半。', '余弦定理中 $@cos120^@circ$ 的符号处理错误，把 $BC^2$ 算成 $4$。'],
      takeaway: '“侧棱垂直底面”型外接球：$R^2=r_{@text{底}}^2+@left(@frac h2@right)^2$。',
      knowledge: ['k-so-sphere', 'k-so-solid']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `在 $@triangle ABC$ 中，内角 $A,B,C$ 所对的边分别为 $a,b,c$，已知 $(2a-c)@cos B=b@cos C$。（1）求 $B$；（2）若 $b=@sqrt3$，求 $@triangle ABC$ 周长的最大值。`,
      answer: `(1) $@frac{@pi}{3}$；(2) $3@sqrt3$`,
      accept: [],
      solution: [
        `（1）由正弦定理，条件可化为 $(2@sin A-@sin C)@cos B=@sin B@cos C$。`,
        `移项得 $2@sin A@cos B=@sin C@cos B+@sin B@cos C=@sin(B+C)$。`,
        `因为 $A+B+C=@pi$，所以 $@sin(B+C)=@sin A>0$，故 $2@cos B=1$，$@cos B=@frac12$。结合 $B@in@left(0,@pi@right)$ 得 $B=@frac{@pi}{3}$。`,
        `（2）由余弦定理 $b^2=a^2+c^2-2ac@cos B$，得 $3=a^2+c^2-ac$。`,
        `于是 $(a+c)^2=3+3ac@le3+@frac34(a+c)^2$，解得 $(a+c)^2@le12$，即 $a+c@le2@sqrt3$。`,
        `当且仅当 $a=c=@sqrt3$ 时取等号，此时周长 $a+b+c@le3@sqrt3$，故周长的最大值为 $3@sqrt3$。`
      ],
      hints: ['第（1）问“边化角”，把 $A+C$ 化成 $@pi-B$。', '第（2）问用余弦定理把 $b$ 固定，再用基本不等式处理 $ac$ 与 $a+c$ 的关系。', '基本不等式使用时注意等号条件 $a=c$，并检验三角形存在。'],
      pitfalls: ['约去 $@sin A$ 时不说明 $@sin A>0$。', '把 $a^2+c^2-ac@ge ac$ 的方向写反，导致 $a+c$ 的上界无法得到。', '求出 $a+c$ 的最大值后忘记加上 $b$。'],
      takeaway: '解三角形最值：正弦定理统一角，余弦定理建立边的关系，基本不等式求 $a+c$ 或 $ac$ 的最值。',
      knowledge: ['k-tr-solve', 'k-tr-maxmin', 'k-ie-basic']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 4,
      stem: `在四棱锥 $P-ABCD$ 中，底面 $ABCD$ 是矩形，$AB=2$，$AD=1$，$PA@perp$ 平面 $ABCD$，$PA=@sqrt2$。（1）证明：平面 $PCD@perp$ 平面 $PAD$；（2）求直线 $PB$ 与平面 $PCD$ 所成角的正弦值。`,
      answer: `(1) 证明见解析；(2) $@frac13$`,
      accept: [],
      solution: [
        `（1）因为 $ABCD$ 是矩形，所以 $CD@perp AD$。`,
        `因为 $PA@perp$ 平面 $ABCD$，$CD@subset$ 平面 $ABCD$，所以 $PA@perp CD$。`,
        `又 $AD@cap PA=A$，$AD,PA@subset$ 平面 $PAD$，所以 $CD@perp$ 平面 $PAD$。而 $CD@subset$ 平面 $PCD$，故平面 $PCD@perp$ 平面 $PAD$。`,
        `（2）以 $A$ 为原点，$AB,AD,AP$ 所在直线分别为 $x,y,z$ 轴建立空间直角坐标系，则 $B(2,0,0)$，$D(0,1,0)$，$C(2,1,0)$，$P(0,0,@sqrt2)$。`,
        `$@vec{DC}=(2,0,0)$，$@vec{DP}=(0,-1,@sqrt2)$。设平面 $PCD$ 的法向量 $@vec n=(x,y,z)$，由 $2x=0$，$-y+@sqrt2z=0$，取 $@vec n=(0,@sqrt2,1)$。`,
        `$@vec{PB}=(2,0,-@sqrt2)$，所以 $@sin@theta=@frac{|@vec{PB}@cdot@vec n|}{|@vec{PB}||@vec n|}=@frac{@sqrt2}{@sqrt6@times@sqrt3}=@frac13$，即所求正弦值为 $@frac13$。`
      ],
      hints: ['第（1）问证明面面垂直，先证线面垂直，关键是 $CD@perp AD$ 与 $CD@perp PA$。', '第（2）问建系后用法向量，线面角用 $@sin@theta=@frac{|@vec{PB}@cdot@vec n|}{|@vec{PB}||@vec n|}$。', '法向量只需取一组整数或最简根式解，不必单位化。'],
      pitfalls: ['第（1）问只证 $CD@perp AD$ 就下结论，漏掉 $CD@perp PA$。', '第（2）问把线面角写成 $@cos@theta$，或忘记加绝对值。', '建系时把 $AD$ 的长度 $1$ 误写成 $2$。'],
      takeaway: '面面垂直找线面垂直；线面角用“方向向量与法向量夹角余弦的绝对值”。',
      knowledge: ['k-so-solid', 'k-so-angle']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 3,
      stem: `某单位从 $5$ 名男志愿者和 $3$ 名女志愿者中随机选出 $3$ 人参加活动。（1）求选出的 $3$ 人中恰有 $2$ 名女生的概率；（2）设 $X$ 为选出的 $3$ 人中女生的人数，求 $X$ 的分布列与数学期望 $E(X)$；（3）在选出的 $3$ 人中至少有 $1$ 名女生的条件下，求恰有 $2$ 名女生的概率。`,
      answer: `(1) $@frac{15}{56}$；(2) $P(X=0)=@frac{5}{28}$，$P(X=1)=@frac{15}{28}$，$P(X=2)=@frac{15}{56}$，$P(X=3)=@frac{1}{56}$，$E(X)=@frac98$；(3) $@frac{15}{46}$`,
      accept: [],
      solution: [
        `从 $8$ 人中任选 $3$ 人，基本事件总数为 $@mathrm{C}_8^3=56$。`,
        `（1）恰有 $2$ 名女生即选 $2$ 女 $1$ 男，选法数为 $@mathrm{C}_3^2@mathrm{C}_5^1=3@times5=15$，概率为 $@frac{15}{56}$。`,
        `（2）$X$ 的可能取值为 $0,1,2,3$。$P(X=0)=@frac{@mathrm{C}_5^3}{56}=@frac{10}{56}=@frac{5}{28}$，$P(X=1)=@frac{@mathrm{C}_3^1@mathrm{C}_5^2}{56}=@frac{30}{56}=@frac{15}{28}$。`,
        `$P(X=2)=@frac{15}{56}$，$P(X=3)=@frac{@mathrm{C}_3^3}{56}=@frac{1}{56}$。分布列如上，且各概率之和为 $1$。`,
        `$E(X)=0@times@frac{5}{28}+1@times@frac{15}{28}+2@times@frac{15}{56}+3@times@frac{1}{56}=@frac{30+30+3}{56}=@frac{63}{56}=@frac98$。`,
        `（3）$P(X@ge1)=1-P(X=0)=1-@frac{10}{56}=@frac{46}{56}$，故所求条件概率为 $@frac{P(X=2)}{P(X@ge1)}=@frac{15/56}{46/56}=@frac{15}{46}$。`
      ],
      hints: ['先明确是“不放回”选取，基本事件数为 $@mathrm{C}_8^3$。', '分布列各概率用组合数计算，最后检验和为 $1$。', '条件概率的分母是“至少有 $1$ 名女生”的概率。'],
      pitfalls: ['把选取当成有顺序的排列，基本事件数算成 $@mathrm{A}_8^3$。', '条件概率误用 $P(X@ge1)$ 作分子。', '期望计算时漏乘 $X=0$ 对应的项（该项为 $0$ 但不可漏写分布列）。'],
      takeaway: '超几何分布：$P(X=k)=@frac{@mathrm{C}_M^k@mathrm{C}_{N-M}^{n-k}}{@mathrm{C}_N^n}$，条件概率用 $P(B@mid A)=@frac{P(AB)}{P(A)}$。',
      knowledge: ['k-ps-prob', 'k-ps-dist', 'k-ps-expect']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 4,
      stem: `已知椭圆 $C:@frac{x^2}{a^2}+@frac{y^2}{b^2}=1$（$a>b>0$）的离心率为 $@frac{@sqrt2}{2}$，且经过点 $(@sqrt2,1)$。（1）求 $C$ 的方程；（2）设 $F$ 为 $C$ 的右焦点，过 $F$ 的直线 $l$ 与 $C$ 交于 $A,B$ 两点，若 $@vec{OA}@cdot@vec{OB}=0$，求直线 $l$ 的方程。`,
      answer: `(1) $@frac{x^2}{4}+@frac{y^2}{2}=1$；(2) $@sqrt2x-y-2=0$ 或 $@sqrt2x+y-2=0$`,
      accept: [],
      solution: [
        `（1）由 $e=@frac ca=@frac{@sqrt2}{2}$ 得 $c^2=@frac12a^2$，所以 $b^2=a^2-c^2=@frac12a^2$。`,
        `将点 $(@sqrt2,1)$ 代入：$@frac{2}{a^2}+@frac{1}{a^2/2}=@frac{4}{a^2}=1$，得 $a^2=4$，$b^2=2$，所以 $C:@frac{x^2}{4}+@frac{y^2}{2}=1$。`,
        `（2）右焦点 $F(@sqrt2,0)$。若 $l$ 为 $y=0$，则 $A,B$ 为长轴端点，$@vec{OA}@cdot@vec{OB}=-4@ne0$，不合题意。故设 $l:x=my+@sqrt2$。`,
        `代入椭圆方程得 $(m^2+2)y^2+2@sqrt2my-2=0$，由韦达定理 $y_1+y_2=-@frac{2@sqrt2m}{m^2+2}$，$y_1y_2=-@frac{2}{m^2+2}$。`,
        `$@vec{OA}@cdot@vec{OB}=x_1x_2+y_1y_2=(m^2+1)y_1y_2+@sqrt2m(y_1+y_2)+2=@frac{-4m^2+2}{m^2+2}$。`,
        `令 $@vec{OA}@cdot@vec{OB}=0$ 得 $m^2=@frac12$，即 $m=@pm@frac{@sqrt2}{2}$，故直线 $l$ 的方程为 $@sqrt2x-y-2=0$ 或 $@sqrt2x+y-2=0$。`
      ],
      hints: ['第（1）问用离心率把 $b^2$ 统一成 $a^2$，再代点求 $a^2$。', '第（2）问设 $x=my+@sqrt2$ 可避免讨论斜率不存在，但要单独检验 $y=0$ 的情形。', '把 $@vec{OA}@cdot@vec{OB}$ 用 $y_1+y_2$、$y_1y_2$ 表示，注意 $x_i=my_i+@sqrt2$ 的代换。'],
      pitfalls: ['设 $y=k(x-@sqrt2)$ 时漏掉竖直线 $x=@sqrt2$。', '展开 $x_1x_2$ 时漏掉 $2$ 或把 $@sqrt2m(y_1+y_2)$ 的系数算错。', '求出 $m^2=@frac12$ 后只写一个 $m$，漏掉另一条直线。'],
      takeaway: '椭圆中向量数量积为定值：设线联立 $@to$ 韦达 $@to$ 用 $y$ 表示 $@vec{OA}@cdot@vec{OB}@to$ 解参数，最后检验特殊直线。',
      knowledge: ['k-ag-conic', 'k-ag-chord', 'k-ag-vector']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 5,
      stem: `对正整数 $n$，若集合 $A@subseteq@left@{1,2,@dots,n@right@}$ 中任意两个不同元素之和都不是 $3$ 的倍数，则称 $A$ 为 $@left@{1,2,@dots,n@right@}$ 的一个“$3$-相容集”。（1）写出 $@left@{1,2,3,4,5,6@right@}$ 的所有含 $3$ 个元素的 $3$-相容集；（2）证明：$@left@{1,2,@dots,3k@right@}$ 的 $3$-相容集最多有 $k+1$ 个元素；（3）求 $@left@{1,2,@dots,3k@right@}$ 的所有 $3$-相容集的个数（含空集）。`,
      answer: `(1) $@left@{1,3,4@right@}$，$@left@{1,4,6@right@}$，$@left@{2,3,5@right@}$，$@left@{2,5,6@right@}$；(2) 最大值为 $k+1$，证明见解析；(3) $(k+1)(2^{k+1}-1)$`,
      accept: [],
      solution: [
        `（1）按模 $3$ 的余数分组：$R_0=@left@{3,6@right@}$，$R_1=@left@{1,4@right@}$，$R_2=@left@{2,5@right@}$。两数之和为 $3$ 的倍数，当且仅当二者同属 $R_0$，或分别属于 $R_1,R_2$。`,
        `所以含 $3$ 个元素的 $3$-相容集只能是“$R_0$ 中取 $1$ 个、$R_1$ 中取 $2$ 个”或“$R_0$ 中取 $1$ 个、$R_2$ 中取 $2$ 个”，共 $4$ 个：$@left@{1,3,4@right@}$，$@left@{1,4,6@right@}$，$@left@{2,3,5@right@}$，$@left@{2,5,6@right@}$。`,
        `（2）一般地，$@left@{1,2,@dots,3k@right@}$ 中 $R_0,R_1,R_2$ 各有 $k$ 个元素，其中 $R_i$ 表示模 $3$ 余 $i$ 的数组成的集合。`,
        `由（1）的分析，$A$ 中 $R_0$ 的元素至多 $1$ 个，且 $A$ 不能同时含有 $R_1$ 与 $R_2$ 中的元素，所以 $|A|@le1+@max@left@{|A@cap R_1|,|A@cap R_2|@right@}@le1+k$。`,
        `取 $R_0$ 中 $1$ 个元素与 $R_1$ 的全部 $k$ 个元素，所得集合含 $k+1$ 个元素且满足条件，故最大值为 $k+1$。`,
        `（3）$R_0$ 的选法有“不选”或“选 $1$ 个”共 $1+k$ 种；$R_1,R_2$ 中只能选一边的子集，选法数为 $2^k+2^k-1$（两边都不选被重复计算一次）。由分步乘法计数原理，总数为 $(k+1)(2^{k+1}-1)$。`
      ],
      hints: ['按模 $3$ 的余数把 $1,2,@dots,3k$ 分成三类，把“和为 $3$ 的倍数”转化为余数关系。', '第（2）问先证明上界，再构造达到上界的例子。', '第（3）问按“$R_0$ 选几个”与“$R_1,R_2$ 只能选一边”分步计数，注意两边都不选的重复。'],
      pitfalls: ['只看到 $R_0$ 内部不能同取，忽略 $R_1$ 与 $R_2$ 之间也不能混取。', '第（3）问把 $R_1,R_2$ 的子集数直接写成 $2^k@cdot2^k$，没有排除同时非空的情况。', '计数时漏掉空集或把空集重复计算。'],
      takeaway: '新定义集合题：先用模运算把条件翻译成“类的选取规则”，再用分类与分步计数原理求解。',
      knowledge: ['k-count', 'k-set-ops']
    }
  ]
});
