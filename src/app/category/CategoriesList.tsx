"use client";
import Container from "@/components/ui/Container";
import { categories } from "../constanct/categories";
import { FilterButton } from "./FilterButton";
import { CategoryItem } from "@/components/ui/CategoryItem";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";

const CategoriesList = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  const handleNext = () => {
    if (startIndex < categories.length - itemsPerPage) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const itemsPerPage = 8; // Number of visible
  const { theme } = useTheme(); // Get the current theme

  return (
    <div
      className={`transition-colors duration-300 ${
        theme === "dark" ? " bg-black text-white" : "bg-[#FCFFFC] text-black"
      }`}
    >
      {/* <div className="bg-[#FCFFFC]"> */}
      <Container>
        <div className="my-20">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 h-20">
            <FilterButton />
            {/* 33% of the carousel width.  */}

            <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-6 w-full overflow-x-auto">
              {categories
                .slice(startIndex, startIndex + itemsPerPage)
                .map((category, index) => (
                  <CategoryItem
                    key={index}
                    name={category}
                    isActive={category === activeCategory}
                    onClick={() => handleCategoryClick(category)}
                  />
                ))}
              <div className="flex items-center gap-4">
                <ChevronLeft onClick={handlePrev} />
                <ChevronRight onClick={handleNext} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoriesList;
