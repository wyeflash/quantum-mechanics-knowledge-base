---
title: 导波理论
created: 2026-05-07
updated: 2026-05-09
type: interpretation
status: complete
tags: [interpretation, hidden-variables, de-broglie, bohm, determinism, nonlocality]
sources:
  - "L. de Broglie, 'La mécanique ondulatoire et la structure atomique de la matière et du rayonnement', J. Phys. Radium 8, 225 (1927)"
  - "D. Bohm, 'A Suggested Interpretation of the Quantum Theory in Terms of “Hidden” Variables', Phys. Rev. 85, 166 (1952)"
  - "J. S. Bell, 'On the Impossible Pilot Wave', Found. Phys. 12, 989 (1982)"
  - "P. R. Holland, The Quantum Theory of Motion, Cambridge University Press, 1993"
confidence: high
difficulty: advanced
---

# 导波理论 (Pilot-Wave Theory / de Broglie-Bohm Theory)

## 概述

**导波理论**（又称 **de Broglie-Bohm 理论** 或 **Bohmian mechanics**）是量子力学中唯一一种**同时保留确定性与完备性**的诠释。它假设粒子始终具有确定的位置，并受到波函数 $\psi$所"引导"的力的影响——因此被称为"导波"。这一理论在数学与实验上与标准量子力学**完全等价**，但在哲学上提供了一个**确定性、非局域性**的图像。

::: info 可信度说明
- **可信度**: ★★★★★（基于 de Broglie 1927原始论文、Bohm 1952原始论文、Holland 1993 专著及 SEP 交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3][4]
:::

## 核心数学

### 两个基本方程

导波理论只需两个方程：

**一、薛定谔方程**（与标准量子力学完全相同）
$$i\hbar\frac{\partial\psi}{\partial t} = \hat{H}\psi$$

**二、引导方程**（guiding equation）
$$\frac{d\mathbf{Q}}{dt} = \frac{\hbar}{m} \operatorname{Im}\left(\frac{\nabla\psi}{\psi}\right)\bigg|_{\mathbf{r}=\mathbf{Q}(t)}$$

其中 $\mathbf{Q}(t)$ 是粒子的**真实轨道**。波函数 $\psi$不仅是"概率幅"，还是"实实在在"引导着粒子运动的场。

### 量子力学作为经典统计力学

Bohm 将薛定谔方程写成极坐标形式，分离出实部和虚部：

$$\psi(\mathbf{r},t) = R(\mathbf{r},t) e^{iS(\mathbf{r},t)/\hbar}$$

代入得到：
- **连续性方程**（类似 Hamilton-Jacobi 方程）：确定了轨道
- **概率守恒方程**（Fokker-Planck 形式）：保证了玻恩定则

这使得导波理论可以被视为**经典统计力学的量子版本**。

## 历史演变

### 创立（1927年）

**路易·德布罗意**（Louis de Broglie）在第五届索尔维会议（1927年10月）上首次提出了"双解方案"（double solution） [1]：

> 粒子是一个**真实的小球**，被一个**波**所引导。

但这一观点遭到了波尔、海森堡等人的强烈反对。德布罗意很快放弃了自己的想法。

### 重新发现（1952年）

**大卫·博姆**（David Bohm）在并不了解德布罗意早期工作的情况下，独立重新提出了类似的理论 [2]。与德布罗意不同，Bohm 的版本：
- 完全数学化，无需"双解"
- 自然延拓到多粒子系统
- 给出了赋予波函数物理意义的清晰规则

### Bell 的支持（1982年）

**约翰·贝尔**（John Bell）在《On the Impossible Pilot Wave》中表示：

> "从某种意义上，Bohm 的机制就是量子力学——它比哥本哈根更精确、更清晰、更完备。" [3]

Bell 认为，导波理论是"尚未发现"缺陷的唯一诠释。

### 现代发展（1990年代至今）

