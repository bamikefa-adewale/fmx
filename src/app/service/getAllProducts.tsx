import toast from "react-hot-toast";

export type Product = {
  images(images: any): unknown;
  id: number;
  name: string;
  soldBy: string;
  location: string;
  description: string;
  currentPrice: number;
  markPrice: number;
  user_id: string;
  category_Id: string;
};
export const getAllProducts = async (): Promise<Product[]> => {
  const res = await fetch("/api/products");
  const data = await res.json();

  if (!data || !data?.data) {
    toast.error(data.message || "Failed to fetch products");
    return [];
  }
  return data?.data;
};
