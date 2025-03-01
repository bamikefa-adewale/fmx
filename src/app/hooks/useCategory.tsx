import { useQuery } from "@tanstack/react-query";
import { getSingleCategory } from "../service/getSingleCategory";
import { useParams } from "next/navigation";

export const useCategory = () => {
  const { id } = useParams() as {
    id: string;
  };
  const { data, isPending, error } = useQuery({
    queryKey: ["category", id],
    queryFn: () => getSingleCategory(id),
  });

  return { category: data?.data, isPending, error };
};
