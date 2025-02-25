"use client"
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../service/getCategories";

export const useCategories = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  return { isPending, error, data };
};
