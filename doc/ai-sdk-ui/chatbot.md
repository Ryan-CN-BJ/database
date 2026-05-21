# 聊天机器人

AI SDK UI 提供了构建聊天界面的强大工具，支持 React、Vue、Svelte 等多种框架。

## 基本用法

### 使用 useChat Hook

```typescript
import { useChat } from "ai/react";

function ChatComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            {message.role === "user" ? "User: " : "AI: "}
            {message.content}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        placeholder="Type a message..."
      />
    </div>
  );
}
```

### 流式响应

```typescript
import { useChat } from "ai/react";

const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
  api: "/api/chat",
  onStreamStart: () => {
    console.log("Stream started");
  },
  onStreamEnd: () => {
    console.log("Stream ended");
  },
});
```

## 配置选项

### 自定义消息格式

```typescript
const { messages, handleSubmit } = useChat({
  api: "/api/chat",
  initialMessages: [
    { role: "system", content: "You are a helpful assistant." },
  ],
});
```

### 工具调用支持

```typescript
const { messages, handleSubmit, isToolCall } = useChat({
  api: "/api/chat",
  tools: [
    {
      name: "getWeather",
      description: "获取天气信息",
      parameters: {
        city: { type: "string", description: "城市名称" },
      },
    },
  ],
});
```

### 持久化消息

```typescript
const { messages, handleSubmit } = useChat({
  api: "/api/chat",
  persist: true,
  storage: localStorage,
});
```

## 消息处理

### 转换消息

```typescript
import { convertToModelMessages } from "ai/react";

const modelMessages = convertToModelMessages(chatMessages);
```

### 修剪消息

```typescript
import { pruneMessages } from "ai/react";

const pruned = pruneMessages(messages, { maxTokens: 1000 });
```

## 自定义传输

### 直接聊天传输

```typescript
import { DirectChatTransport } from "ai/react";

const transport = new DirectChatTransport({
  model: "openai/gpt-4-turbo",
  apiKey: process.env.OPENAI_API_KEY,
});

const { messages, handleSubmit } = useChat({
  transport,
});
```

## 高级功能

### 多模态消息

```typescript
const { messages, handleSubmit } = useChat({
  api: "/api/chat",
  onMessage: (message) => {
    if (message.type === "image") {
      // 处理图像消息
    }
  },
});
```

### 错误处理

```typescript
const { messages, handleSubmit, error } = useChat({
  api: "/api/chat",
  onError: (error) => {
    console.error("Chat error:", error);
  },
});
```

### 自定义 UI

```typescript
const { messages, input, handleInputChange, handleSubmit } = useChat({
  api: "/api/chat",
});

// 自定义渲染逻辑
return (
  <CustomChatInterface
    messages={messages}
    input={input}
    onChange={handleInputChange}
    onSubmit={handleSubmit}
  />
);
```
