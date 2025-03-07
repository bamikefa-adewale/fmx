import axiosInstance from "@/lib/axiosInstance";
import toast from "react-hot-toast";

export const getAllOrders = async (params = {}) => {
  const { data } = await axiosInstance?.get("orders", { params });
  console.log(data);
  if (!data || !data.data) {
    toast.error(data?.message || "Failed to fetch orders");
    return [];
  }

  return data?.data;
};
