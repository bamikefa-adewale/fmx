import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../service/getAllProducts";
import { useSearchParams } from "next/navigation";

export const useAllProducts = () => {
  const searchParam = useSearchParams();
  const search = searchParam.get("search") || "";
  const { data, isPending, error } = useQuery({
    queryKey: ["products", search],
    queryFn: () => getAllProducts(search), // Pass search to function
  });
  return { data, isPending, error };
};
