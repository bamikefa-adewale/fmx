"use client";

import Container from "@/components/ui/Container";
import React, { useState } from "react";
import Heading from "../../components/header/Heading";
import Card from "../../components/Card";
import { useAllProducts } from "../hooks/useAllProducts";

const Products: React.FC = () => {
  const [visibleProducts, setVisibleProducts] = useState<number>(6);
  const { data: products, isPending, error } = useAllProducts();
  console.log("checking products", products);

  // Handle loading more products
  const loadMore = () => {
    setVisibleProducts(products?.length || 0);
  };

  // Show error message if there's an error
  if (error) {
    return <p className="text-red-500 text-center">Error: {error.message}</p>;
  }

  return (
    <Container>
      <div className="flex my-10 justify-between items-center">
        <Heading title="Special Offers" />
        {products && visibleProducts < products.length && (
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
          : products?.slice(0, visibleProducts).map((item) => (
              <Card
                key={item.id}
                id={item?.id?.toString()}
                name={item.name}
                image={item?.images}
                location={item.location}
                description={item.description}
                soldBy={item.soldBy}
                currentPrice={item.currentPrice}
                markPrice={item.markPrice}
              />
            ))}
      </div>
    </Container>
  );
};

export default Products;
