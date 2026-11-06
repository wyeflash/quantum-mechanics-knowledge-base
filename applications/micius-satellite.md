---
title: 墨子号量子科学实验卫星
alias: Micius Quantum Science Satellite
description: 世界首颗量子科学实验卫星，由中国科学技术大学潘建伟团队主导研制，2016年8月16日发射升空，开辟了星地量子通信的新纪元。
tags:
  - china-quantum
  - quantum-communication
  - quantum-cryptography
  - experiment
type: application
status: complete
created: 2026-05-08
updated: 2026-05-09
confidence: high
difficulty: intermediate
sources:
  - "J. Yin et al., 'Satellite-based entanglement distribution over 1200 kilometers', Science 356, 1140 (2017)"
  - "J. Yin et al., 'Satellite-to-ground entanglement-based quantum key distribution', Nature 582, 501 (2020)"
  - "J.-W. Pan et al., 'Multiphoton entanglement and interferometry', Rev. Mod. Phys. 84, 777 (2012)"
---

# 墨子号量子科学实验卫星 (Micius Quantum Science Satellite)

## 概述

**墨子号**（Micius）是世界首颗**量子科学实验卫星**，由中国科学技术大学潘建伟团队主导研制。该卫星于2016年8月16日在九泉卫星发射中心发射升空，是全球量子科学研究的里程碑之一。

墨子号以中国古代科学家**墨子**（约公元前468年—前376年）命名。墨子是中国古代利用光学原理解释自然现象的先驱，以其命名量子卫星象征着古代与现代科学的穿越时空对话。

## 技术参数

| 参数 | 数值 |
|---|---|
| 质量 | 约631 kg |
| 轨道高度 | 500 km（太阳同步轨道） |
| 轨道倾角 | 97.37° |
| 轨道周期 | 约94 分钟 |
| 设计寿命 | 2年（实际已远超设计寿命） |
| 验证协议 | BB84、量子纠缠分发 |
| 兹单位生成速率 | 约5.9 MHz |
| 链路衰减 | 约25–35 dB |

## 科学目标

墨子号的核心科学目标包括：

1. **星地量子密钥分发**（Quantum Key Distribution, QKD）
2. **量子纠缠分发**（Entanglement Distribution）
3. **量子隐形传态**（Quantum Teleportation）
4. **星地量子通信实验**

## 重大实验成果

### 千公里级量子纠缠分发（2017年）

2017年6月，墨子号实现了地面站（德令哈）与卫星之间距离达到1200公里的**量子纠缠分发**，成功观测到 Bell 不等式违反。

::: info 可信度说明
- **可信度**：★★★★★（*Science* 正刊发表）
- **验证状态**：已验证
- **来源**：[1]
:::

该实验的 Bell 不等式参数 $S = -2.37 \pm 0.09$，远超定域隐变量理论的上限 $|S| \leq 2$，排除了定域性漏洞。

### 量子密钥分发与安全通信

墨子号已实现多个重要量子密钥分发实验：

- **中国—奥地利**跨国量子密钥分发（2018年）
- **中国—德国**欧亚大陆量子通信（2020年）
- **中国—俄罗斯**跨大陆量子通信（2023年）

2020年，墨子号实现了星地间距离 1120 km 的**纠缠为基础的量子密钥分发**，密钥生成速率达 0.12 bps，通信效率约 $10^{-4}$。

### 量子隐形传态

2017年9月，墨子号成功实现了**星地量子隐形传态**，将地面站的量子态以隐形传态方式传输到卫星。该实验验证了星地量子通信网络的可行性。

## 技术挑战

### 光子损耗与探测

星地量子通信面临的核心挑战是**大气层光子损耗**。在 500 km 高度，光子穿越大气层后的损耗约为 20–30 dB，意味着只有约 $10^{-3}–10^{-2}$ 的光子能被探测到。

### 方案

- **高稳定性单光子源**：减少多光子事件
- **高效率单光子探测器**（超导单光子探测器）
- **高精度时间同步**（约1 ns级）
- **自适应光学跟踪**：补偿卫星轨道振动

### 气象条件

天气条件（云层、雨、霓幼等）会影响光子传输效率。墨子号通常在夜间进行实验，避免太阳光干扰。

## 历史意义

墨子号是全球**量子通信网络**的先驱：

- 第一个实现星地量子纠缠分发的实验平台
- 第一个实现跨大洲量子密钥分发的卫星平台
- 为全球量子互联网穿基群星提供了关键技术验证

## 后续发展

### 墨子号工程

基于墨子号的成功，中国正在规划**墨子号工程**（Micius-2），计划发射多颗低轨道量子通信卫星，构建覆盖全球的量子通信网络。

### 国际合作

墨子号已与奥地利、意大利、德国、俄罗斯等国实现了跨国量子通信，为全球量子信息科学提供了开放实验平台。

## 常见问题

**Q：量子密钥分发是否完全不可破解？**

理论上，BB84 协议的安全性由量子力学原理保证，任何窃听都会引入可检测的扰动。但实际安全还受设备完美性、单光子源窃射等实际因素限制。

**Q：墨子号能用于超光速通信吗？**

不能。量子纠缠不允许超光速传递有用信息，这是贝尔定理和相对论的结论。墨子号的安全性来自于量子力学的统计定律，而非超光速信息传递。

## 参考文献

1. J. Yin *et al.*, "Satellite-based entanglement distribution over 1200 kilometers", *Science* **356**, 1140–1144 (2017). [DOI](https://doi.org/10.1126/science.aan3211)（A级）
2. J. Yin *et al.*, "Satellite-to-ground entanglement-based quantum key distribution", *Nature* **582**, 501–505 (2020). [DOI](https://doi.org/10.1038/s41586-020-2401-y)（A级）
3. J. Yin *et al.*, "Quantum teleportation and entanglement distribution over 100-kilometre free-space channels", *Nature* **488**, 185–188 (2012). [DOI](https://doi.org/10.1038/nature11332)（A级）
4. J.-W. Pan *et al.*, "Multiphoton entanglement and interferometry", *Rev. Mod. Phys.* **84**, 777–838 (2012). [DOI](https://doi.org/10.1103/RevModPhys.84.777)（A级）
5. 潘建伟, 《墨子号：打开量子星际旅程》, 人民出版社, 2021.（C级：科普）

## 相关条目

- [[people/pan-jianwei]] — 潘建伟
- [[concepts/quantum-entanglement]] — 量子纠缠
- [[concepts/bell-theorem]] — 贝尔定理
- 量子通信
- 量子密码学
