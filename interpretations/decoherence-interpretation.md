---
title: 退相干诠释
created: 2026-05-07
updated: 2026-05-09
type: interpretation
status: complete
tags: [interpretation, decoherence, environment, pointer-states, einselection]
sources:
  - "H. D. Zeh, 'On the Interpretation of Measurement in Quantum Theory', Found. Phys. 1, 69 (1970)"
  - "W. H. Zurek, 'Pointer basis of quantum apparatus: Into what mixture does the wave packet collapse?', Phys. Rev. D 24, 1516 (1981)"
  - "W. H. Zurek, 'Decoherence, einselection, and the quantum origins of the classical', Rev. Mod. Phys. 75, 715 (2003)"
  - "E. Joos et al., Decoherence and the Appearance of a Classical World in Quantum Theory, Springer, 2003"
confidence: high
difficulty: advanced
---

# 退相干诠释 (Decoherence Interpretation)

## 概述

**退相干诠释**不是一套完整的量子力学诠释，而是一种**结合了物理过程与诠释框架**的立场。它承认波函数的宏观化是**量子系统与其环境相互作用**的结果，而非某种特殊的"坍缩"公设。核心思想是：**宏观世界的经典性是从量子力学中"自然而然"涌现出来的**。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Zeh 1970、Zurek 1981/2003 原始论文及 Joos 2003 专著交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3][4]
:::

## 退相干的核心理念

### 什么是退相干？

在量子力学中，一个系统的**密度矩阵** 在与环境交互后，其**非对角元**（相干项）会被消除：

$$\rho_\text{系统} = \sum_n |c_n|^2 |n\rangle\langle n| + \underbrace{\sum_{n\neq m} c_n c_m^* |n\rangle\langle m|}_{\text{退相干}}$$

这一过程发生得极快（常常在 $10^{-23}$ 秒的时间尺度内），使得**量子叠加态"看起来"像是经典的混合态**。

### 指针基与选择（Pointer States & Einselection）

Zurek 在 1981 年提出了**指针基**（pointer basis）和**环境诱导超选择**（einselection, environment-induced superselection）的概念 [2]：

- 环境不会随机消除所有的量子叠加。它会"选择"出某些特定的状态
- 这些状态是**最稳定的**——即最不易被环境干扰的状态
- 这些被"选择"出来的状态就是**指针基**

**例子**:
- 宏观物体的**位置**是指针基（因为它们在环境中最稳定）
- 而**位置的叠加态**不是指针基（因为它们很快退相干）

### 测量的角色

退相干解释不视"测量"为一种特殊的量子跳跃，而是视为**量子系统与大量环境自由度的正常交互**：

```
量子系统 ——[纠缠]—— 环境自由度
    ↓ 退相干 ↓
量子系统 ——[经典混合态]—— 环境自由度
```

"测量仪器"只不过是一个**巨大的环境**。测量不是"跳跃"，而是**退相干的迅速进行**。

## 历史演变

### Zeh 的先驱工作（1970）

**Dieter Zeh** 在 1970 年发表了关于测量的**环境诱导超选择**的先驱性论文 [1]。他首次提出：
- 测量装置本身应该被视为一个量子系统
- 坍缩是与环境的交互的结果
- 而非某种特殊的"量子跳跃"

### Zurek 的系统性发展（1980年代至今）

**Wojciech Zurek**（洛斯阿拉莫斯国家实验室）发展了 Zeh 的思想，提出了：
- **指针基**（1981） [2]
- **环境诱导超选择**（einselection，1982）
- **可靠性**（1991）
- 《Decoherence, einselection, and the quantum origins of the classical》（2003），被引用超过 6,000 次 [3]

### Joos 等人的专著（2003）

**Erich Joos** 等人出版了《Decoherence and the Appearance of a Classical World in Quantum Theory》 [4]，这是退相干理论的权威专著，详细阐述了退相干如何导致经典世界的出现。

## 科学评价

### 优点

1. **解释了偏好基问题**（preferred basis problem）：为什么经典世界看起来是"确定的"？因为环境"选择"了最稳定的状态。
2. **与实验高度一致**：退相干已在多个实验平台上被直接观测。
3. **统一了测量与环境交互**：测量不是"特殊"的，而是环境的一部分。

