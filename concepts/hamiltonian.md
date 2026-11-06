---
title: 哈密顿量
description: 量子力学中生成时间演化并通常代表系统总能量的算符，是动力学、能谱和近似方法的核心。
tags:
  - foundations
  - hamiltonian
  - operator-theory
  - quantum-dynamics
type: concept
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: advanced
sources:
  - "P. A. M. Dirac, The Principles of Quantum Mechanics, Oxford University Press, 1958"
  - "L. D. Landau and E. M. Lifshitz, Quantum Mechanics: Non-Relativistic Theory, 3rd ed., 1977"
  - "J. J. Sakurai and J. Napolitano, Modern Quantum Mechanics, 3rd ed., 2021"
---

# 哈密顿量 (Hamiltonian)

## 概述

哈密顿量（Hamiltonian）在量子力学中通常记为 $\hat{H}$。它既是系统能量的[[observables|可观测量]]，也是生成时间平移的算符。给定 $\hat{H}$，就基本确定了封闭系统的[[time-evolution|量子态时间演化]]。

::: info 可信度说明
- **可信度**: ★★★★★（Dirac、Landau-Lifshitz 与 Sakurai 教材一致）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 非相对论形式

对质量为 $m$ 的单粒子，在势能 $V(\hat{x})$ 中运动，常见哈密顿量为：

$$\hat{H}=\frac{\hat{p}^2}{2m}+V(\hat{x})$$

其中第一项是动能，第二项是势能。在位置表象中，$\hat{p}=-i\hbar\nabla$，于是得到定态薛定谔方程：

$$\hat{H}\psi_n(\mathbf{r})=E_n\psi_n(\mathbf{r})$$

## 能量本征值与能谱

哈密顿量的本征值 $E_n$ 是可能的能量测量结果。本征态 $|E_n\rangle$ 构成能量表象的基底。若

$$|\psi(0)\rangle=\sum_n c_n|E_n\rangle$$

且 $\hat{H}$ 不显含时间，则

$$|\psi(t)\rangle=\sum_n c_n e^{-iE_nt/\hbar}|E_n\rangle$$

这说明能量本征态只获得相位因子，而不同能量本征态的相对相位会导致可观测的干涉与振荡。

## 作为时间演化生成元

薛定谔方程可写成：

$$i\hbar\frac{\partial}{\partial t}|\psi(t)\rangle=\hat{H}|\psi(t)\rangle$$

因此哈密顿量决定系统如何随时间变化。若 $\hat{H}$ 自伴，演化算符是幺正的，保证概率守恒。

## 与近似方法

许多真实系统的哈密顿量不能精确求解，通常写成：

$$\hat{H}=\hat{H}_0+\lambda\hat{V}$$

其中 $\hat{H}_0$ 可解，$\lambda\hat{V}$ 是小修正。这正是[[perturbation-theory|微扰理论]]的基本设定。

## 流传误区

- ❌ “哈密顿量永远等于经典总能量公式” → ✅ 在简单非相对论系统中常如此，但在自旋、场论、有效理论中形式更丰富。
- ❌ “知道能量平均值就知道了哈密顿量” → ✅ 哈密顿量是算符；一个平均值不足以确定能谱与动力学。
- ❌ “定态没有变化” → ✅ 定态的概率分布不变，但态矢量仍随时间获得相位。

## 相关条目

- [[time-evolution]] — 量子态时间演化
- [[schrodinger-equation]] — 薛定谔方程
- [[observables]] — 可观测量
- [[perturbation-theory]] — 微扰理论
- [[operator-theory]] — 算符理论

## 参考文献

1. P. A. M. Dirac, *The Principles of Quantum Mechanics*, 4th ed., Oxford University Press, 1958.（A级教材）
2. L. D. Landau and E. M. Lifshitz, *Quantum Mechanics: Non-Relativistic Theory*, 3rd ed., Pergamon, 1977.（B级教材）
3. J. J. Sakurai and J. Napolitano, *Modern Quantum Mechanics*, 3rd ed., Cambridge University Press, 2021.（B级教材）
