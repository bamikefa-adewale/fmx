import toast from "react-hot-toast";

export type Category = {
  id: number;
  name: string;
};

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch("/api/categories");
  const data = await res.json();

  if (!data || !data?.data) {
    toast.error(data.message || "Failed to fetch categories");
    return [];
  }
  return data?.data;
};
