---
title: 薛定谔的猫
created: 2026-05-07
updated: 2026-05-09
type: experiment
status: complete
tags: [experiment, superposition, decoherence, thought-experiment]
sources: []
confidence: high
difficulty: beginner
---

# 薛定谔的猫 (Schrödinger's Cat)

## 概述

1935 年，厄尔温·薛定谔（Erwin Schrödinger）提出了一个著名的**思想实验**——**薛定谔的猫**。这一思想实验展示了将微观量子叠加态扩展到**宏观日常世界**时产生的悖论性后果，成为量子力学最广为人知的象征之一，也是各种[[quantum-interpretations-comparison|量子力学诠释]]讨论的核心话题。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Schrödinger 1935 原始论文及后世标准教材交叉验证）
- **验证状态**: 思想实验（退相干实验已在光学和超导系统中实现类似"猫态"）
- **来源**: [1][2][3]
:::

## 思想实验的设计

### 装置构造

薛定谔的原始设计如下：

```
密闭铁箱
├── 放射性原子（衰变率 50%）
├── 盖格计数器（Geiger counter）
├── 继电器（与计数器联动）
├── 锤子（与继电器联动）
├──甘氨酸瓶（被锤子击碎后释放毒气）
└── 猫（活着或死亡）
```

### 量子机制

根据量子力学，放射性原子在被测量前处于**衰变与未衰变的叠加态**：

$$
|\Psi\rangle = \frac{1}{\sqrt{2}}\left(|\text{已衰变}\rangle + |\text{未衰变}\rangle\right)
$$

因为计数器、继电器、锤子和毒气瓶构成一个"联动装置"，猫的状态与原子状态**缠结**在一起，因此猫的波函数也是一个叠加态：

$$
|\Psi_{\text{cat}}\rangle = \frac{1}{\sqrt{2}}\left(|\text{死}\rangle + |\text{活}\rangle\right)
$$

### 悖论的核心

这就引出了著名的悖论：

> 如果量子力学适用于一切，那么在打开箱子之前，猫就处于"死了又活着"的状态。

这一结果在宏观世界中是**不可接受**的——一只猫不可能同时既死又活。这说明，将微观量子规律**简单线性推广**到宏观世界会导致比较矛盾的结论。

## 各种诠释的回应

### 哥本哈根诠释

哥本哈根学派主张：打开盒子的行为**本身就是测量**，会导致波函数"坍缩"为某一本征态：

$$
|\Psi_{\text{cat}}\rangle \x\rightarrow{\text{测量}} |\text{死}\rangle \quad \text{or} \quad |\text{活}\rangle
$$

在测量之前，"死又活"只是一种**概率描述**，而非真实的物理状态。

### 多世界诠释

[[quantum-interpretations-comparison|多世界诠释]]主张：波函数从未坍缩。每次测量都导致宇宙"分裂"为两个分支——一个猫活着，另一个猫死了：

$$
|\Psi_{\text{universe}}\rangle = \frac{1}{\sqrt{2}}\left(|\text{观察者看到活猫}\rangle + |\text{观察者看到死猫}\rangle\right)
$$

两个宇宙分支**永不交互**。

### 自发局域化与退相干

现代解释：[[decoherence|退相干]]理论指出，宏观物体（猫、盒子、空气分子）与环境的持续相互作用会使微观叠加态在极短时间内"退相干"为经典混合态，从而解释了为什么我们从未见过"死又活的猫"。

## 现代实验："猫态"的实现

虽然原始的思想实验不可能真正执行，但现代实验物理学已经在微观系统中实现了**超广泛叠加态**（macroscopic superposition）：

| 实验 | 年份 | 系统 | 叠加态尺度 |
|------|------|--------|-----------|
| 光子猫态 | 1996 | 光子在光学腔中 | $|\alpha\rangle + |-\alpha\rangle$ |
| 超导回路猫态 | 2000 | SQUID | $|\Phi_1\rangle + |\Phi_2\rangle$ |
| 振子猫态 | 2009 | 微机械振子 | 数十亿原子 |

这些实验表明，量子叠加不仅限于微观粒子，可以扩展到**包含大量原子的宏观系统**——只是要求系统与环境完全隔离（极低温度、高真空）。

## 科学意义

1. **量子力学与经典界限**：猫思想实验揭示了微观量子规律与宏观经典世界之间的"过渡问题"，激励了 [[decoherence|退相干]] 理论的发展。
2. **量子计算的象征**："猫态"（cat state）已成为量子计算中超广泛叠加态的代名词，是量子纠错码和量子密码的核心资源。
3. **公众科普**：使得量子力学的"怪异性"广为人知，成为探讨量子力学哲学含义的入门话题。

## References

1. **E. Schrödinger** (1935). "Die gegenwärtige Situation in der Quantenmechanik." *Naturwissenschaften*, 23, 807–812, 823–828, 844–849. [A 级 — 原始论文，"猫"文章出处]
2. **M. Brune et al.** (1996). "Observing the Progressive Decoherence of the 'Meter' in a Quantum Measurement." *Physical Review Letters*, 77(24), 4887. [A 级 — 光子猫态实验]
3. **J. Friedman et al.** (2000). "Quantum Superposition of Distinct Macroscopic States." *Nature*, 406, 43. [A 级 — 超导猫态实验]
4. **W. H. Zurek** (2003). "Decoherence, Einselection, and the Quantum Origins of the Classical." *Reviews of Modern Physics*, 75, 715. [A 级 — 退相干理论综述]
5. **D. J. Griffiths** (2018). *Introduction to Quantum Mechanics*, 3rd ed., §12.1. Cambridge University Press. [B 级 — 标准教材]

## 流传误区

::: warning
- **误区一**："薛定谔的猫是一个真实的实验，可以做出来。"
  - **澄清**：猫是**思想实验**，不是真实实验。现代"猫态"实验是在微观系统中实现的超广泛叠加态，不是真正用一只猫。
- **误区二**："猫在盒子里确实既死又活。"
  - **澄清**：在哥本哈根诠释中，测量前的"死又活"是一种概率描述，而非真实的物理状态。打开盒子后，猫**绝对是**死或活中的一种。
- **误区三**："薛定谔提出这个思想实验是为了支持量子力学的奇怪性。"
  - **澄清**：薛定谔的本意是**批判**哥本哈根诠释中波函数坍缩的"模糊"性，他主张微观量子世界与宏观世界应该有不同的规律。
:::
