/* 2022 年普通高等学校招生全国统一考试（新高考Ⅱ卷）数学 · 19 题结构重排
 * 公式约定：LaTeX 反斜杠一律写成 @；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: '2022-xgk2',
  title: '2022 年普通高等学校招生全国统一考试（新高考Ⅱ卷）· 19 题结构重排',
  short: '2022 新高考Ⅱ',
  year: 2022, region: '新高考Ⅱ卷', kind: 'real', duration: 150,
  note: '按 19 题结构重排',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `已知集合 $A=@left@{-1,1,2,4@right@}$，$B=@left@{x@mid |x-1|@le1@right@}$，则 $A@cap B=$`,
      options: [
        { k: 'A', t: `$@left@{-1,2@right@}$` },
        { k: 'B', t: `$@left@{1,2@right@}$` },
        { k: 'C', t: `$@left@{1,4@right@}$` },
        { k: 'D', t: `$@left@{-1,4@right@}$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由 $|x-1|@le1$ 得 $-1@le x-1@le1$，即 $0@le x@le2$，所以 $B=@left[0,2@right]$。`,
        `逐一检验 $A$ 中的元素：$-1$ 不在 $B$ 内，$1,2$ 在 $B$ 内，$4$ 不在 $B$ 内。`,
        `故 $A@cap B=@left@{1,2@right@}$，选 B。`
      ],
      hints: ['先把绝对值不等式化成区间。', '交集就是 $A$ 中落在 $B$ 内的元素。'],
      pitfalls: ['把 $|x-1|@le1$ 解成 $-1@le x@le1$。', '只凭表面把 $4$ 也算进交集。'],
      takeaway: '集合交集题：先化简不等式得区间，再逐元素检验。',
      knowledge: ['k-set-ops']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 1,
      stem: `$(2+2i)(1-3i)=$`,
      options: [
        { k: 'A', t: `$8-4i$` },
        { k: 'B', t: `$8+4i$` },
        { k: 'C', t: `$4-4i$` },
        { k: 'D', t: `$4+4i$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `按多项式乘法展开：$(2+2i)(1-3i)=2-6i+2i-6i^2$。`,
        `由 $i^2=-1$ 得 $-6i^2=6$，故原式 $=2-4i+6=8-4i$。`,
        `所以选 A。`
      ],
      hints: ['逐项相乘，最后用 $i^2=-1$ 化简。', '实部与虚部分开合并。'],
      pitfalls: ['把 $i^2$ 当成 $1$，符号出错。', '把 $-6i$ 与 $2i$ 合并成 $-8i$。'],
      takeaway: '复数乘法按多项式展开，最后用 $i^2=-1$ 合并实部与虚部。',
      knowledge: ['k-cx-basic']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 2,
      stem: `甲、乙、丙、丁、戊 $5$ 名同学站成一排，要求甲不站在两端，且丙与丁相邻，则不同的站法共有`,
      options: [
        { k: 'A', t: `$12$ 种` },
        { k: 'B', t: `$24$ 种` },
        { k: 'C', t: `$36$ 种` },
        { k: 'D', t: `$48$ 种` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `先把丙、丁捆绑成一个整体，与其余 $3$ 人共 $4$ 个对象排列，内部有 $2$ 种顺序，共 $4!@times2=48$ 种。`,
        `其中甲站在两端的情形：甲有 $2$ 种选法，其余 $3$ 个对象排列 $3!$ 种，丙丁内部 $2$ 种，共 $2@times3!@times2=24$ 种。`,
        `故符合要求的站法为 $48-24=24$ 种，选 B。`
      ],
      hints: ['相邻问题用捆绑法。', '“甲不在两端”可用总数减去甲在两端的情形。'],
      pitfalls: ['忘记丙、丁内部还有 $2$ 种顺序。', '用排除法时漏乘丙丁内部的 $2$。'],
      takeaway: '相邻捆绑、受限位置用排除，两个环节都要注意内部排列。',
      knowledge: ['k-count']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 2,
      stem: `已知向量 $@vec a=(3,4)$，$@vec b=(1,0)$，$@vec c=@vec a+t@vec b$。若 $@langle@vec a,@vec c@rangle=@langle@vec b,@vec c@rangle$，则 $t=$`,
      options: [
        { k: 'A', t: `$-5$` },
        { k: 'B', t: `$-1$` },
        { k: 'C', t: `$1$` },
        { k: 'D', t: `$5$` }
      ],
      answer: 'D',
      accept: [],
      solution: [
        `$@vec c=(3+t,4)$，$|@vec a|=5$，$|@vec b|=1$。`,
        `两向量夹角相等，故余弦值相等：$@frac{@vec a@cdot@vec c}{|@vec a||@vec c|}=@frac{@vec b@cdot@vec c}{|@vec b||@vec c|}$。`,
        `约去 $|@vec c|$ 得 $@frac{25+3t}{5}=3+t$，解得 $25+3t=15+5t$，即 $t=5$。`,
        `所以选 D。`
      ],
      hints: ['夹角相等用余弦公式，注意分母含模长。', '先算 $@vec a@cdot@vec c=25+3t$，$@vec b@cdot@vec c=3+t$。'],
      pitfalls: ['忽略 $|@vec a|=5$，直接把两个数量积相等。', '解方程时移项符号出错。'],
      takeaway: '向量夹角相等 → 余弦值相等，模长分母不能漏。',
      knowledge: ['k-vec-dot']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 3,
      stem: `若 $@sin(@alpha+@beta)+@cos(@alpha+@beta)=2@sqrt2@cos@left(@alpha+@frac{@pi}{4}@right)@sin@beta$，则`,
      options: [
        { k: 'A', t: `$@tan(@alpha-@beta)=1$` },
        { k: 'B', t: `$@tan(@alpha-@beta)=-1$` },
        { k: 'C', t: `$@tan(@alpha+@beta)=1$` },
        { k: 'D', t: `$@tan(@alpha+@beta)=-1$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `左边用辅助角公式：$@sin(@alpha+@beta)+@cos(@alpha+@beta)=@sqrt2@sin@left(@alpha+@beta+@frac{@pi}{4}@right)$。`,
        `把 $@alpha+@beta+@frac{@pi}{4}$ 拆成 $(@alpha+@frac{@pi}{4})+@beta$，展开得 $@sin(@alpha+@frac{@pi}{4})@cos@beta+@cos(@alpha+@frac{@pi}{4})@sin@beta$。`,
        `代回并约去 $@sqrt2$，得 $@sin(@alpha+@frac{@pi}{4})@cos@beta=@cos(@alpha+@frac{@pi}{4})@sin@beta$。`,
        `即 $@sin@left(@alpha-@beta+@frac{@pi}{4}@right)=0$，故 $@alpha-@beta+@frac{@pi}{4}=k@pi$。`,
        `于是 $@tan(@alpha-@beta)=@tan@left(-@frac{@pi}{4}@right)=-1$，选 B。`
      ],
      hints: ['先用辅助角公式把左边合成一个正弦。', '把 $@alpha+@beta+@frac{@pi}{4}$ 看成 $(@alpha+@frac{@pi}{4})+@beta$ 展开。'],
      pitfalls: ['把 $@sin=0$ 写成等于 $2k@pi$，漏掉 $@pi$ 的奇数倍。', '差角公式展开时符号写反。'],
      takeaway: '三角恒等变换：辅助角合并后凑同一个角，出现 $@sin=0$ 用 $k@pi$。',
      knowledge: ['k-tr-identity']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 3,
      stem: `设 $a=@log_3 2$，$b=@log_5 3$，$c=@frac{2}{3}$，则`,
      options: [
        { k: 'A', t: `$a<b<c$` },
        { k: 'B', t: `$a<c<b$` },
        { k: 'C', t: `$c<a<b$` },
        { k: 'D', t: `$b<c<a$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `比较 $a$ 与 $c$：$a<@frac23@iff 2<3^{@frac23}@iff 2^3<3^2@iff 8<9$，成立，故 $a<c$。`,
        `比较 $b$ 与 $c$：$b>@frac23@iff 3>5^{@frac23}@iff 3^3>5^2@iff 27>25$，成立，故 $b>c$。`,
        `所以 $a<c<b$，选 B。`
      ],
      hints: ['两个对数都与中间量 $@frac23$ 比较。', '把 $x^{@frac23}$ 的比较转化为立方与平方的比较。'],
      pitfalls: ['直接取近似值，精度不够导致大小关系判断错误。', '把 $@log_5 3$ 与 $@log_3 2$ 的大小弄反。'],
      takeaway: '对数比较大小：找中间量，化为同次幂后比较整数幂。',
      knowledge: ['k-fn-elem']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 4,
      stem: `已知正三棱台的高为 $1$，上、下底面边长分别为 $3@sqrt3$ 和 $4@sqrt3$，其顶点都在同一球面上，则该球的表面积为`,
      options: [
        { k: 'A', t: `$100@pi$` },
        { k: 'B', t: `$128@pi$` },
        { k: 'C', t: `$144@pi$` },
        { k: 'D', t: `$192@pi$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `正三角形外接圆半径等于边长的 $@frac{@sqrt3}{3}$ 倍，故上、下底面外接圆半径分别为 $r_1=3$，$r_2=4$。`,
        `球心在棱台的轴线上。设球心到下底面的距离为 $d$（球心在台体下方），则到下底面的距离为 $d$，到上底面的距离为 $d+1$。`,
        `由 $R^2=r_2^2+d^2=r_1^2+(d+1)^2$ 得 $16+d^2=9+(d+1)^2$，解得 $d=3$。`,
        `于是 $R^2=16+9=25$，$R=5$，球的表面积为 $4@pi R^2=100@pi$，选 A。`
      ],
      hints: ['正三角形外接圆半径是边长的 $@frac{@sqrt3}{3}$ 倍，不是边长本身。', '球心在轴线上，用两个底面的圆半径列方程。'],
      pitfalls: ['把底面边长直接当作外接圆半径。', '球心位置假设错误，导致到两底面距离的符号写反。'],
      takeaway: '台体外接球：设球心在轴线上，用上下底面外接圆半径联立求 $R$。',
      knowledge: ['k-so-sphere']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 3,
      stem: `若函数 $f(x)=x^3-3x^2+a$ 有三个不同的零点，则 $a$ 的取值范围是`,
      options: [
        { k: 'A', t: `$(0,4)$` },
        { k: 'B', t: `$(-4,0)$` },
        { k: 'C', t: `$(0,+@infty)$` },
        { k: 'D', t: `$(-@infty,4)$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `$f'(x)=3x^2-6x=3x(x-2)$，导数零点为 $x=0$ 与 $x=2$。`,
        `$f(x)$ 在 $(-@infty,0)$ 上递增、在 $(0,2)$ 上递减、在 $(2,+@infty)$ 上递增，极大值为 $f(0)=a$，极小值为 $f(2)=a-4$。`,
        `有三个不同零点等价于极大值大于 $0$ 且极小值小于 $0$，即 $a>0$ 且 $a-4<0$。`,
        `故 $0<a<4$，选 A。`
      ],
      hints: ['先求导确定单调区间与极值点。', '三次函数的零点个数由两个极值的符号决定。'],
      pitfalls: ['只写 $a>0$ 或只写 $a<4$。', '把极大值点与极小值点的位置弄反。'],
      takeaway: '三次函数有三个零点 $@iff$ 极大值 $>0>$ 极小值。',
      knowledge: ['k-dv-zero', 'k-dv-extreme']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 4,
      stem: `若 $x,y$ 满足 $x^2+y^2-xy=1$，则`,
      options: [
        { k: 'A', t: `$x+y@le1$` },
        { k: 'B', t: `$x+y@ge-2$` },
        { k: 'C', t: `$x^2+y^2@le2$` },
        { k: 'D', t: `$x^2+y^2@ge1$` }
      ],
      answer: 'BC',
      accept: [],
      solution: [
        `令 $u=x+y$，$v=x-y$，则 $x^2+y^2=@frac{u^2+v^2}{2}$，$xy=@frac{u^2-v^2}{4}$。`,
        `代入条件得 $@frac{u^2+3v^2}{4}=1$，即 $u^2+3v^2=4$，故 $u^2@le4$，$-2@le x+y@le2$，B 正确，A 错误。`,
        `又 $x^2+y^2=@frac{u^2+v^2}{2}=@frac{u^2+2}{3}$，由 $0@le u^2@le4$ 得 $@frac23@le x^2+y^2@le2$，C 正确，D 错误。`,
        `综上，选 BC。`
      ],
      hints: ['对称式换元 $u=x+y$，$v=x-y$。', '把约束化成 $u^2+3v^2=4$，再由 $v^2@ge0$ 定范围。'],
      pitfalls: ['误以为 $x+y$ 的最大值是 $1$。', '求 $x^2+y^2$ 范围时忘记 $u^2@le4$。'],
      takeaway: '二元二次约束用和差换元，把目标量与约束统一到 $u,v$ 上。',
      knowledge: ['k-ie-basic']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 4,
      stem: `已知抛物线 $C:y^2=4x$ 的焦点为 $F$，过 $F$ 的直线 $l$ 与 $C$ 交于 $A,B$ 两点，且 $|AB|=8$，则`,
      options: [
        { k: 'A', t: `线段 $AB$ 中点的横坐标为 $3$` },
        { k: 'B', t: `直线 $l$ 的斜率为 $@pm1$` },
        { k: 'C', t: `$@overrightarrow{OA}@cdot@overrightarrow{OB}=-4$` },
        { k: 'D', t: `以 $AB$ 为直径的圆与 $C$ 的准线相切` }
      ],
      answer: 'ABD',
      accept: [],
      solution: [
        `设 $l:x=my+1$，代入 $y^2=4x$ 得 $y^2-4my-4=0$，故 $y_1+y_2=4m$，$y_1y_2=-4$。`,
        `$|AB|=x_1+x_2+2=@frac{y_1^2+y_2^2}{4}+2=4m^2+4$，由 $|AB|=8$ 得 $m^2=1$，斜率 $k=@frac1m=@pm1$，B 正确。`,
        `中点横坐标为 $@frac{x_1+x_2}{2}=@frac{8-2}{2}=3$，A 正确。`,
        `$x_1x_2=(my_1+1)(my_2+1)=m^2y_1y_2+m(y_1+y_2)+1=1$，故 $@overrightarrow{OA}@cdot@overrightarrow{OB}=x_1x_2+y_1y_2=1-4=-3@ne-4$，C 错误。`,
        `以 $AB$ 为直径的圆圆心横坐标为 $3$、半径为 $4$，到准线 $x=-1$ 的距离为 $4$，故相切，D 正确。`,
        `综上，选 ABD。`
      ],
      hints: ['过焦点设 $x=my+1$，可避免讨论斜率不存在。', '弦长用 $|AB|=x_1+x_2+p$，再借韦达定理。'],
      pitfalls: ['设 $y=kx+b$ 时漏掉竖直线情形。', '把 $|AB|$ 写成 $x_1+x_2$，漏掉 $p=2$。'],
      takeaway: '抛物线焦点弦：设 $x=my+p/2$，弦长 $=x_1+x_2+p$，再用韦达定理。',
      knowledge: ['k-ag-conic', 'k-ag-chord']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 4,
      stem: `在正方形 $ABCD$ 中，$ED@perp$ 平面 $ABCD$，$FB@parallel ED$，$AB=ED=2FB$。记三棱锥 $E-ACD$、$F-ABC$、$F-ACE$ 的体积分别为 $V_1,V_2,V_3$，则`,
      options: [
        { k: 'A', t: `$V_1=2V_2$` },
        { k: 'B', t: `$V_3=3V_2$` },
        { k: 'C', t: `$V_3=V_1+V_2$` },
        { k: 'D', t: `$V_3=2V_1$` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `设 $AB=2$，则 $ED=2$，$FB=1$，正方形面积为 $4$，且 $S_{@triangle ACD}=S_{@triangle ABC}=2$。`,
        `$V_1=@frac13@times2@times2=@frac43$，$V_2=@frac13@times2@times1=@frac23$，故 $V_1=2V_2$，A 正确。`,
        `以 $A$ 为原点建系：$A(0,0,0)$，$B(2,0,0)$，$C(2,2,0)$，$D(0,2,0)$，$E(0,2,2)$，$F(2,0,1)$。`,
        `$@overrightarrow{AE}=(0,2,2)$，$@overrightarrow{AC}=(2,2,0)$，$@overrightarrow{AF}=(2,0,1)$，混合积 $(@overrightarrow{AE}@times@overrightarrow{AC})@cdot@overrightarrow{AF}=-12$，故 $V_3=@frac{12}{6}=2$。`,
        `于是 $V_3=3V_2$，$V_3=V_1+V_2=2$，B、C 正确；而 $2V_1=@frac83@ne2$，D 错误。选 ABC。`
      ],
      hints: ['取具体边长不妨设 $AB=2$，体积关系不变。', '不规则三棱锥用向量混合积求体积。'],
      pitfalls: ['把 $F$ 到平面的高当成 $2$。', '混合积求体积时忘记除以 $6$。'],
      takeaway: '规则三棱锥用“底面积乘高除以 $3$”，不规则时用向量混合积。',
      knowledge: ['k-so-solid']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 2,
      stem: `已知随机变量 $X$ 服从正态分布 $N(2,@sigma^2)$，且 $P(2<X@le2.5)=0.36$，则 $P(X>2.5)=$ ________ .`,
      answer: `$0.14$`,
      accept: ['0.14', '14%'],
      solution: [
        `正态曲线关于 $x=2$ 对称，故 $P(X>2)=0.5$。`,
        `$P(X>2.5)=P(X>2)-P(2<X@le2.5)=0.5-0.36=0.14$。`
      ],
      hints: ['正态分布的对称轴是均值 $2$。', '把 $P(X>2)$ 拆成两段。'],
      pitfalls: ['把 $P(X>2.5)$ 直接写成 $1-0.36$。', '忘记对称性，误用 $P(X<2)=0.36$。'],
      takeaway: '正态分布求概率先画对称轴，再利用对称区间面积相等。',
      knowledge: ['k-ps-dist']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 4,
      stem: `写出与圆 $x^2+y^2=1$ 和 $(x-3)^2+(y-4)^2=16$ 都相切的一条直线的方程 ________ .`,
      answer: `$x=-1$（或 $3x+4y-5=0$，或 $7x-24y-25=0$）`,
      accept: ['x=-1', 'x+1=0', '3x+4y-5=0', '7x-24y-25=0'],
      solution: [
        `两圆圆心分别为 $O(0,0)$、$C(3,4)$，半径分别为 $1,4$，$|OC|=5=1+4$，故两圆外切。`,
        `过切点的内公切线：切点为 $@left(@frac35,@frac45@right)$，切线垂直于 $OC$，方程为 $3x+4y=5$。`,
        `设外公切线为 $ax+by+c=0$ 且 $a^2+b^2=1$，则 $|c|=1$，$|3a+4b+c|=4$，取 $c=1$ 得 $3a+4b=3$。`,
        `联立 $a^2+b^2=1$ 解得 $(a,b)=(1,0)$ 或 $@left(-@frac{7}{25},@frac{24}{25}@right)$，对应 $x=-1$ 与 $7x-24y-25=0$。`,
        `故可填 $x=-1$（或另外两条中的任意一条）。`
      ],
      hints: ['先由圆心距判断两圆外切，共有三条公切线。', '设切线后归一化 $a^2+b^2=1$，用圆心到直线距离等于半径列方程。'],
      pitfalls: ['只想到外公切线，漏掉内公切线。', '设直线时没有归一化，距离公式用错。'],
      takeaway: '公切线问题：先判断两圆位置关系，再用“圆心到直线距离等于半径”列方程组。',
      knowledge: ['k-ag-line']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 3,
      stem: `已知双曲线 $C:@frac{x^2}{a^2}-@frac{y^2}{b^2}=1$（$a>0,b>0$）的离心率为 $@sqrt2$，且经过点 $(2,1)$，则 $C$ 的方程为 ________ .`,
      answer: `$@frac{x^2}{3}-@frac{y^2}{3}=1$`,
      accept: ['x^2/3-y^2/3=1', 'x²/3-y²/3=1', 'x^2-y^2=3'],
      solution: [
        `由 $e=@sqrt2$ 得 $c^2=2a^2$，于是 $b^2=c^2-a^2=a^2$。`,
        `双曲线方程化为 $x^2-y^2=a^2$。`,
        `代入点 $(2,1)$：$4-1=a^2$，故 $a^2=3$。`,
        `所以 $C:@frac{x^2}{3}-@frac{y^2}{3}=1$。`
      ],
      hints: ['由离心率先确定 $a,b$ 的关系。', '代点求 $a^2$ 即可。'],
      pitfalls: ['把 $b^2=a^2-c^2$ 用在双曲线上。', '代点时把 $x,y$ 位置写反。'],
      takeaway: '双曲线先由离心率得 $a,b$ 关系，再代点定参数。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `已知等差数列 $@left@{a_n@right@}$ 的前 $n$ 项和为 $S_n$，且 $a_1=1$，$S_5=25$。（1）求 $@left@{a_n@right@}$ 的通项公式；（2）设 $b_n=@frac{1}{a_n a_{n+1}}$，求数列 $@left@{b_n@right@}$ 的前 $n$ 项和 $T_n$。`,
      answer: `（1）$a_n=2n-1$；（2）$T_n=@frac{n}{2n+1}$`,
      accept: [],
      solution: [
        `由等差数列性质 $S_5=5a_3=25$，得 $a_3=5$。`,
        `又 $a_1=1$，故公差 $d=@frac{a_3-a_1}{2}=2$，通项 $a_n=1+2(n-1)=2n-1$。`,
        `$b_n=@frac{1}{(2n-1)(2n+1)}=@frac12@left(@frac{1}{2n-1}-@frac{1}{2n+1}@right)$。`,
        `裂项相消：$T_n=@frac12@left(1-@frac13+@frac13-@frac15+@cdots+@frac{1}{2n-1}-@frac{1}{2n+1}@right)$。`,
        `所以 $T_n=@frac12@left(1-@frac{1}{2n+1}@right)=@frac{n}{2n+1}$。`
      ],
      hints: ['等差数列中 $S_5=5a_3$，可快速求 $a_3$。', '分母为两个相邻奇数之积，用裂项相消。'],
      pitfalls: ['把 $S_5$ 展开时项数或公差算错。', '裂项时漏掉系数 $@frac12$。'],
      takeaway: '等差基本量法求通项；分母为相邻因子乘积时裂项相消。',
      knowledge: ['k-seq-basic', 'k-seq-sum']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 4,
      stem: `在三棱锥 $P-ABC$ 中，$PO@perp$ 平面 $ABC$，垂足为 $O$，$PA=PB$，$AB@perp AC$，$E$ 是 $PB$ 的中点。（1）证明：$OE@parallel$ 平面 $PAC$；（2）若 $@angle ABO=@angle CBO=30@circ$，$PO=3$，$PA=5$，求二面角 $C-AE-B$ 的正弦值。`,
      answer: `（1）证明见解析；（2）$@frac{11}{13}$`,
      accept: [],
      solution: [
        `（1）取 $AB$ 中点 $M$，连 $OM,EM$。由 $PO@perp$ 平面 $ABC$ 及 $PA=PB$ 得 $OA=OB$，故 $OM@perp AB$；又 $AC@perp AB$，所以 $OM@parallel AC$。`,
        `$E,M$ 分别为 $PB,AB$ 的中点，故 $EM@parallel PA$。平面 $OEM$ 内两条相交直线分别平行于平面 $PAC$，所以平面 $OEM@parallel$ 平面 $PAC$，从而 $OE@parallel$ 平面 $PAC$。`,
        `（2）由 $OA=OB$、$@angle ABO=@angle CBO=30@circ$ 知 $BO$ 平分 $@angle ABC$，故 $@angle ABC=60@circ$；又 $AB@perp AC$，得 $@angle BAC=90@circ$，$BC=2AB$。`,
        `由 $PO@perp$ 平面 $ABC$，$PA=5$，$PO=3$ 得 $OA=4$，故 $OB=4$。在 $@triangle ABO$ 中由余弦定理 $OA^2=AB^2+OB^2-2@cdot AB@cdot OB@cos30@circ$，即 $16=AB^2+16-4@sqrt3 AB$，得 $AB=4@sqrt3$。`,
        `以 $B$ 为原点，$BA$ 为 $x$ 轴，平面 $ABC$ 为 $xBy$ 平面建系：$B(0,0,0)$，$A(4@sqrt3,0,0)$，$C(4@sqrt3,12,0)$，$P(2@sqrt3,2,3)$，$E(@sqrt3,1,@frac32)$。`,
        `平面 $ABE$ 的法向量取 $@vec{n_1}=(0,-3,2)$，平面 $ACE$ 的法向量取 $@vec{n_2}=(1,0,2@sqrt3)$，则 $@cos@theta=@frac{|@vec{n_1}@cdot@vec{n_2}|}{|@vec{n_1}||@vec{n_2}|}=@frac{4@sqrt3}{13}$，故正弦值为 $@sqrt{1-@frac{48}{169}}=@frac{11}{13}$。`
      ],
      hints: ['（1）取 $AB$ 中点，构造两条分别平行于 $PA$、$AC$ 的直线。', '（2）先用 $OA=OB=4$ 和 $@angle ABO=30@circ$ 求出 $AB$，再建系。', '二面角用两法向量夹角余弦，最后取正弦。'],
      pitfalls: ['（1）只找到一条平行线就下结论。', '（2）由 $PA=PB$ 直接得 $OA=OB$ 时忘记说明 $PO@perp$ 平面。', '把二面角的余弦值当作答案（题目要正弦值）。'],
      takeaway: '线面平行借助面面平行转化；二面角建系求法向量，注意题目问的是正弦还是余弦。',
      knowledge: ['k-so-parallel', 'k-so-angle']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 3,
      stem: `甲、乙两人进行投篮游戏，每人投篮 $3$ 次，甲每次投中的概率为 $@frac{2}{3}$，乙每次投中的概率为 $@frac{1}{2}$，各次投篮相互独立。记甲、乙投中的次数分别为 $X,Y$。（1）求 $X$ 的分布列与数学期望；（2）求甲投中次数多于乙的概率。`,
      answer: `（1）分布列：$P(X=0)=@frac{1}{27}$，$P(X=1)=@frac{2}{9}$，$P(X=2)=@frac{4}{9}$，$P(X=3)=@frac{8}{27}$，$E(X)=2$；（2）$@frac{55}{108}$`,
      accept: [],
      solution: [
        `$X@sim B@left(3,@frac23@right)$，故 $P(X=0)=@left(@frac13@right)^3=@frac{1}{27}$，$P(X=1)=3@cdot@frac23@cdot@left(@frac13@right)^2=@frac{2}{9}$。`,
        `$P(X=2)=3@cdot@left(@frac23@right)^2@cdot@frac13=@frac{4}{9}$，$P(X=3)=@left(@frac23@right)^3=@frac{8}{27}$，且 $E(X)=3@cdot@frac23=2$。`,
        `$Y@sim B@left(3,@frac12@right)$，故 $P(Y=0)=@frac18$，$P(Y=1)=@frac38$，$P(Y=2)=@frac38$。`,
        `甲投中次数多于乙：$P(X>Y)=P(X=1)P(Y=0)+P(X=2)[P(Y=0)+P(Y=1)]+P(X=3)[P(Y=0)+P(Y=1)+P(Y=2)]$。`,
        `代入得 $P(X>Y)=@frac29@cdot@frac18+@frac49@cdot@frac12+@frac{8}{27}@cdot@frac78=@frac{1}{36}+@frac29+@frac{7}{27}=@frac{55}{108}$。`
      ],
      hints: ['投中次数服从二项分布。', '按 $X=1,2,3$ 分类，分别配上 $Y<X$ 的概率。'],
      pitfalls: ['分布列概率之和不为 $1$。', '求 $P(X>Y)$ 时只算 $X=3$ 的情形。'],
      takeaway: '独立重复试验用二项分布；两个随机变量比较大小按较小者分类求和。',
      knowledge: ['k-ps-dist', 'k-ps-expect', 'k-ps-prob']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 4,
      stem: `已知椭圆 $C:@frac{x^2}{a^2}+@frac{y^2}{b^2}=1$（$a>b>0$）的离心率为 $@frac{@sqrt3}{2}$，且经过点 $(2,1)$。（1）求 $C$ 的方程；（2）设 $O$ 为坐标原点，直线 $l$ 与 $C$ 交于 $A,B$ 两点，且 $OA@perp OB$，证明：原点 $O$ 到直线 $l$ 的距离为定值，并求出该定值。`,
      answer: `（1）$@frac{x^2}{8}+@frac{y^2}{2}=1$；（2）定值为 $@frac{2@sqrt{10}}{5}$`,
      accept: [],
      solution: [
        `（1）由 $e^2=@frac34$ 得 $b^2=a^2-c^2=@frac{a^2}{4}$。代点 $(2,1)$：$@frac{4}{a^2}+@frac{4}{a^2}=1$，故 $a^2=8$，$b^2=2$，即 $C:@frac{x^2}{8}+@frac{y^2}{2}=1$。`,
        `（2）设 $l:x=my+n$，代入椭圆得 $(m^2+4)y^2+2mn y+n^2-8=0$。`,
        `由韦达定理 $y_1+y_2=-@frac{2mn}{m^2+4}$，$y_1y_2=@frac{n^2-8}{m^2+4}$。`,
        `$@overrightarrow{OA}@cdot@overrightarrow{OB}=x_1x_2+y_1y_2=(m^2+1)y_1y_2+mn(y_1+y_2)+n^2=@frac{5n^2-8m^2-8}{m^2+4}$。`,
        `由 $OA@perp OB$ 得 $5n^2=8(m^2+1)$，故 $O$ 到 $l$ 的距离 $d=@frac{|n|}{@sqrt{m^2+1}}=@sqrt{@frac85}=@frac{2@sqrt{10}}{5}$，为定值。`
      ],
      hints: ['设 $x=my+n$ 可统一处理斜率不存在的情况。', '把 $@overrightarrow{OA}@cdot@overrightarrow{OB}=0$ 写成 $x_1x_2+y_1y_2$，再用韦达定理。'],
      pitfalls: ['设 $y=kx+m$ 时漏掉竖直线情形。', '韦达定理代入时把 $x$ 与 $y$ 的表达式混用。'],
      takeaway: '圆锥曲线中“垂直”条件用坐标点积；设 $x=my+n$ 可避免分类讨论。',
      knowledge: ['k-ag-conic', 'k-ag-chord', 'k-ag-vector']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 4,
      stem: `定义：对于数列 $@left@{a_n@right@}$，若数列 $b_n=a_{n+1}-a_n$（$n@ge1$）是等比数列，则称 $@left@{a_n@right@}$ 为“等比差数列”，并称 $@left@{b_n@right@}$ 的公比为该数列的“差比”。（1）判断数列 $a_n=n^2$ 是否为等比差数列，并说明理由；（2）已知等比差数列 $@left@{a_n@right@}$ 满足 $a_1=1$，$a_2=3$，$a_3=7$，求 $@left@{a_n@right@}$ 的通项公式及前 $n$ 项和 $S_n$；（3）在（2）的条件下，证明：对任意正整数 $n$，都有 $@frac{1}{a_1}+@frac{1}{a_2}+@cdots+@frac{1}{a_n}<2$。`,
      answer: `（1）不是；（2）$a_n=2^n-1$，$S_n=2^{n+1}-n-2$；（3）证明见解析`,
      accept: [],
      solution: [
        `（1）$b_n=(n+1)^2-n^2=2n+1$，前三项为 $3,5,7$，由于 $@frac53@ne@frac75$，$@left@{b_n@right@}$ 不是等比数列，故 $@left@{a_n@right@}$ 不是等比差数列。`,
        `（2）$b_1=a_2-a_1=2$，$b_2=a_3-a_2=4$，故差比 $q=2$，$b_n=2@cdot2^{n-1}=2^n$。`,
        `累加得 $a_n=a_1+@sum_{k=1}^{n-1}b_k=1+(2+2^2+@cdots+2^{n-1})=2^n-1$（$n@ge2$），$n=1$ 时也成立，故 $a_n=2^n-1$。`,
        `于是 $S_n=@sum_{k=1}^{n}(2^k-1)=(2^{n+1}-2)-n=2^{n+1}-n-2$。`,
        `（3）当 $k@ge2$ 时，$2^k-1>2^{k-1}$，故 $@frac{1}{2^k-1}<@frac{1}{2^{k-1}}$。`,
        `所以 $@sum_{k=1}^{n}@frac{1}{a_k}=1+@sum_{k=2}^{n}@frac{1}{2^k-1}<1+@sum_{k=2}^{n}@frac{1}{2^{k-1}}=1+@left(1-@frac{1}{2^{n-1}}@right)<2$，即证。`
      ],
      hints: ['新定义题先把定义翻译成熟悉的语言：差分数列成等比。', '（1）只需检查相邻差构成数列的前三项比值是否相等。', '（3）把 $@frac{1}{2^k-1}$ 放大为 $@frac{1}{2^{k-1}}$，再用等比数列求和。'],
      pitfalls: ['（1）只算出 $b_1=3$ 就下结论，没有验证比值是否恒定。', '（2）累加时把项数误写成 $n$ 项（应为 $n-1$ 项）。', '（3）放大后忘记单独处理首项 $a_1=1$。'],
      takeaway: '新定义题：先按定义把条件翻译成等差、等比等熟悉结构，再用累加、裂项或放缩完成求解与证明。',
      knowledge: ['k-seq-basic', 'k-seq-recursion', 'k-seq-ineq']
    }
  ]
});
