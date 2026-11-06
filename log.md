# QMKB Log

> 量子力学知识库的时序操作记录。Append-only。
> 格式：`## [YYYY-MM-DD] action | subject`
> 动作类型：ingest, update, query, lint, create, archive, delete, review
> 超过 500 条时旋转：重命名为 log-YYYY.md，新建空白 log.md。

---

## [2026-05-07] create | 知识库初始化
- 创建目录结构：量子力学知识库 (QMKB) 在 `~/qmkb`
- 应用场景：为量子力学科普自媒体提供严谨、体系化的知识基础
- 参考方案：用户提供的《量子力学科普自媒体创建指南》
- 创建文件：
  - `SCHEMA.md` — 知识库规范与标签体系
  - `index.md` — 内容索引（按四阶架构组织）
  - `log.md` — 本日志文件
- 目录结构：
  - `raw/` — 原始资料（articles, papers, books, courses, assets）
  - `entities/` — 实体（机构、实验设备等）
  - `concepts/` — 概念页面
  - `comparisons/` — 对比分析
  - `applications/` — 应用与前沿
  - `history/` — 历史事件与脉络
  - `interpretations/` — 诠释与哲学
  - `resources/` — 资源汇总
  - `experiments/` — 著名实验
  - `people/` — 科学家
  - `queries/` — 查询归档
  - `.vitepress/` — VitePress 站点配置
  - `public/` — 静态资源

## [2026-05-07] create | 权威资源汇总
- 收集并整理量子力学领域权威资源
- 创建 `resources/authoritative-sources.md`
- 包括：学术期刊、教科书、课程、百科、开源工具、中文资源

## [2026-05-07] ingest | 阶段一：经典物理的黄昏 内容补充
- 目标：为知识库补充"概念层 阶段一：经典物理的黄昏"相关内容
- 创建/更新概念文章：
  - `concepts/photoelectric-effect.md` — 从 stub 重写为完整内容，包含实验现象、经典失败、爱因斯坦解释、密立根验证
  - `concepts/energy-quantization.md` — 从 stub 重写为完整内容，包含经典连续性、普朗克假说、固体比热容、现代量子力学表述
  - `concepts/photon.md` — 从 stub 重写为完整内容，包含光量子假说、光子属性、康普顿散射、规范玻色子角色
- 创建历史事件文章：
  - `history/classical-physics-crisis.md` — 经典物理的三大危机：黑体辐射、光电效应、原子稳定性
  - `history/1900-planck-quantum-hypothesis.md` — 1900年12月14日普朗克量子假说的诞生
  - `history/1905-einstein-miracle-year.md` — 爱因斯坦奇迹年四篇论文，光量子假说的确立
  - `history/atomic-stability-problem.md` — 卢瑟福核式模型与经典电磁灾难
- 修复错误：
  - `people/albert-einstein.md` 修复 typo：犹太相对论 → 狭义相对论
- 更新索引：
  - `history/index.md` — 添加阶段一历史事件列表
  - `index.md` — 首页历史事件卡片计数更新为 4 篇文章
- 所有新创建/更新文章均包含：
  - 简体中文主体
  - YAML frontmatter（含可信度标注）
  - VitePress admonition 可信度说明
  - LaTeX 数学公式
  - 至少 2 个 wikilink 交叉链接
  - 参考文献部分（A/B 级来源为主）
  - 流传误区标注

## [2026-05-07] update | 拆分 black-body-radiation 与导航标题中文化
- 拆分 `concepts/black-body-radiation.md`：
  - 重写为 `concepts/black-body-radiation.md` — 独立"黑体辐射"概念文章（含基尔霍夫定律、斯特藩-玻尔兹曼定律、维恩位移定律、普朗克公式、CMB等应用）
  - 新建 `concepts/ultraviolet-catastrophe.md` — 独立"紫外灾难"概念文章（含瑞利-金斯推导、能量均分定理失效、经典理论边界）
- 批量修复 30 个文件的 frontmatter title 为纯中文（符合 SCHEMA 语言规范）：
  - applications/, concepts/, experiments/, interpretations/, people/ 目录下的英文 title
- 更新所有引用 `black-body-radiation` 的页面：
  - `concepts/photon.md`, `concepts/photoelectric-effect.md`, `concepts/energy-quantization.md`
  - `history/classical-physics-crisis.md`, `history/1900-planck-quantum-hypothesis.md`, `history/1905-einstein-miracle-year.md`
  - `people/max-planck.md`, `concepts/index.md`
- 更新 `.vitepress/config.mjs` sidebar：阶段一增加 ultraviolet-catastrophe 条目
- 更新 `concepts/index.md` 阶段一表格：拆分为"黑体辐射"和"紫外灾难"两个条目
- 更新 `index.md` 首页核心概念文章计数：14 → 15 篇
- 更新 `log.md` 本条目

