import { useQuery } from "@tanstack/react-query";
import { getProductByCategory } from "../service/getProductByCategory";
import { useParams } from "next/navigation";

export const useProductsByCategory = () => {
  const { id } = useParams() as {
    id: string;
  };
  const { data, error, isPending } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductByCategory(id),
  });
  return { data, error, isPending };
};
