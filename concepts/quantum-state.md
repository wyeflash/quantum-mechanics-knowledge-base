---
title: 量子态
description: 描述量子系统全部可预测信息的数学对象，涵盖态矢量、波函数、纯态、混合态与密度算符。
tags:
  - foundations
  - hilbert-space
  - superposition
  - density-matrix
type: concept
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: intermediate
sources:
  - "P. A. M. Dirac, The Principles of Quantum Mechanics, Oxford University Press, 1958"
  - "J. von Neumann, Mathematische Grundlagen der Quantenmechanik, Springer, 1932"
  - "D. J. Griffiths, Introduction to Quantum Mechanics, 3rd ed., 2018"
---

# 量子态 (Quantum State)

## 概述

量子态（quantum state）是量子力学中描述系统可预测信息的基本对象。它不是粒子在某一时刻的经典位置与速度清单，而是用于计算各种[[observables|可观测量]]测量概率的数学结构。

::: info 可信度说明
- **可信度**: ★★★★★（Dirac、von Neumann 与现代教材的标准公设表述）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 态矢量与波函数

在抽象形式中，纯量子态用希尔伯特空间中的射线表示，通常写作 ket：

$$|\psi\rangle\in\mathcal{H}$$

在位置表象中，它对应[[wave-function|波函数]]：

$$\psi(x)=\langle x|\psi\rangle$$

全局相位 $e^{i\alpha}|\psi\rangle$ 不改变任何可观测预测，因此物理态严格说是希尔伯特空间中的射线，而非单个向量。

## 纯态与混合态

**纯态**可以由单个态矢量完全描述，例如：

$$|\psi\rangle=c_1|0\rangle+c_2|1\rangle$$

**混合态**描述制备过程中的经典统计不确定性，例如系统以概率 $p_i$ 被制备到 $|\psi_i\rangle$。混合态不能一般地写成一个态矢量，必须用[[density-matrix|密度矩阵]]：

$$\rho=\sum_i p_i |\psi_i\rangle\langle\psi_i|$$

## 叠加不是混合

叠加态保留相干相位，会产生干涉；混合态只表示经典概率分布。两者在数学上和实验上都不同。例如

$$\frac{|0\rangle+|1\rangle}{\sqrt{2}}$$

不是“有一半概率已经在 $|0\rangle$，一半概率已经在 $|1\rangle$”的混合；它在其他测量基底中会表现出相干干涉。

## 态的演化

封闭系统的量子态按[[time-evolution|量子态时间演化]]规则变化。若哈密顿量不显含时间，则：

$$|\psi(t)\rangle=e^{-i\hat{H}t/\hbar}|\psi(0)\rangle$$

测量过程则涉及非幺正的状态更新或更一般的测量理论，这是量子测量问题的核心。

## 与概率的关系

量子态本身不是概率表，但它通过[[born-rule|玻恩规则]]产生测量概率。对于本征态 $|a_n\rangle$：

$$p(a_n)=|\langle a_n|\psi\rangle|^2$$

因此量子态是“概率幅的载体”，而不是经典隐变量的简单替代。

## 流传误区

- ❌ “量子态就是粒子的真实轨道” → ✅ 标准量子力学中量子态用于计算测量概率，不给出经典轨道。
- ❌ “叠加态就是混合态” → ✅ 叠加态有相干相位，混合态没有。
- ❌ “波函数就是唯一的量子态形式” → ✅ 波函数只是某一表象下的态矢量分量；密度算符更一般。

## 相关条目

- [[wave-function]] — 波函数
- [[density-matrix]] — 密度矩阵
- [[born-rule]] — 玻恩规则
- [[quantum-superposition]] — 量子叠加态
- [[hilbert-space]] — 希尔伯特空间

## 参考文献

1. P. A. M. Dirac, *The Principles of Quantum Mechanics*, 4th ed., Oxford University Press, 1958.（A级教材）
2. J. von Neumann, *Mathematische Grundlagen der Quantenmechanik*, Springer, 1932.（A级专著）
3. D. J. Griffiths, *Introduction to Quantum Mechanics*, 3rd ed., Cambridge University Press, 2018.（B级教材）
