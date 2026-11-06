---
title: 薛定谔方程
alias: Schrödinger Equation
description: 量子力学的基本运动方程，描述量子态随时间的演化，由埃尔温·薛定谔于1926年提出。
tags:
  - foundations
  - wave-function
  - hamiltonian
  - quantum-dynamics
type: concept
status: complete
created: 2026-05-08
updated: 2026-05-09
confidence: high
difficulty: advanced
sources:
  - "E. Schrödinger, 'An Undulatory Theory of the Mechanics of Atoms and Molecules', Phys. Rev. 28, 1049 (1926)"
  - "J. J. Sakurai, Modern Quantum Mechanics, 2nd ed., Addison-Wesley, 1994"
  - "曾谨言, 《量子力学》卷I, 第5版, 科学出版社, 2013"
  - "D. J. Griffiths, Introduction to Quantum Mechanics, 3rd ed., Cambridge, 2018"
---

# 薛定谔方程 (Schrödinger Equation)

## 概述

薛定谔方程（Schrödinger equation）是量子力学的**基本运动方程**，描述量子系统的状态（由波函数 $|\psi\rangle$ 表征）如何随时间演化。该方程由奥地利物理学家埃尔温·薛定谔（Erwin Schrödinger）于1926年提出，是波动力学（wave mechanics）的数学核心。

与经典力学中的牛顿第二定律 $F=ma$ 类似，薛定谔方程给出了量子系统动力学的因果律——给定初始态 $|\psi(0)\rangle$，原则上可以唯一确定任意时刻的态 $|\psi(t)\rangle$。

## 含时薛定谔方程

对于单粒子系统，含时薛定谔方程（time-dependent Schrödinger equation, TDSE）写为：

$$\mathrm{i}\hbar\frac{\partial}{\partial t}\psi(\mathbf{r},t)=\hat{H}\psi(\mathbf{r},t)$$

其中：
- $\mathrm{i}$ 为虚数单位
- $\hbar = h/(2\pi)$ 为约化普朗克常数
- $\psi(\mathbf{r},t)$ 为波函数（wave function）
- $\hat{H}$ 为哈密顿算符（Hamiltonian operator）

### 一般形式

在更抽象的希尔伯特空间表述中，TDSE 写为：

$$\mathrm{i}\hbar\frac{\mathrm{d}}{\mathrm{d}t}|\psi(t)\rangle = \hat{H}|\psi(t)\rangle$$

此形式不依赖于具体表象，适用于有限维或无限维希尔伯特空间。

### 哈密顿算符

对于质量为 $m$ 的粒子在外势场 $V(\mathbf{r},t)$ 中运动，哈密顿算符为：

$$\hat{H}=-\frac{\hbar^2}{2m}\nabla^2+V(\mathbf{r},t)$$

其中 $\nabla^2=\partial^2/\partial x^2+\partial^2/\partial y^2+\partial^2/\partial z^2$ 为拉普拉斯算符。

## 定态薛定谔方程

当哈密顿量不显含时间（$\partial\hat{H}/\partial t=0$）时，可使用**分离变量法**设：

$$\psi(\mathbf{r},t)=\phi(\mathbf{r})\,T(t)$$

代入 TDSE 后得到两个方程。时间部分的解为：

$$T(t)=\exp\!\left(-\mathrm{i}\frac{E}{\hbar}t\right)$$

空间部分满足**定态薛定谔方程**（time-independent Schrödinger equation, TISE）：

$$\hat{H}\phi(\mathbf{r})=E\phi(\mathbf{r})$$

这是一个**本征值问题**：$\phi(\mathbf{r})$ 为哈密顿算符的本征函数（eigenfunction），$E$ 为对应的本征值（eigenvalue），即系统的能量。

### 重要性质

- 定态下概率密度 $|\psi(\mathbf{r},t)|^2=|\phi(\mathbf{r})|^2$ **不随时间变化**
- 期望值 $\langle\hat{A}\rangle$ 对不显含时间的算符亦为常数
- 系统的最一般解为定态的线性叠加（叠加原理）

## 物理诠释

### 玻恩诠释

