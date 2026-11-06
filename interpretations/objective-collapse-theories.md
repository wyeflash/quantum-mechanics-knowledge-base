---
title: 客观坍缩理论
created: 2026-05-09
updated: 2026-05-09
type: interpretation
status: complete
tags: [interpretation, objective-collapse, measurement, wave-function, foundations]
sources:
  - "G. C. Ghirardi, A. Rimini & T. Weber, 'Unified dynamics for microscopic and macroscopic systems', Phys. Rev. D 34, 470 (1986)"
  - "P. Pearle, 'Combining stochastic dynamical state-vector reduction with spontaneous localization', Phys. Rev. A 39, 2277 (1989)"
  - "A. Bassi et al., 'Models of wave-function collapse, underlying theories, and experimental tests', Rev. Mod. Phys. 85, 471 (2013)"
  - "G. Ghirardi, 'Collapse Theories', Stanford Encyclopedia of Philosophy (2020)"
confidence: high
difficulty: advanced
---

# 客观坍缩理论 (Objective Collapse Theories)

## 概述

**客观坍缩理论**把“波函数坍缩”从测量公设提升为真实的物理动力学：波函数不仅按薛定谔方程演化，还会以极小概率发生自发、随机、非线性的局域化。其代表模型是 **GRW 模型**（Ghirardi–Rimini–Weber, 1986）和 **CSL 模型**（Continuous Spontaneous Localization）。

::: info 可信度说明
- **可信度**: ★★★★★（基于 GRW 1986 原始论文、Pearle 1989 CSL 模型、Bassi 等 2013 RMP 权威综述与 SEP 条目交叉验证）
- **验证状态**: 已验证；该类模型与标准量子力学在宏观极限上近似一致，但在若干精密实验中可受约束。
- **来源**: [1][2][3][4]
:::

## 核心主张

### 1. 坍缩是物理过程，而非观察者更新知识

在[[copenhagen-interpretation|哥本哈根诠释]]中，坍缩通常作为测量规则出现；在客观坍缩理论中，坍缩是与测量者无关的自然过程。因此它直接回应[[measurement-problem|测量问题]]：宏观物体之所以不保持可观测叠加，是因为大量粒子的自发局域化会被“放大”。

### 2. GRW 的自发局域化机制

GRW 模型假设单个粒子以极低频率发生自发局域化；对含有 $N$ 个粒子的宏观物体，总坍缩率近似随 $N$ 放大。这使微观系统几乎不受影响，而宏观指针态很快变成确定结果。

典型表述是将通常的线性演化：

$$i\hbar\frac{\partial}{\partial t}|\psi\rangle=\hat H|\psi\rangle$$

替换为“线性演化 + 随机局域化跳跃”的混合动力学。局域化宽度与发生率是模型参数，必须由实验约束。

### 3. CSL 的连续随机动力学

CSL 模型把 GRW 的离散跳跃推广为连续随机过程：波函数持续受到噪声场驱动而倾向于质量密度局域化。CSL 更适合处理场论与连续测量情形，也是现代实验检验中最常讨论的坍缩模型之一。

## 与其他诠释的关系

| 维度 | 客观坍缩理论 | 多世界 | 导波理论 | 退相干 |
|------|--------------|--------|----------|--------|
| 是否修改量子动力学 | 是 | 否 | 否（增加粒子位置本体） | 否 |
| 是否有真实坍缩 | 是 | 否 | 否 | 否 |
| 是否给出单一结果 | 是 | 每个分支各有结果 | 是 | 单独不能 |
| 是否可能与标准量子力学实验区分 | 原则上可以 | 通常不可以 | 平衡态下通常不可以 | 不是独立理论 |

## 可检验性与实验约束

客观坍缩理论的优势之一是**可受实验检验**。如果坍缩噪声真实存在，可能导致：

- 干涉可见度随质量或尺度出现额外衰减；
- 冷原子、纳米机械振子或大分子干涉中出现异常退相干；
- 质量密度噪声带来极弱的自发辐射或加热效应。

Bassi 等 2013 年的 *Reviews of Modern Physics* 综述系统总结了 GRW/CSL 模型、参数空间和实验约束，是该主题的权威入口 [3]。

## 哲学启示

客观坍缩理论采取一种“动力学实在论”：波函数是物理实在的一部分，坍缩不是知识更新，而是自然界的随机事件。它牺牲了标准量子力学的严格线性与幺正性，换取了对单一测量结果的直接解释。

## 当前学术共识程度

客观坍缩理论不是主流教材的默认框架，但在量子基础研究中被认真对待，原因是它比许多纯诠释更具实验可区分性。现有实验尚未发现偏离标准量子力学的坍缩信号，但持续压缩其参数空间。

## 流传误区

::: warning
- **误区一**: “客观坍缩就是退相干。”
  - **澄清**: [[decoherence-interpretation|退相干]]仍是线性幺正演化，不会产生单一结果；客观坍缩明确引入非线性随机动力学。
- **误区二**: “坍缩理论只是哲学说法，无法检验。”
  - **澄清**: GRW/CSL 参数会影响大质量叠加、低温机械系统和自发辐射等实验，是可受约束的物理模型。
- **误区三**: “客观坍缩已经被实验排除。”
  - **澄清**: 部分参数空间已被排除，但并不存在对所有坍缩模型的一次性排除。
:::

## 相关条目

- [[measurement-problem]] — 测量问题
- [[wave-function-collapse]] — 波函数坍缩
- [[decoherence-interpretation]] — 退相干诠释
- [[many-worlds-interpretation]] — 多世界诠释
- [[pilot-wave-theory]] — 导波理论
- [[quantum-interpretations-comparison]] — 量子力学诠释对比

## 参考文献

1. **G. C. Ghirardi, A. Rimini & T. Weber** (1986). “Unified dynamics for microscopic and macroscopic systems.” *Physical Review D*, **34**, 470–491. [DOI](https://doi.org/10.1103/PhysRevD.34.470) [A级 — GRW 原始模型]
2. **P. Pearle** (1989). “Combining stochastic dynamical state-vector reduction with spontaneous localization.” *Physical Review A*, **39**, 2277–2289. [DOI](https://doi.org/10.1103/PhysRevA.39.2277) [A级 — CSL 模型]
3. **A. Bassi, K. Lochan, S. Satin, T. P. Singh & H. Ulbricht** (2013). “Models of wave-function collapse, underlying theories, and experimental tests.” *Reviews of Modern Physics*, **85**, 471–527. [DOI](https://doi.org/10.1103/RevModPhys.85.471) [A级 — 权威综述]
4. **G. Ghirardi** (2020). “Collapse Theories.” *Stanford Encyclopedia of Philosophy*. [B级 — 权威百科]
