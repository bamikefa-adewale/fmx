import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../service/getAllProducts";

export const useAllProducts = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  return { data, isPending, error };
};
