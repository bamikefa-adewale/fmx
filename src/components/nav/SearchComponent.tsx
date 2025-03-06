"use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { useTheme } from "next-themes";
import { HoverCard, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { useDebounce } from "use-debounce";
import { usePathname, useRouter } from "next/navigation";

export const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme(); // Get the current theme
  const [value] = useDebounce(search, 1000);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (value) {
      const params = new URLSearchParams({
        searchTerm: value,
      }).toString();
      router.replace(`${pathname}?${params}`);
    } else {
      return router.replace(pathname);
    }
  }, [value, pathname, router]);
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
      </HoverCard>
    </div>
  );
};
