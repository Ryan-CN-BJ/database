# 提示

提示是与 AI 模型交互的核心方式。在 AI SDK 中，提示可以以多种形式定义和使用。

## 提示的类型

### 字符串提示

最简单的提示形式是字符串：

```typescript
const { text } = await generateText({
  model: "openai/gpt-4-turbo",
  prompt: "What is the meaning of life?",
});
```

### 消息提示

对于更复杂的对话场景，可以使用消息数组：

```typescript
const { text } = await generateText({
  model: "openai/gpt-4-turbo",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "What is the meaning of life?" },
  ],
});
```

### 模板提示

AI SDK 支持模板提示，允许您动态插入变量：

```typescript
const { text } = await generateText({
  model: "openai/gpt-4-turbo",
  prompt: `
    You are a ${role}.
    
    ${context}
    
    User: ${question}
  `,
});
```

## 提示工程最佳实践

### 清晰明确

确保您的提示清晰明确，避免歧义。

### 提供上下文

给模型提供足够的上下文信息，帮助它理解任务。

### 使用角色设定

通过系统消息设定模型的角色和行为：

```typescript
messages: [
  { role: "system", content: "You are an expert Python programmer." },
  { role: "user", content: "Write a function to sort a list." },
]
```

### 分步骤思考

对于复杂任务，可以引导模型逐步思考：

```typescript
prompt: `
  Solve this problem step by step:
  
  Problem: ${problem}
  
  Step 1: Understand the problem
  Step 2: Plan the solution
  Step 3: Implement the solution
  Step 4: Verify the result
`
```

## 提示优化

### 迭代改进

通过尝试不同的提示方式并评估结果来优化您的提示。

### 使用示例

提供示例可以帮助模型理解您的期望输出格式：

```typescript
prompt: `
  Convert the following text to JSON:
  
  Example:
  Input: "Name: John, Age: 30"
  Output: {"name": "John", "age": 30}
  
  Input: ${input}
  Output:
`
```

## 提示安全

### 避免注入攻击

当使用用户输入构建提示时，要注意防止提示注入攻击。

### 使用安全设置

利用 AI SDK 提供的安全功能，如内容过滤和安全护栏。
