---
title: 量子中继
description: 量子中继通过纠缠交换、量子存储和纠缠纯化突破光纤损耗，是远距离量子网络的关键技术。
tags: [quantum-communication, qkd, quantum-computing]
type: application
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: advanced
sources:
  - "H.-J. Briegel et al., Quantum Repeaters: The Role of Imperfect Local Operations in Quantum Communication, Phys. Rev. Lett. 81, 5932 (1998)"
  - "N. Sangouard et al., Quantum repeaters based on atomic ensembles and linear optics, Rev. Mod. Phys. 83, 33 (2011)"
---

# 量子中继 (Quantum Repeater)

## 概述

量子中继用于克服远距离量子通信中的信道损耗。普通光纤中的光子会随距离指数衰减，且未知量子态不能像经典信号那样直接放大。因此，量子中继需要用纠缠分发、纠缠交换、量子存储和纠缠纯化构建远距离量子链路。

::: info 可信度说明
- **可信度**: ★★★★★（Briegel 等 1998 原始方案与 RMP 综述交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2]
:::

## 基本组件

- **纠缠源**：在相邻节点之间建立纠缠。
- **量子存储器**：在等待其他链路成功时保存量子态。
- **纠缠交换**：通过 Bell 态测量把短距离纠缠连接成长距离纠缠。
- **纠缠纯化或纠错**：提高纠缠质量，抵抗噪声和损耗。

## 为什么不能直接放大

经典光通信可以用中继器读取、放大并重发信号；但量子态不可克隆，测量会扰动态。因此量子中继必须避免直接复制未知量子态，而通过纠缠结构建立端到端关联。

## 技术路线图

近期路线包括原子系综、单离子/中性原子、NV 色心、量子点和光学腔耦合系统等。长期目标是把量子中继与[[bb84-protocol|QKD]]、[[e91-protocol|纠缠型 QKD]]、分布式量子计算和量子互联网连接起来。

## 中国进展

中国在城域量子通信网络与卫星量子通信方面已有代表性系统。未来若要构建更高带宽、更稳定的全球量子网络，量子中继与量子存储将是对卫星链路和可信节点网络的重要补充。

## 流传误区

- ❌ “量子中继就是量子版信号放大器” → ✅ 它不能直接放大未知量子态，而是使用纠缠交换等量子协议。
- ❌ “有卫星就不需要量子中继” → ✅ 卫星、可信节点和量子中继是不同技术路线，可互补。
- ❌ “量子中继已经大规模商用” → ✅ 关键组件仍在实验和工程成熟过程中。

## 相关条目

- [[quantum-communication]] — 量子通信
- [[e91-protocol]] — E91 协议
- [[device-independent-qkd]] — 设备无关 QKD
- [[micius-satellite]] — 墨子号卫星
- [[concepts/quantum-entanglement]] — 量子纠缠

## 参考文献

1. H.-J. Briegel, W. Dür, J. I. Cirac and P. Zoller, "Quantum Repeaters: The Role of Imperfect Local Operations in Quantum Communication", *Physical Review Letters* **81**, 5932-5935 (1998). [DOI](https://doi.org/10.1103/PhysRevLett.81.5932)（A级原始论文）
2. N. Sangouard et al., "Quantum repeaters based on atomic ensembles and linear optics", *Reviews of Modern Physics* **83**, 33-80 (2011). [DOI](https://doi.org/10.1103/RevModPhys.83.33)（A级综述）
