---
title: 时间演化
description: 量子态如何随时间变化的动力学规则，封闭系统由薛定谔方程和幺正演化描述。
tags:
  - foundations
  - quantum-dynamics
  - hamiltonian
  - schrodinger
type: concept
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: advanced
sources:
  - "E. Schrödinger, Quantisierung als Eigenwertproblem, Ann. Phys. 79, 361 (1926)"
  - "P. A. M. Dirac, The Principles of Quantum Mechanics, Oxford University Press, 1958"
  - "J. J. Sakurai and J. Napolitano, Modern Quantum Mechanics, 3rd ed., 2021"
---

# 时间演化 (Time Evolution)

## 概述

量子态时间演化描述系统从一个时刻到另一个时刻如何变化。对封闭系统，演化由[[hamiltonian|哈密顿量]]生成，并由薛定谔方程控制：

$$i\hbar\frac{\partial}{\partial t}|\psi(t)\rangle=\hat{H}|\psi(t)\rangle$$

::: info 可信度说明
- **可信度**: ★★★★★（薛定谔 1926 原始论文与现代教材一致）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 幺正演化

若系统封闭且哈密顿量自伴，则时间演化算符 $U(t)$ 是幺正的：

$$|\psi(t)\rangle=U(t)|\psi(0)\rangle,\quad U^\dagger U=I$$

幺正性保证内积与总概率守恒。若 $\hat{H}$ 不显含时间，则：

$$U(t)=e^{-i\hat{H}t/\hbar}$$

## 能量本征态展开

若 $\hat{H}|E_n\rangle=E_n|E_n\rangle$，初态可展开为：

$$|\psi(0)\rangle=\sum_n c_n|E_n\rangle$$

则演化为：

$$|\psi(t)\rangle=\sum_n c_n e^{-iE_nt/\hbar}|E_n\rangle$$

这说明量子动力学的许多现象来自不同能量分量之间的相对相位演化。

## 薛定谔绘景与海森堡绘景

在薛定谔绘景中，态随时间变化，算符通常不随时间变化。在海森堡绘景中，态固定，算符随时间变化：

$$\frac{\mathrm{d}\hat{A}_H}{\mathrm{d}t}=\frac{i}{\hbar}[\hat{H},\hat{A}_H]+\left(\frac{\partial \hat{A}}{\partial t}\right)_H$$

两种绘景给出相同实验预测，只是把时间依赖分配给不同数学对象。

## 开放系统

真实系统常与环境相互作用。对子系统而言，演化通常不再是简单幺正的，需要用[[density-matrix|密度矩阵]]、主方程、量子信道等工具描述。这是[[decoherence|退相干]]与量子信息噪声理论的基础。

## 与测量的区别

封闭系统的薛定谔演化是连续、确定、幺正的；理想测量中的状态更新则通常是非幺正、概率性的。这种双重规则构成量子测量问题的重要张力。

## 流传误区

- ❌ “量子演化本质上总是随机的” → ✅ 封闭系统的态矢量演化是确定的；随机性体现在测量结果。
- ❌ “定态完全不随时间变化” → ✅ 定态有整体相位演化，只是所有可观测概率分布不变。
- ❌ “退相干违反薛定谔方程” → ✅ 整体系统仍可幺正演化，局部系统因偏迹表现为非幺正有效演化。

## 相关条目

- [[hamiltonian]] — 哈密顿量
- [[schrodinger-equation]] — 薛定谔方程
- [[quantum-state]] — 量子态
- [[density-matrix]] — 密度矩阵
- [[commutator]] — 对易关系

## 参考文献

1. E. Schrödinger, "Quantisierung als Eigenwertproblem", *Annalen der Physik* **79**, 361-376 (1926). [DOI](https://doi.org/10.1002/andp.19263840404)（A级原始论文）
2. P. A. M. Dirac, *The Principles of Quantum Mechanics*, 4th ed., Oxford University Press, 1958.（A级教材）
3. J. J. Sakurai and J. Napolitano, *Modern Quantum Mechanics*, 3rd ed., Cambridge University Press, 2021.（B级教材）
