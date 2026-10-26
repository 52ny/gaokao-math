/* 2022 年普通高等学校招生全国统一考试（新高考Ⅰ卷）数学 · 19 题结构重排
 * 公式约定：LaTeX 反斜杠一律写成 @；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: '2022-xgk1',
  title: '2022 年普通高等学校招生全国统一考试（新高考Ⅰ卷）· 19 题结构重排',
  short: '2022 新高考Ⅰ',
  year: 2022, region: '新高考Ⅰ卷', kind: 'real', duration: 150,
  note: '按 19 题结构重排：8 单选 + 3 多选 + 3 填空 + 5 解答',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `已知集合 $M=@left@{x@mid @sqrt{x}<4@right@}$，$N=@left@{x@mid 3x@ge1@right@}$，则 $M@cap N=$`,
      options: [
        { k: 'A', t: `$@left@{x@mid 0@le x<16@right@}$` },
        { k: 'B', t: `$@left@{x@mid @frac{1}{3}@le x<16@right@}$` },
        { k: 'C', t: `$@left@{x@mid 0@le x<4@right@}$` },
        { k: 'D', t: `$@left@{x@mid @frac{1}{3}@le x<4@right@}$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由 $@sqrt{x}<4$ 且 $x@ge0$ 得 $0@le x<16$，即 $M=@left[0,16@right)$。`,
        `由 $3x@ge1$ 得 $x@ge@frac{1}{3}$，即 $N=@left[@frac{1}{3},+@infty@right)$。`,
        `取交集得 $@frac{1}{3}@le x<16$，故选 B。`
      ],
      hints: ['根号有意义要先写 $x@ge0$，再两边平方。', '交集是两个区间都满足的部分，重点看端点。'],
      pitfalls: ['忘记 $@sqrt{x}$ 的定义域，把 $M$ 写成 $@left(-@infty,16@right)$。', '把 $3x@ge1$ 解成 $x@ge3$。'],
      takeaway: '集合运算先分别化简成区间，再取交并并核对端点开闭。',
      knowledge: ['k-set-ops']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 1,
      stem: `若 $i(1-z)=1$，则 $z+@overline{z}=$`,
      options: [
        { k: 'A', t: `$-2$` },
        { k: 'B', t: `$-1$` },
        { k: 'C', t: `$1$` },
        { k: 'D', t: `$2$` }
      ],
      answer: 'D',
      accept: [],
      solution: [
        `由 $i(1-z)=1$ 得 $1-z=@frac{1}{i}=-i$。`,
        `所以 $z=1+i$，$@overline{z}=1-i$。`,
        `故 $z+@overline{z}=2$，选 D。`
      ],
      hints: ['先解出 $z$，注意 $@frac{1}{i}=-i$。', '$z+@overline{z}$ 等于实部的 $2$ 倍。'],
      pitfalls: ['把 $@frac{1}{i}$ 算成 $i$。', '把 $z$ 的实部与虚部位置写反。'],
      takeaway: '复数方程先化成 $a+bi$，$z+@overline{z}=2a$。',
      knowledge: ['k-cx-basic']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 2,
      stem: `在 $@triangle ABC$ 中，点 $D$ 在边 $AB$ 上，$BD=2DA$。记 $@overrightarrow{CA}=@vec m$，$@overrightarrow{CD}=@vec n$，则 $@overrightarrow{CB}=$`,
      options: [
        { k: 'A', t: `$3@vec m-2@vec n$` },
        { k: 'B', t: `$-2@vec m+3@vec n$` },
        { k: 'C', t: `$3@vec m+2@vec n$` },
        { k: 'D', t: `$2@vec m+3@vec n$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由 $BD=2DA$ 得 $AD=@frac{1}{3}AB$，即 $@overrightarrow{AD}=@frac{1}{3}@overrightarrow{AB}$。`,
        `$@overrightarrow{AD}=@overrightarrow{CD}-@overrightarrow{CA}=@vec n-@vec m$，所以 $@overrightarrow{AB}=3(@vec n-@vec m)$。`,
        `于是 $@overrightarrow{CB}=@overrightarrow{CA}+@overrightarrow{AB}=@vec m+3(@vec n-@vec m)=-2@vec m+3@vec n$，选 B。`
      ],
      hints: ['把目标向量拆成 $@overrightarrow{CA}+@overrightarrow{AB}$。', '用 $@overrightarrow{AD}$ 作桥梁，把 $@overrightarrow{AB}$ 用 $@vec m,@vec n$ 表示。'],
      pitfalls: ['把 $AD=@frac13AB$ 写成 $AD=3AB$。', '拆向量时首尾字母方向弄反。'],
      takeaway: '平面向量基本定理：选一组基底，沿图形路径把目标向量逐步拆开。',
      knowledge: ['k-vec-linear']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 3,
      stem: `某水库水位为海拔 $148.5$ m 时，相应水面面积为 $140.0$ km$^2$；水位为海拔 $157.5$ m 时，相应水面面积为 $180.0$ km$^2$。把这两个水位之间的水库形状看作棱台，则水位从 $148.5$ m 上升到 $157.5$ m 时，增加的水量约为（参考数据：$@sqrt7@approx2.65$）`,
      options: [
        { k: 'A', t: `$1.0@times10^9$ m$^3$` },
        { k: 'B', t: `$1.2@times10^9$ m$^3$` },
        { k: 'C', t: `$1.4@times10^9$ m$^3$` },
        { k: 'D', t: `$1.6@times10^9$ m$^3$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `棱台的高 $h=157.5-148.5=9$ m，两底面积 $S_1=140@times10^6$ m$^2$，$S_2=180@times10^6$ m$^2$。`,
        `$@sqrt{S_1S_2}=10^6@sqrt{140@times180}=10^6@sqrt{25200}=6@times10^7@sqrt7$，约为 $1.59@times10^8$ m$^2$。`,
        `由棱台体积公式 $V=@frac{1}{3}h(S_1+S_2+@sqrt{S_1S_2})$ 得`,
        `$V@approx3@times(1.40+1.80+1.59)@times10^8@approx1.44@times10^9$ m$^3$，故选 C。`
      ],
      hints: ['先统一单位，$1$ km$^2=10^6$ m$^2$。', '棱台体积公式中三项都要算，尤其别忘了 $@sqrt{S_1S_2}$。'],
      pitfalls: ['把棱台当成棱柱，直接用 $S_2h$。', '漏掉 $@frac13$ 或漏算 $@sqrt{S_1S_2}$ 一项。', '面积单位没有换算成 m$^2$。'],
      takeaway: '棱台体积 $V=@frac13h(S_1+@sqrt{S_1S_2}+S_2)$，先统一单位再估算。',
      knowledge: ['k-so-solid']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 2,
      stem: `从 $2,3,4,5,6,7,8$ 这 $7$ 个整数中随机取 $2$ 个不同的数，则这 $2$ 个数互质的概率为`,
      options: [
        { k: 'A', t: `$@frac{1}{3}$` },
        { k: 'B', t: `$@frac{3}{7}$` },
        { k: 'C', t: `$@frac{2}{3}$` },
        { k: 'D', t: `$@frac{5}{7}$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `从 $7$ 个数中取 $2$ 个，共有 $C_7^2=21$ 种取法。`,
        `按较小数分类数互质对：含 $2$ 的 $3$ 对，含 $3$ 的 $4$ 对，含 $4$ 的 $2$ 对，含 $5$ 的 $3$ 对，$(6,7)$、$(7,8)$ 各 $1$ 对，共 $14$ 对。`,
        `故所求概率 $P=@frac{14}{21}=@frac{2}{3}$，选 C。`
      ],
      hints: ['先算总取法 $C_7^2$。', '按较小数从 $2$ 到 $7$ 分类枚举，避免重复。'],
      pitfalls: ['把 $(2,4)$ 这类有公因数的数对误判为互质。', '枚举时重复计数，导致分子超过 $21$。'],
      takeaway: '古典概型：分母用组合数，分子按某一维分类枚举并查重。',
      knowledge: ['k-ps-prob', 'k-count']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 3,
      stem: `记函数 $f(x)=@sin@left(@omega x+@frac{@pi}{4}@right)+b$（$@omega>0$）的最小正周期为 $T$。若 $@frac{2@pi}{3}<T<@pi$，且 $y=f(x)$ 的图象关于点 $@left(@frac{3@pi}{2},2@right)$ 中心对称，则 $f@left(@frac{@pi}{2}@right)=$`,
      options: [
        { k: 'A', t: `$1$` },
        { k: 'B', t: `$@frac{3}{2}$` },
        { k: 'C', t: `$2$` },
        { k: 'D', t: `$3$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `由 $T=@frac{2@pi}{@omega}$ 及 $@frac{2@pi}{3}<T<@pi$ 得 $2<@omega<3$。`,
        `图象关于 $@left(@frac{3@pi}{2},2@right)$ 中心对称，故 $b=2$ 且 $@sin@left(@frac{3@pi}{2}@omega+@frac{@pi}{4}@right)=0$。`,
        `于是 $@frac{3@pi}{2}@omega+@frac{@pi}{4}=k@pi$，即 $@omega=@frac{4k-1}{6}$；结合 $2<@omega<3$ 得 $k=4$，$@omega=@frac{5}{2}$。`,
        `所以 $f@left(@frac{@pi}{2}@right)=@sin@left(@frac{5@pi}{4}+@frac{@pi}{4}@right)+2=@sin@frac{3@pi}{2}+2=1$，选 A。`
      ],
      hints: ['先由周期范围锁定 $@omega$ 的范围。', '正弦型函数关于点 $(x_0,y_0)$ 对称，要求 $y_0$ 为常数项且相位使正弦为 $0$。'],
      pitfalls: ['把 $T$ 的范围直接当成 $@omega$ 的范围（应取倒数关系）。', '求出多个 $k$ 后不检验 $@omega$ 的范围。'],
      takeaway: '三角函数对称中心：$b$ 取中心纵坐标，相位取 $k@pi$，再用范围筛选整数 $k$。',
      knowledge: ['k-tr-graph']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 4,
      stem: `设 $a=0.1e^{0.1}$，$b=@frac{1}{9}$，$c=-@ln0.9$，则`,
      options: [
        { k: 'A', t: `$a<b<c$` },
        { k: 'B', t: `$c<b<a$` },
        { k: 'C', t: `$c<a<b$` },
        { k: 'D', t: `$a<c<b$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `记 $t=0.1$，则 $c=-@ln(1-t)=@ln@frac{10}{9}$，由 $@ln(1+x)<x-@frac{x^2}{2}+@frac{x^3}{3}$（$x>0$）取 $x=@frac19$ 得 $c<0.1111-0.0062+0.0005=0.1054$。`,
        `由 $e^{0.1}>1+0.1=1.1$ 得 $a=0.1e^{0.1}>0.11>0.1054>c$，故 $c<a$。`,
        `又对 $0<x<1$ 有 $e^x<@frac{1}{1-x}$，取 $x=0.1$ 得 $a<0.1@times@frac{10}{9}=@frac19=b$。`,
        `所以 $c<a<b$，选 C。`
      ],
      hints: ['把三个数统一成小数或同底比较，先找中间量。', '用 $e^x>1+x$ 估下界，用 $e^x<@frac{1}{1-x}$ 估上界。'],
      pitfalls: ['直接取近似值但精度不够，把 $a$ 与 $b$ 的大小弄反。', '对 $@ln(1+x)$ 的展开式符号记错。'],
      takeaway: '比较大小：构造函数用单调性，或泰勒展开估上下界，必要时用 $e^x$ 与 $@frac{1}{1-x}$ 的夹逼。',
      knowledge: ['k-fn-elem']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 4,
      stem: `已知正四棱锥的侧棱长为 $l$，其各顶点都在同一球面上。若该球的体积为 $36@pi$，且 $3@le l@le3@sqrt3$，则该正四棱锥体积的取值范围是`,
      options: [
        { k: 'A', t: `$@left[@frac{27}{4},@frac{64}{3}@right]$` },
        { k: 'B', t: `$@left[@frac{27}{4},@frac{81}{4}@right]$` },
        { k: 'C', t: `$@left[@frac{9}{2},@frac{64}{3}@right]$` },
        { k: 'D', t: `$@left[@frac{9}{2},@frac{81}{4}@right]$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `由 $@frac{4}{3}@pi R^3=36@pi$ 得 $R=3$。设正四棱锥高为 $h$，底面外接圆半径为 $r$，则 $r^2=9-(h-3)^2=6h-h^2$。`,
        `侧棱 $l^2=h^2+r^2=6h$，故 $h=@frac{l^2}{6}$；由 $3@le l@le3@sqrt3$ 得 $@frac32@le h@le@frac92$。`,
        `底面积为 $2r^2$，体积 $V=@frac13@cdot2r^2@cdot h=@frac23(6h^2-h^3)$。`,
        `令 $g(h)=6h^2-h^3$，$g'(h)=3h(4-h)$，故 $g(h)$ 在 $@left[@frac32,4@right]$ 递增、在 $@left[4,@frac92@right]$ 递减，最大值为 $g(4)=32$。`,
        `端点 $g@left(@frac32@right)=@frac{81}{8}$，$g@left(@frac92@right)=@frac{243}{8}$，故 $V@in@left[@frac{27}{4},@frac{64}{3}@right]$，选 A。`
      ],
      hints: ['球体积先求半径 $R=3$。', '用球心到轴的距离建立 $r^2$ 与 $h$ 的关系，再得 $l^2=6h$。', '体积化成 $h$ 的三次函数，用导数求区间最值。'],
      pitfalls: ['把底面外接圆半径与底面边长混淆，底面积少乘 $2$。', '只比较端点值，忘记检查区间内部的极大值。'],
      takeaway: '外接球问题设轴截面，把 $r^2$ 用 $h$ 表示；最值题先定定义域再比较极值与端点。',
      knowledge: ['k-so-sphere', 'k-dv-extreme']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知函数 $f(x)=x^3-x+1$，则`,
      options: [
        { k: 'A', t: `$f(x)$ 有两个极值点` },
        { k: 'B', t: `$f(x)$ 有三个零点` },
        { k: 'C', t: `点 $(0,1)$ 是曲线 $y=f(x)$ 的对称中心` },
        { k: 'D', t: `直线 $y=2x$ 是曲线 $y=f(x)$ 的切线` }
      ],
      answer: 'AC',
      accept: [],
      solution: [
        `$f'(x)=3x^2-1$，有两个零点 $x=@pm@frac{@sqrt3}{3}$，且导数变号，故 A 正确。`,
        `$f(x)$ 的极大值为 $f@left(-@frac{@sqrt3}{3}@right)=1+@frac{2@sqrt3}{9}>0$，极小值为 $f@left(@frac{@sqrt3}{3}@right)=1-@frac{2@sqrt3}{9}>0$，故只有一个零点，B 错误。`,
        `因为 $f(x)+f(-x)=2$，所以曲线关于点 $(0,1)$ 中心对称，C 正确。`,
        `若切线斜率为 $2$，则 $3x^2-1=2$，$x=@pm1$；切线分别为 $y=2x-1$ 与 $y=2x+3$，均不是 $y=2x$，D 错误。`,
        `综上，选 AC。`
      ],
      hints: ['先求导判断极值点个数。', '零点个数看极值是否异号。', '三次函数 $f(x)=ax^3+bx^2+cx+d$ 的对称中心是拐点。'],
      pitfalls: ['只看 $@Delta>0$ 就断定有三个零点，没有比较极值符号。', '判断对称中心时把纵坐标算成 $f(0)$ 的一半或漏掉常数项。'],
      takeaway: '三次函数：导数定极值，极值符号定零点个数，拐点即对称中心。',
      knowledge: ['k-dv-extreme', 'k-dv-monotone']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 4,
      stem: `已知 $O$ 为坐标原点，点 $A(1,1)$ 在抛物线 $C:x^2=2py$（$p>0$）上，过点 $B(0,-1)$ 的直线与 $C$ 交于 $P,Q$ 两点，则`,
      options: [
        { k: 'A', t: `$C$ 的准线为 $y=-1$` },
        { k: 'B', t: `直线 $AB$ 与 $C$ 相切` },
        { k: 'C', t: `$|OP|@cdot|OQ|>|OA|^2$` },
        { k: 'D', t: `$|BP|@cdot|BQ|=|BA|^2$` }
      ],
      answer: 'BC',
      accept: [],
      solution: [
        `代点 $A(1,1)$ 得 $1=2p$，$p=@frac12$，故 $C:x^2=y$，准线为 $y=-@frac14$，A 错误。`,
        `直线 $AB:y=2x-1$，代入 $x^2=y$ 得 $(x-1)^2=0$，只有一解，故相切，B 正确。`,
        `设过 $B$ 的直线为 $y=kx-1$，代入得 $x^2-kx+1=0$，则 $x_1x_2=1$，$x_1+x_2=k$，且 $|k|>2$。`,
        `$|OP|^2|OQ|^2=x_1^2x_2^2(1+x_1^2)(1+x_2^2)=(1+x_1^2)(1+x_2^2)=k^2$，故 $|OP|@cdot|OQ|=|k|>2=|OA|^2$，C 正确。`,
        `$|BP|@cdot|BQ|=(1+k^2)|x_1x_2|=1+k^2>5=|BA|^2$，D 错误。`,
        `综上，选 BC。`
      ],
      hints: ['先由点在抛物线上确定 $p$。', '过 $y$ 轴上的定点设 $y=kx-1$，联立后用韦达定理。', '把长度乘积平方后化为 $x_1x_2$ 与 $x_1+x_2$ 的式子。'],
      pitfalls: ['把 $x^2=2py$ 的准线写成 $y=-p$（应为 $y=-@frac{p}{2}$）。', 'D 中把 $|BP|@cdot|BQ|$ 与 $|BA|^2$ 都只算坐标差而漏掉 $1+k^2$ 因子。'],
      takeaway: '抛物线焦点弦、定点弦：联立后把长度积平方，用韦达定理整体代入。',
      knowledge: ['k-ag-conic', 'k-ag-chord']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_1=1$，$a_{n+1}=2a_n+1$（$n@in@mathbb{N}^*$），其前 $n$ 项和为 $S_n$，则`,
      options: [
        { k: 'A', t: `$a_3=7$` },
        { k: 'B', t: `$@left@{a_n+1@right@}$ 是等比数列` },
        { k: 'C', t: `$a_n=2^n-1$` },
        { k: 'D', t: `$S_n=2^{n+1}-n-1$` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `由递推式得 $a_2=3$，$a_3=7$，A 正确。`,
        `两边加 $1$：$a_{n+1}+1=2(a_n+1)$，且 $a_1+1=2$，故 $@left@{a_n+1@right@}$ 是首项为 $2$、公比为 $2$ 的等比数列，B 正确。`,
        `于是 $a_n+1=2^n$，即 $a_n=2^n-1$，C 正确。`,
        `$S_n=(2+2^2+@cdots+2^n)-n=2^{n+1}-2-n$，与 D 相差 $1$，D 错误。`,
        `综上，选 ABC。`
      ],
      hints: ['形如 $a_{n+1}=pa_n+q$ 的递推，两边同加常数构造等比数列。', '求和时拆成等比数列求和再减去 $n$。'],
      pitfalls: ['构造时加的常数取错（应加 $@frac{q}{p-1}=1$）。', '等比求和时项数或首项算错，漏减 $2$。'],
      takeaway: '$a_{n+1}=pa_n+q$ 型：加 $@frac{q}{p-1}$ 构造等比，再回代求和。',
      knowledge: ['k-seq-recursion', 'k-seq-sum']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 3,
      stem: `$@left(1-@frac{y}{x}@right)(x+y)^8$ 的展开式中 $x^2y^6$ 的系数为 ________ .`,
      answer: `$-28$`,
      accept: ['-28', '−28'],
      solution: [
        `$(x+y)^8$ 中 $x^2y^6$ 的系数为 $C_8^6=28$。`,
        `$(x+y)^8$ 中 $x^3y^5$ 的系数为 $C_8^5=56$，它与 $-@frac{y}{x}$ 相乘得到 $-56x^2y^6$。`,
        `故 $x^2y^6$ 的系数为 $28-56=-28$。`
      ],
      hints: ['把两个因式分别展开，只需找能与 $x^2y^6$ 对齐的项。', '$-@frac{y}{x}$ 乘以 $x^3y^5$ 才是 $x^2y^6$。'],
      pitfalls: ['只算 $(x+y)^8$ 的一项，忘记另一因式的贡献。', '把 $C_8^6$ 与 $C_8^5$ 的对应项配错。'],
      takeaway: '两个因式相乘找指定项：逐项配凑指数，再合并同类项系数。',
      knowledge: ['k-binomial']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 3,
      stem: `若曲线 $y=(x+a)e^x$ 有两条过坐标原点的切线，则 $a$ 的取值范围是 ________ .`,
      answer: `$a<-4$ 或 $a>0$`,
      accept: ['a<-4或a>0', 'a>0或a<-4', '(-∞,-4)∪(0,+∞)', 'a∈(-∞,-4)∪(0,+∞)'],
      solution: [
        `设切点为 $(t,(t+a)e^t)$，由 $y'=e^x(x+a+1)$ 得切线斜率 $e^t(t+a+1)$。`,
        `切线过原点：$(t+a)e^t=t@cdot e^t(t+a+1)$，约去 $e^t$ 化简得 $t^2+at-a=0$。`,
        `两条过原点的切线等价于该方程有两个不相等的实根，故 $@Delta=a^2+4a>0$。`,
        `解得 $a<-4$ 或 $a>0$；$a=0$ 时只有一条切线，$a=-4$ 时为重根，均不合题意。`
      ],
      hints: ['先设切点，写出切线方程，再代原点。', '把“切线条数”转化为切点方程的实根个数。'],
      pitfalls: ['忘记检验 $@Delta>0$ 与 $@Delta@ge0$ 的区别。', '约分时没有说明 $e^t@ne0$。'],
      takeaway: '过定点的切线条数：设切点列方程，根的个数就是切线条数。',
      knowledge: ['k-dv-param']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 5,
      stem: `已知椭圆 $C:@frac{x^2}{a^2}+@frac{y^2}{b^2}=1$（$a>b>0$）的上顶点为 $A$，两个焦点为 $F_1,F_2$，离心率为 $@frac12$。过 $F_1$ 且垂直于 $AF_2$ 的直线与 $C$ 交于 $D,E$ 两点，$|DE|=6$，则 $@triangle ADE$ 的周长是 ________ .`,
      answer: `$13$`,
      accept: ['13'],
      solution: [
        `由 $e=@frac12$ 得 $a=2c$，$b=@sqrt3c$，且 $A(0,@sqrt3c)$，$F_1(-c,0)$，$F_2(c,0)$。`,
        `因为 $|AF_1|=|F_1F_2|=2c$，所以 $F_1$ 在线段 $AF_2$ 的垂直平分线上，即直线 $DE$ 就是 $AF_2$ 的垂直平分线。`,
        `于是 $A$ 关于 $DE$ 的对称点为 $F_2$，得 $|AD|=|DF_2|$，$|AE|=|EF_2|$。`,
        `所以周长 $=|AD|+|AE|+|DE|=(|DF_2|+|DF_1|)+(|EF_2|+|EF_1|)=2a+2a=4a$。`,
        `直线 $DE:y=@frac{x+c}{@sqrt3}$ 代入椭圆得 $13x^2+8cx-32c^2=0$，故 $|x_D-x_E|=@frac{24@sqrt3c}{13}$，$|DE|=@frac{2}{@sqrt3}|x_D-x_E|=@frac{48c}{13}$。`,
        `由 $@frac{48c}{13}=6$ 得 $c=@frac{13}{8}$，$a=2c=@frac{13}{4}$，周长 $4a=13$。`
      ],
      hints: ['注意 $|AF_1|=|F_1F_2|$，说明 $F_1$ 在 $AF_2$ 的垂直平分线上，$DE$ 就是这条垂直平分线。', '利用对称把 $|AD|$ 换成 $|DF_2|$，再用椭圆定义凑出 $2a$。', '先用 $|DE|$ 求出 $c$，再算周长，不必分别求各边。'],
      pitfalls: ['没有想到垂直平分线，硬算 $|AD|,|AE|$ 导致运算量巨大。', '把周长误当成 $2a+|DE|$。', '联立后忘记 $|DE|$ 还要乘 $@sqrt{1+k^2}$。'],
      takeaway: '椭圆中遇垂直平分线立即用对称转化，把折线段凑成 $2a$，再整体求周长。',
      knowledge: ['k-ag-conic', 'k-ag-chord']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `记 $S_n$ 为数列 $@left@{a_n@right@}$ 的前 $n$ 项和，已知 $a_1=1$，$@left@{@frac{S_n}{a_n}@right@}$ 是公差为 $@frac13$ 的等差数列。（1）求 $@left@{a_n@right@}$ 的通项公式；（2）证明：$@frac{1}{a_1}+@frac{1}{a_2}+@cdots+@frac{1}{a_n}<2$。`,
      answer: `（1）$a_n=@frac{n(n+1)}{2}$；（2）证明见解析`,
      accept: [],
      solution: [
        `由 $@frac{S_1}{a_1}=1$ 及公差 $@frac13$ 得 $@frac{S_n}{a_n}=1+@frac{n-1}{3}=@frac{n+2}{3}$，即 $S_n=@frac{(n+2)a_n}{3}$。`,
        `当 $n@ge2$ 时，$a_n=S_n-S_{n-1}$，代入得 $3a_n=(n+2)a_n-(n+1)a_{n-1}$，即 $(n-1)a_n=(n+1)a_{n-1}$。`,
        `于是 $@frac{a_n}{a_{n-1}}=@frac{n+1}{n-1}$，累乘得 $a_n=1@cdot@frac31@cdot@frac42@cdots@frac{n+1}{n-1}=@frac{n(n+1)}{2}$，$n=1$ 也适合。`,
        `因为 $@frac{1}{a_n}=@frac{2}{n(n+1)}=2@left(@frac1n-@frac1{n+1}@right)$，`,
        `所以 $@frac{1}{a_1}+@cdots+@frac{1}{a_n}=2@left(1-@frac1{n+1}@right)=@frac{2n}{n+1}<2$。`
      ],
      hints: ['第 (1) 问先写出 $S_n$ 与 $a_n$ 的关系，再用 $a_n=S_n-S_{n-1}$ 消去 $S_n$。', '第 (2) 问裂项相消，$@frac{1}{n(n+1)}=@frac1n-@frac1{n+1}$。'],
      pitfalls: ['用 $a_n=S_n-S_{n-1}$ 时没有注明 $n@ge2$，也没有验证 $n=1$。', '累乘时约分漏项，把结果写成 $@frac{n(n-1)}{2}$。'],
      takeaway: '已知 $S_n$ 与 $a_n$ 的关系：写出关系式后用 $a_n=S_n-S_{n-1}$ 消元，再累乘求通项。',
      knowledge: ['k-seq-basic', 'k-seq-sum', 'k-seq-ineq']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 4,
      stem: `直三棱柱 $ABC-A_1B_1C_1$ 的体积为 $4$，$@triangle A_1BC$ 的面积为 $2@sqrt2$。（1）求 $A$ 到平面 $A_1BC$ 的距离；（2）设 $D$ 为 $A_1C$ 的中点，$AA_1=AB$，平面 $A_1BC@perp$ 平面 $ABB_1A_1$，求二面角 $A-BD-C$ 的正弦值。`,
      answer: `（1）$@sqrt2$；（2）$@frac{@sqrt3}{2}$`,
      accept: [],
      solution: [
        `（1）三棱锥 $A_1-ABC$ 的体积为 $@frac13@times4=@frac43$，又它等于 $@frac13@times S_{@triangle A_1BC}@times d=@frac13@times2@sqrt2@times d$，故 $d=@frac{4}{2@sqrt2}=@sqrt2$。`,
        `（2）过 $C$ 作 $CH@perp$ 平面 $ABB_1A_1$ 于 $H$。由 $AA_1@perp$ 底面知平面 $ABB_1A_1@perp$ 平面 $ABC$，故 $CH$ 在底面 $ABC$ 内，从而 $H@in AB$；又平面 $A_1BC@perp$ 平面 $ABB_1A_1$，同理 $CH$ 在平面 $A_1BC$ 内，于是 $H$ 在平面 $A_1BC$ 与底面 $ABC$ 的交线 $BC$ 上。故 $H=B$，得 $BC@perp AB$，$BC@perp A_1B$。`,
        `由 $V=@frac12@cdot AB@cdot BC@cdot AA_1=4$ 及 $AA_1=AB$ 得 $AB^2@cdot BC=8$；由 $S_{@triangle A_1BC}=@frac12@cdot BC@cdot@sqrt2AB=2@sqrt2$ 得 $AB@cdot BC=4$，故 $AB=BC=AA_1=2$。`,
        `以 $A$ 为原点，$AB$ 所在直线为 $x$ 轴、过 $A$ 且平行于 $BC$ 的直线为 $y$ 轴、$AA_1$ 所在直线为 $z$ 轴建系：$A(0,0,0)$，$B(2,0,0)$，$C(2,2,0)$，$A_1(0,0,2)$，$D(1,1,1)$。`,
        `平面 $ABD$ 的法向量取 $@vec{n_1}=(0,1,-1)$，平面 $CBD$ 的法向量取 $@vec{n_2}=(1,0,1)$，则 $@cos@theta=@frac{|@vec{n_1}@cdot@vec{n_2}|}{|@vec{n_1}||@vec{n_2}|}=@frac{1}{2}$。`,
        `故二面角的正弦值为 $@sqrt{1-@frac14}=@frac{@sqrt3}{2}$。`
      ],
      hints: ['第 (1) 问用等体积法：同一个三棱锥换顶点，体积不变。', '第 (2) 问先由面面垂直推出 $BC@perp$ 平面 $ABB_1A_1$，再算棱长。', '建系后二面角用两法向量的夹角余弦，最后取正弦。'],
      pitfalls: ['第 (1) 问把三棱柱体积直接当作三棱锥体积。', '第 (2) 问由面面垂直直接默认 $BC@perp AB$，缺少推理。', '二面角误把余弦值当答案（题目要正弦值）。'],
      takeaway: '直棱柱问题：先用等体积法求距离，再由面面垂直找垂直关系，最后建系求二面角。',
      knowledge: ['k-so-solid', 'k-so-angle']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 3,
      stem: `某校为了解学生是否喜欢某项体育运动与性别的关系，随机调查了 $100$ 名学生，其中男生 $60$ 人、女生 $40$ 人；男生中喜欢该项运动的有 $45$ 人，女生中喜欢该项运动的有 $15$ 人。（1）完成 $2@times2$ 列联表，并判断是否有 $99%$ 的把握认为喜欢该项运动与性别有关；（2）从喜欢该项运动的学生中随机抽取 $2$ 人，记其中女生人数为 $X$，求 $X$ 的分布列与数学期望。附：$@chi^2=@frac{n(ad-bc)^2}{(a+b)(c+d)(a+c)(b+d)}$，$P(@chi^2@ge6.635)=0.010$，$P(@chi^2@ge3.841)=0.050$。`,
      answer: `（1）有 $99%$ 的把握认为有关；（2）$P(X=0)=@frac{33}{59}$，$P(X=1)=@frac{45}{118}$，$P(X=2)=@frac{7}{118}$，$E(X)=@frac12$`,
      accept: [],
      solution: [
        `（1）列联表：男生喜欢 $45$ 人、不喜欢 $15$ 人（合计 $60$）；女生喜欢 $15$ 人、不喜欢 $25$ 人（合计 $40$）；喜欢合计 $60$ 人，不喜欢合计 $40$ 人。`,
        `$@chi^2=@frac{100@times(45@times25-15@times15)^2}{60@times40@times60@times40}=@frac{100@times900^2}{5760000}=14.0625$。`,
        `因为 $14.0625>6.635$，所以有 $99%$ 的把握认为喜欢该项运动与性别有关。`,
        `（2）喜欢该项运动的学生共 $60$ 人，其中女生 $15$ 人，$X$ 服从超几何分布：$P(X=k)=@frac{C_{15}^kC_{45}^{2-k}}{C_{60}^2}$。`,
        `$P(X=0)=@frac{C_{45}^2}{C_{60}^2}=@frac{990}{1770}=@frac{33}{59}$，$P(X=1)=@frac{15@times45}{1770}=@frac{45}{118}$，$P(X=2)=@frac{C_{15}^2}{1770}=@frac{7}{118}$。`,
        `$E(X)=0@times@frac{33}{59}+1@times@frac{45}{118}+2@times@frac{7}{118}=@frac{59}{118}=@frac12$。`
      ],
      hints: ['先补全列联表的四个格子和合计，再套 $@chi^2$ 公式。', '第 (2) 问是“不放回抽两人”，属超几何分布。', '期望也可用 $E(X)=2@times@frac{15}{60}$ 快速检验。'],
      pitfalls: ['把 $@chi^2$ 公式中的 $n$ 漏掉，或把 $ad-bc$ 写成 $ab-cd$。', '分布列三个概率之和不为 $1$（本题分母通分为 $118$）。', '把不放回抽样误当二项分布。'],
      takeaway: '独立性检验套公式并与临界值比较；不放回抽样的计数变量用超几何分布。',
      knowledge: ['k-ps-stat', 'k-ps-dist', 'k-ps-expect']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 4,
      stem: `已知点 $A(2,1)$ 在双曲线 $C:@frac{x^2}{a^2}-@frac{y^2}{a^2-1}=1$（$a>1$）上，直线 $l$ 与 $C$ 交于 $P,Q$ 两点，且直线 $AP,AQ$ 的斜率之和为 $0$。（1）求 $C$ 的方程与 $l$ 的斜率；（2）若 $@tan@angle PAQ=2@sqrt2$，求 $@triangle PAQ$ 的面积。`,
      answer: `（1）$C:@frac{x^2}{2}-y^2=1$，$l$ 的斜率为 $-1$；（2）$@frac{16@sqrt2}{9}$`,
      accept: [],
      solution: [
        `（1）代点得 $@frac{4}{a^2}-@frac{1}{a^2-1}=1$，令 $u=a^2>1$ 化为 $(u-2)^2=0$，故 $u=2$，$C:@frac{x^2}{2}-y^2=1$。`,
        `设 $l:y=kx+m$（$l$ 不过 $A$），代入 $C$ 得 $(1-2k^2)x^2-4kmx-2m^2-2=0$；由 $k_{AP}+k_{AQ}=0$ 化简得 $(k+1)(m+2k-1)=0$。`,
        `若 $m+2k-1=0$，则 $l$ 过 $A(2,1)$，与 $P,Q$ 异于 $A$ 矛盾，故 $k=-1$，即 $l$ 的斜率为 $-1$。`,
        `（2）$k=-1$ 时 $l:y=-x+m$，代入得 $x^2-4mx+2m^2+2=0$，$@Delta=8(m^2-1)>0$。由韦达定理可算得 $k_{AP}k_{AQ}=-@frac{m+1}{2(m-1)}$，又 $k_{AP}+k_{AQ}=0$，故 $k_{AP}^2=@frac{m+1}{2(m-1)}$。`,
        `由 $@tan@angle PAQ=@frac{2|k_{AP}|}{|1-k_{AP}^2|}=2@sqrt2$ 得 $k_{AP}^2=2$（另一可能 $k_{AP}^2=@frac12$ 与上式联立无解），故 $@frac{m+1}{2(m-1)}=2$，解得 $m=@frac53$。`,
        `此时 $x_1+x_2=@frac{20}{3}$，$x_1x_2=@frac{68}{9}$，$|x_1-x_2|=@frac{8@sqrt2}{3}$，$|PQ|=@sqrt2|x_1-x_2|=@frac{16}{3}$。`,
        `$A$ 到 $l:x+y-@frac53=0$ 的距离为 $@frac{@frac43}{@sqrt2}=@frac{2@sqrt2}{3}$，故 $S=@frac12@times@frac{16}{3}@times@frac{2@sqrt2}{3}=@frac{16@sqrt2}{9}$。`
      ],
      hints: ['第 (1) 问代点后令 $u=a^2$，会出现完全平方。', '斜率之和为 $0$ 时先写出关于 $x_1,x_2$ 的对称式，再用韦达定理。', '得到 $(k+1)$ 因子后要说明另一因子对应 $l$ 过点 $A$，应舍去。'],
      pitfalls: ['忘记说明 $l$ 不过 $A$，把 $m+2k-1=0$ 的情形也算进去。', 'tan 的公式漏掉绝对值，或忽略 $k_{AP}^2$ 的两种情形。', '求面积时弦长漏乘 $@sqrt{1+k^2}$。'],
      takeaway: '圆锥曲线中“斜率和为定值”：把条件写成 $x_1+x_2$、$x_1x_2$ 的对称式，再用韦达定理；最后用 $@frac12|PQ|d$ 求面积。',
      knowledge: ['k-ag-conic', 'k-ag-chord', 'k-ag-area']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 5,
      stem: `已知函数 $f(x)=e^x-ax$ 与 $g(x)=ax-@ln x$ 有相同的最小值。（1）求 $a$；（2）证明：存在直线 $y=b$，它与曲线 $y=f(x)$、$y=g(x)$ 共有三个不同的交点，且从左到右三个交点的横坐标成等差数列。`,
      answer: `（1）$a=1$；（2）证明见解析`,
      accept: [],
      solution: [
        `（1）若 $a@le0$，$f(x)$ 在 $@mathbb{R}$ 上单调递增，无最小值，故 $a>0$。此时 $f_{@min}=f(@ln a)=a-a@ln a$，$g_{@min}=g@left(@frac1a@right)=1+@ln a$。`,
        `令 $h(a)=a-a@ln a-1-@ln a$（$a>0$），则 $h'(a)=-@ln a-@frac1a<0$（因 $@ln a+@frac1a@ge1$），$h$ 严格递减，又 $h(1)=0$，故 $a=1$。`,
        `（2）$a=1$ 时 $f(x)=e^x-x$，$g(x)=x-@ln x$，最小值均为 $1$（分别在 $x=0$、$x=1$ 处取得），且有恒等式 $f(x)=g(e^x)$。`,
        `令 $@varphi(x)=e^x+@ln x-2x$（$x>0$），则 $@varphi'(x)=e^x+@frac1x-2>0$，$@varphi(1)=e-2>0$，$@varphi@left(@frac12@right)=@sqrt e-@ln2-1<0$，故存在唯一 $x_0@in@left(@frac12,1@right)$ 使 $f(x_0)=g(x_0)$；取 $b=f(x_0)>1$。`,
        `$f(x)=b$ 在 $(-@infty,0)$、$(0,+@infty)$ 上各有一解，记为 $x_1<0<x_0$；$g(t)=b$ 在 $(0,1)$、$(1,+@infty)$ 上各有一解，即 $x_0$ 与 $x_4>1$。故直线 $y=b$ 与两曲线共有三个不同交点。`,
        `由 $f(u)=g(e^u)$：$g(e^{x_1})=f(x_1)=b$ 且 $e^{x_1}@in(0,1)$，故 $e^{x_1}=x_0$，即 $x_1=@ln x_0$；又 $f(@ln x_4)=g(x_4)=b$ 且 $@ln x_4>0$，故 $x_4=e^{x_0}$。于是 $x_1+x_4=@ln x_0+e^{x_0}=2x_0$，三横坐标成等差数列。`
      ],
      hints: ['第 (1) 问先按 $a$ 的正负排除无最小值的情形，再令两个最小值相等。', '注意恒等式 $f(x)=g(e^x)$，它把两条曲线的交点横坐标联系起来。', '第 (2) 问先证两曲线有唯一交点 $x_0$，再取 $b=f(x_0)$，交点自然“共用”一个。'],
      pitfalls: ['第 (1) 问只解方程不说明 $h$ 单调，无法断言 $a$ 唯一。', '第 (2) 问误以为 $y=b$ 与每条曲线各交两点就一定共有四个不同交点，忽略公共点。', '由 $g(e^{x_1})=b$ 推 $e^{x_1}=x_0$ 时，没有用“$g$ 在 $(0,1)$ 上只有一解”。'],
      takeaway: '双函数最小值相同：先求各自最值再比；存在性证明用恒等式把两曲线“接”起来，再数交点并验证等差。',
      knowledge: ['k-dv-extreme', 'k-dv-ineq', 'k-dv-zero']
    }
  ]
});
