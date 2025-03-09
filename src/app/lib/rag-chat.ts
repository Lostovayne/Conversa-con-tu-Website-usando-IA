import { groq, RAGChat } from "@upstash/rag-chat";

export const ragChat = new RAGChat({
  model: groq("qwen-qwq-32b"),
});
