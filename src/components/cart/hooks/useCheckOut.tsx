import { CartItem } from "@/app/contexts/CartContext";
import { useCart } from "@/app/contexts/hook/useCart";
import axiosInstance from "@/lib/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

const useCheckOut = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = (open: boolean) => {
    return setOpen(open);
  };
  const { carts, clearCart } = useCart();
  const { isPending, mutate } = useMutation({
    mutationFn: async (payload: { items: CartItem[] }) => {
      const { data } = await axiosInstance.post("orders", payload);
      return data;
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data?.message);
        toggle(true);
        clearCart();
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleCheckout = () => {
    mutate({
      items: carts,
    });
  };
  return {
    handleCheckout,
    isPending,
    isOpen,
    toggle,
  };
};

export default useCheckOut;