## [2026-05-07] update | 丰富 concepts/wave-particle-duality.md 波粒二象性
- 目标：将简短的波粒二象性页面扩展为符合 QMKB 内容规范的完整概念文章
- 新增/扩展内容：
  - 历史背景：从牛顿微粒说到麦克斯韦波动说的发展脉络
  - 光的波动性证据：杨氏双缝干涉、衍射与偏振
  - 光的粒子性证据：光电效应、康普顿散射及公式 $\Delta\lambda = \frac{h}{m_e c}(1 - \cos\th\eta)$
  - 物质的波动性：德布罗意假说 $ \lambda = h/p $、戴维逊-盖末实验、电子双缝实验
  - 互补原理：波粒图像的互补关系、哪路信息-干涉可见度定量不等式 $\mathcal{V}^2 + \mathcal{D}^2 \leq 1$
  - 现代量子力学理解：概率幅、波函数叠加与归一性
  - 量子场论视角：场量子化对波粒二象性的统一描述
  - 德布罗意波长表：从光子到宏观物体的波长对比
  - 科学史意义
  - 流传误区（5 条）
- 双向链接：页面包含 13 个出站 wikilinks
- 参考文献：7 条（含 Einstein 1905、Compton 1923、de Broglie 1924、Davisson-Germer 1927 原始论文 + Griffiths、Sakurai 教材）
- 规范符合性：YAML frontmatter、可信度说明、LaTeX 公式、A/B 级来源均已完整


## [2026-05-07] ingest | 阶段二：量子世界初探 内容补充与双向链接建设
- 目标：按照 QMKB 内容规范，查找权威资料补充阶段二"量子世界初探"的 stub 页面，并建立双向链接
- 新增/重写概念文章：
  - `concepts/matter-wave.md` — 从 stub 重写为完整内容，含德布罗意假说、戴维逊-盖末实验验证、概率诠释、现代波动力学表述
  - `concepts/complementarity-principle.md` — 从 stub 重写为完整内容，含波粒互补性、时空-因果互补、测量仪器整体性、爱因斯坦-玻尔论战、量子擦除实验
  - `concepts/quantization-energy-levels.md` — 从 stub 重写为完整内容，含玻尔原子模型三大假设、能级公式、光谱系、索末菲扩展、弗兰克-赫兹实验验证
- 新增/重写人物与实验文章：
  - `people/niels-bohr.md` — 从 stub 重写为完整人物传记，含原子模型、互补原理、爱因斯坦-玻尔论战
  - `people/louis-de-broglie.md` — 从 stub 重写为完整人物传记，含物质波假说、后期工作
  - `experiments/davisson-germer.md` — 从 stub 重写为完整实验记录，含实验背景、装置、结果、历史意义
- 修复错别字：
  - `concepts/wave-particle-duality.md`："洪射"→"衍射"，"补乍原理"→"互补原理"
  - `experiments/double-slit-experiment.md`："补乍原理"→"互补原理"
- 双向链接建设：
  - 新页面均包含至少 4 个出站 wikilinks
  - `people/niels-bohr.md` 链接至 `quantization-energy-levels`、`complementarity-principle`
  - `people/louis-de-broglie.md` 链接至 `matter-wave`
  - `experiments/davisson-germer.md` 链接至 `matter-wave`
  - `concepts/energy-quantization.md` 已包含 `quantization-energy-levels` 链接
- 所有新创建/更新文章均包含：
  - YAML frontmatter（含 credibility、confidence、tags）
  - VitePress admonition 可信度说明（A/B 级来源）
  - LaTeX 数学公式
  - 至少 2 个 wikilink 交叉链接（实际 4-8 个）
  - References 部分（含原始论文 + 标准教材交叉验证）
  - 流传误区标注

## [2026-05-08] create | 补充缺失人物/概念/历史页面并修复链接
- 目标：根据 lint 报告补充缺失页面，修复损坏的 wikilinks
- 新创建人物页面（5篇）：
  - `people/paul-dirac.md` — 保罗·狄拉克，含狄拉克方程、bra-ket 符号、费米-狄拉克统计、表象理论
  - `people/gustav-kirchhoff.md` — 古斯塔夫·基尔霍夫，含热辐射定律、电路定律、光谱分析
  - `people/ludwig-boltzmann.md` — 路德维希·玻尔兹曼，含熵公式、斯忒藩-玻尔兹曼定律、气体动理论
  - `people/john-von-neumann.md` — 约翰·冯·诺依曼，含量子力学的数学基础、测量理论形式化、密度矩阵、隐变量不可能性
  - `people/ernest-rutherford.md` — 欧内斯特·卢瑟福，含\alpha粒子散射实验、核式原子模型、放射性研究、人工核反应
- 新创建概念/历史页面（6篇）：
  - `concepts/hydrogen-atom.md` — 氢原子，含玻尔模型、定态薛定谔方程精确解、量子数
  - `concepts/matrix-mechanics.md` — 矩阵力学，含创建背景、对易关系、与波动力学等价性
  - `concepts/operator-theory.md` — 算符理论，含线性算符、自伴算符、本征值问题、常见算符
  - `history/1927-fifth-solvay-conference.md` — 1927 第五次索尔维会议，含爱因斯坦-玻尔论战、会议结果与影响
  - `history/solvay-conference.md` — 索尔维会议系列概述，含各届会议一览、科学史意义
  - `history/einstein-bohr-debate.md` — 爱因斯坦-玻尔论战，含完备性争议、思想实验、贝尔不等式与阿斯佩特实验
