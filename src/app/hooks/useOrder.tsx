import { useQuery } from "@tanstack/react-query";
import { getOrderById } from "../service/getOrder";

export const useOrder = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["order", id],
    queryFn: () => {
      if (!id) return null;
      return getOrderById(id);
    },
  });
  return { data, isLoading, error };
};
