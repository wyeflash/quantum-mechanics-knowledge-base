---
title: 量子力学主要诠释对比
created: 2026-05-07
updated: 2026-05-09
type: comparison
status: complete
tags: [comparison, interpretations, philosophy, measurement, copenhagen, many-worlds, pilot-wave]
sources: []
confidence: high
difficulty: advanced
---

# 量子力学主要诠释对比 (Comparison of Quantum Interpretations)

## 概述

量子力学的数学形式主义自 1920 年代建立以来取得了辉煌成功，但关于**数学背后的物理实在**究竟意味着什么，学界至今没有达成共识。本页面对比三种最具影响力的诠释框架：**哥本哈根诠释**、**多世界诠释**与**导航波理论**，并讨论它们与 [[measurement-problem|测量问题]] 的关系。

::: info 可信度说明
- **可信度**: ★★★★☆（基于 Stanford Encyclopedia of Philosophy 条目及原始论文，诠释问题本身存在学术争议）
- **验证状态**: 实验尚无法完全区分主流诠释
- **来源**: [1][2][3]
:::

---

## 核心对比一览

| 维度 | 哥本哈根诠释 | 多世界诠释 | 导航波理论 (德布罗意-玻姆) |
|------|------------|-----------|------------------------|
| **波函数本质** | 知识/概率工具，非物理实在 | 物理实在，描述整个多世界结构 | 物理实在（导波），引导粒子运动 |
| **粒子位置** | 测量前无确定位置 | 所有可能分支中都存在确定位置 | 始终有确定位置 |
| **测量过程** | 波函数坍缩（非幺正过程） | 无坍缩，宇宙分裂为平行分支 | 无坍缩，粒子始终沿确定轨道运动 |
| **不确定性** | 本体论性质，非无知 | 每个分支内仍有不确定性 | 表象不确定性（源于初值无知） |
| **定域性** | 非定域（瞬时的波函数坍缩） | 非定域（整体波函数演化） | 非定域（导波可瞬时关联） |
| **隐变量** | 无 | 无（但多世界本身是一种"隐现实"） | 有（粒子精确位置） |
| **哲学倾向** | 实证主义/工具主义 | 实在论（极端多元宇宙） | 实在论（决定论） |
| **主流程度** | 教科书默认，教学主导 | 在宇宙学和量子引力中流行 | 小众但持续活跃 |

---

## 哥本哈根诠释 (Copenhagen Interpretation)

### 核心主张

以 [[niels-bohr|玻尔]] 和 [[werner-heisenberg|海森堡]] 为代表，核心观点包括：

1. **波函数是完备描述**：$|\psi|^2$ 给出测量概率，不存在更深层的隐变量
2. **互补原理**：粒子的波动性与粒子性无法同时观测，它们是互补的方面
3. **波函数坍缩**：测量导致波函数从叠加态**瞬间坍缩**到某一本征态
4. **经典仪器不可或缺**：测量必须用经典语言描述，量子-经典界限是理论的一部分

### 数学形式

测量前：$|\psi\rangle = \sum_n c_n |n\rangle$

测量后（以结果 $m$ 为例）：$|\psi\rangle \x\rightarrow{\text{测量}} |m\rangle$，概率为 $|c_m|^2$

### 主要批评

- **测量问题**：什么是"测量"？波函数坍缩是物理过程还是认知更新？
- **经典-量子界限模糊**：为何经典世界不受叠加原理支配？
- **非定域性**：EPR 实验中坍缩似乎是瞬时的

---

## 多世界诠释 (Many-Worlds Interpretation)

### 核心主张

由休·埃弗雷特三世 (Hugh Everett III) 于 1957 年提出：

> **测量不会导致坍缩，而是导致宇宙"分裂"为多个平行分支，每个分支对应一个可能的结果。**

### 数学形式

测量前后，波函数始终遵循**幺正演化**（薛定谔方程）：

$$|\psi\rangle = \sum_n c_n |n\rangle_{\text{系统}} |\text{就绪}\rangle_{\text{仪器}} \x\rightarrow{\text{演化}} \sum_n c_n |n\rangle_{\text{系统}} |\text{记录 }n\rangle_{\text{仪器}}$$

每个求和项对应一个**独立分支**（世界），观测者只感知到自己所在的分支。

### 关键概念

- **相对态 (Relative State)**：仪器状态与系统状态纠缠在一起
- **退相干 (Decoherence)**：环境相互作用使各分支无法相互干涉
- **概率问题**：如何从确定论演化中导出玻恩概率规则？（仍是活跃研究课题）

### 主要批评

- **本体论膨胀**：需要假设存在无数不可观测的平行宇宙
- **概率问题**：为何我"感觉"到的是概率性的？
- **可证伪性**：平行世界原则上不可观测

---

## 导航波理论 (Pilot-Wave Theory / Bohmian Mechanics)

