/* 2026 届长沙市一模风格仿真卷 · 题库数据
 * 仿真自编：19 题结构，8 单选 + 3 多选 + 3 填空 + 5 解答，满分 150。
 * 公式约定：LaTeX 反斜杠一律写成 @；公式用 $...$ 包裹；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: 'mock-cs',
  title: '2026 届长沙市一模风格仿真卷（数学）',
  short: '长沙一模仿真',
  year: 2026, region: '长沙一模', kind: 'mock', duration: 150,
  note: '仿真自编：19 题结构；第19题新定义',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `已知集合 $A=@left@{x@mid x^2-5x+4@le0@right@}$，$B=@left@{x@mid @log_2(x-1)<1@right@}$，则 $A@cap B=$`,
      options: [
        { k: 'A', t: `$@left(1,3@right)$` },
        { k: 'B', t: `$@left[1,3@right)$` },
        { k: 'C', t: `$@left(1,4@right)$` },
        { k: 'D', t: `$@left[1,4@right]$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `由 $x^2-5x+4@le0$ 得 $(x-1)(x-4)@le0$，所以 $A=@left[1,4@right]$。`,
        `对数有意义需 $x-1>0$；由 $@log_2(x-1)<1=@log_2 2$ 得 $0<x-1<2$，即 $1<x<3$，所以 $B=@left(1,3@right)$。`,
        `取交集得 $A@cap B=@left(1,3@right)$，选 A。`
      ],
      hints: ['先解一元二次不等式，注意二次项系数为正。', '解对数不等式前先写定义域 $x-1>0$。', '交集取公共部分，重点检查端点 $1,3$ 是否取到。'],
      pitfalls: ['把 $A$ 写成开区间 $(1,4)$。', '解对数不等式时忽略定义域。', '把端点 $1$ 或 $3$ 算进交集。'],
      takeaway: '集合运算先分别化简，再借助数轴取交并，端点开闭逐一核对。',
      knowledge: ['k-set-ops']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 1,
      stem: `已知复数 $z=@frac{1+2i}{1-i}$（$i$ 为虚数单位），则 $z$ 在复平面内对应的点位于`,
      options: [
        { k: 'A', t: `第一象限` },
        { k: 'B', t: `第二象限` },
        { k: 'C', t: `第三象限` },
        { k: 'D', t: `第四象限` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `分子分母同乘分母的共轭复数 $1+i$：$z=@frac{(1+2i)(1+i)}{(1-i)(1+i)}$。`,
        `计算得 $z=@frac{1+i+2i+2i^2}{2}=@frac{-1+3i}{2}=-@frac12+@frac32 i$。`,
        `实部 $-@frac12<0$，虚部 $@frac32>0$，所以对应点在第二象限，选 B。`
      ],
      hints: ['分式复数先分母实数化，乘分母的共轭复数。', '注意 $i^2=-1$。', '由实部、虚部的符号判断象限。'],
      pitfalls: ['误乘 $1-i$ 使分母仍含虚数。', '把 $i^2$ 当作 $1$。', '只看实部符号就判断象限。'],
      takeaway: '复数除法：分母实数化；象限由实部、虚部符号共同决定。',
      knowledge: ['k-cx-basic', 'k-cx-geo']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 2,
      stem: `已知平面向量 $@vec a,@vec b$ 满足 $|@vec a|=2$，$|@vec b|=1$，且 $@vec a@cdot(@vec a-@vec b)=3$，则 $|@vec a+2@vec b|=$`,
      options: [
        { k: 'A', t: `$2@sqrt2$` },
        { k: 'B', t: `$@sqrt6$` },
        { k: 'C', t: `$2@sqrt3$` },
        { k: 'D', t: `$3$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `展开条件：$@vec a@cdot(@vec a-@vec b)=|@vec a|^2-@vec a@cdot@vec b=4-@vec a@cdot@vec b=3$，所以 $@vec a@cdot@vec b=1$。`,
        `求模先平方：$|@vec a+2@vec b|^2=|@vec a|^2+4@vec a@cdot@vec b+4|@vec b|^2$。`,
        `代入得 $|@vec a+2@vec b|^2=4+4+4=12$，故 $|@vec a+2@vec b|=2@sqrt3$，选 C。`
      ],
      hints: ['把已知等式展开，先求出 $@vec a@cdot@vec b$。', '求模长先平方，展开时中间项系数是 $4$。', '最后不要忘记开方。'],
      pitfalls: ['把展开式写成 $|@vec a|^2-2@vec a@cdot@vec b+|@vec b|^2$。', '把 $4@vec a@cdot@vec b$ 写成 $2@vec a@cdot@vec b$。', '求出平方后忘记开方。'],
      takeaway: '向量模长问题：平方展开转化为数量积，再开方。',
      knowledge: ['k-vec-dot', 'k-vec-linear']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 2,
      stem: `设 $a,b@in@mathbb{R}$，则 “$a>b$” 是 “$a|a|>b|b|$” 的`,
      options: [
        { k: 'A', t: `充要条件` },
        { k: 'B', t: `充分不必要条件` },
        { k: 'C', t: `必要不充分条件` },
        { k: 'D', t: `既不充分也不必要条件` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `令 $f(x)=x|x|$，则 $x@ge0$ 时 $f(x)=x^2$，$x<0$ 时 $f(x)=-x^2$。`,
        `$f(x)$ 在 $(-@infty,0)$ 上单调递增，在 $@left[0,+@infty@right)$ 上也单调递增，且在 $x=0$ 处连续，故 $f(x)$ 在 $@mathbb{R}$ 上单调递增。`,
        `因此 $a>b@iff f(a)>f(b)$，即 $a>b@iff a|a|>b|b|$，所以是充要条件，选 A。`
      ],
      hints: ['把 $a|a|$ 看成函数 $f(x)=x|x|$ 的函数值。', '分段去掉绝对值，判断两段上的单调性。', '两段单调性一致且函数连续，可合并为在 $@mathbb{R}$ 上递增。'],
      pitfalls: ['误以为绝对值会改变大小顺序。', '只验证了充分性，没有验证必要性。', '把 $x<0$ 时的 $x|x|$ 写成 $x^2$。'],
      takeaway: '比较形如 $x|x|$ 的式子，先构造分段函数并判断单调性。',
      knowledge: ['k-logic', 'k-fn-prop']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 2,
      stem: `已知 $@tan@alpha=2$，则 $@sin@left(2@alpha+@frac{@pi}{4}@right)=$`,
      options: [
        { k: 'A', t: `$@frac{7@sqrt2}{10}$` },
        { k: 'B', t: `$-@frac{7@sqrt2}{10}$` },
        { k: 'C', t: `$-@frac{@sqrt2}{10}$` },
        { k: 'D', t: `$@frac{@sqrt2}{10}$` }
      ],
      answer: 'D',
      accept: [],
      solution: [
        `由万能公式，$@sin2@alpha=@frac{2@tan@alpha}{1+@tan^2@alpha}=@frac{4}{5}$，$@cos2@alpha=@frac{1-@tan^2@alpha}{1+@tan^2@alpha}=-@frac{3}{5}$。`,
        `展开和角：$@sin@left(2@alpha+@frac{@pi}{4}@right)=@sin2@alpha@cos@frac{@pi}{4}+@cos2@alpha@sin@frac{@pi}{4}$。`,
        `所以原式 $=@frac{@sqrt2}{2}@left(@frac45-@frac35@right)=@frac{@sqrt2}{2}@cdot@frac15=@frac{@sqrt2}{10}$，选 D。`
      ],
      hints: ['用 $@tan@alpha$ 的一次式表示 $@sin2@alpha,@cos2@alpha$。', '把 $@sin@left(2@alpha+@frac{@pi}{4}@right)$ 按和角公式展开。', '两项的系数都是 $@frac{@sqrt2}{2}$，可合并。'],
      pitfalls: ['$@cos2@alpha$ 的符号算错，误得 $@frac35$。', '和角公式中把两项符号都写成正。', '把 $@tan2@alpha$ 的公式误用于求 $@sin2@alpha$。'],
      takeaway: '已知 $@tan@alpha$ 求二倍角正弦、余弦，直接套万能公式最稳。',
      knowledge: ['k-tr-identity']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 2,
      stem: `记 $S_n$ 为等差数列 $@left@{a_n@right@}$ 的前 $n$ 项和。若 $S_4=2$，$S_8=10$，则 $S_{12}=$`,
      options: [
        { k: 'A', t: `$22$` },
        { k: 'B', t: `$24$` },
        { k: 'C', t: `$26$` },
        { k: 'D', t: `$30$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `等差数列中，$S_4$，$S_8-S_4$，$S_{12}-S_8$ 也成等差数列。`,
        `其中 $S_4=2$，$S_8-S_4=10-2=8$。`,
        `设 $S_{12}-S_8=x$，则 $2,8,x$ 成等差，所以 $2@times8=2+x$，解得 $x=14$。`,
        `故 $S_{12}=S_8+14=10+14=24$，选 B。`
      ],
      hints: ['把前 $12$ 项按每 $4$ 项分成三段。', '三段和 $S_4,S_8-S_4,S_{12}-S_8$ 成等差数列。', '也可设 $a_1,d$ 列方程组求解。'],
      pitfalls: ['误认为 $S_4,S_8,S_{12}$ 本身成等差。', '第二段写成 $S_8$。', '解 $2,8,x$ 的等差关系时算错。'],
      takeaway: '等差数列前 $n$ 项和的分段和 $S_k,S_{2k}-S_k,S_{3k}-S_{2k}$ 仍成等差数列。',
      knowledge: ['k-seq-sum', 'k-seq-basic']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 3,
      stem: `三棱锥 $P-ABC$ 中，$PA,PB,PC$ 两两垂直，且 $PA=PB=PC=2$，则该三棱锥外接球的表面积为`,
      options: [
        { k: 'A', t: `$16@pi$` },
        { k: 'B', t: `$24@pi$` },
        { k: 'C', t: `$12@pi$` },
        { k: 'D', t: `$48@pi$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `三条侧棱 $PA,PB,PC$ 两两垂直，可把三棱锥补成以 $P$ 为一个顶点、$PA,PB,PC$ 为三条棱的正方体。`,
        `三棱锥的外接球就是该正方体的外接球，正方体体对角线为直径：$2R=@sqrt{2^2+2^2+2^2}=2@sqrt3$，故 $R=@sqrt3$。`,
        `外接球表面积 $S=4@pi R^2=4@pi@times3=12@pi$，选 C。`
      ],
      hints: ['三条棱两两垂直的“墙角模型”补成长方体。', '长方体外接球直径等于体对角线。', '表面积公式为 $4@pi R^2$。'],
      pitfalls: ['把体对角线直接当作半径 $R$。', '把表面积写成 $@pi R^2$。', '补形后错把 $AB$ 当作体对角线。'],
      takeaway: '墙角模型：三棱锥补长方体，体对角线的一半即外接球半径。',
      knowledge: ['k-so-sphere', 'k-so-solid']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 4,
      stem: `设 $a=@frac{@ln2}{2}$，$b=@frac{@ln3}{3}$，$c=@frac{1}{e}$，则`,
      options: [
        { k: 'A', t: `$b<a<c$` },
        { k: 'B', t: `$b<c<a$` },
        { k: 'C', t: `$a<b<c$` },
        { k: 'D', t: `$c<a<b$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `构造 $f(x)=@frac{@ln x}{x}(x>0)$，则 $f'(x)=@frac{1-@ln x}{x^2}$，所以 $f(x)$ 在 $(0,e)$ 上递增，在 $(e,+@infty)$ 上递减，最大值为 $f(e)=@frac1e=c$。`,
        `因为 $3>e$，所以 $b=f(3)<f(e)=c$。`,
        `再比较 $a,b$：$@frac{@ln2}{2}<@frac{@ln3}{3}@iff 3@ln2<2@ln3@iff 8<9$，成立，所以 $a<b$。`,
        `综上 $a<b<c$，选 C。`
      ],
      hints: ['把三个数统一成 $@frac{@ln x}{x}$ 的形式。', '求导确定 $f(x)$ 在 $e$ 处取最大值。', '$2<e<3$，$2$ 与 $3$ 不在同一单调区间，需单独比较。'],
      pitfalls: ['误认为 $f(x)$ 在 $(0,+@infty)$ 上单调递增。', '直接用单调性比较 $f(2)$ 与 $f(3)$。', '忘记 $f(e)=@frac1e$。'],
      takeaway: '比较含 $@ln$ 的分式大小，构造 $@frac{@ln x}{x}$ 并用单调性。',
      knowledge: ['k-dv-ineq', 'k-dv-monotone']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知函数 $f(x)=2@cos@left(2x+@frac{@pi}{4}@right)$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$f(x)$ 的最小正周期为 $@pi$` },
        { k: 'B', t: `$f(x)$ 的图象关于点 $@left(@frac{@pi}{8},0@right)$ 对称` },
        { k: 'C', t: `$f(x)$ 在区间 $@left(-@frac{@pi}{8},@frac{3@pi}{8}@right)$ 上单调递减` },
        { k: 'D', t: `将 $f(x)$ 的图象向左平移 $@frac{@pi}{8}$ 个单位长度，得到 $y=2@cos2x$ 的图象` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `A：$@omega=2$，最小正周期 $T=@frac{2@pi}{2}=@pi$，正确。`,
        `B：$f@left(@frac{@pi}{8}@right)=2@cos@left(@frac{@pi}{4}+@frac{@pi}{4}@right)=2@cos@frac{@pi}{2}=0$，且 $x=@frac{@pi}{8}$ 时相位为 $@frac{@pi}{2}$，是对称中心，正确。`,
        `C：当 $x@in@left(-@frac{@pi}{8},@frac{3@pi}{8}@right)$ 时，相位 $2x+@frac{@pi}{4}@in@left(0,@pi@right)$，余弦函数在此区间单调递减，正确。`,
        `D：向左平移 $@frac{@pi}{8}$ 得 $2@cos@left[2@left(x+@frac{@pi}{8}@right)+@frac{@pi}{4}@right]=2@cos@left(2x+@frac{@pi}{2}@right)=-2@sin2x$，不是 $2@cos2x$，错误。`,
        `综上，选 ABC。`
      ],
      hints: ['把所有性质转化为相位 $2x+@frac{@pi}{4}$ 的取值。', '余弦函数的对称中心在函数值为 $0$ 处。', '平移口诀“左加右减”，只对自变量 $x$ 作替换。'],
      pitfalls: ['平移时忘记平移量要乘以 $@omega$。', '把对称中心与对称轴混淆。', '判断单调性时只看区间端点，没有看相位是否落在 $(0,@pi)$。'],
      takeaway: '余弦型函数：周期看 $@omega$，对称中心令相位 $=k@pi+@frac{@pi}{2}$，单调性看相位区间。',
      knowledge: ['k-tr-graph']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 3,
      stem: `某研究小组对变量 $x,y$ 进行回归分析，得到经验回归方程 $@hat y=0.8x+2.5$，样本相关系数 $r=0.92$。则下列结论正确的是`,
      options: [
        { k: 'A', t: `$r>0$ 说明 $x$ 与 $y$ 正相关` },
        { k: 'B', t: `样本点 $(10,10.5)$ 的残差为 $0$` },
        { k: 'C', t: `去掉一个样本点后，经验回归直线的斜率一定改变` },
        { k: 'D', t: `经验回归直线一定经过样本中心点 $(@bar x,@bar y)$` }
      ],
      answer: 'ABD',
      accept: [],
      solution: [
        `A：样本相关系数 $r>0$，说明两个变量正相关，正确。`,
        `B：当 $x=10$ 时，$@hat y=0.8@times10+2.5=10.5$，残差为 $10.5-10.5=0$，正确。`,
        `C：去掉一个样本点后，回归直线的斜率可能改变，也可能恰好不变，故“一定改变”错误。`,
        `D：经验回归直线必经过样本中心点 $(@bar x,@bar y)$，这是回归直线的性质，正确。`,
        `综上，选 ABD。`
      ],
      hints: ['相关系数的符号决定正相关或负相关。', '残差等于实际值减去预测值。', '回归直线过样本中心是固定性质，与去掉点无关。'],
      pitfalls: ['把残差算成预测值减实际值（本题恰为 $0$，但概念要清楚）。', '认为去掉任意一个点斜率必变。', '忽略 $r$ 只反映线性相关强弱与方向。'],
      takeaway: '回归分析：$r$ 看方向与强弱，残差看拟合效果，回归直线必过样本中心。',
      knowledge: ['k-ps-stat']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 4,
      stem: `在正三棱柱 $ABC-A_1B_1C_1$ 中，$AB=2$，$AA_1=3$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `直线 $AB_1$ 与 $BC_1$ 所成角的余弦值为 $@frac{7}{13}$` },
        { k: 'B', t: `三棱锥 $A_1-ABC_1$ 的体积为 $@sqrt3$` },
        { k: 'C', t: `点 $B_1$ 到平面 $A_1BC$ 的距离为 $@frac32$` },
        { k: 'D', t: `直线 $A_1B@parallel$ 平面 $AB_1C_1$` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `以 $A$ 为原点建系：$A(0,0,0)$，$B(2,0,0)$，$C(1,@sqrt3,0)$，$A_1(0,0,3)$，$B_1(2,0,3)$，$C_1(1,@sqrt3,3)$。`,
        `A：$@vec{AB_1}=(2,0,3)$，$@vec{BC_1}=(-1,@sqrt3,3)$，数量积为 $7$，两向量模都为 $@sqrt{13}$，故余弦值为 $@frac{7}{13}$，正确。`,
        `B：$V_{A_1-ABC_1}=V_{B-AA_1C_1}$。$@triangle AA_1C_1$ 中 $AA_1=3$，$C_1$ 到 $AA_1$ 的距离为 $2$，面积为 $3$；平面 $AA_1C_1$ 的方程为 $y=@sqrt3x$，$B$ 到它的距离为 $@sqrt3$。故体积为 $@frac13@times3@times@sqrt3=@sqrt3$，正确。`,
        `C：平面 $A_1BC$ 的方程为 $3@sqrt3x+3y+2@sqrt3z-6@sqrt3=0$，点 $B_1(2,0,3)$ 到它的距离为 $@frac{6@sqrt3}{4@sqrt3}=@frac32$，正确。`,
        `D：$@vec{A_1B}=(2,0,-3)$，平面 $AB_1C_1$ 的法向量可取 $(-3@sqrt3,-3,2@sqrt3)$，数量积为 $-12@sqrt3@ne0$，故 $A_1B$ 不平行于该平面，错误。`,
        `综上，选 ABC。`
      ],
      hints: ['正三棱柱底面是正三角形，建系时把 $C$ 的坐标写成 $(1,@sqrt3,0)$。', '异面直线所成角用方向向量夹角并取锐角。', '求体积可换顶点，线面平行要验证方向向量与法向量垂直。'],
      pitfalls: ['异面直线所成角忘记取绝对值，得到钝角。', '体积公式漏乘 $@frac13$。', '只证明直线与平面内一条直线平行就判定线面平行。'],
      takeaway: '立体几何多选题：建系后逐项算角、体积、距离，线面平行用法向量验证。',
      knowledge: ['k-so-angle', 'k-so-solid']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 3,
      stem: `在 $@left(2x^2-@frac1x@right)^6$ 的展开式中，常数项为 ________ .`,
      answer: `$60$`,
      accept: ['60'],
      solution: [
        `写出通项：$T_{k+1}=@mathrm{C}_6^k(2x^2)^{6-k}@left(-@frac1x@right)^k=@mathrm{C}_6^k 2^{6-k}(-1)^k x^{12-3k}$。`,
        `令 $x$ 的指数为零：$12-3k=0$，解得 $k=4$。`,
        `常数项为 $@mathrm{C}_6^4@times2^2@times(-1)^4=15@times4=60$。`
      ],
      hints: ['先写通项，把 $x$ 的指数合并。', '常数项即 $x$ 的指数为 $0$。', '注意 $2$ 的指数是 $6-k$，不是 $k$。'],
      pitfalls: ['把 $2^{6-k}$ 写成 $2^k$。', '求出 $k=4$ 后漏乘系数。', '把 $(-1)^4$ 的符号写错。'],
      takeaway: '二项式常数项：通项合并指数，令指数为零求 $k$，再代回算系数。',
      knowledge: ['k-binomial', 'k-count']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 3,
      stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_1=2$，$a_{n+1}=@frac{a_n}{1+2a_n}(n@in@mathbb{N}^*)$，则 $a_n=$ ________ .`,
      answer: `$@frac{2}{4n-3}$`,
      accept: ['2/(4n-3)', '2/(4n−3)', '2/(4*n-3)'],
      solution: [
        `由 $a_1=2>0$ 及递推式可知各项均为正，可对递推式两边取倒数。`,
        `$@frac{1}{a_{n+1}}=@frac{1+2a_n}{a_n}=@frac{1}{a_n}+2$。`,
        `所以 $@left@{@frac{1}{a_n}@right@}$ 是首项为 $@frac12$、公差为 $2$ 的等差数列。`,
        `故 $@frac{1}{a_n}=@frac12+2(n-1)=@frac{4n-3}{2}$，即 $a_n=@frac{2}{4n-3}$。`
      ],
      hints: ['形如 $a_{n+1}=@frac{a_n}{1+ca_n}$ 的递推，取倒数可构造等差数列。', '先说明各项不为 $0$。', '求出 $@frac{1}{a_n}$ 后再取倒数，并用 $n=1$ 检验。'],
      pitfalls: ['取倒数前不说明 $a_n@ne0$。', '把首项写成 $2$ 而不是 $@frac12$。', '把公差 $2$ 写成 $@frac12$。'],
      takeaway: '分式递推取倒数，常化为等差数列；最后代 $n=1$ 检验。',
      knowledge: ['k-seq-recursion']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 4,
      stem: `若函数 $f(x)=@ln x+ax$ 有两个零点，则实数 $a$ 的取值范围是 ________ .`,
      answer: `$@left(-@frac{1}{e},0@right)$`,
      accept: ['(-1/e,0)', '-1/e<a<0', '(-1/e, 0)'],
      solution: [
        `定义域为 $x>0$，$f'(x)=@frac1x+a=@frac{1+ax}{x}$。`,
        `若 $a@ge0$，则 $f'(x)>0$，$f(x)$ 单调递增，至多一个零点，不合题意。`,
        `若 $a<0$，则 $f(x)$ 在 $@left(0,-@frac1a@right)$ 上递增，在 $@left(-@frac1a,+@infty@right)$ 上递减，最大值为 $f@left(-@frac1a@right)=@ln@left(-@frac1a@right)-1$。`,
        `又 $x@to0^+$ 时 $f(x)@to-@infty$，$x@to+@infty$ 时 $f(x)@to-@infty$，故有两个零点等价于最大值大于 $0$：$@ln@left(-@frac1a@right)>1$，即 $-@frac1a>e$，解得 $a>-@frac1e$。`,
        `结合 $a<0$，得 $a@in@left(-@frac1e,0@right)$。`
      ],
      hints: ['先看 $a@ge0$ 时是否可能有两个零点。', '求导后找极大值点 $x=-@frac1a$。', '两端极限都是 $-@infty$，所以只需最大值大于 $0$。'],
      pitfalls: ['忽略定义域 $x>0$。', '解 $@ln@left(-@frac1a@right)>1$ 时不等号方向出错。', '把端点 $-@frac1e$ 取到，此时只有一个零点。'],
      takeaway: '对数加线性函数零点个数：导数定最大值，再与 $0$ 比较，注意定义域与端点。',
      knowledge: ['k-dv-zero', 'k-dv-extreme']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `在 $@triangle ABC$ 中，内角 $A,B,C$ 所对的边分别为 $a,b,c$，已知 $(2a-c)@cos B=b@cos C$。（1）求 $B$；（2）若 $b=@sqrt3$，求 $@triangle ABC$ 周长的最大值。`,
      answer: `(1) $@frac{@pi}{3}$；(2) $3@sqrt3$`,
      accept: [],
      solution: [
        `由投影定理 $b@cos C+c@cos B=a$，得 $b@cos C=a-c@cos B$。`,
        `代入条件：$(2a-c)@cos B=a-c@cos B$，整理得 $2a@cos B=a$。`,
        `因为 $a>0$，所以 $@cos B=@frac12$；又 $B@in(0,@pi)$，故 $B=@frac{@pi}{3}$。`,
        `由余弦定理 $b^2=a^2+c^2-2ac@cos B$，即 $3=a^2+c^2-ac$。由 $a^2+c^2@ge2ac$ 得 $3@ge ac$。`,
        `周长 $L=a+c+@sqrt3$，而 $(a+c)^2=a^2+c^2+2ac=3+3ac@le12$，所以 $a+c@le2@sqrt3$，故 $L@le3@sqrt3$。`,
        `当且仅当 $a=c=@sqrt3$ 时取等号，所以周长的最大值为 $3@sqrt3$。`
      ],
      hints: ['第（1）问用投影定理把 $b@cos C$ 化为 $a-c@cos B$。', '第（2）问用余弦定理建立 $a,c$ 的关系。', '用基本不等式求 $ac$ 的上界，再转化为 $a+c$ 的上界并验证取等。'],
      pitfalls: ['约去 $a$ 时不说明 $a>0$。', '把余弦定理写成 $a^2+c^2+ac=3$。', '求出 $ac@le3$ 后没有转化为 $a+c$ 的范围。'],
      takeaway: '解三角形最值：投影定理定角，余弦定理定关系，基本不等式求最值并验证取等。',
      knowledge: ['k-tr-solve', 'k-tr-maxmin', 'k-ie-basic']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 4,
      stem: `在菱形 $ABCD$ 中，$@angle BAD=60^@circ$，$AB=2$。将 $@triangle ABD$ 沿 $BD$ 折起，使平面 $ABD@perp$ 平面 $BCD$。（1）证明：$AC@perp BD$；（2）求二面角 $A-BC-D$ 的余弦值。`,
      answer: `(1) 证明见解析；(2) $@frac{@sqrt5}{5}$`,
      accept: [],
      solution: [
        `设 $AC$ 与 $BD$ 交于点 $O$。菱形中 $AC@perp BD$，且 $O$ 为 $BD$ 中点，$AO=CO=@sqrt3$。`,
        `折起后 $AO@perp BD$，$CO@perp BD$ 仍然成立，且 $AO@cap CO=O$，所以 $BD@perp$ 平面 $AOC$。`,
        `因为 $AC@subset$ 平面 $AOC$，所以 $AC@perp BD$。`,
        `以 $O$ 为原点，$BD$ 所在直线为 $x$ 轴，平面 $ABD$ 为 $xOy$ 平面建系，则 $B(-1,0,0)$，$D(1,0,0)$，$A(0,-@sqrt3,0)$，$C(0,0,@sqrt3)$。`,
        `平面 $BCD$ 即 $y=0$，法向量 $@vec n_2=(0,1,0)$；由 $@vec{AB}=(-1,@sqrt3,0)$，$@vec{AC}=(0,@sqrt3,@sqrt3)$ 得平面 $ABC$ 的法向量 $@vec n_1=(3,@sqrt3,-@sqrt3)$。`,
        `所以 $@cos@theta=@frac{|@vec n_1@cdot@vec n_2|}{|@vec n_1||@vec n_2|}=@frac{@sqrt3}{@sqrt{15}}=@frac{@sqrt5}{5}$。由图形知二面角为锐角，故余弦值为 $@frac{@sqrt5}{5}$。`
      ],
      hints: ['折叠问题先找折痕 $BD$ 处不变的垂直关系。', '证明线线垂直可先证线面垂直：$BD@perp$ 平面 $AOC$。', '第（2）问利用两个平面垂直建立空间直角坐标系。', '法向量夹角的绝对值对应二面角的余弦，再判断锐钝。'],
      pitfalls: ['折叠后仍用原平面内的坐标关系。', '证明 $BD@perp$ 平面 $AOC$ 时漏写 $AO@cap CO=O$。', '把两法向量夹角直接当作二面角，不判断锐钝。'],
      takeaway: '折叠问题抓住折痕处垂直关系不变，再用线面垂直转化，最后建系求二面角。',
      knowledge: ['k-so-angle', 'k-so-solid']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 4,
      stem: `某闯关游戏共设三关，参与者按顺序闯关，一旦某一关未通过即停止。已知第一、二、三关通过的概率分别为 $@frac23,@frac12,@frac13$，各关是否通过相互独立。记 $X$ 为参与者通过的关数。（1）求 $X$ 的分布列；（2）求 $E(X)$ 与 $D(X)$；（3）求在至少通过一关的条件下，恰好通过两关的概率。`,
      answer: `(1) $P(X=0)=@frac13$，$P(X=1)=@frac13$，$P(X=2)=@frac29$，$P(X=3)=@frac19$；(2) $E(X)=@frac{10}{9}$，$D(X)=@frac{80}{81}$；(3) $@frac13$`,
      accept: [],
      solution: [
        `$X=0$ 表示第一关未通过，$P(X=0)=1-@frac23=@frac13$。`,
        `$X=1$ 表示通过第一关、未通过第二关，$P(X=1)=@frac23@times@frac12=@frac13$。`,
        `$X=2$ 表示通过前两关、未通过第三关，$P(X=2)=@frac23@times@frac12@times@frac23=@frac29$。`,
        `$X=3$ 表示三关全部通过，$P(X=3)=@frac23@times@frac12@times@frac13=@frac19$。`,
        `$E(X)=0@times@frac13+1@times@frac13+2@times@frac29+3@times@frac19=@frac{10}{9}$；又 $E(X^2)=0+@frac13+4@times@frac29+9@times@frac19=@frac{20}{9}$，所以 $D(X)=@frac{20}{9}-@left(@frac{10}{9}@right)^2=@frac{80}{81}$。`,
        `$P(X@ge1)=1-P(X=0)=@frac23$，故所求条件概率为 $@frac{P(X=2)}{P(X@ge1)}=@frac{2/9}{2/3}=@frac13$。`
      ],
      hints: ['一旦失败即停止，$X=k$ 对应唯一的通关、失败序列。', '期望、方差按定义用分布列计算。', '条件概率用 $P(A|B)=@frac{P(A@cap B)}{P(B)}$，分母是 $P(X@ge1)$。'],
      pitfalls: ['计算 $P(X=1)$ 时只算通过第一关，忘记乘第二关失败的概率。', '计算 $D(X)$ 时忘记减去 $@left(E(X)@right)^2$。', '条件概率的分母误用 $1$ 或 $P(X=2)$。'],
      takeaway: '停止型闯关问题：按“通过到第 $k-1$ 关、第 $k$ 关失败”写出分布列，再算期望方差与条件概率。',
      knowledge: ['k-ps-dist', 'k-ps-expect', 'k-ps-prob']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 4,
      stem: `已知抛物线 $C:y^2=2px(p>0)$ 的焦点为 $F$，点 $P(1,2)$ 在 $C$ 上。（1）求 $C$ 的方程及准线方程；（2）过 $F$ 的直线 $l$ 与 $C$ 交于 $A,B$ 两点，若 $|AB|=8$，求直线 $l$ 的方程；（3）在（2）的条件下，求 $@triangle OAB$ 的面积（$O$ 为坐标原点）。`,
      answer: `(1) $y^2=4x$，准线 $x=-1$；(2) $x-y-1=0$ 或 $x+y-1=0$；(3) $2@sqrt2$`,
      accept: [],
      solution: [
        `把 $P(1,2)$ 代入 $y^2=2px$ 得 $4=2p$，所以 $p=2$，$C:y^2=4x$，焦点 $F(1,0)$，准线为 $x=-1$。`,
        `设 $l:x=my+1$，代入 $y^2=4x$ 得 $y^2-4my-4=0$。`,
        `设 $A(x_1,y_1),B(x_2,y_2)$，则 $y_1+y_2=4m$，$y_1y_2=-4$。`,
        `由焦点弦长公式 $|AB|=x_1+x_2+p=m(y_1+y_2)+2+2=4m^2+4$。`,
        `令 $4m^2+4=8$，得 $m^2=1$，即 $m=@pm1$。故 $l$ 的方程为 $x-y-1=0$ 或 $x+y-1=0$。`,
        `原点 $O$ 到 $l$ 的距离 $d=@frac{1}{@sqrt{1+m^2}}=@frac{@sqrt2}{2}$，所以 $S_{@triangle OAB}=@frac12@times8@times@frac{@sqrt2}{2}=2@sqrt2$。`
      ],
      hints: ['点在抛物线上，代入即可求 $p$。', '过焦点的直线设为 $x=my+1$，可避免讨论斜率不存在。', '焦点弦长等于 $x_1+x_2+p$。', '面积用 $@frac12|AB|@cdot d$，$d$ 为原点到直线的距离。'],
      pitfalls: ['设 $y=k(x-1)$ 时漏掉斜率不存在的直线（本题该情况不满足 $|AB|=8$，但需说明）。', '弦长公式漏加 $p=2$。', '点到直线距离公式中忘记分母开方。'],
      takeaway: '抛物线焦点弦：设 $x=my+1$ 联立，弦长用 $x_1+x_2+p$，面积用底乘高。',
      knowledge: ['k-ag-conic', 'k-ag-line', 'k-ag-chord', 'k-ag-area']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 5,
      stem: `设数列 $@left@{a_n@right@}$ 满足 $a_{n+2}=|a_{n+1}-a_n|(n@in@mathbb{N}^*)$，称这样的数列为“递差数列”。（1）若 $a_1=3$，$a_2=1$，写出 $a_3,a_4,a_5,a_6$，并指出从第几项起数列呈周期性，写出一个周期；（2）证明：若 $a_1,a_2$ 均为正整数，则该数列中必出现 $0$；（3）若 $a_1=2026$，$a_2=1$，求 $a_{2026}$。`,
      answer: `(1) $a_3=2$，$a_4=1$，$a_5=1$，$a_6=0$，从第 $6$ 项起呈周期，一个周期为 $0,1,1$；(2) 证明见解析；(3) $676$`,
      accept: [],
      solution: [
        `（1）依次计算：$a_3=|1-3|=2$，$a_4=|2-1|=1$，$a_5=|1-2|=1$，$a_6=|1-1|=0$，$a_7=|0-1|=1$，$a_8=|1-0|=1$，此后重复，故从第 $6$ 项起以 $0,1,1$ 为周期。`,
        `（2）记 $M_n=@max(a_n,a_{n+1})$。若 $a_n,a_{n+1}$ 都为正且不相等，则 $a_{n+2}=|a_{n+1}-a_n|<M_n$。`,
        `若 $M_{n+1}=M_n$，则只能是 $a_{n+1}=M_n$。此时 $a_{n+2}=M_n-a_n>0$，于是 $a_{n+3}=|a_{n+2}-a_{n+1}|=M_n-a_{n+2}<M_n$，从而 $M_{n+2}<M_n$。`,
        `所以只要数列中尚未出现 $0$，$M_n$ 至多经过两步就严格减小。$M_n$ 是正整数，不可能无限严格减小，因此数列中必出现 $0$。`,
        `（3）由 $a_1=2026,a_2=1$ 算得 $a_3=2025,a_4=2024,a_5=1,a_6=2023$，可见每三项一组，形如 $(x,1,x-1)$，下一组变为 $(x-2,1,x-3)$。`,
        `归纳得 $a_{3k+1}=2026-2k$，$a_{3k+2}=1$，$a_{3k+3}=2025-2k$。因为 $2026=3@times675+1$，所以 $a_{2026}=2026-2@times675=676$。`
      ],
      hints: ['第（1）问直接按递推逐项计算，注意绝对值。', '第（2）问考察相邻两项的最大值 $M_n$，说明它不能无限保持。', '第（3）问先算前几项，寻找“每三项一组”的规律再归纳。'],
      pitfalls: ['把 $|a_{n+1}-a_n|$ 写成 $a_{n+1}-a_n$，忽略非负性。', '第（2）问只验证有限项就下结论。', '第（3）问没有确认规律在 $a_{2026}$ 之前仍然有效。'],
      takeaway: '递差数列用“相邻两项最大值”证明必然出现 $0$，用分组归纳寻找周期与通项规律。',
      knowledge: ['k-seq-recursion', 'k-seq-basic']
    }
  ]
});
