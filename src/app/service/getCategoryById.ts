// import toast from "react-hot-toast";
// export type Category = {
//   id: string;
//   name: string;
// };
// export const getCategoryById = async (id: string): Promise<Category | null> => {
//   const res = await fetch(`/api/categoryId/${id}`);
//   const data = await res.json();

//   if (!data || !data.success) {
//     toast.error(data.message || "Category not found");
//     return null;
//   }

//   return data?.data;
// };
