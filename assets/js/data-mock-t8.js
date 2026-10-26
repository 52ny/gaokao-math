/* 2026 届 T8 联考风格仿真卷 · 题库数据
 * 仿真自编：19 题结构，8 单选 + 3 多选 + 3 填空 + 5 解答，满分 150。
 * 公式约定：LaTeX 反斜杠一律写成 @；公式用 $...$ 包裹；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: 'mock-t8',
  title: '2026 届 T8 联考风格仿真卷（数学）',
  short: 'T8 联考仿真',
  year: 2026, region: 'T8 联考', kind: 'mock', duration: 150,
  note: '仿真自编：19 题结构；第19题为新定义压轴',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `已知集合 $A=@left@{x@in@mathbb{Z}@mid x^2-3x@le0@right@}$，$B=@left@{x@mid @log_2(x+1)<2@right@}$，则 $A@cap B=$`,
      options: [
        { k: 'A', t: `$@left@{0,1,2@right@}$` },
        { k: 'B', t: `$@left@{1,2,3@right@}$` },
        { k: 'C', t: `$@left@{0,1,2,3@right@}$` },
        { k: 'D', t: `$@left@{1,2@right@}$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `由 $x^2-3x@le0$ 得 $0@le x@le3$，又 $x@in@mathbb{Z}$，所以 $A=@left@{0,1,2,3@right@}$。`,
        `由 $@log_2(x+1)<2$ 得 $0<x+1<4$，即 $-1<x<3$，所以 $B=@left(-1,3@right)$。`,
        `取交集得 $A@cap B=@left@{0,1,2@right@}$，选 A。`
      ],
      hints: ['先解一元二次不等式，再注意 $x$ 只能取整数。', '解对数不等式时先写定义域 $x+1>0$。', '交集逐元素检验：$3$ 是否属于 $B$。'],
      pitfalls: ['把 $A$ 当成区间 $@left[0,3@right]$，忽略 $x@in@mathbb{Z}$。', '解对数不等式漏掉定义域。', '把端点 $3$ 算进交集。'],
      takeaway: '集合运算先化简各集合，再逐元素（或逐端点）检验。',
      knowledge: ['k-set-ops']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 2,
      stem: `已知复数 $z$ 满足 $z+|z|=2+4i$，其中 $i$ 为虚数单位，则 $z=$`,
      options: [
        { k: 'A', t: `$3+4i$` },
        { k: 'B', t: `$-3+4i$` },
        { k: 'C', t: `$-3-4i$` },
        { k: 'D', t: `$3-4i$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `设 $z=a+bi$（$a,b@in@mathbb{R}$），则 $|z|=@sqrt{a^2+b^2}$。`,
        `由虚部相等得 $b=4$；由实部相等得 $a+@sqrt{a^2+16}=2$。`,
        `移项得 $@sqrt{a^2+16}=2-a$，需 $a@le2$；平方得 $a^2+16=4-4a+a^2$，解得 $a=-3$。`,
        `所以 $z=-3+4i$，选 B。`
      ],
      hints: ['设 $z=a+bi$，把模长用 $a,b$ 表示。', '开方前注意 $2-a@ge0$ 的限制。', '求出结果后代回原式检验。'],
      pitfalls: ['直接平方忽略 $a@le2$，产生增根。', '把 $|z|$ 写成 $a^2+b^2$。', '虚部符号判断错误。'],
      takeaway: '含模的复数方程：设代数形式，比较实虚部，平方时注意符号限制。',
      knowledge: ['k-cx-basic']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 2,
      stem: `已知向量 $@vec a,@vec b$ 满足 $|@vec a|=|@vec b|=2$，$|@vec a+@vec b|=2@sqrt3$，则 $|@vec a-@vec b|=$`,
      options: [
        { k: 'A', t: `$2@sqrt2$` },
        { k: 'B', t: `$@sqrt6$` },
        { k: 'C', t: `$2$` },
        { k: 'D', t: `$4$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `把 $|@vec a+@vec b|=2@sqrt3$ 两边平方，得 $|@vec a|^2+2@vec a@cdot@vec b+|@vec b|^2=12$。`,
        `代入 $|@vec a|=|@vec b|=2$，得 $8+2@vec a@cdot@vec b=12$，所以 $@vec a@cdot@vec b=2$。`,
        `于是 $|@vec a-@vec b|^2=|@vec a|^2-2@vec a@cdot@vec b+|@vec b|^2=8-4=4$，故 $|@vec a-@vec b|=2$，选 C。`
      ],
      hints: ['模长问题先平方，转化为数量积。', '两个模长平方展开式的交叉项符号相反。', '最后别忘记开方。'],
      pitfalls: ['把 $@vec a@cdot@vec b$ 算成 $4$。', '展开 $|@vec a-@vec b|^2$ 时交叉项写成 $+2@vec a@cdot@vec b$。', '求出平方后忘记开方。'],
      takeaway: '向量模长：平方展开 → 求数量积 → 再开方。',
      knowledge: ['k-vec-dot']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 3,
      stem: `已知 $@sin@alpha+@cos@alpha=@frac15$，且 $@alpha@in(0,@pi)$，则 $@tan@alpha=$`,
      options: [
        { k: 'A', t: `$-@frac34$` },
        { k: 'B', t: `$-@frac43$` },
        { k: 'C', t: `$@frac34$` },
        { k: 'D', t: `$@frac43$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `两边平方得 $1+2@sin@alpha@cos@alpha=@frac1{25}$，所以 $@sin@alpha@cos@alpha=-@frac{12}{25}<0$。`,
        `因为 $@alpha@in(0,@pi)$，所以 $@sin@alpha>0$，从而 $@cos@alpha<0$，即 $@alpha@in@left(@frac{@pi}2,@pi@right)$。`,
        `又 $( @sin@alpha-@cos@alpha)^2=1-2@sin@alpha@cos@alpha=@frac{49}{25}$，且 $@sin@alpha-@cos@alpha>0$，故 $@sin@alpha-@cos@alpha=@frac75$。`,
        `与 $@sin@alpha+@cos@alpha=@frac15$ 联立，得 $@sin@alpha=@frac45$，$@cos@alpha=-@frac35$，所以 $@tan@alpha=-@frac43$，选 B。`
      ],
      hints: ['平方后由 $@sin@alpha@cos@alpha$ 的符号判断角的范围。', '把 $@sin@alpha-@cos@alpha$ 也平方，注意取正号。', '联立两个一次式求出 $@sin@alpha,@cos@alpha$。'],
      pitfalls: ['开方时不判断 $@sin@alpha-@cos@alpha$ 的符号，误取 $@frac75$ 或 $-@frac75$。', '由 $@sin@alpha@cos@alpha<0$ 仍误判 $@cos@alpha>0$。', '把 $@tan@alpha$ 写成 $@frac{@cos@alpha}{@sin@alpha}$。'],
      takeaway: '$@sin@alpha@pm@cos@alpha$ 与 $@sin@alpha@cos@alpha$ 联动：先平方，再定符号。',
      knowledge: ['k-tr-identity']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 2,
      stem: `记 $S_n$ 为等差数列 $@left@{a_n@right@}$ 的前 $n$ 项和。若 $a_1<0$，且 $S_5=S_{11}$，则当 $S_n$ 取得最小值时，$n=$`,
      options: [
        { k: 'A', t: `$6$` },
        { k: 'B', t: `$7$` },
        { k: 'C', t: `$8$` },
        { k: 'D', t: `$9$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `设公差为 $d$，则 $S_5=5a_1+10d$，$S_{11}=11a_1+55d$。`,
        `由 $S_5=S_{11}$ 得 $6a_1+45d=0$，即 $a_1=-@frac{15}{2}d$。又 $a_1<0$，所以 $d>0$。`,
        `于是 $a_n=a_1+(n-1)d=d@left(n-1-@frac{15}{2}@right)=d@left(n-@frac{17}{2}@right)$。`,
        `故 $n@le8$ 时 $a_n<0$，$n@ge9$ 时 $a_n>0$，所以 $S_n$ 在 $n=8$ 时取得最小值，选 C。`
      ],
      hints: ['把 $S_5=S_{11}$ 化为 $a_1$ 与 $d$ 的关系。', '$S_n$ 的最小值出现在项的符号由负变正处。', '也可用对称轴 $n=@frac{5+11}{2}=8$ 快速判断。'],
      pitfalls: ['解 $6a_1+45d=0$ 时算成 $a_1=-@frac{15}{2}d$ 以外的结果。', '把对称轴 $8$ 与 $8.5$ 混淆。', '忽略 $a_1<0$ 来判断 $d>0$。'],
      takeaway: '等差数列和的最值：找项由负变正的位置，对称轴为 $@frac{p+q}{2}$。',
      knowledge: ['k-seq-basic', 'k-seq-sum']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 3,
      stem: `已知三棱锥 $P-ABC$ 的四个顶点都在球 $O$ 的球面上，$PA@perp$ 平面 $ABC$，$AB=AC=2$，$@angle BAC=120^@circ$，$PA=4$，则球 $O$ 的表面积为`,
      options: [
        { k: 'A', t: `$16@pi$` },
        { k: 'B', t: `$24@pi$` },
        { k: 'C', t: `$32@pi$` },
        { k: 'D', t: `$48@pi$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `在 $@triangle ABC$ 中，由余弦定理 $BC^2=2^2+2^2-2@times2@times2@cos120^@circ=12$，所以 $BC=2@sqrt3$。`,
        `由正弦定理，$@triangle ABC$ 外接圆半径 $r=@frac{BC}{2@sin120^@circ}=@frac{2@sqrt3}{@sqrt3}=2$。`,
        `因为 $PA@perp$ 平面 $ABC$，球心在过 $@triangle ABC$ 外心且垂直于底面的直线上，所以 $R^2=r^2+@left(@frac{PA}{2}@right)^2=4+4=8$。`,
        `球 $O$ 的表面积 $S=4@pi R^2=32@pi$，选 C。`
      ],
      hints: ['先求底面三角形的外接圆半径。', '侧棱垂直底面时，可补成直棱柱模型，用 $R^2=r^2+@left(@frac h2@right)^2$。', '球的表面积公式是 $4@pi R^2$。'],
      pitfalls: ['把 $BC$ 算成 $2$。', '误把 $AB$ 当作底面外接圆半径。', '把表面积写成 $@pi R^2$。'],
      takeaway: '侧棱垂直底面的外接球：$R^2=r_{@text{底}}^2+@left(@frac h2@right)^2$。',
      knowledge: ['k-so-sphere', 'k-so-solid']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 3,
      stem: `已知椭圆 $C:@frac{x^2}{a^2}+@frac{y^2}{b^2}=1(a>b>0)$ 的左、右焦点分别为 $F_1,F_2$，$P$ 为 $C$ 上一点。若 $@angle F_1PF_2=60^@circ$，且 $|PF_1|=3|PF_2|$，则 $C$ 的离心率为`,
      options: [
        { k: 'A', t: `$@frac{@sqrt7}{2}$` },
        { k: 'B', t: `$@frac34$` },
        { k: 'C', t: `$@frac{@sqrt3}{2}$` },
        { k: 'D', t: `$@frac{@sqrt7}{4}$` }
      ],
      answer: 'D',
      accept: [],
      solution: [
        `设 $|PF_2|=m$，则 $|PF_1|=3m$。由椭圆定义 $|PF_1|+|PF_2|=2a$，得 $4m=2a$，即 $a=2m$。`,
        `在 $@triangle F_1PF_2$ 中，由余弦定理：$(2c)^2=(3m)^2+m^2-2@cdot3m@cdot m@cos60^@circ=7m^2$。`,
        `所以 $4c^2=7m^2$，即 $c^2=@frac{7m^2}{4}$；又 $a^2=4m^2$。`,
        `故 $e^2=@frac{c^2}{a^2}=@frac7{16}$，结合 $0<e<1$ 得 $e=@frac{@sqrt7}{4}$，选 D。`
      ],
      hints: ['先用椭圆定义把两条焦半径用 $a$ 表示。', '焦点三角形用余弦定理，边 $F_1F_2=2c$。', '求离心率先求 $e^2$，再开方并注意 $0<e<1$。'],
      pitfalls: ['把 $|F_1F_2|$ 写成 $c$。', '余弦定理交叉项系数漏乘 $2$。', '求出 $e^2$ 后忘记开方。'],
      takeaway: '焦点三角形：定义定焦半径和，余弦定理定焦距，最后求离心率。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 4,
      stem: `若函数 $f(x)=xe^x-ax$ 有两个极值点，则实数 $a$ 的取值范围是`,
      options: [
        { k: 'A', t: `$@left(-@infty,-@frac1{e^2}@right)$` },
        { k: 'B', t: `$@left(-@frac1{e^2},0@right)$` },
        { k: 'C', t: `$@left(-@frac1{e^2},+@infty@right)$` },
        { k: 'D', t: `$@left(0,@frac1{e^2}@right)$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `求导得 $f'(x)=(x+1)e^x-a$，极值点个数等于方程 $(x+1)e^x=a$ 的不同实根个数。`,
        `令 $g(x)=(x+1)e^x$，则 $g'(x)=(x+2)e^x$，所以 $g(x)$ 在 $(-@infty,-2)$ 上递减，在 $(-2,+@infty)$ 上递增。`,
        `$g(-2)=-@frac1{e^2}$；当 $x@to-@infty$ 时 $g(x)@to0^-$，当 $x@to+@infty$ 时 $g(x)@to+@infty$。`,
        `直线 $y=a$ 与 $y=g(x)$ 的图象有两个交点，当且仅当 $-@frac1{e^2}<a<0$，选 B。`
      ],
      hints: ['极值点个数转化为导函数变号零点的个数。', '分离参数 $a=g(x)$，再研究 $g(x)$ 的单调性与值域。', '注意 $x@to-@infty$ 时 $g(x)$ 从负方向趋近于 $0$。'],
      pitfalls: ['误用二次方程判别式。', '忽略 $a=0$ 时只有一个零点。', '把最小值 $-@frac1{e^2}$ 也算作“两个交点”。'],
      takeaway: '极值点个数 → 导函数零点个数 → 分离参数 → 画函数图象。',
      knowledge: ['k-dv-extreme', 'k-dv-zero']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知函数 $f(x)=@sin@left(2x-@frac{@pi}{3}@right)$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$f(x)$ 的最小正周期为 $@pi$` },
        { k: 'B', t: `$f(x)$ 的图象关于直线 $x=@frac{5@pi}{12}$ 对称` },
        { k: 'C', t: `$f(x)$ 在区间 $@left(-@frac{@pi}{12},@frac{5@pi}{12}@right)$ 上单调递增` },
        { k: 'D', t: `将 $f(x)$ 的图象向右平移 $@frac{@pi}{6}$ 个单位长度，得到 $y=@sin2x$ 的图象` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `A：$@omega=2$，最小正周期 $T=@frac{2@pi}{2}=@pi$，正确。`,
        `B：$f@left(@frac{5@pi}{12}@right)=@sin@left(@frac{5@pi}{6}-@frac{@pi}{3}@right)=@sin@frac{@pi}{2}=1$，取到最大值，故该直线是对称轴，正确。`,
        `C：当 $x@in@left(-@frac{@pi}{12},@frac{5@pi}{12}@right)$ 时，相位 $2x-@frac{@pi}{3}@in@left(-@frac{@pi}{2},@frac{@pi}{2}@right)$，正弦函数在此区间单调递增，正确。`,
        `D：向右平移 $@frac{@pi}{6}$ 得 $@sin@left[2@left(x-@frac{@pi}{6}@right)-@frac{@pi}{3}@right]=@sin@left(2x-@frac{2@pi}{3}@right)$，不是 $@sin2x$，错误。`,
        `综上，选 ABC。`
      ],
      hints: ['把所有性质转化为相位 $2x-@frac{@pi}{3}$ 的范围。', '正弦型函数的对称轴处取到最值。', '平移口诀“左加右减”，只对自变量 $x$ 作替换。'],
      pitfalls: ['平移时忘记把平移量乘以 $@omega$。', '判断单调性只看区间端点，没有看相位是否越过 $@frac{@pi}{2}$。', '把对称轴与对称中心混淆。'],
      takeaway: '三角函数性质：整体代换相位，单调性看相位区间，平移只替换 $x$。',
      knowledge: ['k-tr-graph']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 3,
      stem: `甲、乙两人进行比赛，采用三局两胜制（先胜两局者获胜），每局甲获胜的概率为 $@frac23$，各局结果相互独立。记 $X$ 为比赛结束时进行的局数，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$P(X=2)=@frac59$` },
        { k: 'B', t: `$P(X=3)=@frac49$` },
        { k: 'C', t: `$E(X)=@frac{22}{9}$` },
        { k: 'D', t: `甲最终获胜的概率为 $@frac34$` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `$X=2$ 表示甲连胜两局或乙连胜两局，概率为 $@left(@frac23@right)^2+@left(@frac13@right)^2=@frac59$，A 正确。`,
        `$X=3$ 与 $X=2$ 互为对立事件，故 $P(X=3)=1-@frac59=@frac49$，B 正确。`,
        `$E(X)=2@times@frac59+3@times@frac49=@frac{22}{9}$，C 正确。`,
        `甲最终获胜包括 $2:0$ 与 $2:1$：概率为 $@frac49+2@times@frac13@times@frac23@times@frac23=@frac49+@frac8{27}=@frac{20}{27}@ne@frac34$，D 错误。`,
        `综上，选 ABC。`
      ],
      hints: ['三局两胜最多打三局，$X$ 只取 $2,3$。', '按甲、乙谁获胜分类，注意互斥事件相加。', '甲以 $2:1$ 获胜有两种顺序。'],
      pitfalls: ['把 $X=3$ 误当成乙获胜。', '计算甲 $2:1$ 获胜时漏乘顺序数 $2$。', '计算 $P(X=2)$ 时只算甲连胜。'],
      takeaway: '三局两胜：先按局数分类，再按胜负顺序计数，期望用分布列加权。',
      knowledge: ['k-ps-dist', 'k-ps-expect', 'k-ps-prob']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 4,
      stem: `在棱长为 $2$ 的正方体 $ABCD-A_1B_1C_1D_1$ 中，下列结论正确的是`,
      options: [
        { k: 'A', t: `直线 $AD_1$ 与 $DC_1$ 所成的角为 $60^@circ$` },
        { k: 'B', t: `$BD_1@perp$ 平面 $A_1DC_1$` },
        { k: 'C', t: `三棱锥 $B_1-A_1DC_1$ 的体积为 $@frac83$` },
        { k: 'D', t: `点 $B_1$ 到平面 $A_1DC_1$ 的距离为 $@frac{2@sqrt3}{3}$` }
      ],
      answer: 'ABD',
      accept: [],
      solution: [
        `以 $A$ 为原点建系，得 $A(0,0,0)$，$B(2,0,0)$，$C(2,2,0)$，$D(0,2,0)$，$A_1(0,0,2)$，$B_1(2,0,2)$，$C_1(2,2,2)$，$D_1(0,2,2)$。`,
        `A：$@vec{AD_1}=(0,2,2)$，$@vec{DC_1}=(2,0,2)$，$@cos@theta=@frac{4}{2@sqrt2@cdot2@sqrt2}=@frac12$，所以所成角为 $60^@circ$，正确。`,
        `B：$@vec{BD_1}=(-2,2,2)=-2(1,-1,-1)$，而平面 $A_1DC_1$ 的一个法向量为 $(1,-1,-1)$，故 $BD_1@perp$ 平面 $A_1DC_1$，正确。`,
        `C：平面 $A_1DC_1$ 的方程为 $x-y-z+2=0$，$B_1$ 到该平面的距离为 $@frac{2}{@sqrt3}$；$@triangle A_1DC_1$ 是边长为 $2@sqrt2$ 的正三角形，面积为 $2@sqrt3$，所以体积为 $@frac13@times2@sqrt3@times@frac{2}{@sqrt3}=@frac43@ne@frac83$，错误。`,
        `D：由 C 知距离为 $@frac{2}{@sqrt3}=@frac{2@sqrt3}{3}$，正确。综上，选 ABD。`
      ],
      hints: ['建系后把线段、平面都化成向量与方程。', '线面垂直看直线的方向向量是否平行于平面法向量。', '正三角形面积用 $@frac{@sqrt3}{4}a^2$，体积别漏 $@frac13$。'],
      pitfalls: ['把异面直线所成角与向量夹角混淆，忽略取锐角。', '写平面方程时符号出错。', '体积公式漏乘 $@frac13$。'],
      takeaway: '立体几何多选题：建系算向量，逐项验证角、垂直、体积与距离。',
      knowledge: ['k-so-angle', 'k-so-solid']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 3,
      stem: `在 $@left(x^2-@frac2x@right)^6$ 的展开式中，常数项为 ________ .`,
      answer: `$240$`,
      accept: ['240'],
      solution: [
        `写出通项：$T_{k+1}=@mathrm{C}_6^k(x^2)^{6-k}@left(-@frac2x@right)^k=@mathrm{C}_6^k(-2)^k x^{12-3k}$。`,
        `令 $x$ 的指数为零：$12-3k=0$，得 $k=4$。`,
        `常数项为 $@mathrm{C}_6^4@times(-2)^4=15@times16=240$。`
      ],
      hints: ['先写通项，把 $x$ 的指数合并。', '常数项即 $x$ 的指数为 $0$。', '注意系数中的 $(-2)^k$ 不要漏掉。'],
      pitfalls: ['把 $@left(-@frac2x@right)^k$ 的指数算成 $-k$。', '求出 $k=4$ 后忘记乘 $(-2)^4$。', '把组合数 $@mathrm{C}_6^4$ 算成 $@mathrm{C}_6^2$ 以外的值。'],
      takeaway: '二项式常数项：通项合并指数，令指数为零求 $k$，再代回系数。',
      knowledge: ['k-binomial']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 3,
      stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_1=1$，$a_{n+1}=2a_n+1(n@in@mathbb{N}^*)$，则 $a_n=$ ________ .`,
      answer: `$2^n-1$`,
      accept: ['2^n-1', '2**n-1', '2ⁿ-1'],
      solution: [
        `递推式两边同时加 $1$：$a_{n+1}+1=2(a_n+1)$。`,
        `所以 $@left@{a_n+1@right@}$ 是首项为 $2$、公比为 $2$ 的等比数列。`,
        `故 $a_n+1=2@cdot2^{n-1}=2^n$，即 $a_n=2^n-1$。`
      ],
      hints: ['形如 $a_{n+1}=pa_n+q$ 的递推，考虑构造等比数列。', '两边加常数，使新数列成等比。', '注意首项 $a_1+1=2$。'],
      pitfalls: ['构造时减 $1$ 而不是加 $1$。', '把首项写成 $1$，导致 $a_n=2^{n-1}-1$。', '结果忘记减 $1$。'],
      takeaway: '一阶线性递推：$a_{n+1}=pa_n+q$ 可化为 $a_{n+1}+@frac{q}{p-1}=p@left(a_n+@frac{q}{p-1}@right)$。',
      knowledge: ['k-seq-recursion']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 3,
      stem: `若函数 $f(x)=x^3-3x+a$ 有三个零点，则实数 $a$ 的取值范围是 ________ .`,
      answer: `$@left(-2,2@right)$`,
      accept: ['(-2,2)', '-2<a<2'],
      solution: [
        `求导得 $f'(x)=3x^2-3=3(x-1)(x+1)$，所以 $f(x)$ 在 $x=-1$ 处取极大值 $f(-1)=a+2$，在 $x=1$ 处取极小值 $f(1)=a-2$。`,
        `三次函数有三个不同零点，等价于极大值大于 $0$ 且极小值小于 $0$。`,
        `即 $a+2>0$ 且 $a-2<0$，解得 $-2<a<2$。`
      ],
      hints: ['先求导，确定极大值点与极小值点。', '三次函数有三个零点时，图象三次穿过 $x$ 轴。', '极大值必须为正、极小值必须为负，端点不能取等号。'],
      pitfalls: ['把极大值写成 $a-2$、极小值写成 $a+2$。', '把不等号写成 $@ge$ 或 $@le$，导致出现重根。', '只判断一个极值的符号。'],
      takeaway: '三次函数零点个数：看极大值与极小值是否异号。',
      knowledge: ['k-dv-zero']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `在 $@triangle ABC$ 中，内角 $A,B,C$ 所对的边分别为 $a,b,c$，已知 $2b@cos B=a@cos C+c@cos A$。（1）求 $B$；（2）若 $b=2$，求 $@triangle ABC$ 面积的最大值。`,
      answer: `(1) $@frac{@pi}{3}$；(2) $@sqrt3$`,
      accept: [],
      solution: [
        `由投影定理 $a@cos C+c@cos A=b$，代入条件得 $2b@cos B=b$。`,
        `因为 $b>0$，所以 $@cos B=@frac12$；又 $B@in(0,@pi)$，故 $B=@frac{@pi}{3}$。`,
        `由余弦定理 $b^2=a^2+c^2-2ac@cos B$，即 $4=a^2+c^2-ac$。`,
        `由 $a^2+c^2@ge2ac$ 得 $4@ge ac$，所以 $ac@le4$，等号当且仅当 $a=c=2$。`,
        `面积 $S=@frac12ac@sin B=@frac{@sqrt3}{4}ac@le@sqrt3$，故面积的最大值为 $@sqrt3$。`
      ],
      hints: ['第（1）问用投影定理把边的关系集中到 $b$。', '第（2）问用余弦定理建立 $a,c$ 的等量关系。', '用基本不等式求 $ac$ 的上界，并验证取等条件。'],
      pitfalls: ['约去 $b$ 时不说明 $b>0$。', '把余弦定理写成 $b^2=a^2+c^2+ac$。', '求出 $ac@le4$ 后忘记乘 $@frac{@sqrt3}{4}$。'],
      takeaway: '解三角形最值：投影（或正弦）定理定角，余弦定理定关系，基本不等式求最值。',
      knowledge: ['k-tr-solve', 'k-tr-maxmin', 'k-ie-basic']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 4,
      stem: `在四棱锥 $P-ABCD$ 中，底面 $ABCD$ 是边长为 $2$ 的正方形，$PA@perp$ 平面 $ABCD$，$PA=2$，$E$ 为 $PD$ 的中点。（1）证明：$PB@parallel$ 平面 $AEC$；（2）求二面角 $E-AC-D$ 的余弦值。`,
      answer: `(1) 证明见解析；(2) $@frac{@sqrt3}{3}$`,
      accept: [],
      solution: [
        `以 $A$ 为原点，$AB,AD,AP$ 所在直线分别为 $x,y,z$ 轴建系，则 $A(0,0,0)$，$B(2,0,0)$，$C(2,2,0)$，$D(0,2,0)$，$P(0,0,2)$，$E(0,1,1)$。`,
        `设 $O$ 为 $AC$ 与 $BD$ 的交点，则 $O(1,1,0)$，$@vec{OE}=(-1,0,1)$，$@vec{PB}=(2,0,-2)$，所以 $@vec{OE}=-@frac12@vec{PB}$。`,
        `故 $OE@parallel PB$。又 $OE@subset$ 平面 $AEC$，$PB@not@subset$ 平面 $AEC$，所以 $PB@parallel$ 平面 $AEC$。`,
        `由 $@vec{AE}=(0,1,1)$，$@vec{AC}=(2,2,0)$，可得平面 $AEC$ 的法向量 $@vec n=(1,-1,1)$，平面 $ABCD$ 的法向量 $@vec m=(0,0,1)$。`,
        `取 $AC$ 中点 $O(1,1,0)$，则 $@vec{OD}=(-1,1,0)$ 在底面内且垂直于 $AC$；在平面 $AEC$ 内取 $@vec v=(-1,1,2)$，则 $@vec v@cdot@vec{AC}=0$，且 $@vec v$ 指向 $E$ 一侧。`,
        `所以 $@cos@theta=@frac{@vec{OD}@cdot@vec v}{|@vec{OD}||@vec v|}=@frac{2}{@sqrt2@cdot@sqrt6}=@frac{@sqrt3}{3}$，即二面角 $E-AC-D$ 的余弦值为 $@frac{@sqrt3}{3}$。`
      ],
      hints: ['第（1）问可用中位线：$O$ 为 $BD$ 中点，$E$ 为 $PD$ 中点。', '第（2）问建系，先求平面 $AEC$ 的法向量。', '二面角的平面角要在垂直于棱 $AC$ 的截面内计算。'],
      pitfalls: ['第（1）问只写 $OE@parallel PB$，漏掉线不在面内。', '第（2）问直接用两平面法向量夹角，未判断二面角是锐角还是钝角。', '求法向量时解方程出错。'],
      takeaway: '线面平行找中位线；二面角用“垂直于棱的两向量”或法向量，并注意角的方向。',
      knowledge: ['k-so-parallel', 'k-so-angle']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 4,
      stem: `连续抛掷一枚质地均匀的硬币，当正面出现的次数达到 $2$ 次时停止，记 $X$ 为抛掷的总次数。（1）求 $X$ 的分布列；（2）求 $E(X)$；（3）求在至少抛掷 $3$ 次的条件下，恰好抛掷 $4$ 次的概率。`,
      answer: `(1) $P(X=n)=@frac{n-1}{2^n}(n=2,3,@dots)$；(2) $4$；(3) $@frac14$`,
      accept: [],
      solution: [
        `$X=n$ 表示前 $n-1$ 次恰有 $1$ 次正面，且第 $n$ 次为正面，所以 $P(X=n)=@mathrm{C}_{n-1}^1@left(@frac12@right)^{n-1}@cdot@frac12=@frac{n-1}{2^n}$，$n=2,3,@dots$。`,
        `设 $E$ 为所求期望，$E_1$ 为已经出现 $1$ 次正面后还需抛掷次数的期望。则 $E_1=1+@frac12E_1$，解得 $E_1=2$。`,
        `第一次抛掷后：若为正面（概率 $@frac12$），还需 $E_1=2$ 次；若为反面（概率 $@frac12$），状态重置，还需 $E$ 次。`,
        `故 $E=1+@frac12@times2+@frac12E=2+@frac12E$，解得 $E=4$。`,
        `$P(X=4)=@frac{3}{16}$，$P(X@ge3)=1-P(X=2)=1-@frac14=@frac34$，所以所求条件概率为 $@frac{3/16}{3/4}=@frac14$。`
      ],
      hints: ['“第 $n$ 次停止”意味着第 $n$ 次是第二次正面，前 $n-1$ 次恰有一次正面。', '期望可用“状态递推”：区分已出现 $0$ 次和 $1$ 次正面的状态。', '条件概率用 $P(A|B)=@frac{P(A@cap B)}{P(B)}$。'],
      pitfalls: ['把分布列写成 $@frac{1}{2^n}$，漏掉前 $n-1$ 次中正面的位置选择。', '递推时期望重复计算第一次抛掷。', '条件概率的分母误用 $1$ 或 $P(X=4)$。'],
      takeaway: '负二项分布：先定位最后一次，再在前面的位置中选；期望可用状态递推。',
      knowledge: ['k-ps-dist', 'k-ps-expect', 'k-ps-prob']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 4,
      stem: `已知椭圆 $E:@frac{x^2}{4}+@frac{y^2}{3}=1$ 的左、右顶点分别为 $A(-2,0),B(2,0)$，$P$ 是 $E$ 上异于 $A,B$ 的动点，直线 $PA$ 与 $y$ 轴交于点 $M$，直线 $PB$ 与 $y$ 轴交于点 $N$。（1）求 $E$ 的离心率；（2）证明：$|OM|@cdot|ON|$ 为定值；（3）求 $|OM|+|ON|$ 的最小值。`,
      answer: `(1) $@frac12$；(2) 定值 $3$；(3) $2@sqrt3$`,
      accept: [],
      solution: [
        `由方程得 $a=2$，$b=@sqrt3$，所以 $c=@sqrt{a^2-b^2}=1$，离心率 $e=@frac ca=@frac12$。`,
        `设 $P(x_0,y_0)$，则 $@frac{x_0^2}{4}+@frac{y_0^2}{3}=1$，即 $4y_0^2=3(4-x_0^2)$。`,
        `直线 $PA$ 的方程为 $y=@frac{y_0}{x_0+2}(x+2)$，令 $x=0$ 得 $y_M=@frac{2y_0}{x_0+2}$；同理 $y_N=@frac{2y_0}{2-x_0}$。`,
        `所以 $|OM|@cdot|ON|=|y_My_N|=@frac{4y_0^2}{4-x_0^2}=@frac{3(4-x_0^2)}{4-x_0^2}=3$，为定值。`,
        `由基本不等式，$|OM|+|ON|@ge2@sqrt{|OM|@cdot|ON|}=2@sqrt3$，当 $x_0=0$（即 $P(0,@pm@sqrt3)$）时取等号，故最小值为 $2@sqrt3$。`
      ],
      hints: ['第（1）问由方程读出 $a,b$，再求 $c$。', '第（2）问设 $P(x_0,y_0)$，分别写出两条直线在 $y$ 轴上的截距。', '利用椭圆方程把 $y_0^2$ 消去，得到定值。', '第（3）问对两个正数用基本不等式，并验证取等条件。'],
      pitfalls: ['设点时未排除 $x_0=@pm2$，导致分母为零。', '忘记 $y_M,y_N$ 同号，绝对值处理错误。', '使用基本不等式后不验证等号能否取到。'],
      takeaway: '圆锥曲线定值：设点 → 写直线 → 求截距 → 用曲线方程消元；最值再用基本不等式。',
      knowledge: ['k-ag-conic', 'k-ag-line']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 5,
      stem: `设 $n$ 为正整数。若集合 $A@subseteq@left@{1,2,@dots,n@right@}$ 满足：对任意 $a,b@in A$ 且 $a<b$，$b$ 都不是 $a$ 的整数倍，则称 $A$ 为 $n$ 级“独立集”。规定空集是独立集。（1）分别判断 $@left@{2,3,4@right@}$ 与 $@left@{3,4,5@right@}$ 是否为 $5$ 级独立集，并写出一个 $8$ 级含 $4$ 个元素的独立集；（2）证明：若 $A$ 是 $n$ 级独立集，则 $|A|@le@left@lceil@frac n2@right@rceil$；（3）求 $@left@{1,2,3,4,5,6@right@}$ 的所有非空独立集的个数。`,
      answer: `(1) $@left@{2,3,4@right@}$ 不是，$@left@{3,4,5@right@}$ 是；$@left@{5,6,7,8@right@}$（答案不唯一）；(2) 证明见解析；(3) $16$`,
      accept: [],
      solution: [
        `（1）$@left@{2,3,4@right@}$ 中 $4=2@times2$，故不是 $5$ 级独立集；$@left@{3,4,5@right@}$ 中任意两数都不成倍数，故是。$@left@{5,6,7,8@right@}$ 中任意两数之比都小于 $2$ 且大于 $1$，不存在倍数关系，是含 $4$ 个元素的 $8$ 级独立集。`,
        `（2）把每个 $m@in@left@{1,2,@dots,n@right@}$ 写成 $m=2^kq$，其中 $q$ 为奇数，并按奇数部分 $q$ 分组。`,
        `同一组中的数形如 $q,2q,4q,@dots$。若其中两个数都在 $A$ 中，则较小的数整除较大的数，与独立集定义矛盾，所以每组至多取 $1$ 个数。`,
        `而 $1$ 到 $n$ 中奇数共有 $@left@lceil@frac n2@right@rceil$ 个，即至多分成 $@left@lceil@frac n2@right@rceil$ 组，故 $|A|@le@left@lceil@frac n2@right@rceil$。`,
        `（3）若 $1@in A$，则 $1$ 整除其余所有数，故 $A=@left@{1@right@}$，共 $1$ 个。`,
        `若 $1@notin A$，则 $A@subseteq@left@{2,3,4,5,6@right@}$，限制只有 $2$ 与 $4$、$2$ 与 $6$、$3$ 与 $6$ 不能同时在 $A$ 中，$5$ 不受限制。在 $@left@{2,3,4,6@right@}$ 中满足条件的子集有 $@varnothing,@left@{2@right@},@left@{3@right@},@left@{4@right@},@left@{6@right@},@left@{2,3@right@},@left@{3,4@right@},@left@{4,6@right@}$，共 $8$ 个；再考虑 $5$ 是否加入，共 $16$ 个（含空集），其中非空 $15$ 个。加上 $@left@{1@right@}$，非空独立集共有 $16$ 个。`
      ],
      hints: ['第（1）问按定义逐一检查是否存在倍数关系。', '第（2）问按“奇数部分”分组，把 $m$ 写成 $2^kq$。', '同一组内任取两个数，必有一个是另一个的倍数。', '第（3）问分 $1@in A$ 与 $1@notin A$ 两类，后者再对 $@left@{2,3,4,6@right@}$ 枚举。'],
      pitfalls: ['第（2）问只考虑相邻两数，未用奇数部分分组。', '第（3）问忽略空集与单元素集也是独立集。', '第（3）问枚举时漏掉 $@left@{4,6@right@}$ 或把 $@left@{2,4@right@}$ 误算为合法。'],
      takeaway: '新定义题：先按定义验证，再用“奇数部分分组”证明上界，最后分类枚举计数。',
      knowledge: ['k-count']
    }
  ]
});