- 修复链接：
  - `comparisons/matrix-mechanics-vs-wave-mechanics.md`: `interpretations/index` 替换为正确链接
  - `history/index.md`: 修复 `1927-solvay-conference` 链接指向 `1927-fifth-solvay-conference`
  - `log.md` 和 `SCHEMA.md`: 将 wikilink 示例改为代码格式避免 lint 误报
- 更新索引页面：
  - `people/index.md` — 增加5人，同时补充 max-born 和 john-bell
  - `concepts/index.md` — 增加氢原子、矩阵力学、算符理论
  - `history/index.md` — 增加爱因斯坦-玻尔论战、索尔维会议
- 所有新页面均包含：YAML frontmatter、可信度说明、LaTeX公式、交叉链接、参考文献、流传误区

## [2026-05-08] create | 补充 experiments/ 实验与思想实验页面
- 目标：按照 QMKB SCHEMA 规范，补充 experiments/ 目录下所有 stub 页面
- 新增/重写实验文章（6篇）：
  - `experiments/aspect-test.md` — Aspect 实验，含钙原子级联辐射、CHSH 不等式、快速切换装置、流传误区（3条）
  - `experiments/compton-scattering.md` — 康普顿散射，含实验装置、康普顿公式、波长变化数据、流传误区（3条）
  - `experiments/epr-paradox.md` — EPR 悖论，含实在性与定域性假设、碎片版 EPR、贝尔不等式检验、流传误区（3条）
  - `experiments/photoelectric-effect-exp.md` — 光电效应实验，含赫兹/勒纳德/密立根三阶段实验、遏止电压测量、流传误区（3条）
  - `experiments/photon-box.md` — 光子箱思想实验，含爱因斯坦论证、玻尔反驳（引力红移）、流传误区（3条）
  - `experiments/schrodingers-cat.md` — 薛定谔的猫，含各种诠释回应、现代“猫态”实验、流传误区（3条）
- 更新索引：
  - `experiments/index.md` — 更新6篇文章描述，去除“待补充”标记
- 标签修复：调整不在 taxonomy 中的 tags（photon → wave-particle-duality, complementarity → measurement 等）
- 运行 lint 验证：0 errors, 1 warning, 2 info（唯一 warning 为已有的 micius-satellite orphan）
- 所有新页面均含：YAML frontmatter、可信度说明、LaTeX 公式、\geq2 个 wikilinks、参考文献、流传误区

## [2026-05-08] update | 扩充 experiments/ 现有短缺页面
- 目标：扩充内容过于简略的实验页面，使其达到 QMKB SCHEMA 完整标准
- 扩充页面（2篇）：
  - `experiments/double-slit-experiment.md` — 双缝实验，从 58 行扩充至 190 行，含历史脉络（1801 杨一→1989 外村彰单电子→大分子）、四种情形、概率幅叠加/路径积分解释、延迟选择与量子擦除、流传误区（4条）
  - `experiments/davisson-germer.md` — 戴维逊-盖末实验，从 68 行扩充至 170 行，含意外发现故事、Bragg 公式验证、多组加速电压数据表、G.P. Thomson 独立工作、流传误区（3条）
- 运行 lint 验证：0 errors, 1 warning, 2 info（唯一 warning 为已有的 micius-satellite orphan）

## [2026-05-07] update | Phase 2: 补充实验与启动对比分析
- 新增实验文章（2 篇）：
  - `experiments/stern-gerlach-experiment.md` — 斯特恩-盖拉赫实验，含实验装置、两束分裂、自旋的发现、与玻尔模型的矛盾、量子比特原型、流传误区（4条）
  - `experiments/franck-hertz-experiment.md` — 弗兰克-赫兹实验，含电子-原子碰撞机制、能量损失的离散性、$4.9$ eV 能级差、光谱验证、流传误区（4条）
- 新增对比分析文章（2 篇）：
  - `comparisons/matrix-mechanics-vs-wave-mechanics.md` — 矩阵力学与波动力学的全面对比，含数学工具、物理图像、等价性证明、现代地位、流传误区（4条）
  - `comparisons/quantum-interpretations-comparison.md` — 哥本哈根/多世界/导航波三大诠释对比，含实在性、测量过程、定域性、测量问题视角、流传误区（4条）
- 更新 index 页面：
  - `experiments/index.md` — 增加两个新实验条目，计数 8 → 10
  - `comparisons/index.md` — 初始化并列出 2 篇文章
  - `index.md` 首页 — 实验 8 → 10，对比分析"建设中" → 2 篇
