---
title: 对易关系
description: 量子力学中描述算符相容性与不可同时精确测量性的核心结构，连接矩阵力学、不确定性原理和角动量代数。
tags:
  - foundations
  - operator-theory
  - linear-algebra
  - uncertainty-principle
type: concept
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: advanced
sources:
  - "M. Born and P. Jordan, Zur Quantenmechanik, Z. Phys. 34, 858 (1925)"
  - "W. Heisenberg, Über den anschaulichen Inhalt der quantentheoretischen Kinematik und Mechanik, Z. Phys. 43, 172 (1927)"
  - "J. J. Sakurai and J. Napolitano, Modern Quantum Mechanics, 3rd ed., 2021"
---

# 对易关系 (Commutator)

## 概述

对易关系是[[operator-theory|算符理论]]进入量子力学后出现的核心结构。两个算符 $\hat{A}$ 与 $\hat{B}$ 的对易子定义为：

$$[\hat{A},\hat{B}]=\hat{A}\hat{B}-\hat{B}\hat{A}$$

若 $[\hat{A},\hat{B}]=0$，称二者对易；否则称不对易。不对易性是量子力学区别于经典物理的深层标志之一。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Born-Jordan 1925、Heisenberg 1927 与现代教材）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 正则对易关系

位置与动量满足最著名的正则对易关系：

$$[\hat{x},\hat{p}_x]=i\hbar$$

三维形式为：

$$[\hat{x}_i,\hat{p}_j]=i\hbar\delta_{ij},\quad [\hat{x}_i,\hat{x}_j]=0,\quad [\hat{p}_i,\hat{p}_j]=0$$

这条关系是[[matrix-mechanics|矩阵力学]]与波动力学统一的关键，也构成正则量子化的出发点。

## 与不确定性原理

对任意两个可观测量 $A$ 与 $B$，Robertson 不等式给出：

$$\Delta A\,\Delta B\geq \frac{1}{2}|\langle[\hat{A},\hat{B}]\rangle|$$

把 $\hat{x}$ 与 $\hat{p}$ 代入，即得到[[uncertainty-principle|海森堡不确定性原理]]的标准形式：

$$\Delta x\,\Delta p\geq \frac{\hbar}{2}$$

因此，不确定性不是仪器不够精密造成的，而是由算符代数结构决定的。

## 与共同本征态

若两个自伴算符对易，在适当条件下可以有共同本征态，因而对应的物理量可以同时具有确定值。若不对易，一般不能用同一个量子态同时赋予两者精确值。

这也是[[observables|可观测量]]与测量公设中“相容可观测量”概念的数学基础。

## 角动量代数

角动量分量满足：

$$[\hat{L}_i,\hat{L}_j]=i\hbar\epsilon_{ijk}\hat{L}_k$$

这意味着 $L_x,L_y,L_z$ 不能同时精确确定。自旋也服从同样的 SU(2) 代数结构，因此[[spin|自旋]]不是经典小球的普通旋转。

## 流传误区

- ❌ “不对易只是矩阵乘法顺序不同的数学细节” → ✅ 它直接对应可观测量是否相容与能否同时精确测量。
- ❌ “对易关系来自测量扰动” → ✅ 测量扰动是现象层解释，根源是量子态空间与算符代数。
- ❌ “所有位置和动量都不对易” → ✅ 不同方向满足 $[\hat{x}_i,\hat{p}_j]=0$ 当 $i\neq j$。

## 相关条目

- [[operator-theory]] — 算符理论
- [[observables]] — 可观测量
- [[uncertainty-principle]] — 海森堡不确定性原理
- [[matrix-mechanics]] — 矩阵力学
- [[spin]] — 自旋

## 参考文献

1. M. Born and P. Jordan, "Zur Quantenmechanik", *Zeitschrift für Physik* **34**, 858-888 (1925). [DOI](https://doi.org/10.1007/BF01328531)（A级原始论文）
2. W. Heisenberg, "Über den anschaulichen Inhalt der quantentheoretischen Kinematik und Mechanik", *Zeitschrift für Physik* **43**, 172-198 (1927). [DOI](https://doi.org/10.1007/BF01397280)（A级原始论文）
3. J. J. Sakurai and J. Napolitano, *Modern Quantum Mechanics*, 3rd ed., Cambridge University Press, 2021.（B级教材）
