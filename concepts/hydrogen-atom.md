---
title: 氢原子
description: 最简单的原子系统，量子力学的理想试验场，玻尔模型、薛定谔方程和狄拉克方程均能精确求解。
tags:
  - foundations
  - beginner
  - history
type: concept
status: complete
created: 2026-05-08
updated: 2026-05-09
confidence: high
difficulty: intermediate
sources:
  - "N. Bohr, 'On the Constitution of Atoms and Molecules', Philos. Mag. 26, 1 (1913)"
  - "E. Schrödinger, 'Quantisierung als Eigenwertproblem', Ann. Phys. 79, 361 (1926)"
---

# 氢原子 (Hydrogen Atom)

## 概述

氢原子是由一个质子和一个电子组成的最简单原子系统。正因为其简单性，它成为量子力学的**理想试验场**——旧量子论和现代量子力学都在氢原子上取得了精确解，其理论预言与实验的高度契合是量子力学最伟大的胜利之一。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Bohr 1913、Schrödinger 1926 原始论文及 Griffiths/Sakurai 教材交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3][4]
:::

## 玻尔模型（1913年）

### 基本假设

玻尔将卢瑟福的核式模型与普朗克的量子化想法结合，提出了三大假设：

1. **定态假设**：电子只能在离散轨道上运动，不辐射能量
2. **频率条件**：跃迁时光子能量 $h\nu = E_i - E_f$
3. **角动量量子化**：$L = n\hbar$

### 能级与轨道

玻尔导出了氢原子的能级和轨道半径：

$$E_n = -\frac{13.6\,\text{eV}}{n^2}, \quad r_n = n^2 a_0$$

其中 $a_0 = \frac{4\pi\varepsilon_0\hbar^2}{m_e e^2} \approx 0.529\,\text{Å}$ 为玻尔半径。

### 里德伯公式

玻尔模型自然导出了氢原子光谱的里德伯公式：

$$\frac{1}{\lambda} = R_H\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

其中 $R_H \approx 1.097 \times 10^7\,\text{m}^{-1}$ 为里德伯常数。

## 定态薛定谔方程的精确解

### 方程建立

将库伦势 $V(r) = -\frac{e^2}{4\pi\varepsilon_0 r}$ 代入定态薛定谔方程：

$$\left[-\frac{\hbar^2}{2m_e}\nabla^2 - \frac{e^2}{4\pi\varepsilon_0 r}\right]\psi(\mathbf{r}) = E\psi(\mathbf{r})$$

### 分离变量与解

在球坐标中分离变量 $\psi(r,\th\eta,\phi) = R(r)Y_l^m(\th\eta,\phi)$，得到三个量子数：

1. **主量子数** $n = 1,2,3,\dots$
2. **角量子数** $l = 0,1,\dots,n-1$
3. **磁量子数** $m = -l,-l+1,\dots,l$

### 能量本征值

定态薛定谔方程自然导出与玻尔模型相同的能级公式：

$$E_n = -\frac{m_e e^4}{2(4\pi\varepsilon_0)^2\hbar^2}\frac{1}{n^2} = -\frac{13.6\,\text{eV}}{n^2}$$

但与玻尔模型不同，薛定谔方程还自然给出了：
- 角动量量子化：$L^2 = l(l+1)\hbar^2$
- 空间量子化：$L_z = m\hbar$
- 波函数的完整空间分布

## 流传误区

- ❌ "玻尔模型是错误的" → ✅ 玻尔模型是经典量子论的**过渡性近似**，在氢原子上给出的能级公式与定态薛定谔方程精确一致，在历史上和教学上具有重要价值
- ❌ "电子运行在确定的轨道上" → ✅ 现代量子力学中没有"轨道"概念，只有概率云分布
- ❌ "氢原子有只有一个能级" → ✅ 氢原子有无穷多个离散能级（$n \to \infty$ 时 $E_n \to 0$），连续谱也存在（$E > 0$的散射态）

## 相关条目

- [[quantization-energy-levels]] — 量子化与能级
- [[1913-bohr-atomic-model]] — 1913：玻尔原子模型
- [[schrodinger-equation]] — 薛定谔方程
- [[wave-function]] — 波函数
- [[niels-bohr]] — 尼尔斯·玻尔
- [[people/erwin-schrodinger]] — 埃尔温·薛定谔

## 参考文献

1. N. Bohr, "On the Constitution of Atoms and Molecules," *Philosophical Magazine* **26**, 1–25 (1913). [DOI](https://doi.org/10.1080/14786441308634955)
2. E. Schrödinger, "Quantisierung als Eigenwertproblem," *Annalen der Physik* **79**, 361–376 (1926).
3. D. J. Griffiths, *Introduction to Quantum Mechanics*, 3rd ed., Cambridge University Press, 2018, §4.2.–4.3. (B级教材)
4. J. J. Sakurai and J. Napolitano, *Modern Quantum Mechanics*, 3rd ed., Cambridge University Press, 2021, §2.4. (B级教材)
