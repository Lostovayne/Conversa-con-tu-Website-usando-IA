"use client";

import { type useChat } from "@ai-sdk/react";
import { SendIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

type handleInputChange = ReturnType<typeof useChat>["handleInputChange"];
type handleSubmit = ReturnType<typeof useChat>["handleSubmit"];

interface ChatInputProps {
  input: string;
  handleInputChange: handleInputChange;
  handleSubmit: handleSubmit;
}

export const ChatInput = ({ input, handleInputChange, handleSubmit }: ChatInputProps) => {
  return (
    <div className="z-10 bg-zinc-900 absolute bottom-0 w-full left-0">
      <div className="mx-2 flex flex-row gap-3  md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div className="relative flex h-full flex-1 items-stretch md:flex-col ">
          <div className="relative flex flex-col w-full flex-grow p-4">
            <form className="relative" onSubmit={handleSubmit}>
              <Textarea
                minLength={4}
                autoFocus
                rows={4}
                value={input}
                maxLength={400}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                onChange={handleInputChange}
                placeholder="Type a message..."
                className="resize-none scroll-none pr-12 max-h-20 text-base py-3 pl-4 w-full rounded-md border bg-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-offset-zinc-800 dark:focus:ring-1 dark:focus:ring-zinc-900"
              />
              <Button
                type="submit"
                size={"sm"}
                className="absolute right-0 top-0 mr-4 mt-4 text-white bg-zinc-800 hover:bg-zinc-700"
              >
                <SendIcon className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
