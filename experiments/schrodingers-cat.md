---
title: 薛定谔的猫
description: "薛定谔 1935 年为批判把模糊波函数直接当作实在图像而设计的思想实验，含原文装置、测量问题、各诠释回应、退相干量级与现代猫态实验。"
created: 2026-05-07
updated: 2026-11-06
type: experiment
status: complete
tags: [thought-experiment, superposition, measurement, decoherence, copenhagen]
sources: []
confidence: high
difficulty: intermediate
---

# 薛定谔的猫 (Schrödinger's Cat)

## 概述

1935 年，[[people/erwin-schrodinger|埃尔温·薛定谔]]（Erwin Schrödinger）在《量子力学的现状》（*Die gegenwärtige Situation in der Quantenmechanik*）第 5 节中提出「猫」的思想实验 [1][2]。他用一个刻意「滑稽」（burlesk）的设定说明：若把原子尺度的不确定性按线性演化一路传递到宏观物体，波函数将描述一只「活猫与死猫各占一半、被涂抹在一起」的状态——而这显然不能被当作实在的图像。

该思想实验是 [[interpretations/measurement-problem|测量问题]] 最著名的表述，也是讨论 [[interpretations/copenhagen-interpretation|哥本哈根诠释]]、[[interpretations/many-worlds-interpretation|多世界诠释]] 与 [[concepts/decoherence|退相干]] 的共同出发点。三种主要诠释的对照见 [[comparisons/quantum-interpretations-comparison|量子力学诠释]]。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Schrödinger 1935 德文原文、Trimmer 1980 英译、Zurek 综述及原始实验论文）
- **验证状态**: 思想实验本身未执行；「猫态」（cat state，宏观叠加态）已在腔 QED、超导电路等系统中实现 [4][5][6]
- **来源**: [1][2][3][4][5][6]
:::

## 实验目的与动机

薛定谔的目标是**批判**，而非展示量子「怪象」。原文紧接猫的设定写道：这类情形的典型之处在于，原本限于原子领域的不确定性被转化为可由直接观察判定的宏观不确定性，「这阻止我们如此天真地把一个『模糊的模型』（verwaschenes Modell）当作实在的写照」[1]。

换言之，他用归谬法反对把 ψ 函数直接解读为物体本身「模糊／涂抹」的实在状态；同时也借此追问哥本哈根式叙述中「测量」究竟在何处、由什么完成。该文同时是「[[concepts/quantum-entanglement|纠缠]]」（Verschränkung）一词的出处，与同年的 [[experiments/epr-paradox|EPR 悖论]] 相互呼应。

## 装置构造（据 1935 原文）

原文要点如下 [1]：

```
钢室（Stahlkammer），猫被关在其中
└── 「地狱机器」（须防止猫直接触碰该装置）
    ├── 盖革计数管（Geigersches Zählrohr），内含极微量放射性物质
    │     —— 量少到：一小时内也许有一个原子衰变，但同样可能一个也不衰变
    ├── 若发生衰变 → 计数管响应 → 经继电器（Relais）
    ├── 驱动小锤（Hämmerchen）
    └── 击碎一小瓶氢氰酸（Kölbchen mit Blausäure）→ 猫死亡
```

原文把放射性物质放在盖革计数管内，量少到：一小时之内也许有一个原子衰变，但同样可能一个也不衰变（im Laufe einer Stunde vielleicht eines von den Atomen zerfällt, ebenso wahrscheinlich aber auch keines）。毒物是一小瓶氢氰酸（Blausäure）。容器是钢室（Stahlkammer）。

## 理论预测

把一小时后「有无衰变」简化为两态，并取等概率：

$$
|\psi_{\text{原子}}\rangle = \frac{1}{\sqrt{2}}\big(|\text{未衰变}\rangle + |\text{已衰变}\rangle\big) \tag{1}
$$

若整个装置（计数管—继电器—锤—毒瓶—猫）都按薛定谔方程线性演化，则得到纠缠态：

$$
|\Psi\rangle = \frac{1}{\sqrt{2}}\big(|\text{未衰变}\rangle|\text{活猫}\rangle + |\text{已衰变}\rangle|\text{死猫}\rangle\big) \tag{2}
$$

式 (2) 描述的是「原子 ⊗ 猫」的纠缠整体：活猫与死猫分别与未衰变、已衰变绑定在一起。猫本身并没有一个单独的纯态 $|\text{活}\rangle+|\text{死}\rangle$。薛定谔原话即「整个系统的 ψ 函数」中活猫与死猫「等量混合或涂抹」[1]。

## 悖论的核心

> 线性幺正演化（式 2）不会自行产生唯一结果；而打开钢室时我们总是只看到活猫或死猫之一。

这正是 [[interpretations/measurement-problem|测量问题]] 中「两条动力学规则」（薛定谔演化与测量／投影）之间的张力。猫的作用是把这一张力从原子尺度放大到无法回避的日常尺度。

