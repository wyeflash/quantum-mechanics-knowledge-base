---
title: NV 色心
description: 金刚石 NV 色心是室温固态量子传感平台，可用于磁场、温度、应力和生物体系探测。
tags: [quantum-sensing, magnetometry, metrology]
type: application
status: complete
created: 2026-05-10
updated: 2026-05-10
confidence: high
difficulty: intermediate
sources:
  - "F. Jelezko and J. Wrachtrup, Single defect centres in diamond: A review, Phys. Status Solidi A 203, 3207 (2006)"
  - "L. Rondin et al., Magnetometry with nitrogen-vacancy defects in diamond, Rep. Prog. Phys. 77, 056503 (2014)"
---

# NV 色心 (NV Center)

## 概述

NV 色心是金刚石中的氮-空位缺陷，由一个氮原子替代碳原子并邻近一个空位形成。其电子自旋可在室温下被光学初始化和读出，因此成为[[quantum-sensing|量子传感]]中最重要的固态平台之一。

::: info 可信度说明
- **可信度**: ★★★★★（Jelezko-Wrachtrup 综述与 Rondin 等 NV 磁测综述交叉验证）
- **验证状态**: 已验证
- **来源**: [1][2]
:::

## 工作原理

NV 色心的自旋能级会受到磁场、温度、应力和电场影响。通过光探测磁共振（ODMR）测量能级分裂或共振频率变化，就能反推出外界物理量。其优势是可在室温、纳米尺度下工作，并可与生物样品兼容。

## 技术路线

- **单 NV 探针**：用于纳米尺度磁成像。
- **NV 集合体**：提高灵敏度，用于大面积成像。
- **扫描探针 NV**：把 NV 色心集成到探针尖端，实现高空间分辨测量。
- **生物与材料应用**：用于细胞磁信号、二维材料电流分布和凝聚态磁结构研究。

## 与标准量子极限

NV 传感的灵敏度受相干时间、读出效率、光子收集效率和噪声影响。通过动态解耦、量子控制和材料工程可接近或改善特定条件下的测量极限。其极限分析与[[standard-quantum-limit|标准量子极限]]密切相关。

## 中国进展

中国多所高校和研究机构在金刚石量子传感、纳米磁成像和生物磁测方向有活跃研究。NV 色心路线也是量子技术从实验室走向仪器化的重要候选方向之一。

## 流传误区

- ❌ “NV 色心只能测磁场” → ✅ 它也可用于温度、应力、电场等多物理量传感。
- ❌ “量子传感必然需要极低温” → ✅ NV 色心的重要优势之一是室温工作。
- ❌ “灵敏度越高就一定越好” → ✅ 实际仪器还要权衡空间分辨率、带宽、稳定性和样品兼容性。

## 相关条目

- [[quantum-sensing]] — 量子传感
- [[standard-quantum-limit]] — 标准量子极限
- [[squid]] — SQUID
- [[atom-interferometer]] — 原子干涉仪
- [[concepts/spin]] — 自旋

## 参考文献

1. F. Jelezko and J. Wrachtrup, "Single defect centres in diamond: A review", *physica status solidi (a)* **203**, 3207-3225 (2006). [DOI](https://doi.org/10.1002/pssa.200671403)（A级综述）
2. L. Rondin et al., "Magnetometry with nitrogen-vacancy defects in diamond", *Reports on Progress in Physics* **77**, 056503 (2014). [DOI](https://doi.org/10.1088/0034-4885/77/5/056503)（A级综述）
