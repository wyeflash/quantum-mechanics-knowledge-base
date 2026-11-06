---
title: 贝尔定理
alias: Bell's Theorem
description: 证明任何定域隐变量理论都无法复现量子力学全部统计预测的定理，由约翰·贝尔于1964年提出，奠定了量子非定域性的理论基础。
tags:
  - foundations
  - entanglement
  - nonlocality
  - experiment
type: concept
status: complete
created: 2026-05-08
updated: 2026-05-09
confidence: high
difficulty: advanced
sources:
  - "J. S. Bell, 'On the Einstein Podolsky Rosen Paradox', Physics 1, 195 (1964)"
  - "A. Aspect et al., 'Experimental Tests of Realistic Local Theories via Bell's Theorem', PRL 47, 460 (1981)"
  - "N. Brunner et al., 'Bell Nonlocality', Rev. Mod. Phys. 86, 419 (2014)"
---

# 贝尔定理 (Bell's Theorem)

## 概述

贝尔定理（Bell's theorem）是量子力学中最深刻的结论之一，它证明了**任何满足定域性（locality）和实在性（realism）假设的隐变量理论都无法复现量子力学的全部统计预测**。换言之，如果量子力学的预测是正确的，那么自然界就不可能同时满足定域性和实在性。

该定理由爱尔兰物理学家**约翰·斯图尔特·贝尔**（John Stewart Bell）于1964年提出，为量子非定域性（quantum nonlocality）提供了严格的数学基础。

## 历史背景：EPR 佯谬

1935年，爱因斯坦、波多尔斯基和罗森（Einstein–Podolsky–Rosen）发表著名论文，质疑量子力学的完备性。他们认为：

- **实在性**（realism）：物理实在的元素必须在理论中有对应
- **定域性**（locality）：对一个系统的测量不应瞬时影响远处的系统

EPR 构造了一个纠缠粒子对，论证量子力学是不完备的，需要引入**隐变量**（hidden variables）来恢复确定性描述。

### 玻尔的回应

尼尔斯·玻尔（Niels Bohr）反驳说，量子系统是不可分的整体，两个粒子即使空间分离也构成单一量子态。测量一个粒子会"瞬间"影响另一个粒子的状态——这是量子力学的内在特征，而非不完备性的证据。

## 贝尔不等式

### 原始形式（1964）

贝尔考虑两个自旋为 $1/2$ 的粒子组成的纠缠单态（singlet state）：

$$|\Psi^-\rangle=\frac{1}{\sqrt{2}}\bigl(|\uparrow\downarrow\rangle-|\downarrow\uparrow\rangle\bigr)$$

设 Alice 沿方向 $\mathbf{a}$ 测量粒子1的自旋，Bob 沿方向 $\mathbf{b}$ 测量粒子2的自旋。定义关联函数：

$$E(\mathbf{a},\mathbf{b})=\langle\sigma_1·\mathbf{a}\;\sigma_2·\mathbf{b}\rangle$$

对于定域隐变量理论，贝尔推导出了著名的**贝尔不等式**：

$$|E(\mathbf{a},\mathbf{b})-E(\mathbf{a},\mathbf{c})|\leq 1+E(\mathbf{b},\mathbf{c})$$

### CHSH 不等式（1969）

更实用的推广由 Clauser、Horne、Shimony 和 Holt 提出。设 Alice 和 Bob 各有两种测量选择（$A_1, A_2$ 和 $B_1, B_2$），每个测量结果为 $\pm1$。定义量：

$$S=E(A_1B_1)+E(A_1B_2)+E(A_2B_1)-E(A_2B_2)$$

对于任何定域隐变量理论，有**CHSH 不等式**：

$$|S|\leq 2$$

### 量子力学的预测

量子力学给出：

$$E(\mathbf{a},\mathbf{b})=-\mathbf{a}·\mathbf{b}$$

选择最优角度（如 $\mathbf{a}_1=0^\circ$, $\mathbf{a}_2=45^\circ$, $\mathbf{b}_1=22.5^\circ$, $\mathbf{b}_2=67.5^\circ$），量子力学预测：

$$S_{\text{QM}}=-2\sqrt{2}\approx -2.828$$

这**违反**了 CHSH 不等式 $|S|\leq 2$！

## 实验验证

### 里程碑实验

