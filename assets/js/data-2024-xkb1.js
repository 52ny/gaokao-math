/* 2024 年普通高等学校招生全国统一考试（新课标Ⅰ卷）数学 · 题库数据
 * 公式约定：LaTeX 反斜杠一律写成 @；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: '2024-xkb1',
  title: '2024 年普通高等学校招生全国统一考试（新课标Ⅰ卷）数学',
  short: '2024 新课标Ⅰ',
  year: 2024,
  region: '新课标Ⅰ卷',
  kind: 'real',
  duration: 150,
  note: '新高考 19 题结构：8 单选 + 3 多选 + 3 填空 + 5 解答。题目依据公开真题整理，个别题目为同考点等价改编。',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `已知集合 $A=@left@{x@mid x^2-2x-3@le0@right@}$，$B=@left@{x@mid x>0@right@}$，则 $A@cap B=$`,
      options: [
        { k: 'A', t: `$@left(0,3@right)$` },
        { k: 'B', t: `$@left(0,3@right]$` },
        { k: 'C', t: `$@left[-1,3@right]$` },
        { k: 'D', t: `$@left[0,3@right]$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由 $x^2-2x-3@le0$ 得 $(x-3)(x+1)@le0$，所以 $A=@left[-1,3@right]$。`,
        `$B=@left(0,+@infty@right)$，与 $A$ 取交集得 $0<x@le3$，即 $@left(0,3@right]$。`,
        `故选 B。`
      ],
      hints: ['先解一元二次不等式，把集合 $A$ 化为区间。', '注意 $0$ 不在 $B$ 中，检查交集端点。'],
      pitfalls: ['把 $A$ 的解集写成 $@left(-@infty,-1@right]@cup@left[3,+@infty@right)$。', '取交集时误把端点 $0$ 算进去。'],
      takeaway: '集合运算先化简不等式，再逐个端点判断开闭。',
      knowledge: ['k-set-ops']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 1,
      stem: `若 $(1+i)z=2i$，其中 $i$ 为虚数单位，则 $z=$`,
      options: [
        { k: 'A', t: `$1-i$` },
        { k: 'B', t: `$1+i$` },
        { k: 'C', t: `$-1+i$` },
        { k: 'D', t: `$-1-i$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由 $(1+i)z=2i$ 得 $z=@frac{2i}{1+i}$。`,
        `分子分母同乘 $1-i$：$z=@frac{2i(1-i)}{(1+i)(1-i)}=@frac{2+2i}{2}=1+i$。`,
        `故选 B。`
      ],
      hints: ['把除法化为乘法，分子分母同乘分母的共轭复数。', '注意 $i^2=-1$。'],
      pitfalls: ['分母有理化时漏乘共轭或算错 $i^2$。', '把 $z$ 的实部与虚部符号弄反。'],
      takeaway: '复数除法：分子分母同乘分母的共轭，分母变为模的平方。',
      knowledge: ['k-cx-basic']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 2,
      stem: `已知向量 $@vec a,@vec b$ 满足 $|@vec a|=1$，$|@vec b|=2$，$|@vec a+@vec b|=@sqrt3$，则 $@vec a$ 与 $@vec b$ 的夹角为`,
      options: [
        { k: 'A', t: `$@frac{@pi}{6}$` },
        { k: 'B', t: `$@frac{@pi}{3}$` },
        { k: 'C', t: `$@frac{2@pi}{3}$` },
        { k: 'D', t: `$@frac{5@pi}{6}$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `把 $|@vec a+@vec b|=@sqrt3$ 两边平方：$1+4+2@vec a@cdot@vec b=3$，所以 $@vec a@cdot@vec b=-1$。`,
        `设夹角为 $@theta$，则 $@cos@theta=@frac{@vec a@cdot@vec b}{|@vec a||@vec b|}=-@frac{1}{2}$。`,
        `因为 $@theta@in@left[0,@pi@right]$，所以 $@theta=@frac{2@pi}{3}$，选 C。`
      ],
      hints: ['模长条件先平方，求出数量积。', '用 $@cos@theta=@frac{@vec a@cdot@vec b}{|@vec a||@vec b|}$ 求角。'],
      pitfalls: ['平方时漏掉 $2@vec a@cdot@vec b$ 这一项。', '忽视夹角范围，得到负角或锐角。'],
      takeaway: '向量模长问题：平方展开，把模长与数量积互相转化。',
      knowledge: ['k-vec-dot']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 3,
      stem: `已知 $@sin@left(@alpha+@frac{@pi}{4}@right)=@frac{3}{5}$，则 $@sin2@alpha=$`,
      options: [
        { k: 'A', t: `$-@frac{7}{25}$` },
        { k: 'B', t: `$@frac{7}{25}$` },
        { k: 'C', t: `$-@frac{24}{25}$` },
        { k: 'D', t: `$@frac{24}{25}$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `展开得 $@frac{@sqrt2}{2}(@sin@alpha+@cos@alpha)=@frac{3}{5}$，所以 $@sin@alpha+@cos@alpha=@frac{3@sqrt2}{5}$。`,
        `两边平方：$1+2@sin@alpha@cos@alpha=@frac{18}{25}$。`,
        `即 $1+@sin2@alpha=@frac{18}{25}$，所以 $@sin2@alpha=@frac{18}{25}-1=-@frac{7}{25}$，选 A。`
      ],
      hints: ['先用两角和正弦公式打开，得到 $@sin@alpha+@cos@alpha$。', '把 $@sin@alpha+@cos@alpha$ 平方，出现 $@sin2@alpha$。'],
      pitfalls: ['展开时漏乘 $@frac{@sqrt2}{2}$。', '平方后忘记左边的 $1$。'],
      takeaway: '$@sin@alpha@pm@cos@alpha$ 与 $@sin2@alpha$ 通过平方互相转化。',
      knowledge: ['k-tr-identity']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 3,
      stem: `已知圆柱的轴截面是正方形，且该圆柱的侧面积为 $4@pi$，则该圆柱外接球的表面积为`,
      options: [
        { k: 'A', t: `$4@pi$` },
        { k: 'B', t: `$6@pi$` },
        { k: 'C', t: `$8@pi$` },
        { k: 'D', t: `$12@pi$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `设圆柱底面半径为 $r$，高为 $h$。轴截面是正方形，故 $h=2r$。`,
        `侧面积 $S_@text{侧}=2@pi rh=4@pi r^2=4@pi$，得 $r=1$，$h=2$。`,
        `外接球半径 $R$ 满足 $R^2=r^2+@left(@frac h2@right)^2=1+1=2$。`,
        `球的表面积 $S=4@pi R^2=8@pi$，选 C。`
      ],
      hints: ['轴截面为正方形说明高等于底面直径。', '外接球球心在圆柱轴的中点。'],
      pitfalls: ['把轴截面正方形的边长当成 $r$ 而非 $2r$。', '求外接球半径时忘记加 $(h/2)^2$。'],
      takeaway: '旋转体外接球：球心在轴上，用勾股关系 $R^2=r^2+(h/2)^2$。',
      knowledge: ['k-so-sphere']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 3,
      stem: `设 $a=@log_2 3$，$b=@log_3 4$，$c=@frac{4}{3}$，则`,
      options: [
        { k: 'A', t: `$a>b>c$` },
        { k: 'B', t: `$a>c>b$` },
        { k: 'C', t: `$b>c>a$` },
        { k: 'D', t: `$c>a>b$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `比较 $a$ 与 $c$：由 $2^4=16<27=3^3$ 得 $2^{4/3}<3$，即 $@log_2 3>@frac{4}{3}$，所以 $a>c$。`,
        `比较 $b$ 与 $c$：由 $3^4=81>64=4^3$ 得 $3^{4/3}>4$，即 $@log_3 4<@frac{4}{3}$，所以 $b<c$。`,
        `因此 $a>c>b$，选 B。`
      ],
      hints: ['把对数比较转化为指数比较，避免估算误差。', '分别判断 $a$ 与 $@frac43$、$b$ 与 $@frac43$ 的大小。'],
      pitfalls: ['直接取近似值但误差过大。', '不等式方向在取对数时弄反。'],
      takeaway: '对数比较大小：化指数、找中间量，两边同时乘方消去根号。',
      knowledge: ['k-fn-prop']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 2,
      stem: `从 3 名男生和 2 名女生中随机选出 3 人参加活动，则选出的 3 人中恰有 2 名女生的概率为`,
      options: [
        { k: 'A', t: `$@frac{1}{10}$` },
        { k: 'B', t: `$@frac{3}{10}$` },
        { k: 'C', t: `$@frac{2}{5}$` },
        { k: 'D', t: `$@frac{1}{2}$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `从 5 人中选 3 人的总数为 $C_5^3=10$。`,
        `恰有 2 名女生即 2 名女生全选、再从 3 名男生中选 1 人，方法数为 $C_2^2 C_3^1=3$。`,
        `所求概率 $P=@frac{3}{10}$，选 B。`
      ],
      hints: ['先算总的选法数。', '恰有 2 名女生 = 女生选 2 人、男生选 1 人。'],
      pitfalls: ['把女生选法算成 $C_2^1$。', '忘记除以总选法数。'],
      takeaway: '古典概型：分步计数求有利数，组合数作分母。',
      knowledge: ['k-ps-prob']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 3,
      stem: `若对任意 $x>0$，不等式 $e^x@ge ax$ 恒成立，则实数 $a$ 的最大值为`,
      options: [
        { k: 'A', t: `$1$` },
        { k: 'B', t: `$e$` },
        { k: 'C', t: `$e^2$` },
        { k: 'D', t: `$2e$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `因为 $x>0$，原不等式等价于 $a@le@frac{e^x}{x}$。`,
        `令 $g(x)=@frac{e^x}{x}$，则 $g'(x)=@frac{e^x(x-1)}{x^2}$。`,
        `当 $0<x<1$ 时 $g'(x)<0$，当 $x>1$ 时 $g'(x)>0$，所以 $g(x)$ 在 $x=1$ 处取得最小值 $g(1)=e$。`,
        `故 $a@le e$，$a$ 的最大值为 $e$，选 B。`
      ],
      hints: ['分离参数，把 $a$ 放到不等式一侧。', '求 $@frac{e^x}{x}$ 的最小值。'],
      pitfalls: ['直接令 $x=1$ 代入而不说明它是最小值。', '分离参数时不等号方向写反。'],
      takeaway: '恒成立问题：分离参数，转化为求另一侧函数的最值。',
      knowledge: ['k-dv-ineq']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 3,
      stem: `在棱长为 $1$ 的正方体 $ABCD-A_1B_1C_1D_1$ 中，下列结论正确的是`,
      options: [
        { k: 'A', t: `直线 $BD_1@perp$ 平面 $A_1BC_1$` },
        { k: 'B', t: `三棱锥 $A_1-ABD$ 的体积为 $@frac{1}{6}$` },
        { k: 'C', t: `直线 $BC_1$ 与 $A_1B$ 所成角为 $60^@circ$` },
        { k: 'D', t: `平面 $A_1BD@perp$ 平面 $C_1BD$` }
      ],
      answer: 'BC',
      accept: [],
      solution: [
        `建立坐标系：$A(0,0,0)$，$B(1,0,0)$，$C(1,1,0)$，$D(0,1,0)$，$A_1(0,0,1)$，$B_1(1,0,1)$，$C_1(1,1,1)$，$D_1(0,1,1)$。`,
        `对 A：$@vec{BD_1}=(-1,1,1)$，平面 $A_1BC_1$ 的法向量可取 $(-1,1,-1)$，二者不平行，故 A 错。`,
        `对 B：$S_{@triangle ABD}=@frac12$，$A_1$ 到平面 $ABD$ 的距离为 $1$，$V=@frac13@times@frac12@times1=@frac16$，故 B 对。`,
        `对 C：$@vec{BC_1}=(0,1,1)$，$@vec{A_1B}=(1,0,-1)$，$@cos@langle@vec{BC_1},@vec{A_1B}@rangle=@frac{-1}{@sqrt2@cdot@sqrt2}=-@frac12$，故两直线所成角为 $60^@circ$，C 对。`,
        `对 D：两平面法向量分别取 $(-1,-1,-1)$ 与 $(-1,-1,1)$，数量积为 $1@ne0$，故 D 错。`,
        `综上，选 BC。`
      ],
      hints: ['正方体题优先建系，用向量判断平行与垂直。', '线线角取向量夹角或其补角，范围为 $@left[0,@frac{@pi}{2}@right]$。'],
      pitfalls: ['A 中只验证一个方向就下结论。', 'C 中把向量夹角 $120^@circ$ 当成线线角。', 'D 中把“法向量垂直”与“平面垂直”混淆。'],
      takeaway: '空间位置关系判定：建系求法向量，线线角取锐角。',
      knowledge: ['k-so-solid', 'k-so-angle']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知函数 $f(x)=@sin@left(2x+@frac{@pi}{3}@right)$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$f(x)$ 的最小正周期为 $@pi$` },
        { k: 'B', t: `$f(x)$ 的图象关于直线 $x=@frac{@pi}{12}$ 对称` },
        { k: 'C', t: `$f(x)$ 在 $@left[-@frac{@pi}{3},@frac{@pi}{6}@right]$ 上单调递增` },
        { k: 'D', t: `将 $f(x)$ 的图象向右平移 $@frac{@pi}{6}$ 个单位长度，得到 $y=@sin2x$ 的图象` }
      ],
      answer: 'ABD',
      accept: [],
      solution: [
        `A：$@omega=2$，最小正周期 $T=@frac{2@pi}{@omega}=@pi$，正确。`,
        `B：当 $x=@frac{@pi}{12}$ 时，$2x+@frac{@pi}{3}=@frac{@pi}{2}$，$f(x)=1$ 为最大值，故图象关于该直线对称，正确。`,
        `C：当 $x@in@left[-@frac{@pi}{3},@frac{@pi}{6}@right]$ 时，$2x+@frac{@pi}{3}@in@left[-@frac{@pi}{3},@frac{2@pi}{3}@right]$，正弦在该区间先增后减，故 C 错。`,
        `D：向右平移 $@frac{@pi}{6}$ 得 $@sin@left(2@left(x-@frac{@pi}{6}@right)+@frac{@pi}{3}@right)=@sin2x$，正确。`,
        `综上，选 ABD。`
      ],
      hints: ['先把相位 $2x+@frac{@pi}{3}$ 看成一个整体。', '判断单调性时求出相位的完整取值范围。', '平移口诀：左加右减，只改 $x$。'],
      pitfalls: ['C 中只看端点函数值就判断单调性。', 'D 中把平移量加在相位外或忘记乘 $2$。'],
      takeaway: '三角函数性质：把相位当整体，单调区间与对称轴都解相位的不等式/方程。',
      knowledge: ['k-tr-graph', 'k-fn-prop']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 4,
      stem: `已知抛物线 $C:y^2=4x$ 的焦点为 $F$，过 $F$ 的直线 $l$ 与 $C$ 交于 $A(x_1,y_1),B(x_2,y_2)$ 两点，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$x_1x_2=1$` },
        { k: 'B', t: `$y_1y_2=-4$` },
        { k: 'C', t: `$|AB|$ 的最小值为 $4$` },
        { k: 'D', t: `以 $AB$ 为直径的圆经过原点 $O$` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `焦点 $F(1,0)$，设 $l:x=my+1$（该形式包含竖直直线 $x=1$）。代入 $y^2=4x$ 得 $y^2-4my-4=0$。`,
        `所以 $y_1+y_2=4m$，$y_1y_2=-4$，B 正确。`,
        `$x_1x_2=@frac{y_1^2}{4}@cdot@frac{y_2^2}{4}=@frac{(y_1y_2)^2}{16}=1$，A 正确。`,
        `$|AB|=x_1+x_2+2=@frac{(y_1+y_2)^2-2y_1y_2}{4}+2=4m^2+4@ge4$，当 $m=0$ 时取等号，C 正确。`,
        `若圆过原点，则 $@vec{OA}@cdot@vec{OB}=x_1x_2+y_1y_2=1-4=-3@ne0$，故 D 错误。`,
        `综上，选 ABC。`
      ],
      hints: ['过焦点的直线设为 $x=my+1$ 可避免讨论斜率。', '把 $x$ 用 $y$ 表示，利用韦达定理。', '圆过原点等价于 $@vec{OA}@cdot@vec{OB}=0$。'],
      pitfalls: ['设 $y=k(x-1)$ 时漏掉竖直线。', '焦点弦长公式记错，忘记加 $p$。'],
      takeaway: '抛物线焦点弦：设 $x=my+p/2$，用 $y$ 的二次方程与韦达定理处理。',
      knowledge: ['k-ag-conic', 'k-ag-chord']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 3,
      stem: `已知直线 $l$ 经过点 $P(0,1)$，且与圆 $C:(x-2)^2+y^2=4$ 相切，则 $l$ 的方程为 ________ .`,
      answer: `$x=0$ 或 $3x-4y+4=0$`,
      accept: ['x=0或3x-4y+4=0', 'x=0，3x-4y+4=0', '3x-4y+4=0或x=0'],
      solution: [
        `圆 $C$ 的圆心为 $(2,0)$，半径为 $2$。`,
        `若 $l$ 斜率不存在，则 $l:x=0$，圆心到它的距离为 $2$，恰等于半径，故相切。`,
        `若 $l$ 斜率存在，设 $l:y=kx+1$，即 $kx-y+1=0$。`,
        `相切条件 $@frac{|2k+1|}{@sqrt{k^2+1}}=2$，平方得 $4k^2+4k+1=4k^2+4$，解得 $k=@frac34$。`,
        `此时 $l:y=@frac34x+1$，即 $3x-4y+4=0$。`,
        `综上，$l$ 的方程为 $x=0$ 或 $3x-4y+4=0$。`
      ],
      hints: ['先判断 $P$ 在圆外，切线有两条。', '设点斜式时，先单独讨论斜率不存在的情形。', '圆心到切线的距离等于半径。'],
      pitfalls: ['漏掉竖直线 $x=0$。', '点斜式设线后忘记验证判别式或距离条件。'],
      takeaway: '过圆外一点的切线：先补竖直线，再用圆心到直线距离等于半径。',
      knowledge: ['k-ag-line']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 3,
      stem: `已知等比数列 $@left@{a_n@right@}$ 的前 $n$ 项和为 $S_n$，且 $S_3=7$，$S_6=63$，则 $a_7=$ ________ .`,
      answer: `$64$`,
      accept: ['64', '2^6'],
      solution: [
        `设公比为 $q$。若 $q=1$，则 $S_6=2S_3=14@ne63$，故 $q@ne1$。`,
        `由 $S_6=S_3(1+q^3)$ 得 $1+q^3=@frac{63}{7}=9$，所以 $q^3=8$，$q=2$。`,
        `又 $S_3=a_1(1+q+q^2)=7a_1=7$，得 $a_1=1$。`,
        `所以 $a_7=a_1q^6=2^6=64$。`
      ],
      hints: ['用 $S_6=S_3+S_3q^3$ 建立关于 $q^3$ 的方程。', '先排除 $q=1$ 的情况。'],
      pitfalls: ['忽略 $q=1$ 的讨论。', '把 $a_7$ 的指数写成 $7$ 而不是 $6$。'],
      takeaway: '等比数列片段和：$S_{2n}=S_n(1+q^n)$，先求 $q^n$。',
      knowledge: ['k-seq-basic', 'k-seq-sum']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 4,
      stem: `若函数 $f(x)=@ln x-ax$ 恰有两个零点，则实数 $a$ 的取值范围是 ________ .`,
      answer: `$@left(0,@frac{1}{e}@right)$`,
      accept: ['(0,1/e)', '0<a<1/e', 'a∈(0,1/e)'],
      solution: [
        `定义域为 $x>0$，$f'(x)=@frac1x-a$。`,
        `当 $a@le0$ 时，$f'(x)>0$，$f(x)$ 在 $(0,+@infty)$ 上单调递增，至多一个零点，不合题意。`,
        `当 $a>0$ 时，$f(x)$ 在 $@left(0,@frac1a@right)$ 上递增，在 $@left(@frac1a,+@infty@right)$ 上递减，最大值为 $f@left(@frac1a@right)=-@ln a-1$。`,
        `又 $x@to0^+$ 与 $x@to+@infty$ 时都有 $f(x)@to-@infty$，故两个零点当且仅当最大值大于 $0$。`,
        `即 $-@ln a-1>0$，$@ln a<-1$，解得 $0<a<@frac1e$。`
      ],
      hints: ['先求导，按 $a$ 的正负分类。', '极大值就是最大值，两个零点的条件是最大值大于 $0$。', '注意结合两端极限判断零点的存在性。'],
      pitfalls: ['忽略定义域 $x>0$。', '把条件写成最大值大于等于 $0$，导致端点重复计入。'],
      takeaway: '含参零点个数：单调性定形状，极值符号定个数。',
      knowledge: ['k-dv-zero']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `在 $@triangle ABC$ 中，内角 $A,B,C$ 所对的边分别为 $a,b,c$，已知 $b@cos C+c@cos B=2a@cos A$。（1）求 $A$；（2）若 $a=2$，求 $@triangle ABC$ 周长的最大值。`,
      answer: `（1）$@frac{@pi}{3}$；（2）$6$`,
      accept: [],
      solution: [
        `（1）由正弦定理 $b=2R@sin B$，$c=2R@sin C$。`,
        `所以 $b@cos C+c@cos B=2R(@sin B@cos C+@sin C@cos B)=2R@sin(B+C)=2R@sin A=a$。`,
        `又已知它等于 $2a@cos A$，且 $a>0$，故 $@cos A=@frac12$，从而 $A=@frac{@pi}{3}$。`,
        `（2）由 $A=@frac{@pi}{3}$ 得 $B+C=@frac{2@pi}{3}$，且 $2R=@frac{a}{@sin A}=@frac{4}{@sqrt3}$。`,
        `$b+c=2R(@sin B+@sin C)=@frac{4}{@sqrt3}@cdot2@sin@frac{@pi}{3}@cos@frac{B-C}{2}=4@cos@frac{B-C}{2}@le4$。`,
        `当 $B=C=@frac{@pi}{3}$ 时取等号，此时三角形为等边三角形，周长 $a+b+c@le2+4=6$，故最大值为 $6$。`
      ],
      hints: ['第 (1) 问用正弦定理把边化成角，再用和角公式。', '第 (2) 问把 $b+c$ 化为关于 $B-C$ 的余弦，注意 $B+C$ 已固定。'],
      pitfalls: ['第 (1) 问直接约去 $a$ 却不说明 $a>0$。', '第 (2) 问只算 $b+c$ 的上界，忘记加上 $a$。'],
      takeaway: '解三角形最值：边化角后，用和差化积把双变量压成一变量。',
      knowledge: ['k-tr-solve', 'k-tr-maxmin']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 4,
      stem: `已知椭圆 $C:@frac{x^2}{a^2}+@frac{y^2}{b^2}=1(a>b>0)$ 的离心率为 $@frac{@sqrt3}{2}$，且经过点 $(2,1)$。（1）求 $C$ 的方程；（2）过点 $Q(0,2)$ 的直线 $l$ 与 $C$ 交于 $A,B$ 两点，求 $@triangle OAB$ 面积的最大值。`,
      answer: `（1）$@frac{x^2}{8}+@frac{y^2}{2}=1$；（2）$2$`,
      accept: [],
      solution: [
        `（1）由 $e^2=@frac{c^2}{a^2}=@frac34$ 得 $b^2=a^2-c^2=@frac14a^2$。`,
        `代入点 $(2,1)$：$@frac{4}{a^2}+@frac{1}{b^2}=@frac{4}{a^2}+@frac{4}{a^2}=1$，解得 $a^2=8$，$b^2=2$。`,
        `所以 $C:@frac{x^2}{8}+@frac{y^2}{2}=1$。`,
        `（2）当 $l$ 斜率不存在时，$l:x=0$，$A,B$ 都在 $y$ 轴上，$@triangle OAB$ 面积为 $0$。`,
        `当 $l$ 斜率存在时，设 $l:y=kx+2$，代入 $C$ 得 $(1+4k^2)x^2+16kx+8=0$。`,
        `由 $@Delta=256k^2-32(1+4k^2)=32(4k^2-1)>0$ 得 $k^2>@frac14$。`,
        `由韦达定理 $x_1+x_2=-@frac{16k}{1+4k^2}$，$x_1x_2=@frac{8}{1+4k^2}$。`,
        `$S=@frac12|x_1y_2-x_2y_1|=|x_1-x_2|=@frac{@sqrt{@Delta}}{1+4k^2}=@frac{4@sqrt{2(4k^2-1)}}{1+4k^2}$。`,
        `令 $t=4k^2>1$，则 $S=@frac{4@sqrt{2(t-1)}}{t+1}$，$S^2=@frac{32(t-1)}{(t+1)^2}$。`,
        `再令 $u=t+1>2$，则 $S^2=@frac{32(u-2)}{u^2}$，求导可知当 $u=4$ 时取得最大值 $4$。`,
        `此时 $t=3$，$k=@pm@frac{@sqrt3}{2}$，$S_{@max}=2$。`
      ],
      hints: ['第 (1) 问用离心率把 $b^2$ 表示为 $a^2$ 的倍数，再一次代点。', '第 (2) 问先单独讨论斜率不存在。', '面积用 $@frac12|x_1y_2-x_2y_1|$，由于直线过 $y$ 轴上的点，可化为 $|x_1-x_2|$。', '换元后注意 $t$ 的范围，再求二次分式的最值。'],
      pitfalls: ['漏掉斜率不存在的直线。', '把面积写成 $@frac12|OQ|@cdot|AB|$ 但 $OQ$ 与 $AB$ 不垂直。', '换元后没有写 $t>1$，导致取到边界。'],
      takeaway: '椭圆面积最值：联立韦达 → 面积化为 $|x_1-x_2|$ → 换元 → 求分式最值。',
      knowledge: ['k-ag-conic', 'k-ag-area', 'k-ag-chord']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 4,
      stem: `在四棱锥 $P-ABCD$ 中，底面 $ABCD$ 是边长为 $2$ 的正方形，$PA@perp$ 平面 $ABCD$，$PA=2$，$E$ 为 $PD$ 的中点。（1）证明：$PB@parallel$ 平面 $ACE$；（2）求直线 $PC$ 与平面 $ACE$ 所成角的正弦值。`,
      answer: `（1）证明见解析；（2）$@frac13$`,
      accept: [],
      solution: [
        `以 $A$ 为原点，$AB,AD,AP$ 所在直线分别为 $x,y,z$ 轴建立空间直角坐标系，则`,
        `$A(0,0,0)$，$B(2,0,0)$，$C(2,2,0)$，$D(0,2,0)$，$P(0,0,2)$，$E(0,1,1)$。`,
        `（1）$@vec{PB}=(2,0,-2)$。平面 $ACE$ 中 $@vec{AC}=(2,2,0)$，$@vec{AE}=(0,1,1)$，法向量可取 $@vec n=(1,-1,1)$。`,
        `因为 $@vec n@cdot@vec{PB}=2-0-2=0$，且 $@vec n@cdot@vec{AP}=2@ne0$（即 $P$ 不在平面 $ACE$ 内），所以 $PB@parallel$ 平面 $ACE$。`,
        `（2）$@vec{PC}=(2,2,-2)$。设直线 $PC$ 与平面 $ACE$ 所成的角为 $@theta$，则`,
        `$@sin@theta=@frac{|@vec{PC}@cdot@vec n|}{|@vec{PC}||@vec n|}=@frac{|2-2-2|}{2@sqrt3@cdot@sqrt3}=@frac{2}{6}=@frac13$。`,
        `所以所求正弦值为 $@frac13$。`
      ],
      hints: ['建系前先确认三条棱两两垂直，可以直接用 $AB,AD,AP$。', '证明线面平行：方向向量与平面法向量垂直，且直线不在平面内。', '线面角用 $@sin@theta=@frac{|@vec a@cdot@vec n|}{|@vec a||@vec n|}$。'],
      pitfalls: ['证明线面平行时只证向量垂直，不说明直线不在平面内。', '线面角误用 $@cos$ 公式。', '中点坐标算错。'],
      takeaway: '建系解立体几何：证平行看方向向量与法向量垂直，求线面角用正弦。',
      knowledge: ['k-so-angle', 'k-so-angle']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 4,
      stem: `已知函数 $f(x)=e^x-ax-1$，$a@in@mathbb{R}$。（1）讨论 $f(x)$ 的单调性；（2）若 $f(x)@ge0$ 对任意 $x@in@mathbb{R}$ 恒成立，求 $a$ 的值；（3）证明：对任意 $x>0$，$@ln x@le x-1$。`,
      answer: `（1）当 $a@le0$ 时，$f(x)$ 在 $@mathbb{R}$ 上单调递增；当 $a>0$ 时，$f(x)$ 在 $@left(-@infty,@ln a@right)$ 上单调递减，在 $@left(@ln a,+@infty@right)$ 上单调递增。（2）$a=1$。（3）证明见解析。`,
      accept: [],
      solution: [
        `（1）$f'(x)=e^x-a$。`,
        `当 $a@le0$ 时，$f'(x)>0$，$f(x)$ 在 $@mathbb{R}$ 上单调递增。`,
        `当 $a>0$ 时，由 $f'(x)=0$ 得 $x=@ln a$；$x<@ln a$ 时 $f'(x)<0$，$x>@ln a$ 时 $f'(x)>0$。`,
        `所以 $f(x)$ 在 $@left(-@infty,@ln a@right)$ 上单调递减，在 $@left(@ln a,+@infty@right)$ 上单调递增。`,
        `（2）若 $a@le0$，则 $f(x)$ 在 $@mathbb{R}$ 上单调递增，且 $x@to-@infty$ 时 $f(x)@to-@infty$，不能恒有 $f(x)@ge0$，故 $a>0$。`,
        `此时 $f(x)$ 的最小值为 $f(@ln a)=a-a@ln a-1$。`,
        `令 $@varphi(a)=a-a@ln a-1$，则 $@varphi'(a)=-@ln a$，$@varphi(a)$ 在 $(0,1)$ 上递增，在 $(1,+@infty)$ 上递减，最大值为 $@varphi(1)=0$。`,
        `因此 $@varphi(a)@le0$ 恒成立；而题设要求最小值 $@varphi(a)@ge0$，故只能 $@varphi(a)=0$，即 $a=1$。`,
        `（3）由（2）知对任意实数 $t$ 都有 $e^t@ge t+1$。`,
        `对 $x>0$，令 $t=@ln x$，则 $e^{@ln x}=x@ge@ln x+1$，即 $@ln x@le x-1$。`
      ],
      hints: ['第 (1) 问按 $a$ 的正负分类讨论导函数符号。', '第 (2) 问先排除 $a@le0$，再研究最小值关于 $a$ 的函数。', '第 (3) 问把 $x$ 写成 $e^{@ln x}$，套用已证不等式。'],
      pitfalls: ['第 (1) 问把 $a>0$ 时的单调区间写反。', '第 (2) 问只令最小值等于 $0$，不说明最大值 $0$ 的唯一性。', '第 (3) 问换元时忽略 $x>0$ 的定义域。'],
      takeaway: '恒成立问题：先找最小值，再把“最小值 ≥ 0”转化为关于参数的函数最值。',
      knowledge: ['k-dv-monotone', 'k-dv-ineq']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 5,
      stem: `设 $m$ 为正整数，数列 $a_1,a_2,@dots,a_{4m+2}$ 是公差不为 $0$ 的等差数列。若从中删去两项 $a_i$ 和 $a_j$（$i<j$）后，剩余的 $4m$ 项可被平均分成 $m$ 组，且每组的 $4$ 个数都能构成等差数列，则称该数列是 $(i,j)$-可分数列。（1）当 $m=1$ 时，写出所有的 $(i,j)$，使该数列是 $(i,j)$-可分数列；（2）当 $m@ge3$ 时，证明：该数列是 $(2,13)$-可分数列；（3）从 $1,2,@dots,4m+2$ 中任取两个不同的数 $i,j$，记该数列是 $(i,j)$-可分数列的概率为 $P_m$，证明：$P_m>@frac{1}{8}$。`,
      answer: `（1）$(1,2),(1,6),(5,6)$；（2）证明见解析；（3）证明见解析，$P_m>@frac{1}{8}$`,
      accept: [],
      solution: [
        `原数列是公差不为 $0$ 的等差数列，把每项减去 $a_1$ 再除以公差，不影响“每组 4 项构成等差数列”的性质，故不妨设 $a_n=n$，只需考察 $1,2,@dots,4m+2$。`,
        `（1）$m=1$ 时考察 $1,2,3,4,5,6$。删去两项后剩下的 4 个数必须构成等差数列。`,
        `在 $1@sim6$ 中，4 项等差数列只有 $@left@{1,2,3,4@right@}$、$@left@{2,3,4,5@right@}$、$@left@{3,4,5,6@right@}$。`,
        `它们的补集分别为 $@left@{5,6@right@}$、$@left@{1,6@right@}$、$@left@{1,2@right@}$，故所有的 $(i,j)$ 为 $(1,2),(1,6),(5,6)$。`,
        `（2）删去 $2,13$ 后，把剩余项分成 $@left@{1,4,7,10@right@}$、$@left@{3,6,9,12@right@}$、$@left@{5,8,11,14@right@}$，它们都是公差为 $3$ 的等差数列。`,
        `余下的 $15,16,@dots,4m+2$ 共有 $4m-12=4(m-3)$ 项，从前往后每 4 项一组，每组都是公差为 $1$ 的等差数列。`,
        `因此当 $m@ge3$ 时，该数列是 $(2,13)$-可分数列。`,
        `（3）从 $1,2,@dots,4m+2$ 中任取两个不同的数，共有 $C_{4m+2}^{2}=(2m+1)(4m+1)=8m^2+6m+1$ 种取法。`,
        `第一类好数对：$(4a+1,4b+2)$，其中 $0@le a@le b@le m$，共有 $@frac{(m+1)(m+2)}{2}$ 对。`,
        `删去这两项后，剩余数被分成三段连续整数：$@left[1,4a@right]$、$@left[4a+2,4b+1@right]$、$@left[4b+3,4m+2@right]$，三段长度分别为 $4a$、$4(b-a)$、$4(m-b)$，都是 4 的倍数，故按每 4 个连续整数分组即可。`,
        `例如删去 $1$ 和 $6$ 后，分组为 $@left@{2,3,4,5@right@},@left@{7,8,9,10@right@},@left@{11,12,13,14@right@},@dots$，每组都连续。`,
        `第二类好数对：$(4a+2,4b+1)$，其中 $0@le a@le m-2$，$a+2@le b@le m$，共有 $m(m-1)/2$ 对。`,
        `记 $k=b-a$。删去这两项后，前 $4a$ 项和最后 $4(m-b)$ 项各自按连续 4 项分组即可，中间 $[4a+1,4b+2]$ 去掉 $4a+2,4b+1$ 后剩 $4k$ 个数。`,
        `若 $k$ 为偶数，对 $t=0,1,@dots,@frac{k}{2}-1$ 取 $@left@{4a+8t+1,4a+8t+3,4a+8t+5,4a+8t+7@right@}$ 与 $@left@{4a+8t+4,4a+8t+6,4a+8t+8,4a+8t+10@right@}$，它们都是公差为 $2$ 的等差数列。`,
        `若 $k$ 为奇数，令 $q=@frac{k-3}{2}$：前 $2q$ 组按偶数情形取；再从 $s=4a+8q+1$ 起取 $@left@{s,s+3,s+6,s+9@right@}$、$@left@{s+2,s+5,s+8,s+11@right@}$、$@left@{s+4,s+7,s+10,s+13@right@}$，它们都是公差为 $3$ 的等差数列。`,
        `此时 $s+1$ 已由前一组成覆盖，$s+12=4b+1$ 恰为删去项，故中间部分被完全覆盖。`,
        `所以这两类数对都是可分的，且两类数对互不重复。`,
        `于是 $P_m@ge@frac{@frac{(m+1)(m+2)}{2}+@frac{m(m-1)}{2}}{8m^2+6m+1}=@frac{m^2+m+1}{8m^2+6m+1}$。`,
        `又 $8(m^2+m+1)-(8m^2+6m+1)=2m+7>0$，所以 $P_m>@frac{1}{8}$。`
      ],
      hints: ['第 (1) 问先利用平移与伸缩把数列化为 $1,2,@dots,4m+2$。', '第 (2) 问先处理前 14 项，剩下的项数恰为 4 的倍数。', '第 (3) 问按 $i,j$ 除以 4 的余数分类，构造两类好数对并计数，再与总取法数比较。'],
      pitfalls: ['忘记说明公差可化为 $1$，直接对一般等差数列讨论。', '第二类构造只给出分组形式，未验证是否覆盖中间全部元素。', '计数时把 $i,j$ 的范围或大小顺序弄错，导致重复计数。'],
      takeaway: '新定义数列题：先抓不变量（平移、伸缩），再把存在性转化为构造，把概率转化为计数。',
      knowledge: ['k-seq-basic', 'k-count', 'k-ps-prob']
    }
  ]
});
