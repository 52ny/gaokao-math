/* 2024 年普通高等学校招生全国统一考试（新课标Ⅱ卷）数学 · 题库数据
 * 公式约定：LaTeX 反斜杠一律写成 @；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: '2024-xkb2',
  title: '2024 年普通高等学校招生全国统一考试（新课标Ⅱ卷）',
  short: '2024 新课标Ⅱ',
  year: 2024,
  region: '新课标Ⅱ卷',
  kind: 'real',
  duration: 150,
  note: '19 题结构：8 单选 + 3 多选 + 3 填空 + 5 解答',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `已知集合 $A=@left@{x@mid x^2-4x+3@le0@right@}$，$B=@left@{x@mid 2<x<4@right@}$，则 $A@cap B=$`,
      options: [
        { k: 'A', t: `$@left(2,3@right)$` },
        { k: 'B', t: `$@left(2,3@right]$` },
        { k: 'C', t: `$@left[2,3@right]$` },
        { k: 'D', t: `$@left[1,4@right)$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由 $x^2-4x+3@le0$ 得 $(x-1)(x-3)@le0$，所以 $A=@left[1,3@right]$。`,
        `$B=@left(2,4@right)$，交集需同时满足 $1@le x@le3$ 与 $2<x<4$。`,
        `故 $2<x@le3$，即 $A@cap B=@left(2,3@right]$，选 B。`
      ],
      hints: ['先解一元二次不等式，把 $A$ 化成区间。', '取交集时逐一检查端点 $2$ 与 $3$ 是否属于 $B$。'],
      pitfalls: ['把 $A$ 的解集写成两根之外。', '误把端点 $2$ 算进交集，或把端点 $3$ 排除。'],
      takeaway: '集合交集：先化简不等式，再逐端点判断开闭。',
      knowledge: ['k-set-ops']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 1,
      stem: `已知命题 $p:@forall x>0$，$x+@frac{1}{x}@ge2$，则 $@neg p$ 为`,
      options: [
        { k: 'A', t: `$@exists x>0$，$x+@frac{1}{x}<2$` },
        { k: 'B', t: `$@exists x@le0$，$x+@frac{1}{x}<2$` },
        { k: 'C', t: `$@forall x>0$，$x+@frac{1}{x}<2$` },
        { k: 'D', t: `$@exists x>0$，$x+@frac{1}{x}@le2$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `全称命题的否定是特称命题：量词 $@forall$ 改为 $@exists$。`,
        `结论 $x+@frac{1}{x}@ge2$ 的否定是 $x+@frac{1}{x}<2$。`,
        `条件 $x>0$ 保持不变，故 $@neg p$ 为 $@exists x>0$，$x+@frac{1}{x}<2$，选 A。`
      ],
      hints: ['只改量词与结论，条件范围不变。', '注意 $@ge$ 的否定是 $<$，不是 $@le$。'],
      pitfalls: ['把条件 $x>0$ 也否定成 $x@le0$。', '把结论的否定写成 $@le2$。'],
      takeaway: '全称否定变特称，结论取反，条件不动。',
      knowledge: ['k-logic']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 2,
      stem: `已知向量 $@vec a,@vec b$ 满足 $|@vec a|=2$，$|@vec b|=1$，$|@vec a+@vec b|=@sqrt7$，则 $@vec a$ 与 $@vec b$ 的夹角为`,
      options: [
        { k: 'A', t: `$@frac{@pi}{6}$` },
        { k: 'B', t: `$@frac{@pi}{3}$` },
        { k: 'C', t: `$@frac{2@pi}{3}$` },
        { k: 'D', t: `$@frac{5@pi}{6}$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `把 $|@vec a+@vec b|=@sqrt7$ 两边平方：$4+1+2@vec a@cdot@vec b=7$，得 $@vec a@cdot@vec b=1$。`,
        `设夹角为 $@theta$，则 $@cos@theta=@frac{@vec a@cdot@vec b}{|@vec a||@vec b|}=@frac{1}{2}$。`,
        `由 $@theta@in@left[0,@pi@right]$ 得 $@theta=@frac{@pi}{3}$，选 B。`
      ],
      hints: ['模长条件先平方，求出数量积。', '再用夹角公式，注意角的范围。'],
      pitfalls: ['平方展开漏掉 $2@vec a@cdot@vec b$。', '把 $@cos@theta=@frac12$ 错写成 $60^@circ$ 以外的角。'],
      takeaway: '模长与数量积互相转化：平方展开是第一步。',
      knowledge: ['k-vec-dot']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 3,
      stem: `已知一组数据 $x_1,x_2,x_3,x_4,x_5$ 的平均数为 $3$，方差为 $2$。若在这组数据中加入一个数据 $3$，得到 $6$ 个数据，则这 $6$ 个数据的方差为`,
      options: [
        { k: 'A', t: `$2$` },
        { k: 'B', t: `$@frac{5}{3}$` },
        { k: 'C', t: `$@frac{3}{2}$` },
        { k: 'D', t: `$@frac{5}{6}$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `原方差 $2=@frac{1}{5}@sum_{i=1}^{5}(x_i-3)^2$，故偏差平方和为 $10$。`,
        `加入的数据 $3$ 恰等于平均数，它对偏差平方和的贡献为 $0$，新偏差平方和仍为 $10$。`,
        `新方差为 $@frac{10}{6}=@frac{5}{3}$，选 B。`
      ],
      hints: ['方差定义中分母是数据个数。', '加入等于平均数的数，偏差平方和不变。'],
      pitfalls: ['误以为方差不变，仍答 $2$。', '分母仍用 $5$。'],
      takeaway: '加入等于均值的数，偏差平方和不变，方差按新个数缩小。',
      knowledge: ['k-ps-stat']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 2,
      stem: `已知 $@tan@alpha=2$，则 $@sin2@alpha=$`,
      options: [
        { k: 'A', t: `$@frac{4}{5}$` },
        { k: 'B', t: `$-@frac{4}{5}$` },
        { k: 'C', t: `$@frac{3}{5}$` },
        { k: 'D', t: `$-@frac{3}{5}$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `$@sin2@alpha=2@sin@alpha@cos@alpha=@frac{2@sin@alpha@cos@alpha}{@sin^2@alpha+@cos^2@alpha}$。`,
        `分子分母同除以 $@cos^2@alpha$：$@sin2@alpha=@frac{2@tan@alpha}{1+@tan^2@alpha}$。`,
        `代入 $@tan@alpha=2$ 得 $@sin2@alpha=@frac{4}{5}$，选 A。`
      ],
      hints: ['把 $@sin2@alpha$ 写成二次齐次式。', '分子分母同时除以 $@cos^2@alpha$，化为 $@tan@alpha$。'],
      pitfalls: ['公式误写成 $@frac{2@tan@alpha}{1-@tan^2@alpha}$。', '忘记平方，分母写成 $1+@tan@alpha$。'],
      takeaway: '已知 $@tan@alpha$ 求二倍角：化齐次式，万能公式一次到位。',
      knowledge: ['k-tr-identity']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 2,
      stem: `函数 $f(x)=x^3-3x$ 的极大值为`,
      options: [
        { k: 'A', t: `$-2$` },
        { k: 'B', t: `$0$` },
        { k: 'C', t: `$2$` },
        { k: 'D', t: `$4$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `$f'(x)=3x^2-3=3(x-1)(x+1)$，令 $f'(x)=0$ 得 $x=@pm1$。`,
        `当 $x<-1$ 时 $f'(x)>0$，当 $-1<x<1$ 时 $f'(x)<0$，当 $x>1$ 时 $f'(x)>0$。`,
        `所以 $f(x)$ 在 $x=-1$ 处由增变减，取极大值 $f(-1)=-1+3=2$，选 C。`
      ],
      hints: ['先求导并因式分解。', '导数由正变负的临界点是极大值点。'],
      pitfalls: ['把极大值与极小值弄反，答 $-2$。', '代入 $x=1$ 求极大值。'],
      takeaway: '极值看导数变号：正变负为极大，负变正为极小。',
      knowledge: ['k-dv-extreme']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 3,
      stem: `已知正三棱台 $ABC-A_1B_1C_1$ 的上、下底面边长分别为 $2$ 和 $4$，高为 $@sqrt3$，则该三棱台的体积为`,
      options: [
        { k: 'A', t: `$3$` },
        { k: 'B', t: `$6$` },
        { k: 'C', t: `$7$` },
        { k: 'D', t: `$9$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `上底面是边长 $2$ 的正三角形，面积 $S_1=@frac{@sqrt3}{4}@times2^2=@sqrt3$。`,
        `下底面是边长 $4$ 的正三角形，面积 $S_2=@frac{@sqrt3}{4}@times4^2=4@sqrt3$。`,
        `台体体积 $V=@frac{h}{3}@left(S_1+S_2+@sqrt{S_1S_2}@right)$，其中 $@sqrt{S_1S_2}=@sqrt{4@times3}=2@sqrt3$。`,
        `故 $V=@frac{@sqrt3}{3}(@sqrt3+4@sqrt3+2@sqrt3)=@frac{@sqrt3}{3}@cdot7@sqrt3=7$，选 C。`
      ],
      hints: ['台体体积公式必须带中间项 $@sqrt{S_1S_2}$。', '正三角形面积用 $@frac{@sqrt3}{4}a^2$。'],
      pitfalls: ['漏掉 $@sqrt{S_1S_2}$，按棱柱或棱锥计算。', '把面积算成边长的平方。'],
      takeaway: '台体体积 $V=@frac{h}{3}(S_1+S_2+@sqrt{S_1S_2})$，三项缺一不可。',
      knowledge: ['k-so-solid']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 3,
      stem: `已知双曲线 $C:@frac{x^2}{a^2}-@frac{y^2}{b^2}=1(a>0,b>0)$ 的一条渐近线方程为 $y=@frac{1}{2}x$，且 $C$ 经过点 $(4,@sqrt3)$，则 $C$ 的离心率为`,
      options: [
        { k: 'A', t: `$@frac{@sqrt5}{2}$` },
        { k: 'B', t: `$@frac{@sqrt3}{2}$` },
        { k: 'C', t: `$@sqrt5$` },
        { k: 'D', t: `$@sqrt3$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `渐近线 $y=@frac{b}{a}x$ 与 $y=@frac12x$ 对照，得 $b=@frac{a}{2}$，即 $b^2=@frac{a^2}{4}$。`,
        `代入点 $(4,@sqrt3)$：$@frac{16}{a^2}-@frac{3}{b^2}=1$，把 $b^2=@frac{a^2}{4}$ 代入得 $@frac{16}{a^2}-@frac{12}{a^2}=@frac{4}{a^2}=1$。`,
        `所以 $a^2=4$，$b^2=1$，$c^2=a^2+b^2=5$，$e=@frac{c}{a}=@frac{@sqrt5}{2}$，选 A。`
      ],
      hints: ['先用渐近线确定 $a,b$ 的比例。', '代点求出 $a^2$，再用 $c^2=a^2+b^2$。'],
      pitfalls: ['双曲线误用 $c^2=a^2-b^2$。', '把渐近线斜率当成 $@frac{a}{b}$。'],
      takeaway: '双曲线：渐近线定比例，代点定大小，$e=@frac{c}{a}$ 收尾。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知函数 $f(x)=2@sin@left(2x-@frac{@pi}{6}@right)$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$f(x)$ 的最小正周期为 $@pi$` },
        { k: 'B', t: `$f(x)$ 的图象关于直线 $x=@frac{@pi}{3}$ 对称` },
        { k: 'C', t: `$f(x)$ 在 $@left[0,@frac{@pi}{2}@right]$ 上单调递增` },
        { k: 'D', t: `将 $f(x)$ 的图象向左平移 $@frac{@pi}{12}$ 个单位长度，得到 $y=2@sin2x$ 的图象` }
      ],
      answer: 'ABD',
      accept: [],
      solution: [
        `A：$@omega=2$，最小正周期 $T=@frac{2@pi}{2}=@pi$，正确。`,
        `B：当 $x=@frac{@pi}{3}$ 时，$2x-@frac{@pi}{6}=@frac{@pi}{2}$，$f(x)=2$ 取最大值，故图象关于该直线对称，正确。`,
        `C：当 $x@in@left[0,@frac{@pi}{2}@right]$ 时，相位 $2x-@frac{@pi}{6}@in@left[-@frac{@pi}{6},@frac{5@pi}{6}@right]$，正弦先增后减，故 C 错误。`,
        `D：向左平移 $@frac{@pi}{12}$ 得 $2@sin@left(2@left(x+@frac{@pi}{12}@right)-@frac{@pi}{6}@right)=2@sin2x$，正确。`,
        `综上，选 ABD。`
      ],
      hints: ['把相位 $2x-@frac{@pi}{6}$ 看作整体。', '判断单调性要写出相位的完整区间。', '平移只改 $x$，左加右减。'],
      pitfalls: ['C 中只看两个端点的函数值就判断单调。', 'D 中平移量没有乘系数 $2$。'],
      takeaway: '三角函数性质：相位整体化，单调与对称都解相位的不等式或方程。',
      knowledge: ['k-tr-graph', 'k-fn-prop']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 3,
      stem: `某射手每次射击命中目标的概率为 $0.8$，各次射击相互独立。该射手射击 $3$ 次，记命中次数为 $X$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$P(X=3)=0.512$` },
        { k: 'B', t: `$P(X=2)=0.384$` },
        { k: 'C', t: `$P(X@ge2)=0.896$` },
        { k: 'D', t: `$D(X)=0.96$` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `由题意 $X@sim B(3,0.8)$。`,
        `A：$P(X=3)=0.8^3=0.512$，正确。`,
        `B：$P(X=2)=@binom{3}{2}@times0.8^2@times0.2=3@times0.64@times0.2=0.384$，正确。`,
        `C：$P(X@ge2)=0.512+0.384=0.896$，正确。`,
        `D：$D(X)=np(1-p)=3@times0.8@times0.2=0.48$，故 D 错误。综上，选 ABC。`
      ],
      hints: ['先判断是二项分布，写出 $n$ 与 $p$。', '方差公式 $D(X)=np(1-p)$。'],
      pitfalls: ['把方差记成 $np=2.4$ 或误算成 $0.96$。', '求 $P(X@ge2)$ 时漏掉 $X=3$。'],
      takeaway: '独立重复试验：$X@sim B(n,p)$，$E=np$，$D=np(1-p)$。',
      knowledge: ['k-ps-dist', 'k-ps-prob']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 4,
      stem: `已知椭圆 $C:@frac{x^2}{4}+@frac{y^2}{3}=1$ 的左、右焦点分别为 $F_1,F_2$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$C$ 的离心率为 $@frac{1}{2}$` },
        { k: 'B', t: `过 $F_1$ 且垂直于 $x$ 轴的弦长为 $3$` },
        { k: 'C', t: `存在点 $P$ 在 $C$ 上，使 $@angle F_1PF_2=90^@circ$` },
        { k: 'D', t: `$@triangle PF_1F_2$ 面积的最大值为 $@sqrt3$` }
      ],
      answer: 'ABD',
      accept: [],
      solution: [
        `由方程得 $a=2$，$b=@sqrt3$，$c=@sqrt{a^2-b^2}=1$，故 $e=@frac{c}{a}=@frac12$，A 正确。`,
        `B：通径长为 $@frac{2b^2}{a}=@frac{2@times3}{2}=3$，正确。`,
        `C：若 $@angle F_1PF_2=90^@circ$，则 $P$ 在以 $F_1F_2$ 为直径的圆 $x^2+y^2=1$ 上；但椭圆上的点满足 $x^2+y^2=3+@frac{x^2}{4}@ge3>1$，两曲线无交点，故 C 错误。`,
        `D：$S=@frac12|F_1F_2|@cdot|y_P|=|y_P|@le b=@sqrt3$，当 $P$ 为上、下顶点时取到，正确。`,
        `综上，选 ABD。`
      ],
      hints: ['先读出 $a,b,c$。', '通径长为 $@frac{2b^2}{a}$。', '直角条件转化为圆与椭圆是否有交点。'],
      pitfalls: ['通径误记为 $@frac{b^2}{a}$。', 'C 中凭直觉认为一定存在直角。', 'D 中把面积最大值算成 $@frac12@times2@times@sqrt3$ 以外的值。'],
      takeaway: '椭圆小题：基本量先行，直角条件转化为圆，面积最大值看短半轴。',
      knowledge: ['k-ag-conic', 'k-ag-chord']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 3,
      stem: `已知等差数列 $@left@{a_n@right@}$ 中，$a_3=7$，$a_7=15$，则其前 $10$ 项和 $S_{10}=$ ________ .`,
      answer: `$120$`,
      accept: ['120'],
      solution: [
        `公差 $d=@frac{a_7-a_3}{7-3}=@frac{15-7}{4}=2$。`,
        `首项 $a_1=a_3-2d=7-4=3$。`,
        `所以 $S_{10}=10a_1+@frac{10@times9}{2}d=30+45@times2=120$。`
      ],
      hints: ['先用两项求公差，注意下标差是 $4$。', '求和公式 $S_n=na_1+@frac{n(n-1)}{2}d$。'],
      pitfalls: ['把下标差算成 $7-3=4$ 以外的数。', '直接用 $a_3$ 当首项求和。'],
      takeaway: '等差数列基本量：先求 $d$，再回代求 $a_1$，最后套求和公式。',
      knowledge: ['k-seq-basic', 'k-seq-sum']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 4,
      stem: `已知三棱锥 $P-ABC$ 中，$PA@perp$ 平面 $ABC$，$AB=AC=2$，$@angle BAC=90^@circ$，$PA=2$，则该三棱锥外接球的表面积为 ________ .`,
      answer: `$12@pi$`,
      accept: ['12π', '12pi'],
      solution: [
        `底面是等腰直角三角形，斜边 $BC=2@sqrt2$，其外接圆半径 $r=@frac{BC}{2}=@sqrt2$。`,
        `因为 $PA@perp$ 平面 $ABC$，球心在过底面外心且垂直于底面的直线上，且到 $P$、$A$ 距离相等。`,
        `设球半径为 $R$，则 $R^2=r^2+@left(@frac{PA}{2}@right)^2=2+1=3$。`,
        `所以球的表面积 $S=4@pi R^2=12@pi$。`
      ],
      hints: ['先求底面外接圆半径。', '侧棱垂直底面时，球心在底面外心正上方，用勾股关系。'],
      pitfalls: ['把 $PA$ 当作球的直径。', '底面外接圆半径误算成 $2$。'],
      takeaway: '侧棱垂直底面的棱锥：$R^2=r_{@text{底}}^2+@left(@frac{h}{2}@right)^2$。',
      knowledge: ['k-so-sphere']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 4,
      stem: `若函数 $f(x)=e^x-ax$ 恰有两个零点，则实数 $a$ 的取值范围是 ________ .`,
      answer: `$@left(e,+@infty@right)$`,
      accept: ['(e,+∞)', 'a>e', 'e到正无穷'],
      solution: [
        `$f'(x)=e^x-a$。当 $a@le0$ 时 $f'(x)>0$，$f(x)$ 在 $@mathbb{R}$ 上单调递增，至多一个零点，不合题意。`,
        `当 $a>0$ 时，$f(x)$ 在 $@left(-@infty,@ln a@right)$ 上单调递减，在 $@left(@ln a,+@infty@right)$ 上单调递增。`,
        `最小值为 $f(@ln a)=a-a@ln a=a(1-@ln a)$。`,
        `又 $x@to-@infty$ 与 $x@to+@infty$ 时均有 $f(x)@to+@infty$，故恰有两个零点当且仅当最小值小于 $0$。`,
        `即 $1-@ln a<0$，解得 $a>e$，故取值范围为 $@left(e,+@infty@right)$。`
      ],
      hints: ['先按 $a$ 的正负讨论单调性。', '两端都趋于 $+@infty$ 时，两个零点等价于极小值小于 $0$。'],
      pitfalls: ['漏掉 $a@le0$ 的讨论。', '把条件写成极小值 $@le0$，导致端点被包含。'],
      takeaway: '零点个数问题：单调性定形状，极值符号定个数，两端趋势定存在。',
      knowledge: ['k-dv-zero']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `甲、乙两人进行投篮比赛，每人投篮 $2$ 次，每次投中得 $1$ 分，未投中得 $0$ 分。已知甲每次投中的概率为 $@frac{2}{3}$，乙每次投中的概率为 $@frac{1}{2}$，各次投篮相互独立。（1）求甲恰好投中 $1$ 次的概率；（2）记甲的总得分为 $X$，求 $X$ 的分布列与数学期望 $E(X)$；（3）求甲的总得分高于乙的总得分的概率。`,
      answer: `（1）$@frac{4}{9}$；（2）分布列见解析，$E(X)=@frac{4}{3}$；（3）$@frac{4}{9}$`,
      accept: [],
      solution: [
        `（1）甲恰好投中 $1$ 次，即 $2$ 次中选 $1$ 次命中：$P=@binom{2}{1}@times@frac{2}{3}@times@frac{1}{3}=@frac{4}{9}$。`,
        `（2）$X$ 的可能取值为 $0,1,2$，且 $X@sim B@left(2,@frac{2}{3}@right)$。`,
        `$P(X=0)=@left(@frac13@right)^2=@frac19$，$P(X=1)=@frac49$，$P(X=2)=@left(@frac23@right)^2=@frac49$，概率和为 $1$。`,
        `故 $E(X)=0@times@frac19+1@times@frac49+2@times@frac49=@frac{12}{9}=@frac43$（也可用 $E(X)=np=@frac43$）。`,
        `（3）设乙的总得分为 $Y$，则 $Y@sim B@left(2,@frac12@right)$，$P(Y=0)=@frac14$，$P(Y=1)=@frac12$，$P(Y=2)=@frac14$。`,
        `甲得分高于乙，即 $(X,Y)=(1,0),(2,0),(2,1)$，故 $P=@frac49@times@frac14+@frac49@times@frac14+@frac49@times@frac12=@frac19+@frac19+@frac29=@frac49$。`
      ],
      hints: ['先判断得分服从二项分布，写出 $n$ 与 $p$。', '分布列求完要检验概率和为 $1$。', '第 (3) 问按乙的得分分类，逐一列出使 $X>Y$ 的组合。'],
      pitfalls: ['分布列漏掉 $X=0$ 或概率和不为 $1$。', '第 (3) 问只算 $P(X=2)$，忽略 $X=1,Y=0$ 的情形。'],
      takeaway: '独立重复得分：二项分布列全、验和，比较大小按对手取值分类。',
      knowledge: ['k-ps-dist', 'k-ps-prob', 'k-ps-expect']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 3,
      stem: `在直三棱柱 $ABC-A_1B_1C_1$ 中，$@angle ACB=90^@circ$，$AC=BC=2$，$AA_1=2$，$D$ 为 $AB$ 的中点。（1）证明：$AB@perp$ 平面 $CC_1D$；（2）求二面角 $C_1-AB-C$ 的余弦值。`,
      answer: `（1）证明见解析；（2）$@frac{@sqrt3}{3}$`,
      accept: [],
      solution: [
        `以 $C$ 为原点，$CA,CB,CC_1$ 所在直线分别为 $x,y,z$ 轴建系，则 $C(0,0,0)$，$A(2,0,0)$，$B(0,2,0)$，$C_1(0,0,2)$，$D(1,1,0)$。`,
        `（1）$@vec{AB}=(-2,2,0)$，$@vec{CD}=(1,1,0)$，$@vec{CC_1}=(0,0,2)$。`,
        `$@vec{AB}@cdot@vec{CD}=-2+2+0=0$，$@vec{AB}@cdot@vec{CC_1}=0$，即 $AB@perp CD$，$AB@perp CC_1$。`,
        `又 $CD@cap CC_1=C$，且 $AB$ 不在平面 $CC_1D$ 内，所以 $AB@perp$ 平面 $CC_1D$。`,
        `（2）平面 $ABC$ 的法向量可取 $@vec n_1=(0,0,1)$；平面 $C_1AB$ 中，$@vec{C_1A}=(2,0,-2)$，$@vec{C_1B}=(0,2,-2)$。`,
        `设平面 $C_1AB$ 的法向量为 $@vec n_2=(x,y,z)$，由 $2x-2z=0$ 与 $2y-2z=0$ 可取 $@vec n_2=(1,1,1)$。`,
        `$@cos@langle@vec n_1,@vec n_2@rangle=@frac{1}{@sqrt3}=@frac{@sqrt3}{3}$，故二面角 $C_1-AB-C$ 的余弦值为 $@frac{@sqrt3}{3}$。`
      ],
      hints: ['三条棱 $CA,CB,CC_1$ 两两垂直，可直接建系。', '证线面垂直：方向向量与平面内两条相交直线的方向向量都垂直。', '二面角用两平面法向量夹角的余弦，注意取锐角。'],
      pitfalls: ['证线面垂直只验证一条直线，缺少“相交”条件。', '法向量算错或把二面角写成钝角。', '$D$ 点坐标误写成 $(1,0,0)$。'],
      takeaway: '直棱柱建系：证垂直找两条相交直线，求二面角用两法向量。',
      knowledge: ['k-so-parallel', 'k-so-angle']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 4,
      stem: `已知椭圆 $C:@frac{x^2}{a^2}+@frac{y^2}{b^2}=1(a>b>0)$ 的离心率为 $@frac{@sqrt2}{2}$，且经过点 $(2,1)$。（1）求 $C$ 的方程；（2）设 $A,B$ 是 $C$ 上两点，$O$ 为坐标原点，且 $OA@perp OB$，证明：点 $O$ 到直线 $AB$ 的距离为定值，并求出该定值。`,
      answer: `（1）$@frac{x^2}{6}+@frac{y^2}{3}=1$；（2）定值为 $@sqrt2$`,
      accept: [],
      solution: [
        `（1）由 $e^2=@frac{c^2}{a^2}=@frac12$ 得 $a^2=2b^2$。`,
        `代入点 $(2,1)$：$@frac{4}{2b^2}+@frac{1}{b^2}=@frac{3}{b^2}=1$，解得 $b^2=3$，$a^2=6$，故 $C:@frac{x^2}{6}+@frac{y^2}{3}=1$。`,
        `（2）若直线 $AB$ 斜率不存在，设 $AB:x=t$，代入得 $y^2=3-@frac{t^2}{2}$。`,
        `由 $OA@perp OB$ 得 $t^2-y^2=0$，即 $t^2=3-@frac{t^2}{2}$，解得 $t^2=2$，此时 $O$ 到 $AB$ 的距离为 $|t|=@sqrt2$。`,
        `若直线 $AB$ 斜率存在，设 $AB:y=kx+m(m@ne0)$，代入椭圆方程得 $(1+2k^2)x^2+4kmx+2m^2-6=0$。`,
        `由韦达定理 $x_1+x_2=-@frac{4km}{1+2k^2}$，$x_1x_2=@frac{2m^2-6}{1+2k^2}$。`,
        `由 $OA@perp OB$ 得 $x_1x_2+y_1y_2=0$，而 $y_1y_2=k^2x_1x_2+km(x_1+x_2)+m^2$。`,
        `代入整理得 $(1+k^2)x_1x_2+km(x_1+x_2)+m^2=0$，即 $@frac{(1+k^2)(2m^2-6)-4k^2m^2}{1+2k^2}+m^2=0$。`,
        `化简得 $3m^2-6-6k^2=0$，即 $m^2=2(1+k^2)$；此时 $@Delta=24k^4+32k^2+2>0$，直线与椭圆确有两个交点。`,
        `所以 $O$ 到 $AB$ 的距离 $d=@frac{|m|}{@sqrt{1+k^2}}=@frac{@sqrt{2(1+k^2)}}{@sqrt{1+k^2}}=@sqrt2$。`,
        `综上，点 $O$ 到直线 $AB$ 的距离为定值 $@sqrt2$。`
      ],
      hints: ['第 (1) 问用离心率把 $a^2$ 写成 $b^2$ 的倍数，再一次代点。', '第 (2) 问先单独讨论斜率不存在的竖直线。', '联立后先用 $OA@perp OB$ 得 $x_1x_2+y_1y_2=0$，再用韦达消元。', '距离公式 $d=@frac{|m|}{@sqrt{1+k^2}}$，把 $m^2$ 整体代入。'],
      pitfalls: ['漏掉斜率不存在的直线，证明不完整。', '把 $OA@perp OB$ 写成 $x_1x_2-y_1y_2=0$。', '韦达代入后整理出错，未得到 $m^2=2(1+k^2)$。'],
      takeaway: '垂直条件下的定值距离：设线联立、韦达消参，$m^2$ 与 $k^2$ 成比例即得定值。',
      knowledge: ['k-ag-conic', 'k-ag-chord', 'k-ag-vector']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 4,
      stem: `已知函数 $f(x)=@ln x-ax+1$，$a@in@mathbb{R}$。（1）讨论 $f(x)$ 的单调性；（2）若 $f(x)@le0$ 对任意 $x>0$ 恒成立，求 $a$ 的取值范围；（3）证明：对任意正整数 $n$，$1+@frac{1}{2}+@frac{1}{3}+@cdots+@frac{1}{n}>@ln(n+1)$。`,
      answer: `（1）当 $a@le0$ 时，$f(x)$ 在 $@left(0,+@infty@right)$ 上单调递增；当 $a>0$ 时，$f(x)$ 在 $@left(0,@frac{1}{a}@right)$ 上单调递增，在 $@left(@frac{1}{a},+@infty@right)$ 上单调递减。（2）$@left[1,+@infty@right)$。（3）证明见解析。`,
      accept: [],
      solution: [
        `（1）定义域为 $x>0$，$f'(x)=@frac{1}{x}-a=@frac{1-ax}{x}$。`,
        `当 $a@le0$ 时，$f'(x)>0$ 恒成立，$f(x)$ 在 $@left(0,+@infty@right)$ 上单调递增。`,
        `当 $a>0$ 时，由 $f'(x)=0$ 得 $x=@frac1a$；在 $@left(0,@frac1a@right)$ 上 $f'(x)>0$，在 $@left(@frac1a,+@infty@right)$ 上 $f'(x)<0$。`,
        `故 $f(x)$ 在 $@left(0,@frac1a@right)$ 上单调递增，在 $@left(@frac1a,+@infty@right)$ 上单调递减。`,
        `（2）若 $a@le0$，则 $x@to+@infty$ 时 $-ax@to+@infty$，$f(x)@to+@infty$，不能恒有 $f(x)@le0$，故 $a>0$。`,
        `此时 $f(x)$ 的最大值为 $f@left(@frac1a@right)=@ln@frac1a-1+1=-@ln a$。`,
        `由 $f(x)@le0$ 恒成立得 $-@ln a@le0$，即 $@ln a@ge0$，解得 $a@ge1$，故取值范围为 $@left[1,+@infty@right)$。`,
        `（3）由（2）取 $a=1$ 知，对任意 $x>0$ 都有 $@ln x@le x-1$，当且仅当 $x=1$ 时取等号。`,
        `对 $k=1,2,@dots,n$，取 $x=@frac{k+1}{k}>1$，得 $@ln@frac{k+1}{k}<@frac{k+1}{k}-1=@frac1k$。`,
        `将 $k=1,2,@dots,n$ 的不等式相加：$@ln2-@ln1+@ln3-@ln2+@cdots+@ln(n+1)-@ln n<1+@frac12+@cdots+@frac1n$。`,
        `左边逐项相消得 $@ln(n+1)$，故 $1+@frac12+@cdots+@frac1n>@ln(n+1)$。`
      ],
      hints: ['第 (1) 问按 $a$ 的正负讨论导函数符号。', '第 (2) 问先排除 $a@le0$，再令最大值不超过 $0$。', '第 (3) 问从 $a=1$ 取得不等式 $@ln x@le x-1$，再取 $x=@frac{k+1}{k}$ 累加。'],
      pitfalls: ['第 (1) 问忽略定义域 $x>0$。', '第 (2) 问漏掉 $a@le0$ 的排除。', '第 (3) 问取 $x=@frac{k+1}{k}$ 后忘记说明严格不等号成立，或累加时不会消项。'],
      takeaway: '恒成立求参：分离出最大值；证明数列求和不等式：用已证函数不等式取特殊值后累加。',
      knowledge: ['k-dv-monotone', 'k-dv-param', 'k-dv-ineq']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 5,
      stem: `设 $k,n$ 为正整数。若数列 $a_1,a_2,@dots,a_m$ 满足 $a_1=1$，$a_m=n$，且对任意 $1@le i@le m-1$ 都有 $a_{i+1}-a_i@in@left@{1,2,@dots,k@right@}$，则称该数列为“从 $1$ 到 $n$ 的 $k$ 级递增数列”，$m$ 称为它的项数。（1）当 $k=2$，$n=4$ 时，写出所有从 $1$ 到 $4$ 的 $2$ 级递增数列，并求其个数；（2）当 $k=2$ 时，记 $f(n)$ 为从 $1$ 到 $n$ 的 $2$ 级递增数列的个数（$n$ 为正整数）。证明：$f(n)=f(n-1)+f(n-2)$（$n@ge3$），并求 $f(10)$ 与 $f(1)+f(2)+@cdots+f(10)$；（3）从所有从 $1$ 到 $10$ 的 $2$ 级递增数列中随机抽取一个，求抽到的数列项数为 $6$ 的概率。`,
      answer: `（1）$(1,2,3,4),(1,2,4),(1,3,4)$，共 $3$ 个；（2）证明见解析，$f(10)=55$，$f(1)+f(2)+@cdots+f(10)=143$；（3）$@frac{1}{11}$`,
      accept: [],
      solution: [
        `（1）$k=2$ 时每一步只能增加 $1$ 或 $2$，从 $1$ 到 $4$ 的数列为 $(1,2,3,4)$、$(1,2,4)$、$(1,3,4)$，共 $3$ 个。`,
        `（2）对 $n@ge3$，按最后一步分类：若 $a_{m-1}=n-1$，删去末项 $n$ 得到一个从 $1$ 到 $n-1$ 的 $2$ 级递增数列，共 $f(n-1)$ 个；`,
        `若 $a_{m-1}=n-2$，删去末项后得到从 $1$ 到 $n-2$ 的 $2$ 级递增数列，共 $f(n-2)$ 个。`,
        `两类不重不漏，且反过来在任一数列末尾添上相应的项即可还原，故 $f(n)=f(n-1)+f(n-2)$。`,
        `由 $f(1)=1$，$f(2)=1$，依次得 $f(3)=2,f(4)=3,f(5)=5,f(6)=8,f(7)=13,f(8)=21,f(9)=34,f(10)=55$。`,
        `又由递推式 $f(n)=f(n+2)-f(n+1)$，累加得 $f(1)+f(2)+@cdots+f(10)=f(12)-1=144-1=143$。`,
        `（3）由（2）知从 $1$ 到 $10$ 的 $2$ 级递增数列共 $f(10)=55$ 个，且每个被抽到的机会相等。`,
        `项数为 $6$ 即共 $5$ 步，每步为 $1$ 或 $2$，总和为 $9$。设有 $x$ 步为 $2$，则 $2x+(5-x)=9$，得 $x=4$。`,
        `即 $5$ 步中恰有 $4$ 步为 $2$、$1$ 步为 $1$，只需选定哪一步为 $1$，共 $@binom{5}{1}=5$ 个数列。`,
        `故所求概率 $P=@frac{5}{55}=@frac{1}{11}$。`
      ],
      hints: ['第 (1) 问直接按“每步增加 1 或 2”枚举。', '第 (2) 问按倒数第二项是 $n-1$ 还是 $n-2$ 分类，构造一一对应。', '第 (3) 问先确定总个数，再把“项数为 6”转化为 5 步中 2 的个数。'],
      pitfalls: ['第 (1) 问漏掉 $(1,3,4)$，或把顺序不同的同一数列重复计数。', '第 (2) 问只说“分类”而不说明两类不重不漏、可逆还原。', '第 (3) 问把项数 $6$ 误当成步数 $6$，导致组合数用错。'],
      takeaway: '新定义计数题：先读懂规则枚举小情形，再按最后一步分类建立递推，最后把概率化为计数之比。',
      knowledge: ['k-seq-recursion', 'k-count', 'k-ps-prob']
    }
  ]
});
