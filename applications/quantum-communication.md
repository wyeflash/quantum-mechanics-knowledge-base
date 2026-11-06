---
title: 量子通信
created: 2026-05-07
updated: 2026-05-09
type: application
status: complete
tags: [application, quantum-communication, qkd, entanglement, teleportation, satellite]
sources:
  - "C. H. Bennett & G. Brassard, 'Quantum cryptography: Public key distribution and coin tossing', Proc. IEEE ICC, 175 (1984)"
  - "C. H. Bennett et al., 'Teleporting an Unknown Quantum State via Dual Classical and Einstein-Podolsky-Rosen Channels', Phys. Rev. Lett. 70, 1895 (1993)"
  - "N. Gisin et al., 'Quantum cryptography', Rev. Mod. Phys. 74, 145 (2002)"
  - "S.-K. Liao et al., 'Satellite-to-ground quantum key distribution', Nature 549, 43 (2017)"
confidence: high
difficulty: intermediate
---

# 量子通信 (Quantum Communication)

## 概述

**量子通信**是利用量子力学原理（如量子纠缠、量子不可克隆定理和海森堡不确定性原理）实现信息传输和加密保护的通信技术。与经典通信不同，量子通信的核心优势在于**理论上不可破解的安全性**，而非传输速度。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Bennett & Brassard 1984 BB84 协议、Bennett 1993 量子隐形传态、Gisin 2002 综述及 Liao 2017 墨子号卫星实验交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3][4]
:::

## 核心原理

### 量子不可克隆定理

**Wootters-Zurek 定理**（1982）和 **Dieks 定理**表明：

> **不可能构造出一个能够完美复制任意未知量子态的装置。**

这意味着：如果窃听者（Eve）试图截取并测量量子信号，她**必然**会干扰量子态，从而被通信双方发现。

### 量子纠缠分发

通过[[quantum-entanglement|量子纠缠]]，两个空间分离的粒子可以共享关联态。测量其中一个粒子会**瞬时**确定另一个粒子的状态——但这种关联**不能用于超光速通信**（受量子不可克隆定理限制）。

## 主要技术

### 1. 量子密钥分发（QKD）

**量子密钥分发**是目前最成熟的量子通信技术。其目标不是传输消息本身，而是安全地分发加密密钥。

#### BB84 协议（1984）

由 Bennett 和 Brassard 提出 [1]，是第一个量子密码协议：

**编码方式**:
- **基矢 1**（ rectilinear ）: $|0\rangle$ = 0°, $|1\rangle$ = 90°
- **基矢 2**（ diagonal ）: $|+\rangle$ = 45°, $|-\rangle$ = 135°

**协议步骤**:
1. Alice 随机选择基矢和比特，发送光子给 Bob
2. Bob 随机选择基矢测量
3. 双方通过**公开经典信道**比对基矢选择
4. 保留基矢一致的部分作为原始密钥
5. 通过**误码率检测**判断是否存在窃听

**安全性基础**:
- 如果 Eve 截取并重新发送光子，她有 50% 概率选错基矢
- 选错基矢会引入 **25% 的误码率**
- 当误码率超过阈值（通常 11%–20%），通信双方放弃本次密钥

#### E91 协议（1991）

Artur Ekert 提出了基于**贝尔不等式违反**的 QKD 协议：
- 使用纠缠光子对
- 通过检测 Bell 不等式的违反程度来验证安全性
- 不需要信任测量设备（device-independent QKD 的前身）

### 2. 量子隐形传态（Quantum Teleportation）

1993 年，Bennett 等人提出了**量子隐形传态**协议 [2]：

$$|\psi\rangle_\text{未知} \xrightarrow{\text{纠缠对} + \text{2 比特经典信息}} |\psi\rangle_\text{远端}$$

**关键特征**:
- **不传输物质或能量**，只传输量子态信息
- 需要**预先共享纠缠对**
- 需要**经典通信**辅助（因此不违反相对论）
- 原始量子态在传输过程中被**破坏**（符合不可克隆定理）

1997 年，潘建伟等人在因斯布鲁克大学首次实现了光子偏振态的量子隐形传态实验。

