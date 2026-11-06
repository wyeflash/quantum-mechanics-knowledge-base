---
title: 为什么纠缠不能超光速通信
created: 2026-05-10
updated: 2026-05-10
type: query
tags: [entanglement, misconception, beginner, quantum-communication]
status: complete
confidence: high
difficulty: beginner
sources:
  - Bell, J. S. On the Einstein Podolsky Rosen Paradox. Physics 1, 195–200 (1964).
  - Aspect, Alain; Dalibard, Jean; Roger, Gérard. Experimental Test of Bell's Inequalities Using Time-Varying Analyzers. Physical Review Letters 49, 1804 (1982). https://doi.org/10.1103/PhysRevLett.49.1804
  - Nielsen, Michael A.; Chuang, Isaac L. Quantum Computation and Quantum Information, Cambridge University Press, 2010.
---

# 为什么纠缠不能超光速通信？(Why Entanglement Does Not Enable Faster-Than-Light Communication)

简短回答：**纠缠能产生非经典关联，但不能让一方控制另一方的测量结果，因此不能传递可控信息。**

这也是量子科普中最容易被误读的问题之一：量子纠缠很神奇，但它不是超光速电话。

::: info 可信度说明
“纠缠关联违反贝尔不等式”和“纠缠不能用于超光速通信”都是现代量子信息理论和实验物理的标准结论。本文不否认纠缠的非经典性，而是说明它为什么不构成可控信号。
:::

## 纠缠到底提供了什么？

[[concepts/quantum-entanglement|量子纠缠]]描述的是复合系统不能被拆成各子系统独立量子态的情况。两个粒子相距很远时，测量结果仍可表现出超越经典局域隐变量的关联。

[[history/1964-bell-theorem|贝尔定理]]和 [[history/1982-aspect-experiment|Aspect 实验]]说明：自然界的某些关联不能用简单的“粒子出发前就携带好答案”的局域经典图像解释。

## 为什么这仍不能通信？

通信需要发送方能够选择并控制消息。例如发送 0 或 1。

但在纠缠测量中：

- 甲方可以选择测量方向；
- 甲方不能控制自己得到的具体随机结果；
- 乙方本地看到的结果仍是随机分布；
- 只有当甲乙事后通过普通经典信道比较数据时，关联才显现出来。

关键点是：**关联不是信号**。如果乙方单看自己的数据，无法判断甲方是否测量、何时测量、选择了什么设置。

## 一个直观类比

假设两个人各拿到一只密封手套，一只左手一只右手。打开后，一方知道另一方是什么手套。但这只是经典相关，不是纠缠。

纠缠比这个更深：它不只是“预先藏好答案”，而是测量设置之间存在贝尔不等式无法解释的关联。可是，在通信意义上，它仍然不允许你控制远方读数。

## 与量子通信有什么关系？

[[applications/quantum-communication|量子通信]]并不是“用纠缠超光速发消息”。它通常依赖：

- 量子态传输或纠缠分发；
- 经典信道辅助；
- 对窃听或噪声的检测；
- 协议层的统计验证。

例如 量子隐形传态 需要经典通信才能完成；[[applications/e91-protocol|E91 协议]]使用纠缠检验安全性，也不绕开光速限制。

## 流传误区

- **误区：纠缠粒子能瞬间互相发送消息。** 纠正：它们表现出强关联，但本地结果不可控。
- **误区：贝尔实验证明相对论错了。** 纠正：贝尔实验排除一类局域隐变量模型，但不允许超光速信号。
- **误区：量子通信就是超光速通信。** 纠正：量子通信仍需要遵守经典通信和相对论因果限制。

## 相关条目

- [[concepts/quantum-entanglement|量子纠缠]]
- [[concepts/bell-theorem|贝尔定理]]
- [[comparisons/entanglement-vs-correlation|量子纠缠与经典相关]]
- [[applications/quantum-communication|量子通信]]
