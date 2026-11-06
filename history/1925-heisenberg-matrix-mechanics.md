---
title: "1925: 海森堡矩阵力学"
created: 2026-05-07
updated: 2026-05-09
type: history
status: complete
tags: [history, foundations, matrix-mechanics, uncertainty]
sources: []
confidence: high
difficulty: beginner
---

# 1925：海森堡矩阵力学 (Heisenberg's Matrix Mechanics)

## 概述

1925 年夏，德国物理学家 [[werner-heisenberg|维尔纳·海森堡]] 在黑尔戈兰岛（Helgoland）疗养期间发明了**矩阵力学**——量子力学的第一种完整的数学形式。这一创新方法彻底放弃了经典的连续轨道概念，用矩阵代表物理量，导致了经典力学中不可对易的数学对象。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Heisenberg 1925 原始论文及 Born-Jordan 合作论文）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 历史背景

### 玻尔模型的困境

到 1925 年，玻尔的半经典原子模型已经遇到了严重困难：
- 无法解释氢原子光谱的谱线强度（跳跃几率）
- 对于类氢原子以外的系统失败
- “跳跃"过程缺乏动力学基础

### 对可观测量的反思

海森堡受玻尔启发，开始严格区分**可观测量**与**不可观测量**。他认为，物理学应该只讨论原则上可观测的量，而不是超出经验范围的抽象構策。

## 矩阵力学的诞生

### 海岛鼻炎的突然领悟

1925 年6 月，海森堡因鼻炎严重被送往海岛上休养。在那里，他远离哥廷根的学术讨论，开始从零出发构建理论。他的核心思想是：

> **只有跳跃之间的跳跃几率是可观测的，而不是电子的经典轨道。**

### 矩阵方法

海森堡用一个**矩阵** $x_{nm}$ 来代表电子的坐标，其元素 $x_{nm}$ 表示从能级 $n$ 跳跃到能级 $m$ 时的跃迁振幅。同样，动量也用矩阵 $p_{nm}$ 表示。

关键发现是：坐标矩阵与动量矩阵的**乘积不可交换**：

$$xp - px = \frac{ih}{2\pi} I = i\hbar I$$

其中 $I$ 为单位矩阵。这是量子力学中第一个表现出的**非对易性**。

### 玻恩与约当的完善

海森堡将草稿提交给哥廷根大学的教授 [[max-planck|马克斯·玻恩]]。玻恩和他的学生约当（Pascual Jordan）发现，海森堡的方法实际上是矩阵的运算，并用完整的矩阵理论将其系统化为玻恩-约当对易关系。

1925 年 11 月，玻恩、约当与海森堡合作发表了"三人论文"，完整地建立了矩阵力学的数学框架。

## 科学史意义

1. **方法论革命**：首次用代数方法代替微分方程来描述物理系统
2. **可观测量的突出**：将可观测量提升为理论的核心，影响了整个量子力学的哲学趋向
3. **非对易性的发现**：矩阵的不可交换性是量子力学的本质特征，与经典力学形成鲜明对比
4. **与波动力学的对立**：矩阵力学与同年后期的波动力学形成了重大对立，直到狄拉克证明两者等价

## 流传误区

- ❌ "矩阵力学使用了实际的矩阵数值计算" → ✅ 矩阵力学是代数结构，元素本身不是可观测量
- ❌ "海森堡独自完成了矩阵力学" → ✅ 玻恩和约当在数学形式化上做出了关键贡献
- ❌ "矩阵力学是波动力学的前身" → ✅ 两者是独立发展的等价表述

## 相关条目

- [[uncertainty-principle|不确定性原理]]
- [[werner-heisenberg|维尔纳·海森堡]]
- [[quantum-superposition|量子叠加态]]
- [[hilbert-space|希尔伯特空间]]
- [[1927-solvay-conference|1927 第五次索尔维会议]]
- [[complementarity-principle|互补原理]]

## 参考文献

1. W. Heisenberg, "Über quantentheoretischer Umdeutung kinematischer und mechanischer Beziehungen," *Zeitschrift für Physik* **33**, 879 (1925). [原始论文]
2. M. Born and P. Jordan, "Zur Quantenmechanik," *Zeitschrift für Physik* **34**, 858 (1925). [原始论文]
3. M. Born, W. Heisenberg, and P. Jordan, "Zur Quantenmechanik II," *Zeitschrift für Physik* **35**, 557 (1926). [三人论文]
4. D. Cassidy, *Uncertainty: The Life and Science of Werner Heisenberg*, W. H. Freeman, 1992. (科学史专著)
