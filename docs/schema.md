---
title: 知识规范
created: 2026-05-10
updated: 2026-05-10
type: resource
status: complete
tags: [resource, beginner]
confidence: high
difficulty: beginner
sources:
  - QMKB SCHEMA.md
  - QMKB content quality guidelines
---

# QMKB 知识库编辑规范

> 本规范是 QMKB（量子力学知识库）所有内容贡献者必须遵守的统一准则。涵盖语言术语、公式符号、来源可信度、文件结构、元数据等方面。

---

## 1. 域与定位

本知识库覆盖量子力学（Quantum Mechanics）及其相关领域，包括经典物理向量子物理的过渡史、核心理论与数学框架、实验基础、各类诠释与哲学讨论、前沿应用（量子计算、量子通信、量子传感）以及中国量子科技进展。

**定位**：为量子力学科普自媒体提供严谨、体系化的知识基础，内容准确性优先于通俗化表达。所有条目均需标注权威来源，避免流传误区。

---

## 2. 文件与目录命名规范

### 2.1 基本原则
- **字符集**：使用**标准 ASCII 字符**，严禁使用中文、全角符号、空格、特殊符号（除短横线 `-` 外）
- **大小写**：全部使用**小写**
- **连接符**：多个单词之间用**短横线 `-`**连接（kebab-case）
- **扩展名**：文件必须带扩展名（如 `.md`, `.json`, `.png` 等）

### 2.2 正确示例
```
heisenberg-uncertainty-principle.md
quantum-entanglement.md
bell-inequality.md
concepts/
experiments/
raw/
public/assets/
```

### 2.3 错误示例（禁止）
```
不确定性原理.md          ❌ 中文命名
Heisenberg_Uncertainty.md     ❌ 大写 + 下划线
quantum entanglement.md       ❌ 含空格
bell–inequality.md            ❌ 含非 ASCII 字符
concept                       ❌ 缺少扩展名
```

### 2.4 特殊情况
- 原始资料文件名应包含来源和日期标识（如 `stanford-encyclopedia-qm-2024.md`）
- 图片等静态资源同样遵循此规范（如 `double-slit-diagram.png`）

---

## 3. 语言与术语规范

### 3.1 通用原则
- **主体语言**：除特定情形外，所有描述性内容使用**简体中文**书写。
- **目标读者**：具备高等数学和基础物理背景的理工科学生、研究者及工程师。
- **文风要求**：严谨、客观、精确、简洁。避免口语化、营销化、过度通俗化。

### 3.2 英文术语处理
| 情形 | 处理方式 | 示例 |
|---|---|---|
| 已有**权威中文译名**（如全国科学技术名词审定委员会审定） | 使用中文译名，可在首次出现时附注英文原词 | 波函数（wave function）、本征值（eigenvalue） |
| **无权威译名**或译名不通行 | **保留英文原词**，不强行翻译 | Hamiltonian（非"哈密顿量"语境下）、Ansatz、Bra-Ket |
| 人名作为术语一部分 | 保留习惯译法或原文 | 薛定谔方程（Schrödinger equation）、Dirac 符号 |
| 机构/项目名称 | 保留原文，可加注中文说明 | arXiv、APS（美国物理学会） |

### 3.3 禁止事项
- ❌ 将已通行译名再"创新"翻译（如把 "observable" 译成"可观测量"之外的新词）
- ❌ 一句话中英文混杂过多，影响阅读流畅性
- ❌ 使用网络梗、口语缩写、非正式表达

---

## 4. 公式与符号规范

### 4.1 数学公式
- **公式必须可渲染为正确、规范的数学表达式**，使用 LaTeX 语法通过 `markdown-it-mathjax3` 渲染。
- 公式中的符号、变量名**保持数学/物理学通行写法**，不需要中文化。
- 行内公式使用 `$...$`，独立公式使用 `$$...$$` 或 `\[...\]`。

