---
title: 密度矩阵
description: 用密度算符描述纯态与混合态的统一形式，是退相干、开放量子系统、测量理论和量子信息的核心工具。
tags:
  - foundations
  - operator-theory
  - hilbert-space
  - density-matrix
  - decoherence
type: concept
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: advanced
sources:
  - "J. von Neumann, Mathematische Grundlagen der Quantenmechanik, Springer, 1932"
  - "J. J. Sakurai and J. Napolitano, Modern Quantum Mechanics, 3rd ed., 2021"
  - "M. A. Nielsen and I. L. Chuang, Quantum Computation and Quantum Information, 2010"
---

# 密度矩阵 (Density Matrix)

## 概述

密度矩阵（density matrix），更严格地说是**密度算符**（density operator），用一个正定、迹为 1 的算符 $\rho$ 描述量子系统的状态。它把[[quantum-state|量子态]]的两种情况统一起来：纯态可以写成一个态矢量 $|\psi\rangle$，而混合态只能用若干态的统计系综表示。

::: info 可信度说明
- **可信度**: ★★★★★（基于 von Neumann 1932 原著、Sakurai 教材与 Nielsen-Chuang 量子信息教材交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 定义

若系统以经典概率 $p_i$ 处于纯态 $|\psi_i\rangle$，其密度算符定义为：

$$\rho=\sum_i p_i |\psi_i\rangle\langle\psi_i|,\quad p_i\geq 0,\quad \sum_i p_i=1$$

它满足三条基本条件：

1. **自伴性**：$\rho^\dagger=\rho$。
2. **正定性**：对任意 $|\phi\rangle$，有 $\langle\phi|\rho|\phi\rangle\geq 0$。
3. **归一化**：$\mathrm{Tr}(\rho)=1$。

纯态是特殊情形：

$$\rho_{\mathrm{pure}}=|\psi\rangle\langle\psi|$$

此时 $\rho^2=\rho$ 且 $\mathrm{Tr}(\rho^2)=1$。混合态满足 $\mathrm{Tr}(\rho^2)<1$。

## 为什么需要密度矩阵

态矢量足以描述一个封闭系统的纯态，但许多实际问题不是纯态：

- 制备过程只给出统计混合，例如一束自旋向上与向下按比例混合的粒子。
- 系统与环境发生纠缠后，只观察子系统时必须使用约化密度矩阵。
- [[decoherence|退相干]]把相干叠加转化为近似经典的统计混合。
- 量子信息中的噪声、量子信道与纠错都需要密度算符语言。

## 约化密度矩阵

若总系统 $AB$ 的状态为 $\rho_{AB}$，只关心子系统 $A$ 时，要对环境或子系统 $B$ 做偏迹：

$$\rho_A=\mathrm{Tr}_B(\rho_{AB})$$

这一步不是近似，而是从整体量子描述得到局部可观测预测的标准操作。它解释了为什么整体仍可保持幺正演化，而局部系统却表现出不可逆的退相干。

## 与测量和玻恩规则的关系

对可观测量 $\hat{A}$ 的期望值为：

$$\langle A\rangle=\mathrm{Tr}(\rho\hat{A})$$

若测量投影算符 $P_a$ 对应结果 $a$，则[[born-rule|玻恩规则]]给出：

$$p(a)=\mathrm{Tr}(\rho P_a)$$

因此密度矩阵不仅是统计工具，也是现代测量公设的标准表述。

## 纯态、混合态与退相干

一个关键误区是把“叠加态”与“混合态”混为一谈。叠加态仍是纯态，例如 $c_1|0\rangle+c_2|1\rangle$；混合态表示系统以某些经典概率处于不同纯态。退相干的核心效果是让密度矩阵在某个指针基底中近似对角化，使相干项快速变小：

$$\rho=\begin{pmatrix} |c_1|^2 & c_1c_2^* \\ c_2c_1^* & |c_2|^2 \end{pmatrix}\quad \text{变为近似对角形式}$$

这并不自动解决单次测量为何出现唯一结果的问题；它解释的是为什么干涉项在宏观环境下难以观测。

## 流传误区

- ❌ “密度矩阵只是纯态的另一种写法” → ✅ 它也能描述不能由单个态矢量表示的混合态。
- ❌ “混合态就是叠加态” → ✅ 叠加态有相干相位，混合态只有统计权重。
- ❌ “退相干等于波函数坍缩” → ✅ 退相干解释局部干涉消失，但不单独给出单次结果选择机制。

## 相关条目

- [[quantum-state]] — 量子态
- [[born-rule]] — 玻恩规则
- [[decoherence]] — 退相干
- [[observables]] — 可观测量
- [[operator-theory]] — 算符理论

## 参考文献

1. J. von Neumann, *Mathematische Grundlagen der Quantenmechanik*, Springer, 1932.（A级专著）
2. J. J. Sakurai and J. Napolitano, *Modern Quantum Mechanics*, 3rd ed., Cambridge University Press, 2021.（B级教材）
3. M. A. Nielsen and I. L. Chuang, *Quantum Computation and Quantum Information*, Cambridge University Press, 2010.（B级教材）
4. W. H. Zurek, "Decoherence, einselection, and the quantum origins of the classical", *Rev. Mod. Phys.* **75**, 715 (2003). [DOI](https://doi.org/10.1103/RevModPhys.75.715)（A级综述）
