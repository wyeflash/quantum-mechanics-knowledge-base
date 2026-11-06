---
title: 玻恩规则
description: 量子力学中把概率幅与测量概率联系起来的基本规则，是概率诠释、测量问题和量子信息的核心。
tags:
  - foundations
  - probability
  - measurement
  - wave-function
type: concept
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: intermediate
sources:
  - "M. Born, Zur Quantenmechanik der Stoßvorgänge, Z. Phys. 37, 863 (1926)"
  - "P. A. M. Dirac, The Principles of Quantum Mechanics, Oxford University Press, 1958"
  - "J. J. Sakurai and J. Napolitano, Modern Quantum Mechanics, 3rd ed., 2021"
---

# 玻恩规则 (Born Rule)

## 概述

玻恩规则（Born rule）说明：量子态给出的不是经典轨道，而是测量结果的概率。对归一化波函数 $\psi(x)$，在位置 $x$ 附近发现粒子的概率密度为 $|\psi(x)|^2$。在抽象[[hilbert-space|希尔伯特空间]]中，若系统处于 $|\psi\rangle$，测量本征态 $|a_n\rangle$ 对应的结果 $a_n$ 的概率为：

$$p(a_n)=|\langle a_n|\psi\rangle|^2$$

::: info 可信度说明
- **可信度**: ★★★★★（Born 1926 原始论文与标准教材一致）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 历史背景

1926 年，马克斯·玻恩在散射问题研究中提出波函数的统计解释：波函数本身不是物质密度，而是概率幅；其模平方给出观测结果的概率。这一解释使[[wave-function|波函数]]从“物理波”转变为可用于统计预测的数学对象，并成为哥本哈根传统量子力学的重要组成部分。

## 三种常见形式

### 位置表象

$$P(x\in[a,b])=\int_a^b |\psi(x)|^2\,\mathrm{d}x$$

### 离散本征态

若

$$|\psi\rangle=\sum_n c_n|a_n\rangle$$

则

$$p(a_n)=|c_n|^2$$

### 密度矩阵形式

对一般状态 $\rho$ 与投影算符 $P_n$：

$$p(n)=\mathrm{Tr}(\rho P_n)$$

这也是[[density-matrix|密度矩阵]]语言中最常用的测量概率公式。

## 物理意义

玻恩规则不是普通统计无知的简单补充，而是量子理论把数学态矢量与实验频率连接起来的桥梁。它说明量子态的线性叠加系数不是“部分存在的百分比”，而是概率幅；概率来自幅的模平方而非幅本身。

## 与测量问题的关系

玻恩规则告诉我们各个结果出现的概率，但不单独解释一次测量为什么只得到一个结果。这正是[[interpretations/measurement-problem|测量问题]]的重要组成部分。不同诠释对它的地位理解不同：

- 哥本哈根传统通常把它作为测量公设的一部分。
- 多世界诠释需要解释分支权重为何服从模平方规则。
- QBism 把它理解为行动者主观概率之间的一致性约束。
- 客观坍缩理论通常保留玻恩概率，同时修改动力学。

## 流传误区

- ❌ “波函数本身就是概率” → ✅ 波函数是概率幅，概率是其模平方。
- ❌ “玻恩规则只是经验拟合公式” → ✅ 它是现代量子力学公设结构的核心，与所有量子测量预测相连。
- ❌ “玻恩规则解决了测量问题” → ✅ 它给出概率，不解释单次结果选择的动力学或本体论。

## 相关条目

- [[wave-function]] — 波函数
- [[quantum-state]] — 量子态
- [[density-matrix]] — 密度矩阵
- [[observables]] — 可观测量
- [[people/max-born]] — 马克斯·玻恩

## 参考文献

1. M. Born, "Zur Quantenmechanik der Stoßvorgänge", *Zeitschrift für Physik* **37**, 863-867 (1926). [DOI](https://doi.org/10.1007/BF01397477)（A级原始论文）
2. P. A. M. Dirac, *The Principles of Quantum Mechanics*, 4th ed., Oxford University Press, 1958.（A级教材）
3. J. J. Sakurai and J. Napolitano, *Modern Quantum Mechanics*, 3rd ed., Cambridge University Press, 2021.（B级教材）
4. Stanford Encyclopedia of Philosophy, "Quantum Mechanics" and related entries.（B级学术百科）
