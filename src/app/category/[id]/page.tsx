"use client";
import { useProductsByCategory } from "@/app/hooks/useProductsByCategory";
import CardSkeleton from "@/components/CardSkeleton";
import ProductsCard from "@/components/ProductsCard";
import Container from "@/components/ui/Container";
import { useParams } from "next/navigation";
import React from "react";

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: products, isPending, error } = useProductsByCategory(id);
  console.log(products);

  if (error) {
    return <p className="text-red-500 text-center">Error: {error.message}</p>;
  }
  return (
    <section className="my-20 ">
      <Container>
        <div className="my-10">
          <h1 className="text-2xl font-bold mb-6">Products in category</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
            {isPending
              ? Array.from({ length: 6 }).map((_, index) => (
                  <CardSkeleton key={index} />
                ))
              : products?.map((product) => (
                  <ProductsCard key={product.id} {...product} />
                ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CategoryPage;
