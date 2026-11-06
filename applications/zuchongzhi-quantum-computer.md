---
title: 祖冲之号超导量子计算机
alias: Zuchongzhi Superconducting Quantum Computer
description: 中国科学技术大学潘建伟、朱晓波团队研发的超导量子计算原型机，2021年实现66量子比特，在随机电路采样任务上展示了量子计算优越性。
tags:
  - china-quantum
  - quantum-computing
  - experiment
  - superconducting
type: application
status: complete
created: 2026-05-08
updated: 2026-05-09
confidence: high
difficulty: advanced
sources:
  - "Y. Wu et al., 'Strong quantum computational advantage using a superconducting quantum processor', PRL 127, 180501 (2021)"
  - "Y. Wu et al., 'Quantum walks on a programmable two-dimensional 62-qubit superconducting processor', Science 372, 948 (2021)"
---

# 祖冲之号超导量子计算机 (Zuchongzhi Superconducting Quantum Computer)

## 概述

**祖冲之号**（Zuchongzhi）是中国科学技术大学**潘建伟**、**朱晓波**团队研发的**超导量子计算原型机**，于2021年首次实现。该原型机以中国古代著名数学家、天文学家**祖冲之**（429—500年）命名，以纪念他在圆周率计算上的卓越贡献。

祖冲之号的核心成就是实现了**66量子比特**的超导量子处理器，并在**随机电路采样**（Random Circuit Sampling, RCS）任务上展示了**量子计算优越性**，即其表现远超当时最强大的经典超级计算机。

## 技术架构

### 超导量子比特

祖冲之号采用**Transmon量子比特**，这是一种广泛使用的超导量子比特设计：

- **物理原理**：基于约瑟夫森结（Josephson junction）的非线性电感特性，形成类似原子的能级结构
- **工作温度**：约 **15 mK**（毫开尔文），需要稀释制冷机（dilution refrigerator）
- **能级非谐性**：Transmon 的非谐性约为 100–300 MHz，足够大以区分 $|0\rangle$ 和 $|1\rangle$ 跃迁

### 处理器参数

| 参数 | 祖冲之号（2021） | 祖冲之二号（2022） |
|---|---|---|
| 量子比特数 | 66 | 176 |
| 比特类型 | Transmon | Transmon |
| 连通性 | 二维网格 | 二维网格 |
| 单比特门保真度 | ~99.84% | ~99.9% |
| 双比特门保真度 | ~99.4% | ~99.5% |
| 退相干时间 $T_1$ | ~30 \mus | ~50 \mus |
| 读取保真度 | ~95% | ~97% |

### 二维网格架构

量子比特排列成**二维方形网格**，每个量子比特与最近邻的 4 个量子比特耦合：

```
●—●—●—●
| | | |
●—●—●—●
| | | |
●—●—●—●
```

这种架构便于实现**表面码**（surface code）量子纠错，是未来通用量子计算的关键路径。

## 量子计算优越性实验

### 随机电路采样（RCS）

祖冲之号的核心实验任务是**随机电路采样**：

1. 对量子比特阵列施加随机的单比特和双比特门序列
2. 测量所有量子比特的最终状态
3. 重复多次，统计输出概率分布

对于足够大的电路，经典计算机无法在合理时间内精确计算输出概率分布，因此需要通过采样来近似。

### 2021年实验结果

::: info 可信度说明
- **可信度**：★★★★★（*PRL* 正刊发表，同行评审）
- **验证状态**：已验证
- **来源**：[1][2]
:::

- **电路规模**：56 个量子比特、20 个循环层（cycles）
- **采样保真度**：约 0.14%
- **经典模拟时间估计**：使用当时最强超级计算机（Summit）模拟需要约 **10^4 年**
- **优势倍数**：约 $10^3$ 倍于 Google Sycamore（2019）

### 祖冲之二号（2022年）

2022年，团队发布了升级版**祖冲之二号**：

- 量子比特数提升至 **176**
- 实现了 **60 量子比特、24 层**的随机电路采样
- 经典模拟时间估计超过 $10^{10}$ 年
- 展示了**可编程二维量子行走**（quantum walks）

## 技术挑战

### 退相干

超导量子比特面临的主要挑战是**退相干**（decoherence）：

- **能量弛豫**（$T_1$）：量子比特从 $|1\rangle$ 衰变到 $|0\rangle$ 的特征时间
- **相位退相干**（$T_2$）：量子叠加态失去相位的特征时间
- 环境噪声（热噪声、电磁噪声、材料缺陷）是主要来源

