import toast from "react-hot-toast";
export type Product = {
  id: string;
  name: string;
  images: string[];
  soldBy: string;
  location: string;
  description: string;
  currentPrice: number;
  markPrice: number;
  category_id: string;
};
interface ProductResponse {
  message: string;
  status: boolean;
  data: Product;
}
export const getSingleProducts = async (
  id: string
): Promise<ProductResponse | null> => {
  if (!id) return null;
  const res = await fetch(`/api/products/${id}`);
  const data = (await res.json()) as ProductResponse;
  if (!data.status) {
    toast.error(data.message || "Category not found");
    return null;
  }

  return data as ProductResponse;
};
