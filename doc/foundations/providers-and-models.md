# 提供商和模型

AI SDK 支持多种模型提供商，使您能够轻松切换不同的 AI 模型。

## 支持的提供商

### Vercel AI Gateway
Vercel AI Gateway 是一个统一的入口，允许您管理和路由到多个 AI 模型提供商。它提供了缓存、速率限制和监控等功能。

### OpenAI
OpenAI 提供了 GPT-4、GPT-4 Turbo、GPT-3.5 Turbo 等强大的语言模型。

**支持的功能：**
- 文本生成
- 图像输入（视觉理解）
- 图像生成
- 对象生成
- 工具调用
- 工具流式传输

### Anthropic
Anthropic 提供了 Claude 系列模型，以其长上下文窗口和安全特性而闻名。

**支持的功能：**
- 文本生成
- 图像输入
- 对象生成
- 工具调用
- 工具流式传输

### Google Generative AI
Google 的 Gemini 模型提供了强大的多模态能力。

**支持的功能：**
- 文本生成
- 图像输入
- 对象生成
- 工具调用
- 工具流式传输

### xAI Grok
xAI 的 Grok 模型以其实时信息获取能力而著称。

**支持的功能：**
- 文本生成
- 图像输入
- 图像生成
- 对象生成
- 工具调用
- 工具流式传输

### Azure
Microsoft Azure 提供了云端的 AI 服务。

**支持的功能：**
- 文本生成
- 图像输入
- 对象生成
- 工具调用
- 工具流式传输

### Amazon Bedrock
Amazon Bedrock 是一个托管的 AI 服务平台。

**支持的功能：**
- 文本生成
- 图像输入
- 图像生成
- 对象生成
- 工具调用
- 工具流式传输

### Groq
Groq 提供了快速的推理性能。

**支持的功能：**
- 文本生成
- 图像输入
- 对象生成
- 工具调用
- 工具流式传输

### 其他提供商
- **Fal AI** - 专注于图像生成
- **DeepInfra** - 提供多种开源模型
- **Google Vertex AI** - Google 企业级 AI 服务
- **Mistral** - 开源模型提供商
- **Together.ai** - 开源模型服务
- **Cohere** - 专注于文本理解和生成
- **Fireworks** - 提供多种模型
- **DeepSeek** - 提供开源模型
- **Cerebras** - 高性能 AI 推理
- **Perplexity** - 专注于搜索增强的问答
- **Luma AI** - 专注于视频生成
- **Baseten** - AI 模型部署平台

## 选择提供商

选择哪个提供商取决于您的需求：

| 因素 | 考虑要点 |
|------|----------|
| **成本** | 不同提供商的定价模型不同 |
| **功能** | 某些提供商支持特定功能 |
| **性能** | 推理速度和吞吐量 |
| **安全** | 数据隐私和合规要求 |
| **可用性** | 地区限制和服务可用性 |

## 模型格式

AI SDK 使用统一的模型标识符格式：
```
provider/model-name
```

例如：
- `anthropic/claude-sonnet-4.5`
- `openai/gpt-4-turbo`
- `google/gemini-pro`
