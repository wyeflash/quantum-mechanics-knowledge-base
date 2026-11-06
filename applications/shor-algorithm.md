---
title: 肖尔算法
description: Shor 算法能在量子计算机上多项式时间分解大整数，是量子计算威胁公钥密码学的核心例子。
tags: [quantum-computing, algorithm, security]
type: application
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: advanced
sources:
  - "P. W. Shor, Algorithms for quantum computation: discrete logarithms and factoring, FOCS 1994"
  - "P. W. Shor, Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer, SIAM J. Comput. 26, 1484 (1997)"
  - "M. A. Nielsen and I. L. Chuang, Quantum Computation and Quantum Information, 2010"
---

# Shor 算法 (Shor's Algorithm)

## 概述

Shor 算法是量子计算最著名的算法之一。它表明理想量子计算机可以在多项式时间内完成整数分解和离散对数问题，而这些问题正是 RSA、Diffie-Hellman 和椭圆曲线密码等公钥密码体系的重要安全基础。

::: info 可信度说明
- **可信度**: ★★★★★（Shor 1994/1997 原始论文与标准量子信息教材一致）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 核心思想

Shor 算法把整数分解转化为周期寻找问题，再用量子傅里叶变换高效提取周期。其关键不是“并行试除所有因子”，而是利用量子相干性和干涉把周期信息放大到可测结果中。

粗略流程为：

1. 选择与待分解整数 $N$ 互素的整数 $a$。
2. 构造函数 $f(x)=a^x \bmod N$。
3. 用量子周期寻找估计 $f(x)$ 的周期 $r$。
4. 若条件合适，用 $\gcd(a^{r/2}\pm 1,N)$ 得到非平凡因子。

## 为什么它重要

Shor 算法首次清晰展示：量子计算不是仅仅“快一点”的计算模型，而可能改变密码学基础假设。它也是[[quantum-cryptography|量子密码学]]与后量子密码迁移讨论的重要动机。

## 工程现实

在真实世界中运行可威胁现代 RSA 密钥长度的 Shor 算法，需要大量高质量逻辑量子比特、深量子电路和[[quantum-error-correction|量子纠错]]。现有[[nisq-era|NISQ]] 设备距离这一目标仍有显著差距。

## 与中国进展

中国的量子计算原型机展示了特定采样任务的量子计算优越性，但这与运行大规模 Shor 算法不是同一类任务。理解这一区别，有助于避免把“量子优势实验”误解为“已经能破解现代密码”。

## 流传误区

- ❌ “Shor 算法已经破解了 RSA” → ✅ 算法理论成立，但大规模容错硬件尚未实现。
- ❌ “Shor 算法让所有加密都失效” → ✅ 它主要威胁基于分解和离散对数的公钥密码，不直接破解一次一密或对称密码的全部安全性。
- ❌ “Shor 算法靠同时尝试所有因子” → ✅ 核心是周期寻找与量子傅里叶变换。

## 相关条目

- [[quantum-computing]] — 量子计算
- [[quantum-error-correction]] — 量子纠错
- [[nisq-era]] — NISQ 时代
- [[grover-algorithm]] — Grover 算法
- [[quantum-cryptography]] — 量子密码学

## 参考文献

1. P. W. Shor, "Algorithms for quantum computation: discrete logarithms and factoring", *FOCS 1994*, 124-134. [DOI](https://doi.org/10.1109/SFCS.1994.365700)（A级原始会议论文）
2. P. W. Shor, "Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer", *SIAM Journal on Computing* **26**, 1484-1509 (1997). [DOI](https://doi.org/10.1137/S0097539795293172)（A级论文）
3. M. A. Nielsen and I. L. Chuang, *Quantum Computation and Quantum Information*, Cambridge University Press, 2010.（B级教材）
