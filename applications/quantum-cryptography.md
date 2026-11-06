---
title: 量子密码学
created: 2026-05-07
updated: 2026-05-09
type: application
status: complete
tags: [application, quantum-cryptography, qkd, security, bb84, post-quantum]
sources:
  - "C. H. Bennett & G. Brassard, 'Quantum cryptography: Public key distribution and coin tossing', Proc. IEEE ICC, 175 (1984)"
  - "A. K. Ekert, 'Quantum cryptography based on Bell's theorem', Phys. Rev. Lett. 67, 661 (1991)"
  - "N. Gisin et al., 'Quantum cryptography', Rev. Mod. Phys. 74, 145 (2002)"
  - "V. Scarani et al., 'The security of practical quantum key distribution', Rev. Mod. Phys. 81, 1301 (2009)"
confidence: high
difficulty: advanced
---

# 量子密码学 (Quantum Cryptography)

## 概述

**量子密码学**是利用量子力学原理实现信息安全保护的学科。其核心是**量子密钥分发**（QKD），它允许两个远程通信方（通常称为 Alice 和 Bob）生成共享的随机密钥，并**基于物理原理保证**任何窃听者（Eve）的截获都会被发现。

与经典密码学依赖**计算复杂性假设**（如大整数分解的困难性）不同，量子密码学的安全性根植于**量子力学基本定理**。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Bennett & Brassard 1984、Ekert 1991 原始论文及 Gisin 2002、Scarani 2009 综述交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3][4]
:::

## 安全性的物理基础

### 1. 量子不可克隆定理

**Wootters-Zurek-Dieks 定理**（1982）:

> 不存在任何物理过程能够完美复制一个**未知的任意量子态**。

这意味着：如果 Eve 试图截取量子信号，她无法在不扰动的情况下获得完整信息。

### 2. 测量坍缩

对量子态的测量会**不可逆地改变**该态。如果 Alice 和 Bob 发现误码率异常升高，即可判定存在窃听。

### 3. 海森堡不确定性原理

对非对易可观测量（如 BB84 中的两个偏振基）的测量存在根本限制，使得 Eve 无法同时获取完整信息。

## 主要协议

### BB84 协议（1984）

由 **Charles Bennett** 和 **Gilles Brassard** 提出 [1]，是首个也是最著名的 QKD 协议。

#### 数学描述

**Alice 的制备**:
- 随机选择比特 $b \in \{0, 1\}$
- 随机选择基矢 $B \in \{+, \times\}$
- 发送对应的光子偏振态

| 比特 | + 基矢 | × 基矢 |
|------|--------|--------|
| 0 | $|0\rangle$（水平） | $|+\rangle$（45°） |
| 1 | $|1\rangle$（垂直） | $|-\rangle$（135°） |

**Bob 的测量**:
- 随机选择基矢测量
- 记录结果

**经典后处理**:
1. **基矢比对**（sifting）：公开比对基矢选择，保留相同基矢的结果
2. **误码估计**（error estimation）：采样估计误码率
3. **纠错**（error correction）：使用经典协议修正错误
4. **隐私放大**（privacy amplification）：用哈希函数压缩密钥，消除 Eve 可能获取的部分信息

#### 安全性参数

- **理论极限**: 当误码率 $e \lesssim 11\%$ 时，协议可证明安全
- **实际阈值**: 考虑设备不完美性，通常要求 $e \lesssim 20\%$

### E91 协议（1991）

**Artur Ekert** 提出了基于量子纠缠的 QKD 协议 [2]：

- 使用纠缠光子对源（如自发参量下转换）
- Alice 和 Bob 各自测量收到的一半纠缠对
- 通过检测 **CHSH 不等式**的违反程度来验证安全性

$$S = E(a,b) - E(a,b') + E(a',b) + E(a',b')$$

如果 $|S| > 2$，则违反 Bell 不等式，证明纠缠未被窃听。

**优势**:
- 不需要信任源设备（device-independent 的前身）
- 安全性与测量设备无关

### B92 协议（1992）

Bennett 提出的简化协议，只使用**两个非正交态**（而非 BB84 的四个）。安全性依赖于非正交态的不可区分性。

### 测量设备无关 QKD（MDI-QKD，2012）

