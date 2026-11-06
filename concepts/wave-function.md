---
title: 波函数
alias: Wave Function
description: 量子力学中描述粒子状态的复值函数，其模平方给出概率密度。玻恩于1926年提出模平方的统计诠释。
tags:
  - foundations
  - wave-function
  - probability
  - superposition
type: concept
status: complete
created: 2026-05-08
updated: 2026-05-09
confidence: high
difficulty: intermediate
sources:
  - "M. Born, 'Zur Quantenmechanik der Stoßvorgänge', Z. Phys. 37, 863 (1926)"
  - "J. J. Sakurai, Modern Quantum Mechanics, 2nd ed., 1994"
  - "D. J. Griffiths, Introduction to Quantum Mechanics, 3rd ed., 2018"
---

# 波函数 (Wave Function)

## 概述

波函数（wave function）是量子力学中描述**粒子量子态**（quantum state）的复值函数。通常记为 $\psi(\mathbf{r},t)$，其自变量为空间坐标 $\mathbf{r}$ 和时间 $t$。波函数本身不是可直接测量的物理量，但通过玻恩的统计诠释，其模平方 $|\psi|^2$ 具有确切的物理意义——概率密度。

在希尔伯特空间（Hilbert space）的抽象表述中，量子态用**减粗向量**（ket） $|\psi\rangle$ 表示，波函数 $\psi(\mathbf{r})$ 则是 $|\psi\rangle$ 在位置表象（position representation）下的分量：

$$\psi(\mathbf{r})=\langle\mathbf{r}|\psi\rangle$$

## 定义与基本性质

### 线性空间

所有可能的波函数构成一个**希尔伯特空间**，其内积定义为：

$$\langle\phi|\psi\rangle=\int\phi^*(\mathbf{r})\psi(\mathbf{r})\,\mathrm{d}^3r$$

内积的模（norm）定义为 $\|\psi\|=\sqrt{\langle\psi|\psi\rangle}$。

### 归一化

波函数必须满足**归一化条件**：

$$\int_{-\infty}^{+\infty}|\psi(\mathbf{r},t)|^2\,\mathrm{d}^3r=1$$

或用内积表示为 $\langle\psi|\psi\rangle=1$。归一化意味着在全空间找到粒子的总概率为1。

### 模平方的物理意义

玻恩诠释（1926）：

$$P(\mathbf{r},t)\,\mathrm{d}^3r=|\psi(\mathbf{r},t)|^2\,\mathrm{d}^3r$$

表示在时刻 $t$，于位置 $\mathbf{r}$ 处的体积元 $\mathrm{d}^3r$ 内**发现粒子的概率**。这是量子力学中关于测量结果的最基本定律。

### 相位

波函数是**复值**，可写为：

$$\psi(\mathbf{r})=|\psi(\mathbf{r})|\,\mathrm{e}^{\mathrm{i}\th\eta(\mathbf{r})}$$

其中 $|\psi(\mathbf{r})|$ 为幅（amplitude），$\th\eta(\mathbf{r})$为相位（phase）。

- 相位差不影响概率密度，但在**干涉效应**中至关重要
- 全局相位变换 $\psi\to\psi\,\mathrm{e}^{\mathrm{i}\alpha}$ 不改变任何可观测量（规范不变性）

## 叠加原理

量子系统可处于多个态的**线性叠加**：

$$|\psi\rangle=\sum_n c_n|\phi_n\rangle$$

其中 $|\phi_n\rangle$ 为某算符 $\hat{A}$ 的本征态，$c_n$ 为复数系数。对 $\hat{A}$ 进行测量时，得到本征值 $a_n$ 的概率为 $|c_n|^2$。

这是量子力学与经典物理学最深刻的差异之一：粒子同时"处于"多个状态，而非确定地处于某一状态。

## 波函数坍缩

在测量过程中，波函数发生**坍缩**（collapse）：

$$|\psi\rangle=\sum_n c_n|\phi_n\rangle\x\rightarrow{\text{测量 }\hat{A}}|\phi_k\rangle$$

测量后，波函数"跃迁"到某一本征态 $|\phi_k\rangle$，概率为 $|c_k|^2$。这一过程的动力学机制是**量子测量问题**的核心所在。

## 表象

### 位置表象

已在前面描述。波函数 $\psi(\mathbf{r})=\langle\mathbf{r}|\psi\rangle$。

### 动量表象

通过傅里叶变换与位置表象关联：

$$\tilde{\psi}(\mathbf{p})=\langle\mathbf{p}|\psi\rangle=\frac{1}{(2\pi\hbar)^{3/2}}\int\mathrm{e}^{-\mathrm{i}\mathbf{p}·\mathbf{r}/\hbar}\psi(\mathbf{r})\,\mathrm{d}^3r$$

动量表象下的波函数给出动量的概率密度：

$$P(\mathbf{p})=|\tilde{\psi}(\mathbf{p})|^2$$

### 能量表象

在定态问题中，量子态可展开为哈密顿算符本征态的线性组合：

$$|\psi\rangle=\sum_n c_n|E_n\rangle$$

其中 $c_n=\langle E_n|\psi\rangle$。

## 常见问题

**Q：波函数是物理实在的"波"吗？**

不是。波函数是**概率振幅**（probability amplitude），而非经典意义上的波动。它没有直接的实体对应，仅通过 $|\psi|^2$ 产生统计预测。尽管如此，干涉效应表明波函数具有**相干性**，是其作为物理对象的重要证据。

**Q：为什么波函数必须是复值的？**

复值是量子力学的数学结构所要求的。实数波函数不能描述干涉，也不能满足所有对易关系。复数空间是量子力学的自然数学框架。

## 参考文献

1. M. Born, "Zur Quantenmechanik der Stoßvorgänge", *Z. Phys.* **37**, 863–867 (1926). [DOI](https://doi.org/10.1007/BF01397477)（A级：玻恩诠释原始论文）
2. J. J. Sakurai, *Modern Quantum Mechanics*, 2nd ed., Addison-Wesley, 1994.（B级：权威教材）
3. D. J. Griffiths, *Introduction to Quantum Mechanics*, 3rd ed., Cambridge, 2018.（B级：标准教材）
4. 曾谨言, 《量子力学》卷I, 第5版, 科学出版社, 2013.（B级：中文教材）

## 相关条目

- [[schrodinger-equation]] — 薛定谔方程
- [[concepts/hilbert-space]] — 希尔伯特空间
- [[concepts/wave-function-collapse]] — 波函数坍缩
- [[concepts/quantum-entanglement]] — 量子纠缠
- [[concepts/uncertainty-principle]] — 海森堡不确定性原理