### 局限性：没有解决结果问题

退相干解释了为什么宏观世界**看起来**是经典的，但没有解释为什么测量只产生**一个**结果。正如 Zurek 本人所承认：

> "退相干解释了为什么干涉消失，但它没有解释为什么只观察到一个结果。"

这就是著名的"结果问题"（problem of outcomes）。

### 与其他诠释的关系

| 诠释 | 对退相干的利用 | 对坍缩的看法 |
|------|-------------|------------|
| **哥本哈根** | 接受退相干解释偏好基，但仍需要投影公设 | 坍缩是基本的、非线性的 |
| **多世界** | 将退相干作为分支的机制 | 不存在坍缩，只有分支 |
| **导波理论** | 接受但非必要 | 没有坍缩，轨道始终确定 |
| **退相干诠释** | 核心组成部分 | 退相干就是"坍缩"的本质 |

## 现代发展

### 实验验证

退相干在多个实验平台上被直接观测：
- **超导电路 QED**：观测到超导量子比特中的退相干动力学
- **光子干涉仪**: 在控制环境中观测到相干性的消失
- **氮-空位色心**: 在室温下观测到单个量子系统的退相干
- **冷原子干涉仪**: 利用大规模量子系统研究退相干

### 量子达尔文主义的启示

**量子达尔文主义**（quantum Darwinism，Zurek, 2009）进一步推广了退相干理论：

> 环境不仅消除干涉，还**多次复制**了指针基的信息。这些信息片段（redundant copies）是多个观察者可以**直接测量并一致**的原因。

这为"客观现实"提供了量子力学基础：多个观察者观察到相同结果，是因为环境已经多次复制了这一信息。

## 流传误区

::: warning
- **误区一**: "退相干解释了量子力学的测量问题。"
  - **澄清**: 退相干**只解释了偏好基问题**（为什么宏观世界看起来是经典的），但**没有解释结果问题**（为什么只观察到单一结果）。
- **误区二**: "退相干就是坍缩。"
  - **澄清**: 退相干是**线性**、**确定性**的薛定谔演化，而坍缩是**非线性**的、随机的跳跃。两者在数学上不等价。退相干不会得到单一结果。
- **误区三**: "退相干是一种量子力学诠释。"
  - **澄清**: 退相干本身**不是完整的诠释**，而是一个物理过程。它可以与哥本哈根、多世界或导波理论结合，但单独不能解释所有问题。
:::

## 相关条目

- [[decoherence]] — 退相干（物理概念）
- [[measurement-problem]] — 测量问题
- [[copenhagen-interpretation]] — 哥本哈根诠释
- [[many-worlds-interpretation]] — 多世界诠释
- [[quantum-interpretations-comparison]] — 量子力学诠释对比
- [[wave-function-collapse]] — 波函数坍缩

## 参考文献

1. **H. D. Zeh** (1970). "On the Interpretation of Measurement in Quantum Theory." *Foundations of Physics*, **1**, 69–76. [DOI](https://doi.org/10.1007/BF00708656) [A级 — 先驱工作]
2. **W. H. Zurek** (1981). "Pointer basis of quantum apparatus: Into what mixture does the wave packet collapse?" *Physical Review D*, **24**, 1516–1525. [DOI](https://doi.org/10.1103/PhysRevD.24.1516) [A级 — 指针基原始论文]
3. **W. H. Zurek** (2003). "Decoherence, einselection, and the quantum origins of the classical." *Reviews of Modern Physics*, **75**, 715–775. [DOI](https://doi.org/10.1103/RevModPhys.75.715) [A级 — 权威综述]
4. **E. Joos et al.** (2003). *Decoherence and the Appearance of a Classical World in Quantum Theory*. Springer. [B级 — 权威专著]
5. **W. H. Zurek** (2009). "Quantum Darwinism." *Nature Physics*, **5**, 181–188. [DOI](https://doi.org/10.1038/nphys1202) [A级 — 量子达尔文主义]