- 重新构建并部署网站到 /home/wwwroot/qm.pinkoculture.com
- 所有新创建文章均包含：
  - YAML frontmatter（含 confidence、tags）
  - VitePress admonition 可信度说明（★★★★★ / ★★★★☆）
  - LaTeX 数学公式
  - 至少 6 个 wikilink 交叉链接
  - References 部分（含原始论文 + 教材/百科）
  - 流传误区标注

- 修复 index 页面：
  - `people/index.md` — 修复爱因斯坦描述中"犹太相对论"→"犹义相对论"，为所有 8 篇人物文章补充中文描述
  - `experiments/index.md` — 为 8 篇实验文章补充描述，完整页面标注"完整"，stub 标注"待补充"
  - `applications/index.md` — 为 4 篇应用文章补充一句话主题描述（均为 stub）
  - `interpretations/index.md` — 为 5 篇诠释文章补充一句话主题描述（均为 stub）
- 创建历史事件文章（5 篇）：
  - `history/1913-bohr-atomic-model.md` — 玻尔原子模型，含三大假设、能级公式、流传误区
  - `history/1924-de-broglie-matter-wave.md` — 德布罗意物质波假说，含波长公式、站波解释、实验验证
  - `history/1925-heisenberg-matrix-mechanics.md` — 海森堡矩阵力学，含不可交换性、玻恩-约当对易关系、三人论文
  - `history/1927-solvay-conference.md` — 第五次索尔维会议，含爱因斯坦-玻尔论战、参会者、思想实验
  - `history/1935-epr-paradox-paper.md` — EPR 悖论论文，含实在性假设、定域性假设、玻尔反应、纠缠词汇诞生
- 更新 `history/index.md` — 按时间线重新组织，分为"阶段一"与"阶段二至阶段四"两大区块
- 更新 `index.md` 首页 — 历史事件卡片计数 4 → 9 篇
- 所有新创建历史文章均包含：
  - YAML frontmatter（含 confidence、tags）
  - VitePress admonition 可信度说明（★★★★★）
  - LaTeX 数学公式
  - 至少 6 个 wikilink 交叉链接
  - References 部分（含原始论文 + 科学史专著）
  - 流传误区标注

## [2026-05-09] create | 补充 entities/ 实体层内容（机构与实验室）
- 目标：分析现有页面中提到但未覆盖的重要 entity，补充机构与实验室页面
- 新创建 entity 文章（3篇）：
  - `entities/niels-bohr-institute.md` — 尼尔斯·玻尔研究所，含创立背景、黄金时代、在所研究者名单、战时与战后、现代发展、流传误区（2条）
  - `entities/university-of-science-and-technology-of-china.md` — 中国科学技术大学，含量子信息研究核心阵地、主要研究团队、重大成果时间线、国际合作、流传误区（2条）
  - `entities/cavendish-laboratory.md` — 卡文迪许实验室，含历任主任、原子物理学发源地、与量子力学的关联、流传误区（2条）
- 更新索引页面：
  - `entities/index.md` — 初始化并列出 3 篇文章
  - `index.md` 首页 — 实体分类卡片"建设中" → "3 篇文章"
- 所有新页面均包含：
  - YAML frontmatter（含 confidence、tags、type: entity）
  - VitePress admonition 可信度说明（★★★★★）
  - 至少 2 个 wikilink 交叉链接
  - References 部分（含 A/B 级来源）
  - 流传误区标注

## [2026-05-09] create | 继续补充 entities/ 实体层（CERN 与马克斯·普朗克学会）
- 目标：补充与量子力学发展密切相关的国际重要研究机构
- 新创建 entity 文章（2篇）：
  - `entities/cern.md` — 欧洲核子研究中心，含创建与发展、贝尔与量子基础研究、反物质实验、量子计算初衷、重大研究设施、流传误区（2条）
  - `entities/max-planck-society.md` — 马克斯·普朗克学会，含皇家威廉学会时期、更名与重建、量子光学与量子信息研究所、量子多体系统研究所、流传误区（2条）
- 更新现有页面：
  - `people/john-bell.md` — 将文中的"欧洲核子研究中心（CERN）"、"CERN"替换为指向 `entities/cern` 的 wikilink
- 更新索引页面：
  - `entities/index.md` — 增加 CERN 与马克斯·普朗克学会条目，计数 3 → 5 篇
  - `index.md` 首页 — 实体分类卡片 3 → 5 篇
- 所有新页面均包含：
  - YAML frontmatter（含 confidence、tags、type: entity）
  - VitePress admonition 可信度说明（★★★★★）
  - 至少 2 个 wikilink 交叉链接
  - References 部分（含 A/B 级来源）
  - 流传误区标注


## [2026-05-09] create | 继续扩充实体层（慕尼黑大学、ETH Zurich、普林斯顿高等研究院）
- 目标：补充与量子力学发展密切相关的三个重要学术机构/学派
- 新创建 entity 文章（3篇）：
  - `entities/ludwig-maximilian-university-munich.md` — 慕尼黑大学与索末菲学派，含索末菲建立学派背景、核心成员与成就、海森堡与泡利的学习经历、精细结构常数、流传误区（2条）
  - `entities/eth-zurich.md` — 苏黎世联邦理工学院，含历史背景、薛定谔波动力学诞生、泡利黄金时代、外尔与数学物理、流传误区（2条）
  - `entities/institute-for-advanced-study.md` — 普林斯顿高等研究院，含创立背景、爱因斯坦晚年工作与EPR悖论、冯·诺依曼量子力学数学基础、量子逻辑、流传误区（3条）
