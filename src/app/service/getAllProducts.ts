import toast from "react-hot-toast";

export type Product = {
  images: string[];
  id: string;
  name: string;
  soldBy: string;
  location: string;
  description: string;
  currentPrice: number;
  markPrice: number;
  user_id: string;
  category_Id: string;
};
export const getAllProducts = async (search = ""): Promise<Product[]> => {
  const res = await fetch(`/api/products?search=${search}`);
  const data = await res.json();

  if (!data || !data?.data) {
    toast.error(data.message || "Failed to fetch products");
    return [];
  }
  return data?.data;
};
