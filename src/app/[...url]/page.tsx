import { ChatWrapper } from "@/components/ChatWrapper";
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
  const reconstructedUrl = reconstructUrl({ url: url as string[] });

  // Confirmar si la url ya fue indexada anteriormente
  const isAlreadyIndexed = await redis.sismember("indexed_urls", reconstructedUrl);

  const sessionId = "mock-session";

  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: reconstructedUrl,
      config: { chunkOverlap: 50, chunkSize: 200 },
    });

    // Agregar la url a la lista de urls indexadas
    await redis.sadd("indexed_urls", reconstructedUrl);
  }

  return <ChatWrapper sessionId={sessionId} />;
};

export default Page;
