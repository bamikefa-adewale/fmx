import { useQuery } from "@tanstack/react-query";
import { getProductByCategory } from "../service/getProductByCategory";

export const useProductsByCategory = (categoryid: string) => {
  const { data, error, isPending } = useQuery({
    queryKey: ["product", categoryid],
    queryFn: () => getProductByCategory(categoryid),
    enabled: !!categoryid,
  });
  return { data, error, isPending };
};
