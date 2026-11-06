---
title: 矩阵力学
description: 海森堡、玻恩和约当于1925年创建的量子力学第一种完整数学形式，用无穷矩阵描述可观测量的跃迁。
tags:
  - foundations
  - history
  - linear-algebra
type: concept
status: complete
created: 2026-05-08
updated: 2026-05-09
confidence: high
difficulty: advanced
sources:
  - "W. Heisenberg, 'Über quantentheoretischer Umdeutung kinematischer und mechanischer Beziehungen', Z. Phys. 33, 879 (1925)"
  - "M. Born and P. Jordan, 'Zur Quantenmechanik', Z. Phys. 34, 858 (1925)"
  - "M. Born, W. Heisenberg, and P. Jordan, 'Zur Quantenmechanik II', Z. Phys. 35, 557 (1926)"
---

# 矩阵力学 (Matrix Mechanics)

## 概述

矩阵力学是量子力学的第一种完整数学形式，由 [[werner-heisenberg|海森堡]]、[[max-born|玻恩]] 和 [[paul-dirac|约当]] 于1925–1926年创建。它用**无穷矩阵** 描述可观测量的跃迁振幅，彻底拒绝了经典的轨道图像，是量子力学从"旧量子论"迈向现代理论的里程碑。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Heisenberg 1925、Born-Jordan 1925 原始论文及模型教材交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3][4]
:::

## 创建背景

### 对应原理的启发

1924年，玻尔提出了**对应原理**（correspondence principle）：在量子数很大的极限下，量子结果应该回复到经典结果。海森堡在此启发下，试图从**原则上可观测的量**出发重新构建量子力学。

### 海森堡的核心洞见

海森堡认为，电子的"位置"和"动量"不再是经典意义上的连续量，而是**两个量子态之间的跃迁振幅**：

$$x_{nm} = \langle n | \hat{x} | m 
angle$$

这些振幅构成了一个**矩阵**，其中行列指标对应于初态和末态。

## 基本数学结构

### 对易关系

矩阵力学的核心是坐标矩阵 $X$ 和动量矩阵 $P$ 的对易关系：

$$[X, P] = XP - PX = i\hbar I$$

其中 $I$ 为单位矩阵。这一对易关系完全破坏了经典力学的可交换性，是量子力学本质上与经典力学的分水岭。

### 求解氢原子

将氢原子的哈密顿量 $H$ 表示为矩阵，通过**矩阵对角化** 求解本征值问题：

$$H_{nm} = E_n \delta_{nm}$$

得到的本征值与玻尔模型的能级公式完全一致：

$$E_n = -rac{m_e e^4}{2(4\piarepsilon_0)^2\hbar^2}rac{1}{n^2}$$

## 与波动力学的等价性

1926年，[[erwin-schrodinger|薛定谔]] 证明了矩阵力学与波动力学的等价性：

1. 矩阵元素可以通过波函数的内积得到：$x_{nm} = \int \psi_n^* x \psi_m \, dx$
2. 位置算符对应乘法，动量算符对应微分：$\hat{p} = -i\hbar rac{\partial}{\partial x}$
3. 对易关系自然满足

[[paul-dirac|狄拉克]] 后来进一步用抽象希尔伯特空间统一了两者：矩阵力学是**离散基** 下的表象，波动力学是**位置基**（连续基）下的表象。

## 流传误区

- ❌ "矩阵力学已被波动力学取代" → ✅ 两者等价，波动力学更方便计算，但矩阵代数的抽象结构是理论核心
- ❌ "矩阵力学无法处理连续谱" → ✅ 可以处理连续谱（需引入广义矩阵/分布），只是不如波动力学方便
- ❌ "矩阵力学是经典概念的延伸" → ✅ 矩阵力学彻底拒绝了经典轨道概念，它是对经典图像的彻底瓦解

## 相关条目

- [[1925-heisenberg-matrix-mechanics]] — 1925：海森堡矩阵力学
- [[comparisons/matrix-mechanics-vs-wave-mechanics]] — 矩阵力学与波动力学
- [[hilbert-space]] — 希尔伯特空间
- [[uncertainty-principle]] — 不确定性原理
- [[werner-heisenberg]] — 维尔纳·海森堡
- [[max-born]] — 马克斯·玻恩
- [[paul-dirac]] — 保罗·狄拉克

## 参考文献

1. W. Heisenberg, "Über quantentheoretischer Umdeutung kinematischer und mechanischer Beziehungen," *Zeitschrift für Physik* **33**, 879–893 (1925). [DOI](https://doi.org/10.1007/BF01328377)
2. M. Born and P. Jordan, "Zur Quantenmechanik," *Zeitschrift für Physik* **34**, 858–888 (1925). [DOI](https://doi.org/10.1007/BF01328501)
3. M. Born, W. Heisenberg, and P. Jordan, "Zur Quantenmechanik II," *Zeitschrift für Physik* **35**, 557–615 (1926).
4. D. J. Griffiths, *Introduction to Quantum Mechanics*, 3rd ed., Cambridge University Press, 2018, §3.4.–3.6. (B级教材)
