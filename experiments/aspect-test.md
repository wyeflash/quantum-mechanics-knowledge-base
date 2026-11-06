---
title: 阿斯佩实验
created: 2026-05-07
updated: 2026-05-09
type: experiment
status: complete
tags: [experiment, entanglement, bell-theorem, nonlocality]
sources: []
confidence: high
difficulty: beginner
---

# Aspect 实验 (Aspect Experiment)

## 概述

1981–1982 年，法国物理学家阿兰·阿斯佩（Alain Aspect）及其合作者在巴黎第十一大学完成了一系列具有里程碑意义的实验，首次以**高精度直接检验了贝尔不等式**（Bell inequality）。实验结果明确违反了贝尔不等式，与量子力学的预言高度一致，从而**排除了局域隐变量理论**作为量子力学替代方案的可能性，为量子纠缠的**非局域性**提供了迄今最强的实验证据。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Aspect et al. 1981–1982 原始论文及后世标准教材）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 实验动机

### 从 EPR 到贝尔不等式

1935 年，[[albert-einstein|爱因斯坦]]、波多尔斯基与罗森提出 [[epr-paradox|EPR 悖论]]，质疑量子力学的完备性。他们主张：如果量子力学是完备的，则必须存在某种"隐变量"决定测量结果。

1964 年，约翰·贝尔（John Bell）推导出著名的[[bell-theorem|贝尔不等式]]，将 EPR 的哲学争论转化为**可实验检验**的数学命题：

> 任何满足**局域性**（locality）和**实在性**（realism）的理论，其关联函数必须满足贝尔不等式；而量子力学预言的结果可以**违反**该不等式。

 Aspect 实验的核心目标便是：在真实实验中验证量子力学是否确实违反贝尔不等式。

## 实验设计

### 纠缠光子对的产生

Aspect 实验利用**钙原子级联辐射**（calcium cascade）产生纠缠光子对：

- 钙原子被激光泵浦到激发态 $4p^2\,^1S_0$
- 原子先后辐射两个光子 $\gamma_1$（绿光，$\lambda = 551\,	ext{nm}$）和 $\gamma_2$（紫光，$\lambda = 422\,	ext{nm}$）
- 两个光子的偏振态处于**单态纠缠**：

$$
|\Psi^-
angle = rac{1}{\sqrt{2}}\left(|H
angle_1|V
angle_2 - |V
angle_1|H
angle_2
ight)
$$

### 三阶段实验

Aspect 团队先后完成了三组实验，逐步逼近理想条件：

| 阶段 | 时间 | 关键改进 |
|------|------|----------|
| 第一阶段 | 1981 | 固定偏振分析器角度，验证量子关联 |
| 第二阶段 | 1982 | 引入**不等间距角度**，更严格检验 CHSH 不等式 |
| 第三阶段 | 1982 | **快速切换**（switching）装置：每 $10\,	ext{ns}$ 随机改变分析器方向，关闭**定域性漏洞**（locality loophole）|

### 快速切换装置

最关键的改进是第三阶段引入的**声光调制器**（acousto-optic modulator）：

```
钙原子源
   ↓
纠缠光子对 \rightarrow 分束器
   ↓                ↓
声光开关A      声光开关B
   ↓                ↓
偏振分析器A    偏振分析器B
   ↓                ↓
光电倍增管A    光电倍增管B
```

- 开关切换时间（约 $10\,	ext{ns}$）**远小于**光子在两探测器之间的飞行时间（约 $40\,	ext{ns}$）
- 确保了两端的测量设置在被测量事件的光锥之外就已确定，从而排除了**超光速信号协调**的可能性

## 实验结果

### CHSH 不等式的违反

Aspect 实验测量的是 CHSH（Clauser-Horne-Shimony-Holt）参数 $S$：

$$
S = E(a,b) - E(a,b') + E(a',b) + E(a',b')
$$

其中 $E(a,b)$ 为关联函数，$a,a',b,b'$ 为四组不同的偏振分析器角度。

| 理论预言 | 数值界限 |
|----------|----------|
| 局域隐变量理论 | $|S| \leq 2$ |
| 量子力学 | $|S| = 2\sqrt{2} pprox 2.828$ |

Aspect 的实验结果：

$$
S_{	ext{exp}} = 2.697 \pm 0.015
$$

显著违反贝尔不等式（超过标准差 40 倍以上），与量子力学预言高度一致。

## 科学意义

1. **哲学层面**：实验以可重复、可量化的方式证明，自然界的底层规律不满足爱因斯坦所坚持的"局域实在论"。
2. **技术层面**：开创了**量子信息科学**的基础——量子纠缠不再只是理论概念，而是可被精确操控的物理资源。
3. **后续发展**：为 2022 年诺贝尔物理学奖（Alain Aspect, John Clauser, Anton Zeilinger）奠定了实验基础。

## References

1. **A. Aspect et al.** (1981). "Experimental Tests of Realistic Local Theories via Bell's Theorem." *Physical Review Letters*, 47(7), 460. [A 级 — 原始实验论文]
2. **A. Aspect et al.** (1982). "Experimental Realization of Einstein-Podolsky-Rosen-Bohm Gedankenexperiment." *Physical Review Letters*, 49(2), 91. [A 级 — 快速切换实验]
3. **A. Aspect et al.** (1982). "Experimental Test of Bell's Inequalities Using Time-Varying Analyzers." *Physical Review Letters*, 49(25), 1804. [A 级 — 关闭局域性漏洞]
4. **J. S. Bell** (1964). "On the Einstein Podolsky Rosen Paradox." *Physics Physique Физика*, 1, 195. [A 级 — 贝尔不等式原始论文]
5. **N. D. Mermin** (1985). "Is the Moon There When Nobody Looks?" *Physics Today*, 38(4), 38. [B 级 — 科普级权威综述]

## 流传误区

::: warning
- **误区一**："Aspect 实验证明了量子纠缠可以超光速传递信息。"
  - **澄清**：实验只证明关联是非局域的，但**不能用于超光速通信**（量子不可克隆定理禁止利用纠缠实现超光速信号）。
- **误区二**："贝尔不等式的违反意味着量子力学是完备的。"
  - **澄清**：实验仅排除了**局域**隐变量理论，非局域隐变量理论（如 Bohm 力学）仍然自洽。
- **误区三**："Aspect 实验关闭了所有漏洞。"
  - **澄清**：Aspect 实验关闭了**局域性漏洞**，但**探测效率漏洞**（detection loophole）仍然存在，直到 2015 年 Hensen 等人的"无漏洞"实验才被同时关闭。
:::
