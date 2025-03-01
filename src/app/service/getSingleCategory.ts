import toast from "react-hot-toast";
export type Category = {
  id: string;
  name: string;
};
interface CategoryResponse {
  message: string;
  status: boolean;
  data: Category;
}
export const getSingleCategory = async (
  id: string
): Promise<CategoryResponse | null> => {
  if (!id) return null;
  const res = await fetch(`/api/categories/${id}`); // Corrected URL
  const data = (await res.json()) as CategoryResponse;
  if (!data.status) {
    toast.error(data.message || "Category not found");
    return null;
  }

  return data as CategoryResponse;
};
