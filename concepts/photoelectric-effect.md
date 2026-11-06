---
title: 光电效应
created: 2026-05-07
updated: 2026-05-09
type: concept
status: complete
tags: [foundations, history, experiment, wave-particle-duality, beginner]
sources: []
confidence: high
difficulty: beginner
---

# 光电效应 (Photoelectric Effect)

## 概述

光电效应是指当光照射到金属表面时，金属中的电子吸收光的能量而逸出的现象。这一现象看似平凡，却在 19 世纪末至 20 世纪初成为经典物理学无法解释的严重困难，最终促使爱因斯坦提出光量子假说，成为量子革命的重要里程碑。

::: info 可信度说明
- **可信度**: ★★★★★（基于 Millikan 实验原始论文及 Griffiths、Sakurai 等权威教材交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2][3]
:::

## 实验现象

赫兹 (Heinrich Hertz) 于 1887 年首次观察到光电效应，但对其机制并不理解。随后勒纳德 (Philipp Lenard) 在 1902 年进行了一系列精确实验，发现以下关键规律：

1. **存在截止频率**: 只有当入射光频率 $\nu$ 高于某一阈值 $\nu_0$ 时，才会有电子逸出。低于该频率，无论光强多大，都不会产生光电子。
2. **光电子动能与光强无关**: 逸出电子的最大动能仅取决于入射光的频率，与光强无关。
3. **光电子动能与频率线性相关**: 最大动能随频率线性增加。
4. **瞬时响应**: 光电子的逸出几乎是瞬时的（延迟 $< 10^{-9}$ 秒），无论光强多弱。

## 经典波动理论的失败

经典电磁理论将光视为连续传播的电磁波，由此预言：

- 电子动能应随**光强**增加而增大
- 任何频率的光，只要强度足够，都应该能打出电子
- 弱光照射下应该有明显的延迟时间（电子需要积累足够能量）

这三条预言与实验观测全部矛盾，构成了经典物理学的严重危机。

## 爱因斯坦的光量子解释

1905 年，[[albert-einstein|阿尔伯特·爱因斯坦]] 在论文《关于光的产生和转化的一个启发性观点》中，大胆扩展了 [[max-planck|普朗克]] 的能量量子化思想，提出**光量子假说**：

> 光并非连续分布的电磁波，而是由一份份离散的能量量子——光子 (photon)——组成。每个光子的能量为

$$E = h\nu$$

其中 $h$ 为普朗克常数，$\nu$ 为光的频率。

### 爱因斯坦光电方程

基于光量子假说，爱因斯坦导出：

$$h\nu = W + K_{\max}$$

其中：
- $h\nu$：入射光子能量
- $W$：金属的逸出功 (work function)，电子脱离金属所需的最小能量
- $K_{\max} = \frac{1}{2}m_e v_{\max}^2$：逸出电子的最大动能

该方程完美地解释了全部实验规律：
- **截止频率**: 当 $h\nu_0 = W$ 时，$K_{\max} = 0$，即存在阈值频率 $\nu_0 = W/h$
- **动能与频率线性相关**: $K_{\max} = h\nu - W$，斜率恰为普朗克常数 $h$
- **瞬时响应**: 光子与电子的碰撞是瞬时的能量传递

## 实验验证：密立根的工作

尽管爱因斯坦的理论简洁优美，但物理学家们（包括普朗克本人）对其粒子性假设持怀疑态度。美国实验物理学家罗伯特·密立根 (Robert Millikan) 历时十年（1905–1915），设计了精密的实验装置，力图证明爱因斯坦方程是错误的。

然而，密立根的实验结果反而精确验证了爱因斯坦光电方程，并首次从斜率中准确测定了普朗克常数 $h$，与黑体辐射实验得到的数值高度一致。密立根本人后来不得不承认爱因斯坦假说的正确性。

::: tip 科学史注记
密立根因油滴实验和光电效应实验获得 1923 年诺贝尔物理学奖；爱因斯坦则因"发现光电效应定律"获得 1921 年诺贝尔物理学奖。值得注意的是，诺贝尔奖委员会当时主要表彰的是光电效应而非相对论——光量子假说的革命性甚至让保守的委员会有所顾虑。
:::

## 科学史意义

1. **光的粒子性确立**: 光电效应与黑体辐射共同证明，光在某些条件下必须被视为粒子而非波
2. **能量量子化的推广**: 普朗克将量子化限制在谐振子能量上，爱因斯坦则将量子化推广到光本身
3. **波粒二象性的先声**: 光既表现出波动性（干涉、衍射），又表现出粒子性（光电效应），为后来 [[wave-particle-duality|波粒二象性]] 的全面认识铺平道路

## 流传误区

- ❌ "光电效应证明光永远是粒子" → ✅ 光电效应证明光**在某些相互作用中**表现出粒子性；光的波动性由其他实验（干涉、衍射）确立。二者是互补的。
- ❌ "爱因斯坦因相对论获诺贝尔奖" → ✅ 爱因斯坦的诺贝尔物理学奖（1921）正式授予理由是光电效应定律的发现
- ❌ "密立根最初支持光量子假说" → ✅ 密立根本意是证伪爱因斯坦方程，实验结果却证实了它

## 相关条目

- [[photon|光量子 / 光子]]
- [[energy-quantization|能量量子化]]
- [[black-body-radiation|黑体辐射]]
- [[ultraviolet-catastrophe|紫外灾难]]
- [[wave-particle-duality|波粒二象性]]
- [[1905-einstein-miracle-year|1905：爱因斯坦的奇迹年]]
- [[albert-einstein|阿尔伯特·爱因斯坦]]

## 参考文献

1. A. Einstein, "Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt," *Annalen der Physik* **17**, 132 (1905). [原始论文]
2. R. A. Millikan, "A Direct Photoelectric Determination of Planck's $h$," *Physical Review* **7**, 355 (1916). [DOI](https://doi.org/10.1103/PhysRev.7.355)
3. D. J. Griffiths, *Introduction to Quantum Mechanics*, 3rd ed., Cambridge University Press, 2018, §1.4.（B级教材）
4. J. J. Sakurai and J. Napolitano, *Modern Quantum Mechanics*, 3rd ed., Cambridge University Press, 2021, §2.1.（B级教材）
5. A. Pais, *Subtle is the Lord...: The Science and the Life of Albert Einstein*, Oxford University Press, 1982, Chapter 19.（科学史专著）
