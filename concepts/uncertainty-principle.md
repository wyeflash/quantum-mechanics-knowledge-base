---
title: 海森堡不确定性原理
created: 2026-05-07
updated: 2026-05-09
type: concept
status: complete
tags: [uncertainty-principle, foundations, beginner]
sources: []
confidence: high
difficulty: intermediate
---

# 海森堡不确定性原理 (Heisenberg Uncertainty Principle)

## 概述

海森堡不确定性原理是量子力学最具标志性的特征之一，由 [[werner-heisenberg|维尔纳·海森堡]] 于 1927 年提出。它指出：微观粒子的某些成对的物理量（如位置与动量）**无法同时被精确确定**。这不是测量技术的局限，而是量子态的内在属性。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Heisenberg 1927 原始论文、Robertson 一般化证明、Griffiths/Sakurai 教材交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3][4]
:::

## 数学表述

### 位置与动量

最常见的形式是位置 $x$ 与动量 $p_x$ 的不确定关系：

$$\Delta x · \Delta p_x \geq \frac{\hbar}{2}$$

其中 $\Delta x$ 和 $\Delta p_x$ 分别为位置和动量的**标准差**（或均方根差），$\hbar = h / 2\pi \approx 1.055 \times 10^{-34}\,\text{J· s}$ 为约化普朗克常数。

### 一般化表述：Robertson 不等式

1929 年，罗伯逊（H. P. Robertson）将不确定性原理推广到任意两个不对易的可观测量 $\hat{A}$ 和 $\hat{B}$：

$$\sigma_A \sigma_B \geq \frac{1}{2}|\langle[\hat{A}, \hat{B}]\rangle|$$

其中 $[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}$ 为对易子。对于 $\hat{x}$ 和 $\hat{p}_x$，$[\hat{x}, \hat{p}_x] = i\hbar$，即退化为海森堡关系。

### 能量与时间

$$\Delta E · \Delta t \geq \frac{\hbar}{2}$$

这一形式的物理含义略微不同：$\Delta t$ 不是时间本身的不确定度，而是系统发生可观测变化所需的**特征时间**。如果系统在时间 $\Delta t$ 内保持不变，则其能量可以确定到 $\Delta E \sim \hbar / \Delta t$ 的精度。

## 物理根源

### 波动本质的必然结果

不确定性原理的深层原因在于粒子的**波动本质**：

- 在波动图像中，"位置"对应于波包的局域化程度
- "动量"对应于波数（空间频率）$k = p/\hbar$
- 根据傅里叶分析的基本定理：一个波包越局域化（$\Delta x$ 小），其波数就越分散（$\Delta k$ 大），反之亦然

$$\Delta x · \Delta k \geq \frac{1}{2}$$

代入 $p = \hbar k$ 即得海森堡关系。这是一个数学定理，与量子力学的具体形式无关——只要物理实体具有波动性质，就必然逃不了这个关系。

### 对易关系

从算符角度看，不对易子 $[\hat{x}, \hat{p}_x] = i\hbar \neq 0$ 意味着这两个可观测量**没有共同的本征函数**。即使系统处于 $\hat{x}$ 的本征态（$\Delta x = 0$），它必然是多个 $\hat{p}_x$ 本征态的叠加，从而 $\Delta p_x \to \infty$。

## 实验表征

### 单缝衍射中的不确定性

将粒子的位置精确限定在缝缝处（$\Delta x \sim a$，$a$ 为缝宽），根据不确定性原理，其动量在 $y$ 方向的不确定度为：

$$\Delta p_y \geq \frac{\hbar}{2a}$$

这导致粒子在 $y$ 方向产生一定的角度分散，正是干涉条纹形成的物理原因。

### 能级宽度

原子激发态的**能级宽度**（lifetime $\tau$ 与 energy width $\Gamma$）满足：

$$\Gamma · \tau \sim \hbar$$

这为光谱线的自然线宽提供了基本限制。

## 流传误区

- ❌ "测量行为干扰了系统，导致了不确定性" → ✅ 不确定性是**量子态的内在属性**，不是测量技术不足或外部干扰。即使不测量，粒子也不同时具有确定的位置和动量
- ❌ "技术进步可以克服不确定性" → ✅ 不可能。不确定性是基本物理定律，与测量精度无关
- ❌ "不确定性只对微观世界成立" → ✅ 它对**所有尺度**均成立，但 $h$ 极小导致宏观效应完全可忽略
- ❌ "$\Delta x \Delta p \geq h$" → ✅ 正确的下限是 $\hbar/2$，不是 $h$。这个因子1/2以及标准差的定义
- ❌ "不确定性意味着我们不知道粒子的确切位置" → ✅ 不是"知识不足"，而是粒子**本身就没有**确切的位置和动量

## 相关条目

- [[quantum-superposition|量子叠加态]]
- [[wave-function-collapse|波函数坍缩]]
- [[quantum-entanglement|量子纠缠]]
- [[complementarity-principle|互补原理]]
- [[hilbert-space|希尔伯特空间]]
- [[matter-wave|物质波]]
- [[werner-heisenberg|维尔纳·海森堡]]
- [[1927-fifth-solvay-conference|1927 索尔维会议]]

## 参考文献

1. W. Heisenberg, "Über den anschaulichen Inhalt der quantentheoretischen Kinematik und Mechanik," *Zeitschrift für Physik* **43**, 172–198 (1927). [原始论文]
2. H. P. Robertson, "The Uncertainty Principle," *Physical Review* **34**, 163 (1929). [DOI](https://doi.org/10.1103/PhysRev.34.163)
3. D. J. Griffiths, *Introduction to Quantum Mechanics*, 3rd ed., Cambridge University Press, 2018, §2.4.（B级教材）
4. J. J. Sakurai and J. Napolitano, *Modern Quantum Mechanics*, 3rd ed., Cambridge University Press, 2021, §1.4.（B级教材）
