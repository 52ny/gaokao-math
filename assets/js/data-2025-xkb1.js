/* 2025 年普通高等学校招生全国统一考试（新高考Ⅰ卷）数学 · 题库数据
 * 公式约定：LaTeX 反斜杠一律写成 @；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: '2025-xkb1',
  title: '2025 年普通高等学校招生全国统一考试（新高考Ⅰ卷）',
  short: '2025 新高考Ⅰ',
  year: 2025, region: '新高考Ⅰ卷', kind: 'real', duration: 150,
  note: '19 题结构：8 单选 + 3 多选 + 3 填空 + 5 解答；第19题为新定义压轴',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `设全集 $U=@left@{x@mid x@text{是小于}9@text{的正整数}@right@}$，集合 $A=@left@{1,3,5@right@}$，则 $@complement_U A$ 中元素的个数为`,
      options: [
        { k: 'A', t: `$0$` },
        { k: 'B', t: `$3$` },
        { k: 'C', t: `$5$` },
        { k: 'D', t: `$8$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `小于 $9$ 的正整数为 $1,2,3,4,5,6,7,8$，所以 $U=@left@{1,2,3,4,5,6,7,8@right@}$。`,
        `从 $U$ 中去掉 $A=@left@{1,3,5@right@}$，得 $@complement_U A=@left@{2,4,6,7,8@right@}$。`,
        `其中共有 $5$ 个元素，故选 C。`
      ],
      hints: ['先把全集用列举法写清楚。', '补集是在全集中去掉集合 $A$ 的元素。'],
      pitfalls: ['把全集误当成 $@left@{1,2,@dots,9@right@}$，多算了 $9$。', '把补集算成 $A$ 本身或漏掉元素。'],
      takeaway: '集合补集题：先列举全集，再逐个删去已知集合的元素。',
      knowledge: ['k-set-ops']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 1,
      stem: `$(1+5i)i$ 的虚部为`,
      options: [
        { k: 'A', t: `$-1$` },
        { k: 'B', t: `$0$` },
        { k: 'C', t: `$1$` },
        { k: 'D', t: `$6$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `展开：$(1+5i)i=i+5i^2$。`,
        `由 $i^2=-1$ 得 $i+5i^2=i-5=-5+i$。`,
        `所以虚部为 $1$，故选 C。`
      ],
      hints: ['把 $i$ 乘进括号，逐项计算。', '牢记 $i^2=-1$。'],
      pitfalls: ['把 $5i@cdot i$ 算成 $5i^2=5$，符号弄反。', '把虚部写成 $i$ 或把实部 $-5$ 当成虚部。'],
      takeaway: '复数乘法先展开，再用 $i^2=-1$ 合并，最后读虚部（不含 $i$）。',
      knowledge: ['k-cx-basic']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 2,
      stem: `若双曲线 $C$ 的虚轴长是实轴长的 $@sqrt7$ 倍，则 $C$ 的离心率为`,
      options: [
        { k: 'A', t: `$@sqrt2$` },
        { k: 'B', t: `$2$` },
        { k: 'C', t: `$@sqrt7$` },
        { k: 'D', t: `$2@sqrt2$` }
      ],
      answer: 'D',
      accept: [],
      solution: [
        `设实半轴长为 $a$，虚半轴长为 $b$。虚轴长是实轴长的 $@sqrt7$ 倍，即 $2b=@sqrt7@cdot2a$，所以 $b=@sqrt7a$。`,
        `双曲线中 $c^2=a^2+b^2=a^2+7a^2=8a^2$，故 $c=2@sqrt2a$。`,
        `离心率 $e=@frac ca=2@sqrt2$，故选 D。`
      ],
      hints: ['虚轴长是 $2b$，实轴长是 $2a$，先写出 $b$ 与 $a$ 的关系。', '双曲线用 $c^2=a^2+b^2$，不要与椭圆的 $c^2=a^2-b^2$ 混淆。'],
      pitfalls: ['把虚轴长直接当成 $b$，漏掉因子 $2$。', '误用椭圆关系 $c^2=a^2-b^2$。'],
      takeaway: '双曲线离心率：由轴长关系定 $b/a$，再用 $c^2=a^2+b^2$ 求 $e$。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 2,
      stem: `若点 $(a,0)(a>0)$ 是函数 $y=2@tan@left(x-@frac{@pi}{3}@right)$ 的图象的一个对称中心，则 $a$ 的最小值为`,
      options: [
        { k: 'A', t: `$@frac{@pi}{6}$` },
        { k: 'B', t: `$@frac{@pi}{3}$` },
        { k: 'C', t: `$@frac{@pi}{2}$` },
        { k: 'D', t: `$@frac{4@pi}{3}$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `正切函数 $y=@tan x$ 的对称中心为 $(k@pi,0)$ 以及 $(@frac{@pi}{2}+k@pi,0)$，合并写成 $(@frac{k@pi}{2},0)$，$k@in@mathbb{Z}$。`,
        `令 $x-@frac{@pi}{3}=@frac{k@pi}{2}$，得对称中心横坐标 $x=@frac{@pi}{3}+@frac{k@pi}{2}$。`,
        `所以 $a=@frac{@pi}{3}+@frac{k@pi}{2}$。由 $a>0$，当 $k=0$ 时 $a$ 取最小值 $@frac{@pi}{3}$，故选 B。`
      ],
      hints: ['先写出 $@tan x$ 的全部对称中心。', '把 $x-@frac{@pi}{3}$ 看成一个整体，再解出 $x$。', '在 $a>0$ 下取最小的 $k$。'],
      pitfalls: ['只写 $(k@pi,0)$，漏掉 $(@frac{@pi}{2}+k@pi,0)$ 这类对称中心。', '取 $k=-1$ 得负值，不满足 $a>0$。'],
      takeaway: '正切型对称中心：解相位 $=@frac{k@pi}{2}$，再按范围取最小正值。',
      knowledge: ['k-tr-graph']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 2,
      stem: `设 $f(x)$ 是定义在 $@mathbb{R}$ 上且周期为 $2$ 的偶函数，当 $2@le x@le3$ 时，$f(x)=5-2x$，则 $f@left(-@frac34@right)=$`,
      options: [
        { k: 'A', t: `$-@frac12$` },
        { k: 'B', t: `$-@frac14$` },
        { k: 'C', t: `$@frac14$` },
        { k: 'D', t: `$@frac12$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `由偶函数得 $f@left(-@frac34@right)=f@left(@frac34@right)$。`,
        `由周期为 $2$ 得 $f@left(@frac34@right)=f@left(@frac34+2@right)=f@left(@frac{11}{4}@right)$。`,
        `因为 $@frac{11}{4}=2.75@in@left[2,3@right]$，所以 $f@left(@frac{11}{4}@right)=5-2@cdot@frac{11}{4}=5-@frac{11}{2}=-@frac12$。`,
        `故 $f@left(-@frac34@right)=-@frac12$，选 A。`
      ],
      hints: ['先用偶性把负自变量变成正数。', '再用周期 $2$ 把自变量搬到已知区间 $@left[2,3@right]$。'],
      pitfalls: ['直接代入 $f(x)=5-2x$ 而不先转化自变量。', '周期用错方向，把 $@frac34$ 减 $2$ 得到负数后无法继续。'],
      takeaway: '抽象函数求值：偶性去负号，周期性把自变量压回已知区间。',
      knowledge: ['k-fn-prop']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 3,
      stem: `帆船比赛中，视风风速对应的向量是真风风速对应的向量与船行风风速对应的向量之和，而船行风风速对应的向量与船速对应的向量大小相等、方向相反。已知某时刻视风风速对应的有向线段起点为 $(3,3)$、终点为 $(0,2)$，船速对应的有向线段起点为 $(2,0)$、终点为 $(3,3)$（单位：$@text{m/s}$）。风力等级表：$2$ 级轻风 $1.6@sim3.3$，$3$ 级微风 $3.4@sim5.4$，$4$ 级和风 $5.5@sim7.9$，$5$ 级劲风 $8.0@sim10.7$。则该时刻的真风为`,
      options: [
        { k: 'A', t: `轻风` },
        { k: 'B', t: `微风` },
        { k: 'C', t: `和风` },
        { k: 'D', t: `劲风` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `视风向量 $=@text{终点}-@text{起点}=(0,2)-(3,3)=(-3,-1)$。`,
        `船速向量 $=(3,3)-(2,0)=(1,3)$，所以船行风向量 $=-(1,3)=(-1,-3)$。`,
        `由“视风 $=$ 真风 $+$ 船行风”得真风向量 $=(-3,-1)-(-1,-3)=(-2,2)$。`,
        `真风风速 $=@sqrt{(-2)^2+2^2}=2@sqrt2@approx2.83$，落在 $1.6@sim3.3$ 内，为轻风，选 A。`
      ],
      hints: ['有向线段对应的向量等于终点坐标减起点坐标。', '船行风与船速方向相反，要取相反向量。', '先由“视风=真风+船行风”解出真风，再求模长查表。'],
      pitfalls: ['把船行风直接当成船速，方向没有取反。', '向量相减顺序颠倒，得到 $(2,-2)$ 等错误结果。', '求出模长后不查表，凭感觉选等级。'],
      takeaway: '向量应用题：终点减起点得向量，再按物理关系列向量等式，最后用模长对照等级表。',
      knowledge: ['k-vec-linear', 'k-vec-coord']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 3,
      stem: `已知圆 $x^2+(y+2)^2=r^2(r>0)$ 上到直线 $y=@sqrt3x+2$ 的距离为 $1$ 的点有且仅有 $2$ 个，则 $r$ 的取值范围是`,
      options: [
        { k: 'A', t: `$(0,1)$` },
        { k: 'B', t: `$(1,3)$` },
        { k: 'C', t: `$(3,+@infty)$` },
        { k: 'D', t: `$(0,+@infty)$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `圆心的坐标为 $(0,-2)$，直线化为 $@sqrt3x-y+2=0$。`,
        `圆心到直线的距离 $d=@frac{|0+2+2|}{@sqrt{3+1}}=@frac42=2$。`,
        `到直线距离为 $1$ 的点位于两条平行线上，这两条平行线到圆心的距离分别为 $2-1=1$ 与 $2+1=3$。`,
        `圆与距离为 $1$ 的平行线：$r>1$ 时交于 $2$ 点，$r=1$ 时交于 $1$ 点；圆与距离为 $3$ 的平行线：$r<3$ 时无交点，$r=3$ 时交于 $1$ 点。`,
        `要使总点数恰为 $2$，必须 $1<r<3$，故选 B。`
      ],
      hints: ['把“到直线距离为 $1$”翻译成两条平行线。', '先算圆心到原直线的距离，再算圆心到两条平行线的距离。', '分别讨论圆与两条平行线的交点个数。'],
      pitfalls: ['只考虑一条平行线，得到 $r>1$。', '把 $r=3$ 也算进去，此时总点数为 $3$。', '忘记圆心是 $(0,-2)$ 而不是 $(0,2)$。'],
      takeaway: '圆上到定直线距离为定值的点：转化为圆与两条平行线的交点计数。',
      knowledge: ['k-ag-line']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 4,
      stem: `已知实数 $x,y,z$ 满足 $2+@log_2 x=3+@log_3 y=5+@log_5 z$，则 $x,y,z$ 的大小关系不可能是`,
      options: [
        { k: 'A', t: `$x>y>z$` },
        { k: 'B', t: `$x>z>y$` },
        { k: 'C', t: `$y>x>z$` },
        { k: 'D', t: `$y>z>x$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `设公共值为 $t$，则 $x=2^{t-2}$，$y=3^{t-3}$，$z=5^{t-5}$。`,
        `取对数得 $@ln x=(t-2)@ln2$，$@ln y=(t-3)@ln3$，$@ln z=(t-5)@ln5$，比较 $x,y,z$ 即比较这三条关于 $t$ 的一次函数。`,
        `若 $x>z$，则 $(t-2)@ln2>(t-5)@ln5$，移项得 $t(@ln5-@ln2)<5@ln5-2@ln2$，即 $t<@frac{5@ln5-2@ln2}{@ln5-@ln2}$。`,
        `若 $z>y$，则 $(t-5)@ln5>(t-3)@ln3$，即 $t>@frac{5@ln5-3@ln3}{@ln5-@ln3}$。`,
        `取近似值 $@ln2@approx0.693$，$@ln3@approx1.099$，$@ln5@approx1.609$，则 $@frac{5@ln5-2@ln2}{@ln5-@ln2}@approx@frac{8.045-1.386}{0.916}@approx7.27$，而 $@frac{5@ln5-3@ln3}{@ln5-@ln3}@approx@frac{8.045-3.297}{0.510}@approx9.31$。`,
        `所以 $x>z$ 要求 $t<7.27$，$z>y$ 要求 $t>9.31$，二者矛盾，故 $x>z>y$ 不可能。`,
        `其余三种都能取到：$t=0$ 时 $x>y>z$；$t=5$ 时 $y>x>z$；$t=8$ 时 $y>z>x$。故选 B。`
      ],
      hints: ['把公共值设为 $t$，将 $x,y,z$ 都写成 $t$ 的指数形式。', '取对数后，比较三条一次函数的大小。', '“不可能”只需找出一对互相矛盾的比较条件，再验证其余三种可取。'],
      pitfalls: ['直接用 $y=3^{t-3}$ 与 $z=5^{t-5}$ 比较时忽略指数底数不同。', '只验证一种情况就下结论。', '取对数后不等号方向在移项时写反。'],
      takeaway: '指对混合比较：设公共值、取对数化一次函数，再比较斜率与交点。',
      knowledge: ['k-fn-elem']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 4,
      stem: `在正三棱柱 $ABC-A_1B_1C_1$ 中，$D$ 为 $BC$ 的中点，则`,
      options: [
        { k: 'A', t: `$AD@perp A_1C$` },
        { k: 'B', t: `$BC@perp$ 平面 $AA_1D$` },
        { k: 'C', t: `$AD@parallel A_1B_1$` },
        { k: 'D', t: `$CC_1@parallel$ 平面 $AA_1D$` }
      ],
      answer: 'BD',
      accept: [],
      solution: [
        `建立坐标系：取 $A(0,0,0)$，$B(2,0,0)$，$C(1,@sqrt3,0)$，$A_1(0,0,h)$，$B_1(2,0,h)$，$C_1(1,@sqrt3,h)$，则 $D@left(@frac32,@frac{@sqrt3}{2},0@right)$。`,
        `对 A：$@overrightarrow{AD}=@left(@frac32,@frac{@sqrt3}{2},0@right)$，$@overrightarrow{A_1C}=(1,@sqrt3,-h)$，数量积为 $@frac32+@frac32=3@ne0$，故 A 错。`,
        `对 B：$@overrightarrow{BC}=(-1,@sqrt3,0)$，而 $@overrightarrow{AA_1}=(0,0,h)$，$@overrightarrow{AD}=@left(@frac32,@frac{@sqrt3}{2},0@right)$，有 $@overrightarrow{BC}@cdot@overrightarrow{AA_1}=0$，$@overrightarrow{BC}@cdot@overrightarrow{AD}=-@frac32+@frac32=0$，故 $BC@perp$ 平面 $AA_1D$，B 对。`,
        `对 C：$@overrightarrow{AD}$ 的横、纵坐标之比为 $@sqrt3:1$，而 $@overrightarrow{A_1B_1}=(2,0,0)$ 沿 $x$ 轴方向，二者不平行，C 错。`,
        `对 D：$@overrightarrow{CC_1}=(0,0,h)@parallel@overrightarrow{AA_1}$，且 $C$ 不在平面 $AA_1D$ 内，故 $CC_1@parallel$ 平面 $AA_1D$，D 对。`,
        `综上，选 BD。`
      ],
      hints: ['正三棱柱底面是正三角形，取坐标时让 $AB$ 沿 $x$ 轴最方便。', '判断线面垂直：直线方向向量与平面内两条相交直线的方向向量都垂直。', '判断线面平行：方向向量与平面内某条直线平行，且直线不在平面内。'],
      pitfalls: ['只验证与一条直线垂直就断言线面垂直。', '证明线面平行时忘记说明直线不在平面内。', '把 $A_1B_1$ 的方向误当成 $AD$ 的方向。'],
      takeaway: '空间位置关系：建系后用数量积判垂直，用方向向量是否成比例判平行。',
      knowledge: ['k-so-parallel']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 4,
      stem: `设抛物线 $C:y^2=6x$ 的焦点为 $F$，过 $F$ 的直线交 $C$ 于 $A,B$ 两点，过 $A$ 作准线 $l:x=-@frac32$ 的垂线，垂足为 $D$，过 $F$ 且与 $AB$ 垂直的直线交 $l$ 于点 $E$，则`,
      options: [
        { k: 'A', t: `$|AD|=|AF|$` },
        { k: 'B', t: `$|AE|=|AB|$` },
        { k: 'C', t: `$|AB|@ge6$` },
        { k: 'D', t: `$|AE|@cdot|BE|@ge18$` }
      ],
      answer: 'ACD',
      accept: [],
      solution: [
        `焦点 $F@left(@frac32,0@right)$，准线 $l:x=-@frac32$。设 $AB:x=my+@frac32$，与 $y^2=6x$ 联立得 $y^2-6my-9=0$，故 $y_1+y_2=6m$，$y_1y_2=-9$。`,
        `对 A：由抛物线定义，$|AF|$ 等于 $A$ 到准线的距离，而 $AD$ 正是这段垂线段，所以 $|AD|=|AF|$，A 对。`,
        `对 C：$|AB|=|AF|+|BF|=x_1+@frac32+x_2+@frac32=m(y_1+y_2)+3+3=6m^2+6@ge6$，C 对。`,
        `对 B：取 $m=0$，则 $AB:x=@frac32$，$A@left(@frac32,3@right)$，$B@left(@frac32,-3@right)$，过 $F$ 且垂直于 $AB$ 的直线为 $y=0$，与准线交于 $E@left(-@frac32,0@right)$，此时 $|AE|=@sqrt{9+9}=3@sqrt2$，而 $|AB|=6$，故 B 错。`,
        `对 D：由 $AB$ 的斜率为 $@frac1m$，过 $F$ 的垂线斜率为 $-m$，与 $x=-@frac32$ 交得 $E@left(-@frac32,3m@right)$。`,
        `于是 $|AE|^2=@left(my_1+3@right)^2+@left(y_1-3m@right)^2=(m^2+1)(y_1^2+9)$，同理 $|BE|^2=(m^2+1)(y_2^2+9)$。`,
        `又 $(y_1^2+9)(y_2^2+9)=y_1^2y_2^2+9(y_1^2+y_2^2)+81=81+9(36m^2+18)+81=324(m^2+1)$，所以 $|AE|^2|BE|^2=324(m^2+1)^3$，即 $|AE||BE|=18(m^2+1)^{3/2}@ge18$，D 对。`,
        `综上，选 ACD。`
      ],
      hints: ['过焦点的直线设为 $x=my+@frac32$，可以包含竖直线且避免讨论斜率。', '抛物线上的点到焦点的距离等于到准线的距离。', '求 $|AE|$、$|BE|$ 时把 $E$ 的坐标先写出来，再用 $y_1y_2=-9$ 化简。'],
      pitfalls: ['设 $y=k(x-@frac32)$ 时漏掉竖直线 $x=@frac32$。', '把 $|AD|$ 与 $|AF|$ 的关系记反。', 'D 中展开后没有利用 $y_1+y_2$、$y_1y_2$ 化简。'],
      takeaway: '抛物线焦点弦：设 $x=my+p/2$，用 $y$ 的韦达定理处理弦长与距离乘积。',
      knowledge: ['k-ag-conic', 'k-ag-chord']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 3,
      stem: `在 $@triangle ABC$ 中，角 $A,B,C$ 所对的边分别为 $a,b,c$，已知 $a=@sqrt3$，$b=1$，$A=@frac{@pi}{3}$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$B=@frac{@pi}{6}$` },
        { k: 'B', t: `$c=2$` },
        { k: 'C', t: `$@triangle ABC$ 的面积为 $@frac{@sqrt3}{2}$` },
        { k: 'D', t: `$@triangle ABC$ 外接圆的半径为 $@sqrt3$` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `由正弦定理 $@frac{a}{@sin A}=@frac{b}{@sin B}$，得 $@sin B=@frac{b@sin A}{a}=@frac{1@cdot@frac{@sqrt3}{2}}{@sqrt3}=@frac12$。`,
        `因为 $a>b$，所以 $A>B$，而 $A=@frac{@pi}{3}$，故 $B=@frac{@pi}{6}$，A 对。`,
        `于是 $C=@pi-A-B=@frac{@pi}{2}$，三角形为直角三角形，$c$ 为斜边，$c=@sqrt{a^2+b^2}=@sqrt{3+1}=2$，B 对。`,
        `面积 $S=@frac12ab@sin C=@frac12@cdot@sqrt3@cdot1@cdot1=@frac{@sqrt3}{2}$，C 对。`,
        `外接圆半径 $R=@frac{a}{2@sin A}=@frac{@sqrt3}{2@cdot@frac{@sqrt3}{2}}=1$，故 D 错。`,
        `综上，选 ABC。`
      ],
      hints: ['已知两边及其中一边的对角，先用正弦定理求另一角。', '由大边对大角确定 $B$ 是锐角。', '求出 $C$ 后可判断三角形形状，再算边、面积与外接圆半径。'],
      pitfalls: ['由 $@sin B=@frac12$ 得到 $B=@frac{@pi}{6}$ 或 $@frac{5@pi}{6}$，不结合 $a>b$ 取舍。', '外接圆半径公式漏掉分母中的 $2$。', '面积公式中把 $@sin C$ 写成 $@sin A$。'],
      takeaway: '解三角形多选：正弦定理定角，大边对大角取舍，再用勾股与面积公式逐项验证。',
      knowledge: ['k-tr-solve']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 3,
      stem: `若直线 $y=2x+5$ 是曲线 $y=e^x+x+a$ 的一条切线，则 $a=$ ________ .`,
      answer: `$4$`,
      accept: ['4'],
      solution: [
        `设切点横坐标为 $x_0$。曲线在 $x_0$ 处的切线斜率为 $y'=e^{x_0}+1$。`,
        `切线与 $y=2x+5$ 重合，故斜率相等：$e^{x_0}+1=2$，得 $e^{x_0}=1$，$x_0=0$。`,
        `切点纵坐标同时满足曲线与直线：曲线在 $x_0=0$ 处为 $1+0+a$，直线在 $x=0$ 处为 $5$。`,
        `所以 $1+a=5$，解得 $a=4$。`
      ],
      hints: ['设切点横坐标，切线斜率等于导数值。', '切点既在曲线上，也在切线上，联立两个纵坐标。'],
      pitfalls: ['只让斜率相等，忘记切点坐标也要相等。', '把 $e^0$ 算成 $0$。'],
      takeaway: '切线问题两步：斜率相等定切点，切点坐标同时满足曲线与切线。',
      knowledge: ['k-dv-param']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 3,
      stem: `若一个等比数列的前 $4$ 项和为 $4$，前 $8$ 项和为 $68$，则该数列的公比为 ________ .`,
      answer: `$2$ 或 $-2$`,
      accept: ['2或-2', '±2', '2,-2', '-2或2'],
      solution: [
        `设公比为 $q$。若 $q=1$，则 $S_8=2S_4=8@ne68$，故 $q@ne1$。`,
        `等比数列的片段和满足 $S_8=S_4+q^4S_4=S_4(1+q^4)$。`,
        `代入得 $68=4(1+q^4)$，所以 $1+q^4=17$，$q^4=16$。`,
        `解得 $q=2$ 或 $q=-2$，二者都能使前 $4$ 项和为 $4$，故公比为 $2$ 或 $-2$。`
      ],
      hints: ['先排除 $q=1$。', '利用 $S_8=S_4(1+q^4)$，把片段和与 $q^4$ 联系起来。', '$q^4=16$ 有两个实根，注意不要丢负根。'],
      pitfalls: ['只写 $q=2$，漏掉 $q=-2$。', '忘记先讨论 $q=1$。', '把 $S_8$ 与 $S_4$ 的关系写成 $S_8=2S_4$。'],
      takeaway: '等比数列片段和：$S_{2n}=S_n(1+q^n)$，偶次方程要注意正负两个根。',
      knowledge: ['k-seq-basic', 'k-seq-sum']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 4,
      stem: `一个箱子里有 $5$ 个相同的球，分别标有数字 $1,2,3,4,5$，从中有放回地随机取三次，每次取 $1$ 个球。记 $X$ 为这 $5$ 个球中至少被取出 $1$ 次的球的个数，则 $E(X)=$ ________ .`,
      answer: `$@frac{61}{25}$`,
      accept: ['61/25', '2.44'],
      solution: [
        `令 $X_i$ 表示第 $i$ 号球是否至少被取出一次，取出记为 $1$，未取出记为 $0$，则 $X=X_1+X_2+@cdots+X_5$。`,
        `每次取到第 $i$ 号球的概率为 $@frac15$，三次都取不到第 $i$ 号球的概率为 $@left(@frac45@right)^3=@frac{64}{125}$。`,
        `所以 $P(X_i=1)=1-@frac{64}{125}=@frac{61}{125}$，即 $E(X_i)=@frac{61}{125}$。`,
        `由期望的线性性质，$E(X)=5@cdot@frac{61}{125}=@frac{61}{25}$。`
      ],
      hints: ['不要直接求 $X$ 的分布列，先把 $X$ 拆成五个 $0$-$1$ 变量之和。', '每个球是否出现，用“至少一次”的对立事件“三次都没取到”求概率。'],
      pitfalls: ['把 $X$ 当成二项分布，错误使用 $E(X)=np$。', '用不放回模型计算概率。', '忘记乘以球的总个数 $5$。'],
      takeaway: '计数型随机变量的期望：拆成指示变量，用线性性质逐项求概率再相加。',
      knowledge: ['k-ps-expect', 'k-ps-dist']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `为研究某疾病与超声波检查结果的关系，从做过超声波检查的人群中随机调查了 $1000$ 人，得到如下列联表：患该疾病者中，检查结果正常 $20$ 人、不正常 $180$ 人，合计 $200$ 人；未患该疾病者中，正常 $780$ 人、不正常 $20$ 人，合计 $800$ 人；检查结果正常合计 $800$ 人、不正常合计 $200$ 人。（1）记超声波检查结果不正常者患该疾病的概率为 $p$，求 $p$ 的估计值；（2）根据小概率值 $@alpha=0.001$ 的独立性检验，分析超声波检查结果是否与患该疾病有关。附：$@chi^2=@frac{n(ad-bc)^2}{(a+b)(c+d)(a+c)(b+d)}$，临界值 $10.828$。`,
      answer: `（1）$@hat p=0.9$；（2）$@chi^2=765.625>10.828$，有 99.9% 的把握认为超声波检查结果与患该疾病有关。`,
      accept: [],
      solution: [
        `（1）检查结果不正常者共 $200$ 人，其中患该疾病的有 $180$ 人，所以 $p$ 的估计值 $@hat p=@frac{180}{200}=0.9$。`,
        `（2）取 $a=20$，$b=180$，$c=780$，$d=20$，$n=1000$。`,
        `计算 $ad-bc=20@times20-180@times780=400-140400=-140000$，平方得 $1.96@times10^{10}$。`,
        `分母 $(a+b)(c+d)(a+c)(b+d)=200@times800@times800@times200=2.56@times10^{10}$。`,
        `所以 $@chi^2=@frac{1000@times1.96@times10^{10}}{2.56@times10^{10}}=765.625$。`,
        `因为 $765.625>10.828$，故在 $@alpha=0.001$ 下拒绝独立性假设，即有 99.9% 的把握认为超声波检查结果与患该疾病有关。`
      ],
      hints: ['先明确列联表中 $a,b,c,d$ 各代表哪一格。', '代入公式前先把 $ad-bc$ 算准，注意正负号。', '把小概率值与临界值比较，写结论时要带“把握程度”。'],
      pitfalls: ['把 $a,b,c,d$ 的位置弄错，导致 $ad-bc$ 算错。', '分母漏乘其中一个合计。', '结论写成“一定有关”，规范说法是“有 99.9% 的把握认为有关”。'],
      takeaway: '独立性检验：列联表定位 $a,b,c,d$，代公式算 $@chi^2$，再与临界值比较并规范表述结论。',
      knowledge: ['k-ps-sampling', 'k-ps-stat']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 4,
      stem: `设数列 $@left@{a_n@right@}$ 满足 $a_1=3$，$@frac{a_{n+1}}{n}=@frac{a_n}{n+1}+@frac{1}{n(n+1)}$。（1）证明：$@left@{n a_n@right@}$ 为等差数列；（2）设 $f(x)=a_1x+a_2x^2+@cdots+a_mx^m$，求 $f'(-2)$。`,
      answer: `（1）证明见解析；（2）$@frac{7-(3m+7)(-2)^m}{9}$`,
      accept: [],
      solution: [
        `（1）将条件两边同乘 $n(n+1)$，得 $(n+1)a_{n+1}=n a_n+1$。令 $b_n=n a_n$，则 $b_{n+1}-b_n=1$，所以 $@left@{b_n@right@}$ 是以 $b_1=3$ 为首项、$1$ 为公差的等差数列。`,
        `（2）由（1）得 $b_n=3+(n-1)=n+2$，所以 $a_n=@frac{n+2}{n}$。`,
        `对 $f(x)=@sum_{k=1}^{m}a_kx^k$ 求导，得 $f'(x)=@sum_{k=1}^{m}k a_kx^{k-1}=@sum_{k=1}^{m}(k+2)x^{k-1}$。`,
        `记 $r=-2$，$S=f'(-2)=@sum_{k=1}^{m}(k+2)r^{k-1}=3+4r+5r^2+@cdots+(m+2)r^{m-1}$。两边乘 $r$ 后错位相减，得 $(1-r)S=3+(r+r^2+@cdots+r^{m-1})-(m+2)r^m$。`,
        `代入 $r=-2$，有 $1-r=3$，且 $r+r^2+@cdots+r^{m-1}=@frac{r(1-r^{m-1})}{1-r}=@frac{-2-(-2)^m}{3}$。`,
        `于是 $3S=3+@frac{-2-(-2)^m}{3}-(m+2)(-2)^m=@frac{7-(3m+7)(-2)^m}{3}$，故 $S=@frac{7-(3m+7)(-2)^m}{9}$。`
      ],
      hints: ['第（1）问两边同乘 $n(n+1)$，构造 $b_n=na_n$。', '第（2）问先由 $b_n$ 求 $a_n$，再对多项式逐项求导。', '求和部分是等差乘等比，用错位相减法，注意公比为 $-2$。'],
      pitfalls: ['第（1）问乘错式子，得不到 $b_{n+1}-b_n=1$。', '求导后把 $k a_k$ 写成 $a_k$。', '错位相减时末项符号或等比求和公式的符号弄错。'],
      takeaway: '数列与导数交汇：先构造等差求通项，再逐项求导，最后用错位相减法求和。',
      knowledge: ['k-seq-recursion', 'k-seq-sum']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 4,
      stem: `如图所示的四棱锥 $P-ABCD$ 中，$PA@perp$ 平面 $ABCD$，$BC@parallel AD$，$AB@perp AD$，$PA=AB=@sqrt2$，$AD=1+@sqrt3$，$BC=2$，$P,B,C,D$ 在同一个球面上，设该球面的球心为 $O$。（1）证明：平面 $PAB@perp$ 平面 $PAD$；（2）（i）证明：$O$ 在平面 $ABCD$ 上；（ii）求直线 $AC$ 与直线 $PO$ 所成角的余弦值。`,
      answer: `（1）证明见解析；（2）（i）证明见解析；（ii）$@frac{@sqrt2}{3}$`,
      accept: [],
      solution: [
        `（1）因为 $PA@perp$ 平面 $ABCD$，$AB,AD@subset$ 平面 $ABCD$，所以 $PA@perp AB$，$PA@perp AD$。`,
        `又 $AB@perp AD$，且 $PA@cap AD=A$，所以 $AB@perp$ 平面 $PAD$；而 $AB@subset$ 平面 $PAB$，故平面 $PAB@perp$ 平面 $PAD$。`,
        `（2）（i）以 $A$ 为原点，$AB,AD,AP$ 所在直线分别为 $x,y,z$ 轴建立空间直角坐标系，则 $A(0,0,0)$，$B(@sqrt2,0,0)$，$C(@sqrt2,2,0)$，$D(0,1+@sqrt3,0)$，$P(0,0,@sqrt2)$。`,
        `设 $O(x,y,z)$。由 $OB=OC$ 得 $y=1$；由 $OB=OD$ 得 $x=0$；再由 $OB=OP$ 得 $x=z$，所以 $z=0$。故 $O(0,1,0)$，其竖坐标为 $0$，所以 $O$ 在平面 $ABCD$ 上。`,
        `（ii）$@overrightarrow{AC}=(@sqrt2,2,0)$，$@overrightarrow{PO}=(0,1,-@sqrt2)$。`,
        `设直线 $AC$ 与 $PO$ 所成角为 $@theta$，则 $@cos@theta=@frac{|@overrightarrow{AC}@cdot@overrightarrow{PO}|}{|@overrightarrow{AC}||@overrightarrow{PO}|}=@frac{|0+2+0|}{@sqrt6@cdot@sqrt3}=@frac{2}{3@sqrt2}=@frac{@sqrt2}{3}$。`
      ],
      hints: ['第（1）问证明线面垂直，再转化为面面垂直。', '第（2）问建系后设球心 $O(x,y,z)$，用 $OB=OC=OD=OP$ 列方程组。', '异面直线所成角用方向向量数量积的绝对值，结果范围为 $@left[0,@frac{@pi}{2}@right]$。'],
      pitfalls: ['第（1）问只证 $AB@perp AD$，忘记说明 $AB@perp PA$。', '建系时把 $AD$ 的长度或 $C$ 的坐标写错。', '第（ii）问忘记取数量积的绝对值，得到负余弦值。'],
      takeaway: '外接球球心：设坐标列等距方程组；线线角：方向向量数量积取绝对值。',
      knowledge: ['k-so-sphere', 'k-so-angle', 'k-so-parallel']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 5,
      stem: `已知椭圆 $C:@frac{x^2}{a^2}+@frac{y^2}{b^2}=1(a>b>0)$ 的离心率为 $@frac{2@sqrt2}{3}$，下顶点为 $A$，右顶点为 $B$，$|AB|=@sqrt{10}$。（1）求 $C$ 的方程；（2）已知动点 $P$ 不在 $y$ 轴上，点 $R$ 在射线 $AP$ 上，且满足 $|AP|@cdot|AR|=3$。（i）设 $P(m,n)$，求 $R$ 的坐标（用 $m,n$ 表示）；（ii）设 $O$ 为坐标原点，$Q$ 是 $C$ 上的动点，直线 $OR$ 的斜率是直线 $OP$ 的斜率的 $3$ 倍，求 $|PQ|$ 的最大值。`,
      answer: `（1）$@frac{x^2}{9}+y^2=1$；（2）（i）$R@left(@frac{3m}{m^2+(n+1)^2},-1+@frac{3(n+1)}{m^2+(n+1)^2}@right)$；（ii）$3@sqrt3+3@sqrt2$`,
      accept: [],
      solution: [
        `（1）$A(0,-b)$，$B(a,0)$，所以 $|AB|^2=a^2+b^2=10$。由 $e^2=@frac{c^2}{a^2}=@frac{a^2-b^2}{a^2}=@frac89$ 得 $b^2=@frac19a^2$，代入得 $@frac{10}{9}a^2=10$，所以 $a^2=9$，$b^2=1$，椭圆方程为 $@frac{x^2}{9}+y^2=1$。`,
        `（2）（i）设 $R(x_0,y_0)$。因为 $R$ 在射线 $AP$ 上，存在 $@lambda>0$ 使 $(x_0,y_0+1)=@lambda(m,n+1)$，于是 $|AR|=@lambda|AP|$。`,
        `由 $|AP|@cdot|AR|=3$ 得 $@lambda|AP|^2=3$，即 $@lambda=@frac{3}{m^2+(n+1)^2}$，所以 $R@left(@frac{3m}{m^2+(n+1)^2},-1+@frac{3(n+1)}{m^2+(n+1)^2}@right)$。`,
        `（ii）由（i）得 $k_{OR}=@frac{-1+@lambda(n+1)}{@lambda m}$，而 $k_{OP}=@frac nm$。由 $k_{OR}=3k_{OP}$ 得 $-1+@lambda(n+1)=3@lambda n$，即 $@lambda(1-2n)=1$。`,
        `将 $@lambda=@frac{3}{m^2+(n+1)^2}$ 代入，得 $m^2+(n+1)^2=3(1-2n)$，化简为 $m^2+(n+4)^2=18$，即 $P$ 在以 $N(0,-4)$ 为圆心、$3@sqrt2$ 为半径的圆上（去掉 $y$ 轴上的点）。`,
        `设 $Q(x,y)$ 在椭圆上，则 $x^2=9(1-y^2)$，$y@in@left[-1,1@right]$，故 $|QN|^2=x^2+(y+4)^2=9-9y^2+y^2+8y+16=-8@left(y-@frac12@right)^2+27@le27$，即 $|QN|@le3@sqrt3$。`,
        `又 $|PN|=3@sqrt2$，故 $|PQ|@le|PN|+|QN|@le3@sqrt2+3@sqrt3$，当 $Q$ 的纵坐标为 $@frac12$ 且 $P$ 在 $NQ$ 的反向延长线上时取到最大值。`
      ],
      hints: ['第（1）问用 $|AB|^2=a^2+b^2$ 与离心率联立。', '第（2）（i）用射线参数 $@lambda$，把 $R$ 写成 $A+@lambda@overrightarrow{AP}$。', '第（ii）先由斜率关系消去 $@lambda$，得到 $P$ 的轨迹圆，再把 $|PQ|$ 拆成 $|PN|+|NQ|$。', '求 $|QN|$ 时把 $x^2$ 用 $1-y^2$ 代换，化成关于 $y$ 的二次函数。'],
      pitfalls: ['第（1）问把 $|AB|$ 当成 $a+b$ 或 $2a$。', '第（2）（i）忘记 $@lambda>0$，或把 $|AR|$ 写成 $|AP|$。', '第（ii）把轨迹半径算成 $3$，忽略 $m^2+(n+4)^2=18$ 中右边是 $18$。', '求 $|PQ|$ 最大值时忘记加上圆的半径 $3@sqrt2$。'],
      takeaway: '解析几何轨迹与最值：参数化共线点定坐标，斜率关系消参得轨迹，再把距离最值拆成“圆心距加半径”。',
      knowledge: ['k-ag-conic', 'k-ag-vector']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 5,
      stem: `定义：设 $n$ 为正整数，若数列 $a_1,a_2,@dots,a_{2n}$ 是 $1,2,@dots,2n$ 的一个排列，且存在常数 $k$，使得对任意 $i=1,2,@dots,n$ 都有 $a_i+a_{2n+1-i}=k$，则称该数列为“$n$-对称和数列”，$k$ 称为它的对称和。（1）当 $n=2$ 时，写出所有 $2$-对称和数列；（2）证明：若 $1,2,@dots,2n$ 的一个排列是 $n$-对称和数列，则其对称和 $k=2n+1$，并求这样的数列的个数；（3）从 $1,2,@dots,2n$ 的所有排列中随机取一个，记取到 $n$-对称和数列的概率为 $P_n$，求 $P_2,P_3$，并证明：对任意 $n@ge2$，$P_n@le@frac13$。`,
      answer: `（1）共 $8$ 个：$1,2,3,4$；$1,3,2,4$；$2,1,4,3$；$2,4,1,3$；$3,1,4,2$；$3,4,1,2$；$4,2,3,1$；$4,3,2,1$。（2）$k=2n+1$，共 $n!@cdot2^n$ 个。（3）$P_2=@frac13$，$P_3=@frac{1}{15}$，证明见解析。`,
      accept: [],
      solution: [
        `（1）$n=2$ 时，位置对为 $(1,4)$、$(2,3)$，值对为 $@left@{1,4@right@}$、$@left@{2,3@right@}$。把两组值对分配到两个位置对，再各自决定顺序，逐一写出：$1,2,3,4$；$1,3,2,4$；$2,1,4,3$；$2,4,1,3$；$3,1,4,2$；$3,4,1,2$；$4,2,3,1$；$4,3,2,1$，共 $8$ 个。`,
        `（2）设对称和为 $k$。把 $2n$ 项全部相加，得 $n k=1+2+@cdots+2n=n(2n+1)$，所以 $k=2n+1$。`,
        `因此值必须成对出现：$@left@{1,2n@right@},@left@{2,2n-1@right@},@dots,@left@{n,n+1@right@}$，共 $n$ 对。`,
        `位置也成对：$(1,2n),(2,2n-1),@dots,(n,n+1)$，共 $n$ 对。把 $n$ 组值对分配给 $n$ 组位置对有 $n!$ 种方法，每组值对放入后有两种顺序，故共有 $n!@cdot2^n$ 个 $n$-对称和数列。`,
        `（3）$1,2,@dots,2n$ 的排列总数为 $(2n)!$，所以 $P_n=@frac{n!@cdot2^n}{(2n)!}$，且 $P_2=@frac{2!@cdot2^2}{4!}=@frac{8}{24}=@frac13$，$P_3=@frac{3!@cdot2^3}{6!}=@frac{48}{720}=@frac{1}{15}$。`,
        `当 $n@ge2$ 时，$@frac{P_{n+1}}{P_n}=@frac{(n+1)!2^{n+1}}{(2n+2)!}@cdot@frac{(2n)!}{n!2^n}=@frac{2(n+1)}{(2n+1)(2n+2)}=@frac{1}{2n+1}<1$，所以 $P_n$ 单调递减，故 $P_n@le P_2=@frac13$。`
      ],
      hints: ['第（1）问先确定位置对与值对，再枚举分配和顺序。', '第（2）问把所有项求和，立刻得到 $k$ 的值。', '第（3）问用排列总数作分母，比较相邻两项的概率比值证明单调性。'],
      pitfalls: ['第（1）问只枚举了部分顺序，漏掉值对与位置对的不同对应。', '第（2）问计数时只乘 $2^n$，忘记值对分配到位置对的 $n!$ 种方法。', '第（3）问把概率写成 $@frac{2^n}{(2n)!}$，漏掉 $n!$。'],
      takeaway: '新定义数列题：先由整体求和确定常数，再把“配对”拆成“分配位置对”与“组内定向”两步计数。',
      knowledge: ['k-seq-basic', 'k-count', 'k-ps-prob']
    }
  ]
});
