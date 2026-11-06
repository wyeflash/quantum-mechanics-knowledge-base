---
title: 量子传感
created: 2026-05-07
updated: 2026-05-09
type: application
status: complete
tags: [application, quantum-sensing, metrology, interferometry, gravity, magnetometry]
sources:
  - "V. Giovannetti et al., 'Quantum-enhanced measurements: Beating the standard quantum limit', Science 306, 1330 (2004)"
  - "C. L. Degen et al., 'Quantum sensing', Rev. Mod. Phys. 89, 035002 (2017)"
  - "J. P. Dowling, 'Quantum optical metrology — the lowdown on high-NOON states', Contemp. Phys. 49, 125 (2008)"
  - "R. Schnabel et al., 'Quantum metrology for gravitational wave astronomy', Nat. Commun. 1, 121 (2010)"
confidence: high
difficulty: advanced
---

# 量子传感 (Quantum Sensing)

## 概述

**量子传感**是利用量子力学特性（如叠加态、纠缠和压缩态）来测量物理量的技术。相比经典传感器，量子传感器可以达到**海森堡极限**（Heisenberg limit），将测量精度提升至经典**标准量子极限**（Standard Quantum Limit, SQL）的 $1/\sqrt{N}$ 以下。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Giovannetti 2004、Degen 2017 综述及 LIGO 量子压缩实验交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3][4]
:::

## 标准量子极限与海森堡极限

### 经典极限

对于 $N$ 个独立粒子，相位测量的**标准量子极限**（散粒噪声极限）为：

$$\Delta\phi_\text{SQL} = \frac{1}{\sqrt{N}}$$

这是经典统计的极限，来源于独立测量的中心极限定理。

### 量子极限

利用**量子纠缠**，理论上可以达到**海森堡极限**：

$$\Delta\phi_\text{HL} = \frac{1}{N}$$

这意味着使用纠缠态可以将测量精度提升 $\sqrt{N}$ 倍。

> **注意**: 海森堡极限需要**完美纠缠**和**无噪声**环境，实际中很难达到。通常实际性能介于 SQL 和 HL 之间。

## 主要技术

### 1. 原子干涉仪

利用原子的物质波性质，类似于光学干涉仪，但灵敏度更高：

$$\Delta g = \frac{\hbar^2}{m^2 L^2 T^2 \sqrt{N}}$$

**应用**:
- **重力测量**（gravity gradiometry）：资源勘探、地下空洞检测
- **惯性导航**：高精度陀螺仪和加速度计
- **基础物理检验**：等效原理检验、引力常数 $G$ 测量

**代表系统**:
- 冷原子干涉仪（如 NASA 的冷原子实验室）
- 玻色-爱因斯坦凝聚体（BEC）干涉仪

### 2. 光量子干涉仪

#### 激光干涉引力波天文台（LIGO）

LIGO 利用迈克尔孙干涉仪检测引力波引起的长度变化（约 $10^{-18}$ 米）。为了突破 SQL，LIGO 引入了：

- **压缩光**（squeezed light）：将光场的某一正交分量压缩至真空涨落以下
- 在 **aLIGO** 升级中，压缩光将探测范围扩展了约 15%

$$\hat{a}_\text{out} = \hat{a}_\text{in} \cosh r + \hat{a}_\text{in}^\dagger \sinh r$$

其中 $r$ 为压缩参数。

#### NOON 态

**NOON 态**（$N$-photon path-entangled state）是达到海森堡极限的理想态：

$$|\psi\rangle_\text{NOON} = \frac{1}{\sqrt{2}}\left(|N\rangle_a |0\rangle_b + |0\rangle_a |N\rangle_b\right)$$

NOON 态的相位灵敏度为 $\Delta\phi = 1/N$，但需要完美探测效率和极低的损耗。

### 3. 氮-空位色心（NV Center）

NV 色心是金刚石中的点缺陷，其电子自旋可作为**室温下工作的量子传感器**：

**原理**:
- NV 中心的能级对外部磁场、电场和温度敏感
- 通过光探测磁共振（ODMR）读出
- 空间分辨率可达**纳米级**

