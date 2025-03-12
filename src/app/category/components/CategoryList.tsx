"use client";
import { useCategory } from "@/app/hooks/useCategory";
import { useProductsByCategory } from "@/app/hooks/useProductsByCategory";
import CardSkeleton from "@/components/CardSkeleton";
import ProductsCard from "@/components/ProductsCard";
import Container from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const CategoryList = () => {
  const { data: products, isPending, error } = useProductsByCategory();
  const router = useRouter();

  const {
    category,
    isPending: isCategoryPending,
    error: categoryError,
  } = useCategory();

  if (error || categoryError) {
    return <p className="text-red-500 text-center">Error: {error?.message}</p>;
  }
  return (
    <>
      <Container>
        <div className="my-10">
          <div className="my-10 flex items-center gap-2">
            {isCategoryPending ? (
              <Skeleton className="h-6 w-16 rounded-lg" />
            ) : (
              <span
                onClick={() => router.back()}
                className="gap-1 capitalize cursor-pointer text-black text-[24px] leading-[24px] font-medium rounded-lg"
              >
                Home
              </span>
            )}
            <ChevronRight />
            {isCategoryPending ? (
              <Skeleton className="h-6 w-24 rounded-lg" />
            ) : (
              <span className="text-[#818B80] text-[24px] font-normal">
                {category?.name}
              </span>
            )}
          </div>

          <h1 className="text-2xl font-bold mb-6 capitalize">
            {" "}
            {isCategoryPending ? (
              <>
                <Skeleton className="h-[32px] w-64 rounded-lg" />
              </>
            ) : (
              <p className="text-3xl font-normal text-black">
                {category?.name}
              </p>
            )}{" "}
          </h1>
          {!isPending && products?.length === 0 && (
            <p className="text-gray-500 text-center">No products found.</p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
            {isPending
              ? Array?.from({ length: 6 })?.map((_, index) => (
                  <CardSkeleton key={index} />
                ))
              : products?.map((product) => (
                  <ProductsCard key={product.id} {...product} />
                ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default CategoryList;
