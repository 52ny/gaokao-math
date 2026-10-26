/* 知识点母题 C 组（保持题感）
 * 公式约定：LaTeX 反斜杠一律写成 @；字符串中不出现美元符号紧接左花括号的组合。
 * 覆盖：空间几何体、平行垂直、空间角、外接球、等差等比、求和方法、递推构造、数列不等式。
 */
window.GK_DRILL = window.GK_DRILL || [];
window.GK_DRILL.push(
  {
    id: 'dr-c-1', knowledge: ['k-so-solid'], type: 'single', difficulty: 1, score: 5,
    stem: `已知圆锥的底面半径为 $3$，母线长为 $5$，则该圆锥的体积为`,
    options: [
      { k: 'A', t: `$12@pi$` },
      { k: 'B', t: `$15@pi$` },
      { k: 'C', t: `$24@pi$` },
      { k: 'D', t: `$36@pi$` }
    ],
    answer: 'A',
    accept: [],
    solution: [
      `圆锥的高 $h=@sqrt{5^2-3^2}=4$。`,
      `体积 $V=@frac13@pi r^2h=@frac13@pi@cdot9@cdot4=12@pi$，选 A。`
    ],
    hints: ['母线、半径、高构成直角三角形。', '体积公式里不要漏掉 $@frac13$。'],
    pitfalls: ['把母线长直接当成高，算出 $15@pi$。'],
    takeaway: '圆锥基本量：先由母线与半径求高，再代体积公式。'
  },
  {
    id: 'dr-c-2', knowledge: ['k-so-solid'], type: 'single', difficulty: 2, score: 5,
    stem: `已知正四棱锥的底面边长为 $2$，侧棱长为 $@sqrt6$，则该正四棱锥的体积为`,
    options: [
      { k: 'A', t: `$4$` },
      { k: 'B', t: `$@frac{8}{3}$` },
      { k: 'C', t: `$8$` },
      { k: 'D', t: `$@frac{16}{3}$` }
    ],
    answer: 'B',
    accept: [],
    solution: [
      `底面中心到顶点的距离为对角线的一半，即 $@sqrt2$。`,
      `高 $h=@sqrt{6-2}=2$。`,
      `体积 $V=@frac13@cdot2^2@cdot2=@frac83$，选 B。`
    ],
    hints: ['先找底面中心，再在直角三角形中求高。'],
    pitfalls: ['把底面边长直接当作斜边的一半，得到错误的高。'],
    takeaway: '正棱锥求高：侧棱、底面外接圆半径、高构成直角三角形。'
  },
  {
    id: 'dr-c-3', knowledge: ['k-so-solid'], type: 'single', difficulty: 3, score: 5,
    stem: `正方体 $ABCD-A_1B_1C_1D_1$ 的棱长为 $2$，则点 $B$ 到平面 $ACD_1$ 的距离为`,
    options: [
      { k: 'A', t: `$@frac{@sqrt3}{3}$` },
      { k: 'B', t: `$@sqrt3$` },
      { k: 'C', t: `$@frac{2@sqrt3}{3}$` },
      { k: 'D', t: `$2@sqrt3$` }
    ],
    answer: 'C',
    accept: [],
    solution: [
      `用等体积法：$V_{B-ACD_1}=V_{D_1-ABC}=@frac13@cdot@frac12@cdot2@cdot2@cdot2=@frac43$。`,
      `平面 $ACD_1$ 是边长为 $2@sqrt2$ 的正三角形，面积 $S=@frac{@sqrt3}{4}(2@sqrt2)^2=2@sqrt3$。`,
      `由 $@frac13Sd=@frac43$ 得 $d=@frac{2@sqrt3}{3}$，选 C。`
    ],
    hints: ['换一个顶点作顶点，体积不变。', '先判断截面三角形的形状与面积。'],
    pitfalls: ['把 $ACD_1$ 当成直角三角形，面积算错。', '等体积时把高与斜边混淆。'],
    takeaway: '点到面距离：等体积法，同一三棱锥换底两次。'
  },
  {
    id: 'dr-c-4', knowledge: ['k-so-solid'], type: 'multiple', difficulty: 3, score: 6,
    stem: `已知圆锥的底面半径为 $1$，母线长为 $3$，则下列结论正确的是`,
    options: [
      { k: 'A', t: `圆锥的高为 $2@sqrt2$` },
      { k: 'B', t: `圆锥的侧面积为 $3@pi$` },
      { k: 'C', t: `圆锥的体积为 $@frac{2@sqrt2}{3}@pi$` },
      { k: 'D', t: `圆锥侧面展开图的圆心角为 $@frac{@pi}{3}$` }
    ],
    answer: 'ABC',
    accept: [],
    solution: [
      `对 A：高 $h=@sqrt{3^2-1^2}=2@sqrt2$，正确。`,
      `对 B：侧面积 $S=@pi rl=@pi@cdot1@cdot3=3@pi$，正确。`,
      `对 C：体积 $V=@frac13@pi@cdot1^2@cdot2@sqrt2=@frac{2@sqrt2}{3}@pi$，正确。`,
      `对 D：展开扇形弧长为 $2@pi r=2@pi$，圆心角 $@frac{2@pi}{3}$，错误。故答案为 ABC。`
    ],
    hints: ['逐个用公式核算，别凭印象。', '展开图圆心角等于底面周长除以母线长。'],
    pitfalls: ['把侧面积公式记成 $2@pi rl$。', '圆心角用半径除以母线。'],
    takeaway: '圆锥四量：高、侧面积、体积、展开图圆心角，一套公式全解决。'
  },
  {
    id: 'dr-c-5', knowledge: ['k-so-solid'], type: 'fill', difficulty: 2, score: 5,
    stem: `已知圆锥的侧面展开图是一个半径为 $2$ 的半圆，则该圆锥的体积为 ________ .`,
    answer: `$@frac{@sqrt3}{3}@pi$`,
    accept: ['√3π/3', '(√3/3)π', 'sqrt3*pi/3'],
    solution: [
      `展开半圆的弧长为 $@pi@cdot2=2@pi$，它等于底面周长 $2@pi r$，故 $r=1$。`,
      `母线 $l=2$，高 $h=@sqrt{4-1}=@sqrt3$。`,
      `体积 $V=@frac13@pi@cdot1^2@cdot@sqrt3=@frac{@sqrt3}{3}@pi$。`
    ],
    hints: ['展开图的弧长就是底面圆周长。', '展开图的半径就是母线长。'],
    pitfalls: ['把半圆弧长写成 $@pi r^2$。', '求出半径后忘记再求高。'],
    takeaway: '侧面展开图与圆锥的对应：弧长对应底面周长，半径对应母线。'
  },
  {
    id: 'dr-c-6', knowledge: ['k-so-solid'], type: 'solve', difficulty: 4, score: 12,
    stem: `在直三棱柱 $ABC-A_1B_1C_1$ 中，$AB=AC=2$，$@angle BAC=90^@circ$，$AA_1=4$。
(1) 证明：$AB@perp$ 平面 $ACC_1A_1$；
(2) 求点 $A_1$ 到平面 $AB_1C$ 的距离。`,
    answer: `(1) 证明见解析；(2) $@frac{4@sqrt5}{5}$`,
    accept: [],
    solution: [
      `(1) 直三棱柱的侧棱垂直于底面，所以 $AA_1@perp AB$。`,
      `又 $AB@perp AC$，且 $AA_1@cap AC=A$，$AA_1,AC@subset$ 平面 $ACC_1A_1$，故 $AB@perp$ 平面 $ACC_1A_1$。`,
      `(2) 以 $A$ 为原点，$AB,AC,AA_1$ 所在直线分别为 $x,y,z$ 轴建系，则 $B(2,0,0)$，$C(0,2,0)$，$B_1(2,0,4)$，$A_1(0,0,4)$。`,
      `$@overrightarrow{AB_1}=(2,0,4)$，$@overrightarrow{AC}=(0,2,0)$，平面 $AB_1C$ 的法向量取 $@vec n=(-2,0,1)$。`,
      `$@overrightarrow{AA_1}=(0,0,4)$，所以 $d=@frac{|@vec n@cdot@overrightarrow{AA_1}|}{|@vec n|}=@frac{4}{@sqrt5}=@frac{4@sqrt5}{5}$。`
    ],
    hints: ['第 (1) 问找两条相交直线与 $AB$ 垂直。', '第 (2) 问建系后先求平面的法向量。', '距离公式是向量在法向量方向上的投影绝对值。'],
    pitfalls: ['只证 $AB@perp AA_1$ 就下结论，漏掉 $AB@perp AC$。', '法向量取错导致距离偏大。', '忘记把结果分母有理化。'],
    takeaway: '直棱柱建系最省力：侧棱作 $z$ 轴，点面距离用“投影绝对值除以法向量模”。'
  },
  {
    id: 'dr-c-7', knowledge: ['k-so-parallel'], type: 'single', difficulty: 1, score: 5,
    stem: `在三棱锥 $P-ABC$ 中，$D,E$ 分别是 $PA,PC$ 的中点，则直线 $DE$ 与平面 $ABC$ 的位置关系是`,
    options: [
      { k: 'A', t: `$DE@parallel$ 平面 $ABC$` },
      { k: 'B', t: `$DE@subset$ 平面 $ABC$` },
      { k: 'C', t: `$DE$ 与平面 $ABC$ 相交但不垂直` },
      { k: 'D', t: `无法确定` }
    ],
    answer: 'A',
    accept: [],
    solution: [
      `在 $@triangle PAC$ 中，$D,E$ 分别是 $PA,PC$ 的中点，所以 $DE@parallel AC$。`,
      `$AC@subset$ 平面 $ABC$，且 $DE@not@subset$ 平面 $ABC$。`,
      `由线面平行判定定理，$DE@parallel$ 平面 $ABC$，选 A。`
    ],
    hints: ['中点想中位线。', '判定线面平行需要“线线平行 + 线不在面内”。'],
    pitfalls: ['漏写“$DE$ 不在平面内”这一条件。'],
    takeaway: '中位线是线面平行最常用的“线线平行”来源。'
  },
  {
    id: 'dr-c-8', knowledge: ['k-so-parallel'], type: 'single', difficulty: 2, score: 5,
    stem: `设 $l,m$ 是两条不同直线，$@alpha,@beta$ 是两个不同平面，则下列命题正确的是`,
    options: [
      { k: 'A', t: `若 $l@parallel m$，$m@subset@alpha$，则 $l@parallel@alpha$` },
      { k: 'B', t: `若 $l@parallel@alpha$，$l@parallel@beta$，则 $@alpha@parallel@beta$` },
      { k: 'C', t: `若 $l@parallel@alpha$，$l@subset@beta$，$@alpha@cap@beta=m$，则 $l@parallel m$` },
      { k: 'D', t: `若直线 $l$ 上有两个点到平面 $@alpha$ 的距离相等，则 $l@parallel@alpha$` }
    ],
    answer: 'C',
    accept: [],
    solution: [
      `A 错：$l$ 可能在平面 $@alpha$ 内，此时不是线面平行。`,
      `B 错：$@alpha$ 与 $@beta$ 可以相交，交线平行于 $l$。`,
      `C 对：$l@parallel@alpha$，$l@subset@beta$，则 $l$ 与交线 $m$ 共面且无公共点，故 $l@parallel m$。`,
      `D 错：直线穿过平面时，平面两侧对称的两点到平面距离也可以相等。故答案为 C。`
    ],
    hints: ['逐项画图或举反例。', '线面平行判定要排除“线在面内”。'],
    pitfalls: ['把“平行于面内一条直线”直接当成线面平行。', '忽略直线穿过平面的情形。'],
    takeaway: '位置关系判断题：先想“线在面内”“面面相交”这两个反例来源。'
  },
  {
    id: 'dr-c-9', knowledge: ['k-so-parallel'], type: 'single', difficulty: 3, score: 5,
    stem: `在正方体 $ABCD-A_1B_1C_1D_1$ 中，下列结论错误的是`,
    options: [
      { k: 'A', t: `$A_1C_1@parallel$ 平面 $ABCD$` },
      { k: 'B', t: `$BD_1@perp$ 平面 $AB_1C$` },
      { k: 'C', t: `$A_1B@parallel$ 平面 $ADD_1A_1$` },
      { k: 'D', t: `$B_1D_1@parallel BD$` }
    ],
    answer: 'C',
    accept: [],
    solution: [
      `建系：$A(0,0,0)$，$B(1,0,0)$，$C(1,1,0)$，$D(0,1,0)$，$A_1(0,0,1)$，$B_1(1,0,1)$，$C_1(1,1,1)$，$D_1(0,1,1)$。`,
      `对 A：$@overrightarrow{A_1C_1}=(1,1,0)$，与平面 $ABCD$ 的法向量 $(0,0,1)$ 垂直，且 $A_1$ 不在平面内，正确。`,
      `对 B：平面 $AB_1C$ 的法向量为 $(-1,1,1)$，而 $@overrightarrow{BD_1}=(-1,1,1)$，所以 $BD_1@perp$ 平面 $AB_1C$，正确。`,
      `对 C：$A_1$ 与 $B$ 都在平面 $ADD_1A_1$ 内，故 $A_1B@subset$ 平面 $ADD_1A_1$，不是线面平行，错误。`,
      `对 D：$@overrightarrow{B_1D_1}=(-1,1,0)=@overrightarrow{BD}$，正确。故错误的是 C。`
    ],
    hints: ['正方体题优先建系，用向量判断。', '线面平行与线在面内要区分。'],
    pitfalls: ['把“直线在平面内”也算作线面平行。', '法向量算错导致垂直判断失误。'],
    takeaway: '正方体中的位置关系：建系后看方向向量与法向量的关系最稳。'
  },
  {
    id: 'dr-c-10', knowledge: ['k-so-parallel'], type: 'multiple', difficulty: 3, score: 6,
    stem: `在正方体 $ABCD-A_1B_1C_1D_1$ 中，下列结论正确的是`,
    options: [
      { k: 'A', t: `$AC@perp BD_1$` },
      { k: 'B', t: `$A_1B@parallel$ 平面 $ACD_1$` },
      { k: 'C', t: `$AD_1@perp$ 平面 $A_1B_1CD$` },
      { k: 'D', t: `$BD_1@parallel$ 平面 $A_1C_1D$` }
    ],
    answer: 'ABC',
    accept: [],
    solution: [
      `设棱长为 $1$，$A(0,0,0)$，$B(1,0,0)$，$C(1,1,0)$，$D(0,1,0)$，$D_1(0,1,1)$，$A_1(0,0,1)$，$B_1(1,0,1)$，$C_1(1,1,1)$。`,
      `对 A：$@overrightarrow{AC}=(1,1,0)$，$@overrightarrow{BD_1}=(-1,1,1)$，数量积为 $0$，正确。`,
      `对 B：$@overrightarrow{A_1B}=(1,0,-1)$，平面 $ACD_1$ 的法向量为 $(1,-1,1)$，数量积为 $0$；且 $A_1$ 不在平面内，正确。`,
      `对 C：平面 $A_1B_1CD$ 的法向量为 $(0,1,1)$，与 $@overrightarrow{AD_1}=(0,1,1)$ 平行，且 $A$ 不在平面内，正确。`,
      `对 D：平面 $A_1C_1D$ 的法向量为 $(-1,1,1)$，与 $@overrightarrow{BD_1}=(-1,1,1)$ 平行，故 $BD_1@perp$ 平面 $A_1C_1D$，错误。答案为 ABC。`
    ],
    hints: ['一个坐标系解决四个选项。', '线面平行看方向向量与法向量是否垂直。'],
    pitfalls: ['线面垂直与线面平行混淆。', '忘记验证直线是否在平面内。'],
    takeaway: '向量法判断平行垂直：方向向量与法向量点积为 $0$ 是平行，成比例是垂直。'
  },
  {
    id: 'dr-c-11', knowledge: ['k-so-parallel'], type: 'fill', difficulty: 3, score: 5,
    stem: `在四棱锥 $P-ABCD$ 中，底面 $ABCD$ 是平行四边形，$E$ 为 $PC$ 的中点，则直线 $PA$ 与平面 $BDE$ 的位置关系是 ________ .`,
    answer: `$PA@parallel$ 平面 $BDE$`,
    accept: ['平行', 'PA∥平面BDE', 'PA//平面BDE'],
    solution: [
      `连接 $AC$ 交 $BD$ 于 $O$，因为 $ABCD$ 是平行四边形，所以 $O$ 是 $AC$ 的中点。`,
      `在 $@triangle PAC$ 中，$E$ 是 $PC$ 的中点，$O$ 是 $AC$ 的中点，所以 $OE@parallel PA$。`,
      `$OE@subset$ 平面 $BDE$，$PA@not@subset$ 平面 $BDE$，故 $PA@parallel$ 平面 $BDE$。`
    ],
    hints: ['平行四边形的对角线互相平分。', '在三角形中找中位线。'],
    pitfalls: ['直接把 $PA$ 与 $BD$ 比较，没有找辅助线。'],
    takeaway: '证线面平行：在平面内找一条与已知直线平行的直线，中位线是首选。'
  },
  {
    id: 'dr-c-12', knowledge: ['k-so-parallel'], type: 'solve', difficulty: 3, score: 12,
    stem: `在四棱锥 $P-ABCD$ 中，底面 $ABCD$ 是正方形，$PD@perp$ 平面 $ABCD$，$PD=AD=2$，$E$ 为 $PA$ 的中点。
(1) 证明：$PC@parallel$ 平面 $BDE$；
(2) 求三棱锥 $E-BCD$ 的体积。`,
    answer: `(1) 证明见解析；(2) $@frac{2}{3}$`,
    accept: [],
    solution: [
      `(1) 连接 $AC$ 交 $BD$ 于 $O$，则 $O$ 是 $AC$ 的中点。`,
      `在 $@triangle PAC$ 中，$E,O$ 分别是 $PA,AC$ 的中点，所以 $OE@parallel PC$。`,
      `又 $OE@subset$ 平面 $BDE$，$PC@not@subset$ 平面 $BDE$，故 $PC@parallel$ 平面 $BDE$。`,
      `(2) 因为 $E$ 是 $PA$ 的中点，$PD=2$，所以 $E$ 到平面 $ABCD$ 的距离为 $1$。`,
      `底面 $@triangle BCD$ 是直角三角形，面积为 $@frac12@cdot2@cdot2=2$。`,
      `所以 $V_{E-BCD}=@frac13@cdot2@cdot1=@frac23$。`
    ],
    hints: ['第 (1) 问连对角线构造中位线。', '第 (2) 问先确定 $E$ 到底面的距离。'],
    pitfalls: ['第 (1) 问没有写 $PC$ 不在平面内。', '把 $E$ 到底面的距离当成 $PD=2$。'],
    takeaway: '线面平行用中位线；锥体体积关键在“底面积乘高再除以三”。'
  },
  {
    id: 'dr-c-13', knowledge: ['k-so-angle'], type: 'single', difficulty: 2, score: 5,
    stem: `在棱长为 $1$ 的正方体 $ABCD-A_1B_1C_1D_1$ 中，异面直线 $A_1B$ 与 $B_1C$ 所成角为`,
    options: [
      { k: 'A', t: `$30^@circ$` },
      { k: 'B', t: `$45^@circ$` },
      { k: 'C', t: `$60^@circ$` },
      { k: 'D', t: `$90^@circ$` }
    ],
    answer: 'C',
    accept: [],
    solution: [
      `取 $A(0,0,0)$，$B(1,0,0)$，$C(1,1,0)$，$A_1(0,0,1)$，$B_1(1,0,1)$。`,
      `$@overrightarrow{A_1B}=(1,0,-1)$，$@overrightarrow{B_1C}=(0,1,-1)$。`,
      `$@cos@theta=@frac{|1@times0+0@times1+(-1)@times(-1)|}{@sqrt2@cdot@sqrt2}=@frac12$，所以所成角为 $60^@circ$，选 C。`
    ],
    hints: ['异面直线所成角用方向向量，取绝对值。', '正方体直接建系。'],
    pitfalls: ['忘记取绝对值，得到钝角。', '把 $B_1C$ 的方向向量写反后不知取绝对值。'],
    takeaway: '异面直线夹角：两方向向量夹角的余弦取绝对值。'
  },
  {
    id: 'dr-c-14', knowledge: ['k-so-angle'], type: 'single', difficulty: 3, score: 5,
    stem: `在棱长为 $1$ 的正方体 $ABCD-A_1B_1C_1D_1$ 中，直线 $A_1C$ 与平面 $ABCD$ 所成角的正弦值为`,
    options: [
      { k: 'A', t: `$@frac{@sqrt3}{3}$` },
      { k: 'B', t: `$@frac{@sqrt6}{3}$` },
      { k: 'C', t: `$@frac12$` },
      { k: 'D', t: `$@frac{@sqrt2}{2}$` }
    ],
    answer: 'A',
    accept: [],
    solution: [
      `取 $A(0,0,0)$，$C(1,1,0)$，$A_1(0,0,1)$，则 $@overrightarrow{A_1C}=(1,1,-1)$。`,
      `平面 $ABCD$ 的法向量为 $@vec n=(0,0,1)$。`,
      `$@sin@theta=@frac{|@overrightarrow{A_1C}@cdot@vec n|}{|@overrightarrow{A_1C}||@vec n|}=@frac{1}{@sqrt3}=@frac{@sqrt3}{3}$，选 A。`
    ],
    hints: ['线面角的正弦等于方向向量与法向量夹角余弦的绝对值。'],
    pitfalls: ['把线面角当成方向向量与法向量的夹角。', '忘记取绝对值。'],
    takeaway: '线面角：$@sin@theta=@frac{|@vec a@cdot@vec n|}{|@vec a||@vec n|}$。'
  },
  {
    id: 'dr-c-15', knowledge: ['k-so-angle'], type: 'single', difficulty: 3, score: 5,
    stem: `在棱长为 $1$ 的正方体 $ABCD-A_1B_1C_1D_1$ 中，平面 $AB_1C$ 与平面 $ABCD$ 所成角的余弦值为`,
    options: [
      { k: 'A', t: `$@frac{@sqrt6}{3}$` },
      { k: 'B', t: `$@frac{@sqrt3}{3}$` },
      { k: 'C', t: `$@frac12$` },
      { k: 'D', t: `$@frac{@sqrt2}{2}$` }
    ],
    answer: 'B',
    accept: [],
    solution: [
      `取 $A(0,0,0)$，$B(1,0,0)$，$C(1,1,0)$，$B_1(1,0,1)$。`,
      `平面 $AB_1C$ 的法向量 $@vec n_1=@overrightarrow{AB_1}@times@overrightarrow{AC}=(1,0,1)@times(1,1,0)=(-1,1,1)$。`,
      `平面 $ABCD$ 的法向量 $@vec n_2=(0,0,1)$。`,
      `$@cos@theta=@frac{|@vec n_1@cdot@vec n_2|}{|@vec n_1||@vec n_2|}=@frac{1}{@sqrt3}=@frac{@sqrt3}{3}$，选 B。`
    ],
    hints: ['二面角用两个平面的法向量。', '先求交线 $AC$ 上的两个方向向量。'],
    pitfalls: ['叉乘顺序写反导致法向量符号错，但余弦取绝对值不影响。', '把平面 $ABCD$ 的法向量写成 $(1,0,0)$。'],
    takeaway: '面面角：两法向量夹角的余弦取绝对值。'
  },
  {
    id: 'dr-c-16', knowledge: ['k-so-angle'], type: 'multiple', difficulty: 4, score: 6,
    stem: `在棱长为 $2$ 的正方体 $ABCD-A_1B_1C_1D_1$ 中，下列结论正确的是`,
    options: [
      { k: 'A', t: `异面直线 $A_1B$ 与 $AD_1$ 所成角为 $60^@circ$` },
      { k: 'B', t: `直线 $A_1C$ 与平面 $ABCD$ 所成角的正弦值为 $@frac{@sqrt3}{3}$` },
      { k: 'C', t: `平面 $A_1BD$ 与平面 $ABCD$ 所成角的余弦值为 $@frac{@sqrt3}{3}$` },
      { k: 'D', t: `点 $B_1$ 到平面 $A_1BD$ 的距离为 $@sqrt3$` }
    ],
    answer: 'ABC',
    accept: [],
    solution: [
      `建系：$A(0,0,0)$，$B(2,0,0)$，$D(0,2,0)$，$A_1(0,0,2)$，$B_1(2,0,2)$，$C(2,2,0)$。`,
      `对 A：$@overrightarrow{A_1B}=(2,0,-2)$，$@overrightarrow{AD_1}=(0,2,2)$，$@cos@theta=@frac{|0+0-4|}{2@sqrt2@cdot2@sqrt2}=@frac12$，所成角为 $60^@circ$，正确。`,
      `对 B：$@overrightarrow{A_1C}=(2,2,-2)$，平面 $ABCD$ 的法向量 $(0,0,1)$，$@sin@theta=@frac{2}{2@sqrt3}=@frac{@sqrt3}{3}$，正确。`,
      `对 C：平面 $A_1BD$ 的法向量为 $(1,1,1)$，与 $(0,0,1)$ 夹角的余弦为 $@frac{1}{@sqrt3}=@frac{@sqrt3}{3}$，正确。`,
      `对 D：平面 $A_1BD$ 的方程为 $x+y+z=2$，点 $B_1(2,0,2)$ 到它的距离为 $@frac{|2+0+2-2|}{@sqrt3}=@frac{2@sqrt3}{3}@ne@sqrt3$，错误。答案为 ABC。`
    ],
    hints: ['四个选项共用一个坐标系。', '线面角用 $@sin$，面面角用 $@cos$，点到面用距离公式。'],
    pitfalls: ['线面角误用余弦。', '点到平面距离忘记除以法向量模。'],
    takeaway: '空间四大计算：异面角、线面角、二面角、点面距，向量公式一套打通。'
  },
  {
    id: 'dr-c-17', knowledge: ['k-so-angle'], type: 'fill', difficulty: 3, score: 5,
    stem: `在长方体 $ABCD-A_1B_1C_1D_1$ 中，$AB=2$，$AD=1$，$AA_1=2$，则异面直线 $A_1C$ 与 $BD$ 所成角的余弦值为 ________ .`,
    answer: `$@frac{@sqrt5}{5}$`,
    accept: ['√5/5', '1/√5', 'sqrt5/5'],
    solution: [
      `取 $A(0,0,0)$，$B(2,0,0)$，$D(0,1,0)$，$C(2,1,0)$，$A_1(0,0,2)$。`,
      `$@overrightarrow{A_1C}=(2,1,-2)$，$@overrightarrow{BD}=(-2,1,0)$。`,
      `$@cos@theta=@frac{|-4+1|}{3@cdot@sqrt5}=@frac{3}{3@sqrt5}=@frac{@sqrt5}{5}$。`
    ],
    hints: ['长方体建系时三条棱分别作坐标轴。'],
    pitfalls: ['向量终点减起点写反。', '忘记取绝对值导致负值。'],
    takeaway: '异面直线夹角余弦一定非负，算完取绝对值。'
  },
  {
    id: 'dr-c-18', knowledge: ['k-so-angle'], type: 'solve', difficulty: 4, score: 12,
    stem: `在四棱锥 $P-ABCD$ 中，底面 $ABCD$ 是正方形，$PA@perp$ 平面 $ABCD$，$PA=AB=2$，$E$ 为 $PD$ 的中点。
(1) 求异面直线 $AE$ 与 $PB$ 所成角；
(2) 求直线 $PB$ 与平面 $PAC$ 所成角的正弦值；
(3) 求点 $A$ 到平面 $PBC$ 的距离。`,
    answer: `(1) $60^@circ$；(2) $@frac12$；(3) $@sqrt2$`,
    accept: [],
    solution: [
      `以 $A$ 为原点，$AB,AD,AP$ 所在直线分别为 $x,y,z$ 轴建系，则 $A(0,0,0)$，$B(2,0,0)$，$C(2,2,0)$，$D(0,2,0)$，$P(0,0,2)$，$E(0,1,1)$。`,
      `(1) $@overrightarrow{AE}=(0,1,1)$，$@overrightarrow{PB}=(2,0,-2)$，$@cos@theta=@frac{|0+0-2|}{@sqrt2@cdot2@sqrt2}=@frac12$，所以所成角为 $60^@circ$。`,
      `(2) 平面 $PAC$ 的法向量取 $@vec n=(-1,1,0)$，则 $@sin@alpha=@frac{|@overrightarrow{PB}@cdot@vec n|}{|@overrightarrow{PB}||@vec n|}=@frac{2}{2@sqrt2@cdot@sqrt2}=@frac12$。`,
      `(3) 平面 $PBC$ 的方程为 $x+z=2$，所以点 $A(0,0,0)$ 到它的距离为 $@frac{|0+0-2|}{@sqrt2}=@sqrt2$。`
    ],
    hints: ['三条两两垂直的棱正好作坐标轴。', '异面角取绝对值，线面角用正弦。', '第 (3) 问也可用等体积法。'],
    pitfalls: ['建系后点的坐标写错，尤其 $P$ 的 $z$ 坐标。', '线面角用成余弦。'],
    takeaway: '垂直关系集中时建系最快；点面距既可用公式也可用等体积。'
  },
  {
    id: 'dr-c-19', knowledge: ['k-so-sphere'], type: 'single', difficulty: 2, score: 5,
    stem: `棱长为 $2$ 的正方体的外接球表面积为`,
    options: [
      { k: 'A', t: `$6@pi$` },
      { k: 'B', t: `$12@pi$` },
      { k: 'C', t: `$24@pi$` },
      { k: 'D', t: `$48@pi$` }
    ],
    answer: 'B',
    accept: [],
    solution: [
      `正方体的体对角线为外接球直径，$2R=@sqrt{2^2+2^2+2^2}=2@sqrt3$，所以 $R=@sqrt3$。`,
      `表面积 $S=4@pi R^2=12@pi$，选 B。`
    ],
    hints: ['正方体外接球的直径就是体对角线。'],
    pitfalls: ['把棱长当成直径。', '表面积与体积公式混用。'],
    takeaway: '正方体外接球：$2R=@sqrt3a$；内切球：$2r=a$。'
  },
  {
    id: 'dr-c-20', knowledge: ['k-so-sphere'], type: 'single', difficulty: 3, score: 5,
    stem: `一个长方体共顶点的三条棱长分别为 $2,2,4$，则其外接球的体积为`,
    options: [
      { k: 'A', t: `$8@sqrt6@pi$` },
      { k: 'B', t: `$24@pi$` },
      { k: 'C', t: `$6@sqrt6@pi$` },
      { k: 'D', t: `$12@sqrt6@pi$` }
    ],
    answer: 'A',
    accept: [],
    solution: [
      `外接球直径等于长方体的体对角线：$2R=@sqrt{2^2+2^2+4^2}=2@sqrt6$，故 $R=@sqrt6$。`,
      `体积 $V=@frac43@pi R^3=@frac43@pi@cdot6@sqrt6=8@sqrt6@pi$，选 A。`
    ],
    hints: ['长方体外接球用“体对角线一半”。'],
    pitfalls: ['$R^3$ 计算时把 $@sqrt6$ 的立方算错。'],
    takeaway: '长方体外接球：$R=@frac12@sqrt{a^2+b^2+c^2}$。'
  },
  {
    id: 'dr-c-21', knowledge: ['k-so-sphere'], type: 'single', difficulty: 3, score: 5,
    stem: `棱长为 $2$ 的正四面体的外接球表面积为`,
    options: [
      { k: 'A', t: `$3@pi$` },
      { k: 'B', t: `$4@pi$` },
      { k: 'C', t: `$6@pi$` },
      { k: 'D', t: `$8@pi$` }
    ],
    answer: 'C',
    accept: [],
    solution: [
      `正四面体棱长为 $a$ 时，外接球半径 $R=@frac{@sqrt6}{4}a$。`,
      `代入 $a=2$ 得 $R=@frac{@sqrt6}{2}$，$R^2=@frac32$。`,
      `表面积 $S=4@pi R^2=6@pi$，选 C。`
    ],
    hints: ['记住正四面体“外接球半径 $@frac{@sqrt6}{4}a$”这一结论。', '也可以用补形为正方体。'],
    pitfalls: ['把正四面体的高当成直径。', '记成 $@frac{@sqrt3}{4}a$。'],
    takeaway: '正四面体：$R=@frac{@sqrt6}{4}a$，$r=@frac{@sqrt6}{12}a$。'
  },
  {
    id: 'dr-c-22', knowledge: ['k-so-sphere'], type: 'multiple', difficulty: 3, score: 6,
    stem: `下列结论正确的是`,
    options: [
      { k: 'A', t: `棱长为 $2$ 的正方体的外接球表面积为 $12@pi$` },
      { k: 'B', t: `棱长为 $2$ 的正方体的内切球体积为 $@frac{4@pi}{3}$` },
      { k: 'C', t: `棱长为 $2$ 的正四面体的外接球半径为 $@frac{@sqrt6}{2}$` },
      { k: 'D', t: `长、宽、高分别为 $1,1,2$ 的长方体的外接球半径为 $2$` }
    ],
    answer: 'ABC',
    accept: [],
    solution: [
      `对 A：$R=@sqrt3$，$S=12@pi$，正确。`,
      `对 B：内切球半径 $r=1$，$V=@frac43@pi$，正确。`,
      `对 C：$R=@frac{@sqrt6}{4}@cdot2=@frac{@sqrt6}{2}$，正确。`,
      `对 D：$R=@frac12@sqrt{1+1+4}=@frac{@sqrt6}{2}@ne2$，错误。答案为 ABC。`
    ],
    hints: ['把四个几何体分别对应到球心位置。', '正方体内切球直径等于棱长。'],
    pitfalls: ['把长方体的长宽高直接相加再除以二。'],
    takeaway: '三大模型：正方体、正四面体、长方体，各记一个半径公式。'
  },
  {
    id: 'dr-c-23', knowledge: ['k-so-sphere'], type: 'fill', difficulty: 3, score: 5,
    stem: `在三棱锥 $P-ABC$ 中，$PA,PB,PC$ 两两垂直，且 $PA=PB=PC=1$，则该三棱锥外接球的表面积为 ________ .`,
    answer: `$3@pi$`,
    accept: ['3π', '3pi'],
    solution: [
      `把三棱锥补成棱长为 $1$ 的正方体，三棱锥的外接球就是正方体的外接球。`,
      `$2R=@sqrt{1^2+1^2+1^2}=@sqrt3$，故 $R=@frac{@sqrt3}{2}$。`,
      `表面积 $S=4@pi R^2=3@pi$。`
    ],
    hints: ['三条棱两两垂直是“墙角模型”，补成正方体。'],
    pitfalls: ['直接把 $PA$ 当成直径。', '表面积算成 $@frac43@pi R^3$。'],
    takeaway: '墙角模型：三棱锥补正方体，体对角线为外接球直径。'
  },
  {
    id: 'dr-c-24', knowledge: ['k-so-sphere'], type: 'solve', difficulty: 4, score: 12,
    stem: `在三棱锥 $A-BCD$ 中，$AB@perp$ 平面 $BCD$，$BC@perp BD$，$AB=BC=BD=2$。
(1) 证明：平面 $ABD@perp$ 平面 $ABC$；
(2) 求三棱锥 $A-BCD$ 的体积；
(3) 求三棱锥 $A-BCD$ 外接球的表面积。`,
    answer: `(1) 证明见解析；(2) $@frac43$；(3) $12@pi$`,
    accept: [],
    solution: [
      `(1) 因为 $AB@perp$ 平面 $BCD$，$BD@subset$ 平面 $BCD$，所以 $AB@perp BD$。`,
      `又 $BC@perp BD$，且 $AB@cap BC=B$，所以 $BD@perp$ 平面 $ABC$。`,
      `$BD@subset$ 平面 $ABD$，故平面 $ABD@perp$ 平面 $ABC$。`,
      `(2) 底面 $@triangle BCD$ 的面积为 $@frac12@cdot2@cdot2=2$，高 $AB=2$，所以 $V=@frac13@cdot2@cdot2=@frac43$。`,
      `(3) $AB,BC,BD$ 两两垂直且长度均为 $2$，把三棱锥补成棱长为 $2$ 的正方体。`,
      `外接球直径 $2R=@sqrt{2^2+2^2+2^2}=2@sqrt3$，$R=@sqrt3$，表面积 $S=4@pi R^2=12@pi$。`
    ],
    hints: ['第 (1) 问用“线面垂直推线线垂直，再推线面垂直”。', '第 (3) 问识别墙角模型。'],
    pitfalls: ['证明面面垂直时漏掉“$BD@subset$ 平面 $ABD$”。', '把 $BC,BD$ 的夹角当成 $60^@circ$。'],
    takeaway: '面面垂直找线面垂直；三条两两垂直的棱直接补正方体求外接球。'
  },
  {
    id: 'dr-c-25', knowledge: ['k-seq-basic'], type: 'single', difficulty: 1, score: 5,
    stem: `已知等差数列 $@left@{a_n@right@}$ 的首项 $a_1=2$，公差 $d=3$，则 $a_{10}=$`,
    options: [
      { k: 'A', t: `$26$` },
      { k: 'B', t: `$29$` },
      { k: 'C', t: `$32$` },
      { k: 'D', t: `$35$` }
    ],
    answer: 'B',
    accept: [],
    solution: [
      `$a_{10}=a_1+9d=2+9@times3=29$，选 B。`
    ],
    hints: ['等差数列第 $n$ 项比首项多 $n-1$ 个公差。'],
    pitfalls: ['误用 $10d$，得到 $32$。'],
    takeaway: '等差基本量：$a_n=a_1+(n-1)d$，注意是 $n-1$。'
  },
  {
    id: 'dr-c-26', knowledge: ['k-seq-basic'], type: 'single', difficulty: 2, score: 5,
    stem: `已知等比数列 $@left@{a_n@right@}$ 中，$a_1=1$，$a_4=8$，则 $a_6=$`,
    options: [
      { k: 'A', t: `$16$` },
      { k: 'B', t: `$24$` },
      { k: 'C', t: `$32$` },
      { k: 'D', t: `$64$` }
    ],
    answer: 'C',
    accept: [],
    solution: [
      `由 $a_4=a_1q^3=8$ 得 $q^3=8$，$q=2$。`,
      `$a_6=a_1q^5=32$，选 C。`
    ],
    hints: ['先用 $a_4$ 求公比，再求 $a_6$。', '也可以直接用 $a_6=a_4q^2$。'],
    pitfalls: ['把 $a_4$ 到 $a_6$ 的间隔当成 $3$ 项。'],
    takeaway: '等比数列项与项之间：下标差几，就乘几次公比。'
  },
  {
    id: 'dr-c-27', knowledge: ['k-seq-basic'], type: 'single', difficulty: 3, score: 5,
    stem: `设等差数列 $@left@{a_n@right@}$ 的前 $n$ 项和为 $S_n$，若 $S_5=20$，$S_{10}=60$，则 $S_{15}=$`,
    options: [
      { k: 'A', t: `$100$` },
      { k: 'B', t: `$110$` },
      { k: 'C', t: `$120$` },
      { k: 'D', t: `$140$` }
    ],
    answer: 'C',
    accept: [],
    solution: [
      `等差数列中，$S_5$，$S_{10}-S_5$，$S_{15}-S_{10}$ 也成等差数列。`,
      `$S_5=20$，$S_{10}-S_5=40$，所以第三段为 $60$。`,
      `$S_{15}=S_{10}+60=120$，选 C。`
    ],
    hints: ['把前 $15$ 项按每 $5$ 项分三段。'],
    pitfalls: ['误以为三段成等比数列。', '把第三段直接当成 $S_{15}$。'],
    takeaway: '等差前 $n$ 项和的分段性质：等长分段的和仍成等差数列。'
  },
  {
    id: 'dr-c-28', knowledge: ['k-seq-basic'], type: 'multiple', difficulty: 3, score: 6,
    stem: `已知等比数列 $@left@{a_n@right@}$ 中，$a_1=1$，$a_3=4$，则下列结论正确的是`,
    options: [
      { k: 'A', t: `$q=2$` },
      { k: 'B', t: `$a_5=16$` },
      { k: 'C', t: `若 $q>0$，则 $S_5=31$` },
      { k: 'D', t: `数列 $@left@{a_na_{n+1}@right@}$ 是公比为 $4$ 的等比数列` }
    ],
    answer: 'BCD',
    accept: [],
    solution: [
      `由 $a_3=a_1q^2=4$ 得 $q^2=4$，所以 $q=2$ 或 $q=-2$，A 错。`,
      `对 B：$a_5=a_1q^4=16$，与 $q$ 的符号无关，正确。`,
      `对 C：$q=2$ 时 $S_5=@frac{1-2^5}{1-2}=31$，正确。`,
      `对 D：$@frac{a_{n+1}a_{n+2}}{a_na_{n+1}}=q^2=4$，正确。答案为 BCD。`
    ],
    hints: ['开平方求公比时不要漏负值。', '奇数项、偶数项只与 $q^2$ 有关。'],
    pitfalls: ['由 $q^2=4$ 只取 $q=2$。', '忽略 $q<0$ 时 $S_5$ 的符号。'],
    takeaway: '等比基本量：$q$ 的符号由具体条件决定，$q^2$ 决定相隔两项的比。'
  },
  {
    id: 'dr-c-29', knowledge: ['k-seq-basic'], type: 'fill', difficulty: 2, score: 5,
    stem: `已知等差数列 $@left@{a_n@right@}$ 中，$a_2=3$，$a_5=9$，则其前 $10$ 项和 $S_{10}=$ ________ .`,
    answer: `$100$`,
    accept: ['100'],
    solution: [
      `公差 $d=@frac{a_5-a_2}{5-2}=@frac{6}{3}=2$。`,
      `$a_1=a_2-d=1$。`,
      `$S_{10}=10@times1+@frac{10@times9}{2}@times2=10+90=100$。`
    ],
    hints: ['先求公差，再求首项。'],
    pitfalls: ['把 $a_2$ 直接当成首项。'],
    takeaway: '等差求和：先定 $a_1,d$，再用 $S_n=na_1+@frac{n(n-1)}{2}d$。'
  },
  {
    id: 'dr-c-30', knowledge: ['k-seq-basic'], type: 'solve', difficulty: 4, score: 12,
    stem: `已知等差数列 $@left@{a_n@right@}$ 的首项 $a_1=1$，且 $a_1,a_3,a_9$ 成等比数列，公差 $d@ne0$。
(1) 求 $a_n$；
(2) 求前 $n$ 项和 $S_n$；
(3) 求使 $S_n>100$ 成立的最小正整数 $n$。`,
    answer: `(1) $a_n=n$；(2) $S_n=@frac{n(n+1)}{2}$；(3) $14$`,
    accept: [],
    solution: [
      `(1) $a_3=1+2d$，$a_9=1+8d$，由等比中项得 $(1+2d)^2=1@cdot(1+8d)$。`,
      `展开得 $1+4d+4d^2=1+8d$，即 $4d^2-4d=0$，所以 $d=1$（$d@ne0$）。`,
      `故 $a_n=1+(n-1)@cdot1=n$。`,
      `(2) $S_n=@frac{n(1+n)}{2}=@frac{n(n+1)}{2}$。`,
      `(3) 由 $@frac{n(n+1)}{2}>100$ 得 $n(n+1)>200$。`,
      `$13@times14=182<200$，$14@times15=210>200$，故最小正整数 $n=14$。`
    ],
    hints: ['第 (1) 问用等比中项列方程。', '第 (3) 问估算相邻两个乘积。'],
    pitfalls: ['解出 $d=0$ 后没有舍去。', '把 $n(n+1)>200$ 的解集写成 $n>14$。'],
    takeaway: '等差与等比交汇：用基本量列方程，注意公差非零的附加条件。'
  },
  {
    id: 'dr-c-31', knowledge: ['k-seq-sum'], type: 'single', difficulty: 2, score: 5,
    stem: `数列 $@left@{a_n@right@}$ 的通项 $a_n=@frac{1}{n(n+1)}$，则其前 $n$ 项和 $S_n=$`,
    options: [
      { k: 'A', t: `$@frac{n}{n+1}$` },
      { k: 'B', t: `$@frac{n+1}{n+2}$` },
      { k: 'C', t: `$@frac{n}{n+2}$` },
      { k: 'D', t: `$@frac{1}{n+1}$` }
    ],
    answer: 'A',
    accept: [],
    solution: [
      `裂项：$a_n=@frac1n-@frac{1}{n+1}$。`,
      `$S_n=@left(1-@frac12@right)+@left(@frac12-@frac13@right)+@cdots+@left(@frac1n-@frac{1}{n+1}@right)=1-@frac{1}{n+1}=@frac{n}{n+1}$，选 A。`
    ],
    hints: ['分母是相邻两数之积，考虑裂项。', '前后项一减一加会相消。'],
    pitfalls: ['裂项后忘记相加首尾剩余项。'],
    takeaway: '裂项相消：$@frac{1}{n(n+1)}=@frac1n-@frac{1}{n+1}$。'
  },
  {
    id: 'dr-c-32', knowledge: ['k-seq-sum'], type: 'single', difficulty: 3, score: 5,
    stem: `数列 $@left@{a_n@right@}$ 的通项 $a_n=n@cdot2^n$，则其前 $n$ 项和 $S_n=$`,
    options: [
      { k: 'A', t: `$(n-1)2^{n+1}+2$` },
      { k: 'B', t: `$(n-1)2^n+2$` },
      { k: 'C', t: `$n2^{n+1}+2$` },
      { k: 'D', t: `$(n+1)2^{n+1}-2$` }
    ],
    answer: 'A',
    accept: [],
    solution: [
      `设 $S_n=1@cdot2+2@cdot2^2+@cdots+n@cdot2^n$，则 $2S_n=1@cdot2^2+@cdots+(n-1)2^n+n@cdot2^{n+1}$。`,
      `两式相减：$-S_n=2+2^2+@cdots+2^n-n@cdot2^{n+1}=2^{n+1}-2-n@cdot2^{n+1}$。`,
      `所以 $S_n=(n-1)2^{n+1}+2$，选 A。`
    ],
    hints: ['等差乘等比，用错位相减。', '相减后中间是等比数列求和。'],
    pitfalls: ['相减时项数数错，最后一项符号写反。', '忘记首项也参与相减。'],
    takeaway: '错位相减：乘公比错位，相减后中间成等比，最后单独整理。'
  },
  {
    id: 'dr-c-33', knowledge: ['k-seq-sum'], type: 'single', difficulty: 3, score: 5,
    stem: `数列 $@left@{a_n@right@}$ 的通项 $a_n=@frac{1}{@sqrt n+@sqrt{n+1}}$，则其前 $n$ 项和 $S_n=$`,
    options: [
      { k: 'A', t: `$@sqrt{n+1}-1$` },
      { k: 'B', t: `$@sqrt n-1$` },
      { k: 'C', t: `$@sqrt{n+1}+1$` },
      { k: 'D', t: `$@sqrt n$` }
    ],
    answer: 'A',
    accept: [],
    solution: [
      `分母有理化：$a_n=@frac{@sqrt{n+1}-@sqrt n}{(n+1)-n}=@sqrt{n+1}-@sqrt n$。`,
      `累加相消：$S_n=(@sqrt2-1)+(@sqrt3-@sqrt2)+@cdots+(@sqrt{n+1}-@sqrt n)=@sqrt{n+1}-1$，选 A。`
    ],
    hints: ['分母含两个根号之和，先有理化。', '有理化后正好裂项。'],
    pitfalls: ['有理化时分子写成 $@sqrt{n+1}+@sqrt n$。'],
    takeaway: '根式裂项：$@frac{1}{@sqrt{n+1}+@sqrt n}=@sqrt{n+1}-@sqrt n$。'
  },
  {
    id: 'dr-c-34', knowledge: ['k-seq-sum'], type: 'multiple', difficulty: 4, score: 6,
    stem: `下列求前 $n$ 项和的结论正确的是`,
    options: [
      { k: 'A', t: `若 $a_n=@frac{1}{n(n+2)}$，则 $S_n=@frac34-@frac{1}{2(n+1)}-@frac{1}{2(n+2)}$` },
      { k: 'B', t: `若 $a_n=n@cdot2^{n-1}$，则 $S_n=(n-1)2^n+1$` },
      { k: 'C', t: `若 $a_n=2^n+n$，则 $S_n=2^{n+1}-2+@frac{n(n+1)}{2}$` },
      { k: 'D', t: `若 $a_n=@frac{1}{@sqrt n+@sqrt{n+1}}$，则 $S_n=@sqrt{n+1}+1$` }
    ],
    answer: 'ABC',
    accept: [],
    solution: [
      `对 A：$a_n=@frac12@left(@frac1n-@frac{1}{n+2}@right)$，累加得 $S_n=@frac12@left(1+@frac12-@frac{1}{n+1}-@frac{1}{n+2}@right)$，正确。`,
      `对 B：错位相减可得 $S_n=(n-1)2^n+1$，验证 $n=1$ 也成立，正确。`,
      `对 C：分组求和，$2+2^2+@cdots+2^n=2^{n+1}-2$，再加大 $@frac{n(n+1)}{2}$，正确。`,
      `对 D：有理化后 $S_n=@sqrt{n+1}-1$，不是 $@sqrt{n+1}+1$，错误。答案为 ABC。`
    ],
    hints: ['逐项验证，可先代 $n=1$ 快速排除。', '裂项时注意系数 $@frac12$。'],
    pitfalls: ['裂项后系数漏乘 $@frac12$。', '把根式和的有理化结果符号写反。'],
    takeaway: '求和三件套：裂项相消、错位相减、分组求和，先看通项结构再选方法。'
  },
  {
    id: 'dr-c-35', knowledge: ['k-seq-sum'], type: 'fill', difficulty: 3, score: 5,
    stem: `已知数列 $@left@{a_n@right@}$ 的通项 $a_n=@frac{n}{2^n}$，则其前 $n$ 项和 $S_n=$ ________ .`,
    answer: `$2-@frac{n+2}{2^n}$`,
    accept: ['2-(n+2)/2^n', '2-(n+2)/2**n'],
    solution: [
      `设 $S_n=@frac{1}{2}+@frac{2}{2^2}+@cdots+@frac{n}{2^n}$，则 $@frac12S_n=@frac{1}{2^2}+@cdots+@frac{n-1}{2^n}+@frac{n}{2^{n+1}}$。`,
      `相减得 $@frac12S_n=@frac12+@frac{1}{2^2}+@cdots+@frac{1}{2^n}-@frac{n}{2^{n+1}}=1-@frac{1}{2^n}-@frac{n}{2^{n+1}}$。`,
      `所以 $S_n=2-@frac{1}{2^{n-1}}-@frac{n}{2^n}=2-@frac{n+2}{2^n}$。`
    ],
    hints: ['等差乘等比，标准错位相减。', '乘 $@frac12$ 而不是 $2$ 更省事。'],
    pitfalls: ['中间等比求和项数写错。', '最后合并时 $@frac{1}{2^{n-1}}$ 与 $@frac{n}{2^n}$ 没有通分。'],
    takeaway: '错位相减后一定要把结果合并成一个分式，并代 $n=1$ 检验。'
  },
  {
    id: 'dr-c-36', knowledge: ['k-seq-sum'], type: 'solve', difficulty: 4, score: 12,
    stem: `已知数列 $@left@{a_n@right@}$ 的通项 $a_n=(2n-1)@cdot2^{n-1}$，其前 $n$ 项和为 $S_n$。
(1) 求 $S_n$；
(2) 求使 $S_n>2026$ 成立的最小正整数 $n$。`,
    answer: `(1) $S_n=(2n-3)2^n+3$；(2) $8$`,
    accept: [],
    solution: [
      `(1) $S_n=1@cdot1+3@cdot2+5@cdot2^2+@cdots+(2n-1)2^{n-1}$，`,
      `则 $2S_n=1@cdot2+3@cdot2^2+@cdots+(2n-3)2^{n-1}+(2n-1)2^n$。`,
      `相减：$-S_n=1+2(2+2^2+@cdots+2^{n-1})-(2n-1)2^n$。`,
      `中间和为 $2^n-2$，所以 $-S_n=1+2^{n+1}-4-(2n-1)2^n=(3-2n)2^n-3$。`,
      `故 $S_n=(2n-3)2^n+3$。`,
      `(2) 计算得 $S_7=11@times128+3=1411<2026$，$S_8=13@times256+3=3331>2026$。`,
      `又 $S_n$ 随 $n$ 增大而增大，故最小正整数 $n=8$。`
    ],
    hints: ['第 (1) 问用错位相减，注意系数 $2$。', '第 (2) 问直接代值估算，不要解超越不等式。'],
    pitfalls: ['相减后中间等比数列的项数少数一项。', '把 $2^n$ 的系数合并错。'],
    takeaway: '错位相减的通项形如“等差乘等比”，算完代 $n=1,2$ 检验最稳。'
  },
  {
    id: 'dr-c-37', knowledge: ['k-seq-recursion'], type: 'single', difficulty: 2, score: 5,
    stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_1=1$，$a_{n+1}=a_n+2n$，则 $a_5=$`,
    options: [
      { k: 'A', t: `$17$` },
      { k: 'B', t: `$19$` },
      { k: 'C', t: `$21$` },
      { k: 'D', t: `$23$` }
    ],
    answer: 'C',
    accept: [],
    solution: [
      `依次递推：$a_2=1+2=3$，$a_3=3+4=7$，$a_4=7+6=13$，$a_5=13+8=21$。`,
      `选 C。`
    ],
    hints: ['项数不大时直接逐项算最快。'],
    pitfalls: ['把 $a_{n+1}-a_n=2n$ 的 $n$ 从 $1$ 开始数错。'],
    takeaway: '累加型递推：$a_n=a_1+@sum_{k=1}^{n-1}2k$，也可逐项验证。'
  },
  {
    id: 'dr-c-38', knowledge: ['k-seq-recursion'], type: 'single', difficulty: 3, score: 5,
    stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_1=1$，$a_{n+1}=2a_n+1$，则 $a_6=$`,
    options: [
      { k: 'A', t: `$31$` },
      { k: 'B', t: `$63$` },
      { k: 'C', t: `$127$` },
      { k: 'D', t: `$64$` }
    ],
    answer: 'B',
    accept: [],
    solution: [
      `两边加 $1$：$a_{n+1}+1=2(a_n+1)$，所以 $@left@{a_n+1@right@}$ 是首项为 $2$、公比为 $2$ 的等比数列。`,
      `$a_n+1=2^n$，即 $a_n=2^n-1$。`,
      `$a_6=2^6-1=63$，选 B。`
    ],
    hints: ['形如 $a_{n+1}=pa_n+q$，构造 $a_{n+1}+t=p(a_n+t)$。'],
    pitfalls: ['构造时常数取错，直接用 $a_n+1$ 却算成 $2^{n-1}$。'],
    takeaway: '一阶线性递推：$a_{n+1}=2a_n+1$ 加 $1$ 构造等比。'
  },
  {
    id: 'dr-c-39', knowledge: ['k-seq-recursion'], type: 'single', difficulty: 3, score: 5,
    stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_1=2$，$a_{n+1}=3a_n-2$，则 $a_4=$`,
    options: [
      { k: 'A', t: `$26$` },
      { k: 'B', t: `$28$` },
      { k: 'C', t: `$30$` },
      { k: 'D', t: `$54$` }
    ],
    answer: 'B',
    accept: [],
    solution: [
      `构造：$a_{n+1}-1=3(a_n-1)$，所以 $@left@{a_n-1@right@}$ 是首项为 $1$、公比为 $3$ 的等比数列。`,
      `$a_n-1=3^{n-1}$，即 $a_n=3^{n-1}+1$。`,
      `$a_4=3^3+1=28$，选 B。`
    ],
    hints: ['设 $a_{n+1}+t=3(a_n+t)$，对比系数求 $t$。'],
    pitfalls: ['构造时把 $t$ 的符号弄反。', '直接逐项算却把 $a_3$ 算成 $8$。'],
    takeaway: '构造等比：$a_{n+1}=pa_n+q$ 配成 $a_{n+1}-@frac{q}{1-p}=p@left(a_n-@frac{q}{1-p}@right)$。'
  },
  {
    id: 'dr-c-40', knowledge: ['k-seq-recursion'], type: 'multiple', difficulty: 4, score: 6,
    stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_1=1$，$a_{n+1}=2a_n+3$，则下列结论正确的是`,
    options: [
      { k: 'A', t: `数列 $@left@{a_n+3@right@}$ 是公比为 $2$ 的等比数列` },
      { k: 'B', t: `$a_n=2^{n+1}-3$` },
      { k: 'C', t: `前 $n$ 项和 $S_n=2^{n+2}-3n-4$` },
      { k: 'D', t: `数列 $@left@{a_n@right@}$ 是等比数列` }
    ],
    answer: 'ABC',
    accept: [],
    solution: [
      `对 A：$a_{n+1}+3=2a_n+6=2(a_n+3)$，首项 $a_1+3=4$，正确。`,
      `对 B：$a_n+3=4@cdot2^{n-1}=2^{n+1}$，故 $a_n=2^{n+1}-3$，正确。`,
      `对 C：$S_n=@sum_{k=1}^n(2^{k+1}-3)=(2^{n+2}-4)-3n$，正确。`,
      `对 D：$a_2=5$，$a_1=1$，比值不恒定，错误。答案为 ABC。`
    ],
    hints: ['先构造等比求出通项。', '求和时把 $2^{k+1}$ 与常数 $3$ 分开。'],
    pitfalls: ['误认为 $a_{n+1}=2a_n+3$ 直接就是等比。', '等比求和首项与项数写错。'],
    takeaway: '递推加常数：构造等比得通项，再分组求和。'
  },
  {
    id: 'dr-c-41', knowledge: ['k-seq-recursion'], type: 'fill', difficulty: 2, score: 5,
    stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_1=1$，$a_{n+1}=@frac{a_n}{1+a_n}$，则 $a_{2026}=$ ________ .`,
    answer: `$@frac{1}{2026}$`,
    accept: ['1/2026'],
    solution: [
      `由 $a_{n+1}=@frac{a_n}{1+a_n}$ 且 $a_n>0$，取倒数得 $@frac{1}{a_{n+1}}=@frac{1}{a_n}+1$。`,
      `所以 $@left@{@frac{1}{a_n}@right@}$ 是首项为 $1$、公差为 $1$ 的等差数列，$@frac{1}{a_n}=n$。`,
      `故 $a_n=@frac1n$，$a_{2026}=@frac{1}{2026}$。`
    ],
    hints: ['分式递推考虑取倒数。', '取倒数后化为等差数列。'],
    pitfalls: ['取倒数后忘记说明 $a_n@ne0$。'],
    takeaway: '形如 $a_{n+1}=@frac{a_n}{ka_n+1}$ 的递推，取倒数构造等差数列。'
  },
  {
    id: 'dr-c-42', knowledge: ['k-seq-recursion'], type: 'solve', difficulty: 4, score: 12,
    stem: `已知数列 $@left@{a_n@right@}$ 满足 $a_1=1$，$a_{n+1}=2a_n+2^n$。
(1) 证明：数列 $@left@{@frac{a_n}{2^n}@right@}$ 是等差数列，并求 $a_n$；
(2) 求数列 $@left@{a_n@right@}$ 的前 $n$ 项和 $S_n$。`,
    answer: `(1) $a_n=n@cdot2^{n-1}$；(2) $S_n=(n-1)2^n+1$`,
    accept: [],
    solution: [
      `(1) 两边同除以 $2^{n+1}$：$@frac{a_{n+1}}{2^{n+1}}=@frac{a_n}{2^n}+@frac12$。`,
      `所以 $@left@{@frac{a_n}{2^n}@right@}$ 是首项 $@frac{a_1}{2}=@frac12$、公差 $@frac12$ 的等差数列。`,
      `$@frac{a_n}{2^n}=@frac12+(n-1)@cdot@frac12=@frac n2$，故 $a_n=n@cdot2^{n-1}$。`,
      `(2) 由错位相减：$S_n=1+2@cdot2+3@cdot2^2+@cdots+n@cdot2^{n-1}$，`,
      `$2S_n=1@cdot2+2@cdot2^2+@cdots+n@cdot2^n$，相减得 $-S_n=1+2+2^2+@cdots+2^{n-1}-n@cdot2^n$。`,
      `即 $-S_n=(2^n-1)-n@cdot2^n$，所以 $S_n=(n-1)2^n+1$。`
    ],
    hints: ['第 (1) 问两边同除以 $2^{n+1}$，把递推化为等差。', '第 (2) 问是“等差乘等比”，用错位相减。'],
    pitfalls: ['除以 $2^n$ 而不是 $2^{n+1}$，导致公差算错。', '错位相减时中间等比项数数错。'],
    takeaway: '递推含 $2^n$：同除 $2^{n+1}$ 构造等差数列；求和再用错位相减。'
  },
  {
    id: 'dr-c-43', knowledge: ['k-seq-ineq'], type: 'single', difficulty: 2, score: 5,
    stem: `设 $S_n=@frac{1}{1@times3}+@frac{1}{3@times5}+@cdots+@frac{1}{(2n-1)(2n+1)}$，则`,
    options: [
      { k: 'A', t: `$S_n<@frac12$` },
      { k: 'B', t: `$S_n=@frac12$` },
      { k: 'C', t: `$S_n>@frac12$` },
      { k: 'D', t: `$S_n@ge1$` }
    ],
    answer: 'A',
    accept: [],
    solution: [
      `裂项：$@frac{1}{(2n-1)(2n+1)}=@frac12@left(@frac{1}{2n-1}-@frac{1}{2n+1}@right)$。`,
      `累加得 $S_n=@frac12@left(1-@frac{1}{2n+1}@right)=@frac{n}{2n+1}$。`,
      `因为 $@frac{n}{2n+1}<@frac12$，所以选 A。`
    ],
    hints: ['分母是相邻奇数之积，裂项后系数为 $@frac12$。'],
    pitfalls: ['裂项后漏乘 $@frac12$，得到 $S_n@to1$。'],
    takeaway: '裂项相消后得到具体和式，再与目标值比较大小。'
  },
  {
    id: 'dr-c-44', knowledge: ['k-seq-ineq'], type: 'single', difficulty: 3, score: 5,
    stem: `设 $S_n=1+@frac12+@frac13+@cdots+@frac1n$，则下列不等式正确的是`,
    options: [
      { k: 'A', t: `$S_n>@ln(n+1)$` },
      { k: 'B', t: `$S_n<@ln(n+1)$` },
      { k: 'C', t: `$S_n=@ln n$` },
      { k: 'D', t: `$S_n<@ln n$` }
    ],
    answer: 'A',
    accept: [],
    solution: [
      `对每个正整数 $k$，有 $@frac1k>@ln@frac{k+1}{k}=@ln(k+1)-@ln k$。`,
      `累加得 $S_n>@ln(n+1)-@ln1=@ln(n+1)$。`,
      `所以选 A。`
    ],
    hints: ['把 $@frac1k$ 与对数差比较。', '利用 $@ln(1+x)<x$（$x>0$）。'],
    pitfalls: ['放缩方向写反，得到 $S_n<@ln(n+1)$。'],
    takeaway: '对数放缩：$@frac{1}{k}>@ln(k+1)-@ln k$，累加得调和级数下界。'
  },
  {
    id: 'dr-c-45', knowledge: ['k-seq-ineq'], type: 'single', difficulty: 3, score: 5,
    stem: `设 $S_n=1+@frac{1}{@sqrt2}+@frac{1}{@sqrt3}+@cdots+@frac{1}{@sqrt n}$，则`,
    options: [
      { k: 'A', t: `$S_n<2@sqrt n$` },
      { k: 'B', t: `$S_n>2@sqrt n$` },
      { k: 'C', t: `$S_n=2@sqrt n$` },
      { k: 'D', t: `$S_n@ge2@sqrt{n+1}$` }
    ],
    answer: 'A',
    accept: [],
    solution: [
      `当 $k@ge2$ 时，$@frac{1}{@sqrt k}<@frac{2}{@sqrt k+@sqrt{k-1}}=2(@sqrt k-@sqrt{k-1})$。`,
      `累加得 $S_n<1+2(@sqrt n-1)=2@sqrt n-1<2@sqrt n$。`,
      `所以选 A。`
    ],
    hints: ['分母有理化方向：把 $@frac{1}{@sqrt k}$ 放大成两个根号之差。', '从 $k=2$ 开始放缩，首项单独保留。'],
    pitfalls: ['放缩过头把首项也一起放大，导致常数项错误。'],
    takeaway: '根式放缩：$@frac{1}{@sqrt k}<2(@sqrt k-@sqrt{k-1})$，累加得到上界。'
  },
  {
    id: 'dr-c-46', knowledge: ['k-seq-ineq'], type: 'multiple', difficulty: 4, score: 6,
    stem: `下列不等式成立的是`,
    options: [
      { k: 'A', t: `$@frac{1}{1^2}+@frac{1}{2^2}+@cdots+@frac{1}{n^2}<2$（$n@ge2$）` },
      { k: 'B', t: `$@frac{1}{1@times2}+@frac{1}{2@times3}+@cdots+@frac{1}{n(n+1)}<1$（$n@in N^*$）` },
      { k: 'C', t: `$2^n>n^2$ 对任意 $n@in N^*$ 恒成立` },
      { k: 'D', t: `$@frac{1}{2^2}+@frac{1}{3^2}+@cdots+@frac{1}{n^2}<@frac12$（$n@ge2$）` }
    ],
    answer: 'ABD',
    accept: [],
    solution: [
      `对 A：$@frac{1}{k^2}<@frac{1}{k(k-1)}$（$k@ge2$），累加得 $S_n<1+1-@frac1n<2$，正确。`,
      `对 B：裂项得 $S_n=1-@frac{1}{n+1}<1$，正确。`,
      `对 C：$n=2$ 时 $2^2=2^2$，$n=4$ 时 $2^4=4^2$，不恒成立，错误。`,
      `对 D：$@sum_{k=2}^n@frac{1}{k^2}<@sum_{k=2}^n@frac{1}{k(k-1)}=1-@frac1n<@frac12$，正确。答案为 ABD。`
    ],
    hints: ['A、D 都用 $@frac{1}{k^2}<@frac{1}{k(k-1)}$ 放缩。', 'C 选项代 $n=2$ 即可否定。'],
    pitfalls: ['放缩时把 $k=1$ 也套用 $@frac{1}{k(k-1)}$，出现分母为零。', '忘记验证等号情形。'],
    takeaway: '平方倒数放缩：从 $k=2$ 起用 $@frac{1}{k^2}<@frac{1}{k(k-1)}$，首项单独留下。'
  },
  {
    id: 'dr-c-47', knowledge: ['k-seq-ineq'], type: 'fill', difficulty: 3, score: 5,
    stem: `设 $S_n=@frac{1}{1@times2}+@frac{1}{2@times3}+@cdots+@frac{1}{n(n+1)}$，若 $S_n>@frac{99}{100}$，则正整数 $n$ 的最小值为 ________ .`,
    answer: `$100$`,
    accept: ['100'],
    solution: [
      `裂项相消得 $S_n=1-@frac{1}{n+1}$。`,
      `由 $1-@frac{1}{n+1}>@frac{99}{100}$ 得 $@frac{1}{n+1}<@frac{1}{100}$，即 $n+1>100$。`,
      `所以 $n>99$，最小正整数 $n=100$。`
    ],
    hints: ['先求和，再解不等式。', '注意 $S_{99}=@frac{99}{100}$ 不满足严格大于。'],
    pitfalls: ['把 $n+1>100$ 写成 $n>100$。', '忽略“严格大于”，误答 $99$。'],
    takeaway: '裂项求和后解不等式，端点是否取到要看不等号是否严格。'
  },
  {
    id: 'dr-c-48', knowledge: ['k-seq-ineq'], type: 'solve', difficulty: 5, score: 15,
    stem: `已知数列 $@left@{a_n@right@}$ 的通项 $a_n=@frac{1}{n^2}$，其前 $n$ 项和为 $S_n$。
(1) 证明：当 $n@ge2$ 时，$S_n<2-@frac1n$；
(2) 证明：当 $n@ge2$ 时，$S_n>@frac32-@frac1n$；
(3) 求使 $S_n>@frac75$ 成立的最小正整数 $n$。`,
    answer: `(1)(2) 证明见解析；(3) $4$`,
    accept: [],
    solution: [
      `(1) 当 $k@ge2$ 时，$@frac{1}{k^2}<@frac{1}{k(k-1)}=@frac{1}{k-1}-@frac1k$。`,
      `累加得 $@sum_{k=2}^n@frac{1}{k^2}<1-@frac1n$，所以 $S_n<2-@frac1n$。`,
      `(2) 当 $k@ge2$ 时，$@frac{1}{k^2}>@frac{1}{k(k+1)}=@frac1k-@frac{1}{k+1}$。`,
      `累加得 $@sum_{k=2}^n@frac{1}{k^2}>@frac12-@frac{1}{n+1}$，所以 $S_n>@frac32-@frac{1}{n+1}>@frac32-@frac1n$。`,
      `(3) $S_3=1+@frac14+@frac19=@frac{49}{36}<@frac75$，`,
      `$S_4=@frac{49}{36}+@frac{1}{16}=@frac{205}{144}>@frac75$（因为 $205@times5=1025>1008=144@times7$）。`,
      `又 $S_n$ 随 $n$ 增大而增大，故最小正整数 $n=4$。`
    ],
    hints: ['第 (1)(2) 问分别用“放大”和“缩小”到裂项形式。', '第 (3) 问直接算 $S_3,S_4$ 并比较。'],
    pitfalls: ['放缩从 $k=2$ 开始，忘记首项 $a_1=1$。', '第 (2) 问分母写成 $k(k-1)$，方向反了。', '比较 $@frac{205}{144}$ 与 $@frac75$ 时直接目测。'],
    takeaway: '平方倒数双向放缩：放大用 $@frac{1}{k(k-1)}$，缩小用 $@frac{1}{k(k+1)}$，首项单独处理。'
  }
);
