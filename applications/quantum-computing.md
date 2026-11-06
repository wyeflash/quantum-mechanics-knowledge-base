---
title: 量子计算
created: 2026-05-07
updated: 2026-05-09
type: application
status: complete
tags: [application, quantum-computing, qubit, algorithm, superposition, entanglement]
sources:
  - "R. P. Feynman, 'Simulating Physics with Computers', Int. J. Theor. Phys. 21, 467 (1982)"
  - "P. W. Shor, 'Algorithms for Quantum Computation', Proc. 35th FOCS, 124 (1994)"
  - "L. K. Grover, 'A Fast Quantum Mechanical Algorithm for Database Search', Proc. 28th STOC, 212 (1996)"
  - "J. Preskill, 'Quantum Computing in the NISQ era and beyond', Quantum 2, 79 (2018)"
  - "F. Arute et al. (Google), 'Quantum Supremacy Using a Programmable Superconducting Processor', Nature 574, 505 (2019)"
confidence: high
difficulty: intermediate
---

# 量子计算 (Quantum Computing)

## 概述

**量子计算**是利用量子力学原理（如叠加态、纠缠和干涉）进行信息处理的全新计算范式。与经典计算机使用只能表示 0 或 1 的比特（bit）不同，量子计算机使用**量子比特**（qubit），它可以同时处于 0 和 1 的叠加态。这使得量子计算机在解决特定问题上具有潜在的**指数级加速**能力。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Feynman 1982、Shor 1994、Grover 1996 原始论文及 Preskill 2018 综述交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3][4][5]
:::

## 核心原理

### 量子比特（Qubit）

经典比特的状态只能是 0 或 1，而量子比特可以处于叠加态：

$$|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$$

其中 $\alpha, \beta \in \mathbb{C}$ 且 $|\alpha|^2 + |\beta|^2 = 1$。测量时，得到 0 的概率为 $|\alpha|^2$，得到 1 的概率为 $|\beta|^2$。

### 量子纠缠

多个量子比特可以处于**纠缠态**，例如贝尔态：

$$|\Phi^+\rangle = \frac{1}{\sqrt{2}}\left(|00\rangle + |11\rangle\right)$$

纠缠使得量子计算机能够利用**量子并行性**：一个 $n$ 量子比特的寄存器可以同时表示 $2^n$ 个状态的叠加。

### 量子门

量子计算通过**量子门**（unitary operations）操控量子比特。常见的单量子比特门包括：
- **Hadamard 门**（H）：创建叠加态
- **Pauli-X 门**：量子版本的 NOT 门
- **Phase 门**（S, T）：引入相位

常见的双量子比特门包括：
- **CNOT 门**：受控非门，是产生纠缠的基本操作
- **SWAP 门**：交换两个量子比特的状态

## 里程碑算法

### Shor 算法（1994）

**Peter Shor** 提出了能够在**多项式时间内分解大整数**的量子算法 [2]。经典计算机上最好的已知算法（如一般数域筛法）需要次指数时间。

Shor 算法的核心步骤：
1. 将因数分解问题转化为**周期查找问题**
2. 使用**量子傅里叶变换**（QFT）在叠加态上并行计算周期
3. 通过测量提取周期，从而得到因数

**安全性影响**：Shor 算法对现有的 RSA 和椭圆曲线加密体系构成根本性威胁。

### Grover 算法（1996）

**Lov Grover** 提出了**无序数据库搜索**的量子算法 [3]，将搜索复杂度从经典算法的 $O(N)$ 降低到 $O(\sqrt{N})$。

虽然加速是**平方级**而非指数级，但 Grover 算法是通用的——它适用于任何搜索问题。

## 量子计算模型

### 量子线路模型（Quantum Circuit Model）

最常用的量子计算模型，类似于经典计算机的逻辑门电路。Google、IBM 等公司主要采用此模型。

### 拓扑量子计算（Topological Quantum Computing）

利用**任意子**（anyons）的拓扑性质进行计算。Microsoft 的量子计算路线基于此模型，理论上具有更强的容错能力。

### 绝热量子计算（Adiabatic Quantum Computing）

通过缓慢改变哈密顿量，使系统从简单基态演化到包含问题解的基态。D-Wave 系统采用此模型，但其是否为真正的量子计算仍有争议。

### 量子模拟（Quantum Simulation）

Feynman 在 1982 年提出的原始动机 [1]：用可控的量子系统去模拟另一个难以直接研究的量子系统。这被认为是**近期量子计算最有前景的应用**。

