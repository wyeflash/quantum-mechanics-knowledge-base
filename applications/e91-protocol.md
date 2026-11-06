---
title: E91 协议
description: E91 协议利用量子纠缠和 Bell 不等式检验建立密钥，是设备无关量子密码思想的重要源头。
tags: [quantum-communication, quantum-cryptography, qkd, bell-test]
type: application
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: advanced
sources:
  - "A. K. Ekert, Quantum cryptography based on Bell's theorem, Phys. Rev. Lett. 67, 661 (1991)"
  - "J. S. Bell, On the Einstein Podolsky Rosen paradox, Physics 1, 195 (1964)"
---

# E91 协议 (E91 Protocol)

## 概述

E91 协议由 Artur Ekert 于 1991 年提出，使用纠缠粒子对和 Bell 不等式检验实现量子密钥分发。它把[[concepts/quantum-entanglement|量子纠缠]]、[[concepts/bell-theorem|贝尔定理]]和通信安全直接联系起来。

::: info 可信度说明
- **可信度**: ★★★★★（Ekert 1991 原始论文与 Bell 定理基础一致）
- **验证状态**: 已验证
- **来源**: [1][2]
:::

## 基本思想

纠缠源向 Alice 与 Bob 分发粒子对。双方随机选择测量方向，一部分数据用于生成密钥，另一部分用于检验 Bell 不等式违背。若关联足够强且误码率可接受，就可排除一大类窃听或经典伪造解释。

## 与 BB84 的区别

[[bb84-protocol|BB84]]通常用制备-测量方式工作；E91 强调纠缠分发和 Bell 检验。二者在现代安全证明中有深层联系，但工程实现与安全假设不同。

## 技术路线位置

E91 是纠缠型 QKD、量子网络和[[device-independent-qkd|设备无关 QKD]]的重要思想来源。它也与[[quantum-repeater|量子中继]]有关，因为长距离纠缠分发是未来量子互联网的核心任务。

## 中国进展

[[micius-satellite|墨子号卫星]]完成了星地纠缠分发与 Bell 检验相关实验，显示卫星链路可显著扩展量子通信距离，是纠缠型量子通信路线的重要工程里程碑。

## 流传误区

- ❌ “E91 比 BB84 在任何场景都更安全” → ✅ 安全性取决于具体假设、设备模型、损耗和有限统计分析。
- ❌ “只要有纠缠就自动能通信” → ✅ 纠缠本身不能超光速传信，QKD 还需要经典认证信道。
- ❌ “Bell 检验只是哲学实验” → ✅ 它已成为设备无关安全证明和量子网络验证的技术工具。

## 相关条目

- [[bb84-protocol]] — BB84 协议
- [[device-independent-qkd]] — 设备无关 QKD
- [[quantum-repeater]] — 量子中继
- [[quantum-communication]] — 量子通信
- [[micius-satellite]] — 墨子号卫星

## 参考文献

1. A. K. Ekert, "Quantum cryptography based on Bell's theorem", *Physical Review Letters* **67**, 661-663 (1991). [DOI](https://doi.org/10.1103/PhysRevLett.67.661)（A级原始论文）
2. J. S. Bell, "On the Einstein Podolsky Rosen paradox", *Physics* **1**, 195-200 (1964).（A级原始论文）
