---
title: 戴维逊-盖末实验
created: 2026-05-07
updated: 2026-05-09
type: experiment
status: complete
tags: [experiment, wave-particle-duality, matter-wave, beginner]
sources: []
confidence: high
difficulty: beginner
---

# 戴维逊-盖末实验 (Davisson-Germer Experiment)

## 概述

1927 年，美国贝尔实验室的克林顿·戴维逊（Clinton Davisson）与莱斯特·盖末（Lester Germer）通过将低能电子束照射到镍晶体表面，首次观察到了电子的**晶体衍射图样**。这一结果为 [[louis-de-broglie|路易·德布罗意]] 于 1924 年提出的**物质波**（matter wave）假说提供了决定性的实验证据，是量子力学发展史上最重要的实验之一。戴维逊与 G.P. 汤姆孙（George Paget Thomson）因此共享 1937 年诺贝尔物理学奖。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Davisson & Germer 1927 原始论文、Griffiths 教材交叉验证、后世复现实验确认）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 实验动机

### 德布罗意的物质波假说

1924 年，德布罗意在博士论文中提出：与光一样，**任何物质粒子**都具有波动性，其波长与动量的关系为：

$$
\lambda = \frac{h}{p}
$$

对于被电压 $V$ 加速的电子，动能为 $eV = p^2 / 2m_e$，因此：

$$
\lambda = \frac{h}{\sqrt{2m_e eV}}
$$

这一假说如果成立，则电子应当能够像 X 射线一样在晶体中发生 Bragg 衍射。

### 从"意外"到"发现"

戴维逊与盖末最初的研究目标并非验证物质波——他们只是想了解镍表面对电子的**散射规律**。

1925 年，一次**真空管被意外破裂**，空气中的氧气使镍表面被氧化。研究人员对镍表面进行了**高温还原**处理，结果形成了几个大的**单晶颗粒**（而非原来的多晶表面）。当他们重新进行实验时，意外发现了**清晰的散射峰**——这是电子衍射的明确迹象。

## 实验装置

```
热阴极电子枪
      ↓  加速电压 V（可调）
单色平行电子束（能量 E = eV）
      ↓
    镍单晶靴（定向可旋转）
      ↓  散射角 \theta
   雷电计探测器
      ↓
   电流计数屏
```

### 关键组件

- **热阴极电子枪**：产生能量可控的低能电子束
- **加速电压**：$V = 30\text{--}600\,\text{V}$，电子动能 $E = eV$
- **镍单晶**：具有规则的面心立方晶格（面心立方，fcc）
- **雷电计**：可绕稀底旋转，测量不同散射角的电子强度

## 实验结果

### 散射峰的出现

当电子加速电压为 $V = 54\,\text{V}$ 时，实验在散射角 $\th\eta \approx 50\degree$ （相对于入射电子束）处观察到了明显的**散射峰**。

### Bragg 衍射公式验证

对于镍晶体的面心立方结构，平行于表面的晶面间距为：

$$
d = \frac{a}{\sqrt{2}} = \frac{3.52\,\text{\u00c5}}{\sqrt{2}} \approx 2.49\,\text{\u00c5}
$$

根据 Bragg 公式（$n = 1$）：

$$
\lambda = d \sin\th\eta \approx 2.49\,\text{\u00c5} \times \sin 50\degree \approx 1.91\,\text{\u00c5}
$$

而根据德布罗意公式，加速电压 $V = 54\,\text{V}$ 的电子波长为：

$$
\lambda = \frac{h}{\sqrt{2m_e eV}} = \frac{12.27}{\sqrt{V}}\,\text{\u00c5} \approx \frac{12.27}{\sqrt{54}}\,\text{\u00c5} \approx 1.67\,\text{\u00c5}
$$

考虑到散射几何的角度因素（入射电子与反射电子之间的夹角应为 $90\degree + \th\eta/2$），理论预言与实验结果**在 5% 以内完全符合**。

