---
title: BB84 协议
description: BB84 是第一个量子密钥分发协议，利用非正交量子态和测量扰动实现窃听检测。
tags: [quantum-communication, quantum-cryptography, qkd, security]
type: application
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: intermediate
sources:
  - "C. H. Bennett and G. Brassard, Quantum cryptography: Public key distribution and coin tossing, 1984"
  - "P. W. Shor and J. Preskill, Simple Proof of Security of the BB84 Quantum Key Distribution Protocol, Phys. Rev. Lett. 85, 441 (2000)"
---

# BB84 协议 (BB84 Protocol)

## 概述

BB84 协议由 Charles Bennett 与 Gilles Brassard 在 1984 年提出，是第一个量子密钥分发（QKD）协议。它利用非正交量子态不可被无扰动区分的事实，使通信双方能够发现潜在窃听。

::: info 可信度说明
- **可信度**: ★★★★★（BB84 原始论文与 Shor-Preskill 安全性证明）
- **验证状态**: 已验证
- **来源**: [1][2]
:::

## 基本流程

BB84 通常用两组互补基编码比特，例如水平/垂直偏振与对角偏振。Alice 随机选择比特和基发送光子，Bob 随机选择测量基。公开比较基选择后，双方保留基一致的结果，再通过误码率估计、纠错和隐私放大生成密钥。

## 安全性来源

安全性不是来自算法复杂度，而来自量子测量规则：未知非正交态不能被完美复制或无扰动测量。窃听者若测量光子，通常会引入可检测误码。

## 工程关键问题

现实系统面对的是光源缺陷、探测器效率、信道损耗和设备侧信道。因此工程 QKD 需要诱骗态、严格校准、有限密钥分析和安全实现标准。[[device-independent-qkd|设备无关 QKD]]则试图进一步减少对设备模型的信任。

## 中国进展

中国在光纤 QKD 网络和星地 QKD 方面具有代表性进展，[[micius-satellite|墨子号卫星]]展示了远距离量子密钥分发与星地量子通信的可行性。

## 流传误区

- ❌ “BB84 传输的是加密后的消息” → ✅ 它分发密钥，真正消息仍需经典加密算法传输。
- ❌ “QKD 自动保证全部通信系统安全” → ✅ 端点安全、认证、实现漏洞和密钥管理仍然重要。
- ❌ “量子密码就是后量子密码” → ✅ QKD 是物理密钥分发；后量子密码是抗量子经典算法。

## 相关条目

- [[quantum-cryptography]] — 量子密码学
- [[quantum-communication]] — 量子通信
- [[e91-protocol]] — E91 协议
- [[device-independent-qkd]] — 设备无关 QKD
- [[micius-satellite]] — 墨子号卫星

## 参考文献

1. C. H. Bennett and G. Brassard, "Quantum cryptography: Public key distribution and coin tossing", *Proceedings of IEEE International Conference on Computers, Systems and Signal Processing*, Bangalore, 1984.（A级原始论文）
2. P. W. Shor and J. Preskill, "Simple Proof of Security of the BB84 Quantum Key Distribution Protocol", *Physical Review Letters* **85**, 441-444 (2000). [DOI](https://doi.org/10.1103/PhysRevLett.85.441)（A级论文）
