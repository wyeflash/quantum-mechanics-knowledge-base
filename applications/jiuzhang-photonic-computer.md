---
title: 九章光量子计算机
alias: Jiuzhang Photonic Quantum Computer
description: 中国科学技术大学潘建伟、陆朝阳团队研发的光量子计算原型机，2020年通过高斯玻色采样实现量子计算优越性，以中国古代数学经典《九章算术》命名。
tags:
  - china-quantum
  - quantum-computing
  - experiment
  - photonics
type: application
status: complete
created: 2026-05-08
updated: 2026-05-09
confidence: high
difficulty: intermediate
sources:
  - "H.-S. Zhong et al., 'Quantum computational advantage using photonic boson sampling', Nature 577, 660 (2020)"
  - "H.-S. Zhong et al., 'Phase-programmable Gaussian Boson Sampling using stimulated squeezed light', PRL 127, 180502 (2021)"
  - "C.-Y. Lu and J.-W. Pan, 'Quantum computational advantage using photons', Science 370, 1460 (2020)"
---

# 九章光量子计算机 (Jiuzhang Photonic Quantum Computer)

## 概述

**九章**（Jiuzhang）是中国科学技术大学**潘建伟**、**陆朝阳**团队研发的光量子计算原型机，于2020年首次实现**量子计算优越性**（quantum computational advantage），即在某些特定问题上，量子计算机的表现远超经典超级计算机。

其名称来源于中国古代数学经典**《九章算术》**（约公元前1世纪），这是中国最早的系统性数学著作之一，象征着中国古代数学智慧与现代量子科技的结合。

## 技术原理

### 高斯玻色采样（Gaussian Boson Sampling, GBS）

九章的核心计算任务是**高斯玻色采样**，属于**玻色采样**（Boson Sampling）问题的一个变体。

#### 玻色采样问题

Aaronson 和 Arkhipov（2011）证明：如果能在多项式时间内精确求解玻色采样问题，则意味着多项式层级（Polynomial Hierarchy, PH）会坍塌至第三层，这在计算复杂性理论中被认为极不可能。因此，**玻色采样被证明是经典计算机难以高效模拟的问题**。

高斯玻色采样利用**压缩态光**（squeezed light）作为输入，通过线性光学网络进行干涉，最后测量输出模式的光子数分布。

### 九章的架构

| 组件 | 技术参数 |
|---|---|
| 输入光源 | 25 个压缩态光源（squeezed states） |
| 干涉网络 | 100 模式线性光学网络 |
| 探测器 | 高探测效率单光子探测器 |
| 工作温度 | 常温（光子作为玻色子，无需超低温） |
| 工作波长 | 近红外 |

### 九章二号（2021年）

2021年，团队发布了**九章二号**，主要升级包括：

- 输入光源增至 **113 个压缩态**
- 可编程相位调制
- 高斯玻色采样输出空间维度达 $10^{43}$

## 量子计算优越性

### 2020年：九章 vs Fugaku

2020年的实验结果表明：

- **采样速率**：九章每秒可产生约 $10^6$ 个样本
- **经典模拟时间**：使用日本超级计算机**富岳**（Fugaku）模拟相同任务，估计需要约 **25亿年**
- **速度提升**：约 $10^{14}$ 倍

::: info 可信度说明
- **可信度**：★★★★★（*Nature* 正刊发表，同行评审）
- **验证状态**：已验证
- **来源**：[1][3]
:::

### 与 Google Sycamore 的比较

| 指标 | Google Sycamore（2019） | 九章（2020） |
|---|---|---|
| 量子比特类型 | 超导 | 光子 |
| 量子比特数 | 53 | 76（等效光子数） |
| 任务 | 随机电路采样 | 高斯玻色采样 |
| 经典模拟难度 | $10^3$ 年（Summit） | $2.5\times10^9$ 年（Fugaku） |
| 工作温度 | 15 mK | 常温 |

两者使用不同的物理体系（超导 vs 光子）和不同的问题（随机电路采样 vs 玻色采样），**不直接可比**，但都证明了量子计算优越性。

## 光量子计算的优势与挑战

### 优势

1. **常温运行**：光子与环境的耦合弱，不需要超低温
2. **长相干时间**：光子在光纤中可传输数百公里而保持相干
3. **天然适合量子通信**：与量子通信网络天然兼容

### 挑战

1. **可扩展性**：构建大规模光子干涉网络的技术难度高
2. **通用性**：当前九章仅能执行特定的采样任务，**不具备通用量子计算能力**
3. **纠错难度**：光子之间相互作用弱，实现通用量子门和量子纠错极具挑战

## 科学意义

### 计算复杂性理论

九章的实验为计算复杂性理论提供了**实验证据**：

- 支持了 Aaronson-Arkhipov 猜想
- 表明玻色采样问题确实难以被经典计算机高效模拟
- 为验证量子计算的计算能力提供了物理平台

### 技术路线验证

九章证明了**光量子计算路线**的可行性，为构建：

- 量子模拟器
- 专用量子计算设备
- 量子-经典混合计算架构

提供了重要的技术基础。

## 常见问题

**Q：九章是通用量子计算机吗？**

不是。九章是**专用量子计算原型机**，仅能执行高斯玻色采样这一特定任务。通用量子计算机需要实现任意的量子门操作和量子纠错，这是当前光量子计算路线面临的重大挑战。

**Q：九章的优势性任务有实际应用价值吗？**

目前的高斯玻色采样任务本身**没有直接的实际应用价值**。它的主要意义在于：

1. 验证量子计算的物理可行性
2. 为量子模拟和优化问题提供技术基础
3. 推动光量子技术的发展

未来，基于类似架构的**量子模拟器**可能在分子模拟、组合优化等领域找到实际应用。

## 参考文献

1. H.-S. Zhong *et al.*, "Quantum computational advantage using photonic Gaussian boson sampling", *Nature* **577**, 660–665 (2020). [DOI](https://doi.org/10.1038/s41586-020-2164-5)（A级）
2. H.-S. Zhong *et al.*, "Phase-programmable Gaussian Boson Sampling using stimulated squeezed light", *Phys. Rev. Lett.* **127**, 180502 (2021). [DOI](https://doi.org/10.1103/PhysRevLett.127.180502)（A级）
3. C.-Y. Lu and J.-W. Pan, "Quantum computational advantage using photons", *Science* **370**, 1460–1463 (2020). [DOI](https://doi.org/10.1126/science.abe8770)（A级：Perspective）
4. S. Aaronson and A. Arkhipov, "The computational complexity of linear optics", *Theory of Computing* **9**, 143–252 (2013). [arXiv](https://arxiv.org/abs/1011.3245)（A级：理论奠基）
5. 陆朝阳, "光量子计算：从玻色采样到量子优越性", *物理* **50**, 1–10 (2021).（C级：中文综述）

## 相关条目

- [[people/pan-jianwei]] — 潘建伟
- [[applications/zuchongzhi-quantum-computer]] — 祖冲之号超导量子计算机
- 量子计算
- 量子计算优越性