- 更新现有页面：
  - `people/werner-heisenberg.md` — 将"慕尼黑大学"替换为指向 `ludwig-maximilian-university-munich` 的 wikilink
  - `people/erwin-schrodinger.md` — 添加 ETH Zurich 同城说明及 wikilink
  - `people/albert-einstein.md` — 添加普林斯顿高等研究院 wikilink
  - `people/john-von-neumann.md` — 将 IAS 替换为指向 `institute-for-advanced-study` 的 wikilink
- 更新索引页面：
  - `entities/index.md` — 增加三个新条目，计数 5 → 8 篇
  - `index.md` 首页 — 实体分类卡片 5 → 8 篇
- 所有新页面均包含：
  - YAML frontmatter（含 confidence、tags、type: entity）
  - VitePress admonition 可信度说明（★★★★★）
  - 至少 2 个 wikilink 交叉链接
  - References 部分（含 A/B 级来源）
  - 流传误区标注



## [2026-05-09] create | 补充 interpretations/ 量子力学诠释层内容与分类导航
- 目标：按 QMKB 标准，查找权威来源并补充量子力学诠释层内容；同步优化左侧导航与分类索引。
- 新创建 interpretation 文章（4篇）：
  - `interpretations/objective-collapse-theories.md` — 客观坍缩理论，含 GRW/CSL、实验可检验性、与退相干/多世界/导波理论对比。
  - `interpretations/consistent-histories.md` — 一致历史诠释，含历史族、一致性条件、单一框架规则与量子宇宙学语境。
  - `interpretations/relational-quantum-mechanics.md` — 关系性量子力学，含 Rovelli 关系实在论、相对事实与 EPR 讨论。
  - `interpretations/qbism.md` — QBism，含量子态的贝叶斯概率解释、玻恩规则一致性约束、测量作为行动者经验更新。
- 更新索引与导航：
  - `interpretations/index.md` — 按“问题框架与传统诠释 / 实在论与动力学路线 / 历史、关系与信息路线”三类重写索引，计数 5 → 9 篇。
  - `.vitepress/config.mjs` — 为 interpretations 左侧导航增加同维度分组。
  - `index.md` — 首页诠释卡片描述与文章计数更新为 9 篇。
- 更新标签体系：
  - `SCHEMA.md` 与 `scripts/lint.js` 同步新增 `objective-collapse`、`consistent-histories`、`relational`、`qbism` 标签。
- 权威来源：使用 GRW 1986、Pearle 1989、Bassi et al. 2013 RMP、Griffiths 1984、Omnès 1992 RMP、Rovelli 1996、Fuchs & Schack 2013 RMP 等原始论文/权威综述。
- 验证：`npm run lint && npm run build` 通过（0 errors, 0 warnings；仅保留既有 2 条超长页面 info）。


## [2026-05-09] update | 批量规范化页面元数据 status 与 difficulty
- 目标：统一旧页面 frontmatter 元数据，便于后续自动判断页面完成度、学习难度与复审优先级。
- 批量更新：为缺少字段的页面补充 `status: complete` 与 `difficulty`，并将被修改页面的 `updated` 日期更新为 2026-05-09。
- 难度分级规则：
  - `beginner`：人物、历史、实验、资源索引、入门概念与分类索引。
  - `intermediate`：量子态/波函数/纠缠/不确定性、量子计算与通信、部分诠释入门页面。
  - `advanced`：希尔伯特空间、算符理论、薛定谔方程、贝尔定理、退相干、高级诠释、对比分析与高阶应用。
- 结果统计：全部 markdown 页面均已有 `status` 与 `difficulty`；当前难度分布为 beginner 65、intermediate 13、advanced 17。
- 验证：`npm run lint && npm run build` 通过（0 errors, 0 warnings；3 条 page-size info）。

## [2026-05-09] fix | P0 旧页面错字、乱码与 LaTeX 转义专项清理

- **范围**: 对旧页面中影响读者观感和专业可信度的明显错字、乱码、OCR/编码污染与 LaTeX 转义错误进行专项清理。
- **重点页面**:
  - `people/erwin-schrodinger.md`
  - `interpretations/copenhagen-interpretation.md`
  - `interpretations/pilot-wave-theory.md`
  - `interpretations/decoherence-interpretation.md`
  - `concepts/wave-function-collapse.md`
  - `concepts/decoherence.md`
  - `concepts/hilbert-space.md`
