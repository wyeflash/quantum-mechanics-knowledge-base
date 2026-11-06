---
title: 超导量子干涉仪
description: SQUID 是基于约瑟夫森效应和磁通量子化的超导量子干涉器件，是极高灵敏度磁测量平台。
tags: [quantum-sensing, magnetometry, superconducting]
type: application
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: intermediate
sources:
  - "J. Clarke and A. I. Braginski, The SQUID Handbook, Wiley-VCH, 2004"
  - "J. Clarke and F. K. Wilhelm, Superconducting quantum bits, Nature 453, 1031 (2008)"
---

# SQUID (Superconducting Quantum Interference Device)

## 概述

SQUID 是 superconducting quantum interference device 的缩写，中文常译为超导量子干涉仪。它利用约瑟夫森结和磁通量子化实现极高灵敏度磁场测量，是[[quantum-sensing|量子传感]]中最成熟的技术平台之一。

::: info 可信度说明
- **可信度**: ★★★★★（SQUID Handbook 与超导量子器件综述交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2]
:::

## 工作原理

在超导环路中，磁通以磁通量子为单位出现。约瑟夫森结使超导相位差转化为可测电流或电压响应。外部磁场改变环路磁通，从而改变干涉条件，形成高灵敏度磁测量。

## 应用场景

- 脑磁图和心磁图等生物磁测。
- 地球物理与弱磁异常探测。
- 低温凝聚态物理实验。
- 超导量子比特读出和低噪声磁通测量。

## 技术路线位置

SQUID 代表“超导宏观量子相干”路线。相比[[nv-center|NV 色心]]，SQUID 灵敏度极高但通常需要低温环境；相比[[atom-interferometer|原子干涉仪]]，它更直接面向磁通和弱磁信号。

## 中国进展

中国在超导电子学、弱磁探测、低温测量和超导量子计算方面都有相关技术积累。SQUID 技术与量子计算的超导工艺、低温电子学和精密测量产业链存在交叉。

## 流传误区

- ❌ “SQUID 是量子计算机的一种” → ✅ 它主要是量子传感器件；虽与超导量子计算有工艺关联，但用途不同。
- ❌ “SQUID 不受噪声限制” → ✅ 低温振动、磁屏蔽、读出电路和材料噪声都影响性能。
- ❌ “SQUID 可被室温传感器完全替代” → ✅ 室温传感器进步很快，但 SQUID 在极弱磁测量中仍有独特优势。

## 相关条目

- [[quantum-sensing]] — 量子传感
- [[standard-quantum-limit]] — 标准量子极限
- [[nv-center]] — NV 色心
- [[zuchongzhi-quantum-computer]] — 祖冲之量子计算机
- [[concepts/quantum-superposition]] — 量子叠加态

## 参考文献

1. J. Clarke and A. I. Braginski, *The SQUID Handbook*, Wiley-VCH, 2004.（B级专著）
2. J. Clarke and F. K. Wilhelm, "Superconducting quantum bits", *Nature* **453**, 1031-1042 (2008). [DOI](https://doi.org/10.1038/nature07128)（A级综述）
