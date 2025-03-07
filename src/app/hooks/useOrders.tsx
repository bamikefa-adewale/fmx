import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../service/getAllOrders";

export const useOrders = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrders,
  });
  return { data, isLoading, error };
};
