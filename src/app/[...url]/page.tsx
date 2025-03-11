import { ChatWrapper } from "@/components/ChatWrapper";
import { cookies } from "next/headers";
import { ragChat } from "../lib/rag-chat";
import { redis } from "../lib/redis";

interface PageProps {
  params: Promise<{
    url: string | string[] | undefined;
  }>;
}

function reconstructUrl({ url }: { url: string[] }) {
  const decodedComponents = url.map((component) => decodeURIComponent(component));
  return decodedComponents.join("/");
}

const Page = async ({ params }: PageProps) => {
  const { url } = await params;
  const sessionCookie = (await cookies()).get("sessionId")?.value;

  const reconstructedUrl = reconstructUrl({ url: url as string[] });

  const sessionId = (reconstructedUrl + "--" + sessionCookie).replace(/\//g, "");

  // Confirmar si la url ya fue indexada anteriormente
  const isAlreadyIndexed = await redis.sismember("indexed_urls", reconstructedUrl);

  const initialMessages = await ragChat.history.getMessages({ amount: 10, sessionId });

  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: reconstructedUrl,
      config: { chunkOverlap: 50, chunkSize: 200 },
    });

    // Agregar la url a la lista de urls indexadas
    await redis.sadd("indexed_urls", reconstructedUrl);
  }

  return <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />;
};

export default Page;