- **主要修复**:
  - 修复人名与术语错字：如“薛定貔”→“薛定谔”、“爱因斯坩”→“爱因斯坦”、“温尔纳·海森堡”→“维尔纳·海森堡”、“诺侚曼”→“诺依曼”。
  - 修复物理术语与表达：如“非隐称性”→“非局域性”、“量子遗传学”→“量子达尔文主义”、“环境诸选择”→“环境诱导超选择”、“波函数崩缩”→“波函数坍缩”。
  - 修复 LaTeX/转义错误：如 `\partialt`、`psi(mathbf`、`S(mathbf`、`\u03c8` 等。
  - 修复明显 OCR/编码污染：如“莱斯·叶县国家实验室”、“石墨爪”、“鼻炎度假”、“孝子号”等。
- **连带修复页面**: `concepts/matrix-mechanics.md`、`concepts/quantum-entanglement.md`、`concepts/uncertainty-principle.md`、`concepts/complementarity-principle.md`、`concepts/index.md`、`history/1905-einstein-miracle-year.md`、`history/1925-heisenberg-matrix-mechanics.md`、`history/1927-fifth-solvay-conference.md`、`history/1927-solvay-conference.md`、`people/index.md`、`people/pan-jianwei.md`、`people/werner-heisenberg.md`。
- **验证**: 复扫指定可疑文本无残留；`npm run lint && npm run build` 通过（0 errors, 0 warnings, 3 info）。

## [2026-05-09] update | 扩充核心人物页面质量与权威来源

- **目标**: 修复人物层质量不均衡问题，优先扩充量子力学叙事中被历史线、概念线、实验线反复引用的六位核心人物。
- **扩充页面**:
  - `people/max-planck.md` — 马克斯·普朗克
  - `people/albert-einstein.md` — 阿尔伯特·爱因斯坦
  - `people/niels-bohr.md` — 尼尔斯·玻尔
  - `people/werner-heisenberg.md` — 维尔纳·海森堡
  - `people/erwin-schrodinger.md` — 埃尔温·薛定谔
  - `people/louis-de-broglie.md` — 路易·德布罗意
- **内容增强**:
  - 每篇补充概述、可信度说明、生平时间线、关键论文与贡献、与其他人物的学术关系、在量子力学发展中的位置、常见误区、相关条目与参考文献。
  - 每篇加入 A/B 级来源：原始论文、诺贝尔奖官方资料、Oxford/Cambridge/Princeton 等学术出版社科学史资料。
  - 增强与历史、概念、实验、诠释页面的 wikilink 交叉链接。
- **结构调整**: 将 `niels-bohr.md` 与 `louis-de-broglie.md` 的 `type` 从 `entity` 统一为 `person`。
- **验证**: 六篇页面均约 102–107 行，均含 20+ wikilinks 与 4 条 A/B 级参考来源；`npm run lint && npm run build` 通过（0 errors, 0 warnings, 3 info）。

## [2026-05-09] create | 补齐历史线 1926—1982 关键节点

### 目标
- 按历史时间线补齐 1926 年与 1930 年后的关键节点，将历史线从“早期量子革命”扩展到“现代量子基础”。

### 新增页面
- `history/1926-schrodinger-wave-mechanics.md`：1926 薛定谔波动力学。
- `history/1926-born-probability-interpretation.md`：1926 玻恩概率诠释。
- `history/1927-uncertainty-principle.md`：1927 不确定性原理的提出。
- `history/1930-dirac-principles-of-quantum-mechanics.md`：1930 狄拉克《量子力学原理》。
- `history/1932-von-neumann-mathematical-foundations.md`：1932 冯·诺依曼《量子力学的数学基础》。
- `history/1964-bell-theorem.md`：1964 贝尔定理。
- `history/1982-aspect-experiment.md`：1982 Aspect 实验。

### 结构更新
- 重写 `history/index.md`，按“经典物理危机 / 旧量子论 / 量子力学建立 / 形式化与基础争论 / 现代量子基础”组织。
- 更新 `.vitepress/config.mjs` 中历史事件左侧导航分组。
- 更新首页历史事件卡片描述与计数：历史页增加至 19 篇。

### 来源与质量
- 每个新增节点均包含可信度说明、历史背景、关键突破、同代反应或后续发展、科学史意义、流传误区、相关条目与参考文献。
- 来源优先使用原始论文/原著、诺贝尔奖官方资料、RMP/SEP、Oxford/Cambridge/Princeton/Springer/Wiley 等 A/B 级资料。

### 验证
- `npm run lint`：0 errors, 0 warnings, 3 info（仅既有页面过长提示）。
- `npm run build`：通过（保留既有 Rollup chunk size warning）。

