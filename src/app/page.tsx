"use client";
import CategoriesList from "@/components/category/CategoriesList";
import Products from "./product/Products";
import Recommended from "@/components/recommended/Recommended";
import { useState } from "react";

const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="mb-10">
      <div className="hidden lg:block ">
        <CategoriesList onCategorySelect={setSelectedCategory} />
      </div>
      <Products activeCategory={selectedCategory} />
      <Recommended />
    </div>
  );
};

export default Homepage;
