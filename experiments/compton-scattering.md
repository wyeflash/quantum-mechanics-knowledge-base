---
title: 康普顿散射
created: 2026-05-07
updated: 2026-05-09
type: experiment
status: complete
tags: [experiment, wave-particle-duality]
sources: []
confidence: high
difficulty: beginner
---

# 康普顿散射 (Compton Scattering)

## 概述

1923 年，美国物理学家阿瑟·缅因·康普顿（Arthur Holly Compton）研究 X 射线被电子散射的现象时，发现散射后的 X 射线**波长变长**。这一结果**无法用经典波动论解释**，却可以被"光子与电子的弹性碰撞"模型完美预测。康普顿散射为光的**粒子性**提供了决定性实验证据，被认为是量子力学发展史上最重要的实验之一。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Compton 1923 原始论文及后世标准教材交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 实验动机

### 经典波动论的困境

根据经典电磁理论，X 射线是一种电磁波，被自由电子散射时应产生**Doppler 红移**，但波长改变应该极小。然而 Compton 发现，散射后的 X 射线波长改变量是**明显且可量化**的。

更严重的是，波长改变量**只与散射角有关**，与入射光的波长、材料和强度均无关系——这完全违背经典波动论的预期。

## 实验装置

```
锂 X 射线管
    ↓  \lambda = 0.071 nm
石墨散射靴
    ↓  \theta
钻石晶体谱仪 (Bragg 方法)
    ↓
电离室探测器
```

### 关键组件

- **永磁银 X 射线管**：产生单能量 X 射线（$K_lpha$ 线，$\lambda_0 pprox 0.071\,	ext{nm}$）
- **散射靴**：石墨（轻元素，减少光子被多电子吸收的模糊效应）
- **钻石晶体谱仪**：利用 Bragg 散射公式 $n\lambda = 2d\sin	h\eta$ 精确测量散射后的波长
- **电离室**：测量散射 X 射线的强度

## 实验结果

### 波长变化与散射角

Compton 测量了不同散射角 $	h\eta$ 对应的波长 $\lambda'$ ：

| 散射角 $	h\eta$ | 波长变化 $\Delta\lambda$ (pm) | 经典预期 |
|----------------|----------------------|----------|
| $0^\circ$      | 0                    | 0        |
| $45^\circ$     | 0.71                 | 0        |
| $90^\circ$     | 2.43                 | 0        |
| $135^\circ$    | 4.06                 | 0        |

波长变化**随角度明显增加**，与经典波动论预期的"零变化"形成鲜明对比。

### 康普顿公式

Compton 将光子视为能量为 $E = h
u$ 、动量为 $p = h/\lambda$ 的粒子，与静止电子发生弹性碰撞，利用**能量守恒**与**动量守恒**推导得到：

$$
\Delta\lambda = \lambda' - \lambda = rac{h}{m_e c}(1 - \cos	h\eta) = \lambda_C (1 - \cos	h\eta)
$$

其中 $\lambda_C = rac{h}{m_e c} = 2.426 	imes 10^{-12}\,	ext{m} = 2.426\,	ext{\pm}$ 为**康普顿波长**（Compton wavelength）。

实验测量的波长变化与该公式的理论曲线**在实验误差范围内完全符合**。

### 碰撞后电子的动能

根据动量守恒，被碰撞电子获得的反冲动能：

$$
K_e = h
u - h
u' = h
u rac{\lambda_C(1-\cos	h\eta)}{\lambda + \lambda_C(1-\cos	h\eta)}
$$

Compton 同时通过磁场偏转法测量了散射电子的动能，实验结果与光子理论预言**在 1% 以内一致**。

## 科学意义

1. **光的粒子性的决定性证据**：康普顿散射补充了光电效应的"能量粒子性"，证明光还具有"动量粒子性"，是 [[wave-particle-duality|波粒二象性]] 的关键实验支柱。
2. **量子力学的实验基础**：证明了 [[photon|光子]] 具有粒子的全部属性（质量、能量、动量），而不仅仅是"能量包"。
3. **光学范式的发展**：引导了**量子电动力学**（Quantum Electrodynamics, QED）的发展，它是描述光子与物质相互作用的最成功理论。

## References

1. **A. H. Compton** (1923). "A Quantum Theory of the Scattering of X-rays by Light Elements." *Physical Review*, 21(5), 483. [A 级 — 原始实验论文]
2. **R. H. Stuewer** (1975). *The Compton Effect*. Science History Publications. [B 级 — 科学史专著]
3. **D. J. Griffiths** (2018). *Introduction to Quantum Mechanics*, 3rd ed., Chapter 3. Cambridge University Press. [B 级 — 标准教材]
4. **A. H. Compton & S. K. Allison** (1935). *X-rays in Theory and Experiment*. Van Nostrand. [B 级 — 权威专著]

## 流传误区

::: warning
- **误区一**："康普顿散射证明了光是粒子。"
  - **澄清**：实验证明光具有**粒子性**，但**未否定**光的波动性，二者是并存的（波粒二象性）。
- **误区二**："康普顿散射是光子和电子之间的非弹性碰撞。"
  - **澄清**：在量子电动力学框架下，散射是**一个**光子与**一个**电子的弹性碰撞，但在 QED 中它是一个虚抽发射过程，并非经典意义上的"两个碳小球"碰撞。
- **误区三**："康普顿散射只发生在 X 射线上。"
  - **澄清**：康普顿散射定律对任何能量**远高于**电子绑合能的电磁辐射均成立（如 $\gamma$ 射线、高能光子），只是 X 射线的波长变化更容易测量。
:::
