"use client";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../service/getAllProducts";
import { useSearch } from "./useSearch";

export const useAllProducts = () => {
  // Get the current search term from the useSearch hook
  const { search } = useSearch();

  // Set up the query using react-query
  const { data, isPending, error } = useQuery({
    queryKey: ["products", search],
    queryFn: () => getAllProducts(search),
    enabled: search !== undefined,
  });

  return { data, isPending, error };
};
