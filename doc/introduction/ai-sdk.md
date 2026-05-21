# AI SDK

AI SDK 是一个 TypeScript 工具包，旨在帮助开发者使用 React、Next.js、Vue、Svelte、Node.js 等框架构建 AI 驱动的应用程序和智能代理。

## 为什么使用 AI SDK？

将大型语言模型（LLM）集成到应用程序中是复杂的，并且高度依赖于您使用的特定模型提供商。

AI SDK 标准化了跨[支持的提供商](https://ai-sdk.dev/docs/foundations/providers-and-models)的人工智能（AI）模型集成。这使开发者能够专注于构建出色的 AI 应用程序，而不是浪费时间在技术细节上。

例如，以下是如何使用 AI SDK 通过各种模型生成文本：

```JavaScript
import { generateText } from "ai";

const { text } = await generateText({
  model: "anthropic/claude-sonnet-4.5",
  prompt: "What is love?",
});
```

AI SDK 有两个主要库：

- **[AI SDK Core](https://ai-sdk.dev/docs/ai-sdk-core)**：一个统一的 API，用于生成文本、结构化对象、工具调用以及使用 LLM 构建智能代理。
- **[AI SDK UI](https://ai-sdk.dev/docs/ai-sdk-ui)**：一组框架无关的 hooks，用于快速构建聊天和生成式用户界面。

## 模型提供商

AI SDK 支持[多种模型提供商](https://ai-sdk.dev/providers)。

### 主要提供商

- **Vercel AI Gateway**
- **OpenAI**
- **Anthropic**
- **Google Generative AI**
- **xAI Grok**
- **Azure**
- **Amazon Bedrock**
- **Groq**
- **Fal AI**
- **DeepInfra**
- **Google Vertex AI**
- **Mistral**
- **Together.ai**
- **Cohere**
- **Fireworks**
- **DeepSeek**
- **Cerebras**
- **Perplexity**
- **Luma AI**
- **Baseten**

## 模板

我们为不同的用例、提供商和框架构建了一些[模板](https://vercel.com/templates?type=ai)，这些模板包含 AI SDK 集成。您可以使用这些模板快速开始构建您的 AI 驱动应用程序。

### 入门套件

- **Chatbot Starter Template** - 使用 AI SDK 和 Next.js，支持持久化、多模态聊天等功能
- **Internal Knowledge Base (RAG)** - 使用 AI SDK 语言模型中间件实现 RAG 和强制安全防护
- **Multi-Modal Chat** - 使用 Next.js 和 AI SDK useChat hook 实现多模态消息聊天界面
- **Semantic Image Search** - 使用 Next.js、AI SDK 和 Postgres 构建的 AI 语义图像搜索应用模板
- **Natural Language PostgreSQL** - 使用 AI SDK 和 GPT-4o 通过自然语言查询 PostgreSQL

### 功能探索

- **Feature Flags Example** - AI SDK 与 Next.js、Feature Flags 和 Edge Config 集成，支持动态模型切换
- **Chatbot with Telemetry** - 支持 OpenTelemetry 的 AI SDK 聊天机器人
- **Structured Object Streaming** - 使用 AI SDK useObject hook 流式传输结构化对象生成
- **Multi-Step Tools** - 使用 AI SDK streamText 函数自动处理多个工具步骤

### 框架示例

- **Next.js OpenAI Starter**
- **Nuxt OpenAI Starter**
- **SvelteKit OpenAI Starter**
- **Solid OpenAI Starter**

### 生成式 UI

- **Gemini Chatbot** - 使用 Google Gemini、AI SDK 和 Next.js
- **Generative UI with RSC (experimental)** - 使用 Next.js、AI SDK 和 streamUI 创建基于 React Server Components 的生成式 UI

### 安全

- **Bot Protection** - 使用 Kasada、OpenAI GPT-4、AI SDK 和 Next.js
- **Rate Limiting** - 使用 Vercel KV、OpenAI GPT-4、AI SDK 和 Next.js

## 加入我们的社区

如果您对与 AI SDK 相关的任何问题有疑问，欢迎随时在[Vercel Community](https://community.vercel.com/c/ai-sdk/62)上向我们的社区提问。

## `llms.txt`（适用于 Cursor、Windsurf、Copilot、Claude 等）

您可以在 [ai-sdk.dev/llms.txt](https://ai-sdk.dev/llms.txt) 以 Markdown 格式访问完整的 AI SDK 文档。这可以用于向任何 LLM（假设它有足够大的上下文窗口）提问关于 AI SDK 的问题，基于最新的文档。

### 使用示例

例如，要向 LLM 提问关于 AI SDK 的问题：

1. 从 [ai-sdk.dev/llms.txt](https://ai-sdk.dev/llms.txt) 复制文档内容
2. 使用以下提示格式：

```
Documentation:

{paste documentation here}

---

Based on the above documentation, answer the following:

{your question}
```