祖冲之号的 $T_1 \approx 30$ \mus，意味着必须在几十微秒内完成所有量子门操作。

### 量子门保真度

虽然单比特门和双比特门的保真度已达到 99% 以上，但对于深度电路：

$$F_{\text{total}} \approx F_{\text{single}}^{N_s} · F_{\text{two}}^{N_t}$$

对于 56 量子比特、20 层的电路，总门数约为数千个，累积误差仍然显著。这也是采样保真度仅约 0.14% 的原因。

### 纠错需求

当前祖冲之号属于**NISQ**（Noisy Intermediate-Scale Quantum）设备，即含噪声的中等规模量子设备。要实现通用量子计算，需要：

- **量子纠错码**：如表面码，需要约 $10^3$–$10^4$ 个物理比特编码一个逻辑比特
- **纠错阈值**：物理门保真度需低于约 1% 的纠错阈值
- **大规模集成**：需要数百万量子比特才能实现有实际应用价值的通用量子计算

## 科学意义

### 验证量子计算优越性

祖冲之号与 Google Sycamore（2019）共同证明了：

1. **超导量子计算路线是可行的**
2. **量子计算优越性可以在特定任务上实现**
3. **NISQ 设备可以用于展示量子计算的基本能力**

### 技术路线验证

- 验证了**二维网格架构**的可扩展性
- 展示了**高保真度量子门**的制备能力
- 为**量子纠错**的实验验证提供了平台

## 与光量子计算的比较

| 特性 | 超导（祖冲之号） | 光量子（九章） |
|---|---|---|
| 工作温度 | 15 mK（超低温） | 常温 |
| 量子比特数 | 66–176 | 76（等效光子数） |
| 门操作 | 可编程通用门集 | 固定线性光学网络 |
| 纠错前景 | 表面码可行 | 极具挑战 |
| 通用性 | 有潜力实现通用计算 | 当前为专用设备 |
| 可扩展性 | 需要低温基础设施 | 需要高效光子源和探测器 |

两种路线各有优劣，中国同时布局两条路线，形成了**量子计算的"双轮驱动"**格局。

## 后续发展

### 量子纠错实验

2022–2023年，祖冲之号团队开始探索**量子纠错**实验：

- 实现了**距离-3 表面码**的演示
- 展示了**纠错后逻辑比特寿命优于物理比特**
- 为**容错量子计算**奠定了实验基础

### 远期目标

- **2025–2030年**：实现数百至数千量子比特，展示量子纠错优势
- **2030年后**：构建通用容错量子计算机

## 常见问题

**Q：祖冲之号能运行 Shor 算法或 Grover 算法吗？**

不能。当前祖冲之号是 NISQ 设备，量子比特数和门保真度远不足以运行需要数百万量子比特和极低保真度的通用量子算法。它仅能执行特定的采样任务。

**Q：祖冲之号与日常使用的计算机有什么区别？**

根本区别在于信息载体：
- 经典计算机使用**比特**（bit，0 或 1）
- 祖冲之号使用**量子比特**（qubit，$\alpha|0\rangle + \b\eta|1\rangle$）

量子比特可以处于叠加态，n 个量子比特可同时表示 $2^n$ 个状态，这使得量子计算机在特定问题上具有潜在的指数级加速能力。

## 参考文献

1. Y. Wu *et al.*, "Strong quantum computational advantage using a superconducting quantum processor", *Phys. Rev. Lett.* **127**, 180501 (2021). [DOI](https://doi.org/10.1103/PhysRevLett.127.180501)（A级）
2. Y. Wu *et al.*, "Quantum walks on a programmable two-dimensional 62-qubit superconducting processor", *Science* **372**, 948–952 (2021). [DOI](https://doi.org/10.1126/science.abf7817)（A级）
3. F. Arute *et al.*, "Quantum supremacy using a programmable superconducting processor", *Nature* **574**, 505–510 (2019). [DOI](https://doi.org/10.1038/s41586-019-1666-5)（A级：Google Sycamore）
4. J. M. Gambetta, *et al.*, "Investigating quantum speedup for random circuit sampling", *IBM Research* (2023). [arXiv](https://arxiv.org/abs/2306.14887)（A级）
5. 朱晓波, "超导量子计算：从优越性到量子纠错", *物理* **52**, 1–10 (2023).（C级：中文综述）

## 相关条目

- [[people/pan-jianwei]] — 潘建伟
- [[applications/jiuzhang-photonic-computer]] — 九章光量子计算机
- 量子计算
- 量子计算优越性
- 量子纠错
- 超导量子比特