- **P. R. Holland** (1993) 的《The Quantum Theory of Motion》是这一领域的权威专著 [4]
- **A. Valentini** 提出了"量子平衡"假设，预言在宇宙学尺度上导波理论可能与标准量子力学产生可区别的预测
- 在量子多体物理、量子场论中延伸出"常规化的 Bohmian mechanics"

## 主要优点

### 1. 确定性与完备性

导波理论是**非局域的** — 粒子始终有确定位置，只是我们无法同时知道所有变量。这解决了测量问题：没有"坍缩"，只是我们**不知道**粒子的初始位置。

### 2. 与标准量子力学完全等价

导波理论在**所有已知实验**中都与标准量子力学产生相同的统计预测。它不是"另一种物理学"，而是量子力学的**另一种诠释**。

### 3. 清晰的量子宇宙观

波函数是**实实在在的物理场**，而非只是"知识"。这与哥本哈根观点形成鲜明对比。

## 主要批评

### 1. 非局域性

导波理论是**明确非局域的**。在多粒子系统中，一个粒子的引导波会受到**即时远处**另一个粒子的位置的影响，即使两者之间没有任何经典信号传递。Bell 认为这是"不幸的代价"，但必须支付。

### 2. "隐变量"的不可控性

尽管粒子有确定位置，但我们**无法控制**初始条件。如果粒子的初始位置分布满足玻恩定则，那么随后的所有统计结果都与标准量子力学相同。这使得**确定性在实践中不可利用**。

### 3. 复杂性

导波理论的数学在多粒子系统中变得非常复杂，尤其是当需要考虑场量子化（QFT）时。

### 4. 实在论的挑战

导波理论的"实在"是什么？波函数是位置空间中的复值函数，它在整个宇宙中**同时"存在"**——这意味着导波理论是**非局域的**且**拥有"全局表像"的本体论**。

## 流传误区

::: warning
- **误区一**: "导波理论已经被贝尔不等式排除了。"
  - **澄清**: 贝尔不等式排除的是**局域**隐变量理论，而导波理论是**明确非局域的**。这正是它为保留确定性而付出的代价。
- **误区二**: "导波理论预测与标准量子力学不同。"
  - **澄清**: 导波理论在**所有已知实验中**都与标准量子力学给出相同的统计预测。它不是另一种物理学理论，而是同一理论的另一种诠释。
- **误区三**: "导波理论是经典物理学的‘借尸还魂’。"
  - **澄清**: 导波理论引入了标准量子力学的全部结构（包括波函数的叠加、干涉等），只是给出了一个更完整的本体论图像。它不是"回到经典"，而是"超越经典"。
:::

## 相关条目

- [[louis-de-broglie]] — 路易·德布罗意
- [[paul-dirac]] — 保罗·狄拉克
- [[john-bell]] — 约翰·贝尔
- [[measurement-problem]] — 测量问题
- [[copenhagen-interpretation]] — 哥本哈根诠释
- [[many-worlds-interpretation]] — 多世界诠释
- [[quantum-interpretations-comparison]] — 量子力学诠释对比
- [[wave-particle-duality]] — 波粒二象性

## 参考文献

1. **L. de Broglie** (1927). "La mécanique ondulatoire et la structure atomique de la matière et du rayonnement." *Journal de Physique et le Radium*, **8**(5), 225–241. [DOI](https://doi.org/10.1051/jphysrad:0192700805022500) [A级 — 原始提出]
2. **D. Bohm** (1952). "A Suggested Interpretation of the Quantum Theory in Terms of 'Hidden' Variables." *Physical Review*, **85**, 166–193. [DOI](https://doi.org/10.1103/PhysRev.85.166) [A级 — 重新发现与发展]
3. **J. S. Bell** (1982). "On the Impossible Pilot Wave." *Foundations of Physics*, **12**, 989–999. [DOI](https://doi.org/10.1007/BF01889272) [A级 — Bell的支持]
4. **P. R. Holland** (1993). *The Quantum Theory of Motion*. Cambridge University Press. [B级 — 权威专著]
5. **A. Valentini** (2006). "Pilot-Wave Theory." *Stanford Encyclopedia of Philosophy*. [B级 — 权威百科条目]
