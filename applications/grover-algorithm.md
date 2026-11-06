---
title: 格罗弗算法
description: Grover 算法在无结构搜索中提供平方级量子加速，是理解量子算法能力边界的典型例子。
tags: [quantum-computing, algorithm, security]
type: application
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: intermediate
sources:
  - "L. K. Grover, A fast quantum mechanical algorithm for database search, STOC 1996"
  - "L. K. Grover, Quantum Mechanics Helps in Searching for a Needle in a Haystack, Phys. Rev. Lett. 79, 325 (1997)"
  - "M. A. Nielsen and I. L. Chuang, Quantum Computation and Quantum Information, 2010"
---

# Grover 算法 (Grover's Algorithm)

## 概述

Grover 算法用于无结构搜索问题：在 $N$ 个候选项中寻找满足条件的目标。经典算法平均需要 $O(N)$ 次查询，而 Grover 算法只需 $O(\sqrt{N})$ 次查询，实现平方级加速。

::: info 可信度说明
- **可信度**: ★★★★★（Grover 原始论文与量子信息教材一致）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 核心机制

Grover 算法的关键是振幅放大（amplitude amplification）：

1. 制备所有候选项的均匀叠加态。
2. 用 oracle 标记目标项的相位。
3. 通过扩散算符把目标态振幅逐步放大。
4. 重复约 $\sqrt{N}$ 次后测量，目标结果以高概率出现。

这不是“同时检查全部答案后直接读出”，因为测量只能给出一个结果；算法的威力来自相干演化中的干涉放大。

## 对密码学的意义

Grover 算法可对对称密钥穷举搜索提供平方加速。因此，面对大规模量子计算机，常见策略是加倍对称密钥长度。例如 128 位安全性若面对 Grover 搜索，通常需要提升到约 256 位密钥来保持类似安全余量。

与[[shor-algorithm|Shor 算法]]相比，Grover 算法对密码学的威胁更温和：它提供平方加速，而不是指数级或超多项式突破。

## 能力边界

Grover 算法对“无结构搜索”最典型；若问题有额外结构，可能存在更好或更差的算法。它不能把所有 NP 完全问题自动变成易解问题，也不意味着量子计算可在所有搜索任务中指数加速。

## 流传误区

- ❌ “Grover 算法能瞬间找到答案” → ✅ 它仍需约 $\sqrt{N}$ 次查询，只是比经典无结构搜索更快。
- ❌ “Grover 算法破解所有密码” → ✅ 它主要影响暴力搜索安全裕度，对公钥密码的核心威胁来自 Shor 算法。
- ❌ “量子并行性本身就是答案” → ✅ 关键是振幅放大与干涉，不是简单并行枚举。

## 相关条目

- [[quantum-computing]] — 量子计算
- [[shor-algorithm]] — Shor 算法
- [[nisq-era]] — NISQ 时代
- [[quantum-cryptography]] — 量子密码学
- [[concepts/quantum-superposition]] — 量子叠加态

## 参考文献

1. L. K. Grover, "A fast quantum mechanical algorithm for database search", *STOC 1996*, 212-219. [DOI](https://doi.org/10.1145/237814.237866)（A级原始会议论文）
2. L. K. Grover, "Quantum Mechanics Helps in Searching for a Needle in a Haystack", *Physical Review Letters* **79**, 325-328 (1997). [DOI](https://doi.org/10.1103/PhysRevLett.79.325)（A级论文）
3. M. A. Nielsen and I. L. Chuang, *Quantum Computation and Quantum Information*, Cambridge University Press, 2010.（B级教材）