### 4.2 符号标准
- 优先采用**国际纯粹与应用物理联合会（IUPAP）**推荐的符号规范。
- 同一概念在全文/全库中保持符号一致。
- 首次使用非常见符号时，在正文中说明其物理意义。

### 4.3 公式正确性
- 所有公式必须经过**推导验证**或引用**权威来源**。
- 对易关系、算符顺序、边界条件等**必须准确无误**。
- 量纲必须自洽。

### 4.4 编号与引用
- 重要公式建议编号，便于交叉引用。
- 引用公式时使用 "式 (1)"、"式 (2.3)" 等规范表述。

---

## 5. 来源与可信度规范

### 5.1 核心原则
> **每一条知识点都必须能够追溯到权威来源。不能凭记忆、推测或个人理解编写。**

### 5.2 来源分级

| 级别 | 来源类型 | 可信度 | 使用说明 |
|---|---|---|---|
| **A级** | 同行评审期刊（PRL, Nature Physics, Science 等） | ★★★★★ | 首选来源 |
| **B级** | 权威教材、专著（Griffiths, Sakurai, Weinberg, 费曼物理学讲义 等） | ★★★★☆ | 基础概念首选 |
| **C级** | 知名大学课程讲义、预印本（arXiv） | ★★★☆☆ | 可作补充，但需甄别 |
| **D级** | 学术百科（Stanford Encyclopedia of Philosophy, Scholarpedia）、顶级机构出品（NIST, Perimeter Institute, MIT OpenCourseWare） | ★★★☆☆ | 可用于背景介绍和概念框架 |
| **E级** | 科普文章、博客、维基百科、非专业论坛 | ★★☆☆☆ | **仅可用于背景介绍，不可作为定理/公式来源** |
| **F级** | 无来源/个人理解 | ★☆☆☆☆ | **禁止收录** |

**权威来源优先级详单**：
1. 同行评审期刊论文 — Nature, Science, Physical Review Letters, Reviews of Modern Physics
2. 权威教科书 — Sakurai, Griffiths, Weinberg, 费曼物理学讲义
3. 顶级机构出品物 — NIST, Perimeter Institute, MIT OpenCourseWare
4. 学术百科 — Stanford Encyclopedia of Philosophy, Scholarpedia
5. 知名大学课程 — MIT, Caltech, ETH, 中科大
6. 高质量科普书籍 — Pais, Becker 等经典科普著作
7. 专业评论与综述 — Physics Today, Physics Reports

**严禁使用**：未经同行评审的自媒体文章、网络上未验证的"科普"文章作为事实性来源。仅可作为参考视角或流传误区分析。

### 5.3 引用格式
每篇文档末尾必须包含 **References** 部分：

```markdown
## 参考文献

1. J. J. Sakurai, *Modern Quantum Mechanics*, 2nd ed., Addison-Wesley, 1994.（教材）
2. A. Einstein, B. Podolsky, and N. Rosen, "Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?", *Phys. Rev.* **47**, 777 (1935). [DOI](https://doi.org/10.1103/PhysRev.47.777)
3. 曾谨言, 《量子力学》卷I, 第5版, 科学出版社, 2013.（中文教材）
```

### 5.4 交叉验证要求
| 内容重要性 | 验证要求 |
|---|---|
| **核心定理/定律**（如不确定性原理、薛定谔方程） | 至少 **2 个独立 A/B 级来源**交叉验证 |
| **标准推导过程** | 至少 **1 个 A/B 级来源** |
| **前沿研究/争议性结论** | 标注 "待验证" 或 "学界存在争议"，并列出正反双方来源 |
| **数值/实验数据** | 标注原始出处，优先使用原始论文数据 |

### 5.5 可信度标注
当内容满足以下条件时，**必须**在文档顶部或相关段落使用可信度标注：

```markdown
::: info 可信度说明
- **可信度**: ★★★★☆（基于 Sakurai 教材及 PRL 论文）
- **验证状态**: 已验证
- **来源**: [1][2]
:::
```

或对于尚未充分验证的内容：

