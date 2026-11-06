---
title: 噪声中等规模量子时代
description: NISQ 描述含噪中等规模量子设备的现实阶段，强调近期能力边界、量子优势演示与容错前夜的工程瓶颈。
tags: [quantum-computing, qubit, china-quantum]
type: application
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: intermediate
sources:
  - "J. Preskill, Quantum Computing in the NISQ era and beyond, Quantum 2, 79 (2018)"
  - "F. Arute et al., Quantum supremacy using a programmable superconducting processor, Nature 574, 505 (2019)"
  - "Y. Wu et al., Strong quantum computational advantage using a superconducting quantum processor, Phys. Rev. Lett. 127, 180501 (2021)"
---

# NISQ 时代 (NISQ Era)

## 概述

NISQ 是 Noisy Intermediate-Scale Quantum 的缩写，指含噪、中等规模量子设备阶段。这个概念由 John Preskill 在 2018 年系统提出，用来描述尚未达到大规模容错量子计算，但已能执行经典模拟困难任务的近期量子硬件。

::: info 可信度说明
- **可信度**: ★★★★★（Preskill 2018 概念论文与 Google/USTC 量子优势实验交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 能做什么

NISQ 设备可用于：

- 展示特定采样任务上的量子计算优越性。
- 测试量子控制、读出、编译和误差缓解技术。
- 探索变分量子算法、量子模拟和量子机器学习的早期可能性。
- 为[[quantum-error-correction|量子纠错]]和容错体系结构积累工程数据。

[[zuchongzhi-quantum-computer|祖冲之]]和[[jiuzhang-photonic-computer|九章]]属于这一阶段的重要中国代表。

## 不能过度承诺什么

NISQ 设备通常没有完整量子纠错，电路深度受噪声限制。它们不等同于可运行大规模 Shor 算法的通用量子计算机，也不能自动替代经典高性能计算。许多 NISQ 应用仍处于研究阶段，其商业价值需要谨慎评估。

## 技术路线图位置

NISQ 时代处于三条路线之间：

1. **硬件扩展**：更多量子比特、更高保真度、更稳定控制。
2. **误差缓解**：在没有完整纠错时尽量提取可靠结果。
3. **容错过渡**：从物理量子比特演示走向逻辑量子比特与容错门。

## 中国进展

中国团队在超导和光量子路线均已实现量子计算优越性相关实验。其技术意义不在于立刻解决通用计算问题，而在于证明可控多体量子系统可以在特定任务上进入经典难以模拟的区域，并推动制冷、光学、芯片制造、控制电子学和算法验证的发展。

## 流传误区

- ❌ “NISQ 设备已经能破解 RSA” → ✅ 破解 RSA 需要大规模容错量子计算，不是现有 NISQ 设备能力。
- ❌ “量子优势等于所有问题都更快” → ✅ 量子优势通常是特定任务、特定评估标准下的结果。
- ❌ “NISQ 没有实用价值” → ✅ 它是硬件、误差模型、控制系统和算法生态的必要试验场。

## 相关条目

- [[quantum-computing]] — 量子计算
- [[quantum-error-correction]] — 量子纠错
- [[shor-algorithm]] — Shor 算法
- [[zuchongzhi-quantum-computer]] — 祖冲之量子计算机
- [[jiuzhang-photonic-computer]] — 九章光量子计算机

## 参考文献

1. J. Preskill, "Quantum Computing in the NISQ era and beyond", *Quantum* **2**, 79 (2018). [DOI](https://doi.org/10.22331/q-2018-08-06-79)（A级概念论文）
2. F. Arute et al., "Quantum supremacy using a programmable superconducting processor", *Nature* **574**, 505-510 (2019). [DOI](https://doi.org/10.1038/s41586-019-1666-5)（A级论文）
3. Y. Wu et al., "Strong quantum computational advantage using a superconducting quantum processor", *Physical Review Letters* **127**, 180501 (2021). [DOI](https://doi.org/10.1103/PhysRevLett.127.180501)（A级论文）
