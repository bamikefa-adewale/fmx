import { useQuery } from "@tanstack/react-query";

import { useParams } from "next/navigation";
import { getSingleProducts } from "../service/getSingleProducts";

export const useProduct = () => {
  const { id } = useParams() as {
    id: string;
  };
  const { data, isPending, error } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getSingleProducts(id),
  });
  return { product: data?.data, isPending, error };
};
