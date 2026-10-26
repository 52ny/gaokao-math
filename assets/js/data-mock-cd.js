/* 2026 届成都七中风格仿真卷 · 题库数据
 * 仿真自编：19 题结构，8 单选 + 3 多选 + 3 填空 + 5 解答，满分 150。
 * 公式约定：LaTeX 反斜杠一律写成 @；公式用 $...$ 包裹；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: 'mock-cd',
  title: '2026 届成都七中风格仿真卷（数学）',
  short: '成都七中仿真',
  year: 2026, region: '成都七中', kind: 'mock', duration: 150,
  note: '仿真自编：19 题结构；第19题新定义',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `已知集合 $A=@left@{x@mid |x-1|<2@right@}$，$B=@left@{x@mid x^2-x-6<0@right@}$，则“$x@in A$”是“$x@in B$”的`,
      options: [
        { k: 'A', t: `必要不充分条件` },
        { k: 'B', t: `充分不必要条件` },
        { k: 'C', t: `充要条件` },
        { k: 'D', t: `既不充分也不必要条件` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `解绝对值不等式：$-2<x-1<2$，得 $A=@left(-1,3@right)$。`,
        `解二次不等式：$(x-3)(x+2)<0$，得 $B=@left(-2,3@right)$。`,
        `因为 $A$ 是 $B$ 的真子集，所以 $x@in A@Rightarrow x@in B$；但取 $x=-1.5@in B$ 而 $-1.5@notin A$，反之不成立。`,
        `故“$x@in A$”是“$x@in B$”的充分不必要条件，选 B。`
      ],
      hints: ['先解两个不等式，把集合化简成区间。', '把集合的包含关系转化为充分必要条件的判断。', '小范围能推出大范围，反之不行。'],
      pitfalls: ['解二次不等式时把符号方向弄反。', '看到 $A$ 是 $B$ 的子集就说成必要条件。'],
      takeaway: '充分必要条件：小范围推大范围；真子集关系对应“充分不必要”。',
      knowledge: ['k-set-ops', 'k-logic']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 3,
      stem: `已知复数 $z$ 满足 $|z+1|=2|z-1|$，则 $|z|$ 的最大值为`,
      options: [
        { k: 'A', t: `$2$` },
        { k: 'B', t: `$3$` },
        { k: 'C', t: `$@frac43$` },
        { k: 'D', t: `$@frac53$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `设 $z=x+yi(x,y@in@mathbb{R})$，把条件两边平方：$(x+1)^2+y^2=4@left[(x-1)^2+y^2@right]$。`,
        `整理得 $3x^2+3y^2-10x+3=0$，配方为 $@left(x-@frac53@right)^2+y^2=@frac{16}{9}$。`,
        `所以 $z$ 对应的点在圆心为 $(@frac53,0)$、半径为 $@frac43$ 的圆上。`,
        `$|z|$ 表示原点到该圆上点的距离，最大值为 $@frac53+@frac43=3$，选 B。`
      ],
      hints: ['模长条件两边平方可以去掉根号。', '把等式整理成圆的标准方程。', '最大模长等于圆心到原点的距离加半径。'],
      pitfalls: ['平方时漏掉右边的系数 $4$。', '把最大模长误写成半径 $@frac43$。', '配方时常数项算错。'],
      takeaway: '复数模的轨迹：平方化圆，最值看圆心距与半径。',
      knowledge: ['k-cx-geo', 'k-cx-basic']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 2,
      stem: `在 $@triangle ABC$ 中，$AB=2$，$AC=3$，$@angle BAC=60^@circ$，$D$ 为 $BC$ 的中点，则 $|@vec{AD}|=$`,
      options: [
        { k: 'A', t: `$@frac{@sqrt{13}}{2}$` },
        { k: 'B', t: `$@frac{@sqrt7}{2}$` },
        { k: 'C', t: `$@frac{@sqrt{19}}{2}$` },
        { k: 'D', t: `$@sqrt{19}$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `由中点得 $@vec{AD}=@frac12(@vec{AB}+@vec{AC})$。`,
        `平方得 $|@vec{AD}|^2=@frac14@left(|@vec{AB}|^2+|@vec{AC}|^2+2@vec{AB}@cdot@vec{AC}@right)$。`,
        `其中 $@vec{AB}@cdot@vec{AC}=2@times3@times@cos60^@circ=3$。`,
        `所以 $|@vec{AD}|^2=@frac14(4+9+6)=@frac{19}{4}$，即 $|@vec{AD}|=@frac{@sqrt{19}}{2}$，选 C。`
      ],
      hints: ['中线向量等于两边向量和的一半。', '求模长先平方，交叉项用数量积。', '数量积等于两模长乘夹角余弦。'],
      pitfalls: ['平方展开时交叉项漏乘 $2$。', '把中线长误当成 $BC$ 的一半。'],
      takeaway: '中线长用向量最快：$4AD^2=2AB^2+2AC^2-BC^2$。',
      knowledge: ['k-vec-dot', 'k-vec-linear']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 3,
      stem: `已知 $@sin@left(@alpha+@frac{@pi}{6}@right)=@frac35$，$@alpha@in@left(0,@frac{@pi}{2}@right)$，则 $@cos@left(2@alpha+@frac{@pi}{3}@right)=$`,
      options: [
        { k: 'A', t: `$-@frac7{25}$` },
        { k: 'B', t: `$@frac{24}{25}$` },
        { k: 'C', t: `$@frac7{25}$` },
        { k: 'D', t: `$-@frac{24}{25}$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `令 $@theta=@alpha+@frac{@pi}{6}$，则 $@theta@in@left(@frac{@pi}{6},@frac{2@pi}{3}@right)$，且 $@sin@theta=@frac35$。`,
        `若 $@theta@in@left(@frac{@pi}{2},@frac{2@pi}{3}@right)$，则 $@sin@theta@ge@sin@frac{2@pi}{3}=@frac{@sqrt3}{2}>@frac35$，矛盾，故 $@theta@in@left(@frac{@pi}{6},@frac{@pi}{2}@right)$，$@cos@theta=@frac45$。`,
        `又 $2@alpha+@frac{@pi}{3}=2@theta$，所以所求式为 $@cos2@theta=@cos^2@theta-@sin^2@theta$。`,
        `代入得 $@frac{16}{25}-@frac{9}{25}=@frac7{25}$，选 C。`
      ],
      hints: ['设整体角 $@theta=@alpha+@frac{@pi}{6}$，所求角正好是 $2@theta$。', '先用范围排除 $@cos@theta<0$ 的情形。', '用二倍角公式 $@cos2@theta=@cos^2@theta-@sin^2@theta$。'],
      pitfalls: ['不讨论 $@theta$ 的范围，出现 $@cos@theta=-@frac45$ 的增解。', '把所求角与 $@theta$ 的倍数关系写错。', '二倍角公式符号写反。'],
      takeaway: '给值求值：设整体角，先定范围与符号，再用二倍角公式。',
      knowledge: ['k-tr-identity']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 3,
      stem: `已知等比数列 $@left@{a_n@right@}$ 的前 $n$ 项和为 $S_n$，且 $S_3=3$，$S_6=9$，则 $S_9=$`,
      options: [
        { k: 'A', t: `$15$` },
        { k: 'B', t: `$21$` },
        { k: 'C', t: `$24$` },
        { k: 'D', t: `$27$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `若公比 $q=1$，则 $S_6=2S_3=6@ne9$，矛盾，故 $q@ne1$。`,
        `由 $@frac{S_6}{S_3}=@frac{1-q^6}{1-q^3}=1+q^3=3$，得 $q^3=2$。`,
        `又 $@frac{S_9}{S_3}=@frac{1-q^9}{1-q^3}=1+q^3+q^6=1+2+4=7$。`,
        `所以 $S_9=7S_3=21$，选 B。`
      ],
      hints: ['先判断公比能否为 $1$。', '把 $@frac{S_6}{S_3}$ 化成 $1+q^3$。', '把 $@frac{S_9}{S_3}$ 用 $q^3$ 表示。'],
      pitfalls: ['忽略 $q=1$ 的讨论。', '把 $@frac{1-q^9}{1-q^3}$ 误算为 $1+q^3$。'],
      takeaway: '等比数列片段和：$S_3,S_6-S_3,S_9-S_6$ 成等比，公比为 $q^3$。',
      knowledge: ['k-seq-sum', 'k-seq-basic']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 3,
      stem: `已知正四棱锥 $P-ABCD$ 的底面边长为 $2$，侧棱长也为 $2$，则其外接球的表面积为`,
      options: [
        { k: 'A', t: `$4@pi$` },
        { k: 'B', t: `$12@pi$` },
        { k: 'C', t: `$16@pi$` },
        { k: 'D', t: `$8@pi$` }
      ],
      answer: 'D',
      accept: [],
      solution: [
        `底面正方形外接圆半径 $r=@frac{@sqrt2}{2}@times2=@sqrt2$。`,
        `棱锥的高 $h=@sqrt{2^2-(@sqrt2)^2}=@sqrt2$。`,
        `球心在高所在直线上，设球心到底面中心距离为 $d$，则 $R=h-d$，且 $R^2=r^2+d^2$。`,
        `代入得 $(@sqrt2-d)^2=2+d^2$，解得 $d=0$，即球心为底面中心，$R=@sqrt2$。`,
        `表面积 $S=4@pi R^2=8@pi$，选 D。`
      ],
      hints: ['先求底面外接圆半径与棱锥的高。', '球心必在棱锥的高所在直线上。', '用“球心到顶点与到底面顶点的距离都等于 $R$”列方程。'],
      pitfalls: ['把底面外接圆半径当成 $1$。', '把球心默认在棱锥内部高处。', '把表面积写成 $4@pi R$。'],
      takeaway: '正棱锥外接球：球心在高线上，用 $R^2=r^2+d^2$ 与 $R=h-d$ 联立。',
      knowledge: ['k-so-sphere', 'k-so-solid']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 3,
      stem: `已知双曲线 $C:@frac{x^2}{a^2}-@frac{y^2}{b^2}=1(a>0,b>0)$ 的一条渐近线与圆 $x^2+y^2-4x+3=0$ 相切，则 $C$ 的离心率为`,
      options: [
        { k: 'A', t: `$@sqrt2$` },
        { k: 'B', t: `$@frac{2@sqrt3}{3}$` },
        { k: 'C', t: `$@frac{@sqrt3}{2}$` },
        { k: 'D', t: `$2$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `圆方程化为 $(x-2)^2+y^2=1$，圆心为 $(2,0)$，半径为 $1$。`,
        `渐近线为 $y=@frac ba x$，即 $bx-ay=0$。`,
        `相切即圆心到渐近线距离等于半径：$@frac{|2b|}{@sqrt{a^2+b^2}}=1$，平方得 $4b^2=a^2+b^2$，即 $a^2=3b^2$。`,
        `所以 $e^2=1+@frac{b^2}{a^2}=1+@frac13=@frac43$，结合 $e>1$ 得 $e=@frac{2@sqrt3}{3}$，选 B。`
      ],
      hints: ['先把圆的方程化成标准式。', '渐近线写成一般式，用点到直线距离公式。', '由 $a,b$ 的关系求 $e^2=1+@frac{b^2}{a^2}$。'],
      pitfalls: ['把渐近线方程写错。', '相切条件忘记平方就解方程。', '把离心率写成 $@frac ac$ 的倒数。'],
      takeaway: '渐近线与圆相切：距离等于半径建方程，再化为离心率。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 3,
      stem: `若不等式 $@ln x@le ax-1$ 对任意 $x>0$ 恒成立，则实数 $a$ 的取值范围是`,
      options: [
        { k: 'A', t: `$@left(0,1@right]$` },
        { k: 'B', t: `$@left(-@infty,1@right]$` },
        { k: 'C', t: `$@left[e,+@infty@right)$` },
        { k: 'D', t: `$@left[1,+@infty@right)$` }
      ],
      answer: 'D',
      accept: [],
      solution: [
        `令 $g(x)=@ln x-ax+1$，则 $g'(x)=@frac1x-a$。`,
        `若 $a@le0$，则 $g'(x)>0$，$g(x)$ 在 $(0,+@infty)$ 上无上界，不等式不可能恒成立。`,
        `若 $a>0$，则 $g(x)$ 在 $x=@frac1a$ 处取最大值 $g@left(@frac1a@right)=-@ln a$。`,
        `恒成立需 $-@ln a@le0$，即 $a@ge1$。`,
        `综上 $a@in@left[1,+@infty@right)$，选 D。`
      ],
      hints: ['移项构造函数 $g(x)=@ln x-ax+1$。', '按 $a@le0$ 与 $a>0$ 分类讨论。', '最大值点为 $x=@frac1a$，最大值为 $-@ln a$。'],
      pitfalls: ['忽略 $a@le0$ 时函数无上界。', '把 $-@ln a@le0$ 解成 $a@le1$。', '把端点 $a=1$ 排除。'],
      takeaway: '恒成立问题：移项构造函数，分类讨论单调性，用最大值列不等式。',
      knowledge: ['k-dv-ineq', 'k-dv-monotone']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_1=2$，$a_{n+1}=@frac{a_n}{1+2a_n}(n@in@mathbb{N}^*)$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$a_n=@frac{2}{4n-3}$` },
        { k: 'B', t: `$@left@{@frac{1}{a_n}@right@}$ 是公差为 $2$ 的等差数列` },
        { k: 'C', t: `对任意正整数 $n$，都有 $a_n>@frac1n$` },
        { k: 'D', t: `$a_1a_2a_3=@frac{8}{45}$` }
      ],
      answer: 'ABD',
      accept: [],
      solution: [
        `显然 $a_n>0$。对递推式取倒数：$@frac{1}{a_{n+1}}=@frac{1+2a_n}{a_n}=@frac{1}{a_n}+2$。`,
        `所以 $@left@{@frac{1}{a_n}@right@}$ 是首项为 $@frac12$、公差为 $2$ 的等差数列，B 正确。`,
        `$@frac{1}{a_n}=@frac12+2(n-1)=@frac{4n-3}{2}$，故 $a_n=@frac{2}{4n-3}$，A 正确。`,
        `由 $@frac{2}{4n-3}>@frac1n$ 得 $2n>4n-3$，即 $n<@frac32$，只对 $n=1$ 成立，C 错误。`,
        `$a_1a_2a_3=2@times@frac25@times@frac29=@frac{8}{45}$，D 正确。综上选 ABD。`
      ],
      hints: ['分式递推考虑取倒数。', '取倒数前说明各项为正。', '不等式判断把 $n$ 的范围算清楚。'],
      pitfalls: ['取倒数时漏掉 $a_n>0$ 的说明。', '把 $@frac{1}{a_n}$ 的通项写成 $@frac12+2n$。', '误以为 $a_n>@frac1n$ 对所有 $n$ 成立。'],
      takeaway: '形如 $a_{n+1}=@frac{a_n}{pa_n+q}$ 的递推：取倒数化为等差数列。',
      knowledge: ['k-seq-recursion', 'k-seq-basic']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 4,
      stem: `在棱长为 $2$ 的正方体 $ABCD-A_1B_1C_1D_1$ 中，下列结论正确的是`,
      options: [
        { k: 'A', t: `三棱锥 $A_1-ABD$ 的体积为 $@frac43$` },
        { k: 'B', t: `平面 $A_1BD$ 与平面 $ABCD$ 所成锐二面角的大小为 $@arctan@sqrt2$` },
        { k: 'C', t: `$A_1C@perp BD$` },
        { k: 'D', t: `点 $C$ 到平面 $A_1BD$ 的距离为 $@frac{@sqrt3}{3}$` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `以 $A$ 为原点，$AB,AD,AA_1$ 所在直线为 $x,y,z$ 轴建系：$A(0,0,0)$，$B(2,0,0)$，$D(0,2,0)$，$A_1(0,0,2)$，$C(2,2,0)$。`,
        `A：底面 $@triangle ABD$ 的面积为 $2$，高为 $2$，故 $V=@frac13@times2@times2=@frac43$，正确。`,
        `B：平面 $A_1BD$ 的方程为 $x+y+z=2$，法向量 $(1,1,1)$；底面法向量 $(0,0,1)$，$@cos@theta=@frac1{@sqrt3}$，故 $@tan@theta=@sqrt2$，正确。`,
        `C：$@vec{A_1C}=(2,2,-2)$，$@vec{BD}=(-2,2,0)$，$@vec{A_1C}@cdot@vec{BD}=-4+4+0=0$，正确。`,
        `D：点 $C(2,2,0)$ 到平面 $x+y+z=2$ 的距离为 $@frac{|4-2|}{@sqrt3}=@frac{2@sqrt3}{3}@ne@frac{@sqrt3}{3}$，错误。综上选 ABC。`
      ],
      hints: ['建系后把点、向量、平面方程逐一写出。', '二面角先看两法向量的夹角，再由图形判断锐钝。', '点到平面距离用 $@frac{|Ax_0+By_0+Cz_0+D|}{@sqrt{A^2+B^2+C^2}}$。'],
      pitfalls: ['体积公式漏乘 $@frac13$。', '把 $@tan@theta=@sqrt2$ 与 $@cos@theta=@frac1{@sqrt3}$ 弄混。', '距离公式分母忘记开方。'],
      takeaway: '立体几何多选：建系逐项算，角、距离、体积各有固定套路。',
      knowledge: ['k-so-solid', 'k-so-angle']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 4,
      stem: `已知函数 $f(x)=@frac{@ln x}{x}$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$f(x)$ 在 $(0,e)$ 上单调递增，在 $(e,+@infty)$ 上单调递减` },
        { k: 'B', t: `$f(x)$ 的极大值为 $1$` },
        { k: 'C', t: `若 $f(x)@le a$ 对任意 $x>0$ 恒成立，则 $a$ 的最小值为 $@frac1e$` },
        { k: 'D', t: `若方程 $f(x)=k$ 有两个不同的正根，则 $0<k<@frac1e$` }
      ],
      answer: 'ACD',
      accept: [],
      solution: [
        `$f'(x)=@frac{1-@ln x}{x^2}$，在 $(0,e)$ 上为正，在 $(e,+@infty)$ 上为负，A 正确。`,
        `所以 $f(x)$ 在 $x=e$ 处取极大值（也是最大值）$f(e)=@frac1e@ne1$，B 错误。`,
        `恒成立需 $a@ge f(x)_{@text{max}}=@frac1e$，故 $a$ 的最小值为 $@frac1e$，C 正确。`,
        `当 $x@to0^+$ 时 $f(x)@to-@infty$；当 $x@to+@infty$ 时 $f(x)@to0^+$，且 $x@in(0,1)$ 时 $f(x)<0$。`,
        `结合单调性，$0<k<@frac1e$ 时在 $(1,e)$ 与 $(e,+@infty)$ 内各有一个根，共两个正根，D 正确。综上选 ACD。`
      ],
      hints: ['先求导，确定单调区间与极值。', '最大值即极大值，可用于恒成立问题。', '方程根个数结合单调性与两端趋势判断。'],
      pitfalls: ['把极大值算成 $1$。', '忽略 $x@in(0,1)$ 时 $f(x)<0$，误判根的个数。', '恒成立时把“$a$ 的最小值”与“$a$ 的最大值”弄反。'],
      takeaway: '$@frac{@ln x}{x}$ 是常用母函数：先求导，再画草图定根的个数。',
      knowledge: ['k-dv-monotone', 'k-dv-extreme', 'k-fn-prop']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 3,
      stem: `在 $@left(x+@frac{2}{x^2}@right)^6$ 的展开式中，常数项为 ________ .`,
      answer: `$60$`,
      accept: ['60'],
      solution: [
        `通项 $T_{k+1}=@mathrm{C}_6^k x^{6-k}@left(@frac{2}{x^2}@right)^k=@mathrm{C}_6^k2^k x^{6-3k}$。`,
        `令 $6-3k=0$，得 $k=2$。`,
        `常数项为 $@mathrm{C}_6^2@times2^2=15@times4=60$。`
      ],
      hints: ['先写通项，把 $x$ 的指数合并。', '常数项即 $x$ 的指数为 $0$。', '系数中的 $2^k$ 不要漏掉。'],
      pitfalls: ['把 $@left(@frac{2}{x^2}@right)^k$ 的指数算成 $-2$。', '求出 $k$ 后忘记乘 $2^k$。'],
      takeaway: '二项式常数项：通项合并指数，令指数为零求 $k$，再代回系数。',
      knowledge: ['k-binomial']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 2,
      stem: `已知一组数据 $x_1,x_2,@dots,x_6$ 的平均数为 $3$，方差为 $2$。若 $y_i=2x_i+1(i=1,2,@dots,6)$，则 $y_1,y_2,@dots,y_6$ 的方差为 ________ .`,
      answer: `$8$`,
      accept: ['8'],
      solution: [
        `由方差的性质 $D(aX+b)=a^2D(X)$，这里系数 $a=2$。`,
        `常数平移不改变方差，故只乘系数平方。`,
        `所以新数据的方差为 $2^2@times2=8$。`
      ],
      hints: ['回忆方差的性质 $D(aX+b)=a^2D(X)$。', '常数平移不影响方差，只影响平均数。'],
      pitfalls: ['把方差乘以 $2$ 而不是 $4$。', '把平均数一起变换后误当成答案。'],
      takeaway: '线性变换后的方差只与系数的平方有关。',
      knowledge: ['k-ps-stat']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 3,
      stem: `若不等式 $|x-a|+|x-1|@ge2$ 对任意实数 $x$ 都成立，则实数 $a$ 的取值范围是 ________ .`,
      answer: `$@left(-@infty,-1@right]@cup@left[3,+@infty@right)$`,
      accept: ['(-∞,-1]∪[3,+∞)', 'a<=-1或a>=3', 'a≤-1或a≥3'],
      solution: [
        `由绝对值三角不等式 $|x-a|+|x-1|@ge|(x-a)-(x-1)|=|a-1|$。`,
        `当 $x$ 介于 $a$ 与 $1$ 之间时取到等号，故左边的最小值为 $|a-1|$。`,
        `恒成立需 $|a-1|@ge2$，即 $a-1@ge2$ 或 $a-1@le-2$。`,
        `解得 $a@ge3$ 或 $a@le-1$。`
      ],
      hints: ['用绝对值三角不等式求左边的最小值。', '最小值在 $x$ 位于 $a$ 与 $1$ 之间时取到。', '把“恒成立”转化为 $|a-1|@ge2$。'],
      pitfalls: ['把最小值误算为 $|a+1|$。', '解绝对值不等式时漏掉一支。'],
      takeaway: '$|x-a|+|x-b|$ 的最小值为 $|a-b|$。',
      knowledge: ['k-ie-abs']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `在 $@triangle ABC$ 中，内角 $A,B,C$ 所对的边分别为 $a,b,c$，且 $(2a-c)@cos B=b@cos C$。（1）求 $B$；（2）若 $b=@sqrt6$，求 $@triangle ABC$ 周长的最大值。`,
      answer: `(1) $@frac{@pi}{3}$；(2) $3@sqrt6$`,
      accept: [],
      solution: [
        `由投影定理 $b@cos C+c@cos B=a$，代入条件得 $(2a-c)@cos B=a-c@cos B$，即 $2a@cos B=a$。`,
        `因为 $a>0$，所以 $@cos B=@frac12$；又 $B@in(0,@pi)$，故 $B=@frac{@pi}{3}$。`,
        `由余弦定理 $b^2=a^2+c^2-2ac@cos B$，即 $6=a^2+c^2-ac$。`,
        `于是 $(a+c)^2=6+3ac@le6+@frac34(a+c)^2$，解得 $(a+c)^2@le24$，即 $a+c@le2@sqrt6$。`,
        `等号当且仅当 $a=c=@sqrt6$ 时成立，所以周长最大值为 $2@sqrt6+@sqrt6=3@sqrt6$。`
      ],
      hints: ['第（1）问用投影定理把 $b@cos C$ 换成 $a-c@cos B$。', '第（2）问用余弦定理建立 $a+c$ 与 $ac$ 的关系。', '用 $ac@le@frac{(a+c)^2}{4}$ 求 $a+c$ 的上界。'],
      pitfalls: ['约去 $a$ 时不说明 $a>0$。', '余弦定理中交叉项符号写错。', '求出 $a+c$ 的最大值后忘记加上 $b$。'],
      takeaway: '解三角形：投影定理定角，余弦定理加基本不等式求周长或面积最值。',
      knowledge: ['k-tr-solve', 'k-ie-basic']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 4,
      stem: `在四棱锥 $P-ABCD$ 中，底面 $ABCD$ 是边长为 $2$ 的菱形，$@angle DAB=60^@circ$，$@triangle PAD$ 为正三角形，且平面 $PAD@perp$ 平面 $ABCD$。（1）证明：$PB@perp AD$；（2）求二面角 $P-BC-D$ 的余弦值。`,
      answer: `(1) 证明见解析；(2) $@frac{@sqrt2}{2}$`,
      accept: [],
      solution: [
        `取 $AD$ 中点 $M$，连接 $PM,MB$。因 $@triangle PAD$ 为正三角形，$PM@perp AD$；又平面 $PAD@perp$ 平面 $ABCD$ 且交线为 $AD$，故 $PM@perp$ 平面 $ABCD$。`,
        `在菱形中 $AB=AD=2$，$AM=1$，$@angle MAB=60^@circ$，由余弦定理 $MB^2=1+4-2@times1@times2@times@frac12=3$，所以 $AM^2+MB^2=AB^2$，即 $AD@perp MB$。`,
        `由 $AD@perp PM$、$AD@perp MB$ 且 $PM@cap MB=M$，得 $AD@perp$ 平面 $PMB$，而 $PB@subset$ 平面 $PMB$，故 $PB@perp AD$。`,
        `以 $M$ 为原点，$MB,MD,MP$ 方向为 $x,y,z$ 轴建系：$M(0,0,0)$，$B(@sqrt3,0,0)$，$C(@sqrt3,2,0)$，$D(0,1,0)$，$P(0,0,@sqrt3)$。`,
        `平面 $PBC$ 的方程为 $x+z=@sqrt3$，法向量 $@vec n=(1,0,1)$；平面 $ABCD$ 的法向量 $@vec m=(0,0,1)$。`,
        `由图形知二面角为锐角，$@cos@theta=@frac{|@vec n@cdot@vec m|}{|@vec n||@vec m|}=@frac1{@sqrt2}=@frac{@sqrt2}{2}$，即二面角 $P-BC-D$ 的余弦值为 $@frac{@sqrt2}{2}$。`
      ],
      hints: ['第（1）问取 $AD$ 中点 $M$，证 $AD@perp$ 平面 $PMB$。', '面面垂直的性质：在其中一个面内作交线的垂线。', '第（2）问建系，先求平面 $PBC$ 的法向量。', '最后由图形判断二面角是锐角还是钝角。'],
      pitfalls: ['只证 $AD@perp PM$ 就下结论，缺少 $AD@perp MB$。', '建系时把 $C$ 的坐标写错。', '直接用两法向量夹角作答，未判断二面角范围。'],
      takeaway: '面面垂直转化线面垂直；二面角建系求法向量，再用图形定符号。',
      knowledge: ['k-so-parallel', 'k-so-angle', 'k-so-solid']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 3,
      stem: `袋中有 $3$ 个红球和 $2$ 个白球，除颜色外完全相同。每次从中随机摸出 $1$ 个球，摸出后不放回，直到摸到红球为止。记 $X$ 为摸球的次数。（1）求 $X$ 的分布列；（2）求 $E(X)$；（3）求在至少摸 $2$ 次的条件下，恰好摸 $2$ 次的概率。`,
      answer: `(1) $P(X=1)=@frac35$，$P(X=2)=@frac3{10}$，$P(X=3)=@frac1{10}$；(2) $@frac32$；(3) $@frac34$`,
      accept: [],
      solution: [
        `$X=1$ 表示第一次就摸到红球，$P(X=1)=@frac35$。`,
        `$X=2$ 表示第一次白、第二次红，$P(X=2)=@frac25@times@frac34=@frac3{10}$。`,
        `$X=3$ 表示前两次都是白球，此时第三次必为红球，$P(X=3)=@frac25@times@frac14=@frac1{10}$。`,
        `$E(X)=1@times@frac35+2@times@frac3{10}+3@times@frac1{10}=@frac32$。`,
        `$P(X@ge2)=1-@frac35=@frac25$，故所求条件概率为 $@frac{3/10}{2/5}=@frac34$。`
      ],
      hints: ['$X$ 的取值由白球个数决定，最多摸 $3$ 次。', '每次摸球后总数与白球数都在变化。', '条件概率用 $P(A|B)=@frac{P(A@cap B)}{P(B)}$。'],
      pitfalls: ['把不放回当成有放回。', '计算 $P(X=3)$ 时漏掉第三次必为红球。', '条件概率的分母误用 $1$。'],
      takeaway: '不放回摸球：逐次更新概率；条件概率先算交事件与条件事件。',
      knowledge: ['k-ps-dist', 'k-ps-expect', 'k-ps-prob']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 4,
      stem: `已知椭圆 $C:@frac{x^2}{4}+@frac{y^2}{3}=1$，左、右焦点分别为 $F_1,F_2$，直线 $l$ 过 $F_2$ 且与 $C$ 交于 $A,B$ 两点。（1）求 $C$ 的离心率；（2）若 $l$ 的斜率为 $1$，求 $|AB|$；（3）求 $@triangle F_1AB$ 面积的最大值，并求此时 $l$ 的方程。`,
      answer: `(1) $@frac12$；(2) $@frac{24}{7}$；(3) 最大值为 $3$，此时 $l:x=1$`,
      accept: [],
      solution: [
        `由方程得 $a=2$，$b=@sqrt3$，$c=@sqrt{a^2-b^2}=1$，所以 $e=@frac ca=@frac12$。`,
        `斜率 $1$ 时 $l:y=x-1$，代入 $3x^2+4y^2=12$ 得 $7x^2-8x-8=0$。`,
        `由韦达定理 $x_1+x_2=@frac87$，$x_1x_2=-@frac87$，故 $|x_1-x_2|=@frac{12@sqrt2}{7}$，$|AB|=@sqrt2|x_1-x_2|=@frac{24}{7}$。`,
        `设 $l:x=my+1$，代入得 $(3m^2+4)y^2+6my-9=0$，则 $|y_1-y_2|=@frac{12@sqrt{m^2+1}}{3m^2+4}$。`,
        `$S=@frac12|F_1F_2||y_1-y_2|=@frac{12@sqrt{m^2+1}}{3m^2+4}$。令 $t=@sqrt{m^2+1}@ge1$，则 $S=@frac{12}{3t+@frac1t}@le@frac{12}{4}=3$。`,
        `等号在 $t=1$（即 $m=0$）时取到，故面积最大值为 $3$，此时 $l:x=1$。`
      ],
      hints: ['第（1）问由方程读出 $a,b,c$。', '第（2）问联立后用韦达定理，弦长用 $@sqrt{1+k^2}|x_1-x_2|$。', '第（3）问设 $x=my+1$ 可避免讨论斜率不存在。', '把面积写成 $@frac12|F_1F_2||y_1-y_2|$ 后再换元求最值。'],
      pitfalls: ['设斜截式时漏掉斜率不存在的情况。', '韦达定理符号写错。', '换元后没有写 $t@ge1$，最值取错。'],
      takeaway: '椭圆焦点弦：设 $x=my+c$，韦达加弦长、面积公式，再换元求最值。',
      knowledge: ['k-ag-conic', 'k-ag-chord', 'k-ag-area']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 5,
      stem: `设 $n$ 为正整数，$@sigma$ 是 $@left@{1,2,@dots,n@right@}$ 的一个排列。若对任意 $i@in@left@{1,2,@dots,n@right@}$，都有 $|@sigma(i)-i|@le1$，则称 $@sigma$ 为 $n$ 级“邻位排列”，记 $n$ 级邻位排列的个数为 $a_n$。（1）写出所有 $3$ 级邻位排列，并求 $a_3$；（2）证明：$a_n=a_{n-1}+a_{n-2}(n@ge3)$；（3）求 $a_{10}$。`,
      answer: `(1) $(1,2,3),(2,1,3),(1,3,2)$，$a_3=3$；(2) 证明见解析；(3) $89$`,
      accept: [],
      solution: [
        `（1）由 $|@sigma(i)-i|@le1$ 知每个数只能原地不动或与相邻位置交换，逐一列举得 $(1,2,3),(2,1,3),(1,3,2)$，故 $a_3=3$。`,
        `（2）考察 $@sigma(n)$：由 $|@sigma(n)-n|@le1$ 知 $@sigma(n)=n$ 或 $@sigma(n)=n-1$。`,
        `若 $@sigma(n)=n$，则前 $n-1$ 项构成 $n-1$ 级邻位排列，有 $a_{n-1}$ 个。`,
        `若 $@sigma(n)=n-1$，则值 $n$ 只能放在第 $n-1$ 位（否则第 $n-1$ 位与 $n-1$ 的距离超过 $1$），此时前 $n-2$ 项构成 $n-2$ 级邻位排列，有 $a_{n-2}$ 个。`,
        `两类互斥且完备，故 $a_n=a_{n-1}+a_{n-2}$。`,
        `（3）$a_1=1$，$a_2=2$，由递推依次得 $a_3=3,a_4=5,a_5=8,a_6=13,a_7=21,a_8=34,a_9=55,a_{10}=89$。`
      ],
      hints: ['第（1）问按 $|@sigma(i)-i|@le1$ 逐一列举。', '第（2）问按 $@sigma(n)=n$ 与 $@sigma(n)=n-1$ 分类。', '当 $@sigma(n)=n-1$ 时，$@sigma(n-1)$ 被唯一确定为 $n$。', '第（3）问用递推逐项计算。'],
      pitfalls: ['第（2）问忽略 $@sigma(n)$ 只能取 $n$ 或 $n-1$。', '分类时两类重叠或遗漏。', '递推初值 $a_1,a_2$ 写错。'],
      takeaway: '新定义计数：先列举验证，再按末位分类建立递推，最后逐项求值。',
      knowledge: ['k-count']
    }
  ]
});
