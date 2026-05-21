# AI SDK 中文文档

这是 AI SDK 的中文文档，基于官方文档翻译。

## 文档结构

```
doc/
├── introduction/          # 介绍
│   └── ai-sdk.md         # AI SDK 简介
├── foundations/          # 基础概念
│   ├── overview.md       # 概述
│   ├── providers-and-models.md  # 提供商和模型
│   ├── prompts.md        # 提示
│   ├── tools.md          # 工具
│   └── streaming.md      # 流式传输
├── getting-started/      # 入门指南
│   ├── choosing-a-provider.md  # 选择提供商
│   └── nodejs.md         # Node.js 入门
├── ai-sdk-core/          # 核心功能
│   └── generating-text.md  # 文本生成
├── ai-sdk-ui/            # UI 组件
│   └── chatbot.md        # 聊天机器人
├── agents/               # 智能代理
├── ai-sdk-rsc/           # React Server Components
├── advanced/             # 高级功能
├── reference/            # API 参考
├── migration-guides/     # 迁移指南
└── troubleshooting/      # 故障排除
```

## 快速开始

### 1. 安装

```bash
npm install ai
```

### 2. 基本使用

```typescript
import { generateText } from "ai";

const { text } = await generateText({
  model: "openai/gpt-4-turbo",
  prompt: "Hello, world!",
});

console.log(text);
```

## 主要功能

| 模块 | 功能 |
|------|------|
| **AI SDK Core** | 文本生成、结构化数据、工具调用、嵌入、图像生成 |
| **AI SDK UI** | 聊天界面、完成界面、生成式 UI |
| **AI SDK RSC** | React Server Components 流式传输 |
| **Agents** | 构建智能代理、工作流、循环控制 |

## 支持的提供商

- OpenAI
- Anthropic
- Google Generative AI
- xAI Grok
- Azure
- Amazon Bedrock
- Groq
- 等等

## 参考链接

- [官方文档](https://ai-sdk.dev/docs/)
- [GitHub 仓库](https://github.com/vercel/ai)
- [Vercel AI Gateway](https://vercel.com/docs/ai-gateway)

## 目录

### 介绍
- [AI SDK 简介](/doc/introduction/ai-sdk.md)

### 基础概念
- [概述](/doc/foundations/overview.md)
- [提供商和模型](/doc/foundations/providers-and-models.md)
- [提示](/doc/foundations/prompts.md)
- [工具](/doc/foundations/tools.md)
- [流式传输](/doc/foundations/streaming.md)

### 入门指南
- [选择提供商](/doc/getting-started/choosing-a-provider.md)
- [Node.js 入门](/doc/getting-started/nodejs.md)

### 核心功能
- [生成文本](/doc/ai-sdk-core/generating-text.md)

### UI 组件
- [聊天机器人](/doc/ai-sdk-ui/chatbot.md)
