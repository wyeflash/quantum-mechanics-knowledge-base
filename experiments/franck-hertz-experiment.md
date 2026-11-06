---
title: 弗兰克-赫兹实验
created: 2026-05-07
updated: 2026-05-09
type: experiment
status: complete
tags: [experiment, quantization, atom, energy-levels]
sources: []
confidence: high
difficulty: beginner
---

# 弗兰克-赫兹实验 (Franck-Hertz Experiment)

## 概述

1914 年，德国物理学家詹姆斯·弗兰克（James Franck）与古斯塔夫·赫兹（Gustav Hertz）进行了一项关键实验：让电子通过汞蒸气，测量电子与汞原子碰撞后的能量损失。实验发现，**电子的能量损失是离散的**，且恰好对应汞原子的激发能级。这一结果首次从实验上**直接证实了原子能级的量子化**，为 [[1913-bohr-atomic-model|玻尔原子模型]] 提供了强有力的实验支持。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Franck & Hertz 1914 原始论文及后世标准教材）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 实验动机

### 检验玻尔模型的核心预言

玻尔模型预言原子中的电子只能存在于离散的能级上。如果这一预言正确，那么：

> 当一个外部电子与原子碰撞时，只有当电子的动能**恰好等于**原子两个能级之差时，能量才会被原子吸收。

在能量不足时，碰撞应为**弹性碰撞**（能量不损失）；达到阈值时，才发生**非弹性碰撞**（能量被吸收）。

## 实验装置

```
阴极(C) ──\rightarrow 栅极(G) ──\rightarrow 收集极(P)
   ↓           ↓            ↓
  加热      加速电压 V      反向电压
   ↓           ↓            ↓
电子发射   电子加速区      筛选低能电子
   ↓           ↓
   └──── 汞蒸气容器 ────┘
```

### 关键组件

- **阴极 (Cathode)**：加热发射热电子
- **栅极 (Grid)**：相对于阴极加正电压 $V$，使电子加速
- **收集极 (Plate)**：相对于栅极加小反向电压，仅允许高能电子到达
- **汞蒸气**：电子与汞原子碰撞的靶材

## 实验结果

### 电流-电压曲线

随着加速电压 $V$ 的增加，收集极电流 $I$ 呈现**周期性峰值结构**：

- **低电压区**（$V < 4.9$ V）：电流随电压单调上升
- **第一个谷值**（$V \approx 4.9$ V）：电流突然下降
- **后续峰值**：在 $V \approx 9.8$ V、$14.7$ V... 处出现新的峰值

峰值之间的间隔约为：

$$\Delta V \approx 4.9\ \text{V}$$

### 物理解释

- 当电子动能 $E < 4.9$ eV 时，无法激发汞原子，碰撞为弹性，电子保持能量
- 当 $E \approx 4.9$ eV 时，电子可将能量传递给汞原子，使其从基态跃迁到第一激发态
- 失去能量的电子无法克服收集极的反向电压，电流下降
- 在 $2 \times 4.9$ eV、$3 \times 4.9$ eV... 处，一个电子可连续激发多个原子

### 光谱验证

弗兰克和赫兹还测量了汞蒸气在激发后发射的光谱，发现了一条波长为：

$$\lambda = 253.7\ \text{nm}$$

的紫外谱线。对应的能量为：

$$E = \frac{hc}{\lambda} \approx 4.89\ \text{eV}$$

这与电流-电压曲线中的能量间隔完美吻合！

## 科学史意义

### 对玻尔模型的直接证实

弗兰克-赫兹实验为玻尔模型的核心假说提供了**独立且直接的实验证据**：

1. **能级的离散性**：能量损失不是连续的，而是量子化的
2. **激发能级的存在**：$4.9$ eV 对应汞原子的第一激发态
3. **跃迁与辐射的关系**：电学测量与光谱学测量相互印证

玻尔本人对此评价极高：

> "弗兰克-赫兹实验是原子结构量子理论的最直接证明之一。"

### 1914 vs 1925 诺贝尔奖

- 弗兰克与赫兹因"发现支配电子与原子碰撞的定律"获得 **1925 年诺贝尔物理学奖**
- 玻尔因"原子结构与辐射的研究"获得 **1922 年诺贝尔物理学奖**
- 实验对理论的支持具有决定性意义

## 实验的局限与后续

### 无法观测更高能级

最初的实验只观测到了第一激发态（$4.9$ eV）。更高能级的激发需要改进实验条件（更高真空度、更精确的电压控制）。

### 对其他原子的推广

类似实验很快被扩展到氦、氖、钠等原子，均证实了能级量子化的普适性。

### 现代教学价值

弗兰克-赫兹实验至今仍是大学物理实验的经典项目，因为它：
- 直观展示量子化概念
- 将电学测量与光谱学联系起来
- 体现理论与实验的紧密互动

## 流传误区

- ❌ "弗兰克-赫兹实验发现了原子核" → ✅ 实验证实的是原子**能级量子化**，而非原子核结构
- ❌ "实验直接观测到了电子轨道" → ✅ 实验观测的是**能量交换的离散性**，轨道本身不可直接观测
- ❌ "只有汞原子才能做弗兰克-赫兹实验" → ✅ 原理适用于任何具有离散能级的原子/分子
- ❌ "电流下降是因为电子被原子吸收" → ✅ 电流下降是因为电子**损失能量后**无法到达收集极

## 相关条目

- [[quantization-energy-levels|量子化与能级]]
- [[energy-quantization|能量量子化]]
- [[1913-bohr-atomic-model|1913 玻尔原子模型]]
- [[photoelectric-effect-exp|光电效应实验]]
- [[compton-scattering|康普顿散射]]
- [[atomic-stability-problem|原子稳定性问题]]

## 参考文献

1. J. Franck and G. Hertz, "Über Zusammenstöße zwischen Elektronen und den Molekülen des Quecksilberdampfes und die Ionisierungsspannung desselben," *Verhandlungen der Deutschen Physikalischen Gesellschaft* **16**, 457 (1914). [原始论文]
2. J. Franck and G. Hertz, "Über die Erregung der Quecksilberresonanzlinie 253,6 \mu\mu durch Elektronenstöße," *Verhandlungen der Deutschen Physikalischen Gesellschaft* **16**, 512 (1914). [光谱验证论文]
3. D. J. Griffiths, *Introduction to Quantum Mechanics*, 2nd ed., Pearson, 2004, §4.1.（标准教材）
4. A. Pais, *Niels Bohr's Times*, Oxford University Press, 1991, Chapter 10.（科学史专著）
