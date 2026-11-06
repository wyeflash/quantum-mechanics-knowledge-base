---
title: 量子纠错
description: 量子纠错通过冗余编码与综合征测量保护量子信息，是表面码和容错量子计算的核心瓶颈。
tags: [quantum-computing, qubit, algorithm]
type: application
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: advanced
sources:
  - "P. W. Shor, Scheme for reducing decoherence in quantum computer memory, Phys. Rev. A 52, R2493 (1995)"
  - "A. Y. Kitaev, Fault-tolerant quantum computation by anyons, Annals of Physics 303, 2 (2003)"
  - "D. A. Lidar and T. A. Brun, Quantum Error Correction, Cambridge University Press, 2013"
---

# 量子纠错 (Quantum Error Correction)

## 概述

量子纠错（quantum error correction, QEC）是把脆弱的物理量子比特编码为更可靠的逻辑量子比特的技术。它直接连接[[concepts/decoherence|退相干]]、[[quantum-computing|量子计算]]和容错量子计算，是从 NISQ 原型机走向可扩展量子计算机的核心瓶颈。

::: info 可信度说明
- **可信度**: ★★★★★（Shor 1995 原始论文、Kitaev 表面码思想与 QEC 标准教材交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 为什么量子纠错困难

经典纠错可以直接复制比特并多数表决；量子信息不能任意克隆，测量又会扰动态。因此量子纠错必须满足两点：

1. 不直接读取被保护的量子态。
2. 通过综合征测量（syndrome measurement）发现错误类型和位置。

典型错误包括比特翻转、相位翻转以及二者组合。稳定子码把错误信息转化为可测的稳定子本征值，而不暴露逻辑态本身。

## 表面码路线

表面码（surface code）是当前最受重视的容错路线之一。它的优势是只需要局域相互作用，适合二维超导量子比特阵列；代价是物理量子比特开销很大。一个高质量逻辑量子比特往往需要许多物理量子比特，具体数量取决于物理错误率、码距和目标逻辑错误率。

## 技术路线图

- **物理层**：提高单比特门、双比特门、读出与空闲保真度。
- **编码层**：实现重复码、表面码或其他稳定子码的多轮综合征测量。
- **逻辑层**：展示逻辑错误率随码距增加而下降。
- **容错层**：实现逻辑门、魔态蒸馏和纠错下的算法片段。
- **系统层**：把大量逻辑量子比特与经典控制、低温工程和编译系统连接起来。

## 中国进展

中国的超导量子计算和光量子计算平台已在量子计算优越性实验中取得代表性结果，例如[[zuchongzhi-quantum-computer|祖冲之量子计算机]]与[[jiuzhang-photonic-computer|九章光量子计算机]]。但从工程路线看，量子纠错与容错逻辑门仍是能否从演示型原型机走向通用量子计算机的关键门槛。

## 流传误区

- ❌ “只要量子比特数量足够多就能通用量子计算” → ✅ 若没有纠错，噪声会迅速破坏深电路。
- ❌ “量子纠错违反不可克隆定理” → ✅ QEC 复制的是纠错码空间中的综合征结构，不复制未知量子态。
- ❌ “表面码已经解决全部工程问题” → ✅ 表面码降低了体系结构要求，但带来巨大的量子比特与控制开销。

## 相关条目

- [[nisq-era]] — NISQ 时代
- [[quantum-computing]] — 量子计算
- [[concepts/decoherence]] — 退相干
- [[concepts/density-matrix]] — 密度矩阵
- [[zuchongzhi-quantum-computer]] — 祖冲之量子计算机

## 参考文献

1. P. W. Shor, "Scheme for reducing decoherence in quantum computer memory", *Physical Review A* **52**, R2493 (1995). [DOI](https://doi.org/10.1103/PhysRevA.52.R2493)（A级原始论文）
2. A. Y. Kitaev, "Fault-tolerant quantum computation by anyons", *Annals of Physics* **303**, 2-30 (2003). [DOI](https://doi.org/10.1016/S0003-4916(02)00018-0)（A级论文）
3. D. A. Lidar and T. A. Brun, *Quantum Error Correction*, Cambridge University Press, 2013.（B级教材）