```markdown
::: warning 可信度说明
- **可信度**: ★★☆☆☆（仅基于单个 arXiv 预印本，尚未经同行评审）
- **验证状态**: 待验证
- **来源**: [3]
- **说明**: 该结论目前仍处于研究阶段，请谨慎参考。
:::
```

### 5.6 更新与冲突处理
当新信息与现有内容冲突时：
1. 检查日期 — 新来源通常优先于旧来源
2. 若确实存在矛盾，同时记录两种观点并标注日期和来源
3. 在 frontmatter 中标记矛盾：`contradictions: [page-name]`
4. 在 lint 报告中标识供用户审核

### 5.7 禁止事项
- ❌ 不标注来源的"常识性"断言（物理学中很多"常识"并不显然）
- ❌ 将教材中的简化模型当作普适结论
- ❌ 引用二手、三手来源而不追溯原始文献
- ❌ 把个人推导/理解当作权威结论呈现

---

## 6. 文档结构与元数据

### 6.1 标准文档模板
```markdown
---
title: 文章标题
description: 一句话描述
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: entity | concept | comparison | query | history | experiment | interpretation | application | resource
status: draft | stub | complete | review-needed
tags: [from taxonomy below]
sources: [raw/articles/source-name.md]
confidence: high | medium | low
difficulty: beginner | intermediate | advanced
contested: true
contradictions: [other-page-slug]
related_media: [自媒体内容ID或链接]
---

# 文章标题

## 概述
（1-3段，说明本文涉及的核心概念和适用范围）

## 正文
（分节论述）

## 数学表述
（如有）

## 物理意义 / 应用

## 常见问题 / 误区

## 参考文献
（必须）

## 相关条目
（链接到本库其他条目）
```

### 6.2 Frontmatter 字段说明

| 字段 | 必填 | 说明 |
|---|---|---|
| `title` | 是 | 中文标题，可附注英文 |
| `description` | 是 | 100字以内摘要 |
| `created` | 是 | 创建日期 |
| `updated` | 是 | 最后更新日期 |
| `type` | 是 | 文档类型 |
| `status` | 是 | 内容状态 |
| `tags` | 是 | 2-5个关键词 |
| `sources` | 是 | 原始资料文件路径 |
| `confidence` | 否 | 可信度等级 |
| `difficulty` | 否 | 难度等级 |
| `contested` | 否 | 是否存在学术争议 |
| `contradictions` | 否 | 与其他条目的矛盾 |
| `related_media` | 否 | 相关自媒体内容 |

### 6.3 Type 说明
- `entity` — 人物、机构、实验设备等具体实体
- `concept` — 理论概念、原理、数学工具
- `comparison` — 对比分析
- `query` — 已回答的问题归档
- `history` — 历史事件、学术发展脉络
- `experiment` — 重要实验的详细记录
- `interpretation` — 量子力学诠释与哲学讨论
- `application` — 技术应用与前沿进展
- `resource` — 资源汇总、工具、参考书目

### 6.4 Status 说明
- `draft` — 草稿，内容尚未完整
- `stub` — 简短条目，需要扩充
- `complete` — 内容完整，已可供发布参考
- `review-needed` — 需要专家审核或更新

---

## 7. 页面内容结构

### 7.1 通用要求
- 每个 wiki 页面必须以 YAML frontmatter 开始
- 每个页面至少包含 2 个对其他页面的 `[[wikilinks]]` 链接
- 更新页面时，必须更新 `updated` 日期
- 每个新页面必须添加到 `index.md` 的正确分区
- 在综合 3+ 来源的段落末尾添加 `^[raw/articles/source-file.md]` 出处标记

### 7.2 创建与拆分阈值
- **创建页面**：当实体/概念在 2+ 个来源中出现，或在单个来源中处于中心地位
- **添加到现有页面**：当来源提及已有覆盖的内容
- **不创建页面**：对于一笔带过的提及、细节性内容或超出领域范围的事物
- **拆分页面**：当页面超过 ~200 行时，分解为子话题并交叉链接
- **归档页面**：当内容已被完全取代时，移至 `_archive/`，从 index 中移除

