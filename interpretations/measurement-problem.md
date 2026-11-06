---
title: 测量问题
created: 2026-05-07
updated: 2026-05-09
type: concept
status: complete
tags: [interpretation, measurement, foundations, decoherence, von-neumann, wigner]
sources:
  - "J. von Neumann, Mathematische Grundlagen der Quantenmechanik, Springer, 1932"
  - "E. Schrödinger, 'Die gegenwärtige Situation in der Quantenmechanik', Naturwissenschaften 23, 807 (1935)"
  - "E. P. Wigner, 'Remarks on the Mind-Body Question', in The Scientist Speculates, Heinemann, 1961"
  - "M. Schlosshauer, 'Decoherence, the measurement problem, and interpretations of quantum mechanics', Rev. Mod. Phys. 76, 1267 (2004)"
  - "J. Bub, 'Quantum Mechanics is About Quantum Information', Found. Phys. 35, 541 (2005)"
confidence: high
difficulty: advanced
---

# 测量问题 (Measurement Problem)

## 概述

**测量问题**是量子力学最深层的概念难题之一：如果量子系统的演化始终遵循**薛定谔方程**（线性、确定性、幺正的），那么为什么测量结果却是**随机的、确定的单一值**？从叠加态到单一结果的"跳跃"，在数学上与薛定谔方程的平滑演化相矛盾。

::: info 可信度说明
- **可信度**: ★★★★★（基于 von Neumann 1932、Schrödinger 1935、Schlosshauer 2004 综述及 SEP 交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3][4][5]
:::

## 问题的形式化表述

### 两条不可调和的动力学规则

冯·诺依曼在1932年的《量子力学的数学基础》中首次明确区分了量子力学的**两条规则** [1]：

**规则一：薛定谔演化**（Process 2）
$$i\hbar\frac{\partial}{\partial t}|\psi\rangle = \hat{H}|\psi\rangle$$

这一演化是**线性**、**确定性**、**幺正**且**可逆**的。如果初态是叠加态，薛定谔方程保证它永远是叠加态。

**规则二：测量/投影**（Process 1）
$$|\psi\rangle = \sum_n c_n |n\rangle \quad \xrightarrow{\text{测量}} \quad |n_0\rangle$$

概率为 $|c_{n_0}|^2$。这一"跳跃"是**非线性**、**随机**、**不可逆**的。

### 核心矛盾

> 如果规则一是普适的，那么规则二就不应该发生；如果规则二确实发生，那么规则一就不是普适的。

## 薛定谔的猫：思想实验

1935年，[[erwin-schrodinger|薛定谔]] 提出了著名的[[schrodingers-cat|思想实验]] [2]，将测量问题推向极端：

```
放射性原子（叠加态：衰变 + 未衰变）
    ↓
盖革计数器
    ↓
继电器
    ↓
锤子
    ↓
氰化物瓶 \leftarrow 猫
```

如果原子处于叠加态，根据规则一，猫也应处于**叠加态**：

$$|\Psi\rangle = \frac{1}{\sqrt{2}}\left(|\text{活猫}\rangle + |\text{死猫}\rangle\right)$$

但我们从未观察到"既死又活"的猫。为什么宏观世界没有出现量子叠加？

## 各种解释的路径

### 1. 哥本哈根诠释：划一条界线

[[copenhagen-interpretation|哥本哈根诠释]] 的解决方案是：**在量子系统与经典测量仪器之间划一条界线**。量子系统遵循规则一，经典仪器遵循规则二。但这一界线究竟在哪里？冯·诺依曼证明，这条界线可以任意移动（von Neumann chain），但最终的"坍缩"必须发生在某个地方。

### 2. 冯·诺依曼-维格纳：意识导致坍缩

[[john-von-neumann|冯·诺依曼]] 和 维格纳（Eugene Wigner） 将 von Neumann chain 推到极致：如果测量装置本身也由量子力学描述，那么最终的坍缩只能发生在**
意识**介入时 [3]。

> "只有意识的内容才是绝对的真实。" — 维格纳

这一观点虽然逻辑自洽，但被大多数物理学家视为过度拟人化。

