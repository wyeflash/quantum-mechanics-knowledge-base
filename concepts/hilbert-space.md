---
title: 希尔伯特空间
created: 2026-05-07
updated: 2026-05-09
type: concept
status: complete
tags: [hilbert-space, linear-algebra, foundations, beginner]
sources: []
confidence: high
difficulty: advanced
---

# 希尔伯特空间 (Hilbert Space)

## 概述

希尔伯特空间是量子力学的数学基础：**每一个量子系统的所有可能状态构成一个复内积空间**，称为希尔伯特空间。量子力学的所有规律都是在这个空间中的操作规则。它将抽象的线性代数与具体的物理现象连接起来，是狄拉克、海森堡和薛定谔等人建立现代量子力学的关键数学框架。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Dirac 符号法、von Neumann 公理化、Griffiths/Sakurai 教材交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3][4]
:::

## 定义与基本性质

### 复内积空间

希尔伯特空间 $\mathcal{H}$ 是一个定义在 $\mathbb{C}$ 上的完备内积空间，具有以下结构：

1. **向量空间**：元素 $|\psi\rangle$ 可以加法和数乘
2. **内积**：$⟨\phi|\psi\rangle \in \mathbb{C}$，满足 $\langle\phi|\psi\rangle = \langle\psi|\phi\rangle^*$
3. **完备性**：任何柯西序列均收敛

内积的正定性予以概率解释以数学基础：

$$\langle\psi|\psi\rangle \geq 0, \quad \langle\psi|\psi\rangle = 0 \Left\rightarrow |\psi\rangle = 0$$

### 基底与维度

希尔伯特空间可以是**有限维**或**无穷维**的：

- **有限维**：如自旋-1/2 系统，维度为 2，基底为 $\{|\uparrow\rangle, |\downarrow\rangle\}$
- **无穷维**：如位置空间中的粒子，基底为连续的 $\{|x\rangle\}$

## 量子力学中的基本操作

### 态矢量（Ket）与对偶矢量（Bra）

狄拉克用 $\langle\psi|$ （bra）和 $|\psi\rangle$ （ket）表示对偶矢量：

$$\langle\phi|\psi\rangle = \int \phi^*(x) \psi(x)\, dx$$

这种记号法极大地简化了量子力学的数学表述。

### 算符

可观测量对应于**自伴算符** $\hat{A}$ （$\hat{A}^\dagger = \hat{A}$）。其本征值 $a_n$ 和本征态 $|\phi_n\rangle$ 满足：

$$\hat{A}|\phi_n\rangle = a_n |\phi_n\rangle$$

自伴算符的本征值一定是**实数**，不同本征值对应的本征态**正交**。

### 对易关系

两个算符的**对易子**（commutator）：

$$[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}$$

如果 $[\hat{A}, \hat{B}] = 0$，则两个可观测量**可同时精确测量**，它们有共同的本征态。例如，能量和角动量大小 $[\hat{H}, \hat{L}^2] = 0$。

如果 $[\hat{A}, \hat{B}] \neq 0$，则存在海森堡不确定性关系。

## 完备性与正交性

### 完备正交归一化基

对于任何自伴算符，其本征态构成希尔伯特空间的一个**正交归一化基**：

$$\langle\phi_m|\phi_n\rangle = \delta_{mn}, \quad \sum_n |\phi_n\rangle\langle\phi_n| = \hat{I}$$

任何态都可以展开为：

$$|\psi\rangle = \sum_n c_n |\phi_n\rangle, \quad c_n = \langle\phi_n|\psi\rangle$$

### 测量公理

对于可观测量 $\hat{A}$，测量结果为本征值 $a_n$ 的概率为：

$$P(a_n) = |c_n|^2 = |\langle\phi_n|\psi\rangle|^2$$

期望值为：

$$\langle A\rangle = \langle\psi|\hat{A}|\psi\rangle = \sum_n a_n |c_n|^2$$

这是量子力学的第一公理的核心内容：测量结果的概率化规则。

## 张量积与外积

两个系统的复合空间是张量积：

$$\mathcal{H}_{AB} = \mathcal{H}_A \o\times \mathcal{H}_B$$

其维度为 $\dim(\mathcal{H}_{AB}) = \dim(\mathcal{H}_A) \times \dim(\mathcal{H}_B)$。这是量子纠缠的数学基础：整体态生活在张量积空间中，而不是各自的子空间。

## 流传误区

- ❌ "希尔伯特空间就是普通的三维空间" → ✅ 希尔伯特空间是**抽象的复内积空间**，粒子的位置空间只是其中一个特殊表示
- ❌ "波函数就是希尔伯特空间中的向量" → ✅ 正确。但波函数是在**位置基底** $|\mathbf{r}\rangle$ 下的分量 $\psi(\mathbf{r}) = \langle\mathbf{r}|\psi\rangle$
- ❌ "希尔伯特空间的维度就是我们能感知到的维度" → ✅ 量子系统的状态空间维度可以远小于或远大于经验空间维度（如自旋-1/2 系统的状态空间是 2 维的）

## 相关条目

- [[quantum-superposition|量子叠加态]]
- [[uncertainty-principle|不确定性原理]]
- [[quantum-entanglement|量子纠缠]]
- [[wave-function-collapse|波函数坍缩]]
- [[operator-theory|算符理论]]
- [[john-von-neumann|约翰·冯·诺依曼]]
- [[paul-dirac|保罗·狄拉克]]

## 参考文献

1. P. A. M. Dirac, *The Principles of Quantum Mechanics*, 4th ed., Oxford University Press, 1958, §1–3.（B级教材）
2. J. von Neumann, *Mathematische Grundlagen der Quantenmechanik*, Springer, Berlin, 1932.（B级专著）
3. D. J. Griffiths, *Introduction to Quantum Mechanics*, 3rd ed., Cambridge University Press, 2018, §3.1–3.6.（B级教材）
4. J. J. Sakurai and J. Napolitano, *Modern Quantum Mechanics*, 3rd ed., Cambridge University Press, 2021, §1.1–1.5.（B级教材）
