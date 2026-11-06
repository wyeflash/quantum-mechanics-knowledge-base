---
title: 矩阵力学与波动力学
created: 2026-05-07
updated: 2026-05-09
type: comparison
status: complete
tags: [comparison, foundations, matrix-mechanics, wave-mechanics, history]
sources: []
confidence: high
difficulty: advanced
---

# 矩阵力学与波动力学 (Matrix Mechanics vs Wave Mechanics)

## 概述

1925–1926 年，量子力学在同一年内诞生了两套看似截然不同的数学形式：**海森堡的矩阵力学**与**薛定谔的波动力学**。前者以代数方法彻底抛弃经典图像，后者以微分方程延续波动直觉。两者究竟有何异同？它们又如何被证明是等价的？

::: info 可信度说明
- **可信度**: ★★★★★（基于 Heisenberg 1925、Schrödinger 1926 原始论文及标准教材）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

---

## 核心对比一览

| 维度 | 矩阵力学 (Matrix Mechanics) | 波动力学 (Wave Mechanics) |
|------|---------------------------|--------------------------|
| **创立者** | [[werner-heisenberg|海森堡]] (1925) | [[erwin-schrodinger|薛定谔]] (1926) |
| **数学工具** | 无限维矩阵、对易关系 | 偏微分方程 (薛定谔方程) |
| **物理图像** | 无经典对应，强调可观测量 | 延续波动图像，有经典类比 |
| **基本方程** | $[x,p] = i\hbar$ | $i\hbar \frac{\partial}{\partial t}\psi = \hat{H}\psi$ |
| **求解方式** | 矩阵对角化、本征值问题 | 求解微分方程的边值问题 |
| **波函数角色** | 无显式波函数概念 | $\psi$ 是核心物理量 |
| **哲学倾向** | 实证主义，排斥不可观测量 | 实在论，试图恢复连续性 |

---

## 矩阵力学：代数革命

### 核心思想

海森堡在 [[1925-heisenberg-matrix-mechanics|1925 年]] 提出的核心洞见是：

> **物理学只应讨论原则上可观测的量。**

他彻底抛弃了电子轨道的经典概念，用一组**跃迁振幅** $x_{nm}$ 来描述系统——其中下标 $n,m$ 代表两个量子态。这些振幅构成一个**矩阵**，其乘法不满足交换律：

$$[x, p] = xp - px = i\hbar I$$

### 求解氢原子

矩阵力学求解氢原子能级时，需要将哈密顿量矩阵对角化，其本征值即为允许的能量：

$$H_{nm} = E_n \delta_{nm}$$

这一过程数学上严谨，但计算极其繁复，缺乏直观的物理图像。

---

## 波动力学：微分方程的延续

### 核心思想

薛定谔受 [[1924-de-broglie-matter-wave|德布罗意物质波]] 启发，试图为量子系统找到一个**波动方程**。1926 年，他提出了著名的**含时薛定谔方程**：

$$i\hbar \frac{\partial}{\partial t}\psi(\mathbf{r},t) = \left[-\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r})\right]\psi(\mathbf{r},t)$$

以及**定态薛定谔方程**：

$$\hat{H}\psi_n = E_n\psi_n$$

### 求解氢原子

薛定谔将氢原子的库仑势代入方程，求解分离变量后的径向方程，直接得到了与玻尔模型一致的能级公式：

$$E_n = -\frac{13.6\ \text{eV}}{n^2}$$

更令人惊讶的是，方程还自动给出了**角动量量子化**（$l = 0,1,\dots,n-1$）和**磁量子数**（$m = -l,\dots,l$），这些都是玻尔模型人为引入的。

---

## 等价性证明

### 薛定谔的证明 (1926)

薛定谔本人率先证明了两种形式的等价性。他展示了：

1. **波函数 ↔ 矩阵元素**：矩阵元素可以通过波函数积分得到：
   $$x_{nm} = \int \psi_n^*(\mathbf{r}) \, x \, \psi_m(\mathbf{r}) \, d^3r$$

