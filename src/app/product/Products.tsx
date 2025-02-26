"use client";

import Container from "@/components/ui/Container";
import React, { useState } from "react";
import Heading from "../../components/header/Heading";
import Card from "../../components/Card";
import { useAllProducts } from "../hooks/useAllProducts";
import { categories } from "@/db/schema";

interface ProductsProps {
  activeCategory: string | null;
}
const Products: React.FC<ProductsProps> = ({ activeCategory }) => {
  const [visibleProducts, setVisibleProducts] = useState<number>(6);
  const { data: products, isPending, error } = useAllProducts();

  const filteredProducts = activeCategory
    ? products?.filter((product) => product.category_Id === activeCategory)
    : products;
  console.log(`targetting categoryId `, activeCategory);

  const loadMore = () => {
    setVisibleProducts(filteredProducts?.length || 0);
  };

  // useEffect(() => {}, [activeCategory, filteredProducts]);

  // Show error message if there's an error
  if (error) {
    return <p className="text-red-500 text-center">Error: {error.message}</p>;
  }

  return (
    <>
      <Container>
        <div className="flex my-10 justify-between items-center">
          <Heading title="Special Offers" />
          {filteredProducts && visibleProducts < filteredProducts.length && (
            <p
              className="cursor-pointer font-medium text-[#35AC0B] dark:text-white text-xl leading-[26px]"
              onClick={loadMore}
            >
              See All
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
          {isPending
            ? Array.from({ length: visibleProducts }).map((_, index) => (
                <Card
                  key={index}
                  isLoading={true}
                  name=""
                  images=""
                  location=""
                  id=""
                  description=""
                  soldBy=""
                  currentPrice={0}
                  markPrice={0}
                />
              ))
            : // product change to filteredProducts to get the current activeCategory products
              filteredProducts?.slice(0, visibleProducts).map((item) => {
                return (
                  <Card
                    key={item.id}
                    id={item?.id?.toString()}
                    name={item.name}
                    images={
                      Array.isArray(item?.images)
                        ? item?.images[0]
                        : item.images
                    }
                    location={item.location}
                    description={item.description}
                    soldBy={item.soldBy}
                    currentPrice={item.currentPrice}
                    markPrice={item.markPrice}
                  />
                );
              })}
        </div>
      </Container>
    </>
  );
};

export default Products;
