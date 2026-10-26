/* 2026 届八省联考风格仿真卷（一）· 题库数据
 * 仿真自编：19 题结构，8 单选 + 3 多选 + 3 填空 + 5 解答，满分 150。
 * 公式约定：LaTeX 反斜杠一律写成 @；公式用 $...$ 包裹；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: 'mock-8s',
  title: '2026 届八省联考风格仿真卷（一）',
  short: '八省联考仿真一',
  year: 2026, region: '八省联考', kind: 'mock', duration: 150,
  note: '仿真自编：19 题结构，8 单选 + 3 多选 + 3 填空 + 5 解答',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `已知集合 $A=@left@{x@mid x^2-5x+6@le0@right@}$，$B=@left@{x@mid 2^x>4@right@}$，则 $A@cap B=$`,
      options: [
        { k: 'A', t: `$@left[2,3@right]$` },
        { k: 'B', t: `$@left(2,3@right]$` },
        { k: 'C', t: `$@left(2,3@right)$` },
        { k: 'D', t: `$@left[2,+@infty@right)$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由 $x^2-5x+6@le0$ 得 $(x-2)(x-3)@le0$，所以 $A=@left[2,3@right]$。`,
        `由 $2^x>4=2^2$ 及指数函数单调递增，得 $x>2$，所以 $B=@left(2,+@infty@right)$。`,
        `取交集得 $2<x@le3$，即 $A@cap B=@left(2,3@right]$，选 B。`
      ],
      hints: ['先解一元二次不等式，把集合 $A$ 化成区间。', '用指数函数单调性解 $2^x>4$，注意是严格大于。', '最后逐端点判断开闭。'],
      pitfalls: ['把 $B$ 写成 $@left[2,+@infty@right)$，忽略 $2^2=4$ 不满足严格大于。', '取交集时把端点 $2$ 算进去。'],
      takeaway: '集合运算题：先化简各集合，再逐端点检验开闭。',
      knowledge: ['k-set-ops']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 1,
      stem: `若复数 $z$ 满足 $z(1+i)=4+2i$，其中 $i$ 为虚数单位，则 $z$ 的虚部为`,
      options: [
        { k: 'A', t: `$-2$` },
        { k: 'B', t: `$-1$` },
        { k: 'C', t: `$1$` },
        { k: 'D', t: `$2$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由 $z(1+i)=4+2i$ 得 $z=@frac{4+2i}{1+i}$。`,
        `分子分母同乘 $1-i$：分母 $(1+i)(1-i)=2$，分子 $(4+2i)(1-i)=4-4i+2i-2i^2=6-2i$。`,
        `所以 $z=3-i$，虚部为 $-1$，选 B。`
      ],
      hints: ['复数除法：分子分母同乘分母的共轭复数。', '虚部是 $i$ 的系数，要带上符号。'],
      pitfalls: ['把虚部写成 $1$，丢掉负号。', '把实部 $3$ 误当成虚部。'],
      takeaway: '复数除法先分母实数化；虚部是 $i$ 的系数而非绝对值。',
      knowledge: ['k-cx-basic']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 2,
      stem: `已知向量 $@vec a,@vec b$ 满足 $|@vec a|=2$，$|@vec b|=1$，且 $@vec a$ 与 $@vec b$ 的夹角为 $120^@circ$，则 $|@vec a-2@vec b|=$`,
      options: [
        { k: 'A', t: `$2@sqrt3$` },
        { k: 'B', t: `$2@sqrt2$` },
        { k: 'C', t: `$@sqrt6$` },
        { k: 'D', t: `$4$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `先求数量积：$@vec a@cdot@vec b=2@times1@times@cos120^@circ=-1$。`,
        `把模长平方：$|@vec a-2@vec b|^2=|@vec a|^2-4@vec a@cdot@vec b+4|@vec b|^2$。`,
        `代入得 $4-4@times(-1)+4=12$，所以 $|@vec a-2@vec b|=2@sqrt3$，选 A。`
      ],
      hints: ['模长问题先平方。', '把 $|@vec a-2@vec b|^2$ 展开成 $|@vec a|^2-4@vec a@cdot@vec b+4|@vec b|^2$。'],
      pitfalls: ['把 $@cos120^@circ$ 当成 $@frac12$。', '展开时漏掉交叉项或把 $-4@vec a@cdot@vec b$ 的符号写错。'],
      takeaway: '求向量模：先平方转化为模长与数量积，再开方。',
      knowledge: ['k-vec-dot']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 3,
      stem: `已知 $@cos@left(@alpha+@frac{@pi}{4}@right)=@frac{3}{5}$，且 $@alpha@in@left(0,@frac{@pi}{2}@right)$，则 $@sin2@alpha=$`,
      options: [
        { k: 'A', t: `$-@frac{7}{25}$` },
        { k: 'B', t: `$@frac{7}{25}$` },
        { k: 'C', t: `$@frac{24}{25}$` },
        { k: 'D', t: `$-@frac{24}{25}$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由 $@alpha@in@left(0,@frac{@pi}{2}@right)$ 且 $@cos@left(@alpha+@frac{@pi}{4}@right)=@frac{3}{5}>0$，得 $@alpha+@frac{@pi}{4}@in@left(@frac{@pi}{4},@frac{@pi}{2}@right)$，故 $@alpha@in@left(0,@frac{@pi}{4}@right)$。`,
        `由二倍角公式，$@cos@left(2@alpha+@frac{@pi}{2}@right)=2@cos^2@left(@alpha+@frac{@pi}{4}@right)-1=2@times@frac{9}{25}-1=-@frac{7}{25}$。`,
        `又 $@cos@left(2@alpha+@frac{@pi}{2}@right)=-@sin2@alpha$，所以 $@sin2@alpha=@frac{7}{25}$，选 B。`
      ],
      hints: ['把 $@alpha+@frac{@pi}{4}$ 看成一个整体，用二倍角公式。', '注意诱导公式 $@cos@left(2@alpha+@frac{@pi}{2}@right)=-@sin2@alpha$。', '先用角的范围确认 $@sin2@alpha$ 的符号。'],
      pitfalls: ['二倍角公式漏写常数 $-1$。', '把 $@cos@left(2@alpha+@frac{@pi}{2}@right)$ 直接等于 $@sin2@alpha$。', '不讨论角的范围导致符号判断错误。'],
      takeaway: '“已知和角函数值求倍角”：整体代换 + 二倍角 + 诱导公式。',
      knowledge: ['k-tr-identity']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 2,
      stem: `已知等差数列 $@left@{a_n@right@}$ 中，$a_1=1$，$a_2+a_4=10$，则 $a_7=$`,
      options: [
        { k: 'A', t: `$11$` },
        { k: 'B', t: `$12$` },
        { k: 'C', t: `$13$` },
        { k: 'D', t: `$15$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `设公差为 $d$，则 $a_2=1+d$，$a_4=1+3d$。`,
        `由 $a_2+a_4=2+4d=10$ 得 $d=2$。`,
        `所以 $a_7=a_1+6d=1+12=13$，选 C。`
      ],
      hints: ['把每一项都用 $a_1$ 与 $d$ 表示。', '$a_7$ 与 $a_1$ 相差 $6$ 个公差，不是 $7$ 个。'],
      pitfalls: ['把 $a_7$ 算成 $a_1+7d$。', '解 $2+4d=10$ 时算成 $d=3$。'],
      takeaway: '等差数列基本量法：统一用 $a_1$、$d$ 表示所有项。',
      knowledge: ['k-seq-basic']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 2,
      stem: `已知圆锥的母线长为 $2$，其侧面展开图是一个半圆，则该圆锥的体积为`,
      options: [
        { k: 'A', t: `$@frac{@sqrt3}{3}@pi$` },
        { k: 'B', t: `$@frac{@sqrt3}{6}@pi$` },
        { k: 'C', t: `$@sqrt3@pi$` },
        { k: 'D', t: `$@frac{2@sqrt3}{3}@pi$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `侧面展开的半圆半径等于母线长 $2$，其弧长为 $@pi@times2=2@pi$。`,
        `弧长等于底面周长 $2@pi r$，故 $r=1$。`,
        `圆锥的高 $h=@sqrt{l^2-r^2}=@sqrt{4-1}=@sqrt3$。`,
        `体积 $V=@frac13@pi r^2h=@frac{@sqrt3}{3}@pi$，选 A。`
      ],
      hints: ['展开图的扇形半径是母线，弧长是底面周长。', '用勾股定理求高，再套体积公式。'],
      pitfalls: ['把展开半圆的半径当成底面半径。', '体积公式漏乘 $@frac13$。'],
      takeaway: '圆锥展开图：扇形半径 $=$ 母线，弧长 $=$ 底面周长。',
      knowledge: ['k-so-solid']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 3,
      stem: `已知抛物线 $C:y^2=8x$ 的焦点为 $F$，过 $F$ 且斜率为 $1$ 的直线与 $C$ 交于 $A,B$ 两点，则 $|AB|=$`,
      options: [
        { k: 'A', t: `$8$` },
        { k: 'B', t: `$12$` },
        { k: 'C', t: `$16$` },
        { k: 'D', t: `$20$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `由 $2p=8$ 得 $p=4$，焦点 $F(2,0)$，直线 $l:y=x-2$。`,
        `代入 $y^2=8x$ 得 $(x-2)^2=8x$，整理为 $x^2-12x+4=0$。`,
        `由韦达定理 $x_1+x_2=12$。`,
        `焦点弦长 $|AB|=x_1+x_2+p=12+4=16$，选 C。`
      ],
      hints: ['先由 $2p=8$ 定出 $p$ 与焦点坐标。', '焦点弦长用 $x_1+x_2+p$。'],
      pitfalls: ['把 $p$ 当成 $8$。', '弦长公式忘记加 $p$。'],
      takeaway: '抛物线焦点弦：联立后 $|AB|=x_1+x_2+p$。',
      knowledge: ['k-ag-conic', 'k-ag-chord']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 3,
      stem: `若函数 $f(x)=x^3-3x+a$ 恰有三个零点，则实数 $a$ 的取值范围是`,
      options: [
        { k: 'A', t: `$@left(-2,2@right)$` },
        { k: 'B', t: `$@left[-2,2@right]$` },
        { k: 'C', t: `$@left(0,2@right)$` },
        { k: 'D', t: `$@left(-@infty,-2@right)@cup@left(2,+@infty@right)$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `$f'(x)=3x^2-3=3(x-1)(x+1)$，极值点为 $x=-1$ 与 $x=1$。`,
        `$x=-1$ 处取极大值 $f(-1)=a+2$，$x=1$ 处取极小值 $f(1)=a-2$。`,
        `三次函数恰有三个零点，等价于极大值大于 $0$ 且极小值小于 $0$。`,
        `即 $a+2>0$ 且 $a-2<0$，解得 $-2<a<2$，选 A。`
      ],
      hints: ['先求导找极值点。', '三次函数有三个零点的充要条件是两个极值异号。'],
      pitfalls: ['把不等号写成 $@ge$ 或 $@le$，端点处出现重根，只有两个零点。', '把极大值与极小值的位置弄反。'],
      takeaway: '三次函数零点个数：由两个极值的符号决定。',
      knowledge: ['k-dv-zero']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知一组数据 $x_1,x_2,@dots,x_{10}$ 的平均数为 $3$，方差为 $2$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `数据 $x_1+2,x_2+2,@dots,x_{10}+2$ 的平均数为 $5$，方差为 $2$` },
        { k: 'B', t: `数据 $2x_1,2x_2,@dots,2x_{10}$ 的平均数为 $6$，方差为 $4$` },
        { k: 'C', t: `数据 $-x_1,-x_2,@dots,-x_{10}$ 的平均数为 $-3$，方差为 $2$` },
        { k: 'D', t: `数据 $x_1-3,x_2-3,@dots,x_{10}-3$ 的平均数为 $0$，方差为 $2$` }
      ],
      answer: 'ACD',
      accept: [],
      solution: [
        `设原数据为 $x_i$，平均数为 $@bar x=3$，方差为 $s^2=2$。`,
        `A：每个数据加 $2$，平均数变为 $3+2=5$，方差不变，仍为 $2$，正确。`,
        `B：每个数据乘 $2$，平均数变为 $6$，方差变为 $2^2@times2=8$，故 B 错误。`,
        `C：每个数据乘 $-1$，平均数变为 $-3$，方差变为 $(-1)^2@times2=2$，正确。`,
        `D：每个数据减 $3$，平均数变为 $0$，方差不变，正确。`,
        `综上，选 ACD。`
      ],
      hints: ['对数据作变换 $y=ax+b$：平均数变为 $a@bar x+b$，方差变为 $a^2s^2$。', '平移只改变平均数，不改变方差。'],
      pitfalls: ['认为数据乘 $2$ 后方差也乘 $2$（应乘 $4$）。', '认为取相反数后方差变号。'],
      takeaway: '数据线性变换：平移不改方差，伸缩 $k$ 倍方差变 $k^2$ 倍。',
      knowledge: ['k-ps-stat']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知函数 $f(x)=@sin@left(2x-@frac{@pi}{6}@right)$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$f(x)$ 的最小正周期为 $@pi$` },
        { k: 'B', t: `$f(x)$ 的图象关于直线 $x=@frac{@pi}{3}$ 对称` },
        { k: 'C', t: `$f(x)$ 在 $@left(0,@frac{@pi}{3}@right)$ 上单调递增` },
        { k: 'D', t: `将 $f(x)$ 的图象向右平移 $@frac{@pi}{12}$ 个单位长度，得到 $y=@sin2x$ 的图象` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `A：$@omega=2$，最小正周期 $T=@frac{2@pi}{@omega}=@pi$，正确。`,
        `B：当 $x=@frac{@pi}{3}$ 时，相位 $2@times@frac{@pi}{3}-@frac{@pi}{6}=@frac{@pi}{2}$，$f(x)=1$ 为最大值，故图象关于该直线对称，正确。`,
        `C：当 $x@in@left(0,@frac{@pi}{3}@right)$ 时，相位 $@in@left(-@frac{@pi}{6},@frac{@pi}{2}@right)$，正弦函数在此区间单调递增，正确。`,
        `D：向右平移 $@frac{@pi}{12}$ 得 $@sin@left[2@left(x-@frac{@pi}{12}@right)-@frac{@pi}{6}@right]=@sin@left(2x-@frac{@pi}{3}@right)$，不是 $@sin2x$，错误。`,
        `综上，选 ABC。`
      ],
      hints: ['把相位 $2x-@frac{@pi}{6}$ 看成一个整体。', '对称轴由相位等于 $@frac{@pi}{2}+k@pi$ 决定。', '平移口诀“左加右减”，只对 $x$ 作替换。'],
      pitfalls: ['判断单调性时只看端点函数值。', '平移时忘记把平移量乘以 $@omega$。'],
      takeaway: '三角函数性质：整体代换相位，再解方程或不等式。',
      knowledge: ['k-tr-graph']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 4,
      stem: `已知椭圆 $C:@frac{x^2}{4}+@frac{y^2}{3}=1$ 的左、右焦点分别为 $F_1,F_2$，$P$ 为 $C$ 上任意一点，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$C$ 的离心率为 $@frac12$` },
        { k: 'B', t: `$|PF_1|+|PF_2|=4$` },
        { k: 'C', t: `存在点 $P$，使得 $@angle F_1PF_2=90^@circ$` },
        { k: 'D', t: `$@triangle PF_1F_2$ 面积的最大值为 $@sqrt3$` }
      ],
      answer: 'ABD',
      accept: [],
      solution: [
        `A：$a=2$，$b=@sqrt3$，$c=@sqrt{a^2-b^2}=1$，故 $e=@frac ca=@frac12$，正确。`,
        `B：由椭圆定义，$|PF_1|+|PF_2|=2a=4$，正确。`,
        `C：若 $@angle F_1PF_2=90^@circ$，则 $P$ 在以 $F_1F_2$ 为直径的圆 $x^2+y^2=1$ 上。与椭圆联立消去 $y^2$：$3x^2+4(1-x^2)=12$，即 $x^2=-8$，无解，故 C 错误。`,
        `D：$S=@frac12@times|F_1F_2|@times|y_P|=|y_P|@le b=@sqrt3$，当 $P$ 为短轴端点时取到，正确。`,
        `综上，选 ABD。`
      ],
      hints: ['先由方程读出 $a,b,c$。', '焦点三角形周长用定义，面积用“底 $@times$ 高”。', '直角条件转化为“以 $F_1F_2$ 为直径的圆与椭圆有公共点”。'],
      pitfalls: ['C 中凭直觉认为一定存在直角，未作联立检验。', 'D 中把最大面积算成 $ab$。'],
      takeaway: '焦点三角形：定义管两边之和，短轴端点管面积最大值，直角判定看圆与椭圆的交点。',
      knowledge: ['k-ag-conic', 'k-ag-area']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 3,
      stem: `在 $@left(x-@frac{2}{x}@right)^6$ 的展开式中，常数项为 ________ .`,
      answer: `$-160$`,
      accept: ['-160'],
      solution: [
        `写出通项：$T_{k+1}=@mathrm{C}_6^k x^{6-k}@left(-@frac{2}{x}@right)^k=@mathrm{C}_6^k(-2)^k x^{6-2k}$。`,
        `令 $6-2k=0$，得 $k=3$。`,
        `常数项为 $@mathrm{C}_6^3(-2)^3=20@times(-8)=-160$。`
      ],
      hints: ['先写通项，把 $x$ 的指数合并。', '常数项即 $x$ 的指数为 $0$。', '注意 $(-2)^3$ 的符号。'],
      pitfalls: ['把 $(-2)^3$ 算成 $8$。', '$@mathrm{C}_6^3$ 误算为 $15$。'],
      takeaway: '二项式常数项：通项指数为零定 $k$，再代入系数。',
      knowledge: ['k-binomial']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 3,
      stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_1=1$，$a_{n+1}=2a_n+3$（$n@in@mathbb{N}^*$），则 $a_n=$ ________ .`,
      answer: `$2^{n+1}-3$`,
      accept: ['2^(n+1)-3', '2^{n+1}-3', '2的n+1次方减3'],
      solution: [
        `递推式两边同时加 $3$：$a_{n+1}+3=2(a_n+3)$。`,
        `所以 $@left@{a_n+3@right@}$ 是首项 $a_1+3=4$、公比 $2$ 的等比数列。`,
        `故 $a_n+3=4@times2^{n-1}=2^{n+1}$。`,
        `所以 $a_n=2^{n+1}-3$。`
      ],
      hints: ['形如 $a_{n+1}=pa_n+q$ 的递推，两边加常数 $@frac{q}{p-1}$ 构造等比数列。', '构造后的首项是 $a_1+3$，不是 $a_1$。'],
      pitfalls: ['构造时加错常数（应加 $3$）。', '把 $4@times2^{n-1}$ 化简成 $2^n$。'],
      takeaway: '一阶线性递推：$a_{n+1}=pa_n+q$，加 $@frac{q}{p-1}$ 化为等比。',
      knowledge: ['k-seq-recursion']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 4,
      stem: `若不等式 $e^x@ge ax$ 对任意实数 $x$ 都成立，则实数 $a$ 的最大值为 ________ .`,
      answer: `$e$`,
      accept: ['e'],
      solution: [
        `当 $a@le0$ 时，$e^x>0@ge ax$ 恒成立。`,
        `当 $a>0$ 时，$x@le0$ 时显然成立；只需 $x>0$ 时 $a@le@frac{e^x}{x}$ 恒成立。`,
        `令 $g(x)=@frac{e^x}{x}$（$x>0$），$g'(x)=@frac{e^x(x-1)}{x^2}$，故 $g$ 在 $(0,1)$ 上递减、在 $(1,+@infty)$ 上递增。`,
        `所以 $g(x)@ge g(1)=e$，从而 $a@le e$。`,
        `综上，$a$ 的最大值为 $e$，此时 $e^x@ge ex$ 恒成立（$x=1$ 取等）。`
      ],
      hints: ['分离参数：$a@le@frac{e^x}{x}$（$x>0$）。', '求 $g(x)=@frac{e^x}{x}$ 的最小值。', '也可直接用切线不等式 $e^x@ge ex$。'],
      pitfalls: ['漏掉 $a@le0$ 的讨论。', '求出最小值后把答案写成 $a<e$。'],
      takeaway: '恒成立求参数：分离参数后求另一侧函数的最值；$e^x@ge ex$ 是常用切线不等式。',
      knowledge: ['k-dv-ineq']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `在 $@triangle ABC$ 中，内角 $A,B,C$ 所对的边分别为 $a,b,c$，已知 $(2b-c)@cos A=a@cos C$。（1）求 $A$；（2）若 $a=@sqrt3$，求 $@triangle ABC$ 面积的最大值。`,
      answer: `(1) $@frac{@pi}{3}$；(2) $@frac{3@sqrt3}{4}$`,
      accept: [],
      solution: [
        `（1）由正弦定理，条件化为 $(2@sin B-@sin C)@cos A=@sin A@cos C$。`,
        `移项得 $2@sin B@cos A=@sin C@cos A+@sin A@cos C=@sin(A+C)$。`,
        `因为 $A+B+C=@pi$，所以 $@sin(A+C)=@sin B>0$，故 $2@cos A=1$，$@cos A=@frac12$，结合 $A@in@left(0,@pi@right)$ 得 $A=@frac{@pi}{3}$。`,
        `（2）由余弦定理 $a^2=b^2+c^2-2bc@cos A$，得 $3=b^2+c^2-bc$。`,
        `由 $b^2+c^2@ge2bc$ 得 $3@ge bc$，所以 $S=@frac12bc@sin A=@frac{@sqrt3}{4}bc@le@frac{3@sqrt3}{4}$。`,
        `当 $b=c=@sqrt3$ 时取等号，故面积的最大值为 $@frac{3@sqrt3}{4}$。`
      ],
      hints: ['第（1）问边化角，把 $A+C$ 化成 $@pi-B$。', '第（2）问用余弦定理固定 $b,c$ 的关系，再用基本不等式。', '注意等号成立时 $b=c$，要检验此时三角形存在。'],
      pitfalls: ['约去 $@sin B$ 时不说明 $@sin B>0$。', '用基本不等式时把 $b^2+c^2-bc@ge bc$ 的方向写反。'],
      takeaway: '解三角形最值：余弦定理定关系，基本不等式求积的最大值，最后检验取等条件。',
      knowledge: ['k-tr-solve', 'k-ie-basic', 'k-tr-maxmin']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 3,
      stem: `在四棱锥 $P-ABCD$ 中，底面 $ABCD$ 是边长为 $2$ 的正方形，$PA@perp$ 底面 $ABCD$，$PA=2$。（1）证明：$BD@perp$ 平面 $PAC$；（2）求直线 $PB$ 与平面 $PCD$ 所成角的正弦值。`,
      answer: `(1) 证明见解析；(2) $@frac12$`,
      accept: [],
      solution: [
        `（1）因为 $ABCD$ 是正方形，所以 $BD@perp AC$。`,
        `因为 $PA@perp$ 平面 $ABCD$，$BD@subset$ 平面 $ABCD$，所以 $PA@perp BD$。`,
        `又 $AC@cap PA=A$，且 $AC,PA@subset$ 平面 $PAC$，所以 $BD@perp$ 平面 $PAC$。`,
        `（2）以 $A$ 为原点，$AB,AD,AP$ 所在直线分别为 $x,y,z$ 轴建系：$A(0,0,0)$，$B(2,0,0)$，$C(2,2,0)$，$D(0,2,0)$，$P(0,0,2)$。`,
        `设平面 $PCD$ 的法向量 $@vec n=(x,y,z)$，由 $@vec{DC}=(2,0,0)$，$@vec{DP}=(0,-2,2)$，得 $2x=0$，$-2y+2z=0$，取 $@vec n=(0,1,1)$。`,
        `$@vec{PB}=(2,0,-2)$，所以 $@sin@theta=@frac{|@vec{PB}@cdot@vec n|}{|@vec{PB}||@vec n|}=@frac{2}{2@sqrt2@times@sqrt2}=@frac12$，即所求正弦值为 $@frac12$。`
      ],
      hints: ['线面垂直的判定需要平面内两条相交直线。', '建系后用法向量求线面角：$@sin@theta=@frac{|@vec{PB}@cdot@vec n|}{|@vec{PB}||@vec n|}$。', '法向量取整系数即可，不必单位化。'],
      pitfalls: ['（1）只证 $BD@perp AC$ 就下结论，漏掉 $BD@perp PA$。', '（2）把线面角算成 $@cos@theta$，或忘记加绝对值。'],
      takeaway: '线面垂直“双垂直”，线面角用“向量与法向量夹角的余弦的绝对值”。',
      knowledge: ['k-so-solid', 'k-so-angle']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 3,
      stem: `甲、乙两人进行比赛，每局甲获胜的概率为 $@frac23$，乙获胜的概率为 $@frac13$，各局结果相互独立。比赛采用三局两胜制，先胜两局者获胜，比赛结束。（1）求甲获胜的概率；（2）求比赛局数 $X$ 的分布列与数学期望 $E(X)$；（3）在甲获胜的条件下，求比赛恰好进行 $3$ 局的概率。`,
      answer: `(1) $@frac{20}{27}$；(2) $P(X=2)=@frac59$，$P(X=3)=@frac49$，$E(X)=@frac{22}{9}$；(3) $@frac25$`,
      accept: [],
      solution: [
        `（1）甲以 $2:0$ 获胜的概率为 $@left(@frac23@right)^2=@frac49$；甲以 $2:1$ 获胜的概率为 $@mathrm{C}_2^1@cdot@frac23@cdot@frac13@cdot@frac23=@frac{8}{27}$。`,
        `所以 $P(@text{甲获胜})=@frac49+@frac{8}{27}=@frac{20}{27}$。`,
        `（2）$X=2$ 表示一方连胜两局：$P(X=2)=@left(@frac23@right)^2+@left(@frac13@right)^2=@frac59$；$X=3$ 表示前两局各胜一局：$P(X=3)=1-@frac59=@frac49$。`,
        `故 $E(X)=2@times@frac59+3@times@frac49=@frac{22}{9}$。`,
        `（3）“甲获胜且比赛进行 $3$ 局”即甲以 $2:1$ 获胜，概率为 $@frac{8}{27}$。`,
        `所求条件概率为 $@frac{8/27}{20/27}=@frac25$。`
      ],
      hints: ['三局两胜按“谁先胜两局”分类，注意 $2:1$ 的最后一局一定是胜者赢。', '$X=3$ 等价于前两局各胜一局。', '条件概率的分母是“甲获胜”的概率。'],
      pitfalls: ['把甲 $2:1$ 获胜算成 $@left(@frac23@right)^2@cdot@frac13$，漏乘 $@mathrm{C}_2^1$。', '条件概率误用 $P(甲获胜)$ 作分子。'],
      takeaway: '三局两胜：分别算 $2:0$ 与 $2:1$；条件概率 $P(B@mid A)=@frac{P(AB)}{P(A)}$。',
      knowledge: ['k-ps-prob', 'k-ps-dist', 'k-ps-expect']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 5,
      stem: `已知椭圆 $E:@frac{x^2}{a^2}+@frac{y^2}{b^2}=1$（$a>b>0$）的离心率为 $@frac{@sqrt3}{2}$，且经过点 $@left(1,@frac{@sqrt3}{2}@right)$。（1）求 $E$ 的方程；（2）设 $F$ 为 $E$ 的右焦点，过 $F$ 的直线 $l$ 与 $E$ 交于 $A,B$ 两点，求 $@triangle OAB$ 面积的最大值。`,
      answer: `(1) $@frac{x^2}{4}+y^2=1$；(2) $1$`,
      accept: [],
      solution: [
        `（1）由 $e=@frac ca=@frac{@sqrt3}{2}$ 得 $c^2=@frac34a^2$，故 $b^2=a^2-c^2=@frac14a^2$。`,
        `代入点 $@left(1,@frac{@sqrt3}{2}@right)$：$@frac{1}{a^2}+@frac{3/4}{a^2/4}=@frac{4}{a^2}=1$，得 $a^2=4$，$b^2=1$，所以 $E:@frac{x^2}{4}+y^2=1$。`,
        `（2）右焦点 $F(@sqrt3,0)$，设 $l:x=my+@sqrt3$，代入 $E$ 得 $(m^2+4)y^2+2@sqrt3my-1=0$。`,
        `由韦达定理 $y_1+y_2=-@frac{2@sqrt3m}{m^2+4}$，$y_1y_2=-@frac{1}{m^2+4}$，故 $|y_1-y_2|=@frac{4@sqrt{m^2+1}}{m^2+4}$。`,
        `所以 $S=@frac12|OF||y_1-y_2|=@frac{2@sqrt3@sqrt{m^2+1}}{m^2+4}$。令 $t=@sqrt{m^2+1}@ge1$，则 $S=@frac{2@sqrt3t}{t^2+3}$。`,
        `由 $t^2+3@ge2@sqrt3t$ 得 $S@le1$，当 $t=@sqrt3$（即 $m^2=2$）时取等号，故面积的最大值为 $1$。`
      ],
      hints: ['第（1）问用离心率统一 $a,b$，再代点。', '第（2）问设 $x=my+@sqrt3$ 可避免讨论斜率不存在。', '把面积写成 $@frac12|OF||y_1-y_2|$，再用韦达定理。', '换元后注意 $t$ 的取值范围，最后用基本不等式求最值。'],
      pitfalls: ['设 $y=k(x-@sqrt3)$ 时漏掉竖直线。', '求 $|y_1-y_2|$ 时忘记开方或算错常数。', '换元后不写范围，取等条件无法验证。'],
      takeaway: '椭圆面积最值：设线联立 $@to$ 韦达 $@to$ 面积表达式 $@to$ 换元 $@to$ 基本不等式。',
      knowledge: ['k-ag-conic', 'k-ag-chord', 'k-ag-area']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 4,
      stem: `对正整数 $n$，若集合 $A@subseteq@left@{1,2,@dots,n@right@}$ 中任意两个不同元素之差的绝对值都不等于 $1$，则称 $A$ 为 $@left@{1,2,@dots,n@right@}$ 的一个“疏集”。（1）写出 $@left@{1,2,3,4@right@}$ 的所有含 $2$ 个元素的疏集；（2）证明：若 $A$ 是 $@left@{1,2,@dots,n@right@}$ 的疏集，则 $|A|@le@left@lceil@frac n2@right@rceil$；（3）求 $@left@{1,2,@dots,6@right@}$ 的所有非空疏集的个数。`,
      answer: `(1) $@left@{1,3@right@}$，$@left@{1,4@right@}$，$@left@{2,4@right@}$；(2) 证明见解析；(3) $20$`,
      accept: [],
      solution: [
        `（1）两元素不相邻的只有 $@left@{1,3@right@}$、$@left@{1,4@right@}$、$@left@{2,4@right@}$，共 $3$ 个。`,
        `（2）把 $1,2,@dots,n$ 依次分成 $@left@{1,2@right@},@left@{3,4@right@},@dots$，若 $n$ 为奇数，最后剩下单元素组 $@left@{n@right@}$，共 $@left@lceil@frac n2@right@rceil$ 组。`,
        `每组内两数相差 $1$，故 $A$ 在每组中至多取 $1$ 个元素，所以 $|A|@le@left@lceil@frac n2@right@rceil$。`,
        `（3）设 $f(n)$ 为 $@left@{1,2,@dots,n@right@}$ 的疏集个数（含空集）。若 $n@in A$，则 $n-1@notin A$，其余元素有 $f(n-2)$ 种选法；若 $n@notin A$，则有 $f(n-1)$ 种选法。`,
        `故 $f(n)=f(n-1)+f(n-2)$，且 $f(1)=2$，$f(2)=3$，依次得 $f(3)=5$，$f(4)=8$，$f(5)=13$，$f(6)=21$。`,
        `去掉空集，非空疏集的个数为 $21-1=20$。`
      ],
      hints: ['第（2）问按相邻数对分组，每组至多取一个。', '第（3）问按“最大元素是否入选”分类，建立递推关系。', '注意空集也是疏集，最后要减去。'],
      pitfalls: ['第（2）问忽略 $n$ 为奇数时剩下的单元素组。', '第（3）问忘记减去空集，或把初值 $f(1)$ 写成 $1$。'],
      takeaway: '“相邻不能同选”类计数：先分组证上界，再按最大元素分类得递推。',
      knowledge: ['k-count']
    }
  ]
});
