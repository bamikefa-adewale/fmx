"use client";

import Container from "@/components/ui/Container";
import Heading from "../../components/header/Heading";
import Card from "../ProductsCard";
import { useAllProducts } from "@/app/hooks/useAllProducts";
import CardSkeleton from "../CardSkeleton";

const Products = () => {
  const { data: products, isPending, error } = useAllProducts();

  // Show error message if there's an error
  if (error) {
    return <p className="text-red-500 text-center">Error: {error.message}</p>;
  }

  return (
    <>
      <Container>
        <div className="flex my-10 justify-between items-center">
          <Heading title="Special Offers" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
          {isPending
            ? Array.from({ length: 6 }).map((_, index) => (
                <CardSkeleton key={index} />
              )) // Show skeletons while loading
            : products?.map((item) => <Card key={item.id} {...item} />)}
        </div>
      </Container>
    </>
  );
};

export default Products;
