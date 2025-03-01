"use client";
// import { useCategory } from "@/app/hooks/useCategory";
import { useProductsByCategory } from "@/app/hooks/useProductsByCategory";
import CardSkeleton from "@/components/CardSkeleton";
import ProductsCard from "@/components/ProductsCard";
import Container from "@/components/ui/Container";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: products, isPending, error } = useProductsByCategory(id);
  const router = useRouter();
  //   const {
  //     data: category,
  //     isPending: isCategoryPending,
  //     error: categoryError,
  //   } = useCategory(id);

  if (error) {
    return <p className="text-red-500 text-center">Error: {error?.message}</p>;
  }
  return (
    <section className="my-20 ">
      <Container>
        <div className="my-10">
          <div
            onClick={() => router.back()}
            className="w-20 text-white my-3 cursor-pointer bg-black px-3 py-2 rounded-lg text-center"
          >
            Back
          </div>
          <h1 className="text-2xl font-bold mb-6">
            {" "}
            {/* {isCategoryPending ? "loading..." : `Products in ${category?.name}`} */} product in ...
          </h1>
          {!isPending && products?.length === 0 && (
            <p className="text-gray-500 text-center">No products found.</p>
          )}
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