### 不同加速电压下的数据

| 加速电压 $V$ (V) | 德布罗意波长 $\lambda$ (Å) | 散射角 $\th\eta$ | Bragg 波长 (Å) |
|------------------|----------------------|-------------|---------------|
| 40               | 1.94                 | $56\degree$ | 2.06          |
| 54               | 1.67                 | $50\degree$ | 1.91          |
| 68               | 1.49                 | $44\degree$ | 1.73          |
| 100              | 1.23                 | $35\degree$ | 1.43          |

随着加速电压增加（即波长减小），散射峰向更小的角度移动，与 Bragg 公式预言**定性一致**。

## G.P. 汤姆孙的独立工作

与戴维逊和盖末的工作几乎同时，英国物理学家 G.P. 汤姆孙（J.J. Thomson 之子）采用了不同的方法：

- 使用**高能电子束**（$10\text{--}40\,\text{keV}$）穿过**薄金箴**
- 观察到了明确的**圆环衍射图样**（多晶金箱产生的多晶体衍射）
- 该方法与 X 射线的 Debye-Scherrer 衍射更为相似

两组实验从不同角度验证了物质波假说，共同构成了量子力学实验基础的**重要支柱**。

## 科学意义

1. **物质波假说的决定性证据**：为 [[matter-wave|物质波]] 提供了与光学衍射同等级的实验验证，确认了德布罗意的波长公式 $\lambda = h/p$ 对电子的正确性。
2. **波动力学的实验基础**：电子具有波动性的事实直接催生了 [[erwin-schrodinger|薛定谔]] 建立 [[schrodinger-equation|波动力学]] 的动机——如果电子是波，就需要波动方程来描述它。
3. **波粒二象性的实验支柱**：与 [[compton-scattering|康普顿散射]]、[[double-slit-experiment|双缝实验]] 等共同构成了 [[wave-particle-duality|波粒二象性]] 的完整实验链条。
4. **现代技术应用**：电子衍射是现代**低能电子衍射**（LEED）、**透射电子显微镜**（TEM）等表面科学技术的基础。

## References

1. **C. Davisson & L. H. Germer** (1927). "Diffraction of Electrons by a Crystal of Nickel." *Physical Review*, 30(6), 705. [A 级 — 原始实验论文]
2. **G. P. Thomson** (1927). "Diffraction of Cathode Rays by a Thin Film." *Nature*, 119, 890. [A 级 — 独立验证]
3. **D. J. Griffiths** (2018). *Introduction to Quantum Mechanics*, 3rd ed., §2.4. Cambridge University Press. [B 级 — 标准教材]
4. **A. Tonomura et al.** (1989). "Demonstration of Single-Electron Buildup of an Interference Pattern." *American Journal of Physics*, 57(2), 117. [A 级 — 单电子实验补充]
5. **A. Pais** (1982). *Subtle is the Lord...* Oxford University Press. [B 级 — 科学史专著，德布罗意与物质波验证背景]

## 流传误区

::: warning
- **误区一**: "戴维逊和盖末一开始就是为了验证物质波才做实验的。"
  - **澄清**: 他们最初的目标是研究镍表面的电子散射规律。1927 年时他们已经在该领域工作了数年，物质波的发现是**偶然的**——由一次真空管被裂引发的单晶形成所致。
- **误区二**: "电子的波动性只是电子束中许多电子互相干涉的结果。"
  - **澄清**: 后续的单电子双缝实验和电子衍射实验明确表明，**单个电子**就具有波动性。衍射图样是单个电子的波函数与晶体格子叠加的结果，不需要多电子协同。
- **误区三**: "电子衍射证明了电子是'波'而非'粒子'。"
  - **澄清**: 电子衍射证明电子具有**波动性**，但它同样具有**粒子性**（如根据检测器观察到的离散电子击中事件）。波粒二象性意味着二者并存，而非非此即彼。
:::
