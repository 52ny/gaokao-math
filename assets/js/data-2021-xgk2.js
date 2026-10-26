/* 2021 年普通高等学校招生全国统一考试（新高考Ⅱ卷）数学 · 19 题结构重排
 * 公式约定：LaTeX 反斜杠一律写成 @，字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: '2021-xgk2',
  title: '2021 年普通高等学校招生全国统一考试（新高考Ⅱ卷）· 19 题结构重排',
  short: '2021 新高考Ⅱ',
  year: 2021, region: '新高考Ⅱ卷', kind: 'real', duration: 150,
  note: '按 19 题结构重排',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `复数 $@frac{2-i}{1-3i}$ 在复平面内对应的点所在的象限为`,
      options: [
        { k: 'A', t: `第一象限` },
        { k: 'B', t: `第二象限` },
        { k: 'C', t: `第三象限` },
        { k: 'D', t: `第四象限` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `分子、分母同乘分母的共轭复数 $1+3i$。`,
        `$@frac{2-i}{1-3i}=@frac{(2-i)(1+3i)}{(1-3i)(1+3i)}=@frac{2+6i-i-3i^2}{10}$。`,
        `由 $i^2=-1$ 得分子为 $5+5i$，故原式为 $@frac12+@frac12i$。`,
        `对应点为 $@left(@frac12,@frac12@right)$，位于第一象限，选 A。`
      ],
      hints: ['复数除法先分母实数化，同乘 $1+3i$。', '注意 $i^2=-1$，所以 $-3i^2=3$。'],
      pitfalls: ['分母乘成 $1-3i$，没有实数化。', '把 $-3i^2$ 算成 $-3$。'],
      takeaway: '复数除法：分母实数化后写成 $a+bi$，再由实部、虚部的符号判断象限。',
      knowledge: ['k-cx-basic']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 1,
      stem: `设全集 $U=@left@{1,2,3,4,5,6@right@}$，$A=@left@{1,3,6@right@}$，$B=@left@{2,3,4@right@}$，则 $A@cap(@complement_{U}B)=$`,
      options: [
        { k: 'A', t: `$@left@{3@right@}$` },
        { k: 'B', t: `$@left@{1,6@right@}$` },
        { k: 'C', t: `$@left@{5,6@right@}$` },
        { k: 'D', t: `$@left@{1,3@right@}$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `先求 $B$ 在 $U$ 中的补集：$@complement_{U}B=@left@{1,5,6@right@}$。`,
        `再与 $A=@left@{1,3,6@right@}$ 取交集，公共元素为 $1,6$。`,
        `故 $A@cap(@complement_{U}B)=@left@{1,6@right@}$，选 B。`
      ],
      hints: ['先求补集，再求交集，顺序不能反。', '补集只去掉 $B$ 中元素，全集中的 $5$ 要保留。'],
      pitfalls: ['把补集求成 $@left@{5@right@}$，漏掉 $1,6$。', '直接求 $A@cap B$ 得 $@left@{3@right@}$。'],
      takeaway: '集合的混合运算按“先补集、后交集”的顺序，逐项核对元素。',
      knowledge: ['k-set-ops']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 2,
      stem: `若抛物线 $y^2=2px$（$p>0$）的焦点到直线 $y=x+1$ 的距离为 $@sqrt2$，则 $p=$`,
      options: [
        { k: 'A', t: `$1$` },
        { k: 'B', t: `$2$` },
        { k: 'C', t: `$2@sqrt2$` },
        { k: 'D', t: `$4$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `抛物线的焦点为 $@left(@frac{p}{2},0@right)$。`,
        `直线写成 $x-y+1=0$，点到直线距离 $d=@frac{@left|@frac{p}{2}+1@right|}{@sqrt2}$。`,
        `由 $d=@sqrt2$ 得 $@left|@frac{p}{2}+1@right|=2$，解得 $p=2$ 或 $p=-6$。`,
        `结合 $p>0$，得 $p=2$，选 B。`
      ],
      hints: ['先写出焦点坐标 $@left(@frac{p}{2},0@right)$。', '点到直线距离公式中分母是 $@sqrt{1^2+(-1)^2}=@sqrt2$。'],
      pitfalls: ['把焦点写成 $(p,0)$。', '解绝对值方程后不检验 $p>0$，保留了 $p=-6$。'],
      takeaway: '抛物线的焦点、准线要记准：$y^2=2px$ 的焦点是 $@left(@frac{p}{2},0@right)$。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 3,
      stem: `北斗三号全球卫星导航系统是我国航天事业的重要成果。地球静止同步轨道卫星的轨道位于地球赤道所在平面，轨道高度为 $36000$ km。将地球看作球心为 $O$、半径 $r=6400$ km 的球，点 $A$ 的纬度是指 $OA$ 与赤道平面所成角的度数。地球表面上能直接观测到该卫星的点的纬度最大值为 $@alpha$，卫星信号覆盖地球表面的表面积为 $S=2@pi r^2(1-@cos@alpha)$（单位：km$^2$），则 $S$ 占地球表面积的百分比约为`,
      options: [
        { k: 'A', t: `$26%$` },
        { k: 'B', t: `$34%$` },
        { k: 'C', t: `$42%$` },
        { k: 'D', t: `$50%$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `卫星到球心的距离为 $r+36000=42400$ km。`,
        `视线与地球表面相切时纬度最大，此时直角三角形中 $@cos@alpha=@frac{r}{r+36000}=@frac{6400}{42400}$。`,
        `地球表面积为 $4@pi r^2$，故 $@frac{S}{4@pi r^2}=@frac{1-@cos@alpha}{2}$。`,
        `代入得 $@frac{1-@frac{6400}{42400}}{2}=@frac{36000}{84800}@approx0.42$。`,
        `即 $S$ 约占地球表面积的 $42%$，选 C。`
      ],
      hints: ['先算卫星到球心的距离 $r+h$。', '最大纬度对应视线与球面相切，此时 $@cos@alpha=@frac{r}{r+h}$。', '比值 $@frac{S}{4@pi r^2}$ 中 $r^2$ 可以约去。'],
      pitfalls: ['把轨道高度直接当成卫星到球心的距离。', '忘记地球表面积是 $4@pi r^2$，用成 $@pi r^2$ 导致翻倍。'],
      takeaway: '球面覆盖类应用题：先画轴截面找相切关系，再用 $@cos@alpha=@frac{r}{r+h}$ 列式估算。',
      knowledge: ['k-so-sphere', 'k-fn-model']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 2,
      stem: `正四棱台的上、下底面的边长分别为 $2,4$，侧棱长为 $2$，则其体积为`,
      options: [
        { k: 'A', t: `$20+12@sqrt3$` },
        { k: 'B', t: `$28@sqrt2$` },
        { k: 'C', t: `$@frac{56}{3}$` },
        { k: 'D', t: `$@frac{28@sqrt2}{3}$` }
      ],
      answer: 'D',
      accept: [],
      solution: [
        `上、下底面积分别为 $S_2=4$，$S_1=16$。`,
        `上、下底面外接圆半径分别为 $@sqrt2$ 与 $2@sqrt2$，两者之差为 $@sqrt2$。`,
        `棱台的高 $h=@sqrt{2^2-(@sqrt2)^2}=@sqrt2$。`,
        `由 $V=@frac13h(S_1+S_2+@sqrt{S_1S_2})$ 得 $V=@frac13@cdot@sqrt2@cdot(16+4+8)=@frac{28@sqrt2}{3}$，选 D。`
      ],
      hints: ['正四棱台的高要用侧棱、上下底面外接圆半径之差构造直角三角形。', '棱台体积公式中三项 $S_1,S_2,@sqrt{S_1S_2}$ 都不能漏。'],
      pitfalls: ['把侧棱长当成棱台的高。', '用棱柱体积 $S_1h$ 代替棱台体积。'],
      takeaway: '棱台体积 $V=@frac13h(S_1+@sqrt{S_1S_2}+S_2)$，高由轴截面中的直角三角形求出。',
      knowledge: ['k-so-solid']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 2,
      stem: `某物理量的测量结果服从正态分布 $N(10,@sigma^2)$，则下列结论中不正确的是`,
      options: [
        { k: 'A', t: `$@sigma$ 越小，该物理量在一次测量中落在 $(9.9,10.1)$ 内的概率越大` },
        { k: 'B', t: `$@sigma$ 越小，该物理量在一次测量中大于 $10$ 的概率为 $0.5$` },
        { k: 'C', t: `$@sigma$ 越小，该物理量在一次测量中小于 $9.99$ 与大于 $10.01$ 的概率相等` },
        { k: 'D', t: `$@sigma$ 越小，该物理量在一次测量中落在 $(9.9,10.2)$ 与落在 $(10,10.3)$ 的概率相等` }
      ],
      answer: 'D',
      accept: [],
      solution: [
        `正态曲线关于直线 $x=10$ 对称，$@sigma$ 越小曲线越“瘦高”，数据越集中在 $10$ 附近。`,
        `A 中区间 $(9.9,10.1)$ 关于 $10$ 对称，$@sigma$ 越小概率越大，正确。`,
        `B 中由对称性，大于 $10$ 的概率恒为 $0.5$，正确。`,
        `C 中 $9.99$ 与 $10.01$ 关于 $10$ 对称，两侧概率相等，正确。`,
        `D 中两区间长度相同但位置不同，对应到标准正态的区间也不对称，概率不相等，错误，选 D。`
      ],
      hints: ['抓住正态曲线的对称轴 $x=@mu=10$。', '$@sigma$ 只影响“胖瘦”，不改变对称性。'],
      pitfalls: ['把 $@sigma$ 与方差 $@sigma^2$ 混淆。', '看到区间等长就误判概率相等。'],
      takeaway: '正态分布问题看对称轴与 $@sigma$ 的几何意义：对称区间概率相等，区间越靠近 $@mu$ 概率越大。',
      knowledge: ['k-ps-dist']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 3,
      stem: `已知 $a=@log_5 2$，$b=@log_8 3$，$c=@frac12$，则下列判断正确的是`,
      options: [
        { k: 'A', t: `$c<b<a$` },
        { k: 'B', t: `$b<a<c$` },
        { k: 'C', t: `$a<c<b$` },
        { k: 'D', t: `$a<b<c$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `因为 $2<@sqrt5$，由 $y=@log_5 x$ 单调递增得 $a=@log_5 2<@log_5@sqrt5=@frac12$。`,
        `因为 $3>2@sqrt2=8^{@frac12}$，由 $y=@log_8 x$ 单调递增得 $b=@log_8 3>@frac12$。`,
        `所以 $a<@frac12<b$，即 $a<c<b$，选 C。`
      ],
      hints: ['把 $c=@frac12$ 写成同底对数：$@frac12=@log_5@sqrt5=@log_8 2@sqrt2$。', '利用对数函数的单调性比较。'],
      pitfalls: ['直接取近似值但精度不够，无法分辨 $a$ 与 $c$。', '把 $@log_5 2$ 与 $@log_8 3$ 误认为同底。'],
      takeaway: '对数比较大小：把中间量写成同底对数，再用单调性判断。',
      knowledge: ['k-fn-elem']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 4,
      stem: `已知函数 $f(x)$ 的定义域为 $@mathbb{R}$，$f(x+2)$ 为偶函数，$f(2x+1)$ 为奇函数，则`,
      options: [
        { k: 'A', t: `$f@left(-@frac12@right)=0$` },
        { k: 'B', t: `$f(-1)=0$` },
        { k: 'C', t: `$f(2)=0$` },
        { k: 'D', t: `$f(4)=0$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由 $f(x+2)$ 为偶函数得 $f(2+x)=f(2-x)$，即曲线关于直线 $x=2$ 对称。`,
        `由 $f(2x+1)$ 为奇函数得 $f(1-2x)=-f(1+2x)$，即曲线关于点 $(1,0)$ 中心对称。`,
        `在 $f(1-2x)=-f(1+2x)$ 中令 $x=0$，得 $f(1)=0$。`,
        `把第一式中的 $x$ 换成 $x+1$ 得 $f(x+3)=f(1-x)$，与第二式 $f(1-x)=-f(1+x)$ 联立得 $f(x+3)=-f(x+1)$，即 $f(x+2)=-f(x)$，故周期 $T=4$。`,
        `于是 $f(-1)=f(3)=-f(1)=0$，选 B。`
      ],
      hints: ['偶函数给出对称轴，奇函数给出对称中心。', '把两个对称关系都化成 $f$ 的等式，再消去中间量找周期。'],
      pitfalls: ['把 $f(x+2)$ 为偶函数误写成 $f(x+2)=f(-x-2)$。', '求出周期后不代回验证选项。'],
      takeaway: '抽象函数对称性：$f(x+a)$ 为偶函数得对称轴 $x=a$，$f(bx+c)$ 为奇函数得对称中心；对称轴与对称中心间距的一半对应半个周期。',
      knowledge: ['k-fn-prop']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 2,
      stem: `下列统计量中，能度量样本 $x_1,x_2,@cdots,x_n$ 的离散程度的有`,
      options: [
        { k: 'A', t: `样本 $x_1,x_2,@cdots,x_n$ 的标准差` },
        { k: 'B', t: `样本 $x_1,x_2,@cdots,x_n$ 的中位数` },
        { k: 'C', t: `样本 $x_1,x_2,@cdots,x_n$ 的极差` },
        { k: 'D', t: `样本 $x_1,x_2,@cdots,x_n$ 的平均数` }
      ],
      answer: 'AC',
      accept: [],
      solution: [
        `标准差刻画数据偏离平均值的程度，能度量离散程度，A 正确。`,
        `极差是最大值与最小值之差，反映数据的波动范围，能度量离散程度，C 正确。`,
        `中位数与平均数反映数据的集中趋势，不能度量离散程度，B、D 错误。`,
        `综上，选 AC。`
      ],
      hints: ['区分“集中趋势”与“离散程度”两类统计量。', '平均数、中位数、众数属于集中趋势；方差、标准差、极差属于离散程度。'],
      pitfalls: ['把平均数误当作离散程度的度量。', '漏选极差，只选标准差。'],
      takeaway: '离散程度看方差、标准差、极差；集中趋势看平均数、中位数、众数。',
      knowledge: ['k-ps-stat']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知直线 $l:ax+by-r^2=0$ 与圆 $C:x^2+y^2=r^2$，点 $A(a,b)$，则下列说法正确的是`,
      options: [
        { k: 'A', t: `若点 $A$ 在圆 $C$ 上，则直线 $l$ 与圆 $C$ 相切` },
        { k: 'B', t: `若点 $A$ 在圆 $C$ 内，则直线 $l$ 与圆 $C$ 相离` },
        { k: 'C', t: `若点 $A$ 在圆 $C$ 外，则直线 $l$ 与圆 $C$ 相离` },
        { k: 'D', t: `若点 $A$ 在直线 $l$ 上，则直线 $l$ 与圆 $C$ 相切` }
      ],
      answer: 'ABD',
      accept: [],
      solution: [
        `圆心 $C(0,0)$ 到直线 $l$ 的距离 $d=@frac{r^2}{@sqrt{a^2+b^2}}$。`,
        `若 $A$ 在圆上，则 $a^2+b^2=r^2$，得 $d=r$，直线与圆相切，A 正确。`,
        `若 $A$ 在圆内，则 $a^2+b^2<r^2$，得 $d>r$，直线与圆相离，B 正确。`,
        `若 $A$ 在圆外，则 $a^2+b^2>r^2$，得 $d<r$，直线与圆相交，C 错误。`,
        `若 $A$ 在 $l$ 上，则 $a^2+b^2-r^2=0$，即 $a^2+b^2=r^2$，同 A 得相切，D 正确。`,
        `综上，选 ABD。`
      ],
      hints: ['统一用圆心到直线的距离 $d$ 与半径 $r$ 比较。', '点 $A$ 在直线 $l$ 上的条件恰好是 $a^2+b^2=r^2$。'],
      pitfalls: ['把 $d$ 的分子写成 $r$（应为 $r^2$）。', 'C 中 $d<r$ 应判断为相交，误判为相离。'],
      takeaway: '直线与圆的位置关系统一转化为 $d$ 与 $r$ 的大小比较，注意 $d$ 的表达式。',
      knowledge: ['k-cx-geo', 'k-ag-line']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 4,
      stem: `设正整数 $n=a_0@cdot2^0+a_1@cdot2^1+@cdots+a_k@cdot2^k$，其中 $a_i@in@left@{0,1@right@}$，记 $@omega(n)=a_0+a_1+@cdots+a_k$，则`,
      options: [
        { k: 'A', t: `$@omega(2n)=@omega(n)$` },
        { k: 'B', t: `$@omega(2n+3)=@omega(n)+1$` },
        { k: 'C', t: `$@omega(8n+5)=@omega(4n+3)$` },
        { k: 'D', t: `$@omega(2^n-1)=n$` }
      ],
      answer: 'ACD',
      accept: [],
      solution: [
        `A：$2n$ 的二进制表示是 $n$ 的表示整体左移一位，末尾补 $0$，各位数字之和不变，正确。`,
        `B：取 $n=2$，则 $@omega(2)=1$，而 $2n+3=7=(111)_2$，$@omega(7)=3@ne1+1$，错误。`,
        `C：$8n+5$ 的二进制末三位为 $101$，$4n+3$ 的末两位为 $11$，其余部分分别是 $n$ 左移三位、左移两位，故两者都等于 $2+@omega(n)$，正确。`,
        `D：$2^n-1=2^0+2^1+@cdots+2^{n-1}$，二进制为 $n$ 个 $1$，故 $@omega(2^n-1)=n$，正确。`,
        `综上，选 ACD。`
      ],
      hints: ['把 $@omega(n)$ 理解为 $n$ 的二进制表示中 $1$ 的个数。', '判断恒等式可先看二进制位移，再用特殊值否定错误选项。'],
      pitfalls: ['B 中用特殊值验证时取 $n=1$ 等不具代表性的值。', 'C 中把 $8n+5$ 与 $4n+3$ 的位数关系弄错。'],
      takeaway: '二进制表示下，乘 $2$ 是左移补 $0$，加常数要先看是否产生进位；新定义题优先翻译成“数 $1$ 的个数”。',
      knowledge: ['k-count']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 2,
      stem: `已知双曲线 $@frac{x^2}{a^2}-@frac{y^2}{b^2}=1$（$a>0,b>0$）的离心率为 $2$，则该双曲线的渐近线方程为 ________ .`,
      answer: `$y=@pm@sqrt3x$`,
      accept: ['y=±√3x', 'y=±√3 x', 'y=√3x或y=-√3x', '±√3x'],
      solution: [
        `由 $e=@frac{c}{a}=2$ 得 $c^2=4a^2$。`,
        `由 $c^2=a^2+b^2$ 得 $b^2=3a^2$，即 $@frac{b}{a}=@sqrt3$。`,
        `双曲线的渐近线为 $y=@pm@frac{b}{a}x=@pm@sqrt3x$。`
      ],
      hints: ['先由离心率求 $@frac{b}{a}$，不必分别求出 $a,b$。', '渐近线方程是 $y=@pm@frac{b}{a}x$。'],
      pitfalls: ['把渐近线写成 $y=@pm@frac{a}{b}x$。', '由 $e=2$ 误得 $@frac{b}{a}=2$。'],
      takeaway: '双曲线中 $e^2=1+@frac{b^2}{a^2}$，渐近线斜率由 $@frac{b}{a}$ 决定。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 3,
      stem: `写出一个同时具有下列性质①②③的函数 $f(x)$：________ . ① $f(x_1x_2)=f(x_1)f(x_2)$；② 当 $x@in(0,+@infty)$ 时，$f'(x)>0$；③ $f'(x)$ 是奇函数。`,
      answer: `$f(x)=x^4$`,
      accept: ['f(x)=x^4', 'x^4', 'f(x)=x^2', 'x^2', 'f(x)=x^6', 'x^6'],
      solution: [
        `取 $f(x)=x^4$，其定义域为 $@mathbb{R}$，可逐条验证。`,
        `验证①：$f(x_1x_2)=(x_1x_2)^4=x_1^4x_2^4=f(x_1)f(x_2)$。`,
        `验证②：$f'(x)=4x^3$，当 $x>0$ 时 $f'(x)>0$。`,
        `验证③：$f'(-x)=-4x^3=-f'(x)$，故 $f'(x)$ 是奇函数。`,
        `所以 $f(x)=x^4$ 满足全部条件（答案不唯一，$f(x)=x^{2n}$，$n@in@mathbb{N}^*$ 都可以）。`
      ],
      hints: ['①提示幂函数：$f(x)=x^m$ 时 $f(x_1x_2)=f(x_1)f(x_2)$。', '③要求导函数为奇函数，偶次幂正好满足。'],
      pitfalls: [`取 $f(x)=x^3$，此时 $f'=3x^2$ 是偶函数，不满足③。`, '取 $f(x)=e^x$，不满足①。'],
      takeaway: '开放题从熟悉的函数模型入手：幂函数满足乘性条件，偶次幂的导数为奇函数。',
      knowledge: ['k-fn-elem', 'k-dv-monotone']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 3,
      stem: `已知向量 $@vec a+@vec b+@vec c=@vec0$，$|@vec a|=1$，$|@vec b|=|@vec c|=2$，则 $@vec a@cdot@vec b+@vec b@cdot@vec c+@vec c@cdot@vec a=$ ________ .`,
      answer: `$-@frac{9}{2}$`,
      accept: ['-9/2', '-4.5', '−9/2'],
      solution: [
        `由 $@vec a+@vec b+@vec c=@vec0$，两边平方得 $@vec a^2+@vec b^2+@vec c^2+2(@vec a@cdot@vec b+@vec b@cdot@vec c+@vec c@cdot@vec a)=0$。`,
        `由模长得 $@vec a^2=1$，$@vec b^2=@vec c^2=4$，平方和为 $9$。`,
        `于是 $9+2(@vec a@cdot@vec b+@vec b@cdot@vec c+@vec c@cdot@vec a)=0$。`,
        `解得 $@vec a@cdot@vec b+@vec b@cdot@vec c+@vec c@cdot@vec a=-@frac92$。`
      ],
      hints: ['三个向量和为 $@vec0$，整体平方是常用技巧。', '展开式中交叉项正好是所求式的 $2$ 倍。'],
      pitfalls: ['平方后漏掉因子 $2$，结果算成 $-9$。', '把 $@vec a^2$ 当成 $|@vec a|$。'],
      takeaway: '向量和为零时，整体平方把模长与两两数量积联系起来。',
      knowledge: ['k-vec-dot']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `记 $S_n$ 是公差不为 $0$ 的等差数列 $@left@{a_n@right@}$ 的前 $n$ 项和，若 $a_3=S_5$，$a_2a_4=S_4$。（1）求数列 $@left@{a_n@right@}$ 的通项公式 $a_n$；（2）求使 $S_n>a_n$ 成立的 $n$ 的最小值。`,
      answer: `（1）$a_n=2n-6$；（2）$7$`,
      accept: [],
      solution: [
        `（1）由 $S_5=5a_3$ 及 $a_3=S_5$ 得 $a_3=5a_3$，故 $a_3=0$。`,
        `设公差为 $d@ne0$，则 $a_2=-d$，$a_4=d$，$S_4=a_1+a_2+a_3+a_4=-2d$。`,
        `由 $a_2a_4=S_4$ 得 $-d^2=-2d$，结合 $d@ne0$ 得 $d=2$。`,
        `所以 $a_n=a_3+(n-3)d=2n-6$。`,
        `（2）$a_1=-4$，$S_n=@frac{n(-4+2n-6)}{2}=n^2-5n$。`,
        `由 $S_n>a_n$ 得 $n^2-5n>2n-6$，即 $(n-1)(n-6)>0$，解得 $n<1$ 或 $n>6$，故正整数 $n$ 的最小值为 $7$。`
      ],
      hints: ['先用 $S_5=5a_3$ 求出 $a_3=0$，可大幅减少未知量。', '第（2）问解出 $S_n$ 后作差因式分解，注意 $n$ 为正整数。'],
      pitfalls: ['把 $S_5$ 写成 $5a_1$。', '解 $(n-1)(n-6)>0$ 时写成 $1<n<6$。', '忘记 $n$ 只能取正整数，答成 $n>6$。'],
      takeaway: '等差数列中用 $S_{2k-1}=(2k-1)a_k$ 求中间项最快捷；数列不等式最后要回到正整数取值。',
      knowledge: ['k-seq-basic', 'k-seq-sum']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 3,
      stem: `在 $@triangle ABC$ 中，角 $A,B,C$ 所对的边长为 $a,b,c$，$b=a+1$，$c=a+2$。（1）若 $2@sin C=3@sin A$，求 $@triangle ABC$ 的面积；（2）是否存在正整数 $a$，使得 $@triangle ABC$ 为钝角三角形？若存在，求出 $a$ 的值；若不存在，说明理由。`,
      answer: `（1）$@frac{15@sqrt7}{4}$；（2）存在，$a=2$`,
      accept: [],
      solution: [
        `（1）由正弦定理，$2@sin C=3@sin A$ 等价于 $2c=3a$。`,
        `代入 $c=a+2$ 得 $2(a+2)=3a$，故 $a=4$，从而 $b=5$，$c=6$。`,
        `半周长 $p=@frac{15}{2}$，由海伦公式 $S=@sqrt{@frac{15}{2}@cdot@frac{7}{2}@cdot@frac{5}{2}@cdot@frac{3}{2}}=@frac{15@sqrt7}{4}$。`,
        `（2）最长边为 $c=a+2$，钝角三角形需 $a^2+b^2<c^2$。`,
        `即 $a^2+(a+1)^2<(a+2)^2$，化简得 $a^2-2a-3<0$，解得 $-1<a<3$。`,
        `正整数 $a$ 只能取 $1$ 或 $2$；$a=1$ 时三边为 $1,2,3$，不能构成三角形，故 $a=2$（此时 $2^2+3^2<4^2$ 确实为钝角三角形）。`
      ],
      hints: ['正弦定理把角的关系转化为边的关系。', '钝角一定对最长边，用余弦定理的符号或勾股比较。', '求出 $a$ 的范围后要检验三边能否构成三角形。'],
      pitfalls: ['把 $2@sin C=3@sin A$ 转化为 $2a=3c$，比例写反。', '只解出 $a<3$ 就得 $a=1,2$，忽略 $a=1$ 时三边退化。'],
      takeaway: '解三角形：角化边用正弦定理，钝角判断用最长边的平方与另两边平方和比较，最后检验三角形存在性。',
      knowledge: ['k-tr-solve', 'k-tr-identity']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 3,
      stem: `在四棱锥 $Q-ABCD$ 中，底面 $ABCD$ 是正方形，若 $AD=2$，$QA=QD=@sqrt5$，$QC=3$。（1）求证：平面 $QAD@perp$ 平面 $ABCD$；（2）求二面角 $B-QD-A$ 的平面角的余弦值。`,
      answer: `（1）证明见解析；（2）$@frac23$`,
      accept: [],
      solution: [
        `（1）取 $AD$ 的中点 $O$，连接 $QO,OC$。由 $QA=QD$ 得 $QO@perp AD$，且 $QO=@sqrt{QA^2-AO^2}=@sqrt{5-1}=2$。`,
        `正方形中 $OD=1$，$DC=2$，故 $OC=@sqrt{1+4}=@sqrt5$；又 $QC=3$，所以 $QO^2+OC^2=4+5=9=QC^2$，得 $QO@perp OC$。`,
        `因为 $AD@cap OC=O$，所以 $QO@perp$ 平面 $ABCD$，又 $QO@subset$ 平面 $QAD$，故平面 $QAD@perp$ 平面 $ABCD$。`,
        `（2）以 $O$ 为原点，$@overrightarrow{OD}$ 为 $x$ 轴、平行于 $@overrightarrow{AB}$ 的方向为 $y$ 轴、$@overrightarrow{OQ}$ 为 $z$ 轴建系：$D(1,0,0)$，$A(-1,0,0)$，$B(-1,2,0)$，$Q(0,0,2)$。`,
        `平面 $QAD$ 的法向量取 $@vec{n_1}=(0,1,0)$；由 $@overrightarrow{QB}=(-1,2,-2)$、$@overrightarrow{QD}=(1,0,-2)$ 得平面 $BQD$ 的法向量 $@vec{n_2}=(2,2,1)$（满足与两向量数量积均为 $0$）。`,
        `所以 $@cos@theta=@frac{|@vec{n_1}@cdot@vec{n_2}|}{|@vec{n_1}||@vec{n_2}|}=@frac{2}{1@times3}=@frac23$，即二面角的余弦值为 $@frac23$。`
      ],
      hints: ['第（1）问取 $AD$ 中点，证明 $QO$ 垂直于底面内两条相交直线。', '发现 $QO^2+OC^2=QC^2$ 是证明 $QO@perp OC$ 的关键。', '建系时把 $O$ 放在原点，三条坐标轴两两垂直。'],
      pitfalls: ['只证 $QO@perp AD$ 就说 $QO@perp$ 平面 $ABCD$，缺少与 $OC$ 垂直。', '建系后点 $B$ 的坐标写错（$y$ 方向取反）。', '把二面角的余弦值与正弦值混淆。'],
      takeaway: '面面垂直的证明转化为线面垂直：找一条在其中一个面内、垂直于交线的直线，再证它垂直于另一个面内的相交直线。',
      knowledge: ['k-so-solid', 'k-so-angle']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 5,
      stem: `已知椭圆 $C:@frac{x^2}{a^2}+@frac{y^2}{b^2}=1$（$a>b>0$）的右焦点为 $F(@sqrt2,0)$，且离心率为 $@frac{@sqrt6}{3}$。（1）求 $C$ 的方程；（2）设 $M,N$ 是 $C$ 上的两点，直线 $MN$ 与曲线 $x^2+y^2=b^2$（$x>0$）相切，证明：$M,N,F$ 三点共线的充要条件是 $|MN|=@sqrt3$。`,
      answer: `（1）$@frac{x^2}{3}+y^2=1$；（2）证明见解析`,
      accept: [],
      solution: [
        `（1）由 $c=@sqrt2$，$e=@frac{c}{a}=@frac{@sqrt6}{3}$ 得 $a=@sqrt3$，故 $b^2=a^2-c^2=1$，所以 $C:@frac{x^2}{3}+y^2=1$。`,
        `（2）当 $MN$ 斜率不存在时，$MN:x=1$，与椭圆交于 $@left(1,@pm@sqrt{@frac23}@right)$，$|MN|=@frac{2@sqrt6}{3}@ne@sqrt3$，且 $F(@sqrt2,0)$ 不在 $MN$ 上，命题成立。`,
        `当 $MN:y=kx+m$ 时，由它与 $x^2+y^2=1$（$x>0$）相切得 $@frac{|m|}{@sqrt{1+k^2}}=1$，即 $m^2=1+k^2$。`,
        `代入椭圆得 $(1+3k^2)x^2+6kmx+3m^2-3=0$，由韦达定理得 $|MN|^2=(1+k^2)@frac{24k^2}{(1+3k^2)^2}$。`,
        `若 $M,N,F$ 共线，则 $F(@sqrt2,0)$ 在 $MN$ 上，$m=-@sqrt2k$，与 $m^2=1+k^2$ 联立得 $k^2=1$，代入上式得 $|MN|^2=3$，即 $|MN|=@sqrt3$。`,
        `反之，若 $|MN|=@sqrt3$，则 $@frac{24k^2(1+k^2)}{(1+3k^2)^2}=3$，化简得 $(k^2-1)^2=0$，故 $k^2=1$，$m^2=2$；又切点在 $x>0$ 一侧，即 $-@frac{km}{1+k^2}>0$，所以 $m=-@sqrt2k$，直线 $MN$ 过 $F(@sqrt2,0)$，$M,N,F$ 三点共线。`
        ],
      hints: ['第（1）问由 $c$ 与 $e$ 直接求 $a$、$b$。', '相切条件转化为圆心到直线的距离等于半径，得到 $m^2=1+k^2$。', '弦长用韦达定理整体表示，再与“过 $F$”的条件对照。'],
      pitfalls: ['忽略斜率不存在的特殊情况。', '把相切条件写成 $m^2=1+k^2$ 之外的式子。', '由 $m^2=2$ 取两个符号时不检验切点横坐标 $x>0$。'],
      takeaway: '解析几何中的充要条件证明要“双向”书写：正向用共线得参数关系，反向用弦长反解参数，并补上特殊斜率情形。',
      knowledge: ['k-ag-conic', 'k-ag-chord']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 5,
      stem: `定义：若存在正整数 $T$，使得 $a_{n+T}=a_n$ 对一切正整数 $n$ 都成立，则称数列 $@left@{a_n@right@}$ 为周期数列，并把满足条件的最小正整数 $T$ 称为它的基本周期。（1）判断数列 $a_n=2+(-1)^n$ 是否为周期数列，若是，求出基本周期；（2）已知数列 $@left@{a_n@right@}$ 满足 $a_1=1$，$a_2=2$，$a_{n+2}=a_{n+1}-a_n$（$n@ge1$），求 $a_{2021}$ 与 $S_{2021}$；（3）若数列 $@left@{a_n@right@}$ 是 $3$-周期数列，且 $a_{n+2}=a_{n+1}+a_n$，证明：$a_n=0$ 对一切正整数 $n$ 成立。`,
      answer: `（1）是周期数列，基本周期为 $2$；（2）$a_{2021}=-2$，$S_{2021}=1$；（3）证明见解析`,
      accept: [],
      solution: [
        `（1）$a_n=2+(-1)^n$ 的各项依次为 $1,3,1,3,@dots$，即 $a_{n+2}=a_n$，而 $a_{n+1}@ne a_n$，故它是周期数列，基本周期为 $2$。`,
        `（2）依次计算：$a_3=a_2-a_1=1$，$a_4=a_3-a_2=-1$，$a_5=a_4-a_3=-2$，$a_6=a_5-a_4=-1$，$a_7=a_6-a_5=1$，$a_8=a_7-a_6=2$。`,
        `数列从 $a_1$ 起以 $6$ 为周期重复，且一个周期内六项之和为 $1+2+1-1-2-1=0$。`,
        `由 $2021=6@times336+5$ 得 $a_{2021}=a_5=-2$，$S_{2021}=336@times0+(a_1+a_2+a_3+a_4+a_5)=1$。`,
        `（3）由 $3$-周期性得 $a_4=a_1$，$a_5=a_2$。又 $a_3=a_1+a_2$，故 $a_4=a_3+a_2=a_1+2a_2$，与 $a_4=a_1$ 比较得 $a_2=0$，从而 $a_3=a_1$。`,
        `再由 $a_5=a_4+a_3=2a_1$ 及 $a_5=a_2=0$ 得 $a_1=0$，于是 $a_3=0$；由 $a_1=a_2=a_3=0$ 及递推式可知 $a_n=0$ 对一切正整数 $n$ 成立。`
      ],
      hints: ['第（1）问只需写出前几项，观察重复规律并说明周期最小。', '第（2）问先算出一个周期内的所有项，再用 $2021$ 除以周期看余数。', '第（3）问把 $3$-周期性写成 $a_4=a_1$、$a_5=a_2$，再与递推式联立消元。'],
      pitfalls: ['第（1）问只说明 $2$ 是周期，未说明 $1$ 不是周期。', '第（2）问把 $2021$ 除以 $6$ 的余数算错，或把前 $5$ 项之和写成前 $6$ 项之和。', '第（3）问只验证 $a_1=a_2=0$，没有说明后续所有项都为 $0$。'],
      takeaway: '新定义数列题先把定义翻译成方程：周期给出 $a_{n+T}=a_n$，再用递推式列方程组消元；求和时按“整周期 + 余项”拆分。',
      knowledge: ['k-seq-basic', 'k-seq-recursion']
    }
  ]
});