## 各诠释的回应

### 哥本哈根诠释

在 [[interpretations/copenhagen-interpretation|哥本哈根诠释]] 中，波函数被视为对系统可获取知识的描述，而不是物理实体；测量（宏观装置与量子对象不可分割的相互作用）给出确定结果，教材中常以冯·诺依曼投影公设形式化为「[[concepts/wave-function-collapse|坍缩]]」。按此读法，式 (2) 并不表示猫「真的既死又活」。

薛定谔批评的正是这里的含糊：哥本哈根传统没有明确「测量」在何处发生。盖革计数管已经是宏观装置，开箱为什么还是另一次测量？量子与经典的界线可以沿冯·诺依曼链任意移动，却没有给出物理判据。「哥本哈根诠释」是事后标签，玻尔与海森堡的观点并不完全一致，玻尔本人对「坍缩」表述也较谨慎。

### 多世界诠释

[[interpretations/many-worlds-interpretation|多世界诠释]]（Everett 1957 的相对态表述）取消坍缩公设：式 (2) 保持不坍缩，「活猫分支」与「死猫分支」在退相干后互不干涉，各分支中的观察者各自看到一个确定结果。概率（[[concepts/born-rule|玻恩规则]]）的来源等问题仍有争议。

### 退相干与客观坍缩

[[concepts/decoherence|退相干]] 指出：猫、空气分子、热辐射等环境会极快地记录「活／死」信息，使系统约化密度矩阵在指针基中的非对角项迅速衰减，干涉在局域观测中变得不可见。如 [[comparisons/decoherence-vs-collapse|退相干与坍缩]] 所强调的，退相干解释的是「为何看不到干涉」，并不由此选出唯一结果。后者仍依赖诠释（哥本哈根、多世界、[[interpretations/pilot-wave-theory|导航波理论]]）或 [[interpretations/objective-collapse-theories|客观坍缩理论]] 等额外假设。

## 宏观物体的退相干时间量级

Zurek 用高温极限下的主方程估计空间叠加的退相干时间 [3][7]。下面的数值是**模型估计**给出的数量级，不是对一只真实猫的计算：

$$
\tau_D \simeq \tau_R\left(\frac{\lambda_{\text{dB}}}{\Delta x}\right)^2,\qquad \lambda_{\text{dB}}=\frac{\hbar}{\sqrt{2mk_BT}} \tag{3}
$$

其中 $\tau_R$ 为弛豫时间，$\Delta x$ 为两个波包的空间间隔。Zurek 给出的示意例子：$T=300\,\text{K}$、$m=1\,\text{g}$、$\Delta x=1\,\text{cm}$ 时，$\tau_D/\tau_R\sim 10^{-40}$；即便弛豫时间长达宇宙年龄（约 $10^{17}\,\text{s}$），也有 $\tau_D\sim 10^{-23}\,\text{s}$ [3]。

该估计强烈依赖质量、分离距离、温度与环境耦合。更严格的模型在细节上可以不同。就数量级而言，宏观叠加的相干性消失远快于眨眼。

## 现代实验：「猫态」的实现

量子信息中的「猫态」（cat state）一般指两个（或多个）宏观或介观可区分态的相干叠加，例如相干态叠加 $|\alpha\rangle+|-\alpha\rangle$。下表是宏观叠加态（macroscopic superposition）的代表性实验，都不是用真实动物完成的。

| 实验 | 年份 | 系统 | 叠加的两个分量 | 尺度（摘自原文） |
| --- | --- | --- | --- | --- |
| Brune 等（ENS 巴黎）[4] | 1996 | 高 Q 微波腔中的相干场 + 里德堡原子 | 相位经典可区分的两个相干态 $\lvert\alpha e^{i\varphi}\rangle$ 与 $\lvert\alpha e^{-i\varphi}\rangle$ | 数个光子（正文示例平均光子数约 $9.5$，$\lvert\alpha\rvert\approx 3.1$）；首次实时观测猫态的渐进退相干 |
| Friedman 等（Stony Brook）[5] | 2000 | rf-SQUID 超导环 | 顺时针 / 逆时针持续电流（两个磁通态） | 电流约数 μA，平均磁通相差 $>\tfrac{1}{4}\Phi_0$；隧穿劈裂约 $0.1\,\text{K}$ |
| Vlastakis 等（Yale）[6] | 2013 | transmon 量子比特 + 三维微波腔 | 相干态叠加（最多 4 个相干态分量） | 最大约 $111$ 个光子 |

这些实验表明：只要与环境足够隔离（极低温、高品质因子腔等），叠加原理在含大量自由度的系统中依然成立；同时尺度越大、分量越可区分，退相干越快（Brune 等直接观测到这一趋势 [4][8]）。

