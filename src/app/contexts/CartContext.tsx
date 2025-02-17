/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { UserResource } from "@clerk/types"; // Import Clerk's User type

type CartItem = {
  id: number;
  name: string;
  image: string;
  currentPrice: number;
  quantity: number;
};

type CartContextType = {
  user: UserResource | null | undefined; // Add user here

  carts: CartItem[];

  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  totalItems: number;
};

const CartContext = createContext<CartContextType>({
  user: null,
  carts: [],
  addToCart: (item: CartItem) => {},
  removeFromCart: (id: number) => {},
  decreaseQuantity: (id: number) => {},
  clearCart: () => {},
  totalItems: 0,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [carts, setCarts] = useState<CartItem[] | []>([]);
  const totalItems = carts.reduce((total, item) => total + item?.quantity, 0);

  // Load cart from localStorage after component mounts
  useEffect(() => {
    const savedCart = localStorage?.getItem("carts");
    if (savedCart) {
      setCarts(JSON.parse(savedCart));
    }
  }, []); // Runs only once when the component mounts

  useEffect(() => {
    // to save my cart to localStorage whenever cart change(user interact with cartbutton)
    if (carts.length > 0) {
      localStorage?.setItem("carts", JSON.stringify(carts));
    }
  }, [carts]);

  const addToCart = (item: CartItem) => {
    const existingItem = carts?.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCarts(
        carts?.map((cartItem) =>
          cartItem?.id === item.id
            ? { ...cartItem, quantity: cartItem?.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCarts([...carts, { ...item, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (id: number) => {
    setCarts(
      carts?.map((item) =>
        item?.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };
  const router = useRouter();
  const removeFromCart = (id: number) => {
    const newCarts = carts?.filter((item) => item.id !== id);
    setCarts(newCarts);
    return localStorage.setItem("carts", JSON.stringify(newCarts));
  };

  const clearCart = () => {
    setCarts([]);
    return localStorage.removeItem("carts");
  };
  const { user } = useUser();
  return (
    <CartContext
      value={{
        user,
        carts,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext>
  );
};

export default CartContext;