## [2026-05-10] create | 补齐核心概念层数学框架与动力学缺口
- 目标：按照用户提出的第 5 项建议，补充核心概念层中“承上启下”的数学与物理概念。
- 新创建 concept 文章（9篇）：
  - `concepts/density-matrix.md` — 密度矩阵，连接混合态、退相干、测量理论与量子信息。
  - `concepts/born-rule.md` — 玻恩规则，连接概率诠释、Max Born、测量问题与多种诠释。
  - `concepts/commutator.md` — 对易关系，连接矩阵力学、不确定性原理与算符代数。
  - `concepts/observables.md` — 可观测量，含自伴算符、本征值、本征态与测量公设。
  - `concepts/quantum-state.md` — 量子态，区分纯态、混合态、态矢量、波函数与密度算符。
  - `concepts/hamiltonian.md` — 哈密顿量，作为能量算符与时间演化生成元。
  - `concepts/time-evolution.md` — 时间演化，含幺正演化、能量表象、薛定谔绘景与海森堡绘景。
  - `concepts/perturbation-theory.md` — 微扰理论，含定态非简并、简并与含时微扰的边界说明。
  - `concepts/spin.md` — 自旋，含 Stern-Gerlach 实验、自旋算符、Pauli 矩阵与量子比特关联。
- 更新导航与索引：
  - `concepts/index.md` — 从四阶段重构为六阶段学习路径，新增“数学框架”和“动力学与近似方法”，总数更新为 30 篇。
  - `.vitepress/config.mjs` — 核心概念 sidebar 同步分组并加入 9 个新页面。
  - `index.md` — 首页核心概念描述、计数与学习路径更新为六阶段。
- 标签体系同步：
  - `SCHEMA.md` 与 `scripts/lint.js` 同步新增 `density-matrix`、`perturbation-theory` 标签。
- 验证：`npm run lint` 通过（0 errors, 0 warnings，保留既有 3 条 page-size info）；`npm run build` 通过。

## [2026-05-10] create | 应用层升级为技术路线图与关键问题结构
- 目标：按照用户提出的第 6 项建议，将应用层从单篇科普介绍升级为“技术路线图 + 关键瓶颈 + 权威来源 + 中国进展”。
- 新创建 application 文章（12篇）：
  - 量子计算路线图：`applications/quantum-error-correction.md`、`applications/nisq-era.md`、`applications/shor-algorithm.md`、`applications/grover-algorithm.md`。
  - 量子通信与安全路线图：`applications/bb84-protocol.md`、`applications/e91-protocol.md`、`applications/quantum-repeater.md`、`applications/device-independent-qkd.md`。
  - 量子传感路线图：`applications/nv-center.md`、`applications/squid.md`、`applications/atom-interferometer.md`、`applications/standard-quantum-limit.md`。
- 更新导航与索引：
  - `applications/index.md` — 重写为三条技术路线图结构，应用层总数更新为 19 篇。
  - `.vitepress/config.mjs` — 应用与前沿 sidebar 按“量子计算路线图 / 量子通信与安全路线图 / 量子传感路线图”分组。
  - `index.md` — 首页应用层描述与文章计数更新为 19 篇。
- 内容规范：所有新页面均包含 frontmatter、可信度说明、技术路线图/工程瓶颈、中国进展、流传误区、相关条目与 A/B 级参考文献。
- 验证：`npm run lint` 通过（0 errors, 0 warnings，保留既有 3 条 page-size info）；`npm run build` 通过。


## [2026-05-10] create | 新增系统学习路径页并优化导航入口

- 新增根级页面 `learning-path.md`，作为 QMKB 系统学习路径总览。
- 页面按四条路线组织阅读顺序：
  - 入门路线：从经典危机到量子概念。
  - 正式理论路线：从数学框架到核心原理。
  - 量子基础路线：从测量问题到诠释。
  - 应用路线：从量子信息到工程系统。
- 在 `.vitepress/config.mjs` 顶部导航新增“学习路径”入口。
- 在首页 hero 主按钮和“学习路径”区块增加 `/learning-path` 入口。
- 验证：`npm run lint` 通过，0 errors / 0 warnings / 3 info；`npm run build` 通过，并确认 `.vitepress/dist/learning-path.html` 已生成。


## [2026-05-10] create | 新增概念图谱并强化全局导航

- 新增 `docs/concept-map.md`，作为 QMKB 概念图谱 / 知识地图页面。
- 页面按主题链组织全局关系：
  - 经典危机 → 量子假说。
  - 波粒二象性 → 物质波 → 波函数。
  - 矩阵力学 / 波动力学 → 希尔伯特空间 → 算符。
  - 测量问题 → 量子力学诠释。
  - 纠缠 → 贝尔定理 → Aspect 实验 → 量子通信。
  - 退相干 → 经典世界涌现 → 量子计算噪声 / 量子纠错。
- 在 `.vitepress/config.mjs` 顶部导航新增“概念图谱”入口。
- 在首页 hero 与“学习路径”区块增加 `/docs/concept-map` 入口，并在 `learning-path.md` 中加入互链。
- 验证：`npm run lint` 通过，0 errors / 0 warnings / 3 info；`npm run build` 通过，并确认 `.vitepress/dist/docs/concept-map.html` 已生成。


## [2026-05-10] create | 扩展对比分析层并强化误区辨析