| 实验 | 年份 | 核心成果 | 漏洞 |
|---|---|---|---|
| Aspect 等 | 1981–82 | 首次观测到贝尔不等式违反 | 定域性漏洞 |
| Weihs 等 | 1998 | 快速随机切换测量基 | 定域性漏洞关闭 |
| Rowe 等 | 2001 | 高探测效率 | 探测效率漏洞 |
| Hensen 等 | 2015 | 无漏洞贝尔测试 | **无漏洞** |
| 潘建伟团队 | 2017 | 千公里级星地 Bell 测试 | 无漏洞 |

### 无漏洞贝尔测试

2015年，三个独立团队（Delft、Vienna、NIST）同时报道了**无漏洞**（loophole-free）贝尔测试：

- **定域性漏洞**（locality loophole）：测量设置选择足够快，确保信息无法以光速传递
- **探测效率漏洞**（detection loophole）：探测效率超过临界值 $2/3$
- **自由选择漏洞**（freedom-of-choice loophole）：测量基的选择真正随机

### 大贝尔实验（BIG Bell Test, 2016）

全球约10万名志愿者通过随机数生成器提供"人类自由意志"随机比特，用于设置测量基，进一步关闭了自由选择漏洞。

## 物理意义

### 定理的核心结论

贝尔定理表明以下三个命题**不能同时成立**：

1. 量子力学的统计预测是正确的
2. 物理系统具有独立于测量的**实在属性**
3. 物理影响不能**超光速传播**

大多数物理学家选择放弃(2)或(3)的组合解释：

- **标准哥本哈根诠释**：放弃实在性，测量结果在测量前不存在
- **多世界诠释**：放弃单值实在性，所有结果在分支宇宙中实现
- **超决定论**：放弃自由选择，测量设置和隐变量有共同原因

### 与相对论的关系

贝尔定理并不违反狭义相对论的**信号因果律**（signal causality）：量子关联不能用于超光速传递信息。但似乎存在某种**超定域关联**（superluminal correlation），其本质至今仍是量子基础研究的中心议题。

## 现代发展

### 设备无关量子密码（DI-QKD）

贝尔违反的量可用于**设备无关**地验证量子纠缠，无需信任测量设备本身。这是量子通信安全性的终极保障。

### 贝尔非定域性作为资源

贝尔非定域性被形式化为量子信息资源，与纠缠（entanglement）、导引（steering）共同构成量子关联的三层级结构：

$$\text{Entanglement}\supset\text{Steering}\supset\text{Bell\;nonlocality}$$

## 常见问题

**Q：贝尔定理证明了量子力学是"非定域"的吗？**

是的，但这是一种**非定域关联**，而非非定域信号传递。量子力学不允许超光速通信，但允许超越经典关联的统计相关性。

**Q：是否存在"更深层"的理论既能复现量子力学又满足定域实在性？**

贝尔定理的数学证明排除了这种可能——只要量子力学的统计预测正确，定域实在性就被否定。

## 参考文献

1. J. S. Bell, "On the Einstein Podolsky Rosen Paradox", *Physics* **1**, 195–200 (1964).（A级：原始论文）
2. J. F. Clauser *et al.*, "Proposed Experiment to Test Local Hidden-Variable Theories", *Phys. Rev. Lett.* **23**, 880 (1969).（A级）
3. A. Aspect *et al.*, "Experimental Tests of Realistic Local Theories via Bell's Theorem", *Phys. Rev. Lett.* **47**, 460 (1981).（A级）
4. B. Hensen *et al.*, "Loophole-free Bell Inequality Violation Using Electron Spins Separated by 1.3 Kilometres", *Nature* **526**, 682–686 (2015). [DOI](https://doi.org/10.1038/nature15759)（A级：无漏洞测试）
5. N. Brunner *et al.*, "Bell Nonlocality", *Rev. Mod. Phys.* **86**, 419–478 (2014). [DOI](https://doi.org/10.1103/RevModPhys.86.419)（A级：综述）
6. 潘建伟团队, "Satellite-based entanglement distribution over 1200 kilometers", *Science* **356**, 1140–1144 (2017). [DOI](https://doi.org/10.1126/science.aan3211)（A级）

## 相关条目

- [[people/john-bell]] — 约翰·斯图尔特·贝尔
- [[concepts/quantum-entanglement]] — 量子纠缠
- [[history/1935-epr-paradox-paper]] — EPR 佯谬
- [[concepts/wave-function-collapse]] — 波函数坍缩
- [[interpretations/copenhagen-interpretation]] — 哥本哈根诠释
- [[experiments/photon-box]] — 光子盒实验
