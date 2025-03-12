"use client";

import React from "react";
import Container from "../ui/Container";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useCategories } from "@/app/hooks/useCategories";
import { useRouter } from "next/navigation";
import { Skeleton } from "../ui/skeleton";

const MobileCategoryList = () => {
  const { data: categories, isPending, error } = useCategories();
  const router = useRouter();

  if (error) {
    return <p className="text-red-500 text-center">Error: {error.message}</p>;
  }

  if (!categories?.length && !isPending) {
    return <p className="text-red-500 text-center">No categories found.</p>;
  }

  return (
    <Container>
      <div className="block lg:hidden mt-20">
        <Select
          onValueChange={(value) => {
            if (value === "all") {
              router.push("/");
            } else {
              router.push(`/category/${value}`);
            }
          }}
        >
          <SelectTrigger className="w-full py-8 hover:border-green-300">
            {isPending ? (
              <Skeleton className=" h-full w-full " />
            ) : (
              <SelectValue placeholder="All Category" />
            )}
          </SelectTrigger>
          <SelectContent className="border-green-300 ">
            <SelectGroup>
              <SelectItem value="all">All Category</SelectItem>
              {categories?.map((category) => (
                <SelectItem key={category.id} value={category.id.toString()}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </Container>
  );
};

export default MobileCategoryList;
