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
  const savedCart = localStorage.getItem("carts");
  const [carts, setCarts] = useState<CartItem[] | []>(
    savedCart ? JSON.parse(savedCart) : []
  );

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (carts) {
      localStorage.setItem("cart", JSON.stringify(carts));
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
  return (
    <CartContext
      value={{
        carts,
        addToCart,
        totalItems: 20,
      }}
    >
      {children}
    </CartContext>
  );
};

export default CartContext;
