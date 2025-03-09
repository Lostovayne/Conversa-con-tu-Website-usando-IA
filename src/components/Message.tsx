import { cn } from "@/app/lib/utils";
import { Bot, User } from "lucide-react";

interface MessageProps {
  content: string;
  isUserMessage: boolean;
}

export const Message = ({ content, isUserMessage }: MessageProps) => {
  const renderContent = (text: string) => {
    const thinkMatch = text.match(/<think>([^]*?)<\/think>/);
    
    if (thinkMatch) {
      const [fullMatch, thinkContent] = thinkMatch;
      const parts = text.split(fullMatch);
      
      return (
        <>
          {parts[0]}
          <div className="my-4 p-4 bg-zinc-800/50 rounded-lg text-gray-400">
            {thinkContent.trim()}
          </div>
          {parts[1]}
        </>
      );
    }
    
    return text;
  };

  return (
    <div
      className={cn({
        "bg-zinc-800": isUserMessage,
        "bg-zinc-900/25": !isUserMessage,
      })}
    >
      <div className="p-6">
        <div className="max-w-3xl mx-auto flex items-start gap-2.5">
          <div
            className={cn(
              "size-10 shrink-0 aspect-square rounded-full border border-zinc-700 bg-zinc-900 flex justify-center items-center",
              {
                "bg-blue-950 border-blue-700 text-zinc-200": isUserMessage,
              }
            )}
          >
            {isUserMessage ? <User className="size-5" /> : <Bot className="size-5 text-white" />}
          </div>
          <div className="flex flex-col ml-6 w-full">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {isUserMessage ? "You" : "Website"}
              </span>
            </div>
            <div className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
              {renderContent(content)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
