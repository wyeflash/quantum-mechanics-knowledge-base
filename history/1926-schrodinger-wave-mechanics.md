---
title: "1926: 薛定谔波动力学"
created: 2026-05-09
updated: 2026-05-09
type: history
status: complete
tags: [history, foundations, wave-mechanics, schrodinger, wave-function]
sources:
  - "E. Schrödinger, 'Quantisierung als Eigenwertproblem', Annalen der Physik 384, 361–376 (1926)"
  - "E. Schrödinger, 'An Undulatory Theory of the Mechanics of Atoms and Molecules', Physical Review 28, 1049–1070 (1926)"
  - "M. Jammer, The Conceptual Development of Quantum Mechanics, McGraw-Hill, 1966"
  - "A. Pais, Inward Bound, Oxford University Press, 1986"
confidence: high
difficulty: beginner
---

# 1926：薛定谔波动力学 (Schrödinger's Wave Mechanics)

## 概述

1926 年，[[erwin-schrodinger|埃尔温·薛定谔]]发表“量子化作为本征值问题”系列论文，建立了**波动力学**。这一路线以[[wave-function|波函数]]和微分方程描述量子系统，与 1925 年[[1925-heisenberg-matrix-mechanics|海森堡矩阵力学]]形成鲜明对照，却很快被证明与矩阵力学等价。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Schrödinger 1926 原始论文、Physical Review 英文论文及 Jammer/Pais 科学史专著交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3][4]
:::

## 历史背景

1924 年，[[louis-de-broglie|路易·德布罗意]]提出[[matter-wave|物质波]]假说，认为粒子动量与波长满足 $\lambda=h/p$。这一思想提示：电子在原子中的稳定状态可能与驻波条件有关。

与此同时，矩阵力学虽然计算上成功，但形式抽象、难以直观理解。许多物理学家仍希望找到一种更接近经典波动方程的量子理论。

## 关键突破

薛定谔把量子化问题转化为本征值问题：

$$\hat{H}\psi=E\psi$$

其中 $\hat{H}$ 是哈密顿量算符，$\psi$ 是系统状态的波函数。含时形式后来写作：

$$i\hbar\frac{\partial \psi}{\partial t}=\hat{H}\psi$$

对[[hydrogen-atom|氢原子]]，波动力学自然给出离散能级与轨道角动量结构，使旧量子论中人为加入的量子条件变成方程的数学结果。

## 同代人的反应

波动力学因形式连续、可视化程度较高而迅速受到欢迎。它让许多熟悉偏微分方程的物理学家更容易进入量子理论。然而，[[werner-heisenberg|海森堡]]等人担心波动力学会让人误以为电子仍是经典空间中的真实波包。

很快，薛定谔本人和后续工作证明波动力学与矩阵力学在物理预测上等价。两者最终在[[hilbert-space|希尔伯特空间]]和[[operator-theory|算符理论]]框架中统一。

## 科学史意义

1. **给出现代量子力学最常用入口**：薛定谔方程成为量子力学教学与计算的核心形式。
2. **连接物质波与原子结构**：把德布罗意的直觉转化为可计算的动力学方程。
3. **推动量子化问题数学化**：能级由边界条件和本征值自然产生。
4. **引出波函数诠释问题**：波函数到底是实在波、概率幅还是知识状态，成为后续诠释争论的中心。

## 流传误区

::: warning
- **误区一**: “波动力学取代了矩阵力学。”
  - **澄清**: 两者物理等价，只是表示方式不同。
- **误区二**: “波函数就是普通三维空间中的物质波。”
  - **澄清**: 单粒子情形可直观类比为空间波，多粒子波函数则定义在高维构型空间中。
- **误区三**: “薛定谔方程解决了测量问题。”
  - **澄清**: 它描述连续幺正演化，但测量结果为何唯一仍涉及[[measurement-problem|测量问题]]。
:::

## 相关条目

- [[erwin-schrodinger|埃尔温·薛定谔]]
- [[schrodinger-equation|薛定谔方程]]
- [[wave-function|波函数]]
- [[matter-wave|物质波]]
- [[1924-de-broglie-matter-wave|1924：德布罗意物质波]]
- [[1925-heisenberg-matrix-mechanics|1925：海森堡矩阵力学]]
- [[1926-born-probability-interpretation|1926：玻恩概率诠释]]
- [[matrix-mechanics-vs-wave-mechanics|矩阵力学与波动力学对比]]

## 参考文献

1. **E. Schrödinger** (1926). “Quantisierung als Eigenwertproblem.” *Annalen der Physik*, **384**, 361–376. [A级 — 波动力学原始论文]
2. **E. Schrödinger** (1926). “An Undulatory Theory of the Mechanics of Atoms and Molecules.” *Physical Review*, **28**, 1049–1070. [A级 — 英文经典论文]
3. **M. Jammer** (1966). *The Conceptual Development of Quantum Mechanics*. McGraw-Hill. [B级 — 科学史专著]
4. **A. Pais** (1986). *Inward Bound: Of Matter and Forces in the Physical World*. Oxford University Press. [B级 — 权威科学史专著]
