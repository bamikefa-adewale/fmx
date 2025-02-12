"use client";
import { useState } from "react";
import { Search, X } from "lucide-react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@radix-ui/react-hover-card";

export const SearchComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col justify-between items-center">
      {/* Search Input and Icon */}
      <HoverCard onOpenChange={setIsOpen}>
        <HoverCardTrigger asChild>
          <div
            className={`flex  justify-between items-center relative bg-[#FCFFFC] rounded-[8px] border w-[554px] ${
              isOpen ? "border-green-500" : "border-transparent"
            }`}
          >
            <input
              type="text"
              placeholder="What would you love to buy today?"
              className="text-lg font-[400] h-10  p-3 rounded-[8px] focus:outline-none focus:ring-0 border-none"
            />
            {isOpen ? (
              <X
                color="#425140"
                className="mr-4 cursor-pointer border-green-500"
                size={18}
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <Search
                color="#425140"
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
          className="bg-white w-[554px] rounded-b-[8px] rounded-t-none shadow-lg p-4"
        >
          <p className="text-gray-700">This is the modal content.</p>
          <p className="text-gray-700">This is the modal content.</p>
          <p className="text-gray-700">This is the modal content.</p>
          <p className="text-gray-700">This is the modal content.</p>
          <p className="text-gray-700">This is the modal content.</p>
          <p className="text-gray-700">This is the modal content.</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
