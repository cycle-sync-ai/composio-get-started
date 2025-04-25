import "dotenv/config";
import { OpenAIToolSet } from "composio-core";
import { OpenAI } from "openai";

const main = async () => {
  const toolset = new OpenAIToolSet();
  const client = new OpenAI();

  const tools = await toolset.getTools({
    actions: ["GITHUB_GET_THE_AUTHENTICATED_USER"],
  });
  const task = "Get my GitHub username.";
  const messages = [
    {
      role: "system" as const,
      content: "You are a helpful assistant that can use tools.",
    },
    { role: "user" as const, content: task },
  ];

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini", // Or another capable model
    messages: messages,
    tools: tools, // The tools we prepared earlier
    tool_choice: "auto", // Let the LLM decide whether to use a tool
  });

  const result = await toolset.handleToolCall(response);

  console.log(result);
};

main().catch(console.error);