**应用**:
- **纳米级磁成像**：单分子磁共振、细胞磁成像
- **温度传感**：细胞内温度测量
- **电场传感**：单电荷检测

### 4. 超导量子干涉仪（SQUID）

**SQUID**（Superconducting Quantum Interference Device）是最早的量子传感器之一：

$$\Phi = \frac{\Phi_0}{2\pi} \Delta\theta$$

**灵敏度**: 可达 $10^{-18}$ T（单电子自旋磁矩级别）

**应用**:
- 心磁图（MEG）和脑磁图
- 无损检测
- 暗物质探测

### 5. 里德伯原子传感器

利用里德伯原子（高激发态原子）的**巨大极化率**来检测微波电场：

- 灵敏度可达 $\mu$V/m/Hz$^{1/2}$
- 频率范围：DC 到数百 GHz
- 不需要校准天线

## 量子传感 vs 量子计算

| 特性 | 量子传感 | 量子计算 |
|------|---------|---------|
| **量子比特数** | 较少（通常 1–100） | 较多（目标 1,000+） |
| **退相干容忍** | 相对较高 | 极低 |
| **纠错需求** | 通常不需要 | 必需 |
| **商业化程度** | 已有商用产品 | 探索阶段 |
| **成熟应用** | 重力测量、磁成像 | 尚无 |

**关键洞察**: 量子传感可能是**最早实现商业应用的量子技术**，因为它不需要大规模量子纠错。

## 前沿进展

### 量子增强显微镜

利用**压缩光**和**量子关联**提高光学显微镜的分辨率和灵敏度：
- 荧光显微镜的信噪比提升
- 超分辨率成像的量子方案

### 量子雷达

利用量子纠缠提高雷达的目标检测能力：
- **量子照明**（quantum illumination）：在强噪声和损耗环境中检测弱信号
- 理论上信噪比可提高 3–6 dB

### 暗物质与暗能量探测

量子传感器在基础物理研究中发挥关键作用：
- 轴子（axion）探测
- 原初引力波探测
- 暗能量性质检验

## 流传误区

::: warning
- **误区一**: "量子传感器可以无限精确。"
  - **澄清**: 量子传感仍受海森堡极限约束，且实际中**噪声和退相干**会严重限制性能。不能达到"无限精确"。
- **误区二**: "量子传感器就是微型量子计算机。"
  - **澄清**: 量子传感通常只使用少量量子比特（1–100），**不需要量子纠错**。与量子计算的工程挑战完全不同。
- **误区三**: "量子传感器可以检测任何物理量。"
  - **澄清**: 不同量子传感器对特定物理量敏感（如 NV 色心对磁场敏感，原子干涉仪对重力和加速度敏感），不存在"万能"量子传感器。
- **误区四**: "量子传感已经成熟到可以大规模商用。"
  - **澄清**: 部分应用（如 SQUID、原子钟）已商用，但**高精度量子传感**（如量子增强引力波探测、NOON 态成像）仍处于实验室阶段。
:::

## 相关条目

- [[quantum-computing]] — 量子计算
- [[quantum-communication]] — 量子通信
- [[quantum-entanglement]] — 量子纠缠
- [[decoherence]] — 退相干
- [[uncertainty-principle]] — 不确定性原理

## 参考文献

1. **V. Giovannetti et al.** (2004). "Quantum-enhanced measurements: Beating the standard quantum limit." *Science*, **306**, 1330–1336. [DOI](https://doi.org/10.1126/science.1104149) [A级 — 量子增强测量理论奠基]
2. **C. L. Degen et al.** (2017). "Quantum sensing." *Reviews of Modern Physics*, **89**, 035002. [DOI](https://doi.org/10.1103/RevModPhys.89.035002) [A级 — 权威综述]
3. **J. P. Dowling** (2008). "Quantum optical metrology — the lowdown on high-NOON states." *Contemporary Physics*, **49**, 125–143. [DOI](https://doi.org/10.1080/00107510802091298) [B级 — NOON 态教学]
4. **R. Schnabel et al.** (2010). "Quantum metrology for gravitational wave astronomy." *Nature Communications*, **1**, 121. [DOI](https://doi.org/10.1038/ncomms1122) [A级 — LIGO 压缩光]
