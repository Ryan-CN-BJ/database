# 流式传输

流式传输是 AI SDK 的一项重要功能，允许模型在生成内容时逐步返回结果。

## 为什么使用流式传输

### 用户体验

流式传输提供了更好的用户体验，用户可以在模型生成内容时看到部分结果，而不需要等待完整响应。

### 性能

对于长时间运行的任务，流式传输可以显著提高感知性能。

### 内存效率

流式传输可以减少内存使用，因为不需要一次性加载整个响应。

## 使用流式文本生成

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

## 使用流式对象生成

```typescript
import { streamObject } from "ai";
import { z } from "zod";

const schema = z.object({
  title: z.string(),
  content: z.string(),
  tags: z.array(z.string()),
});

const stream = await streamObject({
  model: "openai/gpt-4-turbo",
  prompt: "生成一篇博客文章的结构",
  schema,
});

for await (const partial of stream) {
  console.log(partial);
}
```

## 流式传输选项

### 控制流

您可以控制流式传输的行为：

```typescript
const stream = await streamText({
  model: "openai/gpt-4-turbo",
  prompt: "写一篇长文章",
  maxTokens: 1000,
  temperature: 0.7,
});
```

### 自定义处理

您可以自定义处理每个 chunk：

```typescript
const stream = await streamText({
  model: "openai/gpt-4-turbo",
  prompt: "写一篇文章",
});

let fullText = "";
for await (const chunk of stream) {
  fullText += chunk.text;
  // 可以在这里添加自定义处理逻辑
}
```

## 流式传输事件

AI SDK 提供了事件回调来处理流式传输：

```typescript
const stream = await streamText({
  model: "openai/gpt-4-turbo",
  prompt: "写一篇文章",
  onChunk: (chunk) => {
    console.log("收到 chunk:", chunk);
  },
  onComplete: () => {
    console.log("传输完成");
  },
});
```

## 流式传输与工具调用

流式传输可以与工具调用结合使用：

```typescript
const stream = await streamText({
  model: "openai/gpt-4-turbo",
  prompt: "查询今天的天气并总结",
  tools: [getWeather],
});

for await (const chunk of stream) {
  if (chunk.toolCalls) {
    // 处理工具调用
  } else {
    // 处理文本输出
    process.stdout.write(chunk.text);
  }
}
```

## 流式传输最佳实践

### 及时反馈

利用流式传输为用户提供及时的反馈。

### 进度显示

可以显示生成进度或预计剩余时间。

### 错误处理

妥善处理流式传输过程中的错误。

### 取消支持

提供取消流式传输的功能。