### 3. 量子中继（Quantum Repeater）

由于光纤损耗和退相干，量子信号无法长距离直接传输。**量子中继**通过纠缠交换（entanglement swapping）和量子存储，实现长距离纠缠分发：

```
A ——[纠缠]—— R1 ——[纠缠]—— R2 ——[纠缠]—— B
      ↓ 纠缠交换 ↓
A ———————————[纠缠]—————————————— B
```

量子中继是构建**全球量子互联网**的关键技术。

## 实际部署

### 地面光纤网络

- **中国**: 京沪干线（2,000 公里）、北京–上海量子通信骨干网
- **欧洲**: SECOQC 网络（维也纳，2008）、EuroQCI 计划
- **日本**: Tokyo QKD Network
- **美国**: EPB Quantum Network（商用）

### 星地量子通信

**墨子号卫星**（2016）实现了多项世界首次 [4]：
- 星地量子密钥分发（1,200 公里）
- 星地量子隐形传态
- 星地 Bell 不等式检验

**欧洲**和**美国**也在发展类似项目（如 QEYSSat、CubeSat）。

## 安全性与局限性

### 理论安全性

- **BB84 协议**在理想条件下被证明是**信息论安全**的
- 安全性基于量子力学基本原理，**不依赖计算假设**

### 实际安全漏洞

真实设备存在多种侧信道攻击：
- **探测器旁路攻击**（blinding attack）：用强光致盲探测器
- **时序攻击**：利用探测时间差异
- **光源漏洞**：非理想单光子源可能泄露信息

**设备无关 QKD**（DI-QKD）和**测量设备无关 QKD**（MDI-QKD）是应对此类攻击的方案。

### 距离限制

- 光纤损耗：约 0.2 dB/km（1,550 nm），限制无中继距离约 100–400 km
- 大气信道：受天气、昼夜影响，卫星通信可克服距离限制

## 流传误区

::: warning
- **误区一**: "量子通信可以超光速传输信息。"
  - **澄清**: **不能**。量子纠缠不能用于超光速通信（no-communication theorem）。量子隐形传态需要经典信道辅助。
- **误区二**: "量子通信完全不可破解。"
  - **澄清**: 协议本身在理论上是安全的，但**实际设备**存在侧信道漏洞。需要结合"量子+经典"的复合安全体系。
- **误区三**: "量子通信比 5G/光纤更快。"
  - **澄清**: 量子通信的**速度**并不优于经典通信（实际上通常更慢）。其优势在于**安全性**，而非带宽或延迟。
- **误区四**: "量子通信可以传输实物。"
  - **澄清**: 量子通信传输的是**量子态信息**，而非物质或能量本身。
:::

## 相关条目

- [[quantum-cryptography]] — 量子密码学
- [[quantum-computing]] — 量子计算
- [[quantum-entanglement]] — 量子纠缠
- [[applications/micius-satellite]] — 墨子号卫星
- [[people/pan-jianwei]] — 潘建伟
- [[bell-theorem]] — 贝尔定理

## 参考文献

1. **C. H. Bennett & G. Brassard** (1984). "Quantum cryptography: Public key distribution and coin tossing." *Proc. IEEE ICC*, 175–179. [A级 — BB84 协议原始论文]
2. **C. H. Bennett et al.** (1993). "Teleporting an Unknown Quantum State via Dual Classical and Einstein-Podolsky-Rosen Channels." *Physical Review Letters*, **70**, 1895–1899. [DOI](https://doi.org/10.1103/PhysRevLett.70.1895) [A级 — 量子隐形传态原始论文]
3. **N. Gisin et al.** (2002). "Quantum cryptography." *Reviews of Modern Physics*, **74**, 145–195. [DOI](https://doi.org/10.1103/RevModPhys.74.145) [A级 — 权威综述]
4. **S.-K. Liao et al.** (2017). "Satellite-to-ground quantum key distribution." *Nature*, **549**, 43–47. [DOI](https://doi.org/10.1038/nature23655) [A级 — 墨子号 QKD]