- 新增 7 篇 `comparisons/` 对比分析页面：
  - `copenhagen-vs-many-worlds.md`：哥本哈根诠释与多世界诠释。
  - `decoherence-vs-collapse.md`：退相干与坍缩。
  - `einstein-vs-bohr.md`：爱因斯坦与玻尔的核心分歧。
  - `classical-vs-quantum-probability.md`：经典概率与量子概率。
  - `entanglement-vs-correlation.md`：量子纠缠与经典相关。
  - `quantum-computing-vs-classical-computing.md`：量子计算与经典计算。
  - `qkd-vs-post-quantum-cryptography.md`：量子密钥分发与后量子密码。
- 重点强化三篇高频误区辨析：退相干 vs 坍缩、经典概率 vs 量子概率、纠缠 vs 经典相关。
- 重写 `comparisons/index.md`，将对比分析层扩展为 9 篇，并按“优先误区辨析 / 诠释与哲学分歧 / 理论形式与计算技术”分组。
- 更新 `.vitepress/config.mjs` 中 comparisons 侧边栏分组。
- 更新首页对比分析卡片描述与文章计数（2 篇 → 9 篇）。
- 验证：`npm run lint` 通过，0 errors / 0 warnings / 3 info；`npm run build` 通过，并确认新增 comparison 页面已生成。


## [2026-05-10] update | 精简顶部导航并收纳次级分类

- 调整 `.vitepress/config.mjs` 顶部导航结构。
- 从顶部导航移除“学习路径”和“概念图谱”，保留其在首页 hero / 学习路径区块中的显著入口。
- 顶部导航保留高频一级入口：首页、核心概念、应用与前沿、量子诠释、对比分析。
- 将相对次级或低频分类收纳到“更多”下拉菜单：量子先驱、著名实验、历史事件、资源汇总、实体、查询归档。
- 验证：`npm run lint` 通过，0 errors / 0 warnings / 3 info；`npm run build` 通过，并确认首页构建产物包含“更多”下拉导航。

## [2026-05-10] create | 查询归档新增高价值问题问答

### 变更内容

- 在 `queries/` 下新增 5 篇高价值问题问答页面：
  - `why-quantum-mechanics-is-not-mysticism.md` — 为什么量子力学不是玄学？
  - `does-observation-create-reality.md` — 观察是否创造现实？
  - `why-entanglement-does-not-enable-faster-than-light-communication.md` — 为什么纠缠不能超光速通信？
  - `is-many-worlds-science-or-philosophy.md` — 多世界诠释是科学还是哲学？
  - `why-quantum-computers-are-not-universal-supercomputers.md` — 为什么量子计算机不是万能超算？
- 重写 `queries/index.md`，将查询归档定位为高价值问题、FAQ 与科普自媒体选题沉淀层，并按“反玄学与基础纠偏 / 纠缠与通信误区 / 诠释争议 / 量子技术预期管理”组织入口。
- 更新首页查询归档分类卡片描述，并将计数从“建设中”改为“5 篇文章”。

### 验证

- `npm run lint` 通过：0 errors, 0 warnings, 3 info。

## [2026-05-10] fix | 审计并修复元数据与文本格式问题

### 变更内容

- 按 llm-wiki / QMKB 规范审计全站 Markdown 文件的 frontmatter、类型、状态、可信度、来源、标题语言、文件命名和基础文本异常。
- 修复若干 sidebar 标题语言问题，将英文姓名/缩写优先改为中文标题：肖尔算法、格罗弗算法、噪声中等规模量子时代、超导量子干涉仪、阿斯佩实验、量子贝叶斯主义等。
- 为 `docs/schema.md` 补充规范 frontmatter，使“知识规范”页面具备资源页元数据。
- 为 `docs/concept-map.md` 补充 `sources` 元数据。
- 为 `resources/authoritative-sources.md` 补充 `confidence` 与 `sources` 元数据，并将 H1 改为中英双语标题，补充内部 wikilinks。
- 为 `learning-path.md` 补充核心条目的 wikilinks，增强知识图谱连接。
- 扫描并修复正文/表格中泄漏的 `\rightarrow` / `\leftarrow` LaTeX 命令，将其转换为可读箭头符号；保留数学公式与代码块中的 TeX 命令。

### 验证

- 自定义审计脚本复查：剩余元数据/乱码/控制字符/正文 TeX 泄漏问题为 0。
- `npm run lint` 通过：0 errors, 0 warnings, 3 info。

## [2026-05-10] update | 概念图谱新增可点击 SVG 总图

### 变更内容

- 在 `docs/concept-map.md` 中按方案 A 增加 inline SVG 概念图谱。
- SVG 覆盖五层结构：经典危机、波粒二象性、数学形式化与动力学、测量/诠释/非局域性、工程应用路线。
- 图中节点按语义颜色区分：历史/实验、核心概念、数学框架、测量与诠释、应用技术、桥接节点。
- 为主要节点增加站内链接，读者可从图谱直接跳转到对应条目。
- 保留原文字版全局主干图与后续主题关系链，用于 SEO、无障碍阅读和后续维护。

### 验证

- `npm run lint` 通过：0 errors, 0 warnings, 3 info。
- `npm run build` 通过。
- 已确认构建产物 `.vitepress/dist/docs/concept-map.html` 包含 `concept-map-svg` 与关键节点链接。
