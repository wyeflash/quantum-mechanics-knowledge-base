---
title: 退相干
created: 2026-05-07
updated: 2026-05-09
type: concept
status: complete
tags: [decoherence, foundations, measurement, beginner]
sources: []
confidence: high
difficulty: advanced
---

# 退相干 (Decoherence)

## 概述

退相干（Decoherence）是量子系统与其环境相互作用导致的现象：由于环境自由度极大，量子叠加态的**相干性快速消失**，使系统表观上从量子行为过渡为经典行为。退相干不是波函数坍缩的替代机制（它不能解决测量问题的核心——如何从多个可能性中选出一个结果），但它解释了**为什么宏观世界不表现出量子叠加**。

::: info 可信度说明
- **可信度**: ★★★★☆（基于 Zurek 1981–1982 基础工作、大量实验验证、Griffiths 教材论述）
- **验证状态**: 已验证（实验），完整理论框架仍在发展中
- **来源**: [1][2][3][4]
:::

## 基本机制

### 环境的作用

考虑一个粒子的置于置于置于置于置于置于置于叠加态：

$$|\psi\rangle = \alpha |x_1\rangle + \b\eta |x_2\rangle$$

当这个粒子与环境粒子（如空气分子、光子等）相互作用后，整体波函数变为：

$$|\Psi\rangle = \alpha |x_1\rangle |E_1\rangle + \b\eta |x_2\rangle |E_2\rangle$$

其中 $|E_1\rangle$ 和 $|E_2\rangle$ 是环境的正交态。当我们只关注粒子（对环境取迹），密度矩阵为：

$$\hat{\rho} = |\alpha|^2 |x_1\rangle\langle x_1| + |\b\eta|^2 |x_2\rangle\langle x_2|$$

此时相干项（off-diagonal terms）已消失，叠加态看起来像经典的**统计混合**。

### 退相干时间

退相干的特征时间标度为：

$$\tau_D \sim \frac{\hbar}{E_{\text{\int}}}$$

其中 $E_{\text{\int}}$ 是系统与环境的相互作用能。对于宏观物体，$E_{\text{\int}}$ 极大，因此 $\tau_D \sim 10^{-23}$ 秒，叠加态在瞬间就被洗掉了。

### 指针态（Pointer States）

Zurek 的核心贡献之一是发现：环境并不是随机地洗掉叠加态，而是选择了特定的**指针态**——那些在环境中最稳定、最不易被打扰的状态。这些指针态正好对应于我们日常经验中的“经典”概念（如确定的位置）。

## 实验见证

### C60 分子干涉（1999）

昆德（Anton Zeilinger）团队让富勒烯 $\text{C}_{60}$ 分子通过双缝干涉仪，观察到了清晰的干涉图样。通过控制环境气体压力，他们证明了：
- 低压力下：干涉条纹清晰（退相干较弱）
- 高压力下：干涉条纹模糊（退相干增强）

这直接验证了环境如何导致量子叠加的消失。

### 量子点与宏观谐振器

现代实验已能在**宏观谐振器**（如 LIGO 镜面的每个镜片质量约 $40\,\text{kg}$）中观察到退相干的追踪效应。这表明退相干是普遍的量子现象，只是宏观下极快不可观测。

## 退相干与测量问题

### 解决了什么

退相干解释了：
1. **为什么宏观世界看起来是经典的**？因为环境极快洗掉了相干性
2. **为什么我们看不到猫的叠加态**？因为猫与空气分子、光子的互作用在 $10^{-23}$ 秒内就消除了叠加

### 没有解决什么

退相干**未能解决**：
1. **为什么测量只得到一个结果**？它只说明叠加看起来消失了，但没解释"哪个结果被选中"
2. **波函数坍缩的物理机制**？退相干与哥本哈根诠释中的“坍缩”是两个概念

测量问题的核心——"如何从多个可能性中选出一个"——仍然是未解之谜。

## 流传误区

- ❌ "退相干就是波函数坍缩" → ✅ 退相干不是坍缩。坍缩是测量结果的**单一化**，退相干只是相干性的**消失**。退相干后系统仍然处于多个可能性的统计混合
- ❌ "退相干解释了测量问题" → ✅ 退相干解释了"为什么宏观世界是经典的"，但没有解释"为什么测量只得到一个结果"
- ❌ "退相干是一种理论假设" → ✅ 退相干是被大量实验验证的**确切现象**，不是假设
- ❌ "只要隔离环境就可以观测宏观叠加" → ✅ 宏观叠加的实验极度困难，因为即使在真空中，光子背景辐射也会导致退相干

## 相关条目

- [[quantum-superposition|量子叠加态]]
- [[wave-function-collapse|波函数坍缩]]
- [[quantum-entanglement|量子纠缠]]
- [[measurement-problem|测量问题]]
- [[copenhagen-interpretation|哥本哈根诠释]]
- [[many-worlds-interpretation|多世界诠释]]
- [[schrodingers-cat|薛定谔的猫]]

## 参考文献

1. W. H. Zurek, "Pointer basis of quantum apparatus: Into what mixture does the wave packet collapse?", *Physical Review D* **24**, 1516 (1981). [DOI](https://doi.org/10.1103/PhysRevD.24.1516)
2. W. H. Zurek, "Environment-induced superselection rules," *Physical Review D* **26**, 1862 (1982). [DOI](https://doi.org/10.1103/PhysRevD.26.1862)
3. M. Arndt ет ал., "Wave-particle duality of C60 molecules," *Nature* **401**, 680 (1999). [DOI](https://doi.org/10.1038/44348)
4. D. J. Griffiths, *Introduction to Quantum Mechanics*, 3rd ed., Cambridge University Press, 2018, §2.4.（B级教材）
