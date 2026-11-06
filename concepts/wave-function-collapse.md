---
title: 波函数坍缩
created: 2026-05-07
updated: 2026-05-09
type: concept
status: complete
tags: [measurement, foundations, beginner]
sources: []
confidence: medium
difficulty: intermediate
---

# 波函数坍缩 (Wave Function Collapse)

## 概述

波函数坍缩是量子力学中测量问题的核心假设：当对一个处于叠加态的量子系统进行测量时，波函数**瞬间从多个可能性的叠加跃变到某一个确定的本征态**。这一过程在哥本哈根诠释中被称为"第一公理"，但其物理机制至今仍是量子力学中最深刻的未解之谜之一。

::: warning 可信度说明
- **可信度**: ★★★☆☆（"坍缩"本身是计算规则，其物理机制存在多种争议性解释）
- **验证状态**: 存争议
- **来源**: [1][2][3]
:::

## 正式表述

如果系统在测量前的波函数为：

$$|\psi\rangle = \sum_n c_n |\phi_n\rangle$$

其中 $|\phi_n\rangle$ 是可观测量 $\hat{A}$ 的本征态（$\hat{A}|\phi_n\rangle = a_n |\phi_n\rangle$），测量后波函数"坍缩"为：

$$|\psi\rangle \x\rightarrow{\text{测量}} |\phi_k\rangle$$

发生概率为 $|c_k|^2$。测量结果为本征值 $a_k$。

这一过程是**非确定性的**（无法用薛定谔方程描述）、**不可逆的**（信息丢失），且**瞬时的**（在测量时刻完成）。

## 历史与名词演变

### 冯·诺依曼的形式化

1932 年，[[john-von-neumann|约翰·冯·诺依曼]] 在《量子力学的数学基础》中第一次将测量过程形式化为波函数的"跃迁"（Process 1），与确定性演化的波动力学过程（Process 2，即薛定谔方程）区分开来。他证明了波函数坍缩不能由任何**单一**的确定性过程实现，因为确定性过程是**线性且可逆的**，而坍缩是非线性且不可逆的。

### “坍缩"一词的起源

“坍缩"（collapse）这个形象的术语是后人总结的。玻尔和海森堡本人并未使用这个词。现代教材中常用"波函数的减缩"（reduction of the wave packet）或"波函数坍缩"来描述这一假设。

## 主要解释方案

### 哥本哈根诠释：经典切分

哥本哈根解释认为，测量仪器是**经典的**，波函数的叠加只存在于被测对象与仪器的互作用之前。一旦互作用发生，被测对象的波函数就"坍缩"为某个本征态。这是一种**计算规则**，而非物理过程。

### 多世界诠释：没有坍缩

[[many-worlds-interpretation|多世界诠释]] 拥护人惠勒（Hugh Everett, 1957）认为**根本不存在坍缩**。测量时，宇宙**分裂**为多个分支，每个分支对应一个可能的测量结果。我们只感知到其中一个分支，但所有分支都"真实"存在。

### 退相干解释：表观坍缩

[[decoherence|退相干]] 理论认为，坍缩并非真正的瞬时过程，而是量子系统与环境相互作用导致的**表观效果**。当环境自由度极大时，叠加态在 $10^{-23}$ 秒内就变得实质上不可区分，看起来就像"坍缩"了。

### 导波理论

德布罗意和波姆 (Bohm)的**导波理论** 认为波函数是一种"导波"，粒子始终有确定的位置，测量只是揭示了隐变量，而非改变系统状态。

## 实验意含

相对论的**定域性**（locality）要求波函数坍缩不能以超光速传递。然而，如果考虑**量子纠缠**，对一个粒子的测量会瞬间影响纠缠伙伴的状态，好像波函数"远程坍缩"了。爱因斯坦认为这违反了相对论，但实验已证明量子纠缠确实如此存在，且不能用来传递信息（不违反相对论）。

## 流传误区

- ❌ "坍缩是由于测量仪器的干扰" → ✅ 坍缩是**计算规则**，而非经典干扰的结果。在哥本哈根诠释中，它是主观观察者的知识更新，而非客体的物理变化
- ❌ "波函数坍缩是确定论的物理过程" → ✅ 实验上无法直接观测"坍缩"本身。坍缩只是波动力学的一个计算假设，对其物理机制存在多种争议性解释
- ❌ "坍缩是瞬时的" → ✅ 在哥本哈根诠释中是瞬时的，但退相干理论表明它可能是极快的表观过程
- ❌ "观测者的意识导致了坍缩" → ✅ 观测者不需要是有意识的主体。任何宏观体系统都可以作为"观测者"触发坍缩

## 相关条目

- [[quantum-superposition|量子叠加态]]
- [[quantum-entanglement|量子纠缠]]
- [[measurement-problem|测量问题]]
- [[decoherence|退相干]]
- [[copenhagen-interpretation|哥本哈根诠释]]
- [[many-worlds-interpretation|多世界诠释]]
- [[pilot-wave-theory|导波理论]]
- [[john-von-neumann|约翰·冯·诺依曼]]

## 参考文献

1. J. von Neumann, *Mathematische Grundlagen der Quantenmechanik*, Springer, Berlin, 1932; English transl.: *Mathematical Foundations of Quantum Mechanics*, Princeton University Press, 1955.（B级专著）
2. D. J. Griffiths, *Introduction to Quantum Mechanics*, 3rd ed., Cambridge University Press, 2018, §2.3.（B级教材）
3. W. H. Zurek, "Pointer basis of quantum apparatus: Into what mixture does the wave packet collapse?", *Physical Review D* **24**, 1516 (1981). [DOI](https://doi.org/10.1103/PhysRevD.24.1516)
