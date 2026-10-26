/* 2026 年普通高等学校招生全国统一考试（新高考Ⅱ卷）数学 · 题库数据
 * 公式约定：LaTeX 反斜杠一律写成 @；字符串中不出现美元符号紧接左花括号的组合。
 */
window.GK_PAPERS = window.GK_PAPERS || [];
window.GK_PAPERS.push({
  id: '2026-xkb2',
  title: '2026 年普通高等学校招生全国统一考试（新高考Ⅱ卷）',
  short: '2026 新高考Ⅱ',
  year: 2026, region: '新高考Ⅱ卷', kind: 'real', duration: 150,
  note: '19 题结构：8 单选 + 3 多选 + 3 填空 + 5 解答；第19题为新定义压轴',
  questions: [
    {
      no: 1, type: 'single', score: 5, difficulty: 1,
      stem: `已知集合 $A=@left@{x@mid |x-1|@le1@right@}$，$B=@left@{x@mid x^2-4x<0@right@}$，则 $A@cap B=$`,
      options: [
        { k: 'A', t: `$@left(0,2@right]$` },
        { k: 'B', t: `$@left[0,2@right]$` },
        { k: 'C', t: `$@left(0,2@right)$` },
        { k: 'D', t: `$@left[0,2@right)$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `由 $|x-1|@le1$ 得 $-1@le x-1@le1$，即 $0@le x@le2$，故 $A=@left[0,2@right]$。`,
        `由 $x^2-4x<0$ 即 $x(x-4)<0$ 得 $0<x<4$，故 $B=@left(0,4@right)$。`,
        `同时满足 $0@le x@le2$ 与 $0<x<4$，得 $0<x@le2$。`,
        `所以 $A@cap B=@left(0,2@right]$，选 A。`
      ],
      hints: ['先解绝对值不等式与一元二次不等式，把两个集合都化成区间。', '取交集时逐个检验端点 $0$ 与 $2$ 是否属于 $B$。'],
      pitfalls: ['把 $|x-1|@le1$ 解成 $0@le x@le1$。', '误把端点 $0$ 算进交集。'],
      takeaway: '集合运算：先把各集合化成最简区间，再逐端点判断开闭。',
      knowledge: ['k-set-ops']
    },
    {
      no: 2, type: 'single', score: 5, difficulty: 2,
      stem: `已知复数 $z$ 满足 $z(1+i)=2i$，则 $|z|=$`,
      options: [
        { k: 'A', t: `$1$` },
        { k: 'B', t: `$@sqrt2$` },
        { k: 'C', t: `$2$` },
        { k: 'D', t: `$2@sqrt2$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `由 $z(1+i)=2i$ 得 $z=@frac{2i}{1+i}$。`,
        `分子分母同乘 $1-i$：$z=@frac{2i(1-i)}{(1+i)(1-i)}=@frac{2+2i}{2}=1+i$。`,
        `所以 $|z|=@sqrt{1^2+1^2}=@sqrt2$，选 B。`
      ],
      hints: ['复数除法先分母实数化：分子分母同乘分母的共轭复数。', '也可对等式两边取模：$|z||1+i|=|2i|$，直接得 $|z|=@sqrt2$。'],
      pitfalls: ['把 $(1+i)(1-i)$ 算成 $1-i^2=0$。', '求出 $z=1+i$ 后忘记开方，把模答成 $2$。'],
      takeaway: '复数除法用分母实数化；求模可走 $|z_1z_2|=|z_1||z_2|$ 的捷径。',
      knowledge: ['k-cx-basic']
    },
    {
      no: 3, type: 'single', score: 5, difficulty: 2,
      stem: `已知 $@sin@left(@alpha+@frac{@pi}{6}@right)=@frac35$，且 $@alpha@in@left(0,@frac{@pi}{3}@right)$，则 $@sin@left(2@alpha+@frac{@pi}{3}@right)=$`,
      options: [
        { k: 'A', t: `$@frac{24}{25}$` },
        { k: 'B', t: `$@frac{7}{25}$` },
        { k: 'C', t: `$-@frac{7}{25}$` },
        { k: 'D', t: `$-@frac{24}{25}$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `令 $@beta=@alpha+@frac{@pi}{6}$，由 $@alpha@in@left(0,@frac{@pi}{3}@right)$ 得 $@beta@in@left(@frac{@pi}{6},@frac{@pi}{2}@right)$。`,
        `由 $@sin@beta=@frac35$ 且 $@beta$ 在第一象限，得 $@cos@beta=@sqrt{1-@frac{9}{25}}=@frac45$。`,
        `注意 $2@alpha+@frac{@pi}{3}=2@beta$。`,
        `所以 $@sin@left(2@alpha+@frac{@pi}{3}@right)=@sin2@beta=2@sin@beta@cos@beta=2@times@frac35@times@frac45=@frac{24}{25}$，选 A。`
      ],
      hints: ['把 $@alpha+@frac{@pi}{6}$ 整体看成 $@beta$，所求角恰为 $2@beta$。', '先用平方关系求 $@cos@beta$，再判断符号。'],
      pitfalls: ['没有判断 $@beta$ 的范围，把 $@cos@beta$ 取成 $-@frac45$。', '把所求角误当成 $@beta+@frac{@pi}{6}$，用错了二倍角。'],
      takeaway: '整体代换：把复杂角设成新变量，再用二倍角公式。',
      knowledge: ['k-tr-identity']
    },
    {
      no: 4, type: 'single', score: 5, difficulty: 2,
      stem: `记等差数列 $@left@{a_n@right@}$ 的前 $n$ 项和为 $S_n$。若 $S_5=20$，$S_{10}=70$，则 $S_{15}=$`,
      options: [
        { k: 'A', t: `$120$` },
        { k: 'B', t: `$150$` },
        { k: 'C', t: `$160$` },
        { k: 'D', t: `$180$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `等差数列中 $S_5$，$S_{10}-S_5$，$S_{15}-S_{10}$ 也成等差数列。`,
        `$S_5=20$，$S_{10}-S_5=70-20=50$，其公差为 $50-20=30$。`,
        `故 $S_{15}-S_{10}=50+30=80$，所以 $S_{15}=70+80=150$。`,
        `也可设首项 $a_1$、公差 $d$：$5a_1+10d=20$，$10a_1+45d=70$，解得 $a_1=@frac85$，$d=@frac65$，同样得 $S_{15}=150$，选 B。`
      ],
      hints: ['利用片段和性质：$S_5$，$S_{10}-S_5$，$S_{15}-S_{10}$ 成等差数列。', '也可回到基本量 $a_1,d$ 解方程组验证。'],
      pitfalls: ['把片段和当作等比处理，得到 $S_{15}=170$。', '误以为 $S_{15}=3S_{10}-3S_5$ 这类错误线性关系。'],
      takeaway: '等差数列片段和成等差：用它可绕开解方程组。',
      knowledge: ['k-seq-sum']
    },
    {
      no: 5, type: 'single', score: 5, difficulty: 3,
      stem: `已知正四面体 $P-ABC$ 的棱长为 $2$，则该正四面体外接球的表面积为`,
      options: [
        { k: 'A', t: `$3@pi$` },
        { k: 'B', t: `$6@pi$` },
        { k: 'C', t: `$8@pi$` },
        { k: 'D', t: `$12@pi$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `正四面体棱长 $a=2$，其高 $h=@sqrt{a^2-@left(@frac{@sqrt3}{3}a@right)^2}=@frac{@sqrt6}{3}a=@frac{2@sqrt6}{3}$。`,
        `球心在高所在直线上，且到顶点与到底面中心的距离满足 $R=@frac34h$（球心把高分成 $3:1$）。`,
        `故 $R=@frac34@times@frac{2@sqrt6}{3}=@frac{@sqrt6}{2}$。`,
        `所以表面积 $S=4@pi R^2=4@pi@times@frac{6}{4}=6@pi$，选 B。`
      ],
      hints: ['先求正四面体的高，球心在高所在直线上。', '记住结论：正四面体 $R=@frac{@sqrt6}{4}a$，也可由 $R=@frac34h$ 推出。'],
      pitfalls: ['把 $R$ 记成 $@frac{@sqrt3}{3}a$。', '把球的表面积公式误写成 $@frac43@pi R^3$。'],
      takeaway: '正四面体基本量：高 $@frac{@sqrt6}{3}a$，外接球半径 $@frac{@sqrt6}{4}a$，内切球半径 $@frac{@sqrt6}{12}a$。',
      knowledge: ['k-so-sphere']
    },
    {
      no: 6, type: 'single', score: 5, difficulty: 3,
      stem: `已知抛物线 $C:y^2=4x$ 的焦点为 $F$，点 $P$ 在 $C$ 上，且 $|PF|=5$，则 $@triangle OFP$（$O$ 为坐标原点）的面积为`,
      options: [
        { k: 'A', t: `$1$` },
        { k: 'B', t: `$2$` },
        { k: 'C', t: `$4$` },
        { k: 'D', t: `$8$` }
      ],
      answer: 'B',
      accept: [],
      solution: [
        `抛物线 $y^2=4x$ 的准线为 $x=-1$，焦点 $F(1,0)$。`,
        `由抛物线定义，$|PF|$ 等于 $P$ 到准线的距离，故 $x_P+1=5$，得 $x_P=4$。`,
        `代入 $y^2=4x$ 得 $y_P^2=16$，即 $|y_P|=4$。`,
        `所以 $S=@frac12|OF|@cdot|y_P|=@frac12@times1@times4=2$，选 B。`
      ],
      hints: ['抛物线上点到焦点的距离等于到准线的距离。', '求出 $P$ 的横坐标后回代求纵坐标，再算面积。'],
      pitfalls: ['把 $|PF|$ 直接当成横坐标，得 $x_P=5$。', '面积公式漏乘 $@frac12$ 或把底取成 $|PF|$。'],
      takeaway: '抛物线焦半径 $|PF|=x_P+@frac{p}{2}$：先定横坐标，再定纵坐标。',
      knowledge: ['k-ag-conic']
    },
    {
      no: 7, type: 'single', score: 5, difficulty: 2,
      stem: `袋中有 $3$ 个红球和 $2$ 个白球，除颜色外完全相同。不放回地依次取出 $2$ 个球，则在第一次取到红球的条件下，第二次也取到红球的概率为`,
      options: [
        { k: 'A', t: `$@frac{3}{10}$` },
        { k: 'B', t: `$@frac{2}{5}$` },
        { k: 'C', t: `$@frac12$` },
        { k: 'D', t: `$@frac35$` }
      ],
      answer: 'C',
      accept: [],
      solution: [
        `第一次取到红球后，袋中还剩 $2$ 个红球、$2$ 个白球，共 $4$ 个。`,
        `所以第二次取到红球的概率为 $@frac24=@frac12$，选 C。`,
        `用条件概率公式验证：$P(AB)=@frac{3@times2}{5@times4}=@frac{3}{10}$，$P(A)=@frac35$，故 $P(B|A)=@frac{@frac{3}{10}}{@frac35}=@frac12$。`
      ],
      hints: ['条件概率：条件发生后样本空间缩小为剩余球的集合。', '不放回取球，总数与目标数都要相应减 $1$。'],
      pitfalls: ['把条件概率当成无条件概率 $@frac{3}{10}$。', '忘记第一次取走后总数变为 $4$。'],
      takeaway: '条件概率：先“固定条件”改写样本空间，再用公式交叉验证。',
      knowledge: ['k-ps-prob']
    },
    {
      no: 8, type: 'single', score: 5, difficulty: 4,
      stem: `设 $a=@frac{@ln2}{2}$，$b=@frac{@ln3}{3}$，$c=@frac{@ln5}{5}$，则`,
      options: [
        { k: 'A', t: `$b>a>c$` },
        { k: 'B', t: `$a>b>c$` },
        { k: 'C', t: `$c>b>a$` },
        { k: 'D', t: `$b>c>a$` }
      ],
      answer: 'A',
      accept: [],
      solution: [
        `构造 $f(x)=@frac{@ln x}{x}(x>0)$，则 $f'(x)=@frac{1-@ln x}{x^2}$。`,
        `当 $0<x<e$ 时 $f'(x)>0$，$f(x)$ 单调递增；当 $x>e$ 时 $f'(x)<0$，$f(x)$ 单调递减。`,
        `因为 $2<3<e$，所以 $f(2)<f(3)$，即 $a<b$。`,
        `比较 $b,c$：由 $3^5=243>125=5^3$ 得 $5@ln3>3@ln5$，即 $@frac{@ln3}{3}>@frac{@ln5}{5}$，故 $b>c$。`,
        `比较 $a,c$：由 $2^5=32>25=5^2$ 得 $5@ln2>2@ln5$，即 $@frac{@ln2}{2}>@frac{@ln5}{5}$，故 $a>c$。`,
        `综上 $b>a>c$，选 A。`
      ],
      hints: ['三个数统一成 $@frac{@ln x}{x}$ 的形式，构造同一个函数。', '用 $e$ 作分界点判断单调性。', '跨区间比较时把对数不等式化为整数幂的大小。'],
      pitfalls: ['误认为 $@frac{@ln x}{x}$ 在 $(0,+@infty)$ 上单调。', '只比较了 $b,c$ 就下结论，漏掉 $a$ 与 $c$。'],
      takeaway: '$@frac{@ln x}{x}$ 型比大小：构造 $f(x)=@frac{@ln x}{x}$，以 $e$ 分界，跨区间比较化整数幂。',
      knowledge: ['k-dv-monotone']
    },
    {
      no: 9, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知函数 $f(x)=@sin@left(2x+@frac{@pi}{3}@right)$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$f(x)$ 的最小正周期为 $@pi$` },
        { k: 'B', t: `$f(x)$ 的图象关于点 $@left(@frac{@pi}{3},0@right)$ 对称` },
        { k: 'C', t: `$f(x)$ 在 $@left[0,@frac{@pi}{2}@right]$ 上单调递减` },
        { k: 'D', t: `将 $f(x)$ 的图象向右平移 $@frac{@pi}{6}$ 个单位长度，得到 $y=@sin2x$ 的图象` }
      ],
      answer: 'ABD',
      accept: [],
      solution: [
        `A：$@omega=2$，最小正周期 $T=@frac{2@pi}{2}=@pi$，正确。`,
        `B：$f@left(@frac{@pi}{3}@right)=@sin@left(@frac{2@pi}{3}+@frac{@pi}{3}@right)=@sin@pi=0$，该点是图象与 $x$ 轴的交点，故为对称中心，正确。`,
        `C：当 $x@in@left[0,@frac{@pi}{2}@right]$ 时，$2x+@frac{@pi}{3}@in@left[@frac{@pi}{3},@frac{4@pi}{3}@right]$，正弦在此区间先增后减，故 C 错误。`,
        `D：向右平移 $@frac{@pi}{6}$ 得 $@sin@left(2@left(x-@frac{@pi}{6}@right)+@frac{@pi}{3}@right)=@sin2x$，正确。`,
        `综上，选 ABD。`
      ],
      hints: ['把相位 $2x+@frac{@pi}{3}$ 当作整体，写出它的取值范围。', '对称中心对应零点，对称轴对应最值点，二者不要混淆。', '平移只作用于 $x$，左加右减。'],
      pitfalls: ['C 只看两个端点的函数值就判断单调。', 'B 中把对称中心与对称轴混为一谈。', 'D 中平移量没有与系数 $2$ 配套计算。'],
      takeaway: '三角函数性质：相位整体化；对称中心解零点方程，对称轴解最值方程。',
      knowledge: ['k-tr-graph', 'k-fn-prop']
    },
    {
      no: 10, type: 'multiple', score: 6, difficulty: 3,
      stem: `已知等比数列 $@left@{a_n@right@}$ 的首项 $a_1=1$，公比 $q=2$，则下列结论正确的是`,
      options: [
        { k: 'A', t: `$a_3=4$` },
        { k: 'B', t: `前 $6$ 项和 $S_6=63$` },
        { k: 'C', t: `$a_1a_2a_3=8$` },
        { k: 'D', t: `数列 $@left@{a_n^2@right@}$ 是公比为 $2$ 的等比数列` }
      ],
      answer: 'ABC',
      accept: [],
      solution: [
        `通项 $a_n=a_1q^{n-1}=2^{n-1}$。`,
        `A：$a_3=2^2=4$，正确。`,
        `B：$S_6=@frac{1-2^6}{1-2}=63$，正确。`,
        `C：$a_1a_2a_3=1@times2@times4=8$，正确。`,
        `D：$a_n^2=4^{n-1}$，是公比为 $4$ 的等比数列，故 D 错误。`,
        `综上，选 ABC。`
      ],
      hints: ['先写出通项 $a_n=a_1q^{n-1}$。', '平方后公比变为 $q^2$，不是 $q$。'],
      pitfalls: ['把 $S_6$ 算成 $64$，漏减 $1$。', 'D 中误以为平方后公比不变。'],
      takeaway: '等比数列：$a_n=a_1q^{n-1}$，$S_n=@frac{a_1(1-q^n)}{1-q}(q@ne1)$，平方后公比为 $q^2$。',
      knowledge: ['k-seq-basic']
    },
    {
      no: 11, type: 'multiple', score: 6, difficulty: 4,
      stem: `在棱长为 $2$ 的正方体 $ABCD-A_1B_1C_1D_1$ 中，下列结论正确的是`,
      options: [
        { k: 'A', t: `异面直线 $AB_1$ 与 $BC_1$ 所成的角为 $60^@circ$` },
        { k: 'B', t: `直线 $AC_1$ 与平面 $ABCD$ 所成的角为 $45^@circ$` },
        { k: 'C', t: `三棱锥 $A_1-ABD$ 的体积为 $@frac43$` },
        { k: 'D', t: `点 $D_1$ 到平面 $AB_1C$ 的距离为 $@frac{4@sqrt3}{3}$` }
      ],
      answer: 'ACD',
      accept: [],
      solution: [
        `建系：$A(0,0,0)$，$B(2,0,0)$，$C(2,2,0)$，$D(0,2,0)$，$A_1(0,0,2)$，$B_1(2,0,2)$，$C_1(2,2,2)$，$D_1(0,2,2)$。`,
        `A：$@vec{AB_1}=(2,0,2)$，$@vec{BC_1}=(0,2,2)$，$@cos@theta=@frac{4}{2@sqrt2@cdot2@sqrt2}=@frac12$，故所成角为 $60^@circ$，正确。`,
        `B：$@vec{AC_1}=(2,2,2)$，其在平面 $ABCD$ 上的投影为 $(2,2,0)$，长 $2@sqrt2$，故 $@tan@theta=@frac{2}{2@sqrt2}=@frac{@sqrt2}{2}$，$@theta@ne45^@circ$，错误。`,
        `C：$S_{@triangle ABD}=@frac12@times2@times2=2$，$A_1$ 到平面 $ABD$ 的距离为 $2$，故 $V=@frac13@times2@times2=@frac43$，正确。`,
        `D：平面 $AB_1C$ 过原点，法向量可取 $(-1,1,1)$，方程为 $-x+y+z=0$；$D_1(0,2,2)$ 到它的距离 $d=@frac{|-0+2+2|}{@sqrt3}=@frac{4}{@sqrt3}=@frac{4@sqrt3}{3}$，正确。`,
        `综上，选 ACD。`
      ],
      hints: ['正方体优先建系，把线线角、线面角、点面距都化为向量运算。', '线面角用 $@sin@theta=@frac{|@vec v@cdot@vec n|}{|@vec v||@vec n|}$，不要与线线角公式混用。', '三棱锥体积是 $@frac13$ 乘底面积再乘高。'],
      pitfalls: ['B 中把 $AC_1$ 与平面所成角误算为 $45^@circ$。', 'D 中法向量取错，距离算成 $@frac{2@sqrt3}{3}$。'],
      takeaway: '空间向量四步：建系写坐标 → 求方向向量 → 求法向量 → 套公式并取锐角。',
      knowledge: ['k-so-angle', 'k-so-solid']
    },
    {
      no: 12, type: 'fill', score: 5, difficulty: 2,
      stem: `在 $@left(x+@frac{1}{x}@right)^6$ 的展开式中，常数项为 ________ .`,
      answer: `$20$`,
      accept: ['20'],
      solution: [
        `通项 $T_{k+1}=@binom{6}{k}x^{6-k}@left(@frac1x@right)^k=@binom{6}{k}x^{6-2k}$。`,
        `令 $6-2k=0$，得 $k=3$。`,
        `所以常数项为 $@binom{6}{3}=20$。`
      ],
      hints: ['写出通项，合并 $x$ 的指数。', '常数项就是 $x$ 的指数为 $0$ 的项。'],
      pitfalls: ['通项指数写成 $6-k$，漏掉分母带来的 $-k$。', '把 $@binom63$ 算成 $18$ 或 $120$。'],
      takeaway: '二项式常数项：通项指数配 $0$，再算组合数。',
      knowledge: ['k-binomial']
    },
    {
      no: 13, type: 'fill', score: 5, difficulty: 3,
      stem: `已知抛物线 $C:y^2=8x$ 的焦点为 $F$，过 $F$ 且斜率为 $1$ 的直线与 $C$ 交于 $A,B$ 两点，则 $|AB|=$ ________ .`,
      answer: `$16$`,
      accept: ['16'],
      solution: [
        `抛物线 $y^2=8x$ 中 $p=4$，焦点 $F(2,0)$，所求直线为 $y=x-2$。`,
        `代入 $y^2=8x$：$(x-2)^2=8x$，整理得 $x^2-12x+4=0$。`,
        `设 $A(x_1,y_1)$，$B(x_2,y_2)$，由韦达定理 $x_1+x_2=12$。`,
        `焦点弦长 $|AB|=x_1+x_2+p=12+4=16$。`
      ],
      hints: ['先写出焦点坐标与直线方程。', '抛物线焦点弦长 $|AB|=x_1+x_2+p$，比求两点距离更快。'],
      pitfalls: ['把 $p$ 取成 $8$，漏掉 $2p=8$ 中的 $@frac12$。', '展开 $(x-2)^2$ 时符号出错，导致 $x_1+x_2$ 算错。'],
      takeaway: '抛物线焦点弦：联立后由 $x_1+x_2$ 直接得 $|AB|=x_1+x_2+p$。',
      knowledge: ['k-ag-chord', 'k-ag-conic']
    },
    {
      no: 14, type: 'fill', score: 5, difficulty: 4,
      stem: `若函数 $f(x)=xe^x$ 的图象与直线 $y=a$ 有两个不同的交点，则实数 $a$ 的取值范围是 ________ .`,
      answer: `$@left(-@frac1e,0@right)$`,
      accept: ['(-1/e,0)', '-1/e<a<0', '(-1/e, 0)'],
      solution: [
        `$f'(x)=e^x(x+1)$，令 $f'(x)=0$ 得 $x=-1$。`,
        `当 $x<-1$ 时 $f'(x)<0$，$f(x)$ 递减；当 $x>-1$ 时 $f'(x)>0$，$f(x)$ 递增。`,
        `所以最小值 $f(-1)=-@frac1e$；又 $x@to-@infty$ 时 $f(x)@to0^-$，$x@to+@infty$ 时 $f(x)@to+@infty$。`,
        `图象与 $y=a$ 有两个交点，需 $-@frac1e<a<0$，故取值范围为 $@left(-@frac1e,0@right)$。`
      ],
      hints: ['先求导找极值点，画出函数的大致形状。', '注意 $x@to-@infty$ 时 $xe^x@to0^-$，这是左端的水平渐近线。'],
      pitfalls: ['漏掉 $a<0$ 的限制，答成 $@left(-@frac1e,+@infty@right)$。', '把最小值误当成 $0$。'],
      takeaway: '两交点问题：极值定下界、极限值定上界，两端趋势缺一不可。',
      knowledge: ['k-dv-zero', 'k-dv-monotone']
    },
    {
      no: 15, type: 'solve', score: 13, difficulty: 3,
      stem: `在 $@triangle ABC$ 中，内角 $A,B,C$ 的对边分别为 $a,b,c$，且满足 $a@cos B+b@cos A=2c@cos C$。（1）求角 $C$；（2）若 $c=2$，且 $@triangle ABC$ 的面积为 $@sqrt3$，求 $a+b$。`,
      answer: `（1）$@frac{@pi}{3}$；（2）$4$`,
      accept: [],
      solution: [
        `（1）由射影定理 $a@cos B+b@cos A=c$，代入已知条件得 $c=2c@cos C$。`,
        `因为 $c>0$，所以 $@cos C=@frac12$；又 $C@in@left(0,@pi@right)$，故 $C=@frac{@pi}{3}$。`,
        `（2）由面积公式 $S=@frac12ab@sin C=@frac{@sqrt3}{4}ab=@sqrt3$，得 $ab=4$。`,
        `由余弦定理 $c^2=a^2+b^2-2ab@cos C$，即 $4=a^2+b^2-ab=a^2+b^2-4$，得 $a^2+b^2=8$。`,
        `所以 $(a+b)^2=a^2+b^2+2ab=8+8=16$，又 $a+b>0$，故 $a+b=4$。`
      ],
      hints: ['第 (1) 问用射影定理把左边化成 $c$，直接得 $@cos C$。', '第 (2) 问面积公式与余弦定理联立，整体求 $a+b$ 而不必解出 $a,b$。'],
      pitfalls: ['第 (1) 问约去 $c$ 时不说明 $c>0$。', '第 (2) 问余弦定理写成 $c^2=a^2+b^2+ab$。', '求出 $a^2+b^2$ 后忘记再加 $2ab$。'],
      takeaway: '解三角形：边角互化选射影定理或余弦定理，面积与余弦定理联立求“和”类整体量。',
      knowledge: ['k-tr-solve', 'k-tr-identity']
    },
    {
      no: 16, type: 'solve', score: 15, difficulty: 4,
      stem: `在四棱锥 $P-ABCD$ 中，底面 $ABCD$ 是正方形，$PA@perp$ 平面 $ABCD$，$PA=AB=2$。（1）证明：$BD@perp$ 平面 $PAC$；（2）求点 $A$ 到平面 $PBC$ 的距离；（3）求平面 $PBC$ 与平面 $PCD$ 所成角的余弦值。`,
      answer: `（1）证明见解析；（2）$@sqrt2$；（3）$@frac12$`,
      accept: [],
      solution: [
        `以 $A$ 为原点，$AB,AD,AP$ 所在直线分别为 $x,y,z$ 轴建系，则 $A(0,0,0)$，$B(2,0,0)$，$C(2,2,0)$，$D(0,2,0)$，$P(0,0,2)$。`,
        `（1）$@vec{BD}=(-2,2,0)$，$@vec{AC}=(2,2,0)$，$@vec{AP}=(0,0,2)$。$@vec{BD}@cdot@vec{AC}=-4+4=0$，$@vec{BD}@cdot@vec{AP}=0$，故 $BD@perp AC$，$BD@perp AP$。`,
        `又 $AC@cap AP=A$，$AC,AP$ 都在平面 $PAC$ 内，而 $BD$ 不在平面 $PAC$ 内，所以 $BD@perp$ 平面 $PAC$。`,
        `（2）$@vec{PB}=(2,0,-2)$，$@vec{PC}=(2,2,-2)$。设平面 $PBC$ 的法向量 $@vec n=(x,y,z)$，由 $2x-2z=0$ 与 $2x+2y-2z=0$ 可取 $@vec n=(1,0,1)$。`,
        `平面 $PBC$ 的方程为 $x+z-2=0$，点 $A(0,0,0)$ 到它的距离 $d=@frac{|0+0-2|}{@sqrt2}=@sqrt2$。`,
        `（3）同理平面 $PCD$ 的法向量可取 $@vec m=(0,1,1)$，两平面所成角的余弦值 $@cos@theta=@frac{|@vec n@cdot@vec m|}{|@vec n||@vec m|}=@frac{1}{@sqrt2@cdot@sqrt2}=@frac12$。`
      ],
      hints: ['三条棱 $AB,AD,AP$ 两两垂直，直接建系最省力。', '证线面垂直：与平面内两条相交直线的方向向量都垂直，并说明直线不在平面内。', '点面距用 $d=@frac{|@vec{AP}@cdot@vec n|}{|@vec n|}$，二面角余弦取绝对值。'],
      pitfalls: ['证明中漏掉“$AC$ 与 $AP$ 相交”或漏掉“$BD$ 不在平面内”。', '第 (3) 问忘记取绝对值，把所成角写成钝角。'],
      takeaway: '建系三步：写坐标 → 求法向量 → 套距离/夹角公式；平面所成角取锐角。',
      knowledge: ['k-so-parallel', 'k-so-angle']
    },
    {
      no: 17, type: 'solve', score: 15, difficulty: 4,
      stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_1=1$，$a_{n+1}=2a_n+1$（$n@in@mathbb{N}^*$）。（1）证明：数列 $@left@{a_n+1@right@}$ 是等比数列，并求 $@left@{a_n@right@}$ 的通项公式；（2）设 $b_n=n(a_n+1)$，求数列 $@left@{b_n@right@}$ 的前 $n$ 项和 $T_n$。`,
      answer: `（1）$a_n=2^n-1$；（2）$T_n=(n-1)2^{n+1}+2$`,
      accept: [],
      solution: [
        `（1）由 $a_{n+1}=2a_n+1$ 得 $a_{n+1}+1=2(a_n+1)$。`,
        `又 $a_1+1=2@ne0$，故 $@left@{a_n+1@right@}$ 是首项为 $2$、公比为 $2$ 的等比数列。`,
        `所以 $a_n+1=2^n$，即 $a_n=2^n-1$。`,
        `（2）$b_n=n(a_n+1)=n@cdot2^n$。`,
        `$T_n=1@cdot2+2@cdot2^2+@cdots+n@cdot2^n$，两边乘 $2$ 得 $2T_n=1@cdot2^2+2@cdot2^3+@cdots+n@cdot2^{n+1}$。`,
        `两式相减：$-T_n=2+2^2+@cdots+2^n-n@cdot2^{n+1}=@frac{2(2^n-1)}{2-1}-n@cdot2^{n+1}=(1-n)2^{n+1}-2$，故 $T_n=(n-1)2^{n+1}+2$。`
      ],
      hints: ['把递推式配成 $a_{n+1}+1=2(a_n+1)$ 的等比形式。', '第 (2) 问是“等差 × 等比”型，用错位相减法。', '相减后先求等比部分的和，再整体取负号。'],
      pitfalls: ['构造时写成 $a_{n+1}+1=2a_n$，漏掉常数项。', '错位相减后符号处理出错，结果少了常数 $2$。'],
      takeaway: '一阶线性递推配等比；$n@cdot2^n$ 求和用错位相减，最后验 $n=1$ 是否成立。',
      knowledge: ['k-seq-recursion', 'k-seq-sum']
    },
    {
      no: 18, type: 'solve', score: 17, difficulty: 4,
      stem: `已知函数 $f(x)=@ln x+@frac{a}{x}$，$a@in@mathbb{R}$。（1）讨论 $f(x)$ 的单调性；（2）若 $f(x)@ge0$ 对任意 $x>0$ 恒成立，求 $a$ 的取值范围；（3）证明：对任意正整数 $n$，$@ln(n+1)>@frac12+@frac13+@cdots+@frac{1}{n+1}$。`,
      answer: `（1）当 $a@le0$ 时 $f(x)$ 在 $(0,+@infty)$ 上单调递增；当 $a>0$ 时在 $(0,a)$ 上单调递减，在 $(a,+@infty)$ 上单调递增。（2）$@left[@frac1e,+@infty@right)$。（3）证明见解析。`,
      accept: [],
      solution: [
        `（1）定义域为 $(0,+@infty)$，$f'(x)=@frac1x-@frac{a}{x^2}=@frac{x-a}{x^2}$。`,
        `当 $a@le0$ 时，$x-a>0$，$f'(x)>0$，$f(x)$ 在 $(0,+@infty)$ 上单调递增。`,
        `当 $a>0$ 时，$x@in(0,a)$ 时 $f'(x)<0$，$x@in(a,+@infty)$ 时 $f'(x)>0$，故 $f(x)$ 在 $(0,a)$ 上单调递减，在 $(a,+@infty)$ 上单调递增。`,
        `（2）若 $a@le0$，$x@to0^+$ 时 $@frac ax@to-@infty$，$f(x)@to-@infty$，不能恒有 $f(x)@ge0$，故 $a>0$。`,
        `此时最小值为 $f(a)=@ln a+1$，由 $f(x)@ge0$ 恒成立得 $@ln a+1@ge0$，即 $a@ge@frac1e$，故 $a@in@left[@frac1e,+@infty@right)$。`,
        `（3）取 $a=1$，由（1）（2）知 $f(x)$ 在 $x=1$ 处取最小值 $f(1)=1$，故对任意 $x>0$ 有 $@ln x+@frac1x@ge1$，即 $@ln x@ge1-@frac1x$，等号仅当 $x=1$ 时成立。`,
        `对 $k=1,2,@dots,n$，取 $x=@frac{k+1}{k}>1$，得 $@ln@frac{k+1}{k}>1-@frac{k}{k+1}=@frac{1}{k+1}$。`,
        `累加得 $@ln@frac21+@ln@frac32+@cdots+@ln@frac{n+1}{n}>@frac12+@frac13+@cdots+@frac{1}{n+1}$，左边逐项相消为 $@ln(n+1)$，即证。`
      ],
      hints: ['第 (1) 问先通分求导，再按 $a$ 的正负讨论。', '第 (2) 问先排除 $a@le0$，再把最小值不小于 $0$ 转化为关于 $a$ 的不等式。', '第 (3) 问取 $a=1$ 得 $@ln x@ge1-@frac1x$，再令 $x=@frac{k+1}{k}$ 累加。'],
      pitfalls: ['第 (1) 问忽略定义域 $x>0$。', '第 (2) 问漏掉 $a@le0$ 的排除，或把端点 $@frac1e$ 漏掉写成开区间。', '第 (3) 问取 $x=@frac{k+1}{k}$ 后没有说明 $x@ne1$，未得到严格不等号。'],
      takeaway: '恒成立求参：转化为最值；数列不等式：从函数不等式取特殊值累加，注意严格性。',
      knowledge: ['k-dv-monotone', 'k-dv-param', 'k-dv-ineq']
    },
    {
      no: 19, type: 'solve', score: 17, difficulty: 5,
      stem: `定义：对正整数 $n$，若 $n$ 表示为若干个互不相同的 $2$ 的幂之和 $n=2^{i_1}+2^{i_2}+@cdots+2^{i_k}$（$i_1<i_2<@cdots<i_k$，$i_j$ 为非负整数），则称项数 $k$ 为 $n$ 的“二进制重量”，记作 $w(n)$。由二进制可知，这样的表示对每个正整数 $n$ 存在且唯一。例如 $6=4+2$，故 $w(6)=2$。（1）求 $w(13)$ 与 $w(26)$，并写出 $26$ 的这种表示；（2）证明：对任意正整数 $n$，$w(2n)=w(n)$，$w(2n+1)=w(n)+1$；（3）求 $w(1)+w(2)+@cdots+w(2^k-1)$（$k$ 为正整数）。`,
      answer: `（1）$w(13)=3$，$w(26)=3$，$26=16+8+2$；（2）证明见解析；（3）$k@cdot2^{k-1}$`,
      accept: [],
      solution: [
        `（1）$13=8+4+1$，故 $w(13)=3$；$26=16+8+2$，故 $w(26)=3$，且 $26$ 的表示为 $16+8+2$。`,
        `（2）设 $n=2^{i_1}+2^{i_2}+@cdots+2^{i_k}$ 是 $n$ 的唯一表示。`,
        `两边乘 $2$：$2n=2^{i_1+1}+2^{i_2+1}+@cdots+2^{i_k+1}$，其中指数 $i_j+1$ 仍互不相同，按表示的唯一性得 $w(2n)=k=w(n)$。`,
        `又 $2n+1=2^{i_1+1}+@cdots+2^{i_k+1}+2^0$，而 $i_j+1@ge1>0$，指数 $0$ 与各 $i_j+1$ 互不相同，故这是 $2n+1$ 的唯一表示，项数为 $k+1$，即 $w(2n+1)=w(n)+1$。`,
        `（3）记 $S_k=w(1)+w(2)+@cdots+w(2^k-1)$，并约定 $w(0)=0$。`,
        `把 $1,2,@dots,2^k-1$ 分为偶数 $2j$（$j=1,@dots,2^{k-1}-1$）与奇数 $2j+1$（$j=0,@dots,2^{k-1}-1$）。由（2），偶数贡献 $w(j)$，奇数贡献 $w(j)+1$，故 $S_k=@sum_{j=1}^{2^{k-1}-1}w(j)+@sum_{j=0}^{2^{k-1}-1}(w(j)+1)=2S_{k-1}+2^{k-1}$。`,
        `又 $S_1=w(1)=1$。设 $S_{k-1}=(k-1)2^{k-2}$，则 $S_k=2(k-1)2^{k-2}+2^{k-1}=k@cdot2^{k-1}$，由数学归纳法知结论对一切正整数 $k$ 成立。`
      ],
      hints: ['第 (1) 问按 $2$ 的幂从大到小拆分。', '第 (2) 问紧扣“表示存在且唯一”，把 $2n$ 与 $2n+1$ 的表示写出来再比较项数。', '第 (3) 问按奇偶分类，用（2）把 $S_k$ 化成关于 $S_{k-1}$ 的递推式，再归纳。'],
      pitfalls: ['第 (2) 问没有说明指数互不相同就直接断言项数关系。', '第 (3) 问把奇数个数数成 $2^{k-1}-1$，漏掉 $j=0$ 的项。', '第 (3) 问只验证前几项就下结论，缺少归纳步骤。'],
      takeaway: '新定义题：先读懂规则算小例子，再把结构性质（唯一性）转化成递推，最后用计数或归纳求整体量。',
      knowledge: ['k-count', 'k-seq-recursion']
    }
  ]
});
