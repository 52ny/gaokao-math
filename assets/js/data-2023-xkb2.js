/* 2023 年普通高等学校招生全国统一考试（新课标Ⅱ卷）· 按 19 题结构重排
 * 公式约定：LaTeX 反斜杠一律写成 @；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: '2023-xkb2',
  title: '2023 年普通高等学校招生全国统一考试（新课标Ⅱ卷）· 19 题结构重排',
  short: '2023 新课标Ⅱ',
  year: 2023, region: '新课标Ⅱ卷', kind: 'real', duration: 150,
  note: '按 19 题结构重排：8 单选 + 3 多选 + 3 填空 + 5 解答',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `在复平面内，复数 $(1+3i)(3-i)$ 对应的点位于`,
      options: [
        { k: 'A', t: '第一象限' },
        { k: 'B', t: '第二象限' },
        { k: 'C', t: '第三象限' },
        { k: 'D', t: '第四象限' }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `先按多项式乘法展开：$(1+3i)(3-i)=3-i+9i-3i^2$。`,
        `由 $i^2=-1$ 得 $-3i^2=3$，所以原式 $=3+3+8i=6+8i$。`,
        `实部 $6>0$、虚部 $8>0$，对应点 $(6,8)$ 在第一象限，选 A。`
      ],
      hints: ['先算乘法，别急着看象限。', '记住 $i^2=-1$，合并实部与虚部。'],
      pitfalls: ['把 $-3i^2$ 算成 $-3$。', '把虚部 $8i$ 读成 $8$ 的符号以外的数，或把象限看错。'],
      takeaway: '复数乘除先化成 $a+bi$，再由实部、虚部的符号定象限。',
      knowledge: ['k-cx-basic', 'k-cx-geo']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 2,
      stem: `设集合 $A=@left@{0,-a@right@}$，$B=@left@{1,a-2,2a-2@right@}$，若 $A@subseteq B$，则 $a=$`,
      options: [
        { k: 'A', t: `$-1$` },
        { k: 'B', t: `$1$` },
        { k: 'C', t: `$-2$` },
        { k: 'D', t: `$2$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `$A@subseteq B$ 首先要求 $0@in B$，故 $a-2=0$ 或 $2a-2=0$，即 $a=2$ 或 $a=1$。`,
        `若 $a=2$，则 $B=@left@{1,0,2@right@}$，而 $A=@left@{0,-2@right@}$，$-2@notin B$，不合题意。`,
        `若 $a=1$，则 $B=@left@{1,-1,0@right@}$，$A=@left@{0,-1@right@}$，满足 $A@subseteq B$。`,
        `所以 $a=1$，选 B。`
      ],
      hints: ['先由 $0@in B$ 列出关于 $a$ 的方程。', '求出的每个 $a$ 都要代回检验 $-a$ 是否在 $B$ 中。'],
      pitfalls: ['只解出 $a$ 而不检验，误选 $a=2$。', '忘记集合元素互异，未检查 $B$ 中元素是否重复。'],
      takeaway: '含参集合的包含关系：先用“必有元素在 $B$ 中”定参数，再逐一代回验证。',
      knowledge: ['k-set-ops']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 1,
      stem: `某学校为了解学生参加体育运动的情况，用比例分配的分层随机抽样方法作抽样调查。已知该校初中部有 $400$ 人，高中部有 $200$ 人，现从全校学生中抽取 $60$ 人，则在初中部应抽取的人数为`,
      options: [
        { k: 'A', t: `$20$` },
        { k: 'B', t: `$30$` },
        { k: 'C', t: `$40$` },
        { k: 'D', t: `$50$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `分层抽样按比例分配，抽样比为 $@frac{60}{400+200}=@frac{1}{10}$。`,
        `初中部有 $400$ 人，应抽取 $400@times@frac{1}{10}=40$ 人。`,
        `所以选 C。`
      ],
      hints: ['先算总人数与抽样比。', '每一层按同一个比例抽取。'],
      pitfalls: ['按 $400:200$ 直接分配人数而不除以总数。', '把“初中部”与“高中部”的人数看反。'],
      takeaway: '分层抽样：抽样比 = 样本量 / 总体量，各层同比例。',
      knowledge: ['k-ps-sampling']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 3,
      stem: `若 $f(x)=(x+a)@ln@frac{2x-1}{2x+1}$ 为偶函数，则 $a=$`,
      options: [
        { k: 'A', t: `$-1$` },
        { k: 'B', t: `$0$` },
        { k: 'C', t: `$@frac{1}{2}$` },
        { k: 'D', t: `$1$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由 $@frac{2x-1}{2x+1}>0$ 得 $x<-@frac{1}{2}$ 或 $x>@frac{1}{2}$，定义域关于原点对称。`,
        `记 $g(x)=@ln@frac{2x-1}{2x+1}$，则 $g(-x)=@ln@frac{-2x-1}{-2x+1}=@ln@frac{2x+1}{2x-1}=-g(x)$，即 $g(x)$ 为奇函数。`,
        `$f(-x)=(-x+a)g(-x)=(x-a)g(x)$，偶函数要求 $(x-a)g(x)=(x+a)g(x)$ 在定义域内恒成立。`,
        `因为 $g(x)$ 不恒为 $0$，故 $-a=a$，即 $a=0$，选 B。`
      ],
      hints: ['先求定义域，确认它关于原点对称。', '先判断对数部分的奇偶性，再让乘积为偶函数。'],
      pitfalls: ['只代一个特殊值就说 $a=0$，没有说明恒成立。', '忽略定义域，误以为 $x=0$ 可以代入。'],
      takeaway: '奇偶函数乘积：奇 × 奇 = 偶，奇 × 偶 = 奇；先判定各因子的奇偶性。',
      knowledge: ['k-fn-prop']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 3,
      stem: `已知椭圆 $C:@frac{x^2}{3}+y^2=1$ 的左、右焦点分别为 $F_1,F_2$，直线 $y=x+m$ 与 $C$ 交于 $A,B$ 两点。若 $@triangle F_1AB$ 的面积是 $@triangle F_2AB$ 的面积的 $2$ 倍，则 $m=$`,
      options: [
        { k: 'A', t: `$-3@sqrt2$` },
        { k: 'B', t: `$-@frac{@sqrt2}{3}$` },
        { k: 'C', t: `$@frac{@sqrt2}{3}$` },
        { k: 'D', t: `$-@frac{2@sqrt2}{3}$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由 $a^2=3$，$b^2=1$ 得 $c=@sqrt2$，故 $F_1(-@sqrt2,0)$，$F_2(@sqrt2,0)$。`,
        `两个三角形同底 $AB$，面积比等于 $F_1,F_2$ 到直线 $x-y+m=0$ 的距离之比：$@frac{|m-@sqrt2|}{|m+@sqrt2|}=2$。`,
        `当 $-@sqrt2<m<@sqrt2$ 时，由 $@sqrt2-m=2(m+@sqrt2)$ 解得 $m=-@frac{@sqrt2}{3}$；当 $m@le-@sqrt2$ 时解得 $m=-3@sqrt2$。`,
        `联立 $y=x+m$ 与椭圆得 $4x^2+6mx+3m^2-3=0$，需 $@Delta=36m^2-16(3m^2-3)=48-12m^2>0$，即 $m^2<4$。`,
        `$m=-3@sqrt2$ 时 $m^2=18$，直线与椭圆无交点，舍去；$m=-@frac{@sqrt2}{3}$ 满足要求，选 B。`
      ],
      hints: ['同底三角形的面积比就是两个焦点到直线的距离比。', '用点到直线距离公式去绝对值时分区间讨论。', '最后用判别式检验直线是否真的与椭圆相交。'],
      pitfalls: ['解出 $m=-3@sqrt2$ 后直接作答，忘记检验 $@Delta>0$。', '距离公式中 $m$ 的符号写错。'],
      takeaway: '焦点三角形面积比 → 距离比；含参直线与圆锥曲线必须先验判别式。',
      knowledge: ['k-ag-conic', 'k-ag-chord', 'k-ag-area']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 3,
      stem: `已知函数 $f(x)=a@text{e}^x-@ln x$ 在区间 $(1,2)$ 上单调递增，则实数 $a$ 的最小值为`,
      options: [
        { k: 'A', t: `$@frac{1}{@text{e}}$` },
        { k: 'B', t: `$1$` },
        { k: 'C', t: `$@text{e}$` },
        { k: 'D', t: `$@text{e}^2$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `$f@prime(x)=a@text{e}^x-@frac{1}{x}$，在 $(1,2)$ 上单调递增等价于 $f@prime(x)@ge0$ 在 $(1,2)$ 上恒成立。`,
        `分离参数得 $a@ge@frac{1}{x@text{e}^x}$ 对任意 $x@in(1,2)$ 成立。`,
        `记 $h(x)=@frac{1}{x@text{e}^x}$，它在 $(1,2)$ 上单调递减，故 $h(x)<h(1)=@frac{1}{@text{e}}$，从而 $a@ge@frac{1}{@text{e}}$。`,
        `当 $a=@frac{1}{@text{e}}$ 时，$f@prime(x)=@text{e}^{x-1}-@frac{1}{x}>1-1=0$，确实在 $(1,2)$ 上单调递增。`,
        `所以 $a$ 的最小值为 $@frac{1}{@text{e}}$，选 A。`
      ],
      hints: ['先在区间上把 $f@prime(x)@ge0$ 恒成立转化为分离参数。', '求 $@frac{1}{x@text{e}^x}$ 在 $(1,2)$ 上的上确界，注意端点取不到。'],
      pitfalls: ['把“最小值”与“最小值点”混淆。', '忽略端点取不到，误认为 $a>@frac{1}{@text{e}}$。', '把 $h(x)$ 的单调性判断反，取成 $h(2)$。'],
      takeaway: '单调性求参：导数非负恒成立 → 分离参数 → 求上确界，再验证端点值可取。',
      knowledge: ['k-dv-monotone', 'k-dv-param']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 3,
      stem: `已知 $@alpha$ 为锐角，$@cos@alpha=@frac{1+@sqrt5}{4}$，则 $@sin@frac{@alpha}{2}=$`,
      options: [
        { k: 'A', t: `$@frac{@sqrt5-1}{4}$` },
        { k: 'B', t: `$@frac{@sqrt5+1}{4}$` },
        { k: 'C', t: `$@frac{3-@sqrt5}{4}$` },
        { k: 'D', t: `$@frac{3+@sqrt5}{4}$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `由半角公式 $@sin^2@frac{@alpha}{2}=@frac{1-@cos@alpha}{2}=@frac{1-@frac{1+@sqrt5}{4}}{2}=@frac{3-@sqrt5}{8}$。`,
        `又 $@frac{3-@sqrt5}{8}=@frac{6-2@sqrt5}{16}=@left(@frac{@sqrt5-1}{4}@right)^2$。`,
        `因为 $@alpha$ 为锐角，$@frac{@alpha}{2}@in@left(0,@frac{@pi}{4}@right)$，所以 $@sin@frac{@alpha}{2}>0$。`,
        `故 $@sin@frac{@alpha}{2}=@frac{@sqrt5-1}{4}$，选 A。`
      ],
      hints: ['先降次：用 $@sin^2@frac{@alpha}{2}=@frac{1-@cos@alpha}{2}$。', '把结果配成完全平方，再开方并判断符号。'],
      pitfalls: ['开方后不判断正负，误取负值。', '把半角公式的分母写成 $4$。'],
      takeaway: '半角求值：降次 → 配方 → 由角的范围定符号。',
      knowledge: ['k-tr-identity']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 4,
      stem: `记 $S_n$ 为等比数列 $@left@{a_n@right@}$ 的前 $n$ 项和。若 $S_4=-5$，$S_6=21S_2$，则 $S_8=$`,
      options: [
        { k: 'A', t: `$-85$` },
        { k: 'B', t: `$-75$` },
        { k: 'C', t: `$-65$` },
        { k: 'D', t: `$-55$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `设公比为 $q$，记 $S_2=t$。由 $S_4=-5@ne0$ 知 $t@ne0$。`,
        `$S_4=S_2+q^2S_2=t(1+q^2)$，同理 $S_6=t(1+q^2+q^4)$。`,
        `由 $S_6=21S_2$ 得 $1+q^2+q^4=21$，即 $q^4+q^2-20=0$，解得 $q^2=4$（$q^2=-5$ 舍去）。`,
        `于是 $t(1+4)=-5$，得 $t=-1$；而 $S_8=t(1+q^2+q^4+q^6)$。`,
        `所以 $S_8=-1@times(1+4+16+64)=-85$，选 A。`
      ],
      hints: ['把 $S_4,S_6$ 都用 $S_2$ 与 $q^2$ 表示。', '整体求出 $q^2$，不必分别求 $a_1$ 与 $q$。'],
      pitfalls: ['直接用等比求和公式时分母 $1-q$ 处理出错。', '只取 $q=2$，忽略 $q=-2$ 也满足（但 $S_8$ 与 $q$ 的符号无关）。'],
      takeaway: '等比数列片段和：用 $S_{2k}=S_2(1+q^2+@cdots+q^{2k-2})$ 整体处理。',
      knowledge: ['k-seq-basic', 'k-seq-sum']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知圆锥的顶点为 $P$，底面圆心为 $O$，$AB$ 为底面直径，$@angle APB=120^@circ$，$PA=2$，则`,
      options: [
        { k: 'A', t: `该圆锥的体积为 $@pi$` },
        { k: 'B', t: `该圆锥的侧面积为 $2@sqrt3@pi$` },
        { k: 'C', t: `该圆锥侧面展开图（扇形）的圆心角为 $@sqrt3@pi$` },
        { k: 'D', t: `该圆锥的轴截面面积为 $2@sqrt3$` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `在 $@triangle PAB$ 中 $PA=PB=2$，$@angle APB=120^@circ$，故 $AB=2@times2@sin60^@circ=2@sqrt3$，底面半径 $r=@sqrt3$。`,
        `高 $h=@sqrt{PA^2-r^2}=@sqrt{4-3}=1$，体积 $V=@frac13@pi r^2h=@frac13@pi@times3@times1=@pi$，A 正确。`,
        `侧面积 $S=@pi rl=@pi@times@sqrt3@times2=2@sqrt3@pi$，B 正确。`,
        `侧面展开图扇形圆心角 $@theta=@frac{2@pi r}{l}=@frac{2@pi@sqrt3}{2}=@sqrt3@pi$，C 正确。`,
        `轴截面 $@triangle PAB$ 的面积为 $@frac12@times AB@times h=@frac12@times2@sqrt3@times1=@sqrt3$，不是 $2@sqrt3$，D 错误。`,
        `综上，选 ABC。`
      ],
      hints: ['先在轴截面里求底面半径和高。', '侧面积是 $@pi rl$，扇形圆心角是 $@frac{2@pi r}{l}$。'],
      pitfalls: ['把母线 $2$ 当成高。', '扇形圆心角误用 $@frac{@pi r}{l}$ 或忘记乘 $2@pi$。', '轴截面面积忘记乘 $@frac12$。'],
      takeaway: '圆锥问题回到轴截面：$r,l,h$ 构成直角三角形，其余量套公式。',
      knowledge: ['k-so-solid']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 4,
      stem: `已知抛物线 $C:y^2=4x$ 的焦点为 $F$，$O$ 为坐标原点，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$C$ 的准线方程为 $x=-1$` },
        { k: 'B', t: `过 $F$ 且垂直于 $x$ 轴的弦长为 $4$` },
        { k: 'C', t: `若点 $P$ 在 $C$ 上，且 $|PF|=3$，则 $@triangle POF$ 的面积为 $@sqrt2$` },
        { k: 'D', t: `对 $C$ 上任意一点 $P$，以 $PF$ 为直径的圆与 $x$ 轴相切` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `由 $2p=4$ 得 $p=2$，焦点 $F(1,0)$，准线 $x=-1$，A 正确。`,
        `过 $F$ 且垂直于 $x$ 轴的弦是通径，长为 $2p=4$，B 正确。`,
        `设 $P(x_0,y_0)$，由抛物线定义 $|PF|=x_0+1=3$，得 $x_0=2$，$y_0^2=8$，$|y_0|=2@sqrt2$。`,
        `于是 $S_{@triangle POF}=@frac12|OF|@cdot|y_0|=@frac12@times1@times2@sqrt2=@sqrt2$，C 正确。`,
        `以 $PF$ 为直径的圆，圆心到 $y$ 轴的距离为 $@frac{x_0+1}{2}$，恰等于半径 $@frac{|PF|}{2}=@frac{x_0+1}{2}$，故圆与 $y$ 轴相切；而它到 $x$ 轴的距离为 $@frac{|y_0|}{2}=@sqrt{x_0}$，一般不等于半径，D 错误。`,
        `综上，选 ABC。`
      ],
      hints: ['抛物线定义：$|PF|=x_0+@frac{p}{2}$。', '通径长为 $2p$。', '判断相切看圆心到直线的距离是否等于半径。'],
      pitfalls: ['把准线写成 $x=-2$。', 'C 中把 $x_0$ 求成 $3$。', 'D 中想当然认为圆与 $x$ 轴相切，其实与 $y$ 轴相切。'],
      takeaway: '抛物线小题：定义、通径、焦点弦是三个固定得分点；“相切”必须核对距离等于半径。',
      knowledge: ['k-ag-conic', 'k-ag-chord', 'k-ag-line']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 4,
      stem: `已知函数 $f(x)$ 的定义域为 $@mathbf{R}$，$f(x+1)$ 是偶函数，$f(x+2)$ 是奇函数，则`,
      options: [
        { k: 'A', t: `$f(x+2)=-f(x)$` },
        { k: 'B', t: `$f(0)=0$` },
        { k: 'C', t: `$f(1)=0$` },
        { k: 'D', t: `$f(2024)=0$` }
      ],
      answer: 'ABD',
      accept: [],
      solution: [
        `$f(x+1)$ 为偶函数，即 $f(1+t)=f(1-t)$，也就是 $f(2-x)=f(x)$。`,
        `$f(x+2)$ 为奇函数，即 $f(2-t)=-f(2+t)$，也就是 $f(2-x)=-f(2+x)$。`,
        `两式比较得 $f(2+x)=-f(x)$，A 正确；令 $x=0$ 得 $f(2)=-f(0)$，而由 $f(2-x)=f(x)$ 得 $f(2)=f(0)$，故 $f(0)=0$，B 正确。`,
        `由 $f(x+2)=-f(x)$ 得 $f(x+4)=f(x)$，即 $4$ 是周期；又 $2024=4@times506$，故 $f(2024)=f(0)=0$，D 正确。`,
        `取 $f(x)=@sin@frac{@pi x}{2}$：$f(x+1)=@cos@frac{@pi x}{2}$ 为偶函数，$f(x+2)=-@sin@frac{@pi x}{2}$ 为奇函数，但 $f(1)=1@ne0$，故 C 错误。`,
        `综上，选 ABD。`
      ],
      hints: ['把“$f(x+1)$ 偶”翻译成对称轴 $x=1$，“$f(x+2)$ 奇”翻译成对称中心 $(2,0)$。', '两个对称关系联立，先证 $f(x+2)=-f(x)$。', '判断某个选项错误，最好给出满足条件的反例函数。'],
      pitfalls: ['把 $f(x+2)$ 为奇函数写成 $f(x+2)=-f(-x-2)$ 之类的错误对称式。', '由 $f(0)=0$ 外推 $f(1)=0$。'],
      takeaway: '对称与周期：轴对称 + 点对称 → 半周期；抽象函数选项用具体函数作反例最快。',
      knowledge: ['k-fn-prop']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 2,
      stem: `某学校要从 $5$ 名男生和 $2$ 名女生中选出 $3$ 人担任志愿者，要求至少有 $1$ 名女生，则不同的选法共有 ________ 种。`,
      answer: `$25$`,
      accept: ['25'],
      solution: [
        `从 $7$ 人中任选 $3$ 人，共有 $@binom{7}{3}=35$ 种选法。`,
        `全是男生的选法有 $@binom{5}{3}=10$ 种。`,
        `所以至少有 $1$ 名女生的选法为 $35-10=25$ 种。`
      ],
      hints: ['“至少一名”优先用总数减去对立情形。', '注意男女生都只是“人”，同性别内部不区分顺序。'],
      pitfalls: ['直接算 $@binom{5}{1}@binom{2}{2}+@binom{5}{2}@binom{2}{1}$ 时漏项。', '把选人当成排列，多乘了 $3!$。'],
      takeaway: '至少型计数：总数 − 反面，比分类更稳。',
      knowledge: ['k-count']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 3,
      stem: `已知向量 $@vec a,@vec b$ 满足 $|@vec a-@vec b|=@sqrt3$，$|@vec a+@vec b|=|2@vec a-@vec b|$，则 $|@vec b|=$ ________ .`,
      answer: `$@sqrt3$`,
      accept: ['sqrt3', '√3', '3^(1/2)'],
      solution: [
        `由 $|@vec a+@vec b|=|2@vec a-@vec b|$ 两边平方：$|@vec a|^2+2@vec a@cdot@vec b+|@vec b|^2=4|@vec a|^2-4@vec a@cdot@vec b+|@vec b|^2$。`,
        `整理得 $3|@vec a|^2-6@vec a@cdot@vec b=0$，即 $@vec a@cdot@vec b=@frac{1}{2}|@vec a|^2$。`,
        `再由 $|@vec a-@vec b|^2=3$ 得 $|@vec a|^2-2@vec a@cdot@vec b+|@vec b|^2=3$。`,
        `代入 $@vec a@cdot@vec b=@frac12|@vec a|^2$，得 $|@vec b|^2=3$，所以 $|@vec b|=@sqrt3$。`
      ],
      hints: ['见模长等式先平方，化为数量积。', '两个条件联立可以消去 $|@vec a|$。'],
      pitfalls: ['平方展开漏掉交叉项 $2@vec a@cdot@vec b$。', '把 $|2@vec a-@vec b|^2$ 写成 $2|@vec a|^2-|@vec b|^2$。'],
      takeaway: '向量模的等式一律平方，交叉项是解题关键。',
      knowledge: ['k-vec-dot']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 4,
      stem: `已知圆锥的底面半径为 $3$，母线长为 $5$，则该圆锥内切球的半径为 ________ .`,
      answer: `$@frac{3}{2}$`,
      accept: ['3/2', '1.5'],
      solution: [
        `圆锥的高 $h=@sqrt{5^2-3^2}=4$。`,
        `作轴截面，得到底边长为 $6$、两腰长为 $5$ 的等腰三角形，内切球半径等于该三角形的内切圆半径。`,
        `三角形面积 $S=@frac12@times6@times4=12$，半周长 $p=@frac{6+5+5}{2}=8$。`,
        `故内切圆半径 $r=@frac{S}{p}=@frac{12}{8}=@frac{3}{2}$。`
      ],
      hints: ['内切球问题先画轴截面，化为平面三角形的内切圆。', '内切圆半径用 $r=@frac{S}{p}$（$p$ 为半周长）。'],
      pitfalls: ['把母线 $5$ 当作高。', '用 $r=@frac{2S}{周长}$ 时误除以周长而不是半周长。', '把轴截面底边写成 $3$。'],
      takeaway: '旋转体内切球：轴截面内切圆，$r=@frac{S}{p}$ 一步到位。',
      knowledge: ['k-so-sphere']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `记 $@triangle ABC$ 的内角 $A,B,C$ 的对边分别为 $a,b,c$，已知 $(2b-c)@cos A=a@cos C$。(1) 求 $A$；(2) 若 $a=@sqrt7$，$b=2$，求 $c$ 及 $@triangle ABC$ 的面积。`,
      answer: `(1) $A=@frac{@pi}{3}$；(2) $c=3$，$@triangle ABC$ 的面积为 $@frac{3@sqrt3}{2}$`,
      accept: [],
      solution: [
        `(1) 由正弦定理，$(2b-c)@cos A=a@cos C$ 可化为 $(2@sin B-@sin C)@cos A=@sin A@cos C$。`,
        `移项得 $2@sin B@cos A=@sin A@cos C+@cos A@sin C=@sin(A+C)=@sin B$。`,
        `因为 $@sin B>0$，所以 $@cos A=@frac{1}{2}$；又 $A@in(0,@pi)$，故 $A=@frac{@pi}{3}$。`,
        `(2) 由余弦定理 $a^2=b^2+c^2-2bc@cos A$，即 $7=4+c^2-2c$。`,
        `整理得 $c^2-2c-3=0$，解得 $c=3$（$c=-1$ 舍去）。`,
        `所以 $S=@frac12bc@sin A=@frac12@times2@times3@times@frac{@sqrt3}{2}=@frac{3@sqrt3}{2}$。`
      ],
      hints: ['边化角：把 $a,b,c$ 全换成对应角的正弦。', '利用 $A+C=@pi-B$ 把右边合成一个正弦。', '第 (2) 问用余弦定理列方程，解出 $c$ 后取正根。'],
      pitfalls: ['边化角时漏掉公共因子 $2R$。', '把 $@sin(A+C)$ 直接写成 $@sin B$ 时弄错符号。', '解二次方程后不检验 $c>0$。'],
      takeaway: '解三角形：边角互化 + 内角和，先定角再定边，最后算面积。',
      knowledge: ['k-tr-solve', 'k-tr-identity']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 4,
      stem: `在四棱锥 $P-ABCD$ 中，底面 $ABCD$ 是边长为 $2$ 的正方形，$PA@perp$ 平面 $ABCD$，$PA=2$，$E$ 为 $PA$ 的中点。(1) 证明：$BD@perp$ 平面 $PAC$；(2) 求二面角 $E-BC-A$ 的余弦值。`,
      answer: `(1) 证明见解析；(2) $@frac{2@sqrt5}{5}$`,
      accept: [],
      solution: [
        `(1) 因为 $ABCD$ 是正方形，所以 $BD@perp AC$；因为 $PA@perp$ 平面 $ABCD$，$BD@subset$ 平面 $ABCD$，所以 $PA@perp BD$。`,
        `又 $AC@cap PA=A$，且 $AC,PA@subset$ 平面 $PAC$，所以 $BD@perp$ 平面 $PAC$。`,
        `(2) 以 $A$ 为原点，$AB,AD,AP$ 所在直线分别为 $x,y,z$ 轴建立空间直角坐标系，则 $B(2,0,0)$，$C(2,2,0)$，$E(0,0,1)$。`,
        `$@overrightarrow{BC}=(0,2,0)$，$@overrightarrow{BE}=(-2,0,1)$。设平面 $EBC$ 的法向量 $@vec n=(x,y,z)$，由 $2y=0$ 与 $-2x+z=0$ 可取 $@vec n=(1,0,2)$。`,
        `平面 $ABC$ 的法向量为 $@vec m=(0,0,1)$，故 $@cos@langle@vec n,@vec m@rangle=@frac{2}{@sqrt5}=@frac{2@sqrt5}{5}$。`,
        `结合图形知二面角 $E-BC-A$ 为锐角，所以其余弦值为 $@frac{2@sqrt5}{5}$。`
      ],
      hints: ['第 (1) 问要证线面垂直，必须找平面内两条相交直线。', '第 (2) 问三条棱 $AB,AD,AP$ 两两垂直，可直接建系。', '二面角用两法向量夹角的余弦，再结合图形定符号。'],
      pitfalls: ['只证 $BD@perp AC$ 就下结论，漏掉 $PA@perp BD$ 与“相交”。', '$E$ 的坐标误写成 $(0,0,2)$。', '把二面角当成钝角而加负号。'],
      takeaway: '线面垂直凑齐“两条相交直线”；二面角 = 两法向量夹角余弦 + 图形定锐钝。',
      knowledge: ['k-so-parallel', 'k-so-angle']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 4,
      stem: `已知数列 $@left@{a_n@right@}$ 的前 $n$ 项和为 $S_n$，且 $S_n=2a_n-2$。(1) 证明 $@left@{a_n@right@}$ 是等比数列，并求其通项公式；(2) 设 $b_n=(2n-1)a_n$，求数列 $@left@{b_n@right@}$ 的前 $n$ 项和 $T_n$。`,
      answer: `(1) $a_n=2^n$；(2) $T_n=(2n-3)2^{n+1}+6$`,
      accept: [],
      solution: [
        `(1) 当 $n=1$ 时，$a_1=S_1=2a_1-2$，得 $a_1=2$。`,
        `当 $n@ge2$ 时，$a_n=S_n-S_{n-1}=(2a_n-2)-(2a_{n-1}-2)=2a_n-2a_{n-1}$，即 $a_n=2a_{n-1}$；又 $a_1=2@ne0$，故 $@left@{a_n@right@}$ 是首项为 $2$、公比为 $2$ 的等比数列，$a_n=2^n$。`,
        `(2) $b_n=(2n-1)2^n$，则 $T_n=1@times2+3@times2^2+@cdots+(2n-1)2^n$。`,
        `两边乘 $2$ 得 $2T_n=1@times2^2+3@times2^3+@cdots+(2n-3)2^n+(2n-1)2^{n+1}$。`,
        `两式相减：$-T_n=2+2(2^2+2^3+@cdots+2^n)-(2n-1)2^{n+1}=2+2(2^{n+1}-4)-(2n-1)2^{n+1}=(3-2n)2^{n+1}-6$。`,
        `所以 $T_n=(2n-3)2^{n+1}+6$。`
      ],
      hints: ['已知 $S_n$ 与 $a_n$ 的关系，先取 $n=1$，再用 $a_n=S_n-S_{n-1}$（$n@ge2$）。', '第 (2) 问是等差 × 等比，用错位相减。', '相减后中间是等比数列求和，注意项数与首项。'],
      pitfalls: ['使用 $a_n=S_n-S_{n-1}$ 时忘记 $n@ge2$ 的限制，未单独求 $a_1$。', '错位相减时末项符号写错。', '等比部分求和项数少算一项。'],
      takeaway: '错位相减三步：写 $T_n$、乘公比写 $2T_n$、相减后中间等比求和。',
      knowledge: ['k-seq-recursion', 'k-seq-basic', 'k-seq-sum']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 4,
      stem: `甲、乙两人进行乒乓球比赛，采用五局三胜制（先胜三局者获胜），每局比赛没有平局。已知甲每局获胜的概率为 $@frac{2}{3}$，各局比赛结果相互独立。(1) 求甲以 $3:0$ 获胜的概率；(2) 求甲最终获胜的概率；(3) 记比赛的总局数为 $X$，求 $X$ 的分布列与数学期望 $E(X)$。`,
      answer: `(1) $@frac{8}{27}$；(2) $@frac{64}{81}$；(3) 分布列见解析，$E(X)=@frac{107}{27}$`,
      accept: [],
      solution: [
        `记甲每局获胜概率 $p=@frac{2}{3}$，乙每局获胜概率 $q=@frac{1}{3}$。`,
        `(1) 甲以 $3:0$ 获胜即连胜三局，概率为 $p^3=@frac{8}{27}$。`,
        `(2) 甲以 $3:1$ 获胜：前三局甲胜 $2$ 局、第四局胜，概率 $@binom{3}{2}p^3q=@frac{8}{27}$；甲以 $3:2$ 获胜：前四局甲胜 $2$ 局、第五局胜，概率 $@binom{4}{2}p^3q^2=@frac{16}{81}$。故甲最终获胜的概率为 $@frac{8}{27}+@frac{8}{27}+@frac{16}{81}=@frac{64}{81}$。`,
        `(3) $X$ 的取值为 $3,4,5$。$P(X=3)=p^3+q^3=@frac{8}{27}+@frac{1}{27}=@frac{1}{3}$。`,
        `$P(X=4)=@binom{3}{2}(p^3q+q^3p)=3@left(@frac{8}{81}+@frac{2}{81}@right)=@frac{10}{27}$，故 $P(X=5)=1-@frac{1}{3}-@frac{10}{27}=@frac{8}{27}$。`,
        `所以 $E(X)=3@times@frac{1}{3}+4@times@frac{10}{27}+5@times@frac{8}{27}=@frac{107}{27}$。`
      ],
      hints: ['先分清“恰好三局结束”“四局结束”“五局结束”的结构：最后一局必须由胜者赢下。', '以 $3:1$ 获胜时，输的一局可以出现在前 $3$ 局的任意位置。', '分布列求完要检验概率和为 $1$。'],
      pitfalls: ['把 $3:1$ 的概率写成 $p^3q$，漏乘 $@binom{3}{2}$。', '把 $3:2$ 写成前四局胜 $3$ 局，导致组合数用错。', '分布列概率和不为 $1$ 仍继续算期望。'],
      takeaway: '五局三胜：按最终比分 $3:0,3:1,3:2$ 分类，最后一局固定，前面的用二项分布计数。',
      knowledge: ['k-ps-prob', 'k-ps-dist', 'k-ps-expect']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 5,
      stem: `定义：设 $n$ 为正整数，$A$ 是 $@left@{1,2,@dots,n@right@}$ 的子集。若 $A$ 中任意两个不同元素的差的绝对值都不等于 $1$，则称 $A$ 为 $@left@{1,2,@dots,n@right@}$ 的一个“离散集”。记 $M(n,k)$ 为 $@left@{1,2,@dots,n@right@}$ 的含 $k$ 个元素的离散集的个数（$1@le k@le n$），$T(n)$ 为 $@left@{1,2,@dots,n@right@}$ 的所有离散集的个数（规定空集也是离散集）。(1) 写出 $@left@{1,2,3,4,5@right@}$ 的所有含 $3$ 个元素的离散集，并求 $M(5,2)$；(2) 求 $M(n,k)$；(3) 求 $T(n)$ 满足的递推关系，并求从 $@left@{1,2,@dots,10@right@}$ 的所有离散集中随机抽取一个、恰好含 $4$ 个元素的概率。`,
      answer: `(1) 只有 $@left@{1,3,5@right@}$ 一个，$M(5,2)=6$；(2) $M(n,k)=@binom{n-k+1}{k}$；(3) $T(n)=T(n-1)+T(n-2)$（$n@ge3$），$T(1)=2$，$T(2)=3$，所求概率为 $@frac{35}{144}$`,
      accept: [],
      solution: [
        `(1) 含 $3$ 个元素且两两不相邻，只能取 $1,3,5$，故只有 $@left@{1,3,5@right@}$ 一个。含 $2$ 个元素的离散集为 $@left@{1,3@right@},@left@{1,4@right@},@left@{1,5@right@},@left@{2,4@right@},@left@{2,5@right@},@left@{3,5@right@}$，共 $6$ 个，即 $M(5,2)=6$。`,
        `(2) 设 $A=@left@{x_1<x_2<@cdots<x_k@right@}$ 为离散集，则 $x_{i+1}-x_i@ge2$。令 $y_i=x_i-(i-1)$，则 $1@le y_1<y_2<@cdots<y_k@le n-k+1$，即 $@left@{y_1,@dots,y_k@right@}$ 是 $@left@{1,2,@dots,n-k+1@right@}$ 的任意 $k$ 元子集。`,
        `这个对应是一一映射：由 $x_i=y_i+(i-1)$ 可还原，且还原后必有 $x_{i+1}-x_i=(y_{i+1}-y_i)+1@ge2$。故 $M(n,k)=@binom{n-k+1}{k}$。`,
        `(3) 按 $n$ 是否属于 $A$ 分类：若 $n@notin A$，则 $A$ 是 $@left@{1,2,@dots,n-1@right@}$ 的离散集，共 $T(n-1)$ 个；若 $n@in A$，则 $n-1@notin A$，去掉 $n$ 后得到 $@left@{1,2,@dots,n-2@right@}$ 的离散集，共 $T(n-2)$ 个。`,
        `两类不重不漏且可逆还原，故 $T(n)=T(n-1)+T(n-2)$（$n@ge3$）。又 $T(1)=2$，$T(2)=3$，依次得 $T(3)=5,T(4)=8,T(5)=13,T(6)=21,T(7)=34,T(8)=55,T(9)=89,T(10)=144$。`,
        `由 (2) 得 $M(10,4)=@binom{7}{4}=35$，且各离散集被抽到的机会相等，故所求概率为 $@frac{35}{144}$。`
      ],
      hints: ['先把“两两不相邻”翻译成 $x_{i+1}-x_i@ge2$。', '第 (2) 问用“压缩变换” $y_i=x_i-(i-1)$，把条件变成普通组合数。', '第 (3) 问按最大数 $n$ 是否入选分类，得到斐波那契型递推。', '算概率前先分别求出总个数与符合条件的个数。'],
      pitfalls: ['第 (2) 问忘记验证反向映射，一一对应不完整。', '第 (3) 问只讨论“$n@in A$”一类，漏掉“$n@notin A$”。', '把 $T(10)$ 算成 $89$（差一项），或把 $M(10,4)$ 写成 $@binom{10}{4}$。'],
      takeaway: '新定义计数：先小规模枚举找规律，再用“压缩变换”或“按末位分类”建立一一对应与递推。',
      knowledge: ['k-count', 'k-seq-recursion', 'k-ps-prob']
    }
  ]
});
