/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { createContext, useEffect, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  image: string;
  currentPrice: number;
  quantity: number;
};

type CartContextType = {
  carts: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalItems: number;
};

const CartContext = createContext<CartContextType>({
  carts: [],
  addToCart: (item: CartItem) => {},
  removeFromCart: (id: number) => {},
  clearCart: () => {},
  totalItems: 0,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [carts, setCarts] = useState<CartItem[]>([]);
  // const savedCart = localStorage.getItem("carts");
  // console.log("savedCart from useCart", savedCart);
  // const [carts, setCarts] = useState<CartItem[] | []>(
  //   savedCart ? JSON.parse(savedCart) : []
  // );

  // Load cart from localStorage after component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("carts");
    if (savedCart) {
      setCarts(JSON.parse(savedCart));
    }
  }, []); // Runs only once when the component mounts

  useEffect(() => {
    // to save my cart to localStorage whenever cart change(user interact with cartbutton)
    if (carts.length > 0) {
      localStorage.setItem("carts", JSON.stringify(carts));
    }
  }, [carts]);

  const addToCart = (item: CartItem) => {
    const existingItem = carts?.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCarts(
        carts.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCarts([...carts, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCarts(carts.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCarts([]);
  };

  const totalItems = carts.reduce((total, item) => total + item.quantity, 0);
  return (
    <CartContext
      value={{
        carts,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </CartContext>
  );
};

export default CartContext;
