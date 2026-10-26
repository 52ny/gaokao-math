/* 2026 届广州市一模风格仿真卷 · 题库数据
 * 仿真自编：19 题结构，8 单选 + 3 多选 + 3 填空 + 5 解答，满分 150。
 * 公式约定：LaTeX 反斜杠一律写成 @；公式用 $...$ 包裹；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: 'mock-gz',
  title: '2026 届广州市一模风格仿真卷（数学）',
  short: '广州一模仿真',
  year: 2026, region: '广州一模', kind: 'mock', duration: 150,
  note: '仿真自编：19 题结构；第19题为新定义压轴',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `已知集合 $A=@left@{x@mid x^2-x-6<0@right@}$，$B=@left@{x@mid @log_2(x-1)@le2@right@}$，则 $A@cap B=$`,
      options: [
        { k: 'A', t: `$@left(1,3@right)$` },
        { k: 'B', t: `$@left(1,3@right]$` },
        { k: 'C', t: `$@left[-2,3@right)$` },
        { k: 'D', t: `$@left(1,5@right]$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `由 $x^2-x-6<0$ 得 $(x-3)(x+2)<0$，所以 $A=@left(-2,3@right)$。`,
        `由 $@log_2(x-1)@le2$ 得 $0<x-1@le4$，即 $B=@left(1,5@right]$。`,
        `取交集得 $1<x<3$，即 $A@cap B=@left(1,3@right)$，选 A。`
      ],
      hints: ['先解一元二次不等式，把 $A$ 化成区间。', '解对数不等式时先写定义域 $x-1>0$。', '两个开区间取交集，端点 $1$、$3$ 都取不到。'],
      pitfalls: ['把 $A$ 写成 $@left[-2,3@right]$，忽略二次不等式是严格小于。', '解对数不等式时漏掉定义域，把 $B$ 写成 $@left(-@infty,5@right]$。'],
      takeaway: '集合运算：先解不等式化简，再逐端点判断开闭。',
      knowledge: ['k-set-ops']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 1,
      stem: `若复数 $z$ 满足 $z(1+i)=3+i$，其中 $i$ 为虚数单位，则 $|z|=$`,
      options: [
        { k: 'A', t: `$2$` },
        { k: 'B', t: `$@sqrt5$` },
        { k: 'C', t: `$@sqrt2$` },
        { k: 'D', t: `$@sqrt{10}$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由 $z(1+i)=3+i$ 得 $z=@frac{3+i}{1+i}$。`,
        `分子分母同乘 $1-i$：$z=@frac{(3+i)(1-i)}{2}=@frac{4-2i}{2}=2-i$。`,
        `所以 $|z|=@sqrt{2^2+(-1)^2}=@sqrt5$，选 B。`
      ],
      hints: ['复数除法先分母实数化，分子分母同乘分母的共轭。', '模长可用 $|z|^2=z@bar{z}$，也可直接对 $2-i$ 求模。'],
      pitfalls: ['分子展开时把 $-i^2$ 的符号写错。', '把 $|z|$ 误算为实部与虚部的和 $3$ 或 $1$。'],
      takeaway: '复数除法：分母实数化；模长：实部虚部平方和开根。',
      knowledge: ['k-cx-basic']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 2,
      stem: `已知向量 $@vec a,@vec b$ 满足 $|@vec a|=|@vec b|=2$，且 $@vec a@cdot(@vec a-@vec b)=2$，则 $|@vec a-@vec b|=$`,
      options: [
        { k: 'A', t: `$1$` },
        { k: 'B', t: `$@sqrt2$` },
        { k: 'C', t: `$2$` },
        { k: 'D', t: `$2@sqrt2$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `由 $@vec a@cdot(@vec a-@vec b)=2$ 得 $|@vec a|^2-@vec a@cdot@vec b=2$。`,
        `代入 $|@vec a|^2=4$ 得 $@vec a@cdot@vec b=2$。`,
        `于是 $|@vec a-@vec b|^2=|@vec a|^2-2@vec a@cdot@vec b+|@vec b|^2=4-4+4=4$。`,
        `所以 $|@vec a-@vec b|=2$，选 C。`
      ],
      hints: ['先把已知条件展开，求出 $@vec a@cdot@vec b$。', '求模长先平方，避免直接处理根式。'],
      pitfalls: ['把 $|@vec a-@vec b|^2$ 展开成 $|@vec a|^2+|@vec b|^2$，漏掉交叉项。', '由 $|@vec a-@vec b|^2=4$ 得出 $|@vec a-@vec b|=4$。'],
      takeaway: '向量模长问题：先算数量积，再平方展开求模。',
      knowledge: ['k-vec-dot']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 3,
      stem: `已知 $@sin@left(@alpha-@frac{@pi}{4}@right)=@frac35$，且 $@alpha@in@left(@frac{@pi}{4},@frac{@pi}{2}@right)$，则 $@cos2@alpha=$`,
      options: [
        { k: 'A', t: `$@frac{7}{25}$` },
        { k: 'B', t: `$-@frac{7}{25}$` },
        { k: 'C', t: `$@frac{24}{25}$` },
        { k: 'D', t: `$-@frac{24}{25}$` }
      ],
      answer: 'D',
      accept: [],
      solution: [
        `令 $t=@alpha-@frac{@pi}{4}$，由 $@alpha@in@left(@frac{@pi}{4},@frac{@pi}{2}@right)$ 得 $t@in@left(0,@frac{@pi}{4}@right)$，且 $@sin t=@frac35$，故 $@cos t=@frac45$。`,
        `由二倍角公式 $@sin2t=2@sin t@cos t=2@times@frac35@times@frac45=@frac{24}{25}$。`,
        `又 $2@alpha=2t+@frac{@pi}{2}$，所以 $@cos2@alpha=@cos@left(2t+@frac{@pi}{2}@right)=-@sin2t=-@frac{24}{25}$，选 D。`
      ],
      hints: ['把 $@alpha-@frac{@pi}{4}$ 整体设为 $t$，先确定 $t$ 的范围。', '注意诱导公式 $@cos@left(2t+@frac{@pi}{2}@right)=-@sin2t$。'],
      pitfalls: ['把 $@cos@left(2t+@frac{@pi}{2}@right)$ 直接写成 $@sin2t$，符号出错。', '忽略 $t@in@left(0,@frac{@pi}{4}@right)$，把 $@cos t$ 取成 $-@frac45$。'],
      takeaway: '“和角函数值求倍角”：整体代换 + 先定角的范围 + 二倍角与诱导公式。',
      knowledge: ['k-tr-identity']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 2,
      stem: `已知等比数列 $@left@{a_n@right@}$ 中，$a_2=2$，$a_5=16$，则 $a_1+a_3=$`,
      options: [
        { k: 'A', t: `$3$` },
        { k: 'B', t: `$5$` },
        { k: 'C', t: `$6$` },
        { k: 'D', t: `$9$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `设公比为 $q$，由 $a_5=a_2q^3$ 得 $16=2q^3$，故 $q=2$。`,
        `于是 $a_1=@frac{a_2}{q}=1$，$a_3=a_2q=4$。`,
        `所以 $a_1+a_3=1+4=5$，选 B。`
      ],
      hints: ['两项相隔 $3$ 项，用 $a_5=a_2q^3$ 求公比。', '求出 $q$ 后再回代求 $a_1$ 与 $a_3$。'],
      pitfalls: ['把 $a_5=a_2q^3$ 写成 $a_5=a_2q^4$。', '求出 $q=2$ 后把 $a_3$ 算成 $8$。'],
      takeaway: '等比数列基本量法：用 $a_m=a_nq^{m-n}$ 定公比，再逐个求项。',
      knowledge: ['k-seq-basic']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 2,
      stem: `若棱长为 $2$ 的正方体的所有顶点都在同一个球面上，则该球的表面积为`,
      options: [
        { k: 'A', t: `$4@pi$` },
        { k: 'B', t: `$12@pi$` },
        { k: 'C', t: `$16@pi$` },
        { k: 'D', t: `$48@pi$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `正方体的外接球直径等于它的体对角线长：$2R=@sqrt{2^2+2^2+2^2}=2@sqrt3$。`,
        `所以 $R=@sqrt3$。`,
        `球的表面积 $S=4@pi R^2=4@pi@times3=12@pi$，选 B。`
      ],
      hints: ['外接球直径就是正方体的体对角线。', '先求体对角线，再套球的表面积公式。'],
      pitfalls: ['把棱长当作半径，得 $S=16@pi$。', '把体对角线当成半径，得 $R=2@sqrt3$。'],
      takeaway: '正方体外接球：$2R=$ 体对角线长；表面积 $S=4@pi R^2$。',
      knowledge: ['k-so-sphere']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 2,
      stem: `已知圆 $C:x^2+y^2=5$，则过点 $P(1,2)$ 的圆 $C$ 的切线方程为`,
      options: [
        { k: 'A', t: `$x+2y=5$` },
        { k: 'B', t: `$2x+y=4$` },
        { k: 'C', t: `$x-2y+3=0$` },
        { k: 'D', t: `$2x-y=0$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `因为 $1^2+2^2=5$，所以点 $P$ 在圆 $C$ 上。`,
        `过圆上一点 $(x_0,y_0)$ 的切线方程为 $x_0x+y_0y=r^2$，代入得 $x+2y=5$。`,
        `验证：圆心到直线 $x+2y-5=0$ 的距离为 $@frac{5}{@sqrt{1+4}}=@sqrt5=r$，确为切线，选 A。`
      ],
      hints: ['先判断点是否在圆上。', '圆上一点的切线方程可直接用 $x_0x+y_0y=r^2$。'],
      pitfalls: ['不判断点的位置，直接设斜截式求解，漏掉斜率不存在的情形。', '把切线方程写成 $x_0x+y_0y=r$。'],
      takeaway: '圆上一点的切线：$x_0x+y_0y=r^2$；再用圆心到直线距离等于半径验证。',
      knowledge: ['k-ag-line']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 3,
      stem: `若函数 $f(x)=2x^2-a@ln x$ 在区间 $(0,1)$ 上单调递减，则实数 $a$ 的取值范围是`,
      options: [
        { k: 'A', t: `$@left[4,+@infty@right)$` },
        { k: 'B', t: `$@left(4,+@infty@right)$` },
        { k: 'C', t: `$@left(-@infty,4@right]$` },
        { k: 'D', t: `$@left[0,4@right]$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `$f'(x)=4x-@frac ax=@frac{4x^2-a}{x}$，要求 $x@in(0,1)$ 时 $f'(x)@le0$ 恒成立。`,
        `即 $a@ge4x^2$ 对 $x@in(0,1)$ 恒成立。`,
        `$4x^2$ 在 $(0,1)$ 上的上确界为 $4$，故 $a@ge4$；此时 $f'(x)@le@frac{4(x^2-1)}{x}<0$，符合递减。`,
        `所以 $a@in@left[4,+@infty@right)$，选 A。`
      ],
      hints: ['单调递减等价于导数恒不大于 $0$。', '分离参数得 $a@ge4x^2$，再求右端的上确界。'],
      pitfalls: [`把 $f'(x)@le0$ 写成 $f'(x)<0$，从而把端点 $4$ 排除。`, '用 $x=1$ 处的值代替上确界却又不说明 $x=1$ 取不到。'],
      takeaway: '已知单调性求参数：导数符号恒成立 → 分离参数 → 取端点上确界或下确界。',
      knowledge: ['k-dv-monotone', 'k-dv-param']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 3,
      stem: `某班 $10$ 名学生某次测试成绩的平均数为 $100$，方差为 $16$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `若每名学生的成绩都加 $5$ 分，则新数据的平均数为 $105$，方差仍为 $16$` },
        { k: 'B', t: `若每名学生的成绩都乘 $2$，则新数据的方差为 $32$` },
        { k: 'C', t: `若每名学生的成绩都变为原来的 $2$ 倍再减 $10$ 分，则新数据的平均数为 $190$` },
        { k: 'D', t: `若再增加一名成绩为 $100$ 分的学生，则新样本的方差小于 $16$` }
      ],
      answer: 'ACD',
      accept: [],
      solution: [
        `设原数据为 $x_i$，$@bar{x}=100$，$s^2=16$。对变换 $y=ax+b$，有 $@bar{y}=a@bar{x}+b$，$s_y^2=a^2s^2$。`,
        `A：加 $5$ 即 $a=1,b=5$，平均数 $105$，方差仍为 $16$，正确。`,
        `B：乘 $2$ 即 $a=2$，方差变为 $2^2@times16=64@ne32$，错误。`,
        `C：$a=2,b=-10$，平均数 $2@times100-10=190$，正确。`,
        `D：新增数据等于原平均数，新方差 $@frac{10@times16+0}{11}=@frac{160}{11}<16$，正确。`,
        `综上，选 ACD。`
      ],
      hints: ['线性变换 $y=ax+b$：平均数变 $a@bar{x}+b$，方差变 $a^2s^2$。', '新增数据恰好等于原平均数时，只需要把离差平方和按新容量平均。'],
      pitfalls: ['认为数据乘 $2$ 后方差也乘 $2$（应乘 $4$）。', 'D 中把新方差算成 $16$，忘记分母变成 $11$。'],
      takeaway: '数据线性变换：平移不改方差，乘 $k$ 则方差乘 $k^2$；合并样本要按离差平方和重新平均。',
      knowledge: ['k-ps-stat']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知函数 $f(x)=2@sin@left(2x+@frac{@pi}{3}@right)$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$f(x)$ 的最小正周期为 $@pi$` },
        { k: 'B', t: `$f(x)$ 的图象关于点 $@left(-@frac{@pi}{6},0@right)$ 对称` },
        { k: 'C', t: `$f(x)$ 在 $@left[0,@frac{@pi}{6}@right]$ 上单调递增` },
        { k: 'D', t: `将 $f(x)$ 的图象向右平移 $@frac{@pi}{6}$ 个单位长度，得到 $y=2@sin2x$ 的图象` }
      ],
      answer: 'ABD',
      accept: [],
      solution: [
        `A：$@omega=2$，最小正周期 $T=@frac{2@pi}{2}=@pi$，正确。`,
        `B：$f@left(-@frac{@pi}{6}@right)=2@sin0=0$，且 $x=-@frac{@pi}{6}$ 为零点，故图象关于该点中心对称，正确。`,
        `C：当 $x@in@left[0,@frac{@pi}{6}@right]$ 时，相位 $@in@left[@frac{@pi}{3},@frac{2@pi}{3}@right]$，其中经过 $@frac{@pi}{2}$，函数先增后减，错误。`,
        `D：向右平移 $@frac{@pi}{6}$ 得 $2@sin@left[2@left(x-@frac{@pi}{6}@right)+@frac{@pi}{3}@right]=2@sin2x$，正确。`,
        `综上，选 ABD。`
      ],
      hints: ['把相位 $2x+@frac{@pi}{3}$ 看成一个整体。', '中心对称点由“相位 $=k@pi$”确定。', '平移口诀“左加右减”，只对 $x$ 作替换。'],
      pitfalls: ['判断单调性时只看区间端点函数值，忽略内部经过 $@frac{@pi}{2}$。', '平移时忘记把平移量乘以 $@omega$。'],
      takeaway: '三角函数性质：整体代换相位；平移只看 $x$ 的替换量。',
      knowledge: ['k-tr-graph']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 4,
      stem: `已知双曲线 $C:@frac{x^2}{3}-y^2=1$ 的左、右焦点分别为 $F_1,F_2$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$C$ 的离心率为 $@frac{2@sqrt3}{3}$` },
        { k: 'B', t: `$C$ 的渐近线方程为 $y=@pm@frac{@sqrt3}{3}x$` },
        { k: 'C', t: `焦点到渐近线的距离为 $1$` },
        { k: 'D', t: `过右焦点且垂直于 $x$ 轴的弦长为 $2$` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `由方程得 $a=@sqrt3$，$b=1$，$c=@sqrt{a^2+b^2}=2$。`,
        `A：$e=@frac ca=@frac{2}{@sqrt3}=@frac{2@sqrt3}{3}$，正确。`,
        `B：渐近线为 $y=@pm@frac ba x=@pm@frac{@sqrt3}{3}x$，正确。`,
        `C：取焦点 $(2,0)$，渐近线 $x-@sqrt3y=0$，距离 $@frac{2}{@sqrt{1+3}}=1$，正确。`,
        `D：令 $x=2$，得 $@frac43-y^2=1$，即 $y^2=@frac13$，弦长为 $@frac{2@sqrt3}{3}@ne2$，错误。`,
        `综上，选 ABC。`
      ],
      hints: ['先读出 $a,b$，再用 $c^2=a^2+b^2$ 求 $c$。', '双曲线渐近线是 $y=@pm@frac ba x$，与椭圆不同。', '焦点弦长把 $x=c$ 代入方程求出 $|y|$ 再乘 $2$。'],
      pitfalls: ['把双曲线的 $c^2=a^2-b^2$ 与椭圆混淆。', '把渐近线写成 $y=@pm@frac ab x$。'],
      takeaway: '双曲线基本量：$c^2=a^2+b^2$，渐近线 $y=@pm@frac ba x$，焦点到渐近线距离恒为 $b$。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 2,
      stem: `在 $@left(x^2+@frac1x@right)^6$ 的展开式中，常数项为 ________ .`,
      answer: `$15$`,
      accept: ['15'],
      solution: [
        `通项 $T_{k+1}=@mathrm{C}_6^k(x^2)^{6-k}@left(@frac1x@right)^k=@mathrm{C}_6^k x^{12-3k}$。`,
        `令 $12-3k=0$，得 $k=4$。`,
        `常数项为 $@mathrm{C}_6^4=15$。`
      ],
      hints: ['先写通项，把 $x$ 的指数合并。', '常数项即 $x$ 的指数为 $0$。'],
      pitfalls: ['把指数算成 $12-2k$，得 $k=6$。', '把 $@mathrm{C}_6^4$ 误算为 $20$。'],
      takeaway: '二项式常数项：通项合并指数，令指数为零定 $k$。',
      knowledge: ['k-binomial']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 3,
      stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_1=2$，$a_{n+1}=a_n+2n+1$（$n@in@mathbb{N}^*$），则 $a_n=$ ________ .`,
      answer: `$n^2+1$`,
      accept: ['n^2+1', 'n²+1', 'n*n+1', 'n的平方加1'],
      solution: [
        `由 $a_{n+1}-a_n=2n+1$，用累加法：$a_n=a_1+@sum_{k=1}^{n-1}(2k+1)$（$n@ge2$）。`,
        `而 $@sum_{k=1}^{n-1}(2k+1)=2@cdot@frac{(n-1)n}{2}+(n-1)=n^2-1$。`,
        `所以 $a_n=2+n^2-1=n^2+1$；$n=1$ 时 $a_1=2$ 也符合。`
      ],
      hints: ['先写出相邻两项之差，判断用累加法。', '求和技术：等差数列求和后化简，注意项数是 $n-1$。', '最后检验 $n=1$ 是否符合通项。'],
      pitfalls: ['把 $@sum$ 的项数写成 $n$，多算一项。', '化简约分出错，得到 $n^2$ 或 $n^2+2$。'],
      takeaway: '形如 $a_{n+1}-a_n=f(n)$ 的递推用累加法，求和后必须验证首项。',
      knowledge: ['k-seq-recursion']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 4,
      stem: `若不等式 $@ln x@le ax-1$ 对任意 $x>0$ 恒成立，则实数 $a$ 的最小值为 ________ .`,
      answer: `$1$`,
      accept: ['1'],
      solution: [
        `不等式即 $@ln x@le ax-1$ 对一切 $x>0$ 成立。`,
        `取 $x=1$ 得 $0@le a-1$，故 $a@ge1$ 是必要条件。`,
        `当 $a@ge1$ 时，由常用不等式 $@ln x@le x-1$（$x>0$）得 $@ln x@le x-1@le ax-1$，不等式恒成立。`,
        `所以 $a$ 的最小值为 $1$。`
      ],
      hints: ['先把 $x=1$ 代入，得到参数的必要条件。', '用切线不等式 $@ln x@le x-1$ 证明充分性。'],
      pitfalls: ['直接分离参数却把 $@frac{@ln x+1}{x}$ 的最大值位置找错。', '只证必要性，未验证 $a=1$ 时不等式确实成立。'],
      takeaway: '恒成立求参数：先取特殊值锁定范围，再用切线不等式或最值证明充分性。',
      knowledge: ['k-dv-ineq']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `在 $@triangle ABC$ 中，内角 $A,B,C$ 所对的边分别为 $a,b,c$，且 $b^2+c^2-a^2=bc$。（1）求 $A$；（2）若 $a=3$，求 $b+c$ 的最大值。`,
      answer: `(1) $@frac{@pi}{3}$；(2) $6$`,
      accept: [],
      solution: [
        `（1）由余弦定理 $@cos A=@frac{b^2+c^2-a^2}{2bc}=@frac{bc}{2bc}=@frac12$。`,
        `又 $A@in@left(0,@pi@right)$，所以 $A=@frac{@pi}{3}$。`,
        `（2）由余弦定理 $9=b^2+c^2-bc$，于是 $(b+c)^2=b^2+c^2+2bc=9+3bc$。`,
        `由基本不等式 $bc@le@frac{(b+c)^2}{4}$，得 $(b+c)^2@le9+@frac34(b+c)^2$，即 $(b+c)^2@le36$。`,
        `所以 $b+c@le6$，当 $b=c=3$ 时取等号，故最大值为 $6$。`
      ],
      hints: ['第（1）问直接用余弦定理，把条件整体代入。', '第（2）问把 $b+c$ 与 $bc$ 建立联系，再用基本不等式。', '取等条件 $b=c$ 要与 $a=3$ 一起检验。'],
      pitfalls: ['把余弦定理写成 $@cos A=@frac{b^2+c^2-a^2}{bc}$，漏掉分母的 $2$。', '用基本不等式时方向写反，得到 $b+c@ge6$。'],
      takeaway: '解三角形最值：余弦定理定关系 → 目标式平方 → 基本不等式 → 验证取等。',
      knowledge: ['k-tr-solve', 'k-tr-maxmin', 'k-ie-basic']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 3,
      stem: `在四棱锥 $P-ABCD$ 中，底面 $ABCD$ 是边长为 $2$ 的正方形，$PA@perp$ 平面 $ABCD$，$PA=2$，$E$ 为 $PC$ 的中点。（1）证明：$PA@parallel$ 平面 $BDE$；（2）求直线 $PB$ 与平面 $BDE$ 所成角的正弦值。`,
      answer: `(1) 证明见解析；(2) $@frac12$`,
      accept: [],
      solution: [
        `（1）设 $AC@cap BD=O$，则 $O$ 为 $AC$ 的中点；又 $E$ 为 $PC$ 的中点，所以在 $@triangle PAC$ 中 $OE@parallel PA$。`,
        `因为 $OE@subset$ 平面 $BDE$，$PA@not@subset$ 平面 $BDE$，所以 $PA@parallel$ 平面 $BDE$。`,
        `（2）以 $A$ 为原点，$AB,AD,AP$ 所在直线分别为 $x,y,z$ 轴建系：$B(2,0,0)$，$D(0,2,0)$，$P(0,0,2)$，$C(2,2,0)$，$E(1,1,1)$。`,
        `$@vec{BD}=(-2,2,0)$，$@vec{BE}=(-1,1,1)$，由 $-2x+2y=0$，$-x+y+z=0$ 取平面 $BDE$ 的法向量 $@vec n=(1,1,0)$。`,
        `$@vec{PB}=(2,0,-2)$，所以 $@sin@theta=@frac{|@vec{PB}@cdot@vec n|}{|@vec{PB}||@vec n|}=@frac{2}{2@sqrt2@times@sqrt2}=@frac12$。`
      ],
      hints: ['线面平行优先找中位线：$O$ 是 $AC$ 中点，$E$ 是 $PC$ 中点。', '线面角用 $@sin@theta=@frac{|@vec{PB}@cdot@vec n|}{|@vec{PB}||@vec n|}$，注意加绝对值。', '法向量取整系数即可，不必单位化。'],
      pitfalls: ['只写 $OE@parallel PA$ 就下结论，漏掉 $OE@subset$ 平面、$PA@not@subset$ 平面的说明。', '把线面角算成向量与法向量夹角的余弦。'],
      takeaway: '线面平行靠中位线；线面角用“方向向量与法向量夹角余弦的绝对值”。',
      knowledge: ['k-so-parallel', 'k-so-angle', 'k-so-solid']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 3,
      stem: `某射手每次射击命中的概率为 $@frac23$，各次射击相互独立。（1）求连续射击时，恰好第 $3$ 次才首次命中的概率；（2）若连续射击 $4$ 次，记命中次数为 $X$，求 $X$ 的分布列与数学期望 $E(X)$；（3）在 $4$ 次射击至少命中 $1$ 次的条件下，求恰好命中 $2$ 次的概率。`,
      answer: `(1) $@frac{2}{27}$；(2) 分布列见解析，$E(X)=@frac83$；(3) $@frac{3}{10}$`,
      accept: [],
      solution: [
        `（1）前两次未中、第三次命中，概率为 $@left(@frac13@right)^2@cdot@frac23=@frac{2}{27}$。`,
        `（2）$X@sim B@left(4,@frac23@right)$，$P(X=k)=@mathrm{C}_4^k@left(@frac23@right)^k@left(@frac13@right)^{4-k}$。`,
        `分布列：$P(X=0)=@frac{1}{81}$，$P(X=1)=@frac{8}{81}$，$P(X=2)=@frac{24}{81}=@frac{8}{27}$，$P(X=3)=@frac{32}{81}$，$P(X=4)=@frac{16}{81}$。`,
        `所以 $E(X)=4@times@frac23=@frac83$（也可由分布列加权求和得到）。`,
        `（3）$P(X@ge1)=1-@frac{1}{81}=@frac{80}{81}$，所求条件概率为 $@frac{24/81}{80/81}=@frac{3}{10}$。`
      ],
      hints: ['“恰好第 $3$ 次首次命中”意味着前两次都没中，第三次中。', '二项分布直接用公式写分布列，期望用 $E(X)=np$。', '条件概率的分母是“至少命中 $1$ 次”的概率。'],
      pitfalls: ['第（1）问把前两次也算成命中，得到 $@frac{8}{27}$。', '第（3）问条件概率的分母误用 $P(X=2)$。'],
      takeaway: '独立重复试验：分布列用二项公式，期望用 $np$；条件概率 $P(B@mid A)=@frac{P(AB)}{P(A)}$。',
      knowledge: ['k-ps-prob', 'k-ps-dist', 'k-ps-expect']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 4,
      stem: `已知椭圆 $E:@frac{x^2}{a^2}+@frac{y^2}{b^2}=1$（$a>b>0$）的离心率为 $@frac{@sqrt2}{2}$，且经过点 $(2,@sqrt2)$。（1）求 $E$ 的方程；（2）设直线 $l$ 与 $E$ 交于 $A,B$ 两点，且 $OA@perp OB$（$O$ 为坐标原点），证明：$O$ 到直线 $l$ 的距离为定值，并求出该定值；（3）求 $@triangle OAB$ 面积的最小值。`,
      answer: `(1) $@frac{x^2}{8}+@frac{y^2}{4}=1$；(2) 定值为 $@frac{2@sqrt6}{3}$；(3) $@frac83$`,
      accept: [],
      solution: [
        `（1）由 $e=@frac ca=@frac{@sqrt2}{2}$ 得 $a^2=2c^2$，$b^2=a^2-c^2=c^2$；代入点 $(2,@sqrt2)$：$@frac{4}{2c^2}+@frac{2}{c^2}=1$，解得 $c^2=4$，故 $a^2=8$，$b^2=4$，$E:@frac{x^2}{8}+@frac{y^2}{4}=1$。`,
        `（2）设 $A=r_1(@cos@theta,@sin@theta)$，$B=r_2(-@sin@theta,@cos@theta)$（$r_1,r_2>0$），这正好刻画了 $OA@perp OB$。`,
        `由 $A,B$ 在 $E$ 上得 $@frac{1}{r_1^2}=@frac{@cos^2@theta+2@sin^2@theta}{8}$，$@frac{1}{r_2^2}=@frac{@sin^2@theta+2@cos^2@theta}{8}$，两式相加得 $@frac{1}{r_1^2}+@frac{1}{r_2^2}=@frac38$。`,
        `在 $@mathrm{Rt}@triangle OAB$ 中，$O$ 到斜边 $AB$ 的距离 $d$ 满足 $@frac{1}{d^2}=@frac{1}{r_1^2}+@frac{1}{r_2^2}=@frac38$，故 $d=@frac{2@sqrt6}{3}$，为定值。`,
        `（3）$S=@frac12r_1r_2$，由 $@frac38=@frac{1}{r_1^2}+@frac{1}{r_2^2}@ge@frac{2}{r_1r_2}$ 得 $r_1r_2@ge@frac{16}{3}$，故 $S@ge@frac83$。`,
        `当 $r_1=r_2$（即 $@theta=@frac{@pi}{4}$）时取等号，所以 $@triangle OAB$ 面积的最小值为 $@frac83$。`
      ],
      hints: ['第（1）问用离心率把 $a,b$ 统一为 $c$，再代点。', '第（2）问用极坐标式设点：$A=r_1(@cos@theta,@sin@theta)$，垂直方向取 $(-@sin@theta,@cos@theta)$。', '直角三角形中斜边上的高满足 $@frac{1}{d^2}=@frac{1}{r_1^2}+@frac{1}{r_2^2}$。', '第（3）问把面积写成 $@frac12r_1r_2$，再用基本不等式。'],
      pitfalls: ['第（1）问把 $b^2=a^2-c^2$ 写成 $b^2=c^2-a^2$。', '第（2）问忘记垂直方向要乘 $r_2$，把点直接写成 $(-@sin@theta,@cos@theta)$。', '第（3）问求出下界后不验证等号能否取到。'],
      takeaway: '垂直弦问题：极坐标设点 → 两个倒数平方和为定值 → 高与面积一并解决。',
      knowledge: ['k-ag-conic', 'k-ag-chord', 'k-ag-area']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 5,
      stem: `定义：设 $n$ 为正整数，若集合 $A@subseteq@left@{1,2,@dots,n@right@}$ 满足“对任意 $a@in A$，都有 $2a@notin A$”，则称 $A$ 为 $@left@{1,2,@dots,n@right@}$ 的一个“倍自由集”。（1）当 $n=6$ 时，求倍自由集元素个数的最大值，并写出一个取到最大值的倍自由集；（2）证明：当 $n=8$ 时，倍自由集的元素个数不超过 $5$；（3）求 $@left@{1,2,@dots,8@right@}$ 的所有倍自由集的个数（含空集）。`,
      answer: `(1) $4$，如 $@left@{1,3,4,5@right@}$；(2) 证明见解析；(3) $96$`,
      accept: [],
      solution: [
        `（1）$n=6$ 时按“奇数部分”分链：$@left@{1,2,4@right@}$，$@left@{3,6@right@}$，$@left@{5@right@}$；同一条链上相邻两数成 $2$ 倍关系，不能同时入选。`,
        `三条链分别至多取 $2,1,1$ 个，故 $|A|@le4$；而 $A=@left@{1,3,4,5@right@}$ 满足条件，所以最大值为 $4$。`,
        `（2）$n=8$ 时分成链 $@left@{1,2,4,8@right@}$，$@left@{3,6@right@}$，$@left@{5@right@}$，$@left@{7@right@}$；长度为 $L$ 的链中不能取相邻元素，至多取 $@lceil@frac L2@rceil$ 个，故 $|A|@le2+1+1+1=5$。`,
        `（3）设 $g(L)$ 为长度 $L$ 的链的合法选法数，按最后一个元素是否入选得 $g(L)=g(L-1)+g(L-2)$，$g(1)=2$，$g(2)=3$，故 $g(3)=5$，$g(4)=8$。`,
        `四条链长度依次为 $4,2,1,1$，各链选择相互独立，所以总数为 $8@times3@times2@times2=96$。`
      ],
      hints: ['按“奇数部分”把 $1$ 到 $n$ 分成若干条链，每条链形如 $m,2m,4m,@dots$（$m$ 为奇数）。', '同一条链上相邻两项不能同时选，问题化为“链上不取相邻”。', '计数时各链独立，选法数相乘；注意空集也计入。'],
      pitfalls: ['把不同链之间的元素也当成 $2$ 倍关系，导致上界估小。', '第（2）问漏掉长度为 $1$ 的链 $@left@{5@right@}$、$@left@{7@right@}$，得出错误上界。', '第（3）问把 $g(1)$ 写成 $1$，从而少算空集。'],
      takeaway: '“倍数不能同选”类问题：按奇数部分分链 → 链上不取相邻 → 上界用 $@lceil@frac L2@rceil$，计数用斐波那契型递推。',
      knowledge: ['k-count']
    }
  ]
});
