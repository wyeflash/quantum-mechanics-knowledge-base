---
title: 为什么量子计算机不是万能超算
created: 2026-05-10
updated: 2026-05-10
type: query
tags: [quantum-computing, algorithm, misconception, beginner]
status: complete
confidence: high
difficulty: beginner
sources:
  - Nielsen, Michael A.; Chuang, Isaac L. Quantum Computation and Quantum Information, Cambridge University Press, 2010.
  - Preskill, John. Quantum Computing in the NISQ era and beyond. Quantum 2, 79 (2018). https://doi.org/10.22331/q-2018-08-06-79
  - Shor, Peter W. Algorithms for quantum computation: discrete logarithms and factoring. Proceedings 35th Annual Symposium on Foundations of Computer Science, 1994. https://doi.org/10.1109/SFCS.1994.365700
---

# 为什么量子计算机不是万能超算？(Why Quantum Computers Are Not Universal Supercomputers)

简短回答：**量子计算机可能在特定问题上显著加速，但并不会把所有计算任务都变快。**

“量子计算机=比所有经典计算机都快”的说法，是最常见的量子技术误区之一。

::: info 可信度说明
量子计算在因数分解、量子模拟、某些搜索和线性代数子任务上有理论优势；但这种优势依赖问题结构、算法、错误率和输入输出成本。本文以量子信息标准教材和 NISQ 时代综述为依据。
:::

## 量子计算快在哪里？

量子计算利用 [[concepts/quantum-superposition|量子叠加]]、[[concepts/quantum-entanglement|纠缠]] 和干涉来操控概率幅。它的优势不是“同时试完所有答案然后直接读出”，而是通过算法设计让错误路径相互抵消、正确路径概率增强。

典型例子包括：

- [[applications/shor-algorithm|Shor 算法]]：对整数分解和离散对数有指数级加速。
- [[applications/grover-algorithm|Grover 算法]]：对无结构搜索有平方级加速。
- 量子模拟：对某些量子多体系统，量子设备可能天然更适合模拟。

## 为什么它不是万能超算？

### 1. 不是所有问题都有量子加速

很多日常任务，例如网页服务、文字处理、普通数据库业务、图像格式转换，并没有已知量子算法能带来通用巨大加速。

### 2. 读出信息受到限制

量子态可以含有复杂概率幅，但测量只能得到有限经典结果。不能把指数维量子态中的所有信息一次性读出来。

### 3. 量子硬件很脆弱

真实设备受噪声、退相干、门错误和读出错误限制。[[applications/nisq-era|NISQ 时代]]设备尤其如此。要运行大规模可靠算法，通常需要 [[applications/quantum-error-correction|量子纠错]]。

### 4. 输入输出也有成本

把经典数据装载进量子态、从量子测量中提取答案，都可能抵消理论加速。如果忽略这些成本，就容易夸大量子优势。

## “量子霸权”是否说明万能？

不是。量子优越性或量子霸权实验通常展示某个专门采样任务上量子设备超过经典模拟能力。它并不意味着该设备能更快完成所有有用任务。

[[applications/zuchongzhi-quantum-computer|祖冲之量子计算原型机]]和 [[applications/jiuzhang-photonic-computer|九章光量子计算原型机]]的重要性在于展示特定物理平台的采样能力，而不是宣称替代通用经典计算。

## 与经典计算的关系

未来实用量子计算更可能是“量子加速器 + 经典计算机”的混合体系，而不是完全取代经典计算机。经典计算仍负责控制、编译、纠错解码、数据处理和大量普通任务。

可继续阅读 [[comparisons/quantum-computing-vs-classical-computing|量子计算与经典计算]]。

## 流传误区

- **误区：量子计算机能瞬间破解所有密码。** 纠正：Shor 算法威胁特定公钥密码，不等于所有密码全部失效。
- **误区：量子比特越多就一定越强。** 纠正：还要看保真度、连通性、纠错开销和算法适配。
- **误区：量子计算机会替代所有经典计算机。** 纠正：更可能成为特定任务的加速器。

## 相关条目

- [[applications/quantum-computing|量子计算]]
- [[applications/nisq-era|NISQ 时代]]
- [[applications/quantum-error-correction|量子纠错]]
- [[comparisons/quantum-computing-vs-classical-computing|量子计算与经典计算]]
