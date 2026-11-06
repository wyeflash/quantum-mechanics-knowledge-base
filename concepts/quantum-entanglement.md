---
title: 量子纠缠
created: 2026-05-07
updated: 2026-05-09
type: concept
status: complete
tags: [entanglement, foundations, beginner]
sources: []
confidence: high
difficulty: intermediate
---

# 量子纠缠 (Quantum Entanglement)

## 概述

量子纠缠是量子力学最神秘的现象之一：当两个或多个粒子发生互作用后，它们的量子态不再能分开描述，而必须用一个**整体的纠缠态** 来描述。对其中一个粒子的测量会**瞬间影响**另一个粒子的状态，无论它们相距多远。爱因斯坦曾称之为"幽灵般的超距作用"（spooky action at a distance）。

::: info 可信度说明
- **可信度**: ★★★★★（基于 EPR 1935、Bell 1964 原始论文，Aspect 等实验验证，Griffiths/Sakurai 教材交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3][4][5]
:::

## 数学表述

### 二粒子纠缠态

考虑两个自旋-1/2 粒子。它们的**单重态**（separable state）可以写成：

$$|\psi\rangle_{\text{sep}} = |\uparrow\rangle_A \o\times |\downarrow\rangle_B$$

而**纠缠态**（entangled state）则不可分解为单粒子态的直积：

$$|\psi^-\rangle = \frac{1}{\sqrt{2}}\left(|\uparrow\rangle_A |\downarrow\rangle_B - |\downarrow\rangle_A |\uparrow\rangle_B\right)$$

这是**单重态**（singlet state），两个粒子的自旋始终相反，但每个粒子单独的自旋方向未被确定。

### 密度矩阵描述

更一般地，纠缠系统的密度矩阵 $\hat{\rho}$ 不能写成单个粒子密度矩阵的直积：

$$\hat{\rho} \neq \sum_i p_i \, \hat{\rho}_A^{(i)} \o\times \hat{\rho}_B^{(i)}$$

这是判断一个态是否纠缠的**必要且充分**条件。

## 爱因斯坦-波多尔斯基-罗森悖论（1935）

### EPR 假设

1935 年，[[albert-einstein|爱因斯坦]]、波多尔斯基（Podolsky）和罗森（Rosen）发表了著名的 EPR 论文，质疑量子力学的完备性。他们假设：

1. **实在性**（Reality）：如果在不以任何方式干扰系统的情况下，能够确定地预言某个物理量的值，则该物理量对应于实在的元素
2. **定域性**（Locality）：两个空间上分离的系统不能以超光速相互影响

基于这两个假设，EPR 证明了量子力学的描述必定是"不完备的"——存在"隐变量"（hidden variables）未被波函数描述。

### 玻尔的反驳

玻尔认为 EPR 的实在性假设在量子领域不成立：不同可观测量对应于不兼容的实验安排，在测量前谈论"确定的物理量"是没有意义的。

## 贝尔不等式（1964）

### Bell 的突破

长达 30 年的哲学争论被贝尔（John Stewart Bell）的一篇论文结束了。1964 年，贝尔证明了：**任何定域隐变量理论都无法复现量子力学的所有预言**。

对于自旋关联，定域隐变量理论预言：

$$|S| \leq 2$$

而量子力学预言：

$$|S| \leq 2\sqrt{2}$$

这个 $2\sqrt{2} \approx 2.828$ 的上限被称为**贝尔极限**（Tsirelson bound）。实验只需检验 $S$ 是否超过 2 即可排除所有定域隐变量理论。

## 实验验证

### Aspect 实验（1981–1982）

[[aspect-test|Aspect 实验]] 是首个严格检验贝尔不等式的实验。阿拉亚（Alain Aspect）等人利用自发辐射激光产生纠缠光子对，测量结果：

$$S = 2.697 \pm 0.015$$

明确违反了贝尔不等式（$\leq 2$），支持了量子力学预言。

### 后续验证

- **开斯尔-霍尔（Clauser-Horne）式**：更严格的实验
- **透子伯根（Gröblacher）实验**（2007）：排除了“检测器漏洞"（detection loophole）
- **斯坦布鲁克（Steinlechner）实验**（2017）：排除了“自由选择漏洞"（freedom-of-choice loophole）
- **“无漏洞"实验**（2015–2022）：同时关闭所有主要漏洞，贝尔不等式的违反被确认为硬件实质性结论

## 量子纠缠的应用

量子纠缠是许多量子技术的核心资源：
- **量子通信**：纠缠对用于超密码分发（BB84 协议等）
- **量子计算**：纠缠实现远距离跳跃门（teleportation）和密集码
- **量子密码分发**：量子钥匙分发的安全性基于纠缠的非定域性

## 流传误区

- ❌ "纠缠可以用来传递信息" → ✅ 量子纠缠**不能用于超光速传递信息**。因为对纠缠伙伴的测量结果是**随机的**，不能被发送者控制
- ❌ "纠缠是经典的统计关联" → ✅ 经典关联满足贝尔不等式，而量子纠缠**违反**贝尔不等式
- ❌ "纠缠意味着两个粒子之间有信号传递" → ✅ 纠缠是相关性，不是因果性或信号传递。测量结果的相关性只有在"对比"时才可见，单个粒子的测量结果是完全随机的
- ❌ "纠缠是微观世界的特殊现象" → ✅ 宏观系统也可以被制备成纠缠态（如超导中的 Cooper 对）

## 相关条目

- [[wave-function-collapse|波函数坍缩]]
- [[quantum-superposition|量子叠加态]]
- [[decoherence|退相干]]
- [[uncertainty-principle|不确定性原理]]
- [[aspect-test|Aspect 实验]]
- [[epr-paradox|EPR 悖论]]
- [[bell-theorem|贝尔定理]]
- [[albert-einstein|阿尔伯特·爱因斯坦]]

## 参考文献

1. A. Einstein, B. Podolsky, and N. Rosen, "Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?", *Physical Review* **47**, 777 (1935). [DOI](https://doi.org/10.1103/PhysRev.47.777)
2. J. S. Bell, "On the Einstein Podolsky Rosen Paradox," *Physics Physique Физика* **1**, 195 (1964). [原始论文]
3. A. Aspect, P. Grangier, and G. Roger, "Experimental Tests of Realistic Local Theories via Bell's Theorem," *Physical Review Letters* **47**, 460 (1981). [DOI](https://doi.org/10.1103/PhysRevLett.47.460)
4. D. J. Griffiths, *Introduction to Quantum Mechanics*, 3rd ed., Cambridge University Press, 2018, §4.3.（B级教材）
5. J. J. Sakurai and J. Napolitano, *Modern Quantum Mechanics*, 3rd ed., Cambridge University Press, 2021, §3.9.（B级教材）
