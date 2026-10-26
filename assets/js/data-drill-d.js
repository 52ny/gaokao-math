window.GK_DRILL = window.GK_DRILL || [];
window.GK_DRILL.push(
  {
    id: 'dr-d-1', knowledge: ['k-vec-linear'], type: 'single', difficulty: 1, score: 5,
    stem: `在 $@triangle ABC$ 中，$D$ 为 $BC$ 的中点，则 $@vec{AD}=$`,
    options: [
      { k: 'A', t: `$@vec{AB}+@vec{AC}$` },
      { k: 'B', t: `$@frac{1}{2}@left(@vec{AB}-@vec{AC}@right)$` },
      { k: 'C', t: `$@frac{1}{2}@left(@vec{AB}+@vec{AC}@right)$` },
      { k: 'D', t: `$2@left(@vec{AB}+@vec{AC}@right)$` }
    ],
    answer: 'C', accept: [],
    solution: [
      `$D$ 为 $BC$ 的中点，由三角形法则 $@vec{AD}=@vec{AB}+@vec{BD}$。`,
      `$@vec{BD}=@frac{1}{2}@vec{BC}=@frac{1}{2}@left(@vec{AC}-@vec{AB}@right)$。`,
      `所以 $@vec{AD}=@vec{AB}+@frac{1}{2}@left(@vec{AC}-@vec{AB}@right)=@frac{1}{2}@left(@vec{AB}+@vec{AC}@right)$，选 C。`
    ],
    hints: ['从 $A$ 走到 $D$，走路径 $A@to B@to D$。'],
    pitfalls: ['把中点公式记成两向量之差。'],
    takeaway: '中点向量等于两端点向量的平均值。'
  },
  {
    id: 'dr-d-2', knowledge: ['k-vec-linear'], type: 'single', difficulty: 2, score: 5,
    stem: `在平行四边形 $ABCD$ 中，$E$ 为 $CD$ 的中点，若 $@vec{AE}=x@vec{AB}+y@vec{AD}$，则 $x+y=$`,
    options: [
      { k: 'A', t: `$@frac{1}{2}$` },
      { k: 'B', t: `$1$` },
      { k: 'C', t: `$@frac{3}{2}$` },
      { k: 'D', t: `$2$` }
    ],
    answer: 'C', accept: [],
    solution: [
      `由平行四边形法则 $@vec{AC}=@vec{AB}+@vec{AD}$。`,
      `$E$ 为 $CD$ 的中点，故 $@vec{AE}=@frac{1}{2}@left(@vec{AC}+@vec{AD}@right)=@frac{1}{2}@vec{AB}+@vec{AD}$。`,
      `所以 $x=@frac{1}{2}$，$y=1$，$x+y=@frac{3}{2}$，选 C。`
    ],
    hints: ['以 $A$ 为起点，先把 $@vec{AC}$ 用基底表示。'],
    pitfalls: ['把 $E$ 当成 $AC$ 的中点，算成 $@frac{1}{2}@vec{AB}+@frac{1}{2}@vec{AD}$。'],
    takeaway: '平行四边形中，中点向量用“两端点向量求和再折半”。'
  },
  {
    id: 'dr-d-3', knowledge: ['k-vec-linear'], type: 'single', difficulty: 3, score: 5,
    stem: `设 $@vec{e}_1,@vec{e}_2$ 是两个不共线的向量，若 $@vec{AB}=@vec{e}_1+2@vec{e}_2$，$@vec{BC}=3@vec{e}_1+k@vec{e}_2$，且 $A,B,C$ 三点共线，则 $k=$`,
    options: [
      { k: 'A', t: `$-6$` },
      { k: 'B', t: `$3$` },
      { k: 'C', t: `$4$` },
      { k: 'D', t: `$6$` }
    ],
    answer: 'D', accept: [],
    solution: [
      `$A,B,C$ 三点共线且两向量有公共点 $B$，故 $@vec{AB}@parallel@vec{BC}$。`,
      `设 $@vec{BC}=@lambda@vec{AB}$，比较 $@vec{e}_1$ 的系数得 $@lambda=3$。`,
      `再比较 $@vec{e}_2$ 的系数：$k=3@times2=6$，选 D。`
    ],
    hints: ['三点共线转化为两向量共线，再比较基底系数。'],
    pitfalls: ['把 $k$ 直接写成 $2@div3$。', '忽略“两向量有公共点 $B$”这一共线前提。'],
    takeaway: '共线看系数成比例：$@frac{3}{1}=@frac{k}{2}$。'
  },
  {
    id: 'dr-d-4', knowledge: ['k-vec-linear'], type: 'multiple', difficulty: 3, score: 5,
    stem: `下列命题中正确的是`,
    options: [
      { k: 'A', t: `在平行四边形 $ABCD$ 中，$@vec{AC}=@vec{AB}+@vec{AD}$` },
      { k: 'B', t: `若 $@vec{a}$ 与 $@vec{b}$ 共线，则 $|@vec{a}+@vec{b}|=|@vec{a}|+|@vec{b}|$` },
      { k: 'C', t: `对任意三点 $A,B,C$，都有 $@vec{AB}+@vec{BC}+@vec{CA}=@vec{0}$` },
      { k: 'D', t: `若 $@vec{AD}=@frac{1}{2}@left(@vec{AB}+@vec{AC}@right)$，则 $D$ 为 $BC$ 的中点` }
    ],
    answer: 'ACD', accept: [],
    solution: [
      `A 是平行四边形法则，正确。`,
      `B 中两向量反向共线时 $|@vec{a}+@vec{b}|@ne|@vec{a}|+|@vec{b}|$，错误。`,
      `C 是向量加法的首尾相接，回到起点，正确。`,
      `D 说明 $D$ 是 $B,C$ 对应向量的中点，正确。故选 ACD。`
    ],
    hints: ['共线要分同向与反向两种情况。'],
    pitfalls: ['把“共线”直接当成“同向”，误判 B。'],
    takeaway: '向量命题判断：共线分同向反向，闭环求和为零。'
  },
  {
    id: 'dr-d-5', knowledge: ['k-vec-linear'], type: 'fill', difficulty: 2, score: 5,
    stem: `设 $G$ 为 $@triangle ABC$ 的重心，若 $@vec{AG}=@lambda@left(@vec{AB}+@vec{AC}@right)$，则 $@lambda=$ ________ .`,
    answer: `$@frac{1}{3}$`, accept: ['1/3', '0.333333'],
    solution: [
      `设 $M$ 为 $BC$ 的中点，则 $@vec{AG}=@frac{2}{3}@vec{AM}$。`,
      `而 $@vec{AM}=@frac{1}{2}@left(@vec{AB}+@vec{AC}@right)$。`,
      `故 $@vec{AG}=@frac{1}{3}@left(@vec{AB}+@vec{AC}@right)$，$@lambda=@frac{1}{3}$。`
    ],
    hints: ['重心在中线上，且分中线的比为 $2:1$。'],
    pitfalls: ['把重心分中线的比记成 $1:2$，写成 $@frac{2}{3}$。'],
    takeaway: '重心：$@vec{AG}=@frac{1}{3}@left(@vec{AB}+@vec{AC}@right)$。'
  },
  {
    id: 'dr-d-6', knowledge: ['k-vec-linear'], type: 'solve', difficulty: 3, score: 10,
    stem: `在 $@triangle ABC$ 中，点 $D$ 在边 $BC$ 上，且 $BD=2DC$，$M$ 为 $AD$ 的中点。(1) 用 $@vec{AB},@vec{AC}$ 表示 $@vec{AD}$；(2) 用 $@vec{AB},@vec{AC}$ 表示 $@vec{BM}$。`,
    answer: `(1) $@vec{AD}=@frac{1}{3}@vec{AB}+@frac{2}{3}@vec{AC}$；(2) $@vec{BM}=-@frac{5}{6}@vec{AB}+@frac{1}{3}@vec{AC}$`,
    accept: [],
    solution: [
      `(1) 由 $BD=2DC$ 得 $@vec{BD}=@frac{2}{3}@vec{BC}$，而 $@vec{BC}=@vec{AC}-@vec{AB}$。`,
      `故 $@vec{AD}=@vec{AB}+@frac{2}{3}@left(@vec{AC}-@vec{AB}@right)=@frac{1}{3}@vec{AB}+@frac{2}{3}@vec{AC}$。`,
      `(2) $@vec{AM}=@frac{1}{2}@vec{AD}=@frac{1}{6}@vec{AB}+@frac{1}{3}@vec{AC}$。`,
      `走路径 $B@to A@to M$：$@vec{BM}=@vec{BA}+@vec{AM}=-@vec{AB}+@frac{1}{6}@vec{AB}+@frac{1}{3}@vec{AC}=-@frac{5}{6}@vec{AB}+@frac{1}{3}@vec{AC}$。`
    ],
    hints: ['先把 $D$ 的位置翻译成 $@vec{BD}=@frac{2}{3}@vec{BC}$。', '求 $@vec{BM}$ 走路径 $B@to A@to M$，注意方向。'],
    pitfalls: ['把 $BD=2DC$ 写成 $@vec{BD}=@frac{1}{3}@vec{BC}$。', '只算出 $@vec{AM}$ 就当作最终答案。'],
    takeaway: '定比分点：先写分点向量，再用三角形法则走到目标。'
  },
  {
    id: 'dr-d-7', knowledge: ['k-vec-dot'], type: 'single', difficulty: 1, score: 5,
    stem: `已知 $|@vec{a}|=2$，$|@vec{b}|=3$，$@vec{a}$ 与 $@vec{b}$ 的夹角为 $60^@circ$，则 $@vec{a}@cdot@vec{b}=$`,
    options: [
      { k: 'A', t: `$6$` },
      { k: 'B', t: `$3$` },
      { k: 'C', t: `$3@sqrt{3}$` },
      { k: 'D', t: `$6@sqrt{3}$` }
    ],
    answer: 'B', accept: [],
    solution: [
      `由数量积定义 $@vec{a}@cdot@vec{b}=|@vec{a}||@vec{b}|@cos60^@circ$。`,
      `$=2@times3@times@frac{1}{2}=3$，选 B。`
    ],
    hints: ['套定义，$@cos60^@circ=@frac{1}{2}$。'],
    pitfalls: ['把 $@cos60^@circ$ 记成 $@frac{@sqrt{3}}{2}$，多出 $@sqrt{3}$。'],
    takeaway: '数量积是模、模、夹角余弦三者相乘。'
  },
  {
    id: 'dr-d-8', knowledge: ['k-vec-dot'], type: 'single', difficulty: 2, score: 5,
    stem: `已知 $|@vec{a}|=1$，$|@vec{b}|=2$，$@vec{a}@cdot@vec{b}=1$，则 $|@vec{a}+@vec{b}|=$`,
    options: [
      { k: 'A', t: `$@sqrt{5}$` },
      { k: 'B', t: `$@sqrt{6}$` },
      { k: 'C', t: `$@sqrt{7}$` },
      { k: 'D', t: `$2@sqrt{2}$` }
    ],
    answer: 'C', accept: [],
    solution: [
      `求模先平方：$|@vec{a}+@vec{b}|^2=|@vec{a}|^2+2@vec{a}@cdot@vec{b}+|@vec{b}|^2$。`,
      `$=1+2@times1+4=7$。`,
      `故 $|@vec{a}+@vec{b}|=@sqrt{7}$，选 C。`
    ],
    hints: ['先平方，再开方。'],
    pitfalls: ['直接把模相加得 $3$。'],
    takeaway: '求模一律先平方，别忘中间的 $2@vec{a}@cdot@vec{b}$。'
  },
  {
    id: 'dr-d-9', knowledge: ['k-vec-dot'], type: 'single', difficulty: 3, score: 5,
    stem: `在 $@triangle ABC$ 中，$AB=5$，$AC=3$，$M$ 为 $BC$ 的中点，且 $AM=@sqrt{13}$，则 $@vec{AB}@cdot@vec{AC}=$`,
    options: [
      { k: 'A', t: `$7$` },
      { k: 'B', t: `$8$` },
      { k: 'C', t: `$9$` },
      { k: 'D', t: `$10$` }
    ],
    answer: 'C', accept: [],
    solution: [
      `由中线长公式 $4AM^2=2(AB^2+AC^2)-BC^2$，得 $4@times13=2(25+9)-BC^2$，所以 $BC^2=16$。`,
      `取 $BC$ 中点 $M$，极化恒等式给出 $@vec{AB}@cdot@vec{AC}=|@vec{AM}|^2-@frac{1}{4}|@vec{BC}|^2$。`,
      `故 $@vec{AB}@cdot@vec{AC}=13-4=9$，选 C。`
    ],
    hints: ['见中点配数量积，想极化恒等式。', '先由中线长公式把 $BC$ 求出来。'],
    pitfalls: ['极化恒等式的系数写成 $@frac{1}{2}$。'],
    takeaway: '极化恒等式：$@vec{PA}@cdot@vec{PB}=|@vec{PM}|^2-@frac{1}{4}|@vec{AB}|^2$。'
  },
  {
    id: 'dr-d-10', knowledge: ['k-vec-dot'], type: 'multiple', difficulty: 3, score: 5,
    stem: `已知 $|@vec{a}|=1$，$|@vec{b}|=2$，$@vec{a}@cdot@vec{b}=1$，则下列结论正确的是`,
    options: [
      { k: 'A', t: `$|@vec{a}-@vec{b}|=@sqrt{3}$` },
      { k: 'B', t: `$@vec{a}$ 与 $@vec{b}$ 的夹角为 $60^@circ$` },
      { k: 'C', t: `$@left(@vec{a}+@vec{b}@right)@perp@left(@vec{a}-@vec{b}@right)$` },
      { k: 'D', t: `$|@vec{a}+2@vec{b}|=@sqrt{21}$` }
    ],
    answer: 'ABD', accept: [],
    solution: [
      `$@cos@theta=@frac{1}{1@times2}=@frac{1}{2}$，$@theta=60^@circ$，B 正确。`,
      `$|@vec{a}-@vec{b}|^2=1+4-2@times1=3$，A 正确。`,
      `$@left(@vec{a}+@vec{b}@right)@cdot@left(@vec{a}-@vec{b}@right)=|@vec{a}|^2-|@vec{b}|^2=1-4=-3@ne0$，C 错误。`,
      `$|@vec{a}+2@vec{b}|^2=1+4@times1+4@times4=21$，D 正确。故选 ABD。`
    ],
    hints: ['逐项翻译成数量积与模的平方。'],
    pitfalls: ['把 $(a+b)@perp(a-b)$ 当成恒成立，忽略 $|a|=|b|$ 的前提。'],
    takeaway: '夹角看余弦，模长看平方，垂直看数量积为零。'
  },
  {
    id: 'dr-d-11', knowledge: ['k-vec-dot'], type: 'fill', difficulty: 2, score: 5,
    stem: `已知 $@vec{e}_1,@vec{e}_2$ 是夹角为 $60^@circ$ 的单位向量，则 $|2@vec{e}_1-@vec{e}_2|=$ ________ .`,
    answer: `$@sqrt{3}$`, accept: ['√3', 'sqrt3', 'sqrt(3)', '根号3'],
    solution: [
      `先平方：$|2@vec{e}_1-@vec{e}_2|^2=4|@vec{e}_1|^2-4@vec{e}_1@cdot@vec{e}_2+|@vec{e}_2|^2$。`,
      `$@vec{e}_1@cdot@vec{e}_2=@frac{1}{2}$，故原式 $=4-2+1=3$。`,
      `所以 $|2@vec{e}_1-@vec{e}_2|=@sqrt{3}$。`
    ],
    hints: ['单位向量夹角 $60^@circ$，数量积为 $@frac{1}{2}$。'],
    pitfalls: ['漏掉交叉项 $-4@vec{e}_1@cdot@vec{e}_2$。'],
    takeaway: '基底求模：展开后只剩模与内积。'
  },
  {
    id: 'dr-d-12', knowledge: ['k-vec-dot'], type: 'solve', difficulty: 4, score: 10,
    stem: `在 $@triangle ABC$ 中，$AB=2$，$AC=3$，$@angle BAC=60^@circ$，$M$ 为 $BC$ 的中点。(1) 求 $@vec{AB}@cdot@vec{AC}$；(2) 求 $|@vec{AM}|$；(3) 求 $@triangle ABC$ 的面积。`,
    answer: `(1) $3$；(2) $@frac{@sqrt{19}}{2}$；(3) $@frac{3@sqrt{3}}{2}$`,
    accept: [],
    solution: [
      `(1) $@vec{AB}@cdot@vec{AC}=|@vec{AB}||@vec{AC}|@cos60^@circ=2@times3@times@frac{1}{2}=3$。`,
      `(2) $@vec{AM}=@frac{1}{2}@left(@vec{AB}+@vec{AC}@right)$，平方得 $|@vec{AM}|^2=@frac{1}{4}@left(4+9+2@times3@right)=@frac{19}{4}$，故 $|@vec{AM}|=@frac{@sqrt{19}}{2}$。`,
      `(3) $S=@frac{1}{2}@times2@times3@times@sin60^@circ=@frac{3@sqrt{3}}{2}$。`
    ],
    hints: ['中线向量是两边向量的平均值。', '面积用两边夹一角公式。'],
    pitfalls: ['求 $|@vec{AM}|$ 时漏乘 $@frac{1}{2}$ 再平方。'],
    takeaway: '中线长与面积都可由“两边及其夹角”统一算出。'
  },
  {
    id: 'dr-d-13', knowledge: ['k-vec-coord'], type: 'single', difficulty: 1, score: 5,
    stem: `已知 $@vec{a}=(1,2)$，$@vec{b}=(3,-1)$，则 $2@vec{a}-@vec{b}=$`,
    options: [
      { k: 'A', t: `$(1,5)$` },
      { k: 'B', t: `$(5,3)$` },
      { k: 'C', t: `$(-1,5)$` },
      { k: 'D', t: `$(-1,3)$` }
    ],
    answer: 'C', accept: [],
    solution: [
      `$2@vec{a}=(2,4)$。`,
      `$2@vec{a}-@vec{b}=(2,4)-(3,-1)=(-1,5)$，选 C。`
    ],
    hints: ['数乘逐分量乘，减法逐分量减。'],
    pitfalls: ['把 $-(-1)$ 算成 $-1$，得到 $(-1,3)$。'],
    takeaway: '坐标运算：先数乘、再逐分量加减。'
  },
  {
    id: 'dr-d-14', knowledge: ['k-vec-coord'], type: 'single', difficulty: 2, score: 5,
    stem: `已知 $@vec{a}=(1,2)$，$@vec{b}=(m,4)$，且 $@vec{a}@parallel@vec{b}$，则 $m=$`,
    options: [
      { k: 'A', t: `$1$` },
      { k: 'B', t: `$2$` },
      { k: 'C', t: `$-2$` },
      { k: 'D', t: `$8$` }
    ],
    answer: 'B', accept: [],
    solution: [
      `共线条件 $x_1y_2-x_2y_1=0$。`,
      `$1@times4-2m=0$，解得 $m=2$，选 B。`
    ],
    hints: ['坐标共线用交叉相乘相等。'],
    pitfalls: ['用 $@frac{1}{m}=@frac{2}{4}$ 时忽略 $m=0$ 的讨论，虽然本题不影响结论。'],
    takeaway: '共线：$x_1y_2=x_2y_1$。'
  },
  {
    id: 'dr-d-15', knowledge: ['k-vec-coord'], type: 'single', difficulty: 3, score: 5,
    stem: `已知 $@vec{a}=(2,1)$，$@vec{b}=(3,4)$，则 $@vec{a}$ 在 $@vec{b}$ 方向上的投影为`,
    options: [
      { k: 'A', t: `$2$` },
      { k: 'B', t: `$@frac{2}{5}$` },
      { k: 'C', t: `$10$` },
      { k: 'D', t: `$5$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `投影是一个数：$@frac{@vec{a}@cdot@vec{b}}{|@vec{b}|}$。`,
      `$@vec{a}@cdot@vec{b}=2@times3+1@times4=10$，$|@vec{b}|=5$。`,
      `故投影为 $@frac{10}{5}=2$，选 A。`
    ],
    hints: ['投影等于数量积除以被投影方向向量的模。'],
    pitfalls: ['把投影算成投影向量 $(@frac{6}{5},@frac{8}{5})$。'],
    takeaway: '投影是数，投影向量才带方向。'
  },
  {
    id: 'dr-d-16', knowledge: ['k-vec-coord'], type: 'multiple', difficulty: 3, score: 5,
    stem: `已知 $@vec{a}=(1,2)$，$@vec{b}=(2,1)$，则下列结论正确的是`,
    options: [
      { k: 'A', t: `$@vec{a}@parallel@vec{b}$` },
      { k: 'B', t: `$@vec{a}@cdot@vec{b}=4$` },
      { k: 'C', t: `$|@vec{a}+@vec{b}|=3@sqrt{2}$` },
      { k: 'D', t: `$@left(@vec{a}-@vec{b}@right)@perp@left(@vec{a}+@vec{b}@right)$` }
    ],
    answer: 'BCD', accept: [],
    solution: [
      `$1@times1-2@times2=-3@ne0$，不平行，A 错误。`,
      `$@vec{a}@cdot@vec{b}=2+2=4$，B 正确。`,
      `$@vec{a}+@vec{b}=(3,3)$，模为 $3@sqrt{2}$，C 正确。`,
      `$@left(@vec{a}-@vec{b}@right)@cdot@left(@vec{a}+@vec{b}@right)=|@vec{a}|^2-|@vec{b}|^2=5-5=0$，D 正确。故选 BCD。`
    ],
    hints: ['D 项用 $|@vec{a}|=|@vec{b}|$ 的菱形对角线互相垂直。'],
    pitfalls: ['用坐标相加后忘记开方，把 C 判错。'],
    takeaway: '模相等时，和向量与差向量垂直。'
  },
  {
    id: 'dr-d-17', knowledge: ['k-vec-coord'], type: 'fill', difficulty: 3, score: 5,
    stem: `已知 $@vec{a}=(1,1)$，$@vec{b}=(1,-2)$，若 $@left(@vec{a}+@lambda@vec{b}@right)@perp@left(@vec{a}-@vec{b}@right)$，则 $@lambda=$ ________ .`,
    answer: `$@frac{1}{2}$`, accept: ['1/2', '0.5'],
    solution: [
      `$@vec{a}+@lambda@vec{b}=(1+@lambda,1-2@lambda)$，$@vec{a}-@vec{b}=(0,3)$。`,
      `由垂直得 $0@times(1+@lambda)+3(1-2@lambda)=0$。`,
      `解得 $@lambda=@frac{1}{2}$。`
    ],
    hints: ['先算两个向量的坐标，再用数量积为零。'],
    pitfalls: ['把垂直条件写成坐标对应相等。'],
    takeaway: '坐标法判定垂直：对应坐标乘积之和为零。'
  },
  {
    id: 'dr-d-18', knowledge: ['k-vec-coord'], type: 'solve', difficulty: 4, score: 10,
    stem: `已知 $@vec{a}=(1,2)$，$@vec{b}=(-2,3)$。(1) 求 $@vec{a}@cdot@vec{b}$ 与 $|@vec{a}+@vec{b}|$；(2) 若 $@left(@vec{a}-@lambda@vec{b}@right)@parallel@left(2@vec{a}+@vec{b}@right)$，求 $@lambda$。`,
    answer: `(1) $@vec{a}@cdot@vec{b}=4$，$|@vec{a}+@vec{b}|=@sqrt{26}$；(2) $@lambda=-@frac{1}{2}$`,
    accept: [],
    solution: [
      `(1) $@vec{a}@cdot@vec{b}=1@times(-2)+2@times3=4$。`,
      `$@vec{a}+@vec{b}=(-1,5)$，故 $|@vec{a}+@vec{b}|=@sqrt{1+25}=@sqrt{26}$。`,
      `(2) $@vec{a}-@lambda@vec{b}=(1+2@lambda,2-3@lambda)$，$2@vec{a}+@vec{b}=(0,7)$。`,
      `由共线得 $7(1+2@lambda)=0$，解得 $@lambda=-@frac{1}{2}$。`
    ],
    hints: ['共线用交叉相乘之差为零。', '注意 $2@vec{a}+@vec{b}$ 的横坐标恰为 $0$。'],
    pitfalls: ['把 $@vec{a}-@lambda@vec{b}$ 的纵坐标算成 $2+3@lambda$。'],
    takeaway: '坐标共线：交叉相乘相等；出现零分量时更容易看出比例。'
  },
  {
    id: 'dr-d-19', knowledge: ['k-cx-basic'], type: 'single', difficulty: 1, score: 5,
    stem: `已知 $i$ 为虚数单位，则 $(1+i)(2-i)=$`,
    options: [
      { k: 'A', t: `$3-i$` },
      { k: 'B', t: `$3+i$` },
      { k: 'C', t: `$1+3i$` },
      { k: 'D', t: `$1-3i$` }
    ],
    answer: 'B', accept: [],
    solution: [
      `按多项式展开：$(1+i)(2-i)=2-i+2i-i^2$。`,
      `由 $i^2=-1$，得 $2+i+1=3+i$，选 B。`
    ],
    hints: ['展开后把 $i^2$ 换成 $-1$。'],
    pitfalls: ['把 $-i^2$ 算成 $-1$，得到 $1+i$。'],
    takeaway: '复数乘法按多项式展开，最后合并实部与虚部。'
  },
  {
    id: 'dr-d-20', knowledge: ['k-cx-basic'], type: 'single', difficulty: 2, score: 5,
    stem: `已知复数 $z$ 满足 $z(1-i)=2i$，则 $z=$`,
    options: [
      { k: 'A', t: `$-1+i$` },
      { k: 'B', t: `$-1-i$` },
      { k: 'C', t: `$1-i$` },
      { k: 'D', t: `$1+i$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$z=@frac{2i}{1-i}$，分子分母同乘 $1+i$。`,
      `$z=@frac{2i(1+i)}{2}=i(1+i)=-1+i$，选 A。`
    ],
    hints: ['除法先分母实数化。'],
    pitfalls: ['乘共轭时分子漏乘。'],
    takeaway: '除法：分子分母同乘分母的共轭。'
  },
  {
    id: 'dr-d-21', knowledge: ['k-cx-basic'], type: 'single', difficulty: 3, score: 5,
    stem: `已知复数 $z=@frac{1+i}{1-i}$，则 $z^{2026}=$`,
    options: [
      { k: 'A', t: `$1$` },
      { k: 'B', t: `$-1$` },
      { k: 'C', t: `$i$` },
      { k: 'D', t: `$-i$` }
    ],
    answer: 'B', accept: [],
    solution: [
      `先化简：$z=@frac{(1+i)^2}{(1-i)(1+i)}=@frac{2i}{2}=i$。`,
      `$2026=4@times506+2$，故 $z^{2026}=i^{2026}=i^2=-1$，选 B。`
    ],
    hints: ['先算出 $z$，再用 $i$ 的周期性。'],
    pitfalls: ['把 $2026@div4$ 的余数算错。'],
    takeaway: '$i$ 的幂按 $4$ 取余。'
  },
  {
    id: 'dr-d-22', knowledge: ['k-cx-basic'], type: 'multiple', difficulty: 3, score: 5,
    stem: `下列关于复数的命题正确的是`,
    options: [
      { k: 'A', t: `若 $z_1z_2=0$，则 $z_1=0$ 或 $z_2=0$` },
      { k: 'B', t: `若 $|z|=1$，则 $@overline{z}=@frac{1}{z}$` },
      { k: 'C', t: `对任意复数 $z$，$z+@overline{z}$ 是实数` },
      { k: 'D', t: `若 $z^2$ 是实数，则 $z$ 是实数` }
    ],
    answer: 'ABC', accept: [],
    solution: [
      `复数集没有零因子，A 正确。`,
      `$|z|=1$ 时 $z@overline{z}=1$，故 $@overline{z}=@frac{1}{z}$，B 正确。`,
      `设 $z=a+bi$，则 $z+@overline{z}=2a$ 为实数，C 正确。`,
      `取 $z=i$，$z^2=-1$ 是实数但 $z$ 不是实数，D 错误。故选 ABC。`
    ],
    hints: ['D 项用 $i$ 作反例。'],
    pitfalls: ['把“平方为实数”误当成“本身为实数”。'],
    takeaway: '复数判断：举反例最快，$i$ 是常用反例。'
  },
  {
    id: 'dr-d-23', knowledge: ['k-cx-basic'], type: 'fill', difficulty: 2, score: 5,
    stem: `已知复数 $z$ 满足 $z(1+i)=2$，则 $z=$ ________ .`,
    answer: `$1-i$`, accept: ['1-i'],
    solution: [
      `$z=@frac{2}{1+i}=@frac{2(1-i)}{2}$。`,
      `故 $z=1-i$。`
    ],
    hints: ['分母实数化即可。'],
    pitfalls: ['写成 $-1+i$（分子分母乘错共轭）。'],
    takeaway: '分母含 $i$：同乘共轭，一步到位。'
  },
  {
    id: 'dr-d-24', knowledge: ['k-cx-basic'], type: 'solve', difficulty: 4, score: 10,
    stem: `已知复数 $z$ 满足 $(1+i)z=3+i$。(1) 求 $z$ 及 $|z|$；(2) 若 $z$ 是关于 $x$ 的实系数一元二次方程 $x^2+px+q=0$ 的一个根，求 $p,q$。`,
    answer: `(1) $z=2-i$，$|z|=@sqrt{5}$；(2) $p=-4$，$q=5$`,
    accept: [],
    solution: [
      `(1) $z=@frac{3+i}{1+i}=@frac{(3+i)(1-i)}{2}=@frac{4-2i}{2}=2-i$。`,
      `$|z|=@sqrt{4+1}=@sqrt{5}$。`,
      `(2) 实系数方程的虚根成对出现，另一根为 $2+i$。`,
      `由韦达定理 $z+@overline{z}=4=-p$，$z@overline{z}=5=q$，故 $p=-4$，$q=5$。`
    ],
    hints: ['实系数一元二次方程的虚根共轭成对。', '用韦达定理，不必把根代回方程。'],
    pitfalls: ['把 $p$ 写成 $4$（忘记 $x$ 的系数为 $1$ 时的负号）。'],
    takeaway: '实系数方程的虚根成对，韦达定理仍然成立。'
  },
  {
    id: 'dr-d-25', knowledge: ['k-cx-geo'], type: 'single', difficulty: 1, score: 5,
    stem: `已知复数 $z$ 满足 $|z-(1+i)|=@sqrt{2}$，则复数 $z$ 在复平面内对应点的轨迹是`,
    options: [
      { k: 'A', t: `以 $(1,1)$ 为圆心、$@sqrt{2}$ 为半径的圆` },
      { k: 'B', t: `以 $(-1,-1)$ 为圆心、$@sqrt{2}$ 为半径的圆` },
      { k: 'C', t: `以 $(1,1)$ 为圆心、$2$ 为半径的圆` },
      { k: 'D', t: `过点 $(1,1)$ 的一条直线` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$|z-z_0|$ 表示点 $Z$ 到点 $Z_0$ 的距离。`,
      `这里 $z_0=1+i$，对应点 $(1,1)$，距离为 $@sqrt{2}$。`,
      `故轨迹是以 $(1,1)$ 为圆心、$@sqrt{2}$ 为半径的圆，选 A。`
    ],
    hints: ['把模翻译成两点间距离。'],
    pitfalls: ['把 $z-(1+i)$ 看成到 $(-1,-1)$ 的距离。'],
    takeaway: '$|z-z_0|=r$ 是圆，圆心对应 $z_0$。'
  },
  {
    id: 'dr-d-26', knowledge: ['k-cx-geo'], type: 'single', difficulty: 2, score: 5,
    stem: `已知复数 $z$ 满足 $|z-1|=1$，则 $|z|$ 的最大值为`,
    options: [
      { k: 'A', t: `$1$` },
      { k: 'B', t: `$@sqrt{2}$` },
      { k: 'C', t: `$2$` },
      { k: 'D', t: `$3$` }
    ],
    answer: 'C', accept: [],
    solution: [
      `$|z-1|=1$ 表示以 $(1,0)$ 为圆心、$1$ 为半径的圆。`,
      `圆心到原点的距离为 $1$。`,
      `故 $|z|$ 的最大值为 $1+1=2$，选 C。`
    ],
    hints: ['模的最值 = 圆心距 $@pm$ 半径。'],
    pitfalls: ['只取圆心距，漏加半径。'],
    takeaway: '圆上点到定点距离：最大 $d+r$，最小 $d-r$。'
  },
  {
    id: 'dr-d-27', knowledge: ['k-cx-geo'], type: 'single', difficulty: 3, score: 5,
    stem: `已知复数 $z$ 满足 $|z-2|=|z+2i|$，则复数 $z$ 在复平面内对应点的轨迹是`,
    options: [
      { k: 'A', t: `直线 $y=x$` },
      { k: 'B', t: `直线 $y=-x$` },
      { k: 'C', t: `直线 $x=0$` },
      { k: 'D', t: `直线 $y=0$` }
    ],
    answer: 'B', accept: [],
    solution: [
      `设 $z=x+yi$，则 $(x-2)^2+y^2=x^2+(y+2)^2$。`,
      `展开整理得 $-4x+4=4y+4$，即 $y=-x$。`,
      `所以轨迹是直线 $y=-x$，选 B。`
    ],
    hints: ['到两定点距离相等，轨迹是线段的垂直平分线。'],
    pitfalls: ['把 $z+2i$ 对应点写成 $(0,2)$，符号弄反。'],
    takeaway: '$|z-z_1|=|z-z_2|$ 是中垂线，用坐标展开最稳。'
  },
  {
    id: 'dr-d-28', knowledge: ['k-cx-geo'], type: 'multiple', difficulty: 3, score: 5,
    stem: `已知复数 $z$ 满足 $|z-1|=1$，则下列结论正确的是`,
    options: [
      { k: 'A', t: `$z$ 对应点的轨迹是以 $(1,0)$ 为圆心、$1$ 为半径的圆` },
      { k: 'B', t: `$|z|$ 的最大值为 $2$` },
      { k: 'C', t: `$|z|$ 的最小值为 $0$` },
      { k: 'D', t: `$z$ 的实部的最大值为 $1$` }
    ],
    answer: 'ABC', accept: [],
    solution: [
      `由模的几何意义，A 正确。`,
      `圆心到原点距离为 $1$，故 $|z|$ 的最大值为 $2$、最小值为 $0$（$z=0$ 在圆上），B、C 正确。`,
      `实部的最大值在点 $(2,0)$ 处取得，为 $2$，D 错误。故选 ABC。`
    ],
    hints: ['把圆画在复平面上，直接读最值。'],
    pitfalls: ['把实部最大值当成圆心的横坐标 $1$。'],
    takeaway: '圆上的点：模看圆心距，实部看横坐标范围。'
  },
  {
    id: 'dr-d-29', knowledge: ['k-cx-geo'], type: 'fill', difficulty: 3, score: 5,
    stem: `已知复数 $z$ 满足 $|z-3+4i|=1$，则 $|z|$ 的最小值为 ________ .`,
    answer: `$4$`, accept: ['4'],
    solution: [
      `$|z-3+4i|=|z-(3-4i)|=1$，圆心为 $(3,-4)$，半径为 $1$。`,
      `圆心到原点的距离为 $@sqrt{9+16}=5$。`,
      `故 $|z|$ 的最小值为 $5-1=4$。`
    ],
    hints: ['先把 $z-3+4i$ 写成 $z-(3-4i)$。'],
    pitfalls: ['把圆心误写成 $(3,4)$，虽然距离仍为 $5$，但应养成先定符号的习惯。'],
    takeaway: '模的最值先定圆心，再用圆心距加减半径。'
  },
  {
    id: 'dr-d-30', knowledge: ['k-cx-geo'], type: 'solve', difficulty: 4, score: 10,
    stem: `已知复数 $z$ 满足 $|z-2|=2|z+1|$。(1) 求复数 $z$ 在复平面内对应点的轨迹；(2) 求 $|z|$ 的最大值。`,
    answer: `(1) 以 $(-2,0)$ 为圆心、$2$ 为半径的圆；(2) $4$`,
    accept: [],
    solution: [
      `设 $z=x+yi$，代入得 $(x-2)^2+y^2=4@left[(x+1)^2+y^2@right]$。`,
      `展开整理：$x^2-4x+4+y^2=4x^2+8x+4+4y^2$，即 $x^2+4x+y^2=0$。`,
      `配方得 $(x+2)^2+y^2=4$，故轨迹是以 $(-2,0)$ 为圆心、$2$ 为半径的圆。`,
      `圆心到原点的距离为 $2$，所以 $|z|$ 的最大值为 $2+2=4$。`
    ],
    hints: ['设 $z=x+yi$ 直接代数化。', '整理成圆的标准方程后再求模的最值。'],
    pitfalls: ['两边平方后忘记右边的系数 $4$。', '把圆心写成 $(2,0)$。'],
    takeaway: '模的比值条件常化为阿波罗尼斯圆，配方后读圆心半径。'
  },
  {
    id: 'dr-d-31', knowledge: ['k-ag-line'], type: 'single', difficulty: 2, score: 5,
    stem: `圆 $x^2+y^2=4$ 被直线 $y=x+1$ 截得的弦长为`,
    options: [
      { k: 'A', t: `$@sqrt{14}$` },
      { k: 'B', t: `$@sqrt{7}$` },
      { k: 'C', t: `$2@sqrt{2}$` },
      { k: 'D', t: `$@sqrt{10}$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `圆心到直线的距离 $d=@frac{1}{@sqrt{2}}=@frac{@sqrt{2}}{2}$。`,
      `半弦长为 $@sqrt{r^2-d^2}=@sqrt{4-@frac{1}{2}}=@frac{@sqrt{14}}{2}$。`,
      `弦长为 $2@times@frac{@sqrt{14}}{2}=@sqrt{14}$，选 A。`
    ],
    hints: ['垂径定理：半弦、弦心距、半径成直角三角形。'],
    pitfalls: ['把弦心距当成半弦长。'],
    takeaway: '弦长 $=2@sqrt{r^2-d^2}$。'
  },
  {
    id: 'dr-d-32', knowledge: ['k-ag-line'], type: 'single', difficulty: 2, score: 5,
    stem: `圆 $x^2+y^2-2x-4y+1=0$ 与直线 $3x+4y-1=0$ 的位置关系是`,
    options: [
      { k: 'A', t: `相交` },
      { k: 'B', t: `相切` },
      { k: 'C', t: `相离` },
      { k: 'D', t: `无法确定` }
    ],
    answer: 'B', accept: [],
    solution: [
      `配方得 $(x-1)^2+(y-2)^2=4$，圆心 $(1,2)$，半径 $2$。`,
      `圆心到直线距离 $d=@frac{|3+8-1|}{5}=2$。`,
      `$d=r$，故直线与圆相切，选 B。`
    ],
    hints: ['先配方读出圆心和半径，再算 $d$。'],
    pitfalls: ['配方时把常数项符号弄错，得到错误的半径。'],
    takeaway: '位置关系只看 $d$ 与 $r$ 的大小。'
  },
  {
    id: 'dr-d-33', knowledge: ['k-ag-line'], type: 'single', difficulty: 3, score: 5,
    stem: `圆 $x^2+y^2=1$ 上的点到直线 $3x+4y-12=0$ 的距离的最小值为`,
    options: [
      { k: 'A', t: `$@frac{7}{5}$` },
      { k: 'B', t: `$@frac{12}{5}$` },
      { k: 'C', t: `$@frac{17}{5}$` },
      { k: 'D', t: `$2$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `圆心 $(0,0)$ 到直线的距离 $d=@frac{12}{5}$。`,
      `圆的半径 $r=1$。`,
      `圆上点到直线距离的最小值为 $d-r=@frac{12}{5}-1=@frac{7}{5}$，选 A。`
    ],
    hints: ['圆上点到定直线距离最值：$d@pm r$。'],
    pitfalls: ['忘记减半径，直接选 $@frac{12}{5}$。'],
    takeaway: '圆上点到直线：最近 $d-r$，最远 $d+r$。'
  },
  {
    id: 'dr-d-34', knowledge: ['k-ag-line'], type: 'multiple', difficulty: 3, score: 5,
    stem: `已知圆 $C:(x-1)^2+(y-1)^2=4$，直线 $l:x+y-2=0$，则下列结论正确的是`,
    options: [
      { k: 'A', t: `直线 $l$ 经过圆 $C$ 的圆心` },
      { k: 'B', t: `圆 $C$ 关于直线 $l$ 对称` },
      { k: 'C', t: `圆 $C$ 上的点到直线 $l$ 距离的最大值为 $2$` },
      { k: 'D', t: `直线 $l$ 被圆 $C$ 截得的弦长为 $2@sqrt{2}$` }
    ],
    answer: 'ABC', accept: [],
    solution: [
      `圆心 $(1,1)$ 满足 $1+1-2=0$，故 $l$ 过圆心，A 正确。`,
      `直线过圆心时圆关于该直线对称，B 正确。`,
      `圆心到 $l$ 的距离为 $0$，故圆上点到 $l$ 距离的最大值为半径 $2$，C 正确。`,
      `$l$ 过圆心，截得的是直径，弦长为 $4$，D 错误。故选 ABC。`
    ],
    hints: ['先判断直线是否过圆心。'],
    pitfalls: ['把“过圆心的弦”仍按 $2@sqrt{r^2-d^2}$ 算，忘记它就是直径。'],
    takeaway: '过圆心的弦是直径，长度 $2r$。'
  },
  {
    id: 'dr-d-35', knowledge: ['k-ag-line'], type: 'fill', difficulty: 3, score: 5,
    stem: `圆 $x^2+y^2=5$ 在点 $(1,2)$ 处的切线方程为 ________ .`,
    answer: `$x+2y-5=0$`, accept: ['x+2y-5=0', 'x+2y=5'],
    solution: [
      `点 $(1,2)$ 满足 $1^2+2^2=5$，在圆上。`,
      `过圆上一点 $(x_0,y_0)$ 的切线为 $x_0x+y_0y=r^2$。`,
      `故切线为 $x+2y=5$，即 $x+2y-5=0$。`
    ],
    hints: ['点在圆上，直接用 $x_0x+y_0y=r^2$。'],
    pitfalls: ['误用点斜式并漏掉斜率不存在的情况。'],
    takeaway: '圆上点的切线：把 $x^2$ 换成 $x_0x$，$y^2$ 换成 $y_0y$。'
  },
  {
    id: 'dr-d-36', knowledge: ['k-ag-line'], type: 'solve', difficulty: 3, score: 10,
    stem: `已知圆 $C:x^2+y^2-4x-4y+4=0$，点 $P(0,4)$。(1) 求圆 $C$ 的圆心和半径；(2) 求过点 $P$ 的圆 $C$ 的切线方程；(3) 求切线长。`,
    answer: `(1) 圆心 $(2,2)$，半径 $2$；(2) $x=0$ 或 $y=4$；(3) $2$`,
    accept: [],
    solution: [
      `(1) 配方得 $(x-2)^2+(y-2)^2=4$，圆心 $(2,2)$，半径 $r=2$。`,
      `(2) 当切线斜率不存在时，$x=0$，圆心到它的距离为 $2=r$，符合。`,
      `当斜率存在时设 $y=kx+4$，由 $@frac{|2k+2|}{@sqrt{k^2+1}}=2$ 得 $k=0$，即 $y=4$。`,
      `故切线为 $x=0$ 或 $y=4$。`,
      `(3) $|PC|=@sqrt{2^2+2^2}=2@sqrt{2}$，切线长 $=@sqrt{|PC|^2-r^2}=@sqrt{8-4}=2$。`
    ],
    hints: ['过圆外一点的切线通常有两条，先讨论斜率不存在。', '切线长用勾股定理 $@sqrt{|PC|^2-r^2}$。'],
    pitfalls: ['设点斜式后只得到一条切线，漏掉 $x=0$。'],
    takeaway: '圆外一点作切线：先补斜率不存在，再用 $d=r$。'
  },
  {
    id: 'dr-d-37', knowledge: ['k-ag-conic'], type: 'single', difficulty: 1, score: 5,
    stem: `椭圆 $@frac{x^2}{25}+@frac{y^2}{9}=1$ 的焦距为`,
    options: [
      { k: 'A', t: `$4$` },
      { k: 'B', t: `$8$` },
      { k: 'C', t: `$16$` },
      { k: 'D', t: `$10$` }
    ],
    answer: 'B', accept: [],
    solution: [
      `$a^2=25$，$b^2=9$，故 $c^2=a^2-b^2=16$，$c=4$。`,
      `焦距为 $2c=8$，选 B。`
    ],
    hints: ['椭圆中 $c^2=a^2-b^2$，焦距是 $2c$。'],
    pitfalls: ['把 $c=4$ 当成焦距。'],
    takeaway: '椭圆焦距 $2c$，且 $c^2=a^2-b^2$。'
  },
  {
    id: 'dr-d-38', knowledge: ['k-ag-conic'], type: 'single', difficulty: 2, score: 5,
    stem: `双曲线 $@frac{x^2}{4}-@frac{y^2}{12}=1$ 的渐近线方程为`,
    options: [
      { k: 'A', t: `$y=@pm@frac{1}{2}x$` },
      { k: 'B', t: `$y=@pm2x$` },
      { k: 'C', t: `$y=@pm@sqrt{3}x$` },
      { k: 'D', t: `$y=@pm@frac{@sqrt{3}}{3}x$` }
    ],
    answer: 'C', accept: [],
    solution: [
      `$a^2=4$，$b^2=12$，故 $a=2$，$b=2@sqrt{3}$。`,
      `渐近线为 $y=@pm@frac{b}{a}x=@pm@sqrt{3}x$，选 C。`
    ],
    hints: ['双曲线 $@frac{x^2}{a^2}-@frac{y^2}{b^2}=1$ 的渐近线是 $y=@pm@frac{b}{a}x$。'],
    pitfalls: ['把渐近线斜率写成 $@frac{a}{b}$。'],
    takeaway: '双曲线渐近线：令右边为 $0$，解出 $y=@pm@frac{b}{a}x$。'
  },
  {
    id: 'dr-d-39', knowledge: ['k-ag-conic'], type: 'single', difficulty: 4, score: 5,
    stem: `已知椭圆 $@frac{x^2}{a^2}+@frac{y^2}{b^2}=1(a>b>0)$ 的过焦点且垂直于长轴的弦长等于焦距，则该椭圆的离心率为`,
    options: [
      { k: 'A', t: `$@frac{@sqrt{5}-1}{2}$` },
      { k: 'B', t: `$@frac{1}{2}$` },
      { k: 'C', t: `$@frac{@sqrt{3}}{2}$` },
      { k: 'D', t: `$@frac{@sqrt{5}+1}{2}$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `过焦点垂直于长轴的弦为通径，长为 $@frac{2b^2}{a}$。`,
      `由题意 $@frac{2b^2}{a}=2c$，即 $b^2=ac$。`,
      `代入 $b^2=a^2-c^2$ 得 $a^2-c^2=ac$，两边除以 $a^2$：$e^2+e-1=0$。`,
      `解得 $e=@frac{@sqrt{5}-1}{2}$（负根舍去），选 A。`
    ],
    hints: ['通径长 $@frac{2b^2}{a}$，焦距 $2c$。', '把 $b^2$ 换成 $a^2-c^2$，凑关于 $e$ 的方程。'],
    pitfalls: ['把通径长记成 $@frac{b^2}{a}$，少乘 $2$。'],
    takeaway: '离心率齐次化：所有量都用 $a,c$ 表示，再除以 $a^2$。'
  },
  {
    id: 'dr-d-40', knowledge: ['k-ag-conic'], type: 'multiple', difficulty: 3, score: 5,
    stem: `关于椭圆 $@frac{x^2}{16}+@frac{y^2}{9}=1$，下列结论正确的是`,
    options: [
      { k: 'A', t: `焦距为 $2@sqrt{7}$` },
      { k: 'B', t: `长轴长为 $8$` },
      { k: 'C', t: `离心率为 $@frac{@sqrt{7}}{4}$` },
      { k: 'D', t: `短轴长为 $9$` }
    ],
    answer: 'ABC', accept: [],
    solution: [
      `$a=4$，$b=3$，$c=@sqrt{16-9}=@sqrt{7}$。`,
      `焦距 $2c=2@sqrt{7}$，A 正确；长轴长 $2a=8$，B 正确。`,
      `离心率 $e=@frac{c}{a}=@frac{@sqrt{7}}{4}$，C 正确；短轴长 $2b=6$，D 错误。故选 ABC。`
    ],
    hints: ['先把 $a,b,c$ 三个量算全。'],
    pitfalls: ['把短轴长写成 $b=3$ 或 $b^2=9$。'],
    takeaway: '椭圆基本量：长轴 $2a$、短轴 $2b$、焦距 $2c$。'
  },
  {
    id: 'dr-d-41', knowledge: ['k-ag-conic'], type: 'fill', difficulty: 2, score: 5,
    stem: `抛物线 $y^2=8x$ 的焦点到准线的距离为 ________ .`,
    answer: `$4$`, accept: ['4'],
    solution: [
      `抛物线 $y^2=2px$ 中 $2p=8$，故 $p=4$。`,
      `焦点到准线的距离为 $p=4$。`
    ],
    hints: ['焦点到准线的距离就是 $p$。'],
    pitfalls: ['把 $2p=8$ 中的 $p$ 也算成 $8$。'],
    takeaway: '抛物线焦点到准线的距离为 $p$，不是 $2p$。'
  },
  {
    id: 'dr-d-42', knowledge: ['k-ag-conic'], type: 'solve', difficulty: 3, score: 10,
    stem: `已知双曲线 $@frac{x^2}{a^2}-@frac{y^2}{b^2}=1(a>0,b>0)$ 的两条渐近线方程为 $y=@pm@frac{1}{2}x$，且焦距为 $2@sqrt{5}$。(1) 求双曲线的标准方程；(2) 求双曲线的离心率。`,
    answer: `(1) $@frac{x^2}{4}-y^2=1$；(2) $@frac{@sqrt{5}}{2}$`,
    accept: [],
    solution: [
      `(1) 渐近线斜率 $@frac{b}{a}=@frac{1}{2}$，故 $a=2b$。`,
      `又 $c^2=a^2+b^2=5b^2$，且 $2c=2@sqrt{5}$，得 $c=@sqrt{5}$。`,
      `所以 $5b^2=5$，$b=1$，$a=2$，方程为 $@frac{x^2}{4}-y^2=1$。`,
      `(2) $e=@frac{c}{a}=@frac{@sqrt{5}}{2}$。`
    ],
    hints: ['先把渐近线斜率翻译成 $a,b$ 的关系。', '双曲线中 $c^2=a^2+b^2$。'],
    pitfalls: ['把双曲线也用 $c^2=a^2-b^2$。'],
    takeaway: '双曲线先定 $a,b$ 比例，再由焦距定大小。'
  },
  {
    id: 'dr-d-43', knowledge: ['k-ag-chord'], type: 'single', difficulty: 3, score: 5,
    stem: `椭圆 $@frac{x^2}{4}+y^2=1$ 中，以点 $@left(1,@frac{1}{4}@right)$ 为中点的弦所在直线的斜率为`,
    options: [
      { k: 'A', t: `$-1$` },
      { k: 'B', t: `$1$` },
      { k: 'C', t: `$-@frac{1}{2}$` },
      { k: 'D', t: `$2$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `设弦端点 $A(x_1,y_1),B(x_2,y_2)$，分别代入椭圆后作差。`,
      `得 $@frac{(x_1-x_2)(x_1+x_2)}{4}+(y_1-y_2)(y_1+y_2)=0$。`,
      `中点横、纵坐标分别为 $1,@frac{1}{4}$，故 $k=@frac{y_1-y_2}{x_1-x_2}=-@frac{x_0}{4y_0}=-@frac{1}{4@times@frac{1}{4}}=-1$，选 A。`
    ],
    hints: ['中点弦用点差法，直接得 $k=-@frac{b^2x_0}{a^2y_0}$。'],
    pitfalls: ['把点差法的系数写成 $@frac{a^2x_0}{b^2y_0}$。'],
    takeaway: '椭圆中点弦斜率 $k=-@frac{b^2x_0}{a^2y_0}$。'
  },
  {
    id: 'dr-d-44', knowledge: ['k-ag-chord'], type: 'single', difficulty: 3, score: 5,
    stem: `抛物线 $y^2=4x$ 中，以点 $(2,1)$ 为中点的弦所在直线的斜率为`,
    options: [
      { k: 'A', t: `$1$` },
      { k: 'B', t: `$2$` },
      { k: 'C', t: `$@frac{1}{2}$` },
      { k: 'D', t: `$-2$` }
    ],
    answer: 'B', accept: [],
    solution: [
      `用点差法：$y_1^2=4x_1$，$y_2^2=4x_2$，相减得 $(y_1-y_2)(y_1+y_2)=4(x_1-x_2)$。`,
      `故 $k=@frac{y_1-y_2}{x_1-x_2}=@frac{4}{y_1+y_2}$。`,
      `中点纵坐标为 $1$，所以 $k=@frac{4}{2}=2$，选 B。`
    ],
    hints: ['点差法后斜率只与中点纵坐标有关。'],
    pitfalls: ['把分母写成 $y_0$ 而不是 $2y_0$。'],
    takeaway: '抛物线 $y^2=2px$ 的中点弦斜率 $k=@frac{p}{y_0}$。'
  },
  {
    id: 'dr-d-45', knowledge: ['k-ag-chord'], type: 'single', difficulty: 4, score: 5,
    stem: `过抛物线 $y^2=4x$ 的焦点 $F$ 且倾斜角为 $60^@circ$ 的弦 $AB$，则 $|AB|=$`,
    options: [
      { k: 'A', t: `$@frac{16}{3}$` },
      { k: 'B', t: `$@frac{8}{3}$` },
      { k: 'C', t: `$4$` },
      { k: 'D', t: `$8$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `焦点 $F(1,0)$，直线 $AB:y=@sqrt{3}(x-1)$。`,
      `代入 $y^2=4x$ 得 $3x^2-10x+3=0$，故 $x_1+x_2=@frac{10}{3}$。`,
      `焦点弦长 $|AB|=x_1+x_2+p=@frac{10}{3}+2=@frac{16}{3}$，选 A。`
    ],
    hints: ['焦点弦长 $|AB|=x_1+x_2+p$。', '也可用 $|AB|=@frac{2p}{@sin^2@theta}$ 直接算。'],
    pitfalls: ['忘记加 $p$，只写 $x_1+x_2$。'],
    takeaway: '抛物线焦点弦：$|AB|=@frac{2p}{@sin^2@theta}$。'
  },
  {
    id: 'dr-d-46', knowledge: ['k-ag-chord'], type: 'multiple', difficulty: 3, score: 5,
    stem: `已知椭圆 $@frac{x^2}{4}+y^2=1$ 与直线 $l:y=x+m$，则下列结论正确的是`,
    options: [
      { k: 'A', t: `当 $m=1$ 时，直线 $l$ 与椭圆相交` },
      { k: 'B', t: `当 $|m|<@sqrt{5}$ 时，直线 $l$ 与椭圆有两个交点` },
      { k: 'C', t: `弦长最大时，$m=0$` },
      { k: 'D', t: `弦长的最大值为 $2$` }
    ],
    answer: 'ABC', accept: [],
    solution: [
      `联立得 $5x^2+8mx+4m^2-4=0$，$@Delta=80-16m^2$。`,
      `$@Delta>0@Leftrightarrow|m|<@sqrt{5}$，故 A、B 正确。`,
      `弦长为 $@sqrt{2}@cdot@frac{@sqrt{80-16m^2}}{5}$，显然 $m=0$ 时最大，C 正确。`,
      `最大值为 $@sqrt{2}@cdot@frac{@sqrt{80}}{5}=@frac{4@sqrt{10}}{5}@ne2$，D 错误。故选 ABC。`
    ],
    hints: ['先写判别式，弦长用 $@sqrt{1+k^2}|x_1-x_2|$。'],
    pitfalls: ['只写韦达不写 $@Delta>0$，参数范围出错。'],
    takeaway: '弦长最大对应判别式最大，通常在中点过中心时取得。'
  },
  {
    id: 'dr-d-47', knowledge: ['k-ag-chord'], type: 'fill', difficulty: 3, score: 5,
    stem: `椭圆 $@frac{x^2}{9}+@frac{y^2}{4}=1$ 中以点 $(1,1)$ 为中点的弦所在直线的方程为 ________ .`,
    answer: `$4x+9y-13=0$`, accept: ['4x+9y-13=0', '4x+9y=13'],
    solution: [
      `点差法得 $k=-@frac{b^2x_0}{a^2y_0}=-@frac{4@times1}{9@times1}=-@frac{4}{9}$。`,
      `直线为 $y-1=-@frac{4}{9}(x-1)$。`,
      `整理得 $4x+9y-13=0$。`
    ],
    hints: ['点 $(1,1)$ 在椭圆内，弦一定存在。'],
    pitfalls: ['点差法后忘记代中点坐标化简。'],
    takeaway: '中点弦：点差定斜率，再套点斜式。'
  },
  {
    id: 'dr-d-48', knowledge: ['k-ag-chord'], type: 'solve', difficulty: 3, score: 10,
    stem: `已知椭圆 $E:@frac{x^2}{4}+y^2=1$，直线 $l:y=x+1$ 与 $E$ 交于 $A,B$ 两点。(1) 求 $|AB|$；(2) 求线段 $AB$ 中点的坐标。`,
    answer: `(1) $@frac{8@sqrt{2}}{5}$；(2) $@left(-@frac{4}{5},@frac{1}{5}@right)$`,
    accept: [],
    solution: [
      `联立 $x^2+4(x+1)^2=4$，整理得 $5x^2+8x=0$。`,
      `解得 $x_1=0$，$x_2=-@frac{8}{5}$，对应 $y_1=1$，$y_2=-@frac{3}{5}$。`,
      `(1) $|AB|=@sqrt{1+1}@,|x_1-x_2|=@sqrt{2}@cdot@frac{8}{5}=@frac{8@sqrt{2}}{5}$。`,
      `(2) 中点横坐标 $@frac{0-@frac{8}{5}}{2}=-@frac{4}{5}$，纵坐标 $-@frac{4}{5}+1=@frac{1}{5}$。`
    ],
    hints: ['联立后先因式分解，不必套求根公式。', '弦长用 $@sqrt{1+k^2}|x_1-x_2|$。'],
    pitfalls: ['把 $y=x+1$ 代成 $y^2$ 时漏平方。'],
    takeaway: '设线韦达：联立、判别式、弦长与中点一次算完。'
  },
  {
    id: 'dr-d-49', knowledge: ['k-ag-vector'], type: 'single', difficulty: 2, score: 5,
    stem: `已知 $F_1(-2,0)$，$F_2(2,0)$，动点 $P$ 满足 $|PF_1|+|PF_2|=6$，则点 $P$ 的轨迹方程为`,
    options: [
      { k: 'A', t: `$@frac{x^2}{9}+@frac{y^2}{5}=1$` },
      { k: 'B', t: `$@frac{x^2}{5}+@frac{y^2}{9}=1$` },
      { k: 'C', t: `$@frac{x^2}{9}-@frac{y^2}{5}=1$` },
      { k: 'D', t: `$@frac{x^2}{25}+@frac{y^2}{9}=1$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `到两定点距离之和为常数 $6>|F_1F_2|=4$，轨迹是椭圆。`,
      `$2a=6$，$a=3$；$c=2$，$b^2=a^2-c^2=5$。`,
      `焦点在 $x$ 轴上，方程为 $@frac{x^2}{9}+@frac{y^2}{5}=1$，选 A。`
    ],
    hints: ['先由定义判断曲线类型，再定 $a,b,c$。'],
    pitfalls: ['把 $b^2$ 写成 $a^2+c^2$。'],
    takeaway: '定义法求轨迹：和 → 椭圆，差 → 双曲线。'
  },
  {
    id: 'dr-d-50', knowledge: ['k-ag-vector'], type: 'single', difficulty: 3, score: 5,
    stem: `已知 $A(-2,0)$，$B(2,0)$，动点 $P(x,y)$ 满足 $k_{PA}@cdot k_{PB}=-@frac{1}{4}$，则点 $P$ 的轨迹方程为`,
    options: [
      { k: 'A', t: `$@frac{x^2}{4}+y^2=1(x@ne@pm2)$` },
      { k: 'B', t: `$@frac{x^2}{4}-y^2=1(x@ne@pm2)$` },
      { k: 'C', t: `$x^2+@frac{y^2}{4}=1(x@ne@pm2)$` },
      { k: 'D', t: `$x^2+y^2=4(x@ne@pm2)$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$k_{PA}=@frac{y}{x+2}$，$k_{PB}=@frac{y}{x-2}$。`,
      `由 $@frac{y^2}{x^2-4}=-@frac{1}{4}$ 得 $x^2+4y^2=4$。`,
      `即 $@frac{x^2}{4}+y^2=1$，且 $x@ne@pm2$（否则斜率不存在），选 A。`
    ],
    hints: ['斜率之积为负常数，整理后是椭圆。', '注意剔除使分母为零的两点。'],
    pitfalls: ['漏写 $x@ne@pm2$。'],
    takeaway: '斜率之积定值 → 椭圆；注意挖去斜率不存在的点。'
  },
  {
    id: 'dr-d-51', knowledge: ['k-ag-vector'], type: 'single', difficulty: 4, score: 5,
    stem: `已知抛物线 $y^2=4x$ 上两点 $A,B$ 满足 $@vec{OA}@cdot@vec{OB}=0$（$O$ 为坐标原点），则直线 $AB$ 恒过定点`,
    options: [
      { k: 'A', t: `$(4,0)$` },
      { k: 'B', t: `$(2,0)$` },
      { k: 'C', t: `$(1,0)$` },
      { k: 'D', t: `$(0,4)$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `设 $AB:x=my+t$，代入 $y^2=4x$ 得 $y^2-4my-4t=0$。`,
      `故 $y_1y_2=-4t$，$x_1x_2=@frac{y_1^2y_2^2}{16}=t^2$。`,
      `由 $@vec{OA}@cdot@vec{OB}=x_1x_2+y_1y_2=t^2-4t=0$，得 $t=4$（$t=0$ 时直线过原点，不合题意）。`,
      `故 $AB:x=my+4$ 恒过 $(4,0)$，选 A。`
    ],
    hints: ['过 $x$ 轴上的点设 $x=my+t$，可避开斜率讨论。', '把 $x_1x_2$ 用 $y_1y_2$ 表示。'],
    pitfalls: ['保留 $t=0$ 的增解，此时 $A$ 或 $B$ 与原点重合。'],
    takeaway: '抛物线中 $OA@perp OB$ 的弦恒过 $(2p,0)$ 型定点（此处 $p=2$，定点为 $(4,0)$）。'
  },
  {
    id: 'dr-d-52', knowledge: ['k-ag-vector'], type: 'multiple', difficulty: 3, score: 5,
    stem: `下列关于轨迹的命题正确的是`,
    options: [
      { k: 'A', t: `平面内到两定点 $F_1,F_2$ 距离之和为 $2a$ 且 $2a>|F_1F_2|$ 的点的轨迹是椭圆` },
      { k: 'B', t: `平面内到两定点 $F_1,F_2$ 距离之差的绝对值为 $2a$ 且 $0<2a<|F_1F_2|$ 的点的轨迹是双曲线` },
      { k: 'C', t: `平面内到定点 $F$ 与定直线 $l$ 距离相等的点的轨迹是抛物线` },
      { k: 'D', t: `若 $m>1$，则方程 $@frac{x^2}{3}+@frac{y^2}{m-1}=1$ 表示椭圆` }
    ],
    answer: 'AB', accept: [],
    solution: [
      `A 满足椭圆定义，正确。`,
      `B 满足双曲线定义，正确。`,
      `C 缺少“$F$ 不在 $l$ 上”的条件，当 $F@in l$ 时轨迹是过 $F$ 且垂直于 $l$ 的直线，错误。`,
      `D 中当 $m=4$ 时方程为 $x^2+y^2=3$，表示圆而不是椭圆，错误。故选 AB。`
    ],
    hints: ['C、D 都在考定义中的隐含条件。'],
    pitfalls: ['忽略抛物线定义中“定点不在定直线上”。', '忘记椭圆分母不相等这一条件。'],
    takeaway: '轨迹定义题：先补全条件，再下结论。'
  },
  {
    id: 'dr-d-53', knowledge: ['k-ag-vector'], type: 'fill', difficulty: 4, score: 5,
    stem: `已知椭圆 $@frac{x^2}{4}+y^2=1$ 的右焦点为 $F$，过 $F$ 的弦 $AB$ 交椭圆于 $A,B$ 两点，则 $@frac{1}{|AF|}+@frac{1}{|BF|}=$ ________ .`,
    answer: `$4$`, accept: ['4'],
    solution: [
      `$a=2$，$b=1$，$c=@sqrt{3}$，$e=@frac{@sqrt{3}}{2}$，焦半径 $|AF|=2-@frac{@sqrt{3}}{2}x_1$，$|BF|=2-@frac{@sqrt{3}}{2}x_2$。`,
      `设 $AB:x=my+@sqrt{3}$，代入椭圆得 $(m^2+4)y^2+2@sqrt{3}my-1=0$。`,
      `由此 $|AF|=@frac{1}{2}-@frac{@sqrt{3}}{2}my_1$，$|BF|=@frac{1}{2}-@frac{@sqrt{3}}{2}my_2$，且 $m(y_1+y_2)=-@frac{2@sqrt{3}m^2}{m^2+4}$，$m^2y_1y_2=-@frac{m^2}{m^2+4}$。`,
      `计算得 $|AF|+|BF|=@frac{4(m^2+1)}{m^2+4}$，$|AF||BF|=@frac{m^2+1}{m^2+4}$，故倒数和为 $4$。`
    ],
    hints: ['先设 $x=my+c$，把焦半径化成 $y$ 的一次式。', '焦点弦的倒数和是定值 $@frac{2a}{b^2}$。'],
    pitfalls: ['把焦半径公式写成 $a+ex$，符号弄反。'],
    takeaway: '椭圆焦点弦：$@frac{1}{|AF|}+@frac{1}{|BF|}=@frac{2a}{b^2}$。'
  },
  {
    id: 'dr-d-54', knowledge: ['k-ag-vector'], type: 'solve', difficulty: 4, score: 10,
    stem: `已知抛物线 $C:y^2=4x$ 上两点 $A(x_1,y_1)$，$B(x_2,y_2)$，且 $k_{OA}@cdot k_{OB}=-4$，其中 $O$ 为坐标原点。(1) 证明直线 $AB$ 恒过定点，并求出该定点；(2) 求 $@triangle OAB$ 面积的最小值。`,
    answer: `(1) 直线 $AB$ 恒过定点 $(1,0)$；(2) $2$`,
    accept: [],
    solution: [
      `(1) 显然 $AB$ 不垂直于 $x$ 轴，设 $AB:x=my+t$，代入 $y^2=4x$ 得 $y^2-4my-4t=0$，故 $y_1y_2=-4t$，$y_1+y_2=4m$。`,
      `$x_1x_2=@frac{(y_1y_2)^2}{16}=t^2$，又 $k_{OA}k_{OB}=@frac{y_1y_2}{x_1x_2}=@frac{-4t}{t^2}=-@frac{4}{t}$。`,
      `由 $-@frac{4}{t}=-4$ 得 $t=1$，故 $AB:x=my+1$ 恒过定点 $(1,0)$。`,
      `(2) $S=@frac{1}{2}@times1@times|y_1-y_2|=@frac{1}{2}@sqrt{16m^2+16}=2@sqrt{m^2+1}@ge2$，当 $m=0$ 时取等。`,
      `故 $@triangle OAB$ 面积的最小值为 $2$。`
    ],
    hints: ['设 $x=my+t$，把定点藏在 $t$ 里。', '面积用 $@frac{1}{2}|OT||y_1-y_2|$，其中 $T$ 为直线与 $x$ 轴的交点。'],
    pitfalls: ['忘记排除 $t=0$（此时直线过原点，与抛物线只有一个交点）。'],
    takeaway: '定点问题：设线、韦达、把条件化成只含 $t$ 的方程。'
  },
  {
    id: 'dr-d-55', knowledge: ['k-ag-area'], type: 'single', difficulty: 2, score: 5,
    stem: `已知椭圆 $@frac{x^2}{4}+y^2=1$ 的右焦点为 $F$，过 $F$ 且垂直于长轴的弦为 $AB$，$O$ 为坐标原点，则 $@triangle OAB$ 的面积为`,
    options: [
      { k: 'A', t: `$@frac{@sqrt{3}}{2}$` },
      { k: 'B', t: `$@sqrt{3}$` },
      { k: 'C', t: `$@frac{1}{2}$` },
      { k: 'D', t: `$1$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$a=2$，$b=1$，$c=@sqrt{3}$，故 $AB$ 所在直线为 $x=@sqrt{3}$。`,
      `代入椭圆得 $y^2=@frac{1}{4}$，所以 $|AB|=1$。`,
      `$O$ 到 $AB$ 的距离为 $@sqrt{3}$，故 $S=@frac{1}{2}@times1@times@sqrt{3}=@frac{@sqrt{3}}{2}$，选 A。`
    ],
    hints: ['通径的一半为 $@frac{b^2}{a}$，通径长为 $1$。'],
    pitfalls: ['把弦长算成两个纵坐标之和后忘记求差。'],
    takeaway: '通径长 $@frac{2b^2}{a}$，面积用底乘高的一半。'
  },
  {
    id: 'dr-d-56', knowledge: ['k-ag-area'], type: 'single', difficulty: 4, score: 5,
    stem: `已知椭圆 $@frac{x^2}{2}+y^2=1$ 与直线 $l:y=kx+1$ 交于 $A,B$ 两点（$A,B$ 不重合），$O$ 为坐标原点，则 $@triangle OAB$ 面积的最大值为`,
    options: [
      { k: 'A', t: `$@frac{@sqrt{2}}{2}$` },
      { k: 'B', t: `$1$` },
      { k: 'C', t: `$@sqrt{2}$` },
      { k: 'D', t: `$@frac{1}{2}$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `联立得 $(1+2k^2)x^2+4kx=0$，故 $x_1+x_2=-@frac{4k}{1+2k^2}$，$x_1x_2=0$。`,
      `$|x_1-x_2|=@frac{4|k|}{1+2k^2}$，直线过 $P(0,1)$，故 $S=@frac{1}{2}|OP||x_1-x_2|=@frac{2|k|}{1+2k^2}$。`,
      `由 $1+2k^2@ge2@sqrt{2}|k|$ 得 $S@le@frac{2|k|}{2@sqrt{2}|k|}=@frac{@sqrt{2}}{2}$。`,
      `当 $k^2=@frac{1}{2}$ 时取等，最大值为 $@frac{@sqrt{2}}{2}$，选 A。`
    ],
    hints: ['直线过 $y$ 轴上的定点，面积用 $@frac{1}{2}|OP||x_1-x_2|$。', '分母用基本不等式放缩。'],
    pitfalls: ['忽略 $k@ne0$ 时才有两个不同交点，取等时 $k@ne0$ 满足。'],
    takeaway: '过 $y$ 轴定点的三角形面积，直接写 $@frac{1}{2}|OP||x_1-x_2|$。'
  },
  {
    id: 'dr-d-57', knowledge: ['k-ag-area'], type: 'multiple', difficulty: 3, score: 5,
    stem: `下列关于面积计算的结论正确的是`,
    options: [
      { k: 'A', t: `若直线 $l$ 过 $x$ 轴上的点 $(t,0)$ 且与曲线交于 $A,B$，则 $S_{@triangle OAB}=@frac{1}{2}|t|@,|y_1-y_2|$` },
      { k: 'B', t: `抛物线 $y^2=4x$ 的焦点弦 $AB$ 与原点围成的三角形面积的最小值为 $2$` },
      { k: 'C', t: `椭圆 $@frac{x^2}{4}+y^2=1$ 的通径长为 $1$` },
      { k: 'D', t: `若 $@triangle OAB$ 的面积为定值，则原点 $O$ 到 $AB$ 的距离为定值` }
    ],
    answer: 'ABC', accept: [],
    solution: [
      `A 是用 $x$ 轴上的线段作底、纵坐标差作高，正确。`,
      `B 中设 $AB:x=my+1$，可得 $|y_1-y_2|=4@sqrt{m^2+1}$，$S=2@sqrt{m^2+1}@ge2$，正确。`,
      `C 中 $@frac{2b^2}{a}=@frac{2}{2}=1$，正确。`,
      `D 中 $S=@frac{1}{2}|AB|@cdot d$，面积为定值不能推出 $d$ 为定值，错误。故选 ABC。`
    ],
    hints: ['面积表达式要选“底在高容易表示”的那一种。'],
    pitfalls: ['把“面积为定值”误当成“底和高都为定值”。'],
    takeaway: '面积定值只约束乘积，不单独约束底或高。'
  },
  {
    id: 'dr-d-58', knowledge: ['k-ag-area'], type: 'fill', difficulty: 4, score: 5,
    stem: `过抛物线 $y^2=4x$ 的焦点 $F$ 的弦 $AB$ 的长为 $8$，$O$ 为坐标原点，则 $@triangle OAB$ 的面积为 ________ .`,
    answer: `$2@sqrt{2}$`, accept: ['2√2', '2sqrt2', '2sqrt(2)', '2根号2'],
    solution: [
      `设 $AB:x=my+1$，代入得 $y^2-4my-4=0$，故 $y_1+y_2=4m$，$y_1y_2=-4$。`,
      `$|AB|=x_1+x_2+2=4m^2+4$，由 $4m^2+4=8$ 得 $m^2=1$。`,
      `$S=@frac{1}{2}@times1@times|y_1-y_2|=@frac{1}{2}@sqrt{16m^2+16}=2@sqrt{m^2+1}=2@sqrt{2}$。`
    ],
    hints: ['先用弦长条件定出参数，再算面积。', '焦点弦长 $|AB|=x_1+x_2+p$。'],
    pitfalls: ['把 $p=2$ 加成 $1$ 或 $4$。'],
    takeaway: '弦长定参数，面积再代回，两步都只用韦达。'
  },
  {
    id: 'dr-d-59', knowledge: ['k-ag-area'], type: 'single', difficulty: 3, score: 5,
    stem: `已知椭圆 $@frac{x^2}{9}+@frac{y^2}{4}=1$ 的左、右焦点分别为 $F_1,F_2$，$P$ 为椭圆上一点，则 $@triangle PF_1F_2$ 面积的最大值为`,
    options: [
      { k: 'A', t: `$2@sqrt{5}$` },
      { k: 'B', t: `$3@sqrt{5}$` },
      { k: 'C', t: `$6$` },
      { k: 'D', t: `$4$` }
    ],
    answer: 'A', accept: [],
    solution: [
      `$a=3$，$b=2$，$c=@sqrt{9-4}=@sqrt{5}$。`,
      `底 $|F_1F_2|=2c=2@sqrt{5}$，高为 $P$ 到 $x$ 轴距离，最大为 $b=2$。`,
      `故面积最大值为 $@frac{1}{2}@times2@sqrt{5}@times2=2@sqrt{5}$，选 A。`
    ],
    hints: ['底固定，面积最大即高最大，$P$ 在短轴端点时最高。'],
    pitfalls: ['把高当成 $a=3$，得到 $3@sqrt{5}$。'],
    takeaway: '焦点三角形面积最大值 $bc$。'
  },
  {
    id: 'dr-d-60', knowledge: ['k-ag-area'], type: 'solve', difficulty: 5, score: 10,
    stem: `已知椭圆 $E:@frac{x^2}{4}+y^2=1$，直线 $l:y=kx+m(m@ne0)$ 与 $E$ 交于 $A,B$ 两点，且 $@vec{OA}@cdot@vec{OB}=0$，$O$ 为坐标原点。(1) 证明原点 $O$ 到直线 $l$ 的距离为定值，并求出该定值；(2) 求 $@triangle OAB$ 面积的最小值。`,
    answer: `(1) 定值为 $@frac{2@sqrt{5}}{5}$；(2) $@frac{4}{5}$`,
    accept: [],
    solution: [
      `联立 $y=kx+m$ 与 $x^2+4y^2=4$，得 $(1+4k^2)x^2+8kmx+4m^2-4=0$。`,
      `$x_1+x_2=-@frac{8km}{1+4k^2}$，$x_1x_2=@frac{4m^2-4}{1+4k^2}$，且 $@Delta>0$。`,
      `由 $@vec{OA}@cdot@vec{OB}=0$ 得 $(1+k^2)x_1x_2+km(x_1+x_2)+m^2=0$，代入化简得 $5m^2=4+4k^2$。`,
      `(1) $d=@frac{|m|}{@sqrt{1+k^2}}=@frac{2}{@sqrt{5}}=@frac{2@sqrt{5}}{5}$，为定值。`,
      `(2) $|x_1-x_2|=@frac{4@sqrt{16k^2+1}}{@sqrt{5}(1+4k^2)}$，故 $S=@frac{1}{2}|m||x_1-x_2|=@frac{4@sqrt{(1+k^2)(16k^2+1)}}{5(1+4k^2)}$。`,
      `因为 $(1+k^2)(16k^2+1)-(1+4k^2)^2=9k^2@ge0$，所以 $S@ge@frac{4(1+4k^2)}{5(1+4k^2)}=@frac{4}{5}$，当 $k=0$ 时取等。`,
      `故面积的最小值为 $@frac{4}{5}$。`
    ],
    hints: ['把 $@vec{OA}@cdot@vec{OB}=0$ 写成 $x_1x_2+y_1y_2=0$，再用韦达消参。', '面积也可用齐次化联立，直接得到 $d$ 为定值；求最值时把 $1+k^2$ 当作一个整体。'],
    pitfalls: ['只写 $m^2$ 与 $k^2$ 的关系，忘记验证 $@Delta>0$。', '用基本不等式时没有写清取等条件 $k=0$。'],
    takeaway: '$OA@perp OB$ 的定值模型：韦达消参得 $d$ 定值，面积再换元求最值。'
  }
);