2. **算符 ↔ 微分算子**：位置算符 $x$ 对应乘以 $x$，动量算符 $p$ 对应微分算子 $-i\hbar \frac{\partial}{\partial x}$

3. **对易关系自动满足**：上述对应自然导出 $[x,p] = i\hbar$

### 狄拉克的更深层统一 (1930)

[[paul-dirac|狄拉克]]（本知识库暂无专页）在《量子力学原理》中，用**抽象希尔伯特空间**统一了两种表述：

> 矩阵力学是**离散基**下的表述，波动力学是**位置基**（连续基）下的表述。两者是同一抽象数学结构的不同表象。

这一观点被总结为**表象理论**（Representation Theory），成为现代量子力学的标准语言。

---

## 两种方法的现代地位

### 波动力学的主导

在实际计算中，**波动力学几乎完全占据主导地位**，原因包括：

- 微分方程比矩阵对角化更直观、更易计算
- 波函数 $|\psi|^2$ 直接给出概率密度，物理图像清晰
- 化学、凝聚态物理等领域严重依赖波函数方法

### 矩阵力学的遗产

然而，矩阵力学的思想并未消失：

- **抽象代数结构**（对易关系、算符代数）是现代量子力学的语言核心
- **矩阵形式**在有限能级系统（如[[quantum-computing|量子计算]]中的量子比特）中重新成为主角
- **海森堡绘景**（Heisenberg Picture）是处理含时问题的重要工具

---

## 哲学分歧的延续

### 海森堡：实证主义

海森堡强调物理学的任务是**建立可观测量之间的关系**，而非追问"电子究竟在哪里"。

### 薛定谔：实在论

薛定谔最初希望波函数代表某种真实的物理波（如电荷密度波），但这一解释很快被发现与多粒子系统矛盾。他后来对哥本哈根诠释感到深深不满。

> 这一哲学分歧至今仍在 [[interpretations/index|量子力学诠释]] 中延续。

---

## 流传误区

- ❌ "矩阵力学已经被波动力学取代" → ✅ 两者等价，波动力学更方便计算，但矩阵代数的抽象结构是理论基础
- ❌ "薛定谔方程可以从经典波动方程推导" → ✅ 薛定谔方程是量子力学的基本假设，无法从经典理论严格推导
- ❌ "矩阵力学无法处理连续谱" → ✅ 矩阵力学可以处理连续谱（需引入广义矩阵/分布），只是不如波动力学方便
- ❌ "海森堡和薛定谔互相欣赏" → ✅ 两人最初关系紧张，薛定谔甚至说"两种理论我都讨厌，但我更讨厌矩阵力学"

---

## 相关条目

- [[1925-heisenberg-matrix-mechanics|1925：海森堡矩阵力学]]
- [[werner-heisenberg|维尔纳·海森堡]]
- [[erwin-schrodinger|埃尔温·薛定谔]]
- [[1924-de-broglie-matter-wave|1924：德布罗意物质波]]
- [[quantization-energy-levels|量子化与能级]]
- [[hilbert-space|希尔伯特空间]]
- [[uncertainty-principle|不确定性原理]]
- [[copenhagen-interpretation|哥本哈根诠释]]

## 参考文献

1. W. Heisenberg, "Über quantentheoretischer Umdeutung kinematischer und mechanischer Beziehungen," *Zeitschrift für Physik* **33**, 879 (1925). [原始论文]
2. E. Schrödinger, "Quantisierung als Eigenwertproblem," *Annalen der Physik* **79**, 361 (1926). [原始论文]
3. E. Schrödinger, "Über das Verhältnis des Heisenberg-Born-Jordanschen Quantenmechanik zu der meinen," *Annalen der Physik* **79**, 734 (1926). [等价性证明]
4. P. A. M. Dirac, *The Principles of Quantum Mechanics*, 4th ed., Oxford University Press, 1958. [标准教材]