## 物理实现路径

| 技术路线 | 代表公司/机构 | 优点 | 挑战 |
|---------|------------|------|------|
| **超导量子比特** | Google, IBM, Rigetti | 技术成熟、可扩展 | 需要极低温（~15 mK） |
| ** trapped ion** | IonQ, Quantinuum | 相干时间长、保真度高 | 门速度较慢、扩展困难 |
| **光量子** | Xanadu, PsiQuantum | 室温运行、易于网络连接 | 确定性门操作困难 |
| **中性原子** | QuEra, Pasqal | 可扩展性好、相干时间长 | 单原子控制复杂 |
| **半导体** | Intel, Silicon Quantum Computing | 可利用现有半导体工艺 | 制造一致性挑战 |
| **拓扑** | Microsoft | 理论容错能力强 | 马约拉纳零能模尚未确证 |

## 量子霸权与实用量子优势

### 量子霸权（Quantum Supremacy）

2019 年，Google 宣布其 53 量子比特处理器 **Sycamore** 在 200 秒内完成了一项经典超级计算机需要约 10,000 年才能完成的特定采样任务 [5]。

但这一成果受到 IBM 的质疑，认为经典模拟方法可以优化到只需约 2.5 天。

### NISQ 时代

Preskill 在 2018 年提出了 **NISQ**（Noisy Intermediate-Scale Quantum）概念 [4]：
- **Noisy**：量子比特存在噪声和退相干
- **Intermediate-Scale**：约 50–1000 个量子比特
- 目标是寻找**无需容错纠错**的实用应用

## 量子纠错与容错计算

由于量子态极其脆弱，**量子纠错**是实现大规模量子计算的必要条件。

### 表面码（Surface Code）

目前最有前景的纠错方案：
- 将逻辑量子比特编码在大量物理量子比特的拓扑结构中
- 需要约 **1,000 个物理量子比特** 来编码 **1 个逻辑量子比特**
- Google 和 IBM 的目标是在 2020 年代末或 2030 年代初实现

## 流传误区

::: warning
- **误区一**: "量子计算机可以加速所有计算。"
  - **澄清**: 量子计算机只在**特定问题**（如因数分解、搜索、模拟）上有优势。对于大多数日常计算任务，经典计算机更优。
- **误区二**: "量子计算机是超级快的经典计算机。"
  - **澄清**: 量子计算机不是"更快"的经典计算机，而是利用量子力学原理的**完全不同的计算范式**。
- **误区三**: "量子计算机已经商用。"
  - **澄清**: 当前的量子计算机仍处于**NISQ 时代**，尚未实现容错纠错。商业应用主要集中在优化、模拟和材料科学等探索性领域。
- **误区四**: "Shor 算法已经破解了 RSA 加密。"
  - **澄清**: 目前的量子计算机只有数十到数百个量子比特，远不足以分解实际使用的 RSA 密钥（2,048 位以上）。估计需要数百万个物理量子比特。
:::

## 相关条目

- [[quantum-superposition]] — 量子叠加态
- [[quantum-entanglement]] — 量子纠缠
- [[quantum-cryptography]] — 量子密码学
- [[quantum-sensing]] — 量子传感
- [[quantum-communication]] — 量子通信
- [[decoherence]] — 退相干
- [[applications/micius-satellite]] — 墨子号卫星

## 参考文献

1. **R. P. Feynman** (1982). "Simulating Physics with Computers." *International Journal of Theoretical Physics*, **21**, 467–488. [DOI](https://doi.org/10.1007/BF02650179) [A级 — 量子计算的开创性提议]
2. **P. W. Shor** (1994). "Algorithms for Quantum Computation." *Proc. 35th FOCS*, 124–134. [A级 — Shor 算法原始论文]
3. **L. K. Grover** (1996). "A Fast Quantum Mechanical Algorithm for Database Search." *Proc. 28th STOC*, 212–219. [A级 — Grover 算法原始论文]
4. **J. Preskill** (2018). "Quantum Computing in the NISQ era and beyond." *Quantum*, **2**, 79. [DOI](https://doi.org/10.22331/q-2018-08-06-79) [A级 — NISQ 概念权威综述]
5. **F. Arute et al.** (2019). "Quantum Supremacy Using a Programmable Superconducting Processor." *Nature*, **574**, 505–510. [DOI](https://doi.org/10.1038/s41586-019-1666-5) [A级 — Google 量子霸权实验]
