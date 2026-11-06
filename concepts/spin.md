---
title: 自旋
description: 量子粒子内禀角动量，自旋量子数、Pauli 矩阵和 Stern-Gerlach 实验共同揭示其非经典性质。
tags:
  - foundations
  - spin
  - group-theory
  - operator-theory
type: concept
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: intermediate
sources:
  - "G. E. Uhlenbeck and S. Goudsmit, Naturwissenschaften 13, 953 (1925)"
  - "W. Gerlach and O. Stern, Zeitschrift für Physik 9, 349 (1922)"
  - "J. J. Sakurai and J. Napolitano, Modern Quantum Mechanics, 3rd ed., 2021"
---

# 自旋 (Spin)

## 概述

自旋（spin）是量子粒子的**内禀角动量**。它不是经典小球绕自身旋转的机械运动，而是粒子态在空间旋转变换下的量子自由度。电子、质子、中子等费米子具有半整数自旋；光子等玻色子具有整数自旋。

::: info 可信度说明
- **可信度**: ★★★★★（Stern-Gerlach 实验、Uhlenbeck-Goudsmit 自旋假说与现代教材一致）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## Stern-Gerlach 实验

[[experiments/stern-gerlach-experiment|斯特恩-盖拉赫实验]]显示，银原子束通过非均匀磁场后分裂为两束，而不是经典预期的连续分布。这表明角动量在测量方向上的投影是离散的。后来这一现象被理解为电子自旋与磁矩的量子表现。

## 自旋算符

自旋角动量算符满足与轨道角动量相同的对易关系：

$$[\hat{S}_i,\hat{S}_j]=i\hbar\epsilon_{ijk}\hat{S}_k$$

对自旋 $1/2$ 粒子，常用 Pauli 矩阵表示：

$$\hat{S}_i=\frac{\hbar}{2}\sigma_i$$

测量某一方向的自旋投影时，只能得到离散结果。

## 自旋 $1/2$ 与量子比特

自旋 $1/2$ 系统的二维希尔伯特空间可用基底 $|\uparrow\rangle$ 与 $|\downarrow\rangle$ 表示。一般态为：

$$|\psi\rangle=\alpha|\uparrow\rangle+\beta|\downarrow\rangle$$

其中 $|\alpha|^2+|\beta|^2=1$。这使自旋 $1/2$ 成为理解[[quantum-superposition|量子叠加态]]和量子比特的最简模型之一。

## 自旋与全同粒子

自旋还与量子统计密切相关：半整数自旋粒子服从费米-狄拉克统计，整数自旋粒子服从玻色-爱因斯坦统计。自旋-统计联系是相对论量子场论中的深层定理。

## 流传误区

- ❌ “自旋就是粒子真的在转” → ✅ 自旋是内禀角动量；经典旋转图像会导致错误直觉。
- ❌ “自旋向上表示粒子空间上朝上” → ✅ 它表示相对于选定测量轴的量子态分量。
- ❌ “Stern-Gerlach 实验直接发现了电子自旋” → ✅ 原实验对象是银原子；电子自旋解释是后来发展出的理论理解。

## 相关条目

- [[commutator]] — 对易关系
- [[observables]] — 可观测量
- [[experiments/stern-gerlach-experiment]] — 斯特恩-盖拉赫实验
- [[quantum-state]] — 量子态
- [[quantum-superposition]] — 量子叠加态

## 参考文献

1. W. Gerlach and O. Stern, "Der experimentelle Nachweis der Richtungsquantelung im Magnetfeld", *Zeitschrift für Physik* **9**, 349-352 (1922). [DOI](https://doi.org/10.1007/BF01326983)（A级原始论文）
2. G. E. Uhlenbeck and S. Goudsmit, "Ersetzung der Hypothese vom unmechanischen Zwang durch eine Forderung bezüglich des inneren Verhaltens jedes einzelnen Elektrons", *Naturwissenschaften* **13**, 953-954 (1925). [DOI](https://doi.org/10.1007/BF01558878)（A级原始论文）
3. J. J. Sakurai and J. Napolitano, *Modern Quantum Mechanics*, 3rd ed., Cambridge University Press, 2021.（B级教材）
