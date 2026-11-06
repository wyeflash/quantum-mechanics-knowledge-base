---
title: 量子叠加态
created: 2026-05-07
updated: 2026-05-09
type: concept
status: complete
tags: [superposition, foundations, beginner]
sources: []
confidence: high
difficulty: intermediate
---

# 量子叠加态 (Quantum Superposition)

## 概述

量子叠加态是量子力学最核心的原理之一：如果一个量子系统可以处于状态 $|\psi_1\rangle$，也可以处于状态 $|\psi_2\rangle$，那么它也可以处于这两个状态的**任意线性组合**：

$$|\psi\rangle = c_1 |\psi_1\rangle + c_2 |\psi_2\rangle$$

其中 $c_1$ 和 $c_2$ 是复数系数。在未测量之前，量子系统**同时处于多个状态**之中，而非经典意义上的"要么 A、要么 B"。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Dirac 符号法、Griffiths/Sakurai 教材交叉验证，实验验证无数）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 数学表述

### 波函数的叠加

在位置空间中，波函数的叠加意味着：

$$\psi(\mathbf{r}) = c_1 \psi_1(\mathbf{r}) + c_2 \psi_2(\mathbf{r})$$

概率密度为：

$$|\psi(\mathbf{r})|^2 = |c_1|^2 |\psi_1(\mathbf{r})|^2 + |c_2|^2 |\psi_2(\mathbf{r})|^2 + 2\,\text{Re}\left(c_1^* c_2 \psi_1^* \psi_2\right)$$

第三项是**干涉项**，是量子行为与经典概率的本质区别。

### 归一化

如果 $|\psi\rangle$ 代表物理态，则必须满足**归一化**条件：

$$\langle\psi|\psi\rangle = |c_1|^2 + |c_2|^2 = 1$$

其中 $|c_1|^2$ 和 $|c_2|^2$ 分别是测量时发现系统处于 $|\psi_1\rangle$ 和 $|\psi_2\rangle$ 的**概率**。

### 复数幅的物理意义

系数 $c_1$ 和 $c_2$ 是复数，可以写为：

$$c_n = |c_n| e^{i\phi_n}$$

**幅值** $|c_n|$ 决定概率，**相位** $\phi_n$ 决定干涉图样。这是叠加态最深刻的特征：不仅是"混合"，而是带有可控**相干性**的波动组合。

## 经典例子

### 双缝实验

[[double-slit-experiment|双缝实验]] 是叠加态最直观的演示。电子通过双缝时的波函数为：

$$\psi = \psi_L + \psi_R$$

其中 $\psi_L$ 和 $\psi_R$ 分别代表通过左缝和右缝的幅。探测屏上的概率分布为：

$$|\psi|^2 = |\psi_L|^2 + |\psi_R|^2 + 2\,\text{Re}(\psi_L^* \psi_R)$$

干涉项 $2\,\text{Re}(\psi_L^* \psi_R)$ 导致了干涉条纹的出现。如果在缝旁放置探测器确定电子走哪条路，叠加态被破坏，干涉条纹便消失。

### 萨姆尔笔演示

萨姆尔（Samuel）在 1980 年代发明的**萨姆尔笔** (Stern-Gerlach) 类似装置可以演示磁矩的叠加：

$$|\psi\rangle = \frac{1}{\sqrt{2}}(|\uparrow\rangle + |\downarrow\rangle)$$

如果将这个态输入第二个磁铁检测器（轴与第一个成 $90\degree$），结果发现磁矩也可以处于这两个方向的叠加态——证明叠加不是"经典不确定性"，而是量子的本质属性。

## 与经典概率的区别

| 特征 | 经典概率 | 量子叠加 |
|------|----------|---------|
| 状态描述 | 经典状态的统计混合 | 波函数的线性组合 |
| 概率 | 正确计算 | $|\psi|^2$ 包含干涉项 |
| 相位 | 无物理意义 | 决定干涉图样 |
| 测量 | 只是更新知识 | 主动改变系统状态 |

## 流传误区

- ❌ "量子叠加是两个状态之一，只是我们不知道是哪个" → ✅ 量子叠加不是"要么 A 要么 B"，而是**同时是 A 和 B**。如果只是不确定，就不会有干涉条纹
- ❌ "观测者的意识决定了结果" → ✅ 量子力学中的测量是**物理互作用**，与意识无关。"观测者"可以是任何宏观仪器
- ❌ "宏观世界也是叠加态" → ✅ 理论上宏观物体也可以处于叠加态，但由于**退相干** — 与环境的相互作用 — 叠加态在 $10^{-23}$ 秒内就消失了
- ❌ "叠加态是一种数学抽象，没有物理实在性" → ✅ 叠加态有直接的实验后果（干涉、量子计算等），是微观世界的真实属性

## 相关条目

- [[wave-function-collapse|波函数坍缩]]
- [[quantum-entanglement|量子纠缠]]
- [[double-slit-experiment|双缝实验]]
- [[uncertainty-principle|不确定性原理]]
- [[decoherence|退相干]]
- [[hilbert-space|希尔伯特空间]]
- [[copenhagen-interpretation|哥本哈根诠释]]

## 参考文献

1. P. A. M. Dirac, *The Principles of Quantum Mechanics*, 4th ed., Oxford University Press, 1958, §1–2.（B级教材）
2. D. J. Griffiths, *Introduction to Quantum Mechanics*, 3rd ed., Cambridge University Press, 2018, §2.1.（B级教材）
3. J. J. Sakurai and J. Napolitano, *Modern Quantum Mechanics*, 3rd ed., Cambridge University Press, 2021, §1.1.（B级教材）
