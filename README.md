# QMKB — 量子力学知识库

> Quantum Mechanics Knowledge Base

## 项目简介

本知识库为量子力学科普自媒体提供严谨、体系化的知识基础。内容以权威来源为基础，避免流传误区，支持多媒体内容输出。

## 目录结构

```
qmkb/
├── .vitepress/          # VitePress 站点配置
├── public/             # 静态资源
├── raw/                # 原始资料（不直接发布）
│   ├── articles/
│   ├── papers/
│   ├── books/
│   ├── courses/
│   └── assets/
├── concepts/           # 核心概念页面
├── people/             # 科学家人物
├── experiments/        # 著名实验
├── history/            # 历史事件
├── interpretations/    # 诠释与哲学
├── applications/       # 应用与前沿
├── resources/          # 资源汇总
├── comparisons/        # 对比分析
├── entities/           # 其他实体
├── queries/            # 查询归档
├── SCHEMA.md           # 知识库规范
├── index.md            # 知识库索引
└── log.md              # 操作日志
```

## 本地预览

```bash
# 安装依赖
npm install -D vitepress

# 启动开发服务器
npx vitepress dev

# 构建生产版本
npx vitepress build
```

## 编辑规范

请参阅 [SCHEMA.md](SCHEMA.md) 了解文件命名、frontmatter、标签体系等规范。

## 授权协议

本知识库内容采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 协议。
