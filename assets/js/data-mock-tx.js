/* 2026 届天星教育风格仿真卷 · 题库数据
 * 仿真自编：19 题结构，8 单选 + 3 多选 + 3 填空 + 5 解答，满分 150。
 * 公式约定：LaTeX 反斜杠一律写成 @；公式用 $...$ 包裹；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: 'mock-tx',
  title: '2026 届天星教育风格仿真卷（数学）',
  short: '天星仿真',
  year: 2026, region: '天星教育', kind: 'mock', duration: 150,
  note: '仿真自编：19 题结构；第19题为新定义压轴',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `已知集合 $A=@left@{x@mid x^2-2x-3@le0@right@}$，$B=@left@{x@mid @log_2(x-1)@le1@right@}$，则 $A@cap B=$`,
      options: [
        { k: 'A', t: `$@left[-1,3@right]$` },
        { k: 'B', t: `$@left(1,3@right]$` },
        { k: 'C', t: `$@left[1,3@right]$` },
        { k: 'D', t: `$@left(1,3@right)$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由 $x^2-2x-3@le0$ 得 $(x-3)(x+1)@le0$，所以 $A=@left[-1,3@right]$。`,
        `解对数不等式：由 $@log_2(x-1)@le1$ 得 $0<x-1@le2$，即 $B=@left(1,3@right]$。`,
        `取交集得 $1<x@le3$，所以 $A@cap B=@left(1,3@right]$，选 B。`
      ],
      hints: ['先解一元二次不等式，把集合 $A$ 化成区间。', '解对数不等式时先写定义域 $x-1>0$。', '逐端点判断开闭：$1$ 取不到，$3$ 取得到。'],
      pitfalls: ['解对数不等式漏掉定义域，把 $B$ 写成 $@left(-@infty,3@right]$。', '把 $A$ 写成 $@left(-1,3@right)$，忽略二次不等式含等号。'],
      takeaway: '集合运算题：先化简各集合，再逐端点检验开闭。',
      knowledge: ['k-set-ops']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 1,
      stem: `若复数 $z$ 满足 $z(1+i)=4$（$i$ 为虚数单位），则 $@bar z=$`,
      options: [
        { k: 'A', t: `$2-2i$` },
        { k: 'B', t: `$2+2i$` },
        { k: 'C', t: `$-2+2i$` },
        { k: 'D', t: `$-2-2i$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由 $z(1+i)=4$ 得 $z=@frac{4}{1+i}$。`,
        `分子分母同乘 $1-i$：$z=@frac{4(1-i)}{(1+i)(1-i)}=@frac{4-4i}{2}=2-2i$。`,
        `所以 $@bar z=2+2i$，选 B。`
      ],
      hints: ['复数除法先分母实数化，分子分母同乘分母的共轭复数。', '共轭复数只改变虚部的符号。'],
      pitfalls: ['把共轭复数写成 $2-2i$，忘记变号。', '分母 $(1+i)(1-i)$ 错算成 $1$。'],
      takeaway: '复数除法：分母实数化；共轭复数：虚部变号。',
      knowledge: ['k-cx-basic']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 2,
      stem: `已知向量 $@vec a=(1,2)$，$@vec b=(2,-3)$，则 $@vec a@cdot(@vec a-@vec b)=$`,
      options: [
        { k: 'A', t: `$5$` },
        { k: 'B', t: `$9$` },
        { k: 'C', t: `$7$` },
        { k: 'D', t: `$13$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `先求 $@vec a-@vec b=(1-2,2-(-3))=(-1,5)$。`,
        `所以 $@vec a@cdot(@vec a-@vec b)=1@times(-1)+2@times5=9$。`,
        `也可用分配律：$@vec a@cdot@vec a-@vec a@cdot@vec b=5-(-4)=9$，选 B。`
      ],
      hints: ['先算 $@vec a-@vec b$ 的坐标，再作数量积。', '也可用分配律 $@vec a@cdot(@vec a-@vec b)=|@vec a|^2-@vec a@cdot@vec b$ 检验。'],
      pitfalls: ['坐标相减时把 $2-(-3)$ 算成 $-1$。', '数量积公式写成 $x_1y_2+x_2y_1$。'],
      takeaway: '坐标运算按定义逐项计算，再用分配律交叉检验。',
      knowledge: ['k-vec-coord', 'k-vec-dot']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 2,
      stem: `已知 $@sin@alpha=@frac35$，且 $@alpha@in@left(@frac{@pi}{2},@pi@right)$，则 $@tan@left(@alpha+@frac{@pi}{4}@right)=$`,
      options: [
        { k: 'A', t: `$-7$` },
        { k: 'B', t: `$-@frac17$` },
        { k: 'C', t: `$@frac17$` },
        { k: 'D', t: `$7$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `因为 $@alpha@in@left(@frac{@pi}{2},@pi@right)$，所以 $@cos@alpha<0$。`,
        `由 $@sin^2@alpha+@cos^2@alpha=1$ 得 $@cos@alpha=-@frac45$，故 $@tan@alpha=-@frac34$。`,
        `由两角和的正切公式：$@tan@left(@alpha+@frac{@pi}{4}@right)=@frac{@tan@alpha+1}{1-@tan@alpha}=@frac{1/4}{7/4}=@frac17$，选 C。`
      ],
      hints: ['先由象限确定 $@cos@alpha$ 的符号。', '把 $@tan@left(@alpha+@frac{@pi}{4}@right)$ 展开为 $@frac{@tan@alpha+1}{1-@tan@alpha}$。'],
      pitfalls: ['忽略 $@alpha$ 在第二象限，把 $@cos@alpha$ 取成 $@frac45$。', '正切和角公式分母写成 $1+@tan@alpha$。'],
      takeaway: '给值求值：先定符号，再用和角公式整体计算。',
      knowledge: ['k-tr-identity']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 2,
      stem: `已知等比数列 $@left@{a_n@right@}$ 中，$a_1+a_2=3$，$a_2+a_3=6$，则 $a_4=$`,
      options: [
        { k: 'A', t: `$6$` },
        { k: 'B', t: `$8$` },
        { k: 'C', t: `$12$` },
        { k: 'D', t: `$16$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `两式相除：$@frac{a_2+a_3}{a_1+a_2}=@frac{a_1q+a_1q^2}{a_1+a_1q}=q=@frac63=2$。`,
        `代入 $a_1+a_2=a_1(1+q)=3$ 得 $a_1=1$。`,
        `所以 $a_4=a_1q^3=8$，选 B。`
      ],
      hints: ['把各项都用 $a_1$ 与 $q$ 表示。', '两式相除可直接消去 $a_1$ 得到公比。'],
      pitfalls: ['误认为 $a_2+a_3$ 是 $a_1+a_2$ 的 $3$ 倍就取 $q=3$。', '求 $a_4$ 时错用 $q^4$。'],
      takeaway: '等比数列基本量法：统一用 $a_1$、$q$ 表示，遇比值先约分。',
      knowledge: ['k-seq-basic']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 2,
      stem: `已知长方体的长、宽、高分别为 $3,2,1$，则该长方体外接球的表面积为`,
      options: [
        { k: 'A', t: `$6@pi$` },
        { k: 'B', t: `$14@pi$` },
        { k: 'C', t: `$@frac{7@pi}{2}$` },
        { k: 'D', t: `$28@pi$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `长方体外接球的直径等于其体对角线长：$2R=@sqrt{3^2+2^2+1^2}=@sqrt{14}$。`,
        `所以 $R=@frac{@sqrt{14}}{2}$。`,
        `表面积 $S=4@pi R^2=4@pi@times@frac{14}{4}=14@pi$，选 B。`
      ],
      hints: ['长方体体对角线过外接球球心，长度等于直径。', '先求 $R$ 再套球表面积公式 $4@pi R^2$。'],
      pitfalls: ['把体对角线长当成半径。', '球表面积公式误用 $@frac43@pi R^3$。'],
      takeaway: '长方体（正方体）外接球：体对角线为直径。',
      knowledge: ['k-so-sphere', 'k-so-solid']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 3,
      stem: `已知双曲线 $C:@frac{x^2}{a^2}-@frac{y^2}{b^2}=1$（$a>0,b>0$）的一条渐近线方程为 $y=2x$，焦距为 $2@sqrt5$，则 $C$ 的实轴长为`,
      options: [
        { k: 'A', t: `$1$` },
        { k: 'B', t: `$2$` },
        { k: 'C', t: `$2@sqrt5$` },
        { k: 'D', t: `$4$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `渐近线为 $y=@pm@frac ba x$，由 $y=2x$ 得 $@frac ba=2$，即 $b=2a$。`,
        `焦距为 $2c=2@sqrt5$，故 $c=@sqrt5$。`,
        `由 $c^2=a^2+b^2$ 得 $5=a^2+4a^2$，所以 $a=1$，$b=2$。`,
        `实轴长为 $2a=2$，选 B。`
      ],
      hints: ['由渐近线方程读出 $@frac ba$。', '焦距是 $2c$，不是 $c$。', '用 $c^2=a^2+b^2$ 解出 $a$。'],
      pitfalls: ['把焦距 $2@sqrt5$ 当成 $c=2@sqrt5$。', '把实轴长写成 $a$ 而不是 $2a$。'],
      takeaway: '双曲线基本量：渐近线定 $@frac ba$，焦距定 $c$，再用 $c^2=a^2+b^2$。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 3,
      stem: `函数 $f(x)=x^3-3x^2+2$ 的极大值为`,
      options: [
        { k: 'A', t: `$2$` },
        { k: 'B', t: `$0$` },
        { k: 'C', t: `$-2$` },
        { k: 'D', t: `$4$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `求导：$f'(x)=3x^2-6x=3x(x-2)$。`,
        `令 $f'(x)=0$ 得 $x=0$ 或 $x=2$。`,
        `当 $x<0$ 时 $f'(x)>0$，当 $0<x<2$ 时 $f'(x)<0$，所以 $x=0$ 处取极大值。`,
        `极大值为 $f(0)=2$，选 A。`
      ],
      hints: ['先求导并令导数为零。', '用导数符号判断极大值点，而不是只看驻点。'],
      pitfalls: ['把 $x=2$ 处的极小值当成极大值。', '求导时把 $-3x^2$ 的导数写成 $-3x$。'],
      takeaway: '求极值：导数零点 + 两侧符号变化，先增后减为极大。',
      knowledge: ['k-dv-extreme', 'k-dv-monotone']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 3,
      stem: `袋中有 $3$ 个红球和 $2$ 个白球，这 $5$ 个球除颜色外完全相同。从中不放回地随机摸出 $2$ 个球，则下列结论正确的是`,
      options: [
        { k: 'A', t: `两球同色的概率为 $@frac25$` },
        { k: 'B', t: `至少摸到一个红球的概率为 $@frac35$` },
        { k: 'C', t: `两球颜色不同的概率为 $@frac35$` },
        { k: 'D', t: `第一次摸到红球且第二次摸到白球的概率为 $@frac{3}{10}$` }
      ],
      answer: 'ACD',
      accept: [],
      solution: [
        `从 $5$ 个球中不放回摸 $2$ 个，共有 $@mathrm{C}_5^2=10$ 种等可能结果。`,
        `A：同色有 $@mathrm{C}_3^2+@mathrm{C}_2^2=3+1=4$ 种，概率为 $@frac{4}{10}=@frac25$，正确。`,
        `B：至少一个红球的对立事件是两球都白，概率为 $1-@frac{@mathrm{C}_2^2}{10}=@frac{9}{10}$，故 B 错误。`,
        `C：颜色不同有 $3@times2=6$ 种，概率为 $@frac{6}{10}=@frac35$，正确。`,
        `D：第一次红、第二次白，概率为 $@frac35@times@frac24=@frac{3}{10}$，正确。`,
        `综上，选 ACD。`
      ],
      hints: ['不放回摸球按组合计数，样本空间共 $@mathrm{C}_5^2$ 个结果。', '“至少一个”常用对立事件“一个都没有”。', '分步事件用乘法：第一次红、第二次白。'],
      pitfalls: ['把不放回误当成有放回，算出 $@frac{9}{25}$。', 'B 中用 $@frac35$ 是“恰好一个红球”的概率，不是“至少一个”。'],
      takeaway: '不放回抽样：组合计数统一样本空间；至少问题用对立事件。',
      knowledge: ['k-ps-prob']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知函数 $f(x)=@sin@left(2x+@frac{@pi}{3}@right)$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$f(x)$ 的最小正周期为 $@pi$` },
        { k: 'B', t: `$f(x)$ 的图象关于点 $@left(@frac{@pi}{6},0@right)$ 对称` },
        { k: 'C', t: `$f(x)$ 在 $@left(-@frac{@pi}{6},@frac{@pi}{3}@right)$ 上单调递增` },
        { k: 'D', t: `将 $f(x)$ 的图象向右平移 $@frac{@pi}{6}$ 个单位长度，得到 $y=@sin2x$ 的图象` }
      ],
      answer: 'AD',
      accept: [],
      solution: [
        `A：$@omega=2$，最小正周期 $T=@frac{2@pi}{@omega}=@pi$，正确。`,
        `B：$f@left(@frac{@pi}{6}@right)=@sin@left(@frac{@pi}{3}+@frac{@pi}{3}@right)=@frac{@sqrt3}{2}@ne0$，故点 $@left(@frac{@pi}{6},0@right)$ 不是对称中心，错误。`,
        `C：当 $x@in@left(-@frac{@pi}{6},@frac{@pi}{3}@right)$ 时，相位 $2x+@frac{@pi}{3}@in@left(0,@pi@right)$，正弦函数先增后减，故不单调递增，错误。`,
        `D：向右平移 $@frac{@pi}{6}$ 得 $@sin@left[2@left(x-@frac{@pi}{6}@right)+@frac{@pi}{3}@right]=@sin2x$，正确。`,
        `综上，选 AD。`
      ],
      hints: ['把相位 $2x+@frac{@pi}{3}$ 看成一个整体处理。', '对称中心要求函数值为 $0$，对称轴要求取到最值。', '平移口诀“左加右减”，只对自变量 $x$ 作替换。'],
      pitfalls: ['判断单调性时只看区间端点值，没有检查相位是否越过 $@frac{@pi}{2}$。', '平移时忘记把平移量乘以 $@omega$。'],
      takeaway: '三角函数性质：整体代换相位，单调性要看相位所在区间。',
      knowledge: ['k-tr-graph']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知抛物线 $C:y^2=4x$ 的焦点为 $F$，准线为 $l$，$P$ 为 $C$ 上任意一点，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$F$ 的坐标为 $(1,0)$` },
        { k: 'B', t: `若 $P$ 到 $y$ 轴的距离为 $3$，则 $|PF|=4$` },
        { k: 'C', t: `若 $|PF|=3$，则 $P$ 的纵坐标为 $@pm2@sqrt2$` },
        { k: 'D', t: `过 $F$ 且垂直于 $x$ 轴的弦长为 $2$` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `由 $y^2=2px=4x$ 得 $p=2$，故 $F(1,0)$，准线 $l:x=-1$，A 正确。`,
        `B：$P$ 到 $y$ 轴距离为 $x_P=3$，由抛物线定义 $|PF|=x_P+1=4$，正确。`,
        `C：由 $|PF|=x_P+1=3$ 得 $x_P=2$，代入 $y^2=4x$ 得 $y=@pm2@sqrt2$，正确。`,
        `D：过焦点且垂直于 $x$ 轴的弦为通径，长为 $2p=4$，不是 $2$，错误。`,
        `综上，选 ABC。`
      ],
      hints: ['抛物线 $y^2=2px$ 的焦点为 $@left(@frac p2,0@right)$，准线为 $x=-@frac p2$。', '焦半径 $|PF|=x_P+@frac p2$，是“到准线距离”的转化。'],
      pitfalls: ['把 $p$ 当成 $4$，焦点写成 $(2,0)$。', 'D 中把通径长记成 $p$。'],
      takeaway: '抛物线定义是核心：焦半径等于点到准线的距离。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 3,
      stem: `在 $@left(x+@frac{2}{x^2}@right)^6$ 的展开式中，常数项为 ________ .`,
      answer: `$60$`,
      accept: ['60'],
      solution: [
        `写出通项：$T_{k+1}=@mathrm{C}_6^k x^{6-k}@left(@frac{2}{x^2}@right)^k=@mathrm{C}_6^k2^k x^{6-3k}$。`,
        `令 $x$ 的指数为零：$6-3k=0$，得 $k=2$。`,
        `常数项为 $@mathrm{C}_6^2@times2^2=15@times4=60$。`
      ],
      hints: ['先写通项，把 $x$ 的指数合并。', '常数项即 $x$ 的指数为 $0$。', '注意系数 $2^k$ 不要漏掉。'],
      pitfalls: ['把 $@left(@frac{2}{x^2}@right)^k$ 的指数算成 $-k$。', '求出 $k=2$ 后忘记乘 $2^2$。'],
      takeaway: '二项式常数项：通项指数为零定 $k$，再代回系数。',
      knowledge: ['k-binomial']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 3,
      stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_n=@frac{1}{n(n+1)}$（$n@in@mathbb{N}^*$），则其前 $n$ 项和 $S_n=$ ________ .`,
      answer: `$@frac{n}{n+1}$`,
      accept: ['n/(n+1)', '1-1/(n+1)'],
      solution: [
        `裂项：$a_n=@frac{1}{n(n+1)}=@frac1n-@frac{1}{n+1}$。`,
        `累加得 $S_n=@left(1-@frac12@right)+@left(@frac12-@frac13@right)+@dots+@left(@frac1n-@frac{1}{n+1}@right)$。`,
        `中间项两两相消，所以 $S_n=1-@frac{1}{n+1}=@frac{n}{n+1}$。`
      ],
      hints: ['分母为相邻两数之积，考虑裂项相消。', '裂项后注意正负号交替相消。'],
      pitfalls: ['把裂项写成 $@frac{1}{n+1}-@frac1n$，符号反了。', '结果忘记通分化简。'],
      takeaway: '裂项相消：$@frac{1}{n(n+1)}=@frac1n-@frac{1}{n+1}$，求和后只剩首尾。',
      knowledge: ['k-seq-sum']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 3,
      stem: `若函数 $f(x)=x^3-ax$ 在区间 $@left[1,+@infty@right)$ 上单调递增，则实数 $a$ 的取值范围是 ________ .`,
      answer: `$@left(-@infty,3@right]$`,
      accept: ['(-∞,3]', '(-inf,3]', 'a≤3'],
      solution: [
        `求导：$f'(x)=3x^2-a$。`,
        `由 $f(x)$ 在 $@left[1,+@infty@right)$ 上单调递增，得 $3x^2-a@ge0$ 对任意 $x@ge1$ 恒成立。`,
        `即 $a@le3x^2$ 对任意 $x@ge1$ 恒成立，而 $3x^2$ 在 $@left[1,+@infty@right)$ 上的最小值为 $3$。`,
        `所以 $a@le3$，即 $a@in@left(-@infty,3@right]$。`
      ],
      hints: ['单调递增转化为导数恒非负。', '分离参数：$a@le3x^2$ 恒成立，只需求右侧最小值。'],
      pitfalls: ['把条件写成导数严格大于零，就取不到端点 $a=3$。', '误求 $3x^2$ 的最大值。'],
      takeaway: '已知单调性求参数：导数恒非负 + 分离参数 + 求最值。',
      knowledge: ['k-dv-param', 'k-dv-monotone']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `在 $@triangle ABC$ 中，内角 $A,B,C$ 所对的边分别为 $a,b,c$，已知 $b@cos C+c@cos B=2a@cos A$。（1）求 $A$；（2）若 $a=@sqrt3$，求 $@triangle ABC$ 周长的最大值。`,
      answer: `(1) $@frac{@pi}{3}$；(2) $3@sqrt3$`,
      accept: [],
      solution: [
        `（1）由正弦定理 $a=2R@sin A$，$b=2R@sin B$，$c=2R@sin C$，条件化为 $2R(@sin B@cos C+@sin C@cos B)=2a@cos A$。`,
        `即 $2R@sin(B+C)=2a@cos A$。因为 $B+C=@pi-A$，所以 $@sin(B+C)=@sin A$。`,
        `又 $a=2R@sin A>0$，故 $a=2a@cos A$，得 $@cos A=@frac12$；结合 $A@in@left(0,@pi@right)$，得 $A=@frac{@pi}{3}$。`,
        `（2）由余弦定理 $a^2=b^2+c^2-2bc@cos A$，即 $3=b^2+c^2-bc$。`,
        `由 $b^2+c^2@ge2bc$ 得 $3@ge bc$，所以 $(b+c)^2=3+3bc@le12$，即 $b+c@le2@sqrt3$。`,
        `当且仅当 $b=c=@sqrt3$ 时取等号，故周长 $a+b+c@le3@sqrt3$，最大值为 $3@sqrt3$。`
      ],
      hints: ['第（1）问边化角，并用 $@sin(B+C)=@sin A$ 化简。', '第（2）问用余弦定理把 $b,c$ 的关系固定，再用基本不等式。', '注意取等条件 $b=c$ 时要检验三角形存在。'],
      pitfalls: ['约去 $a$ 时不说明 $a>0$。', '基本不等式方向用反，得到 $bc@ge3$。', '忘记把 $a=@sqrt3$ 加进周长。'],
      takeaway: '解三角形最值：正弦定理定角，余弦定理定关系，基本不等式求最值并检验取等。',
      knowledge: ['k-tr-solve', 'k-ie-basic', 'k-tr-maxmin']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 4,
      stem: `在直三棱柱 $ABC-A_1B_1C_1$ 中，$AB=AC=AA_1=2$，$@angle BAC=90^@circ$，$D$ 为 $BC$ 的中点。（1）证明：$A_1B@parallel$ 平面 $AC_1D$；（2）求点 $B_1$ 到平面 $AC_1D$ 的距离。`,
      answer: `(1) 证明见解析；(2) $@frac{4@sqrt3}{3}$`,
      accept: [],
      solution: [
        `（1）设 $O$ 为 $A_1C$ 与 $AC_1$ 的交点。因为 $ACC_1A_1$ 是正方形，所以 $O$ 是 $A_1C$ 的中点。`,
        `又 $D$ 是 $BC$ 的中点，所以在 $@triangle A_1BC$ 中，$OD$ 是中位线，故 $OD@parallel A_1B$。`,
        `因为 $O@in AC_1@subset$ 平面 $AC_1D$，$D@in$ 平面 $AC_1D$，所以 $OD@subset$ 平面 $AC_1D$；又 $A_1B@not@subset$ 平面 $AC_1D$，故 $A_1B@parallel$ 平面 $AC_1D$。`,
        `（2）以 $A$ 为原点，$AB,AC,AA_1$ 所在直线分别为 $x,y,z$ 轴建系，则 $A(0,0,0)$，$B(2,0,0)$，$C(0,2,0)$，$C_1(0,2,2)$，$B_1(2,0,2)$，$D(1,1,0)$。`,
        `由 $@vec{AC_1}=(0,2,2)$，$@vec{AD}=(1,1,0)$，设平面 $AC_1D$ 的法向量 $@vec n=(x,y,z)$，得 $2y+2z=0$，$x+y=0$，取 $@vec n=(1,-1,1)$，平面方程为 $x-y+z=0$。`,
        `所以点 $B_1$ 到平面 $AC_1D$ 的距离 $d=@frac{|2-0+2|}{@sqrt{1^2+(-1)^2+1^2}}=@frac{4}{@sqrt3}=@frac{4@sqrt3}{3}$。`
      ],
      hints: ['（1）在 $@triangle A_1BC$ 中找中位线，把线面平行转化为线线平行。', '（2）建系后求平面的法向量，再用点到平面距离公式。', '法向量取整系数即可，不必单位化。'],
      pitfalls: ['（1）只写 $OD@parallel A_1B$ 就下结论，漏掉 $OD@subset$ 平面且 $A_1B@not@subset$ 平面。', '（2）距离公式漏掉分母 $|@vec n|$。'],
      takeaway: '线面平行找中位线；点面距离用“法向量投影”$d=@frac{|@vec{AB_1}@cdot@vec n|}{|@vec n|}$。',
      knowledge: ['k-so-parallel', 'k-so-solid']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 3,
      stem: `甲、乙两人进行定点投篮练习，甲每次投篮命中的概率为 $@frac34$，乙每次投篮命中的概率为 $@frac23$，每人各投篮 $2$ 次，各次投篮结果相互独立。记 $X$ 为两人命中的总次数。（1）求 $X$ 的分布列；（2）求 $E(X)$ 与 $D(X)$；（3）求两人命中次数相同的概率。`,
      answer: `(1) $P(X=0)=@frac{1}{144}$，$P(X=1)=@frac{5}{72}$，$P(X=2)=@frac{37}{144}$，$P(X=3)=@frac{5}{12}$，$P(X=4)=@frac14$；(2) $E(X)=@frac{17}{6}$，$D(X)=@frac{59}{72}$；(3) $@frac{61}{144}$`,
      accept: [],
      solution: [
        `设甲命中次数为 $X_1$，乙命中次数为 $X_2$，则 $X_1@sim B@left(2,@frac34@right)$，$X_2@sim B@left(2,@frac23@right)$，且 $X=X_1+X_2$。`,
        `$X_1$ 的分布：$P(X_1=0)=@frac{1}{16}$，$P(X_1=1)=@frac38$，$P(X_1=2)=@frac{9}{16}$；$X_2$ 的分布：$P(X_2=0)=@frac19$，$P(X_2=1)=@frac49$，$P(X_2=2)=@frac49$。`,
        `$P(X=0)=@frac{1}{16}@times@frac19=@frac{1}{144}$，$P(X=1)=@frac38@times@frac19+@frac{1}{16}@times@frac49=@frac{5}{72}$。`,
        `$P(X=2)=@frac{9}{16}@times@frac19+@frac38@times@frac49+@frac{1}{16}@times@frac49=@frac{37}{144}$，$P(X=3)=@frac{9}{16}@times@frac49+@frac38@times@frac49=@frac{5}{12}$，$P(X=4)=@frac{9}{16}@times@frac49=@frac14$。`,
        `（2）$E(X)=E(X_1)+E(X_2)=2@times@frac34+2@times@frac23=@frac{17}{6}$，$D(X)=D(X_1)+D(X_2)=2@times@frac34@times@frac14+2@times@frac23@times@frac13=@frac{59}{72}$。`,
        `（3）两人命中次数相同即 $X_1=X_2$，概率为 $@frac{1}{16}@times@frac19+@frac38@times@frac49+@frac{9}{16}@times@frac49=@frac{61}{144}$。`
      ],
      hints: ['把总命中次数拆成两个二项分布之和，利用独立性。', '分布列按 $X=0,1,2,3,4$ 分类，注意 $X=2$ 有三种组合。', '期望与方差可直接用二项分布的公式相加。'],
      pitfalls: ['计算 $P(X=2)$ 时漏掉“甲1次乙1次”这一种情况。', '把 $D(X)$ 写成 $D(X_1)@times D(X_2)$。', '第（3）问误算成 $P(X=2)$。'],
      takeaway: '独立随机变量之和：分布列分类相加，期望方差直接相加。',
      knowledge: ['k-ps-dist', 'k-ps-expect', 'k-ps-prob']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 4,
      stem: `已知椭圆 $C:@frac{x^2}{8}+@frac{y^2}{4}=1$ 的右焦点为 $F$，$O$ 为坐标原点。（1）求 $C$ 的离心率；（2）若过 $F$ 的直线 $l$ 的斜率为 $1$，求 $l$ 被 $C$ 截得的弦长；（3）设 $A,B$ 为过 $F$ 的直线与 $C$ 的两个交点，求 $@triangle OAB$ 面积的最大值。`,
      answer: `(1) $@frac{@sqrt2}{2}$；(2) $@frac{8@sqrt2}{3}$；(3) $2@sqrt2$`,
      accept: [],
      solution: [
        `（1）$a^2=8$，$b^2=4$，故 $c=@sqrt{8-4}=2$，离心率 $e=@frac ca=@frac{2}{2@sqrt2}=@frac{@sqrt2}{2}$。`,
        `（2）$F(2,0)$，$l:y=x-2$。代入 $x^2+2y^2=8$ 得 $3x^2-8x=0$，解得 $x_1=0$，$x_2=@frac83$，对应 $y_1=-2$，$y_2=@frac23$。`,
        `所以 $|AB|=@sqrt{@left(@frac83@right)^2+@left(@frac83@right)^2}=@frac{8@sqrt2}{3}$。`,
        `（3）若 $l$ 与 $x$ 轴重合，则面积为 $0$；否则设 $l:x=my+2$，代入得 $(m^2+2)y^2+4my-4=0$。`,
        `由韦达定理 $|y_1-y_2|=@frac{@sqrt{16m^2+16(m^2+2)}}{m^2+2}=@frac{4@sqrt2@sqrt{m^2+1}}{m^2+2}$，故 $S=@frac12|OF||y_1-y_2|=@frac{4@sqrt2@sqrt{m^2+1}}{m^2+2}$。`,
        `令 $t=@sqrt{m^2+1}@ge1$，则 $S=@frac{4@sqrt2t}{t^2+1}=@frac{4@sqrt2}{t+@frac1t}@le@frac{4@sqrt2}{2}=2@sqrt2$，当 $t=1$（即 $m=0$）时取等号，故面积的最大值为 $2@sqrt2$。`
      ],
      hints: ['第（1）问由方程读出 $a,b$，再求 $c$。', '第（2）问联立后可直接解出交点坐标。', '第（3）问设 $x=my+2$ 可避免讨论斜率，并注意补上 $l$ 与 $x$ 轴重合的情形。', '面积写成 $@frac12|OF||y_1-y_2|$，换元后用基本不等式。'],
      pitfalls: ['（2）联立时把 $y=x-2$ 代错方程，漏乘 $2$。', '（3）设 $y=k(x-2)$ 时漏掉竖直线 $x=2$，而最大值恰在此处取到。', '换元后不写 $t@ge1$，无法说明取等条件。'],
      takeaway: '椭圆面积最值：设线联立 $@to$ 韦达 $@to$ 面积表达式 $@to$ 换元 $@to$ 基本不等式，最后验证取等。',
      knowledge: ['k-ag-conic', 'k-ag-chord', 'k-ag-area']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 5,
      stem: `设 $n$ 为正整数。若集合 $A@subseteq@left@{1,2,@dots,n@right@}$ 满足：对任意 $a,b@in A$（$a,b$ 可以相同），都有 $a+b@notin A$，则称 $A$ 为 $@left@{1,2,@dots,n@right@}$ 的一个“无和集”。（1）判断 $@left@{1,3,5@right@}$ 是否为 $@left@{1,2,3,4,5@right@}$ 的无和集，并写出 $@left@{1,2,3,4,5@right@}$ 的一个含 $3$ 个元素的无和集；（2）证明：若 $A$ 是 $@left@{1,2,@dots,n@right@}$ 的无和集，则 $|A|@le@left@lceil@frac n2@right@rceil$；（3）求 $@left@{1,2,3,4,5@right@}$ 的所有无和集的个数。`,
      answer: `(1) 是；$@left@{3,4,5@right@}$（答案不唯一）；(2) 证明见解析；(3) $16$`,
      accept: [],
      solution: [
        `（1）$@left@{1,3,5@right@}$ 中任意两数（可相同）之和只可能为 $2,4,6,8,10$，均不属于该集合，所以它是无和集；$@left@{3,4,5@right@}$ 中任意两数之和都大于 $5$，也是含 $3$ 个元素的无和集。`,
        `（2）设 $m$ 为 $A$ 中的最大元素。对任意 $a@in A$ 且 $a@ne m$，若 $m-a@in A$，则 $a+(m-a)=m@in A$，与无和集的定义矛盾，故 $m-a@notin A$。`,
        `于是 $A@setminus@left@{m@right@}$ 与 $@left@{m-a@mid a@in A,a@ne m@right@}$ 都是 $@left@{1,2,@dots,m-1@right@}$ 的子集，且互不相交，共含 $2(|A|-1)$ 个不同元素。`,
        `所以 $2(|A|-1)@le m-1$，即 $|A|@le@frac{m+1}{2}@le@frac{n+1}{2}$；又 $|A|$ 为整数，故 $|A|@le@left@lceil@frac n2@right@rceil$。`,
        `（3）若 $1@notin A$，则 $A@subseteq@left@{2,3,4,5@right@}$。其中不能同时含 $2,4$（因 $2+2=4$），也不能同时含 $2,3,5$（因 $2+3=5$），由容斥得这样的 $A$ 有 $16-4-2+1=11$ 个。`,
        `若 $1@in A$，则 $2@notin A$（因 $1+1=2$）；在 $@left@{3,4,5@right@}$ 中不能同时取 $3,4$（因 $1+3=4$），不能同时取 $4,5$（因 $1+4=5$），共 $8-3=5$ 个。综上，所有无和集共有 $11+5=16$ 个。`
      ],
      hints: ['第（1）问按定义逐一检验所有可能的两数之和。', '第（2）问取最大元素 $m$，利用 $a$ 与 $m-a$ 不能同时在 $A$ 中构造不相交的集合。', '第（3）问按 $1$ 是否属于 $A$ 分类，再用容斥计数。'],
      pitfalls: ['第（2）问忽略“$a,b$ 可以相同”，漏掉 $2a@notin A$ 的限制。', '第（3）问含 $1$ 时忘记 $2@notin A$，或容斥时重复计数 $@left@{3,4,5@right@}$。'],
      takeaway: '新定义题：先按定义验证，再用“最大元素 + 配对”证明上界，最后分类计数。',
      knowledge: ['k-count']
    }
  ]
});
