"use client";

import { useCategories } from "@/app/hooks/useCategories";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import Container from "../ui/Container";
import { FilterButton } from "./FilterButton";
import { Skeleton } from "../ui/skeleton";
import { CategoryItem } from "../ui/CategoryItem";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategoriesListProps {
  onCategorySelect: (category: string | null) => void;
}

const CategoriesList: React.FC<CategoriesListProps> = ({
  onCategorySelect,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { data: categories, isPending, error } = useCategories();
  const { theme } = useTheme();
  const itemsPerPage = 8;

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
              <h4
                className={`cursor-pointer ${
                  activeCategory === null ? "font-bold text-green-500" : ""
                }`}
                onClick={() => {
                  setActiveCategory(null);
                  onCategorySelect(null);
                }}
              >
                All Category
              </h4>

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
                        isActive={category.id.toString() === activeCategory}
                        onClick={() => {
                          setActiveCategory(category.id.toString());
                          onCategorySelect(category.id.toString());
                        }}
                      />
                    ))}

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
