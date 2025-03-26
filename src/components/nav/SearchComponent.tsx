"use client";

import { X } from "lucide-react";
import { useTheme } from "next-themes";
import { HoverCard, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { useSearch } from "@/app/hooks/useSearch";

export const SearchComponent = () => {
  const { theme } = useTheme();
  const { search, setSearch } = useSearch();

  return (
    <div className="flex flex-col justify-between items-center w-full">
      <HoverCard>
        <HoverCardTrigger asChild>
          <div
            className="flex justify-between items-center  rounded-[8px] border w-full max-w-[554px] 
             border-green-500 border-transparent relative "
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="What would you love to buy today?"
              className="text-lg font-[400] h-10 p-3 rounded-[8px] w-full focus:outline-none border-none"
            />

            <X
              color={theme === "dark" ? "#fff" : "#425140"}
              className="mr-4 cursor-pointer absolute right-0"
              size={18}
              onClick={() => {
                setSearch("");
              }}
            />
          </div>
        </HoverCardTrigger>
      </HoverCard>
    </div>
  );
};
