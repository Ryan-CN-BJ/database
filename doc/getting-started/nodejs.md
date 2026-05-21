# Node.js 入门指南

本指南将帮助您在 Node.js 项目中使用 AI SDK。

## 安装

首先，在您的 Node.js 项目中安装 AI SDK：

```bash
npm install ai
```

## 基本使用

### 生成文本

```typescript
import { generateText } from "ai";

async function main() {
  const { text } = await generateText({
    model: "openai/gpt-4-turbo",
    prompt: "What is the meaning of life?",
  });

  console.log(text);
}

main();
```

### 流式文本生成

```typescript
import { streamText } from "ai";

async function main() {
  const stream = await streamText({
    model: "openai/gpt-4-turbo",
    prompt: "写一篇关于人工智能的文章",
  });

  for await (const chunk of stream) {
    process.stdout.write(chunk.text);
  }
}

main();
```

## 配置 API 密钥

### 环境变量方式

创建 `.env` 文件：

```env
OPENAI_API_KEY=your-api-key
```

然后在代码中使用：

```typescript
import { generateText } from "ai";

const { text } = await generateText({
  model: "openai/gpt-4-turbo",
  prompt: "Hello",
});
```

### 显式配置

```typescript
import { generateText, openai } from "ai";

openai.apiKey = "your-api-key";

const { text } = await generateText({
  model: "openai/gpt-4-turbo",
  prompt: "Hello",
});
```

## 使用其他提供商

### Anthropic

```typescript
import { generateText } from "ai";

const { text } = await generateText({
  model: "anthropic/claude-sonnet-4.5",
  prompt: "Hello",
});
```

### Google Gemini

```typescript
import { generateText } from "ai";

const { text } = await generateText({
  model: "google/gemini-pro",
  prompt: "Hello",
});
```

## 工具调用示例

```typescript
import { generateText, tool } from "ai";

const getWeather = tool({
  name: "getWeather",
  description: "获取天气信息",
  parameters: {
    city: { type: "string", description: "城市名称" },
  },
  execute: async ({ city }) => {
    return { temperature: 25, condition: "sunny" };
  },
});

const { text, toolCalls } = await generateText({
  model: "openai/gpt-4-turbo",
  prompt: "北京今天的天气怎么样？",
  tools: [getWeather],
});
```

## 结构化数据生成

```typescript
import { generateObject } from "ai";
import { z } from "zod";

const schema = z.object({
  title: z.string(),
  author: z.string(),
  year: z.number(),
});

const { object } = await generateObject({
  model: "openai/gpt-4-turbo",
  prompt: "生成一本书的信息",
  schema,
});

console.log(object);
```

## 常见问题

### Q: 需要安装其他依赖吗？

不需要，AI SDK 会自动处理提供商的 API 调用。

### Q: 如何处理错误？

使用 try-catch 块：

```typescript
try {
  const { text } = await generateText({
    model: "openai/gpt-4-turbo",
    prompt: "Hello",
  });
} catch (error) {
  console.error("Error:", error);
}
```

### Q: 可以在浏览器中使用吗？

可以，AI SDK 支持浏览器环境。但建议在服务端处理 API 调用以保护 API 密钥。

## 下一步

了解更多：
- [提供商和模型](/docs/foundations/providers-and-models)
- [提示工程](/docs/ai-sdk-core/prompt-engineering)
- [工具调用](/docs/ai-sdk-core/tools-and-tool-calling)
