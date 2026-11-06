# QMKB Schema — 量子力学知识库规范

## Domain
本知识库覆盖量子力学（Quantum Mechanics）及其相关领域，包括经典物理向量子物理的过渡史、核心理论与数学框架、实验基础、各类诠释与哲学讨论、前沿应用（量子计算、量子通信、量子传感）以及中国量子科技进展。

知识库定位：为量子力学科普自媒体提供严谨、体系化的知识基础，内容准确性优先于通俗化表达。所有条目均需标注权威来源，避免流传误区。

## Conventions

### 文件命名
- 小写，用连字符连接，无空格（如 `heisenberg-uncertainty-principle.md`）
- 中文标题可在 frontmatter 中指定，文件名保持英文以便 URL 友好
- 原始资料文件名应包含来源和日期标识（如 `stanford-encyclopedia-qm-2024.md`）

### 页面结构
- 每个 wiki 页面必须以 YAML frontmatter 开始
- 每个页面至少包含 2 个对其他页面的 wikilink 链接（格式：双方括号包围的页面标识符）
- 更新页面时，必须更新 `updated` 日期
- 每个新页面必须添加到 `index.md` 的正确分区
- 每个动作必须追加到 `log.md`
- 在综合 3+ 来源的页面段落末尾添加 `^[raw/articles/source-file.md]` 出处标记

### VitePress 兼容
- 所有发布到网站的内容位于根目录或子目录下，`raw/` 目录不直接发布
- VitePress 配置在 `.vitepress/` 下，通过配置控制导航和侧边栏
- 静态资源（图片、动画）放在 `public/assets/` 下

## Frontmatter

```yaml
---
title: 页面标题
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: entity | concept | comparison | query | history | experiment | interpretation | application | resource
status: draft | stub | complete | review-needed
tags: [from taxonomy below]
sources: [raw/articles/source-name.md]
# 可选质量标记
confidence: high | medium | low
difficulty: beginner | intermediate | advanced
contested: true
contradictions: [other-page-slug]
related_media: [自媒体内容ID或链接]
---
```

**`type` 说明：**
- `entity` — 人物、机构、实验设备等具体实体
- `concept` — 理论概念、原理、数学工具
- `comparison` — 对比分析
- `query` — 已回答的问题归档
- `history` — 历史事件、学术发展脉络
- `experiment` — 重要实验的详细记录
- `interpretation` — 量子力学诠释与哲学讨论
- `application` — 技术应用与前沿进展
- `resource` — 资源汇总、工具、参考书目

**`status` 说明：**
- `draft` — 草稿，内容尚未完整
- `stub` — 简短条目，需要扩充
- `complete` — 内容完整，已可供发布参考
- `review-needed` — 需要专家审核或更新

### raw/ 前元数据

```yaml
---
source_url: https://example.com/article
ingested: YYYY-MM-DD
sha256: <hex digest of the raw content below the frontmatter>
---
```

## Tag Taxonomy

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
- `interpretation` — 诠释类页面
- `environment` — 环境/退相干
- `pointer-states` — 指针态
- `einselection` — 环境诸选择
- `complementarity` — 互补原理
- `bohr` — 波尔
- `everett` — 艾弗雷特
- `von-neumann` — 冯·诺依曼
- `wigner` — 维格纳
- `hidden-variables` — 隐变量
- `de-broglie` — 德布罗意
- `bohm` — 博姆
- `determinism` — 决定论
- `objective-collapse` — 客观坍缩理论
- `consistent-histories` — 一致历史诠释
- `relational` — 关系性量子力学
- `qbism` — Quantum Bayesianism / 量子贝叶斯主义
- `measurement` — 测量问题

### 应用与技术
- `quantum-computing` — 量子计算
- `quantum-communication` — 量子通信
- `quantum-sensing` — 量子传感
- `quantum-cryptography` — 量子密码学
- `china-quantum` — 中国量子科技
- `application` — 应用类页面
- `qubit` — 量子比特
- `algorithm` — 量子算法
- `qkd` — 量子密钥分发
- `security` — 安全性
- `satellite` — 卫星通信
- `metrology` — 计量学
- `interferometry` — 干涉仪
- `gravity` — 重力/引力
- `magnetometry` — 磁测量

### 数学工具
- `linear-algebra` — 线性代数
- `hilbert-space` — 希尔伯特空间
- `operator-theory` — 算符理论
- `group-theory` — 群论
- `density-matrix` — 密度矩阵与密度算符
- `perturbation-theory` — 微扰理论

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

## Page Thresholds

- **创建页面**：当实体/概念在 2+ 个来源中出现，或在单个来源中处于中心地位
- **添加到现有页面**：当来源提及已有覆盖的内容
- **不创建页面**：对于一笔带过的提及、细节性内容或超出领域范围的事物
- **拆分页面**：当页面超过 ~200 行时，分解为子话题并交叉链接
- **归档页面**：当内容已被完全取代时，移至 `_archive/`，从 index 中移除

## 特殊页面类型规范

### History 页面
历史页面应包含：
- 时间线与上下文
- 参与人物及其动机
- 关键事件的严格时间截点
- 当时的学术与社会背景
- 与其他历史事件的关联
- 对后续发展的影响

### Experiment 页面
实验页面应包含：
- 实验目的与动机
- 设备与方法概述
- 理论预测
- 实验结果
- 与理论的对比
- 历史意义与影响
- 后续验证与发展

### Interpretation 页面
诠释页面应包含：
- 核心主张
- 数学形式化
- 与其他诠释的比较
- 实验意含与可检验预言
- 哲学启示
- 当前学术共识程度

### Application 页面
应用页面应包含：
- 技术原理
- 当前发展状态
- 关键挑战与瓶颈
- 主要参与者与机构
- 市场与产业前景
- 中国相关进展

## Update Policy

当新信息与现有内容冲突时：
1. 检查日期 — 新来源通常优先于旧来源
2. 若确实存在矛盾，同时记录两种观点并标注日期和来源
3. 在 frontmatter 中标记矛盾：`contradictions: [page-name]`
4. 在 lint 报告中标识供用户审核

## 权威来源优先级

1. **同行评审期刊论文** — Nature, Science, Physical Review Letters, Reviews of Modern Physics
2. **权威教科书** — Sakurai, Griffiths, Weinberg, 费曼物理学讲义
3. **顶级机构出品物** — NIST, Perimeter Institute, MIT OpenCourseWare
4. **学术百科** — Stanford Encyclopedia of Philosophy, Scholarpedia
5. **知名大学课程** — MIT, Caltech, ETH, 中科大
6. **高质量科普书籍** — 经典科普著作（如 Pais, Becker 等）
7. **专业评论与综述** — Physics Today, Physics Reports

**严禁使用**：未经同行评审的自媒体文章、繁体中文百科的单独来源、网络上未验证的"科普"文章作为事实性来源。可作为参考视角或流传误区分析。
