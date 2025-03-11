import { groq, RAGChat } from "@upstash/rag-chat";
import { redis } from "./redis";
export const ragChat = new RAGChat({
  model: groq("llama-3.3-70b-versatile"),
  redis: redis,
});
