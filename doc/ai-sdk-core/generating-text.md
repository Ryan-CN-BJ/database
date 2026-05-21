# 生成文本

AI SDK 提供了强大的文本生成功能，支持多种模型提供商。

## 基本用法

### 生成文本

```typescript
import { generateText } from "ai";

const { text } = await generateText({
  model: "openai/gpt-4-turbo",
  prompt: "What is the meaning of life?",
});

console.log(text);
```

### 流式文本生成

```typescript
import { streamText } from "ai";

const stream = await streamText({
  model: "openai/gpt-4-turbo",
  prompt: "写一篇关于人工智能的文章",
});

for await (const chunk of stream) {
  process.stdout.write(chunk.text);
}
```

## 配置选项

### 基础选项

```typescript
const { text } = await generateText({
  model: "openai/gpt-4-turbo",
  prompt: "Hello",
  temperature: 0.7,
  maxTokens: 1000,
  topP: 0.9,
});
```

### 消息格式

```typescript
const { text } = await generateText({
  model: "openai/gpt-4-turbo",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "What is AI?" },
  ],
});
```

### 工具调用

```typescript
import { generateText, tool } from "ai";

const calculator = tool({
  name: "calculator",
  description: "执行数学计算",
  parameters: {
    expression: { type: "string", description: "数学表达式" },
  },
  execute: ({ expression }) => eval(expression),
});

const { text, toolCalls } = await generateText({
  model: "openai/gpt-4-turbo",
  prompt: "2 + 2 等于多少？",
  tools: [calculator],
});
```

## 高级功能

### 结构化输出

```typescript
import { generateObject } from "ai";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  age: z.number(),
  city: z.string(),
});

const { object } = await generateObject({
  model: "openai/gpt-4-turbo",
  prompt: "生成一个人的信息",
  schema,
});
```

### 嵌入生成

```typescript
import { embed } from "ai";

const { embedding } = await embed({
  model: "openai/text-embedding-3-small",
  value: "Hello, world!",
});
```

### 图像生成

```typescript
import { generateImage } from "ai";

const { image } = await generateImage({
  model: "openai/dall-e-3",
  prompt: "A beautiful sunset over the ocean",
});
```

## 错误处理

```typescript
try {
  const { text } = await generateText({
    model: "openai/gpt-4-turbo",
    prompt: "Hello",
  });
} catch (error) {
  if (error instanceof AI_APIError) {
    console.error("API Error:", error.message);
  } else {
    console.error("Unknown error:", error);
  }
}
```

## 性能优化

### 缓存

```typescript
const { text } = await generateText({
  model: "openai/gpt-4-turbo",
  prompt: "Hello",
  cache: true,
});
```

### 流式传输优化

```typescript
const stream = await streamText({
  model: "openai/gpt-4-turbo",
  prompt: "写一篇长文章",
  onChunk: (chunk) => {
    // 自定义处理逻辑
  },
});
```