由 Lo、Curty 和 Qi 提出，彻底消除了**探测器侧信道**漏洞：
- Alice 和 Bob 分别发送量子态给不可信的第三方 Charlie
- Charlie 进行贝尔态测量并公布结果
- Alice 和 Bob 根据 Charlie 的结果提取密钥

## 实际系统与挑战

### 光源

- **弱相干光**（attenuated laser）：最常用，但有概率发出多光子脉冲
- **单光子源**：理想但技术困难
- **诱骗态**（decoy-state）：解决多光子漏洞的实用方案

### 信道

| 信道类型 | 距离 | 优势 | 挑战 |
|---------|------|------|------|
| **光纤** | ~100–400 km | 成熟、稳定 | 损耗（~0.2 dB/km） |
| **自由空间** | ~1,000 km+ | 低损耗、卫星适用 | 大气湍流、天气 |

### 探测器

- **单光子雪崩二极管**（SPAD）：成熟，但有探测效率限制
- **超导纳米线**（SNSPD）：高效率、低暗计数，需低温

## 后量子密码学与量子密码学的关系

**后量子密码学**（Post-Quantum Cryptography, PQC）与量子密码学是**互补**的：

| 特性 | 量子密码学（QKD） | 后量子密码学（PQC） |
|------|------------------|-------------------|
| **安全基础** | 物理定律 | 数学复杂性 |
| **密钥分发** | 物理生成 | 算法协商 |
| **设备要求** | 专用量子设备 | 经典计算机即可 |
| **距离** | 有限（需中继） | 无限制 |
| **标准化** | 早期阶段 | NIST 已发布标准（2024） |

> **未来趋势**: "量子+经典"复合安全体系，QKD 用于密钥分发，PQC 用于数据加密。

## 标准化进展

- **ETSI**（欧洲电信标准化协会）: 2008 年起发布 QKD 标准系列
- **ITU-T**: Y.3800 系列建议书
- **ISO/IEC**: 23837（QKD 安全要求）
- **中国国家密码管理局**: 已发布 GM/T 标准

## 流传误区

::: warning
- **误区一**: "量子密码学可以替代所有经典加密。"
  - **澄清**: 量子密码学主要用于**密钥分发**，而非替代 AES、RSA 等加密算法本身。加密仍由经典算法完成。
- **误区二**: "量子密码学绝对安全，无法被攻击。"
  - **澄清**: 协议**理论上**安全，但**实际设备**存在侧信道漏洞（如探测器旁路攻击）。MDI-QKD 和 DI-QKD 正在解决这些问题。
- **误区三**: "量子计算机出现后立即能破解所有密码。"
  - **澄清**: Shor 算法可破解 RSA/ECC，但**对称加密**（如 AES）只需增加密钥长度即可抵抗。后量子密码学已提供替代方案。
- **误区四**: "量子密码学就是量子通信。"
  - **澄清**: 量子密码学是量子通信的一个**子集**，主要关注安全密钥分发。量子通信还包括量子隐形传态、量子网络等。
:::

## 相关条目

- [[quantum-communication]] — 量子通信
- [[quantum-computing]] — 量子计算
- [[quantum-entanglement]] — 量子纠缠
- [[bell-theorem]] — 贝尔定理
- [[applications/micius-satellite]] — 墨子号卫星

## 参考文献

1. **C. H. Bennett & G. Brassard** (1984). "Quantum cryptography: Public key distribution and coin tossing." *Proc. IEEE ICC*, 175–179. [A级 — BB84 原始论文]
2. **A. K. Ekert** (1991). "Quantum cryptography based on Bell's theorem." *Physical Review Letters*, **67**, 661–663. [DOI](https://doi.org/10.1103/PhysRevLett.67.661) [A级 — E91 协议]
3. **N. Gisin et al.** (2002). "Quantum cryptography." *Reviews of Modern Physics*, **74**, 145–195. [DOI](https://doi.org/10.1103/RevModPhys.74.145) [A级 — 权威综述]
4. **V. Scarani et al.** (2009). "The security of practical quantum key distribution." *Reviews of Modern Physics*, **81**, 1301–1350. [DOI](https://doi.org/10.1103/RevModPhys.81.1301) [A级 — 实用安全性综述]
