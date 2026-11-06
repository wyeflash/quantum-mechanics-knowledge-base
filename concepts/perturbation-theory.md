---
title: 微扰理论
description: 从可解模型出发处理小修正的近似方法，是原子、分子、固体和量子场论计算中的基础工具。
tags:
  - foundations
  - perturbation-theory
  - hamiltonian
  - quantum-dynamics
type: concept
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: advanced
sources:
  - "P. A. M. Dirac, The Principles of Quantum Mechanics, Oxford University Press, 1958"
  - "L. D. Landau and E. M. Lifshitz, Quantum Mechanics: Non-Relativistic Theory, 3rd ed., 1977"
  - "D. J. Griffiths, Introduction to Quantum Mechanics, 3rd ed., 2018"
---

# 微扰理论 (Perturbation Theory)

## 概述

微扰理论是一类近似方法：当真实[[hamiltonian|哈密顿量]]可以看作“可精确求解部分”加上“小修正”时，就从已知解出发逐阶计算能级、态矢量或跃迁概率的修正。

$$\hat{H}=\hat{H}_0+\lambda\hat{V}$$

其中 $\hat{H}_0$ 可解，$\hat{V}$ 是微扰，$\lambda$ 是形式上的小参数。

::: info 可信度说明
- **可信度**: ★★★★★（标准量子力学教材一致；适用条件清楚）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 定态非简并微扰

假设

$$\hat{H}_0|n^{(0)}\rangle=E_n^{(0)}|n^{(0)}\rangle$$

能量展开为：

$$E_n=E_n^{(0)}+\lambda E_n^{(1)}+\lambda^2E_n^{(2)}+\cdots$$

一阶能量修正为：

$$E_n^{(1)}=\langle n^{(0)}|\hat{V}|n^{(0)}\rangle$$

二阶能量修正为：

$$E_n^{(2)}=\sum_{m\neq n}\frac{|\langle m^{(0)}|\hat{V}|n^{(0)}\rangle|^2}{E_n^{(0)}-E_m^{(0)}}$$

## 简并微扰

若 $\hat{H}_0$ 的某个能级有多个线性独立本征态，必须先在简并子空间内对微扰矩阵对角化。否则普通非简并公式会失效。精细结构、Zeeman 效应等都体现了简并与对称性的重要性。

## 含时微扰

若微扰显含时间，例如外加电磁场：

$$\hat{H}(t)=\hat{H}_0+\hat{V}(t)$$

就需要含时微扰理论来计算跃迁概率。这是吸收、发射、散射以及费米黄金规则的基础。

## 适用边界

微扰理论不是万能的。它要求修正足够小，且级数行为可控。在强耦合、近简并、相变或非微扰现象中，必须使用变分法、数值对角化、路径积分、重整化群或其他方法。

## 流传误区

- ❌ “微扰理论只是粗糙估算” → ✅ 在适用范围内，它能给出高精度预测，如 Lamb 位移、精细结构修正等。
- ❌ “只要微扰项看起来小就一定可用” → ✅ 能级间隔、简并性和级数收敛性同样关键。
- ❌ “微扰理论只属于量子力学” → ✅ 它广泛存在于经典力学、电磁学、统计物理和量子场论。

## 相关条目

- [[hamiltonian]] — 哈密顿量
- [[time-evolution]] — 量子态时间演化
- [[hydrogen-atom]] — 氢原子
- [[observables]] — 可观测量
- [[operator-theory]] — 算符理论

## 参考文献

1. P. A. M. Dirac, *The Principles of Quantum Mechanics*, 4th ed., Oxford University Press, 1958.（A级教材）
2. L. D. Landau and E. M. Lifshitz, *Quantum Mechanics: Non-Relativistic Theory*, 3rd ed., Pergamon, 1977.（B级教材）
3. D. J. Griffiths, *Introduction to Quantum Mechanics*, 3rd ed., Cambridge University Press, 2018.（B级教材）
