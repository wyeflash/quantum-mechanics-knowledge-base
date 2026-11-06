---
title: 应用与前沿
created: 2026-05-07
updated: 2026-05-10
type: index
tags: [index]
status: complete
difficulty: beginner
---

# 应用与前沿

本分类介绍量子力学在现代科技中的前沿应用。应用层现在按“**基础综述 → 技术路线图 → 关键瓶颈 → 中国进展**”组织，覆盖量子计算、量子通信与量子安全、量子传感三大方向。

> 📚 **Total articles:** 19

## 量子计算路线图

量子计算方向从“能做什么”进一步细分为 NISQ 阶段、核心算法、纠错与容错工程瓶颈。

| 文章 | 描述 |
|------|------|
| [量子计算](quantum-computing) | 量子计算的基本原理、量子比特、核心算法与应用边界。 |
| [NISQ 时代](nisq-era) | 含噪中等规模量子设备的实际能力边界、量子优势演示与容错前夜。 |
| [量子纠错](quantum-error-correction) | 表面码、综合征测量与容错量子计算的核心工程瓶颈。 |
| [Shor 算法](shor-algorithm) | 多项式时间分解大整数，是量子计算威胁公钥密码学的核心例子。 |
| [Grover 算法](grover-algorithm) | 无结构搜索平方加速的典型算法，展示量子算法能力边界。 |
| [祖冲之量子计算机](zuchongzhi-quantum-computer) | 中国科学技术大学研发的超导量子计算原型机，实现量子计算优越性相关实验。 |
| [九章光量子计算机](jiuzhang-photonic-computer) | 中国科学技术大学研发的光量子计算原型机，利用高斯玻色采样展示量子计算优越性。 |

## 量子通信与安全路线图

量子通信方向从 QKD 基础协议扩展到纠缠型方案、长距离中继与设备无关安全框架。

| 文章 | 描述 |
|------|------|
| [量子通信](quantum-communication) | 基于量子态传输、纠缠分发与 QKD 的安全通信技术。 |
| [量子密码学](quantum-cryptography) | 量子密钥分发、设备安全、后量子密码关系与工程实现问题。 |
| [BB84 协议](bb84-protocol) | 第一个 QKD 协议，利用非正交量子态与测量扰动实现窃听检测。 |
| [E91 协议](e91-protocol) | 利用纠缠和 Bell 不等式检验建立密钥，是设备无关思想的重要源头。 |
| [量子中继](quantum-repeater) | 通过纠缠交换、量子存储与纠缠纯化突破长距离信道损耗。 |
| [设备无关量子密钥分发](device-independent-qkd) | 基于 Bell 违背减少对设备内部模型信任的高安全路线。 |
| [墨子号卫星](micius-satellite) | 世界首颗量子科学实验卫星，实现星地 QKD 与远距离纠缠分发。 |

## 量子传感路线图

量子传感方向按平台与性能基准组织：固态自旋、超导器件、冷原子干涉与测量极限。

| 文章 | 描述 |
|------|------|
| [量子传感](quantum-sensing) | 量子传感原理、标准量子极限与海森堡极限、主要技术平台。 |
| [NV 色心](nv-center) | 金刚石缺陷自旋平台，可用于室温纳米磁测、温度和应力传感。 |
| [SQUID](squid) | 基于约瑟夫森效应和磁通量子化的超导量子干涉磁测器件。 |
| [原子干涉仪](atom-interferometer) | 利用物质波干涉测量加速度、重力、转动和基础物理参数。 |
| [标准量子极限](standard-quantum-limit) | 独立量子探针测量精度的典型边界，是判断量子增强的基准。 |

## 阅读建议

- 如果关注产业路线：先读 [NISQ 时代](nisq-era)、[量子纠错](quantum-error-correction)、[量子中继](quantum-repeater)、[标准量子极限](standard-quantum-limit)。
- 如果关注密码安全：先读 [Shor 算法](shor-algorithm)、[BB84 协议](bb84-protocol)、[设备无关量子密钥分发](device-independent-qkd)。
- 如果关注中国进展：结合 [祖冲之量子计算机](zuchongzhi-quantum-computer)、[九章光量子计算机](jiuzhang-photonic-computer)、[墨子号卫星](micius-satellite) 阅读。