## 历史意义与影响

1. **量子—经典过渡**：猫问题推动了退相干理论（Zeh 1970、Zurek 1980 年代）及宏观量子相干实验（Leggett 等的提议）。
2. **量子信息资源**：猫态是玻色编码量子纠错（cat code）与精密测量的重要资源 [6]。
3. **科学传播**：成为讨论测量问题与诠释分歧的标准入口。

## 流传误区

::: warning
- **误区一**：「薛定谔的猫是一个可以真正做的实验。」
  - **澄清**：它是思想实验。现代「猫态」实验在光子场、超导电路等系统中实现，不涉及真实的猫。
- **误区二**：「猫在箱子里确实既死又活。」
  - **澄清**：式 (2) 描述的是原子与猫的纠缠整体；这一态意味着什么，取决于诠释。哥本哈根读法下它不是猫的实在状态；多世界读法下两个分支都存在但互不干涉。现实中宏观猫的叠加还会被环境几乎瞬时退相干。
- **误区三**：「薛定谔提出猫是为了赞美量子力学的奇异性。」
  - **澄清**：他用归谬法批评把「模糊的 ψ 函数」（verwaschenes Modell）天真地当作实在图像，并质疑当时对测量的含糊叙述 [1][2]。这并不等于他否定量子力学的形式体系。
- **误区四**：「毒气瓶是甘氨酸，原子衰变率是 50%。」
  - **澄清**：原文为氢氰酸（Blausäure）。放射性物质量少到一小时内某个原子衰变与不衰变「同样可能」，原文没有给出「衰变率 50%」这一参数 [1]。
- **误区五**：「退相干已经完全解决了猫的问题。」
  - **澄清**：退相干解释干涉为何消失，唯一结果问题仍未被普遍认可地解决。见 [[comparisons/decoherence-vs-collapse|退相干与坍缩]]。
:::

## 参考文献

1. E. Schrödinger, "Die gegenwärtige Situation in der Quantenmechanik," *Naturwissenschaften* **23**, 807–812; 823–828; 844–849 (1935)，猫段落见第 812 页 §5. [DOI](https://doi.org/10.1007/BF01491891) [A 级 — 原始论文]
2. J. D. Trimmer (译), "The Present Situation in Quantum Mechanics: A Translation of Schrödinger's 'Cat Paradox' Paper," *Proc. Am. Philos. Soc.* **124**, 323–338 (1980). [JSTOR](https://www.jstor.org/stable/986572) [B 级 — 权威英译]
3. W. H. Zurek, "Decoherence and the Transition from Quantum to Classical," *Physics Today* **44**(10), 36 (1991). [DOI](https://doi.org/10.1063/1.881293)；修订版 "…—Revisited," [arXiv:quant-ph/0306072](https://arxiv.org/abs/quant-ph/0306072) [A/C 级]
4. M. Brune *et al.*, "Observing the Progressive Decoherence of the 'Meter' in a Quantum Measurement," *Phys. Rev. Lett.* **77**, 4887 (1996). [DOI](https://doi.org/10.1103/PhysRevLett.77.4887) [A 级]
5. J. R. Friedman, V. Patel, W. Chen, S. K. Tolpygo, J. E. Lukens, "Quantum superposition of distinct macroscopic states," *Nature* **406**, 43–46 (2000). [DOI](https://doi.org/10.1038/35017505) [A 级]
6. B. Vlastakis *et al.*, "Deterministically Encoding Quantum Information Using 100-Photon Schrödinger Cat States," *Science* **342**, 607–610 (2013). [DOI](https://doi.org/10.1126/science.1243289) [A 级]
7. W. H. Zurek, "Decoherence, einselection, and the quantum origins of the classical," *Rev. Mod. Phys.* **75**, 715 (2003). [DOI](https://doi.org/10.1103/RevModPhys.75.715) [A 级]
8. M. Schlosshauer, "Decoherence, the measurement problem, and interpretations of quantum mechanics," *Rev. Mod. Phys.* **76**, 1267 (2004). [DOI](https://doi.org/10.1103/RevModPhys.76.1267) [A 级]
9. D. J. Griffiths, D. F. Schroeter, *Introduction to Quantum Mechanics*, 3rd ed., Cambridge University Press, 2018, Ch. 12. [B 级 — 教材]

## 相关条目

- [[interpretations/measurement-problem|测量问题]]
- [[interpretations/copenhagen-interpretation|哥本哈根诠释]]
- [[interpretations/many-worlds-interpretation|多世界诠释]]
- [[concepts/decoherence|退相干]]
- [[comparisons/decoherence-vs-collapse|退相干与坍缩]]
- [[comparisons/quantum-interpretations-comparison|量子力学诠释]]
- [[people/erwin-schrodinger|埃尔温·薛定谔]]
- [[experiments/epr-paradox|EPR 悖论]]
