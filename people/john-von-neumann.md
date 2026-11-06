---
title: 约翰·冯·诺依曼
description: 匈牙利裔美国数学家，将量子力学严格公理化，建立希尔伯特空间形式体系，并提出量子测量理论的形式化框架。
tags:
  - person
  - foundations
  - hilbert-space
  - measurement
type: person
status: complete
created: 2026-05-08
updated: 2026-05-09
confidence: high
difficulty: beginner
sources:
  - "J. von Neumann, Mathematische Grundlagen der Quantenmechanik, Springer, 1932"
---

# 约翰·冯·诺依曼 (John von Neumann, 1903–1957)

## 概述

**约翰·冯·诺依曼**（John von Neumann，1903年12月28日—1957年2月8日），原名诺依曼·亚诺什·拉约什（Neumann János Lajos），是匈牙利裔美国数学家，被誉为20世纪最杰出的数学家之一。他在量子力学、计算机科学、博弈论、泛函分析等领域均有开创性贡献。在量子力学方面，他于1932年出版的《量子力学的数学基础》首次用**希尔伯特空间上的算符理论**为量子力学建立了严格的公理化体系，并形式化了**波函数坍缩**的测量假说。

::: info 可信度说明
- **可信度**: ★★★★★（基于 von Neumann 1932 原著及现代量子力学教材交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 生平

- **1903年**: 出生于匈牙利布达佩斯的一个犹太裔银行家家庭
- **1921年**: 进入布达佩斯大学数学系，同时在柏林大学和苏黎世联邦理工学院学习化学工程
- **1926年**: 获布达佩斯大学数学博士学位（最小多项式与交换子代数方向）
- **1927–1929年**: 任柏林大学编外讲师，与量子力学创始人（海森堡、玻恩、维格纳等）密切交流
- **1930年**: 受邀到美国普林斯顿大学任客座讲师
- **1933年**: 任普林斯顿高等研究院（[[institute-for-advanced-study|IAS]]）首批终身教授，与爱因斯坦成为同事
- **1932年**: 出版《量子力学的数学基础》
- **1940年代**: 参与曼哈顿计划，提出内爆型原子弹设计方案
- **1945年**: 提出存储程序计算机体系结构（冯·诺依曼架构）
- **1957年**: 因骨癌在华盛顿特区去世

## 主要学术贡献

### 量子力学的数学基础（1932年）

冯·诺依曼的《量子力学的数学基础》（*Mathematische Grundlagen der Quantenmechanik*）是量子力学公理化的里程碑。他证明了：

1. **算符的严格定义**：将可观测量对应于希尔伯特空间上的**自伴算符**（self-adjoint operators）
2. **谱定理**：自伴算符的谱分解为测量提供了严格的数学基础
3. **统计公理**：将量子态描述为希尔伯特空间中的矢量（纯态），并将期望值公式严格化

$$\langle A 
angle = \langle \psi | \hat{A} | \psi 
angle$$

### 测量理论的形式化

冯·诺依曼首次将测量过程明确划分为两个截然不同的过程：

- **Process 2（幺正演化）**：由薛定谔方程描述的连续、可逆、确定性的演化
- **Process 1（波函数坍缩/跃迁）**：测量导致的非连续、不可逆、概率性的状态跃迁

他证明了：

> 不存在单一的幺正演化能将叠加态转化为单一本征态——即**坍缩不能从薛定谔方程导出**。

这一结论深刻影响了此后对测量问题的讨论，但也引发了持续至今的争议。

### 量子统计与密度矩阵

冯·诺依曼引入了**密度矩阵**（density matrix）$
ho$ 来描述混合态（统计系综），将纯态和混合态统一在同一个数学框架中：

$$\langle A 
angle = \mathrm{Tr}(
ho \hat{A})$$

这一工具成为量子统计力学和量子信息理论的基石。

### 隐变量不可能性定理

冯·诺依曼在书中提出了一个关于**隐变量理论**的不可能性证明。尽管他后来声称该证明不够严谨（事实上，贝尔后来指出了其漏洞），但这一工作激发了对量子力学完备性的深入思考，并最终导向了贝尔不等式。

## 流传误区

- ❌ "冯·诺依曼证明了量子力学不可能有任何隐变量" → ✅ 冯·诺依曼的证明存在隐含假设（要求隐变量的期望值具有线性性质），后来被贝尔（1966年）和 others 指出其局限性。贝尔不等式才是更严格的检验
- ❌ "冯·诺依曼发明了计算机" → ✅ 他提出了**存储程序计算机架构**（冯·诺依曼架构），但电子计算机的早期硬件开发是多个团队共同努力的结果
- ❌ "波函数坍缩是冯·诺依曼提出的物理机制" → ✅ 冯·诺依曼将其形式化为**数学假设**（Process 1），并未声称解释了其物理机制。坍缩的物理本质至今仍是开放问题

## 相关条目

- [[hilbert-space]] — 希尔伯特空间
- [[wave-function-collapse]] — 波函数坍缩
- [[measurement-problem]] — 测量问题
- [[operator-theory]] — 算符理论
- [[quantum-superposition]] — 量子叠加态
- [[people/werner-heisenberg]] — 维尔纳·海森堡
- [[people/albert-einstein]] — 阿尔伯特·爱因斯坦

## 参考文献

1. J. von Neumann, *Mathematische Grundlagen der Quantenmechanik*, Springer, Berlin, 1932; English transl.: *Mathematical Foundations of Quantum Mechanics*, Princeton University Press, 1955.（A级专著）
2. J. Mehra and H. Rechenberg, *The Historical Development of Quantum Theory*, Vol. 6, Springer, 2000.（科学史，A级）
3. N. Macrae, *John von Neumann*, Pantheon Books, 1992.（传记，C级）
