"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { useTheme } from "next-themes";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@radix-ui/react-hover-card";

export const SearchComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme(); // Get the current theme

  return (
    <div className="flex flex-col justify-between items-center w-full">
      {/* Search Input and Icon */}
      <HoverCard onOpenChange={setIsOpen}>
        <HoverCardTrigger asChild>
          <div
            className={`flex justify-between items-center relative rounded-[8px] border w-full max-w-[554px] ${
              isOpen ? "border-green-500" : "border-transparent"
            } ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-[#FCFFFC] text-black"
            }`}
          >
            <input
              type="text"
              placeholder="What would you love to buy today?"
              className="text-lg font-[400] h-10 p-3 rounded-[8px] w-full focus:outline-none border-none"
            />
            {isOpen ? (
              <X
                color={theme === "dark" ? "#fff" : "#425140"}
                className="mr-4 cursor-pointer"
                size={18}
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <Search
                color={theme === "dark" ? "#fff" : "#425140"}
                className="mr-4 cursor-pointer"
                size={13.5}
              />
            )}
          </div>
        </HoverCardTrigger>

        {/* Modal (HoverCardContent) */}
        <HoverCardContent
          align="start"
          sideOffset={4}
          className={` max-w-[554px] rounded-b-[8px] rounded-t-none shadow-lg p-4 ${
            theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
          <p>This is the modal content.</p>
          <p>This is the modal content.</p>
          <p>This is the modal content.</p>
          <p>This is the modal content.</p>
          <p>This is the modal content.</p>
          <p>This is the modal content.</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
