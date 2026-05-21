# 工具

工具调用是 AI SDK 的核心功能之一，允许 AI 模型与外部系统和 API 交互。

## 什么是工具调用

工具调用是指让 AI 模型能够调用外部工具或 API 来完成特定任务。这使模型能够：

- 执行计算
- 访问实时数据
- 操作文件
- 调用其他服务

## 定义工具

在 AI SDK 中，您可以使用 `tool` 函数定义工具：

```typescript
import { tool } from "ai";

const getWeather = tool({
  name: "getWeather",
  description: "获取指定城市的天气信息",
  parameters: {
    city: {
      type: "string",
      description: "城市名称",
    },
  },
  execute: async ({ city }) => {
    // 调用天气 API
    const response = await fetch(`https://api.weather.com/${city}`);
    return response.json();
  },
});
```

## 使用工具

一旦定义了工具，您可以在生成文本时使用它们：

```typescript
import { generateText } from "ai";

const { text, toolCalls } = await generateText({
  model: "openai/gpt-4-turbo",
  prompt: "北京今天的天气怎么样？",
  tools: [getWeather],
});
```

## 工具返回结果

工具调用完成后，您可以获取结果：

```typescript
if (toolCalls) {
  for (const toolCall of toolCalls) {
    const result = await toolCall.execute();
    console.log(result);
  }
}
```

## 工具类型

### 同步工具

同步工具直接返回结果：

```typescript
const addNumbers = tool({
  name: "addNumbers",
  description: "将两个数字相加",
  parameters: {
    a: { type: "number", description: "第一个数字" },
    b: { type: "number", description: "第二个数字" },
  },
  execute: ({ a, b }) => a + b,
});
```

### 异步工具

异步工具执行异步操作：

```typescript
const searchWeb = tool({
  name: "searchWeb",
  description: "搜索网页",
  parameters: {
    query: { type: "string", description: "搜索查询" },
  },
  execute: async ({ query }) => {
    const response = await fetch(`https://api.search.com?q=${query}`);
    return response.json();
  },
});
```

### 动态工具

动态工具允许您根据上下文动态生成工具：

```typescript
import { dynamicTool } from "ai";

const myDynamicTool = dynamicTool({
  name: "dynamicTool",
  description: "动态工具",
  parameters: {
    action: { type: "string", description: "要执行的操作" },
  },
  execute: async ({ action }) => {
    // 根据 action 动态执行不同的操作
    switch (action) {
      case "create":
        return await createSomething();
      case "update":
        return await updateSomething();
      default:
        return { error: "Unknown action" };
    }
  },
});
```

## 工具调用流程

1. **定义工具**：使用 `tool` 或 `dynamicTool` 定义工具
2. **传递工具**：将工具传递给生成函数
3. **模型决定**：模型决定是否需要调用工具
4. **执行工具**：如果需要，执行工具调用
5. **获取结果**：获取工具执行结果并可能继续生成

## 工具调用最佳实践

### 清晰的描述

确保工具描述清晰明确，帮助模型理解何时使用该工具。

### 参数验证

在执行函数中验证参数的有效性。

### 错误处理

妥善处理工具执行过程中的错误。

### 工具选择

对于复杂场景，可以使用多个工具，并让模型选择合适的工具。