### 核心主张

由 [[louis-de-broglie|德布罗意]] 于 1927 年提出，1952 年由戴维·玻姆重新发现：

> **粒子始终具有确定的位置和动量，但其运动受一个"导航波" $\psi$ 的引导。**

### 数学形式

将波函数写为 $\psi(\mathbf{r},t) = R(\mathbf{r},t) e^{iS(\mathbf{r},t)/\hbar}$，代入薛定谔方程后分离实部与虚部，得到：

1. **连续性方程**：$\frac{\partial \rho}{\partial t} + \nabla · (\rho \mathbf{v}) = 0$，其中 $\rho = |\psi|^2$
2. **引导方程 (Guidance Equation)**：

$$\frac{d\mathbf{r}}{dt} = \mathbf{v}(\mathbf{r},t) = \frac{1}{m} \nabla S(\mathbf{r},t) = \frac{\hbar}{m} \text{Im}\left(\frac{\nabla \psi}{\psi}\right)$$

3. **量子势 (Quantum Potential)**：

$$Q = -\frac{\hbar^2}{2m} \frac{\nabla^2 R}{R}$$

粒子运动由经典势 $V$ 和量子势 $Q$ 共同决定。

### 特点

- **完全决定论**：给定初值 $\psi$ 和 $\mathbf{r}(0)$，未来完全确定
- **非定域性**：量子势 $Q$ 可以瞬时关联远距离粒子
- **与标准量子力学完全等价**：所有实验预测与哥本哈根诠释一致

### 主要批评

- **量子势的特设性**：$Q$ 没有独立的物理来源，似乎只是从薛定谔方程"构造"出来的
- **复杂多体系统的计算困难**：需要知道整个系统的波函数才能确定单个粒子的轨道
- **相对论推广的困难**：量子场论中的推广仍在研究中

---

## 三者与测量问题的关系

| 诠释 | 如何解决"为何测量得到确定结果？" |
|------|-------------------------------|
| **哥本哈根** | 测量是基本公设，波函数坍缩是额外的非幺正过程 |
| **多世界** | 无需要确定结果——所有结果都在不同分支中实现 |
| **导航波** | 粒子始终有确定位置，测量只是发现其已有位置 |

---

## 实验能否区分？

### 当前共识

目前三种诠释在**已知的所有实验**中给出完全相同的预测。因此：

> **量子力学诠释在科学上属于"诠释"范畴，而非可被实验裁决的理论分歧。**

### 未来的可能性

一些研究者正在探索理论上可能区分诠释的方案：

- **引力导致的坍缩模型**（如 GRW、Penrose 方案）：修改薛定谔方程，预言与标准量子力学微小偏差
- **量子达尔文主义**：研究退相干如何筛选出经典指针态
- **量子引力效应**：在普朗克尺度上，不同诠释可能有不同推论

---

## 流传误区

- ❌ "哥本哈根诠释是量子力学的唯一正统解释" → ✅ 它只是教科书默认，学术界对诠释问题保持开放
- ❌ "多世界诠释意味着有无数个'我'在做不同选择" → ✅  Everett 原始论文并不强调"分裂"，而是强调相对态的纠缠结构
- ❌ "导航波理论可以恢复经典决定论，因此优于其他诠释" → ✅ 虽然决定论，但其非定域性和量子势的特设性也是严重问题
- ❌ "实验已经排除了隐变量理论" → ✅ Bell 定理排除的是**定域隐变量**，导航波是**非定域隐变量**，未被排除

---

## 相关条目

- [[copenhagen-interpretation|哥本哈根诠释]]
- [[many-worlds-interpretation|多世界诠释]]
- [[pilot-wave-theory|导航波理论]]
- [[measurement-problem|测量问题]]
- [[decoherence-interpretation|退相干诠释]]
- [[wave-function-collapse|波函数坍缩]]
- [[quantum-superposition|量子叠加态]]
- [[quantum-entanglement|量子纠缠]]
- [[epr-paradox|EPR 悖论]]
- [[complementarity-principle|互补原理]]

## 参考文献

1. N. Bohr, "The Quantum Postulate and the Recent Development of Atomic Theory," *Nature* **121**, 580 (1928). [原始论文]
2. H. Everett III, "'Relative State' Formulation of Quantum Mechanics," *Reviews of Modern Physics* **29**, 454 (1957). [原始论文]
3. D. Bohm, "A Suggested Interpretation of the Quantum Theory in Terms of 'Hidden' Variables," *Physical Review* **85**, 166 (1952). [原始论文]
4. J. S. Bell, "On the Problem of Hidden Variables in Quantum Mechanics," *Reviews of Modern Physics* **38**, 447 (1966). [综述]
5. Stanford Encyclopedia of Philosophy, "Quantum Mechanics," [在线条目](https://plato.stanford.edu/entries/qm/)
