"use client";

import { useCategories } from "@/app/hooks/useCategories";
import { useTheme } from "next-themes";
import { useState } from "react";
import Container from "../ui/Container";
import { FilterButton } from "./FilterButton";
import { Skeleton } from "../ui/skeleton";
import { CategoryItem } from "../ui/CategoryItem";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CategoriesList = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const { data: categories, isPending, error } = useCategories();
  console.log(categories);

  const itemsPerPage = 8;
  const { theme } = useTheme();

  if (error) {
    return <p className="text-red-500 text-center">Error: {error.message}</p>;
  }

  if (!categories?.length && !isPending) {
    return <p className="text-gray-500 text-center">No categories found.</p>;
  }

  return (
    <div
      className={`transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-[#FCFFFC] text-black"
      }`}
    >
      <Container>
        <div className="my-20">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 h-20">
            <FilterButton />

            <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-6 w-full overflow-x-auto">
              {/* need to fix later */}
              <h4>All Category</h4>
              {/* Show skeletons while loading */}
              {isPending
                ? [...Array(itemsPerPage)].map((_, index) => (
                    <Skeleton
                      key={index}
                      className="h-[22px] w-[120px] rounded-lg"
                    />
                  ))
                : categories
                    ?.slice(startIndex, startIndex + itemsPerPage)
                    .map((category) => (
                      <CategoryItem
                        key={category.id}
                        name={category.name}
                        isActive={category.name === activeCategory}
                        onClick={() => setActiveCategory(category.name)}
                      />
                    ))}

              {/* Pagination Controls */}
              <div className="flex items-center cursor-pointer gap-4">
                <ChevronLeft
                  onClick={() => setStartIndex((prev) => Math.max(0, prev - 1))}
                />
                <ChevronRight
                  onClick={() =>
                    setStartIndex((prev) =>
                      Math.min(
                        (categories?.length ?? 0) - itemsPerPage,
                        prev + 1
                      )
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
