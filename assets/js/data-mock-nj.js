/* 2026 届南京市二模风格仿真卷 · 题库数据
 * 仿真自编：19 题结构，8 单选 + 3 多选 + 3 填空 + 5 解答，满分 150。
 * 公式约定：LaTeX 反斜杠一律写成 @；公式用 $...$ 包裹；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: 'mock-nj',
  title: '2026 届南京市二模风格仿真卷（数学）',
  short: '南京二模仿真',
  year: 2026, region: '南京二模', kind: 'mock', duration: 150,
  note: '仿真自编：19 题结构；第19题新定义',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 2,
      stem: `已知集合 $A=@left@{x@mid |x-1|<2@right@}$，$B=@left@{x@mid 2^x@ge4@right@}$，则 $A@cap B=$`,
      options: [
        { k: 'A', t: `$@left[2,3@right)$` },
        { k: 'B', t: `$@left(2,3@right)$` },
        { k: 'C', t: `$@left[2,3@right]$` },
        { k: 'D', t: `$@left(2,3@right]$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `由 $|x-1|<2$ 得 $-2<x-1<2$，即 $A=@left(-1,3@right)$。`,
        `由 $2^x@ge4=2^2$ 得 $x@ge2$，即 $B=@left[2,+@infty@right)$。`,
        `两个区间取交集，得 $A@cap B=@left[2,3@right)$，选 A。`
      ],
      hints: ['绝对值不等式先化为 $-2<x-1<2$。', '指数不等式化为同底数 $2$，注意 $y=2^x$ 单调递增。', '交集要逐端点判断开闭：$x=2$ 在 $B$ 中，$x=3$ 不在 $A$ 中。'],
      pitfalls: ['把 $|x-1|<2$ 解成 $-2<x<2$，忘记平移。', '把 $2^x@ge4$ 解成 $x@ge1$，底数与指数混淆。'],
      takeaway: '集合运算先分别解不等式化为区间，再逐端点判断开闭。',
      knowledge: ['k-set-ops', 'k-ie-abs']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 2,
      stem: `已知复数 $z$ 满足 $z(2-i)=1+2i$，其中 $i$ 为虚数单位，则 $z^{2026}=$`,
      options: [
        { k: 'A', t: `$-1$` },
        { k: 'B', t: `$1$` },
        { k: 'C', t: `$-i$` },
        { k: 'D', t: `$i$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `由 $z(2-i)=1+2i$ 得 $z=@frac{1+2i}{2-i}$。`,
        `分子分母同乘 $2+i$：$z=@frac{(1+2i)(2+i)}{5}=@frac{2+i+4i-2}{5}=i$。`,
        `因为 $i^4=1$，且 $2026=4@times506+2$，所以 $z^{2026}=i^{2026}=i^2=-1$，选 A。`
      ],
      hints: ['复数除法先分母实数化，分子分母同乘 $2+i$。', '算得 $z=i$ 后，用 $i$ 的周期性化简高次幂。', '把指数除以 $4$ 看余数。'],
      pitfalls: ['分子展开时把 $2i@cdot i$ 的符号写成 $+2$。', '把 $2026$ 除以 $4$ 的余数算成 $0$ 或 $3$。'],
      takeaway: '复数除法分母实数化；虚数单位高次幂按“指数除以 $4$ 的余数”化简。',
      knowledge: ['k-cx-basic']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 2,
      stem: `已知向量 $@vec a=(1,2)$，$@vec b=(m,-1)$，若 $@vec a@perp(@vec a-@vec b)$，则 $|@vec b|=$`,
      options: [
        { k: 'A', t: `$5@sqrt2$` },
        { k: 'B', t: `$@sqrt{26}$` },
        { k: 'C', t: `$2@sqrt{13}$` },
        { k: 'D', t: `$4@sqrt3$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `$@vec a-@vec b=(1-m,3)$。`,
        `由 $@vec a@perp(@vec a-@vec b)$ 得 $@vec a@cdot(@vec a-@vec b)=0$，即 $(1-m)+2@times3=0$。`,
        `解得 $m=7$，所以 $@vec b=(7,-1)$，$|@vec b|=@sqrt{49+1}=5@sqrt2$，选 A。`
      ],
      hints: ['先写出 $@vec a-@vec b$ 的坐标。', '垂直等价于数量积为零，得到关于 $m$ 的方程。', '求模长用横纵坐标平方和开根号。'],
      pitfalls: ['把垂直条件写成坐标对应成比例。', '在数量积中把第二个坐标 $3$ 与 $2$ 相乘后漏加第一项。'],
      takeaway: '坐标形式的向量：垂直用数量积为零，模长用坐标平方和。',
      knowledge: ['k-vec-coord', 'k-vec-dot']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 2,
      stem: `已知 $@tan@left(@alpha+@frac{@pi}{4}@right)=3$，则 $@sin2@alpha=$`,
      options: [
        { k: 'A', t: `$@frac45$` },
        { k: 'B', t: `$-@frac45$` },
        { k: 'C', t: `$@frac35$` },
        { k: 'D', t: `$-@frac35$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `记 $t=@tan@alpha$，由两角和正切公式得 $@frac{1+t}{1-t}=3$。`,
        `解得 $1+t=3-3t$，即 $t=@frac12$。`,
        `由万能公式 $@sin2@alpha=@frac{2t}{1+t^2}=@frac{1}{1+@frac14}=@frac45$，选 A。`
      ],
      hints: ['先展开 $@tan@left(@alpha+@frac{@pi}{4}@right)$，解出 $@tan@alpha$。', '已知 $@tan@alpha$ 求 $@sin2@alpha$，可用 $@sin2@alpha=@frac{2@tan@alpha}{1+@tan^2@alpha}$。'],
      pitfalls: ['两角和正切公式分子分母顺序写反。', '把 $@sin2@alpha$ 写成 $2@sin@alpha$。'],
      takeaway: '和角正切定 $@tan@alpha$，再用万能公式求二倍角正弦。',
      knowledge: ['k-tr-identity']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 3,
      stem: `已知正项等比数列 $@left@{a_n@right@}$ 满足 $a_1a_5=4$，则 $a_2a_4+a_3^2=$`,
      options: [
        { k: 'A', t: `$4$` },
        { k: 'B', t: `$8$` },
        { k: 'C', t: `$16$` },
        { k: 'D', t: `$@frac{16}{3}$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由等比数列的性质，$a_1a_5=a_3^2$，所以 $a_3^2=4$。`,
        `又 $a_2a_4=a_3^2=4$。`,
        `所以 $a_2a_4+a_3^2=4+4=8$，选 B。`
      ],
      hints: ['下标 $1,3,5$ 成等差，对应项成等比：$a_3^2=a_1a_5$。', '同理 $a_2a_4=a_3^2$，无需设公比。'],
      pitfalls: ['设公比后把 $a_1a_5$ 写成 $a_1^2q^5$ 并算错幂次。', '认为 $a_3=@pm2$ 会影响结果，实际上所求只含 $a_3^2$。'],
      takeaway: '等比数列中“下标和相等，则对应项乘积相等”，可直接整体代换。',
      knowledge: ['k-seq-basic']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 2,
      stem: `已知圆锥的轴截面是边长为 $2$ 的正三角形，则该圆锥的侧面积为`,
      options: [
        { k: 'A', t: `$@pi$` },
        { k: 'B', t: `$2@pi$` },
        { k: 'C', t: `$3@pi$` },
        { k: 'D', t: `$4@pi$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `轴截面正三角形的边长为 $2$，其中底边是圆锥底面直径，两腰是母线。`,
        `所以底面半径 $r=1$，母线 $l=2$。`,
        `侧面积 $S=@pi rl=@pi@times1@times2=2@pi$，选 B。`
      ],
      hints: ['画轴截面：底边是底面直径，腰是母线。', '侧面积公式 $S=@pi rl$，不要与全面积混淆。'],
      pitfalls: ['把正三角形边长 $2$ 直接当作半径。', '侧面积公式漏乘 $r$ 或 $l$。'],
      takeaway: '圆锥轴截面把空间量转化为平面量：底边为直径，腰为母线。',
      knowledge: ['k-so-solid']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 2,
      stem: `过点 $P(2,3)$ 向圆 $C:(x-1)^2+(y-1)^2=1$ 作切线，则切线长为`,
      options: [
        { k: 'A', t: `$@sqrt3$` },
        { k: 'B', t: `$2$` },
        { k: 'C', t: `$@sqrt5$` },
        { k: 'D', t: `$3$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `圆心 $C(1,1)$，半径 $r=1$。`,
        `$|PC|^2=(2-1)^2+(3-1)^2=1+4=5$。`,
        `切线长 $d=@sqrt{|PC|^2-r^2}=@sqrt{5-1}=2$，选 B。`
      ],
      hints: ['切线、半径、圆心与点的连线构成直角三角形。', '用勾股定理：切线长平方等于 $|PC|^2-r^2$。'],
      pitfalls: ['不判断点与圆的位置关系，误以为点在圆上。', '把切线长算成 $|PC|-r$。'],
      takeaway: '过圆外一点的切线长：$d^2=|PC|^2-r^2$。',
      knowledge: ['k-ag-line']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 3,
      stem: `已知定义在 $@mathbb{R}$ 上的函数 $f(x)$ 满足 $f(x+1)$ 为偶函数，且 $f(x)$ 在 $@left[1,+@infty@right)$ 上单调递增，则不等式 $f(2x)<f(x+2)$ 的解集为`,
      options: [
        { k: 'A', t: `$@left(0,2@right)$` },
        { k: 'B', t: `$@left(-@infty,0@right)@cup@left(2,+@infty@right)$` },
        { k: 'C', t: `$@left(0,2@right]$` },
        { k: 'D', t: `$@left[0,2@right]$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `$f(x+1)$ 为偶函数，即 $f(1+x)=f(1-x)$，所以 $f(x)$ 的图象关于直线 $x=1$ 对称。`,
        `结合 $f(x)$ 在 $@left[1,+@infty@right)$ 上递增，可知 $f(u)<f(v)$ 等价于 $|u-1|<|v-1|$。`,
        `于是 $|2x-1|<|x+1|$，两边平方得 $4x^2-4x+1<x^2+2x+1$。`,
        `化简得 $3x^2-6x<0$，即 $0<x<2$，选 A。`
      ],
      hints: ['由 $f(x+1)$ 为偶函数推出对称轴 $x=1$。', '对称 + 一侧单调，可把函数值大小转化为到对称轴距离的大小。', '两边平方时注意 $|2x-1|$ 与 $|x+1|$ 均非负。'],
      pitfalls: ['把对称轴误认为 $x=0$ 或 $x=-1$。', '直接去掉绝对值时漏掉一种符号情形。'],
      takeaway: '轴对称函数比较函数值：离对称轴越近，函数值越小（或越大），取决于单调方向。',
      knowledge: ['k-fn-prop']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知一组数据 $x_1,x_2,@cdots,x_{10}$ 的平均数为 $3$，方差为 $4$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `数据 $2x_i-1$ 的平均数为 $5$` },
        { k: 'B', t: `数据 $2x_i-1$ 的方差为 $8$` },
        { k: 'C', t: `数据 $x_i+2$ 的方差为 $4$` },
        { k: 'D', t: `若再增加一个数据 $3$，则新数据的方差为 $@frac{40}{11}$` }
      ],
      answer: 'ACD',
      accept: [],
      solution: [
        `对线性变换 $y=ax+b$，有 $@bar{y}=a@bar{x}+b$，$s_y^2=a^2s^2$。`,
        `A：$a=2,b=-1$，新平均数 $2@times3-1=5$，正确。`,
        `B：新方差 $2^2@times4=16@ne8$，错误。`,
        `C：平移不改变方差，仍为 $4$，正确。`,
        `D：原离差平方和为 $10@times4=40$，新增数据 $3$ 等于原平均数，离差为 $0$；新方差为 $@frac{40+0}{11}=@frac{40}{11}$，正确。`,
        `综上，选 ACD。`
      ],
      hints: ['线性变换 $y=ax+b$：平均数变为 $a@bar{x}+b$，方差变为 $a^2s^2$。', '新增数据恰好等于平均数时，离差平方和不变，只改变分母。'],
      pitfalls: ['认为乘 $2$ 后方差也乘 $2$，忘记平方。', 'D 中把新方差的分母仍写成 $10$。'],
      takeaway: '数据变换：平移不改方差，乘 $k$ 方差乘 $k^2$；增加数据按离差平方和重新平均。',
      knowledge: ['k-ps-stat']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 2,
      stem: `已知 $a,b,c@in@mathbb{R}$，则下列命题正确的是`,
      options: [
        { k: 'A', t: `若 $a>b$，则 $a^2>b^2$` },
        { k: 'B', t: `若 $a>b>0$，则 $@frac1a<@frac1b$` },
        { k: 'C', t: `若 $a>b$，则 $a^3>b^3$` },
        { k: 'D', t: `若 $a>b$，则 $ac^2>bc^2$` }
      ],
      answer: 'BC',
      accept: [],
      solution: [
        `A：取 $a=1,b=-2$，则 $a>b$ 但 $a^2<b^2$，错误。`,
        `B：$a>b>0$ 时，两边同除以正数 $ab$，得 $@frac1b>@frac1a$，即 $@frac1a<@frac1b$，正确。`,
        `C：$y=x^3$ 在 $@mathbb{R}$ 上单调递增，故 $a>b$ 必有 $a^3>b^3$，正确。`,
        `D：取 $c=0$，则 $ac^2=bc^2=0$，不能得到严格大于，错误。`,
        `综上，选 BC。`
      ],
      hints: ['判断假命题优先举反例，注意负数与零。', '比较倒数要保证同号且不为零。', '立方函数在整个实数集上单调递增。'],
      pitfalls: ['误以为平方后不等号方向不变。', '忽略 $c=0$ 时两边相等，把 D 判为真。'],
      takeaway: '不等式性质：平方、倒数、乘法都要看符号；幂函数 $y=x^3$ 保序。',
      knowledge: ['k-ie-basic', 'k-logic']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 4,
      stem: `已知双曲线 $C:@frac{x^2}{9}-@frac{y^2}{16}=1$ 的左、右焦点分别为 $F_1,F_2$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$C$ 的离心率为 $@frac53$` },
        { k: 'B', t: `$C$ 的渐近线方程为 $y=@pm@frac43x$` },
        { k: 'C', t: `焦点到渐近线的距离为 $3$` },
        { k: 'D', t: `过焦点且垂直于实轴的弦长为 $@frac{32}{3}$` }
      ],
      answer: 'ABD',
      accept: [],
      solution: [
        `由方程得 $a=3$，$b=4$，$c=@sqrt{a^2+b^2}=5$。`,
        `A：$e=@frac ca=@frac53$，正确。`,
        `B：渐近线为 $y=@pm@frac ba x=@pm@frac43x$，正确。`,
        `C：取焦点 $(5,0)$，渐近线 $4x-3y=0$，距离为 $@frac{20}{@sqrt{16+9}}=4$，不是 $3$，错误。`,
        `D：令 $x=5$，得 $@frac{25}{9}-@frac{y^2}{16}=1$，解得 $y^2=@frac{256}{9}$，弦长为 $2@times@frac{16}{3}=@frac{32}{3}$，正确。`,
        `综上，选 ABD。`
      ],
      hints: ['先读出 $a,b$，用 $c^2=a^2+b^2$ 求 $c$。', '双曲线渐近线是 $y=@pm@frac ba x$。', '焦点到渐近线的距离恒等于 $b$，可用来快速判断 C。'],
      pitfalls: ['把双曲线中的 $c^2$ 写成 $a^2-b^2$。', '把渐近线斜率写成 $@frac ab$。'],
      takeaway: '双曲线基本量：$c^2=a^2+b^2$，渐近线 $y=@pm@frac ba x$，焦点到渐近线距离为 $b$。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 3,
      stem: `在 $@left(x-@frac{2}{x^2}@right)^6$ 的展开式中，常数项为 ________ .`,
      answer: `$60$`,
      accept: ['60'],
      solution: [
        `通项 $T_{k+1}=@mathrm{C}_6^k x^{6-k}@left(-@frac{2}{x^2}@right)^k=@mathrm{C}_6^k(-2)^k x^{6-3k}$。`,
        `令 $6-3k=0$，得 $k=2$。`,
        `常数项为 $@mathrm{C}_6^2@cdot(-2)^2=15@times4=60$。`
      ],
      hints: ['先写通项，合并 $x$ 的指数。', '常数项即 $x$ 的指数为零。', '注意 $(-2)^k$ 的符号与幂次一起计算。'],
      pitfalls: ['把指数合并成 $6-2k$，得到错误的 $k$。', '漏掉 $(-2)^2$，只算 $@mathrm{C}_6^2=15$。'],
      takeaway: '二项式常数项：写通项、并指数、令指数为零，再算系数（含符号与幂）。',
      knowledge: ['k-binomial']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 3,
      stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_1=1$，$a_{n+1}=2a_n+1$（$n@in@mathbb{N}^*$），则 $a_n=$ ________ .`,
      answer: `$2^n-1$`,
      accept: ['2^n-1', '2^n -1', '2的n次方减1'],
      solution: [
        `递推式两边加 $1$：$a_{n+1}+1=2(a_n+1)$。`,
        `所以 $@left@{a_n+1@right@}$ 是以 $a_1+1=2$ 为首项、公比为 $2$ 的等比数列。`,
        `故 $a_n+1=2@cdot2^{n-1}=2^n$，即 $a_n=2^n-1$。`,
        `检验 $n=1$：$2^1-1=1=a_1$，符合。`
      ],
      hints: ['形如 $a_{n+1}=pa_n+q$ 的递推，可两边加常数构造等比。', '设 $a_{n+1}+c=2(a_n+c)$，比较常数项得 $c=1$。'],
      pitfalls: ['构造时把 $a_{n+1}+1$ 写成 $2(a_n-1)$。', '求出 $a_n+1=2^n$ 后忘记减去 $1$。'],
      takeaway: '一阶线性递推 $a_{n+1}=pa_n+q$：加常数配成等比数列再求通项。',
      knowledge: ['k-seq-recursion']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 4,
      stem: `若不等式 $e^x@ge ax$ 对任意 $x>0$ 恒成立，则实数 $a$ 的最大值为 ________ .`,
      answer: `$e$`,
      accept: ['e', '自然常数e'],
      solution: [
        `因为 $x>0$，不等式等价于 $a@le@frac{e^x}{x}$ 恒成立。`,
        `令 $h(x)=@frac{e^x}{x}$，则 $h'(x)=@frac{e^x(x-1)}{x^2}$。`,
        `当 $0<x<1$ 时 $h'(x)<0$，当 $x>1$ 时 $h'(x)>0$，所以 $h(x)$ 在 $x=1$ 处取得最小值 $h(1)=e$。`,
        `故 $a@le e$，实数 $a$ 的最大值为 $e$。`
      ],
      hints: ['先分离参数，把问题化为求 $@frac{e^x}{x}$ 的最小值。', `求导后由 $h'(x)$ 的符号确定极小值点。`, '端点 $x=1$ 处取到最小值，故参数可取等号。'],
      pitfalls: ['把 $h(x)$ 的最小值误算为 $h(0)$ 或 $x@to0$ 时的极限。', '分离参数时不等号方向写反。'],
      takeaway: '恒成立求参数：分离参数 → 求另一侧函数的最值 → 验证等号能否取到。',
      knowledge: ['k-dv-ineq', 'k-dv-extreme']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `在 $@triangle ABC$ 中，内角 $A,B,C$ 所对的边分别为 $a,b,c$，且 $2b@cos A=2c-a$。（1）求 $B$；（2）若 $b=@sqrt3$，求 $@triangle ABC$ 面积的最大值。`,
      answer: `（1）$@frac{@pi}{3}$；（2）$@frac{3@sqrt3}{4}$`,
      accept: [],
      solution: [
        `（1）由余弦定理 $@cos A=@frac{b^2+c^2-a^2}{2bc}$，代入已知得 $@frac{b^2+c^2-a^2}{c}=2c-a$。`,
        `整理得 $b^2+c^2-a^2=2c^2-ac$，即 $a^2+c^2-b^2=ac$。`,
        `所以 $@cos B=@frac{a^2+c^2-b^2}{2ac}=@frac12$，又 $B@in@left(0,@pi@right)$，故 $B=@frac{@pi}{3}$。`,
        `（2）由余弦定理 $3=a^2+c^2-ac$，而 $a^2+c^2@ge2ac$，所以 $3@ge ac$，即 $ac@le3$。`,
        `面积 $S=@frac12ac@sin B=@frac{@sqrt3}{4}ac@le@frac{3@sqrt3}{4}$。`,
        `当 $a=c=@sqrt3$ 时取等号，故面积的最大值为 $@frac{3@sqrt3}{4}$。`
      ],
      hints: ['第（1）问把余弦定理代入已知，统一成边的关系，再反向用余弦定理求 $B$。', '第（2）问先由余弦定理得到 $a,c$ 的关系，再用基本不等式放缩 $ac$。', '取等条件要与 $b=@sqrt3$ 同时检验。'],
      pitfalls: ['余弦定理分母漏写 $2$，导致 $@cos B=1$。', '用基本不等式时把 $a^2+c^2@ge2ac$ 的方向写反。'],
      takeaway: '解三角形：边角互化用正余弦定理；求面积最值先定 $ac$ 的上界，再代面积公式。',
      knowledge: ['k-tr-solve', 'k-tr-maxmin', 'k-ie-basic']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 3,
      stem: `在四棱锥 $P-ABCD$ 中，底面 $ABCD$ 是边长为 $2$ 的正方形，$PA@perp$ 平面 $ABCD$，$PA=2$，$E$ 为 $PD$ 的中点。（1）证明：$PB@parallel$ 平面 $ACE$；（2）求平面 $ACE$ 与平面 $ABCD$ 所成角的余弦值。`,
      answer: `（1）证明见解析；（2）$@frac{@sqrt3}{3}$`,
      accept: [],
      solution: [
        `（1）设 $AC@cap BD=O$，则 $O$ 为 $BD$ 的中点；又 $E$ 为 $PD$ 的中点，所以在 $@triangle PBD$ 中 $OE@parallel PB$。`,
        `因为 $OE@subset$ 平面 $ACE$，$PB@not@subset$ 平面 $ACE$，所以 $PB@parallel$ 平面 $ACE$。`,
        `（2）以 $A$ 为原点，$AB,AD,AP$ 所在直线分别为 $x,y,z$ 轴建系：$A(0,0,0)$，$C(2,2,0)$，$E(0,1,1)$。`,
        `$@vec{AC}=(2,2,0)$，$@vec{AE}=(0,1,1)$，由 $2x+2y=0$，$y+z=0$ 取平面 $ACE$ 的法向量 $@vec n=(1,-1,1)$。`,
        `平面 $ABCD$ 的法向量为 $@vec k=(0,0,1)$，所以 $@cos@theta=@frac{|@vec n@cdot@vec k|}{|@vec n||@vec k|}=@frac{1}{@sqrt3}=@frac{@sqrt3}{3}$。`
      ],
      hints: ['线面平行优先找中位线：$O$ 是 $BD$ 中点，$E$ 是 $PD$ 中点。', '建系后平面 $ACE$ 只需两个向量 $@vec{AC},@vec{AE}$。', '两平面所成角用两法向量夹角的余弦绝对值。'],
      pitfalls: ['只写 $OE@parallel PB$，漏掉线在面内、线不在面内的说明。', '把两平面夹角算成法向量夹角的补角，或忘记加绝对值。'],
      takeaway: '线面平行找中位线；面面角用两法向量夹角余弦的绝对值。',
      knowledge: ['k-so-parallel', 'k-so-angle', 'k-so-solid']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 3,
      stem: `甲、乙两人进行乒乓球比赛，采用“三局两胜”制（先胜两局者获胜），每局甲获胜的概率为 $@frac23$，各局结果相互独立。（1）求甲以 $2:0$ 获胜的概率；（2）求甲获胜的概率；（3）设 $X$ 为比赛结束时进行的局数，求 $X$ 的分布列与数学期望 $E(X)$。`,
      answer: `（1）$@frac{4}{9}$；（2）$@frac{20}{27}$；（3）分布列见解析，$E(X)=@frac{22}{9}$`,
      accept: [],
      solution: [
        `（1）甲以 $2:0$ 获胜即前两局甲都胜，概率为 $@left(@frac23@right)^2=@frac49$。`,
        `（2）甲以 $2:1$ 获胜：前两局一胜一负、第三局胜，概率为 $2@times@frac23@times@frac13@times@frac23=@frac{8}{27}$。`,
        `所以甲获胜的概率为 $@frac49+@frac{8}{27}=@frac{20}{27}$。`,
        `（3）$X=2$ 表示某人连胜两局：$P(X=2)=@left(@frac23@right)^2+@left(@frac13@right)^2=@frac59$；故 $P(X=3)=1-@frac59=@frac49$。`,
        `所以 $E(X)=2@times@frac59+3@times@frac49=@frac{22}{9}$。`
      ],
      hints: ['“三局两胜”最多打三局，且第三局出现时前两局必为一胜一负。', '甲以 $2:1$ 获胜有两种顺序：胜胜负、负胜胜。', '先求 $P(X=2)$，再用对立事件求 $P(X=3)$。'],
      pitfalls: ['第（1）问把“前两局甲都胜”算成 $@frac23$。', '第（2）问漏掉“负胜胜”这一顺序，只算一种。', '第（3）问把 $X=3$ 的概率算成 $@frac23@times@frac13$，漏掉顺序。'],
      takeaway: '独立重复比赛：按获胜比分分类，注意顺序数；局数分布用“前两局结果”直接刻画。',
      knowledge: ['k-ps-prob', 'k-ps-dist', 'k-ps-expect']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 4,
      stem: `已知抛物线 $C:y^2=4x$ 的焦点为 $F$，过 $F$ 的直线 $l$ 与 $C$ 交于 $A,B$ 两点。（1）若 $|AB|=8$，求直线 $l$ 的方程；（2）证明：$@vec{OA}@cdot@vec{OB}$ 为定值；（3）求 $@triangle OAB$ 面积的最小值。`,
      answer: `（1）$x-y-1=0$ 或 $x+y-1=0$；（2）定值为 $-3$；（3）$2$`,
      accept: [],
      solution: [
        `设 $l:x=my+1$，代入 $y^2=4x$ 得 $y^2-4my-4=0$，故 $y_1+y_2=4m$，$y_1y_2=-4$。`,
        `由焦半径公式 $|AB|=x_1+x_2+2=4m^2+4$，令 $4m^2+4=8$ 得 $m^2=1$，即 $m=@pm1$。`,
        `所以 $l$ 的方程为 $x=y+1$ 或 $x=-y+1$，即 $x-y-1=0$ 或 $x+y-1=0$。`,
        `（2）$x_1x_2=@frac{y_1^2}{4}@cdot@frac{y_2^2}{4}=@frac{(y_1y_2)^2}{16}=1$，所以 $@vec{OA}@cdot@vec{OB}=x_1x_2+y_1y_2=1-4=-3$，为定值。`,
        `（3）$@triangle OAB$ 的面积 $S=@frac12|y_1-y_2|=@frac12@sqrt{(4m)^2+16}=2@sqrt{m^2+1}$。`,
        `故 $S@ge2$，当 $m=0$（即 $l:x=1$）时取等号，面积的最小值为 $2$。`
      ],
      hints: ['过焦点的直线设为 $x=my+1$ 可避免讨论斜率不存在。', '焦点弦长 $|AB|=x_1+x_2+p$，本题 $p=2$。', '第（3）问用 $@frac12|y_1-y_2|$ 表示面积，再借助韦达定理。'],
      pitfalls: ['设 $y=k(x-1)$ 时漏掉斜率不存在的直线 $x=1$。', '把焦点弦长公式写成 $x_1+x_2$，漏加 $p$。', '第（3）问求出面积表达式后不说明最小值能否取到。'],
      takeaway: '抛物线焦点弦：设 $x=my+1$、联立求 $y$ 的韦达关系；面积用 $@frac12|y_1-y_2|$ 最简。',
      knowledge: ['k-ag-conic', 'k-ag-chord', 'k-ag-area', 'k-vec-dot']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 5,
      stem: `定义：设函数 $f(x)$ 在区间 $D$ 上可导，若对任意 $x@in D$，都有 $f'(x)@ge f(x)$，则称 $f(x)$ 为 $D$ 上的“自增函数”。（1）判断 $f(x)=e^{2x}$ 与 $g(x)=x^2+1$ 是否为 $@left[0,1@right]$ 上的自增函数；（2）若 $f(x)=x^2+ax$ 是 $@left[0,1@right]$ 上的自增函数，求实数 $a$ 的取值范围；（3）证明：若 $f(x)$ 是 $@mathbb{R}$ 上的自增函数，且 $f(0)=1$，则当 $x>0$ 时 $f(x)@ge e^x$，当 $x<0$ 时 $f(x)@le e^x$。`,
      answer: `（1）$f(x)=e^{2x}$ 是，$g(x)=x^2+1$ 不是；（2）$a@ge0$；（3）证明见解析`,
      accept: [],
      solution: [
        `（1）$f'(x)=2e^{2x}@ge e^{2x}=f(x)$，故 $f(x)=e^{2x}$ 是自增函数。`,
        `$g'(x)-g(x)=2x-(x^2+1)=-(x-1)^2@le0$，等号仅在 $x=1$ 成立，故 $x@in@left[0,1@right)$ 时 $g'(x)<g(x)$，$g(x)$ 不是自增函数。`,
        `（2）条件等价于 $2x+a@ge x^2+ax$ 对 $x@in@left[0,1@right]$ 恒成立，即 $h(x)=x^2+(a-2)x-a@le0$。`,
        `$h(x)$ 的图象开口向上，最大值在端点取得：$h(0)=-a@le0$ 得 $a@ge0$，$h(1)=-1@le0$ 恒成立；反之 $a@ge0$ 时 $h(x)@le0$ 恒成立，故 $a@ge0$。`,
        `（3）令 $F(x)=e^{-x}f(x)$，则 $F'(x)=e^{-x}@left[f'(x)-f(x)@right]@ge0$，所以 $F(x)$ 在 $@mathbb{R}$ 上单调递增，且 $F(0)=1$。`,
        `当 $x>0$ 时 $F(x)@ge F(0)=1$，得 $f(x)@ge e^x$；当 $x<0$ 时 $F(x)@le F(0)=1$，得 $f(x)@le e^x$。`
      ],
      hints: [`新定义题先按定义验证：把 $f'(x)$ 与 $f(x)$ 作差看符号。`, '第（2）问把条件化为二次不等式在区间上恒成立，利用开口向上的二次函数最大值在端点。', `第（3）问关键构造 $F(x)=e^{-x}f(x)$，则 $F'(x)=e^{-x}@left[f'(x)-f(x)@right]$。`],
      pitfalls: [`第（1）问只算 $g(0.5)$ 的值就下结论，未说明 $g'(x)<g(x)$ 在整个区间上成立。`, '第（2）问只验证端点却忽略 $h(x)$ 开口方向，未说明凸函数最大值在端点。', '第（3）问构造 $F(x)$ 后把 $F$ 的单调性方向写反。'],
      takeaway: `形如 $f'@ge f$ 的条件，构造 $e^{-x}f(x)$ 化为单调性；区间上二次不等式恒成立，先看开口再看端点。`,
      knowledge: ['k-dv-ineq', 'k-dv-monotone', 'k-dv-param']
    }
  ]
});
