/* 2025 年普通高等学校招生全国统一考试（新高考Ⅱ卷）数学 · 题库数据
 * 公式约定：LaTeX 反斜杠一律写成 @；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: '2025-xkb2',
  title: '2025 年普通高等学校招生全国统一考试（新高考Ⅱ卷）',
  short: '2025 新高考Ⅱ',
  year: 2025,
  region: '新高考Ⅱ卷',
  kind: 'real',
  duration: 150,
  note: '19 题结构：8 单选 + 3 多选 + 3 填空 + 5 解答；第19题为新定义压轴',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `样本数据 $2,8,14,16,20$ 的平均数为`,
      options: [
        { k: 'A', t: `$8$` },
        { k: 'B', t: `$9$` },
        { k: 'C', t: `$12$` },
        { k: 'D', t: `$18$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `平均数等于各数据之和除以数据个数。`,
        `数据之和为 $2+8+14+16+20=60$，共有 $5$ 个数据。`,
        `所以平均数为 $@frac{60}{5}=12$，选 C。`
      ],
      hints: ['平均数就是算术平均，先把所有数据相加。', '注意数据个数是 $5$，不是 $4$。'],
      pitfalls: ['把中位数 $14$ 当成平均数。', '漏加某个数据导致和算错。'],
      takeaway: '平均数 = 数据总和 ÷ 数据个数，先求和再除。',
      knowledge: ['k-ps-stat']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 1,
      stem: `已知 $z=1+i$，则 $@frac{1}{z-1}=$`,
      options: [
        { k: 'A', t: `$-i$` },
        { k: 'B', t: `$i$` },
        { k: 'C', t: `$-1$` },
        { k: 'D', t: `$1$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `先算分母：$z-1=(1+i)-1=i$。`,
        `于是 $@frac{1}{z-1}=@frac{1}{i}$。`,
        `分子分母同乘 $i$：$@frac{1}{i}=@frac{i}{i^2}=@frac{i}{-1}=-i$，选 A。`
      ],
      hints: ['先把 $z$ 代入，化简分母。', '分母含 $i$ 时，分子分母同乘 $i$ 或共轭复数。'],
      pitfalls: ['误把 $@frac{1}{i}$ 写成 $i$。', '忘记 $i^2=-1$。'],
      takeaway: '复数除法：分母实数化，同乘分母的共轭（纯虚数乘 $i$ 即可）。',
      knowledge: ['k-fn-elem']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 1,
      stem: `已知集合 $A=@left@{-4,0,1,2,8@right@}$，$B=@left@{x@mid x^3=x@right@}$，则 $A@cap B=$`,
      options: [
        { k: 'A', t: `$@left@{0,1,2@right@}$` },
        { k: 'B', t: `$@left@{1,2,8@right@}$` },
        { k: 'C', t: `$@left@{2,8@right@}$` },
        { k: 'D', t: `$@left@{0,1@right@}$` }
      ],
      answer: 'D',
      accept: [],
      solution: [
        `解方程 $x^3=x$：移项得 $x^3-x=0$，即 $x(x-1)(x+1)=0$。`,
        `所以 $B=@left@{-1,0,1@right@}$。`,
        `把 $B$ 中元素与 $A$ 对照，$-1$ 不在 $A$ 中，$0,1$ 在 $A$ 中。`,
        `故 $A@cap B=@left@{0,1@right@}$，选 D。`
      ],
      hints: ['先把集合 $B$ 解出来，注意有三个解。', '交集只保留同时属于 $A$ 的元素。'],
      pitfalls: ['解 $x^3=x$ 时两边约去 $x$，漏掉 $x=0$。', '把 $-1$ 误算进交集。'],
      takeaway: '集合运算先化简集合，再逐个元素判断归属。',
      knowledge: ['k-set-ops']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 2,
      stem: `不等式 $@frac{x-4}{x-1}@ge2$ 的解集是`,
      options: [
        { k: 'A', t: `$@left[-2,1@right]$` },
        { k: 'B', t: `$@left(-@infty,-2@right]$` },
        { k: 'C', t: `$@left[-2,1@right)$` },
        { k: 'D', t: `$@left(1,+@infty@right)$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `移项：$@frac{x-4}{x-1}-2@ge0$。`,
        `通分：$@frac{x-4-2(x-1)}{x-1}=@frac{-x-2}{x-1}@ge0$，即 $@frac{x+2}{x-1}@le0$。`,
        `等价于 $(x+2)(x-1)@le0$ 且 $x-1@ne0$。`,
        `解得 $-2@le x<1$，故解集为 $@left[-2,1@right)$，选 C。`
      ],
      hints: ['分式不等式先移项、通分，不要直接乘分母。', '转化为整式不等式时要写清分母不为零。'],
      pitfalls: ['直接两边乘 $x-1$，没有讨论正负导致不等号方向出错。', '把端点 $1$ 也算进解集。'],
      takeaway: '分式不等式：移项通分 → 化为乘积符号 → 补上分母不为零。',
      knowledge: ['k-ie-basic']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 2,
      stem: `在 $@triangle ABC$ 中，$BC=2$，$AC=1+@sqrt3$，$AB=@sqrt6$，则 $A=$`,
      options: [
        { k: 'A', t: `$45^@circ$` },
        { k: 'B', t: `$60^@circ$` },
        { k: 'C', t: `$120^@circ$` },
        { k: 'D', t: `$135^@circ$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `角 $A$ 的对边是 $BC=2$，两邻边是 $AB=@sqrt6$，$AC=1+@sqrt3$。`,
        `由余弦定理：$@cos A=@frac{AB^2+AC^2-BC^2}{2@cdot AB@cdot AC}$。`,
        `分子为 $6+(1+@sqrt3)^2-4=6+1+2@sqrt3+3-4=6+2@sqrt3$。`,
        `分母为 $2@sqrt6(1+@sqrt3)$，且 $@frac{6+2@sqrt3}{1+@sqrt3}=2@sqrt3$。`,
        `故 $@cos A=@frac{2@sqrt3}{2@sqrt6}=@frac{1}{@sqrt2}=@frac{@sqrt2}{2}$。`,
        `又 $A@in(0,@pi)$，所以 $A=45^@circ$，选 A。`
      ],
      hints: ['已知三边求角，直接用余弦定理。', '分子分母都含 $1+@sqrt3$，先约分再算。'],
      pitfalls: ['余弦定理中把对边与邻边位置弄错。', '约分时漏掉因子 $2$，导致余弦值算错。'],
      takeaway: '三边求角：余弦定理，先算对边平方，再整体约分。',
      knowledge: ['k-tr-solve']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 3,
      stem: `设抛物线 $C:y^2=2px(p>0)$ 的焦点为 $F$，点 $A$ 在 $C$ 上，过 $A$ 作 $C$ 的准线的垂线，垂足为 $B$。若直线 $BF$ 的方程为 $y=-2x+2$，则 $|AF|=$`,
      options: [
        { k: 'A', t: `$3$` },
        { k: 'B', t: `$4$` },
        { k: 'C', t: `$5$` },
        { k: 'D', t: `$6$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `直线 $BF$ 与 $x$ 轴的交点就是焦点 $F$：令 $y=0$ 得 $x=1$，故 $F(1,0)$。`,
        `于是 $@frac{p}{2}=1$，$p=2$，抛物线为 $y^2=4x$，准线为 $x=-1$。`,
        `点 $B$ 在准线上，又在直线 $BF$ 上：令 $x=-1$ 得 $y=4$，故 $B(-1,4)$。`,
        `因为 $AB@perp$ 准线，所以 $A$ 与 $B$ 纵坐标相同，$y_A=4$。`,
        `代入 $y^2=4x$ 得 $x_A=4$，即 $A(4,4)$。`,
        `由抛物线定义 $|AF|=|AB|=x_A+1=5$，选 C。`
      ],
      hints: ['直线 $BF$ 过焦点，先求 $F$ 与 $p$。', '准线是竖直线，$B$ 与 $A$ 纵坐标相同。', '焦半径 $|AF|=x_A+@frac{p}{2}$。'],
      pitfalls: ['把焦点坐标写成 $(p,0)$。', '求出 $B$ 后忘记 $A$ 的纵坐标与 $B$ 相同。'],
      takeaway: '抛物线焦半径：$|AF|=x_A+@frac{p}{2}$，配合准线垂足转化。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 3,
      stem: `记 $S_n$ 为等差数列 $@left@{a_n@right@}$ 的前 $n$ 项和。若 $S_3=6$，$S_5=-5$，则 $S_6=$`,
      options: [
        { k: 'A', t: `$-20$` },
        { k: 'B', t: `$-15$` },
        { k: 'C', t: `$-10$` },
        { k: 'D', t: `$-5$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `设首项为 $a_1$，公差为 $d$。`,
        `由 $S_3=3a_1+3d=6$ 得 $a_1+d=2$。`,
        `由 $S_5=5a_1+10d=-5$ 得 $a_1+2d=-1$。`,
        `两式相减得 $d=-3$，回代得 $a_1=5$。`,
        `所以 $S_6=6a_1+15d=30-45=-15$，选 B。`
      ],
      hints: ['等差数列求和只需两个基本量 $a_1,d$。', '先把 $S_3,S_5$ 化成关于 $a_1,d$ 的方程组。'],
      pitfalls: ['把 $S_3$ 写成 $3a_1+2d$。', '解方程组时符号出错。'],
      takeaway: '等差数列基本量法：列 $a_1,d$ 的方程，求出后再代求和公式。',
      knowledge: ['k-seq-basic', 'k-seq-sum']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 3,
      stem: `已知 $0<@alpha<@pi$，$@cos@frac{@alpha}{2}=@frac{@sqrt5}{5}$，则 $@sin@left(@alpha-@frac{@pi}{4}@right)=$`,
      options: [
        { k: 'A', t: `$@frac{@sqrt2}{10}$` },
        { k: 'B', t: `$@frac{@sqrt2}{5}$` },
        { k: 'C', t: `$@frac{3@sqrt2}{10}$` },
        { k: 'D', t: `$@frac{7@sqrt2}{10}$` }
      ],
      answer: 'D',
      accept: [],
      solution: [
        `由二倍角公式：$@cos@alpha=2@cos^2@frac{@alpha}{2}-1=2@times@frac{1}{5}-1=-@frac{3}{5}$。`,
        `因为 $0<@alpha<@pi$ 且 $@cos@alpha<0$，所以 $@alpha@in@left(@frac{@pi}{2},@pi@right)$，故 $@sin@alpha>0$。`,
        `于是 $@sin@alpha=@sqrt{1-@cos^2@alpha}=@sqrt{1-@frac{9}{25}}=@frac{4}{5}$。`,
        `由两角差的正弦公式：$@sin@left(@alpha-@frac{@pi}{4}@right)=@sin@alpha@cos@frac{@pi}{4}-@cos@alpha@sin@frac{@pi}{4}$。`,
        `代入得 $@frac{4}{5}@times@frac{@sqrt2}{2}-@left(-@frac{3}{5}@right)@times@frac{@sqrt2}{2}=@frac{7@sqrt2}{10}$，选 D。`
      ],
      hints: ['已知半角余弦，先用二倍角公式求 $@cos@alpha$。', '由 $@cos@alpha$ 的符号确定 $@alpha$ 所在象限，再定 $@sin@alpha$ 的正负。'],
      pitfalls: ['忘记判断象限，把 $@sin@alpha$ 取成负值。', '两角差公式中符号写错，把 $+$ 写成 $-$。'],
      takeaway: '半角余弦 → 二倍角求 $@cos@alpha$ → 定象限求 $@sin@alpha$ → 和差角展开。',
      knowledge: ['k-tr-identity']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 3,
      stem: `记 $S_n$ 为等比数列 $@left@{a_n@right@}$ 的前 $n$ 项和，$q$ 为 $@left@{a_n@right@}$ 的公比，$q>0$。若 $S_3=7$，$a_3=1$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$q=@frac{1}{2}$` },
        { k: 'B', t: `$a_5=@frac{1}{9}$` },
        { k: 'C', t: `$S_5=8$` },
        { k: 'D', t: `$a_n+S_n=8$` }
      ],
      answer: 'AD',
      accept: [],
      solution: [
        `由 $a_3=a_1q^2=1$ 得 $a_1=@frac{1}{q^2}$。`,
        `又 $S_3=a_1(1+q+q^2)=7$，代入得 $@frac{1+q+q^2}{q^2}=7$。`,
        `整理得 $6q^2-q-1=0$，即 $(3q+1)(2q-1)=0$，结合 $q>0$ 得 $q=@frac{1}{2}$，A 正确。`,
        `此时 $a_1=4$，$a_5=a_1q^4=4@times@frac{1}{16}=@frac{1}{4}$，B 错误。`,
        `$S_5=@frac{4@left(1-@frac{1}{32}@right)}{1-@frac{1}{2}}=@frac{31}{4}@ne8$，C 错误。`,
        `$a_n=4@left(@frac{1}{2}@right)^{n-1}=2^{3-n}$，$S_n=8-2^{3-n}$，故 $a_n+S_n=8$，D 正确。`,
        `综上，选 AD。`
      ],
      hints: ['用 $a_3$ 把 $a_1$ 表示成 $q$ 的式子，减少未知量。', '求出 $q$ 后逐项验算，注意 $S_5$ 的分母是 $1-q$。'],
      pitfalls: ['解二次方程时把负根 $q=-@frac13$ 也保留。', '把 $a_5$ 算成 $a_3q^3$。'],
      takeaway: '等比数列基本量：$a_n=a_1q^{n-1}$、$S_n=@frac{a_1(1-q^n)}{1-q}$，先定 $q$ 再逐项判断。',
      knowledge: ['k-seq-basic', 'k-seq-sum']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 4,
      stem: `已知 $f(x)$ 是定义在 $@mathbb{R}$ 上的奇函数，且当 $x>0$ 时，$f(x)=(x^2-3)e^x+2$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$f(0)=0$` },
        { k: 'B', t: `当 $x<0$ 时，$f(x)=-(x^2-3)e^{-x}-2$` },
        { k: 'C', t: `$f(x)@ge2$ 当且仅当 $x@ge@sqrt3$` },
        { k: 'D', t: `$x=-1$ 是 $f(x)$ 的极大值点` }
      ],
      answer: 'ABD',
      accept: [],
      solution: [
        `A：奇函数在原点有定义，故 $f(0)=0$，A 正确。`,
        `B：当 $x<0$ 时 $-x>0$，由奇性 $f(x)=-f(-x)=-@left[((-x)^2-3)e^{-x}+2@right]=-(x^2-3)e^{-x}-2$，B 正确。`,
        `C：取 $x=-1$，则 $f(-1)=-(1-3)e-2=2e-2>2$，说明 $f(x)@ge2$ 不只限于 $x@ge@sqrt3$，C 错误。`,
        `D：当 $x<0$ 时，$f(x)=(3-x^2)e^{-x}-2$，求导得 $f'(x)=e^{-x}(x^2-2x-3)=e^{-x}(x-3)(x+1)$。`,
        `在 $(-@infty,-1)$ 上 $f'(x)>0$，在 $(-1,0)$ 上 $f'(x)<0$，故 $x=-1$ 是极大值点，D 正确。`,
        `综上，选 ABD。`
      ],
      hints: ['奇函数在原点有定义时必有 $f(0)=0$。', '$x<0$ 时用 $f(x)=-f(-x)$ 转化到已知区间。', '判断 C 只需找一个反例。'],
      pitfalls: ['把 $f(-x)$ 的表达式直接当成 $f(x)$，漏掉负号。', '求导时 $e^{-x}$ 的链式法则漏掉负号。'],
      takeaway: '奇函数对称转化：负半轴用 $-f(-x)$；极值看导数在驻点两侧的符号变化。',
      knowledge: ['k-fn-prop', 'k-dv-extreme']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 4,
      stem: `双曲线 $C:@frac{x^2}{a^2}-@frac{y^2}{b^2}=1(a>0,b>0)$ 的左、右焦点分别为 $F_1,F_2$，左、右顶点分别为 $A_1,A_2$。以 $F_1F_2$ 为直径的圆与 $C$ 的一条渐近线交于 $M,N$ 两点，且 $@angle NA_1M=@frac{5@pi}{6}$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$@angle A_1MA_2=@frac{@pi}{6}$` },
        { k: 'B', t: `$|MA_1|=2|MA_2|$` },
        { k: 'C', t: `$C$ 的离心率为 $@sqrt{13}$` },
        { k: 'D', t: `当 $a=@sqrt2$ 时，四边形 $NA_1MA_2$ 的面积为 $8@sqrt3$` }
      ],
      answer: 'ACD',
      accept: [],
      solution: [
        `不妨取渐近线 $y=@frac{b}{a}x$，$M$ 在第一象限、$N$ 在第三象限。`,
        `以 $F_1F_2$ 为直径的圆为 $x^2+y^2=c^2$，与渐近线联立得 $x^2+@frac{b^2}{a^2}x^2=c^2$，结合 $c^2=a^2+b^2$ 得 $x^2=a^2$，故 $M(a,b)$，$N(-a,-b)$。`,
        `A：由对称性 $A_1MA_2N$ 是平行四边形，邻角互补，故 $@angle A_1MA_2=@pi-@frac{5@pi}{6}=@frac{@pi}{6}$，A 正确。`,
        `B：$A_2(a,0)$，$M(a,b)$，故 $MA_2@perp A_1A_2$，$|MA_2|=b$，$|MA_1|=@sqrt{4a^2+b^2}$。`,
        `在直角三角形 $A_1A_2M$ 中 $@angle A_1MA_2=@frac{@pi}{6}$，故 $@tan@frac{@pi}{6}=@frac{2a}{b}=@frac{1}{@sqrt3}$，得 $b=2@sqrt3a$，于是 $|MA_1|=4a$，比值 $@frac{4a}{2@sqrt3a}=@frac{2}{@sqrt3}@ne2$，B 错误。`,
        `C：$e=@frac{c}{a}=@sqrt{1+@frac{b^2}{a^2}}=@sqrt{1+12}=@sqrt{13}$，C 正确。`,
        `D：$NA_1MA_2$ 是以 $A_1A_2=2a$ 为底、高为 $b$ 的平行四边形，面积 $S=2ab$。当 $a=@sqrt2$ 时 $b=2@sqrt6$，故 $S=2@times@sqrt2@times2@sqrt6=8@sqrt3$，D 正确。`,
        `综上，选 ACD。`
      ],
      hints: ['渐近线与圆 $x^2+y^2=c^2$ 的交点可直接解出为 $(@pm a,@pm b)$。', '把 $@angle NA_1M$ 转化为平行四边形的邻角。', '直角三角形中用一个正切值把 $a,b$ 的比例定下来。'],
      pitfalls: ['把 $M$ 的坐标写成 $(@pm c,@pm b)$。', '误以为 $|MA_1|=2|MA_2|$ 成立。', '面积用对角线乘积的一半，但两对角线不垂直。'],
      takeaway: '双曲线渐近线与焦点圆交点：横坐标恰为 $@pm a$；几何量先在直角三角形中定比例，再算离心率与面积。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 2,
      stem: `已知平面向量 $@vec a=(x,1)$，$@vec b=(x-1,2x)$。若 $@vec a@perp(@vec a-@vec b)$，则 $|@vec a|=$ ________ .`,
      answer: `$@sqrt2$`,
      accept: ['sqrt2', '√2', '根号2'],
      solution: [
        `先算 $@vec a-@vec b=(x-(x-1),1-2x)=(1,1-2x)$。`,
        `由垂直得 $@vec a@cdot(@vec a-@vec b)=0$。`,
        `即 $x@times1+1@times(1-2x)=0$，化简得 $1-x=0$，故 $x=1$。`,
        `于是 $@vec a=(1,1)$，$|@vec a|=@sqrt{1^2+1^2}=@sqrt2$。`
      ],
      hints: ['先算出 $@vec a-@vec b$ 的坐标。', '垂直等价于数量积为零。'],
      pitfalls: ['把 $@vec a-@vec b$ 的纵坐标算成 $1+2x$。', '求出 $x$ 后忘记再求 $|@vec a|$。'],
      takeaway: '向量垂直的坐标表示：$x_1x_2+y_1y_2=0$，先化简再代入。',
      knowledge: ['k-vec-dot']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 2,
      stem: `若 $x=2$ 是函数 $f(x)=(x-1)(x-2)(x-a)$ 的极值点，则 $f(0)=$ ________ .`,
      answer: `$-4$`,
      accept: ['-4'],
      solution: [
        `极值点必是导数的零点，先求 $f'(x)$。`,
        `$f'(x)=(x-2)(x-a)+(x-1)(x-a)+(x-1)(x-2)$。`,
        `代入 $x=2$：前两项都含因子 $x-2$，故 $f'(2)=(2-1)(2-a)=2-a$。`,
        `由 $f'(2)=0$ 得 $a=2$。`,
        `于是 $f(x)=(x-1)(x-2)^2$，$f(0)=(-1)@times4=-4$。`
      ],
      hints: [`极值点处导数为零，先列 $f'(2)=0$。`, `求导时用乘积法则，含 $(x-2)$ 的项在 $x=2$ 处直接为零。`],
      pitfalls: ['只对其中一个因子求导，漏项。', '求出 $a$ 后没有代回 $f(0)$。'],
      takeaway: `已知极值点求参数：先用 $f'(x_0)=0$ 定参数，再回代求值。`,
      knowledge: ['k-dv-extreme']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 4,
      stem: `一个底面半径为 $4@text{ cm}$、高为 $9@text{ cm}$ 的封闭圆柱形容器（容器壁厚度忽略不计）内有两个半径相等的铁球，则铁球半径的最大值为 ________ $@text{cm}$。`,
      answer: `$@frac{5}{2}$`,
      accept: ['2.5', '5/2', '二分之五'],
      solution: [
        `设两球半径均为 $r$。半径最大时，两球外切，且都紧贴圆柱侧面并分别紧贴上下底面。`,
        `过圆柱轴作截面，两球心在该截面内的水平距离最大为 $2(4-r)$，竖直距离最大为 $9-2r$。`,
        `两球外切时球心距为 $2r$，由勾股定理：$(2r)^2=@left[2(4-r)@right]^2+(9-2r)^2$。`,
        `展开得 $4r^2=4(16-8r+r^2)+81-36r+4r^2$，整理得 $4r^2-68r+145=0$。`,
        `因式分解得 $(2r-5)(2r-29)=0$，故 $r=@frac{5}{2}$ 或 $r=@frac{29}{2}$。`,
        `又球在容器内须 $r<4$，所以 $r=@frac{5}{2}$，最大值为 $@frac{5}{2}@text{ cm}$。`
      ],
      hints: ['画过圆柱轴的截面，把两个球看成两个圆。', '最大时两球外切，球心距为 $2r$。', '水平、竖直两个方向的球心距分别用 $r$ 表示，再用勾股定理。'],
      pitfalls: ['只考虑两球上下叠放，得到 $r=@frac94$，忽略了斜放可以更大。', '解出两个根后不检验 $r<4$。'],
      takeaway: '球与圆柱的极值：截面化，两球外切 → 球心距 $2r$ → 勾股列方程 → 检验范围。',
      knowledge: ['k-so-sphere', 'k-so-solid']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `已知函数 $f(x)=@cos(2x+@varphi)(0@le@varphi<@pi)$，且 $f(0)=@frac{1}{2}$。（1）求 $@varphi$；（2）设函数 $g(x)=f(x)+f@left(x-@frac{@pi}{6}@right)$，求 $g(x)$ 的值域和单调区间。`,
      answer: `（1）$@varphi=@frac{@pi}{3}$；（2）值域为 $@left[-@sqrt3,@sqrt3@right]$，单调递减区间为 $@left[-@frac{@pi}{12}+k@pi,@frac{5@pi}{12}+k@pi@right]$，单调递增区间为 $@left[@frac{5@pi}{12}+k@pi,@frac{11@pi}{12}+k@pi@right](k@in@mathbb{Z})$`,
      accept: [],
      solution: [
        `（1）由 $f(0)=@cos@varphi=@frac{1}{2}$，且 $0@le@varphi<@pi$，得 $@varphi=@frac{@pi}{3}$。`,
        `（2）此时 $f(x)=@cos@left(2x+@frac{@pi}{3}@right)$，而 $f@left(x-@frac{@pi}{6}@right)=@cos@left(2x-@frac{@pi}{3}+@frac{@pi}{3}@right)=@cos2x$。`,
        `所以 $g(x)=@cos@left(2x+@frac{@pi}{3}@right)+@cos2x=@frac12@cos2x-@frac{@sqrt3}{2}@sin2x+@cos2x$。`,
        `合并得 $g(x)=@frac32@cos2x-@frac{@sqrt3}{2}@sin2x=@sqrt3@cos@left(2x+@frac{@pi}{6}@right)$。`,
        `因为余弦的值域为 $@left[-1,1@right]$，所以 $g(x)$ 的值域为 $@left[-@sqrt3,@sqrt3@right]$。`,
        `令 $2k@pi@le2x+@frac{@pi}{6}@le@pi+2k@pi$，解得 $-@frac{@pi}{12}+k@pi@le x@le@frac{5@pi}{12}+k@pi$，此为单调递减区间。`,
        `令 $@pi+2k@pi@le2x+@frac{@pi}{6}@le2@pi+2k@pi$，解得 $@frac{5@pi}{12}+k@pi@le x@le@frac{11@pi}{12}+k@pi$，此为单调递增区间。`
      ],
      hints: ['先用 $f(0)=@frac12$ 结合 $@varphi$ 的范围定角。', '把 $f@left(x-@frac{@pi}{6}@right)$ 先化简，会出现 $@cos2x$。', '合并 $a@cos@theta+b@sin@theta$ 用辅助角公式，再整体代入求单调区间。'],
      pitfalls: ['由 $@cos@varphi=@frac12$ 得出 $@varphi=@frac{@pi}{3}$ 或 $@frac{5@pi}{3}$，没有用 $0@le@varphi<@pi$ 取舍。', '求单调区间时整体相位 $2x+@frac{@pi}{6}$ 忘记除以 $2$。'],
      takeaway: '三角综合：先定解析式，辅助角合一，再用整体相位法求值域与单调区间。',
      knowledge: ['k-tr-identity', 'k-tr-graph']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 4,
      stem: `已知椭圆 $C:@frac{x^2}{a^2}+@frac{y^2}{b^2}=1(a>b>0)$ 的离心率为 $@frac{@sqrt2}{2}$，长轴长为 $4$。（1）求 $C$ 的方程；（2）过点 $P(0,-2)$ 的直线 $l$ 与 $C$ 交于 $A,B$ 两点，$O$ 为坐标原点，若 $S_{@triangle OAB}=@sqrt2$，求 $|AB|$。`,
      answer: `（1）$@frac{x^2}{4}+@frac{y^2}{2}=1$；（2）$@sqrt5$`,
      accept: [],
      solution: [
        `（1）长轴长为 $4$ 得 $a=2$；由 $e=@frac{@sqrt2}{2}$ 得 $c=@sqrt2$，故 $b^2=a^2-c^2=2$，椭圆为 $@frac{x^2}{4}+@frac{y^2}{2}=1$。`,
        `（2）若 $l$ 为 $x=0$，则 $A,B$ 与 $O$ 共线，$S_{@triangle OAB}=0$，不合题意，故设 $l:y=kx-2$。`,
        `代入椭圆：$@frac{x^2}{4}+@frac{(kx-2)^2}{2}=1$，整理得 $(1+2k^2)x^2-8kx+4=0$。`,
        `判别式 $@Delta=64k^2-16(1+2k^2)=32k^2-16>0$，即 $k^2>@frac12$；且 $x_1+x_2=@frac{8k}{1+2k^2}$，$x_1x_2=@frac{4}{1+2k^2}$。`,
        `$S_{@triangle OAB}=@frac12|x_1y_2-x_2y_1|=@frac12@left|x_1(kx_2-2)-x_2(kx_1-2)@right|=|x_1-x_2|$。`,
        `而 $|x_1-x_2|=@frac{@sqrt{@Delta}}{1+2k^2}=@frac{@sqrt{32k^2-16}}{1+2k^2}$，由面积为 $@sqrt2$ 得 $@frac{32k^2-16}{(1+2k^2)^2}=2$。`,
        `令 $t=k^2$，得 $32t-16=2(1+2t)^2$，即 $4t^2-12t+9=0$，故 $(2t-3)^2=0$，$t=@frac32$。`,
        `此时 $|x_1-x_2|=@sqrt2$，所以 $|AB|=@sqrt{1+k^2}|x_1-x_2|=@sqrt{@frac52}@times@sqrt2=@sqrt5$。`
      ],
      hints: ['第 (1) 问先由长轴长定 $a$，再由离心率定 $c$。', '第 (2) 问先排除竖直线，再设 $y=kx-2$ 联立。', '面积用坐标行列式 $S=@frac12|x_1y_2-x_2y_1|$，化简后会只剩 $|x_1-x_2|$。'],
      pitfalls: ['漏掉竖直线的情形，或默认斜率存在而不说明。', '把面积写成 $@frac12@times2@times|x_1+x_2|$。', '解 $t$ 的二次方程时没有检验 $@Delta>0$。'],
      takeaway: '椭圆弦长与面积：设线联立 → 韦达 → 面积化弦 → 解参数 → 回代求弦长。',
      knowledge: ['k-ag-conic', 'k-ag-chord', 'k-ag-area']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 4,
      stem: `如图，在四边形 $ABCD$ 中，$AB@parallel CD$，$@angle DAB=90^@circ$，$F$ 为 $CD$ 的中点，点 $E$ 在 $AB$ 上，$EF@parallel AD$，$AB=3AD$，$CD=2AD$。将四边形 $EFDA$ 沿 $EF$ 翻折至四边形 $EFD'A'$，使得面 $EFD'A'$ 与面 $EFCB$ 所成的二面角为 $60^@circ$。（1）证明：$A'B@parallel$ 平面 $CD'F$；（2）求面 $BCD'$ 与面 $EFD'A'$ 所成二面角的正弦值。`,
      answer: `（1）证明见解析；（2）$@frac{@sqrt{42}}{7}$`,
      accept: [],
      solution: [
        `不妨设 $AD=1$，则 $AB=3$，$CD=2$，$AE=DF=1$，$EB=2$。`,
        `（1）延长 $DC$ 至 $G$，使 $DG=AB=3$（此时 $CG=1$）。由 $AB@parallel DG$ 且 $AB=DG$，知四边形 $ABGD$ 为平行四边形。`,
        `故 $AD@parallel BG$ 且 $AD=BG$。翻折是绕 $EF$ 的旋转，而 $EF@parallel AD$，旋转轴方向与 $AD$ 平行，故 $A'D'@parallel AD$，且 $A'D'=AD=BG$。`,
        `于是 $A'D'@parallel BG$ 且 $A'D'=BG$，四边形 $A'BGD'$ 为平行四边形，所以 $A'B@parallel D'G$。`,
        `又 $G$ 在直线 $DC$ 上，而 $D,C,F$ 共线，故 $D'G@subset$ 平面 $CD'F$；且 $A'@notin$ 平面 $CD'F$，所以 $A'B@parallel$ 平面 $CD'F$。`,
        `（2）以 $E$ 为原点，$EF$ 为 $x$ 轴、$EB$ 为 $y$ 轴、过 $E$ 垂直于底面的直线为 $z$ 轴建系。`,
        `则 $E(0,0,0)$，$F(1,0,0)$，$B(0,2,0)$，$C(1,1,0)$。二面角为 $60^@circ$ 给出 $EA'$ 与 $EB$ 的夹角为 $60^@circ$，故 $A'@left(0,@frac12,@frac{@sqrt3}{2}@right)$，$D'@left(1,@frac12,@frac{@sqrt3}{2}@right)$。`,
        `平面 $EFD'A'$ 中 $@vec{EF}=(1,0,0)$，$@vec{EA'}=@left(0,@frac12,@frac{@sqrt3}{2}@right)$，取法向量 $@vec n_1=(0,-@sqrt3,1)$。`,
        `平面 $BCD'$ 中 $@vec{CB}=(-1,1,0)$，$@vec{CD'}=@left(0,-@frac12,@frac{@sqrt3}{2}@right)$，取法向量 $@vec n_2=(@sqrt3,@sqrt3,1)$。`,
        `设两平面所成二面角为 $@theta$，则 $@cos@theta=@frac{|@vec n_1@cdot@vec n_2|}{|@vec n_1||@vec n_2|}=@frac{2}{2@sqrt7}=@frac{1}{@sqrt7}$。`,
        `故 $@sin@theta=@sqrt{1-@frac{1}{7}}=@frac{@sqrt{42}}{7}$，即所求正弦值为 $@frac{@sqrt{42}}{7}$。`
      ],
      hints: ['第 (1) 问延长 $DC$ 构造平行四边形，把线面平行转化为线线平行。', `第 (2) 问建系前先用量出的长度写出各点坐标，注意 $EA'$ 与 $EB$ 的夹角就是二面角。`, '法向量取整系数，最后用 $@cos@theta$ 求 $@sin@theta$。'],
      pitfalls: [`把二面角 $60^@circ$ 误当成 $EA'$ 与底面的夹角，导致 $A'$ 坐标写错。`, '证线面平行时只说“看着平行”，缺少面面平行或线线平行的推理。', '求二面角时把法向量夹角直接当作二面角，忘记取绝对值。'],
      takeaway: '翻折问题：先定翻折前后不变的垂直与长度，再建系；二面角用两平面法向量，正弦由 $@sin^2+@cos^2=1$ 得。',
      knowledge: ['k-so-parallel', 'k-so-angle']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 5,
      stem: `已知函数 $f(x)=@ln(1+x)-x+@frac12x^2-@frac{k}{3}x^3$，其中 $0<k<1$。（1）证明：$f(x)$ 在区间 $(0,+@infty)$ 存在唯一的极值点和唯一的零点；（2）设 $x_1,x_2$ 分别为 $f(x)$ 在 $(0,+@infty)$ 的极值点和零点。（i）设函数 $g(t)=f(x_1+t)-f(x_1-t)$，证明：$g(t)$ 在区间 $(0,x_1)$ 单调递减；（ii）比较 $2x_1$ 与 $x_2$ 的大小，并证明你的结论。`,
      answer: `（1）证明见解析；（2）（i）证明见解析；（ii）$2x_1>x_2$`,
      accept: [],
      solution: [
        `（1）求导：$f'(x)=@frac{1}{1+x}-1+x-kx^2=@frac{x^2}{1+x}-kx^2=@frac{x^2@left[(1-k)-kx@right]}{1+x}$。`,
        `在 $(0,+@infty)$ 上 $x^2>0$，$1+x>0$，故 $f'(x)$ 的符号由 $(1-k)-kx$ 决定。令 $x_1=@frac{1-k}{k}>0$。`,
        `当 $0<x<x_1$ 时 $f'(x)>0$，当 $x>x_1$ 时 $f'(x)<0$，所以 $x_1$ 是 $f(x)$ 在 $(0,+@infty)$ 上唯一的极值点（极大值点）。`,
        `由 $f(0)=0$ 且 $f$ 在 $(0,x_1)$ 上递增，得 $f(x_1)>0$；又 $x@to+@infty$ 时 $-@frac{k}{3}x^3$ 起主导作用，$f(x)@to-@infty$。`,
        `由零点存在定理，存在 $x_2@in(x_1,+@infty)$ 使 $f(x_2)=0$；而在 $(x_1,+@infty)$ 上 $f$ 严格递减，故这样的 $x_2$ 唯一，且在 $(0,x_1]$ 上 $f>0$ 无零点。`,
        `（2）（i）由 $f'(x)=-@frac{kx^2(x-x_1)}{1+x}$，得 $g'(t)=f'(x_1+t)+f'(x_1-t)$。`,
        `代入得 $g'(t)=kt@left[@frac{(x_1-t)^2}{1+x_1-t}-@frac{(x_1+t)^2}{1+x_1+t}@right]$。`,
        `令 $@phi(u)=@frac{u^2}{1+u}$，则 $@phi'(u)=@frac{2u+u^2}{(1+u)^2}>0$，故 $@phi$ 在 $(0,+@infty)$ 上递增。`,
        `当 $0<t<x_1$ 时 $0<x_1-t<x_1+t$，所以 $@phi(x_1-t)<@phi(x_1+t)$，方括号内为负，又 $kt>0$，故 $g'(t)<0$，即 $g(t)$ 在 $(0,x_1)$ 上单调递减。`,
        `（ii）因为 $g$ 在 $(0,x_1)$ 上递减且 $g(0)=f(x_1)-f(x_1)=0$，所以对任意 $t@in(0,x_1)$ 有 $g(t)<0$。`,
        `由连续性，在 $(0,x_1)$ 上 $g(t)<0$ 可推出 $g(x_1)@le0$；取 $t_0@in(0,x_1)$，由递减性 $g(x_1)@le g(t_0)<0$，即 $f(2x_1)-f(0)=f(2x_1)<0$。`,
        `又 $f(x_2)=0$，且 $2x_1>x_1$，$x_2>x_1$，而 $f$ 在 $(x_1,+@infty)$ 上严格递减，故由 $f(2x_1)<f(x_2)$ 得 $2x_1>x_2$。`
      ],
      hints: ['第 (1) 问先把导数因式分解，极值点由 $1-k-kx=0$ 给出。', '证零点唯一：先证极值点处函数值为正，再说明两端趋势。', `第 (2)(i) 问把 $g'(t)$ 化成“同一函数在两点取值之差”，用单调性判号。`, '第 (2)(ii) 问由 $g(x_1)<0$ 得 $f(2x_1)<0=f(x_2)$，再用递减性比较自变量。'],
      pitfalls: ['把 $x=0$ 也当作极值点，忽略它不在区间内部。', '只用 $f(x_1)>0$ 就断言零点唯一，没有说明递减。', '第 (2)(i) 求导时 $f(x_1-t)$ 的链式法则漏掉负号。', '第 (2)(ii) 由 $f(2x_1)<f(x_2)$ 比较自变量时把大小方向弄反。'],
      takeaway: '导数综合：因式分解定单调 → 极值符号定零点 → 对称构造 $g(t)$ 比较函数值 → 用单调性反推自变量大小。',
      knowledge: ['k-dv-monotone', 'k-dv-extreme', 'k-dv-zero']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 5,
      stem: `甲、乙两人进行乒乓球练习，每个球胜者得 $1$ 分，负者得 $0$ 分。设每个球甲胜的概率为 $p$，乙胜的概率为 $q$，$p+q=1$，$@frac12<p<1$，且各球的胜负相互独立。对正整数 $k@ge2$，记 $p_k$ 为打完 $k$ 个球后甲比乙至少多得 $2$ 分的概率，$q_k$ 为打完 $k$ 个球后乙比甲至少多得 $2$ 分的概率。（1）求 $p_3,p_4$（用 $p$ 表示）；（2）若 $@frac{p_4-p_3}{q_4-q_3}=4$，求 $p$；（3）证明：对任意正整数 $m$，$p_{2m+1}-q_{2m+1}<p_{2m}-q_{2m}<p_{2m+2}-q_{2m+2}$。`,
      answer: `（1）$p_3=p^3$，$p_4=4p^3-3p^4$；（2）$p=@frac23$；（3）证明见解析`,
      accept: [],
      solution: [
        `（1）打完 $3$ 球甲比乙至少多得 $2$ 分，只能是甲 $3$ 胜，故 $p_3=p^3$。`,
        `打完 $4$ 球，甲需 $4$ 胜或 $3$ 胜 $1$ 负，故 $p_4=p^4+@binom{4}{3}p^3q=p^4+4p^3(1-p)=4p^3-3p^4$。`,
        `（2）由对称性 $q_3=q^3$，$q_4=4q^3-3q^4$。于是 $p_4-p_3=3p^3(1-p)=3p^3q$，$q_4-q_3=3q^3p$。`,
        `故 $@frac{p_4-p_3}{q_4-q_3}=@frac{p^2}{q^2}=4$，结合 $p,q>0$ 得 $p=2q$。`,
        `又 $p+q=1$，所以 $p=@frac23$。`,
        `（3）记 $a_k(j)=@binom{k}{j}p^jq^{k-j}$ 为打完 $k$ 球甲恰得 $j$ 分的概率（即恰胜 $j$ 球）。`,
        `打完 $2m$ 球时甲比乙多得 $2$ 分等价于甲恰胜 $m+1$ 球。再打一球：若此球甲胜，则甲比乙多得 $3$ 分；若负，则只多得 $1$ 分。因此 $p_{2m+1}=p_{2m}-q a_{2m}(m+1)$；同理 $q_{2m+1}=q_{2m}-p a_{2m}(m-1)$。`,
        `两式相减并用 $@binom{2m}{m+1}=@binom{2m}{m-1}$：$p_{2m+1}-p_{2m}=-Cp^{m+1}q^m$，$q_{2m+1}-q_{2m}=-Cp^mq^{m+1}$，其中 $C=@binom{2m}{m+1}$。`,
        `因为 $p>q>0$，所以 $p^{m+1}q^m>p^mq^{m+1}$，即 $p_{2m+1}-p_{2m}<q_{2m+1}-q_{2m}$，移项得 $p_{2m+1}-q_{2m+1}<p_{2m}-q_{2m}$。`,
        `再看右边。由上面同样的“再打一球”分析：$p_{2m+2}=p_{2m+1}+p a_{2m+1}(m+1)$，$q_{2m+2}=q_{2m+1}+q a_{2m+1}(m)$。`,
        `结合 $p_{2m+1},q_{2m+1}$ 的表达式，作差得 $(p_{2m+2}-p_{2m})-(q_{2m+2}-q_{2m})=p^mq^m(p-q)@left[@binom{2m+1}{m+1}-@binom{2m}{m+1}@right]$。`,
        `因为 $@binom{2m+1}{m+1}=@binom{2m}{m+1}+@binom{2m}{m}>@binom{2m}{m+1}$，且 $p>q$，所以上式大于 $0$，即 $p_{2m}-q_{2m}<p_{2m+2}-q_{2m+2}$。`,
        `综上，对任意正整数 $m$，$p_{2m+1}-q_{2m+1}<p_{2m}-q_{2m}<p_{2m+2}-q_{2m+2}$。`
      ],
      hints: ['第 (1) 问按“甲胜几球”分类，用二项分布写概率。', '第 (2) 问先由对称性写出 $q_3,q_4$，比值会化为 $(p/q)^2$。', '第 (3) 问关键是“再打一球”的递推：把 $p_{2m+1}$ 与 $p_{2m}$ 联系起来。', '比较两个差时，把组合数提出公因子，最后只需比较 $p,q$ 与组合数大小。'],
      pitfalls: ['第 (1) 问把“至少多得 $2$ 分”误当成“至少胜 $2$ 球”。', '第 (2) 问忘记 $p,q>0$，把 $p=-2q$ 也保留。', '第 (3) 问把 $p_{2m}$ 中“恰胜 $m+1$ 球”错写成“恰胜 $m$ 球”。', '作差后没有说明 $@binom{2m+1}{m+1}>@binom{2m}{m+1}$ 的理由。'],
      takeaway: '新定义概率压轴：先算小情形 → 用“再打一球”建立递推 → 二项分布写通项 → 作差比较，组合数与 $p,q$ 的大小各管一段。',
      knowledge: ['k-ps-prob', 'k-ps-dist', 'k-count']
    }
  ]
});
