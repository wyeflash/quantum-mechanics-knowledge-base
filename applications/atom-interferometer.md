---
title: 原子干涉仪
description: 原子干涉仪利用物质波相干叠加测量加速度、重力、转动和基本常数，是量子精密测量的重要路线。
tags: [quantum-sensing, interferometry, gravity, metrology]
type: application
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: advanced
sources:
  - "A. D. Cronin, J. Schmiedmayer and D. E. Pritchard, Optics and interferometry with atoms and molecules, Rev. Mod. Phys. 81, 1051 (2009)"
  - "M. Kasevich and S. Chu, Atomic interferometry using stimulated Raman transitions, Phys. Rev. Lett. 67, 181 (1991)"
---

# 原子干涉仪 (Atom Interferometer)

## 概述

原子干涉仪利用原子的[[concepts/matter-wave|物质波]]性质，让原子波包沿不同路径演化后重新干涉。外界加速度、重力、转动或势场会改变相位差，因此可用于高精度测量。

::: info 可信度说明
- **可信度**: ★★★★★（Kasevich-Chu 原始实验与 RMP 综述交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2]
:::

## 工作原理

激光脉冲可充当原子波的分束器、反射镜和合束器。两条路径积累不同相位，最终的干涉条纹给出待测物理量。相位差常与有效波矢、加速度和干涉时间有关，例如简化形式：

$$\Delta\phi\approx k_{\mathrm{eff}} a T^2$$

其中 $k_{\mathrm{eff}}$ 是有效波矢，$a$ 是加速度，$T$ 是脉冲间隔。

## 应用方向

- 重力加速度与重力梯度测量。
- 惯性导航和旋转测量。
- 等效原理检验与基础物理实验。
- 地下结构、资源勘探和地球物理监测。

## 技术路线位置

原子干涉仪代表“冷原子 + 物质波干涉”路线。相比[[squid|SQUID]]和[[nv-center|NV 色心]]，它更擅长惯性和引力相关测量；相比经典光学干涉仪，它利用的是有质量粒子的德布罗意波。

## 中国进展

中国在冷原子物理、原子钟、重力仪和空间量子科学方面具有持续投入。原子干涉仪与导航、地球物理、空间基础物理实验等方向联系紧密，是量子传感产业路线图中的重要板块。

## 流传误区

- ❌ “原子干涉仪就是普通光学干涉仪” → ✅ 它干涉的是原子物质波，控制对象和噪声来源不同。
- ❌ “量子传感一定只测电磁量” → ✅ 原子干涉仪特别适合惯性和重力测量。
- ❌ “灵敏度只由原子数决定” → ✅ 相干时间、振动隔离、激光相位噪声和系统误差同样关键。

## 相关条目

- [[quantum-sensing]] — 量子传感
- [[standard-quantum-limit]] — 标准量子极限
- [[nv-center]] — NV 色心
- [[squid]] — SQUID
- [[concepts/matter-wave]] — 物质波

## 参考文献

1. M. Kasevich and S. Chu, "Atomic interferometry using stimulated Raman transitions", *Physical Review Letters* **67**, 181-184 (1991). [DOI](https://doi.org/10.1103/PhysRevLett.67.181)（A级原始论文）
2. A. D. Cronin, J. Schmiedmayer and D. E. Pritchard, "Optics and interferometry with atoms and molecules", *Reviews of Modern Physics* **81**, 1051-1129 (2009). [DOI](https://doi.org/10.1103/RevModPhys.81.1051)（A级综述）
