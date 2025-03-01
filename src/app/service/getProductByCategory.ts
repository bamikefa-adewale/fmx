import toast from "react-hot-toast";

export type Products = {
  id: string;
  name: string;
  images: string[];
  soldBy: string;
  location: string;
  description: string;
  currentPrice: number;
  markPrice: number;
};

export const getProductByCategory = async (id: string): Promise<Products[]> => {
  const res = await fetch(`/api/categories/${id}/product`);
  const data = await res.json();
  if (!data || !data?.data) {
    toast.error(data.message || "No product found");
    return [];
  }
  return data?.data;
};
