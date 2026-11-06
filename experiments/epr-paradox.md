---
title: EPR 悖论
created: 2026-05-07
updated: 2026-05-09
type: experiment
status: complete
tags: [experiment, entanglement, measurement, philosophy]
sources: []
confidence: high
difficulty: beginner
---

# EPR 悖论 (EPR Paradox)

## 概述

1935 年，阿尔伯特·爱因斯坦（Albert Einstein）、鲍里斯·波多尔斯基（Boris Podolsky）与纳图·罗森（Nathan Rosen）在《物理评论》上发表了著名的论文，提出了一个**思想实验**，被称为 EPR 悖论。这一论证挑战了量子力学的**完备性**，引发了持续数十年的深刻讨论，并为 [[bell-theorem|贝尔定理]] 和 [[quantum-entanglement|量子纠缠]] 的研究奠定了基础。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Einstein, Podolsky & Rosen 1935 原始论文及后世标准教材交叉验证）
- **验证状态**: 思想实验（已被 Aspect 等人实验检验）
- **来源**: [1][2][3]
:::

## 思想实验的设计

### 两个基本假定

EPR 论证的逻辑基于两个看似自明的假定：

1. **实在性**（Realism）：如果不对系统进行任何干扰的情况下，我们能以 100％ 的确定性预测某个物理量的值，则存在一个对应的"物理实在"元素。
2. **定域性**（Locality）：对一个系统的测量不能瞬间影响另一个远离该系统的系统（不发生超光速作用）。

### 纠缠粒子的构造

考虑一个由两个粒子组成的系统。假设它们在某一时刻以**总动量为零**的状态分离，其量子态可写为：

$$
|\Psi\rangle = \frac{1}{\sqrt{2}}\left(|p_1 = +k\rangle |p_2 = -k\rangle + |p_1 = -k\rangle |p_2 = +k\rangle\right)
$$

其中 $p_1, p_2$ 分别是粒子 1 和粒子 2 的动量。

### 完备性的挑战

根据量子力学，对粒子 1 的动量测量会瞬间"坍缩"整个波函数，从而确定粒子 2 的动量。由于两粒子已经分离，根据定域性，对粒子 1 的测量不能瞬间影响粒子 2。

如果量子力学是**完备**的，那么测量粒子 2 的动量应该是"预先确定"的，而不是在测量粒子 1 时才"被创造"出来的。但量子力学的波函数描述不包含粒子 2 的动量信息——它**只是一个概率幅**。

> 因此，EPR 结论：**量子力学的描述是不完备的**。

## 碎片版 EPR（Bohm 版本）

1951 年，戴维·玻姆（David Bohm）与约翰·贝尔（John Bell）将 EPR 思想实验简化为**自旋纠缠对**：

$$
|\Psi^-\rangle = \frac{1}{\sqrt{2}}\left(|\uparrow\rangle_A |\downarrow\rangle_B - |\downarrow\rangle_A |\uparrow\rangle_B\right)
$$

这一版本使实验检验变得可行，也是现代 [[quantum-entanglement|量子纠缠]] 研究的标准工具。

## 现代实验检验

### 贝尔不等式

1964 年，约翰·贝尔（John Bell）将 EPR 的哲学论证转化为可实验检验的不等式：

$$
|E(a,b) - E(a,c)| \leq 1 + E(b,c)
$$

量子力学预言**可以违反**该不等式，而任何局域隐变量理论都**必须满足**它。

### Aspect 实验的验证

1982 年，[[aspect-test|Aspect 实验]]以高精度证实贝尔不等式被违反，与量子力学预言一致。这一结果排除了大部分局域隐变量理论，但仍保留了非局域隐变量理论（如 Bohm 力学）的可能性。

## 科学意义

1. **哲学影响**：EPR 悖论是二十世纪最深刻的物理学哲学论证之一，揭示了量子力学与经典物理学世界观之间的深层冲突。
2. **量子信息科学**：为 [[quantum-entanglement|量子纠缠]] 作为物理资源的开发奠定了基础，是量子密码、量子计算和量子通信的理论根基。
3. **实验物理学**：促使了精密光子实验技术的发展，并引导了从思想实验到真实实验的范式转变。

## References

1. **A. Einstein, B. Podolsky, & N. Rosen** (1935). "Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?" *Physical Review*, 47(10), 777. [A 级 — 原始论文]
2. **J. S. Bell** (1964). "On the Einstein Podolsky Rosen Paradox." *Physics Physique Физика*, 1, 195. [A 级 — 贝尔不等式原始论文]
3. **N. Bohr** (1935). "Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?" *Physical Review*, 48(8), 696. [A 级 — 玻尔对 EPR 的反驳]
4. **D. Bohm** (1951). *Quantum Theory*. Prentice-Hall. [B 级 — 经典教材，"碎片版"EPR 出处]
5. **A. Aspect et al.** (1982). "Experimental Test of Bell's Inequalities Using Time-Varying Analyzers." *Physical Review Letters*, 49(25), 1804. [A 级 — 实验验证]

## 流传误区

::: warning
- **误区一**："EPR 悖论证明了量子力学是错误的。"
  - **澄清**：EPR 悖论是一个**思想实验**，用于质疑量子力学的**完备性**，而非否定其预言的正确性。后续实验一再证实量子力学的预言是正确的。
- **误区二**："EPR 悖论说明量子纠缠可以超光速传递信息。"
  - **澄清**：纠缠关联是**非局域的**，但量子不可克隆定理禁止利用纠缠进行超光速信息传递。
- **误区三**："爱因斯坦以为量子力学是错的，所以提出了 EPR。"
  - **澄清**：爱因斯坦**接受**量子力学的数学结构和预言，但**不满意**其概率性解释，认为完备的理论应该描述"实在"而非"概率"。
:::