### 3. 退相干：表象的消失

[[decoherence|退相干理论]]（Zeh 1970, Zurek 1980s）指出 [4]，宏观系统与其环境的相互作用会**迅速消除不同本征态之间的干涉项**：

$$\rho_{\text{系统}} = \sum_n |c_n|^2 |n\rangle\langle n| + \underbrace{\sum_{n\neq m} c_n c_m^* |n\rangle\langle m|}_{\rightarrow 0 \text{ (退相干)}}$$

退相干解释了为什么宏观世界"看起来"是经典的，但它**不能解释为什么只观察到单一结果**（即"结果问题"，problem of outcomes）。

### 4. 多世界诠释：没有坍缩

[[many-worlds-interpretation|多世界诠释]]（Everett 1957）干脆**取消了规则二**。测量不是坍缩，而是**宇宙的分裂**：所有可能的结果都在不同的"分支"中实现。观察者只是"被困在"某一个分支中。

### 5. 隐变量理论：结果预先存在

[[pilot-wave-theory|导波理论]]（de Broglie-Bohm）引入了**隐变量**（粒子位置），测量结果由粒子初始位置预先决定。叠加态只是"导波"的统计分布，粒子本身始终有确定位置。

## 现代共识与未解之谜

### 退相干 + 哥本哈根 = "实用主义"立场

大多数实验物理学家采取**实用主义立场**：
- 用退相干解释宏观世界的经典性
- 用哥本哈根诠释处理实验结果
- 不深究"坍缩究竟如何发生"

### 结果问题仍未解决

正如 Schlosshauer 在2004年的综述中强调 [4]：

> "退相干解释了为什么干涉消失，但它没有解释为什么只看到一个结果。"

这是测量问题的**硬核**，至今没有获得物理学界普遍认可的解答。

## 流传误区

::: warning
- **误区一**: "测量问题已经被退相干解决了。"
  - **澄清**: 退相干解决了**偏好基问题**（为什么测量指针指向特定方向而非叠加方向），但没有解决**结果问题**（为什么只看到单一结果）。
- **误区二**: "测量问题只存在于哲学讨论中，与实验无关。"
  - **澄清**: 测量问题驱动了**量子基础实验**（如延迟选择实验、量子擦除实验、Leggett-Garg 不等式检验）的设计，是实验量子力学的前沿课题之一。
- **误区三**: "薛定谔的猫证明量子力学是错误的。"
  - **澄清**: 薛定谔的猫是**归谬法**（reductio ad absurdum），旨在揭示哥本哈根诠释的困难，而非否定量子力学本身。量子力学在微观层面已被无数实验验证。
:::

## 相关条目

- [[wave-function-collapse]] — 波函数坍缩
- [[copenhagen-interpretation]] — 哥本哈根诠释
- [[many-worlds-interpretation]] — 多世界诠释
- [[pilot-wave-theory]] — 导波理论
- [[decoherence]] — 退相干
- [[schrodingers-cat]] — 薛定谔的猫
- [[john-von-neumann]] — 约翰·冯·诺依曼
- [[quantum-interpretations-comparison]] — 量子力学诠释对比

## 参考文献

1. **J. von Neumann** (1932). *Mathematische Grundlagen der Quantenmechanik*. Springer. [英译本: Princeton University Press, 1955] [A级 — 首次形式化测量问题]
2. **E. Schrödinger** (1935). "Die gegenwärtige Situation in der Quantenmechanik." *Naturwissenschaften*, **23**, 807–812. [A级 — 薛定谔的猫原始论文]
3. **E. P. Wigner** (1961). "Remarks on the Mind-Body Question." In *The Scientist Speculates*, Heinemann. [B级 — 意识导致坍缩]
4. **M. Schlosshauer** (2004). "Decoherence, the measurement problem, and interpretations of quantum mechanics." *Reviews of Modern Physics*, **76**, 1267–1305. [A级 — 权威综述]
5. **J. Bub** (2005). "Quantum Mechanics is About Quantum Information." *Foundations of Physics*, **35**, 541–566. [B级 — 信息论进路]
