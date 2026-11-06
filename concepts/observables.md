---
title: 可观测量
description: 量子力学中可测物理量的数学表示，通常由希尔伯特空间上的自伴算符及其谱结构给出。
tags:
  - foundations
  - operator-theory
  - measurement
  - hilbert-space
type: concept
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: advanced
sources:
  - "J. von Neumann, Mathematische Grundlagen der Quantenmechanik, Springer, 1932"
  - "P. A. M. Dirac, The Principles of Quantum Mechanics, Oxford University Press, 1958"
  - "J. J. Sakurai and J. Napolitano, Modern Quantum Mechanics, 3rd ed., 2021"
---

# 可观测量 (Observables)

## 概述

可观测量（observable）是量子力学中可以通过实验测量的物理量，例如位置、动量、能量、角动量和自旋分量。在标准形式化中，每个可观测量对应[[hilbert-space|希尔伯特空间]]上的一个自伴算符 $\hat{A}$。

::: info 可信度说明
- **可信度**: ★★★★★（von Neumann 与 Dirac 的公理化表述及现代教材一致）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 自伴算符与实测结果

量子测量结果必须是实数，因此可观测量对应自伴算符：

$$\hat{A}^\dagger=\hat{A}$$

自伴算符具有实本征值，并在适当数学条件下拥有谱分解。若

$$\hat{A}|a_n\rangle=a_n|a_n\rangle$$

则 $a_n$ 是可能测得的结果，$|a_n\rangle$ 是对应本征态。

## 测量公设

若系统处于 $|\psi\rangle$，并对 $\hat{A}$ 做理想投影测量，则：

1. 可能结果是 $\hat{A}$ 的本征值。
2. 得到 $a_n$ 的概率由[[born-rule|玻恩规则]]给出：$p(a_n)=|\langle a_n|\psi\rangle|^2$。
3. 测量后状态更新到相应本征态或本征子空间。

若使用[[density-matrix|密度矩阵]] $\rho$ 表示状态，则概率为：

$$p(a_n)=\mathrm{Tr}(\rho P_n)$$

其中 $P_n$ 是对应本征子空间的投影算符。

## 期望值与方差

可观测量的期望值为：

$$\langle A\rangle=\langle\psi|\hat{A}|\psi\rangle$$

方差为：

$$\Delta A^2=\langle\hat{A}^2\rangle-\langle\hat{A}\rangle^2$$

这些统计量描述大量重复制备与测量后的实验分布，而不是单次测量的“隐藏真实值”。

## 相容可观测量

若两个可观测量对易：

$$[\hat{A},\hat{B}]=0$$

在适当条件下它们可以有共同本征态，因而能够同时精确测定。若不对易，则受到[[commutator|对易关系]]与不确定性原理限制。

## 常见例子

- 位置：$\hat{x}$。
- 动量：$\hat{p}_x=-i\hbar\partial_x$。
- 能量：[[hamiltonian|哈密顿量]] $\hat{H}$。
- 自旋分量：$\hat{S}_x,\hat{S}_y,\hat{S}_z$。

## 流传误区

- ❌ “可观测量就是观测者主观看到的量” → ✅ 它是理论中与实验可测结果相联系的数学对象。
- ❌ “任意线性算符都代表物理量” → ✅ 标准量子力学要求可观测量由自伴算符或更一般的 POVM 描述。
- ❌ “期望值就是一次测量的结果” → ✅ 期望值是重复实验的平均结果。

## 相关条目

- [[operator-theory]] — 算符理论
- [[born-rule]] — 玻恩规则
- [[commutator]] — 对易关系
- [[hamiltonian]] — 哈密顿量
- [[wave-function-collapse]] — 波函数坍缩

## 参考文献

1. J. von Neumann, *Mathematische Grundlagen der Quantenmechanik*, Springer, 1932.（A级专著）
2. P. A. M. Dirac, *The Principles of Quantum Mechanics*, 4th ed., Oxford University Press, 1958.（A级教材）
3. J. J. Sakurai and J. Napolitano, *Modern Quantum Mechanics*, 3rd ed., Cambridge University Press, 2021.（B级教材）
