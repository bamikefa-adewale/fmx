"use client";

import Container from "@/components/ui/Container";
import { categories } from "../constanct/categories";
import { FilterButton } from "./FilterButton";
import { CategoryItem } from "@/components/ui/CategoryItem";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { Skeleton } from "@/components/ui/skeleton";

const CategoriesList = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true); // Simulated loading state
  const [categoryList, setCategoryList] = useState<string[]>([]); // Local state

  const itemsPerPage = 8;
  const { theme } = useTheme();

  useEffect(() => {
    // Simulating data fetching delay
    setTimeout(() => {
      setCategoryList(categories); // Set actual categories
      setLoading(false); // Stop loading
    }, 1500); // 1.5s delay for simulation
  }, []);

  return (
    <div
      className={`transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-[#FCFFFC] text-black"
      }`}
    >
      <Container>
        <div className="my-20">
          <div className=" flex flex-col md:flex-row items-center gap-4 md:gap-10 h-20">
            <FilterButton />

            <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-6 w-full overflow-x-auto">
              {/* Show skeletons when loading */}
              {loading
                ? [...Array(itemsPerPage)].map((_, index) => (
                    <Skeleton
                      key={index}
                      className="h-[22px] w-[120px] rounded-lg"
                    />
                  ))
                : categoryList
                    .slice(startIndex, startIndex + itemsPerPage)
                    .map((category, index) => (
                      <CategoryItem
                        key={index}
                        name={category}
                        isActive={category === activeCategory}
                        onClick={() => setActiveCategory(category)}
                      />
                    ))}
              <div className="flex items-center cursor-pointer gap-4">
                <ChevronLeft
                  onClick={() => setStartIndex((prev) => Math.max(0, prev - 1))}
                />
                <ChevronRight
                  onClick={() =>
                    setStartIndex((prev) =>
                      Math.min(categoryList.length - itemsPerPage, prev + 1)
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoriesList;
