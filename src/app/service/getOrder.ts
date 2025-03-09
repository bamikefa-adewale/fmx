// src/lib/service/getOrderById.ts
import axiosInstance from "@/lib/axiosInstance";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const getOrderById = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`orders/${id}`);

    if (!data || !data.data) {
      toast.error(data?.message || "Failed to fetch order");
      return null; // Or throw an error if you prefer
    }

    return data.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data?.message || "Failed to fetch order");
    } else {
      toast.error("An unexpected error occurred");
    }
    return null; // Or throw the error
  }
};