根据马克斯·玻恩（Max Born）1926年提出的**概率诠释**，$|\psi(\mathbf{r},t)|^2\,\mathrm{d}^3r$ 表示在时刻 $t$ 于位置 $\mathbf{r}$ 附近的体积元 $\mathrm{d}^3r$ 内找到粒子的概率。波函数本身没有直接的物理实在性，但其模平方具有可观测的统计意义。

### 归一化条件

由于总概率必须为 1，波函数满足归一化条件：

$$\int_{-\infty}^{+\infty}|\psi(\mathbf{r},t)|^2\,\mathrm{d}^3r=1$$

薛定谔方程保持归一化：若 $|\psi(0)\rangle$ 已归一化，则演化后的 $|\psi(t)\rangle$ 亦保持归一化（当 $\hat{H}$ 为厄米算符时）。

## 历史背景

1925年，维尔纳·海森堡（Werner Heisenberg）建立了矩阵力学。薛定谔在德布罗意物质波假说的启发下，试图寻找波动方程以描述原子中的电子行为。1926年，他发表了四篇奠基性论文（"Quantisierung als Eigenwertproblem"），逐步建立了波动力学，并证明波动力学与矩阵力学的数学等价性。

同年，马克斯·玻恩提出波函数的概率诠释，确立了 $|\psi|^2$ 的统计意义。

## 典型求解案例

| 系统 | 势能 $V(x)$ | 关键结果 |
|---|---|---|
| 自由粒子 | $V=0$ | 平面波解，连续谱 |
| 无限深方势阱 | $V=0$（阱内），$\infty$（阱外） | 离散能级 $E_n\propto n^2$ |
| 一维谐振子 | $V=\frac{1}{2}m\omega^2x^2$ | 等间距能级 $E_n=\hbar\omega(n+\frac{1}{2})$ |
| 氢原子 | $V(r)=-\frac{e^2}{4\pi\varepsilon_0 r}$ | 能级 $E_n=-13.6\,\mathrm{eV}/n^2$，量子数 $n,l,m$ |

## 常见问题

**Q：薛定谔方程可以被"推导"出来吗？**

严格来说，薛定谔方程是量子力学的**基本假设（postulate）**，无法从更基本的经典定律推导。然而，可以通过对应原理（correspondence principle）——将经典哈密顿-雅可比方程与德布罗意波结合——给出启发式"推导"，但这本质上是一种合理化的猜测（educated guess）。

**Q：薛定谔方程是相对论性的吗？**

非相对论性薛定谔方程（NRSE）仅适用于低速（$v\ll c$）情形。对于相对论性粒子，需使用克莱因-戈尔登方程（Klein–Gordon equation，自旋为0）或狄拉克方程（Dirac equation，自旋为1/2）。

## 参考文献

1. E. Schrödinger, "Quantisierung als Eigenwertproblem", *Ann. Phys.* **384**(4), 361–376 (1926). [DOI](https://doi.org/10.1002/andp.19263840404)（A级：原始论文）
2. E. Schrödinger, "An Undulatory Theory of the Mechanics of Atoms and Molecules", *Phys. Rev.* **28**(6), 1049–1070 (1926). [DOI](https://doi.org/10.1103/PhysRev.28.1049)（A级：原始论文）
3. J. J. Sakurai, *Modern Quantum Mechanics*, 2nd ed., Addison-Wesley, 1994.（B级：权威教材）
4. D. J. Griffiths, *Introduction to Quantum Mechanics*, 3rd ed., Cambridge University Press, 2018.（B级：标准教材）
5. 曾谨言, 《量子力学》卷I, 第5版, 科学出版社, 2013.（B级：中文教材）
6. M. Born, "Zur Quantenmechanik der Stoßvorgänge", *Z. Phys.* **37**, 863–867 (1926). [DOI](https://doi.org/10.1007/BF01397477)（A级：玻恩诠释原始论文）

## 相关条目

- [[wave-function]] — 波函数
- [[people/erwin-schrodinger]] — 埃尔温·薛定谔
- [[people/max-born]] — 马克斯·玻恩
- [[concepts/hilbert-space]] — 希尔伯特空间
- [[concepts/quantization-energy-levels]] — 量子化与能级