### 7.3 特殊页面类型

#### History 页面
应包含：时间线与上下文、参与人物及其动机、关键事件的严格时间截点、当时的学术与社会背景、与其他历史事件的关联、对后续发展的影响

#### Experiment 页面
应包含：实验目的与动机、设备与方法概述、理论预测、实验结果、与理论的对比、历史意义与影响、后续验证与发展

#### Interpretation 页面
应包含：核心主张、数学形式化、与其他诠释的比较、实验意含与可检验预言、哲学启示、当前学术共识程度

#### Application 页面
应包含：技术原理、当前发展状态、关键挑战与瓶颈、主要参与者与机构、市场与产业前景、中国相关进展

---

## 8. Tag Taxonomy（标签分类体系）

### 理论分支
- `foundations` — 基础理论（波函数、算符、正则量子化）
- `wave-particle-duality` — 波粒二象性
- `uncertainty-principle` — 不确定性原理
- `superposition` — 叠加态
- `entanglement` — 纠缠
- `decoherence` — 退相干
- `measurement` — 测量问题
- `relativistic-qm` — 相对论量子力学
- `qft` — 量子场论

### 历史与人物
- `history` — 历史事件与发展
- `person` — 科学家与思想家
- `institution` — 研究机构与学术活动
- `solvay-conference` — 索尔维会议

### 实验
- `experiment` — 实验方法与结果
- `thought-experiment` — 思想实验
- `bell-test` — 贝尔不等式检验

### 诠释与哲学
- `copenhagen` — 哥本哈根诠释
- `many-worlds` — 多世界诠释
- `pilot-wave` — 导航波理论
- `quantum-logic` — 量子逻辑
- `philosophy` — 哲学讨论

### 应用与技术
- `quantum-computing` — 量子计算
- `quantum-communication` — 量子通信
- `quantum-sensing` — 量子传感
- `quantum-cryptography` — 量子密码学
- `china-quantum` — 中国量子科技

### 数学工具
- `linear-algebra` — 线性代数
- `hilbert-space` — 希尔伯特空间
- `operator-theory` — 算符理论
- `group-theory` — 群论

### 元数据
- `book` — 图书
- `paper` — 学术论文
- `course` — 课程
- `video` — 视频
- `tool` — 工具与软件

### 通用标签
- `comparison` — 对比分析
- `misconception` — 流传误区清单
- `analogy` — 类比解释
- `visualization` — 可视化
- `beginner` — 入门友好
- `advanced` — 高级内容

---

## 9. 审核流程

1. **自检**：贡献者对照本规范逐项检查
2. **来源审查**：确认所有关键断言均有 A/B 级来源支撑
3. **同行审阅**：由另一位具备量子力学背景的贡献者审核
4. **可信度定级**：根据来源质量确定可信度等级
5. **合并发布**：审核通过后合并到主分支并部署

---

## 10. VitePress 兼容性

- 所有发布到网站的内容位于根目录或子目录下，`raw/` 目录不直接发布
- VitePress 配置在 `.vitepress/` 下，通过配置控制导航和侧边栏
- 静态资源（图片、动画）放在 `public/assets/` 下
- 静态资源命名同样遵循小写 ASCII + kebab-case 规范

---

## 11. raw/ 目录规范

### raw/ 前元数据
```yaml
---
source_url: https://example.com/article
ingested: YYYY-MM-DD
sha256: <hex digest of the raw content below the frontmatter>
---
```

### raw/ 文件命名
- 原始资料文件名应包含来源和日期标识
- 示例：`stanford-encyclopedia-qm-2024.md`、`nature-physics-entanglement-2023.md`

---

## 12. 规范更新

本规范将随知识库发展持续迭代。如有建议，请在项目 Issues 中提出。

---

*最后更新: 2026-05-07*
