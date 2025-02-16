"use client";
import Container from "@/components/ui/Container";
import React, { useEffect } from "react";
import { useCart } from "../contexts/hook/useCart";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CartPage = () => {
  const { totalItems, carts, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    console.log("Cart Data:", carts); // Debugging
  }, [carts]);

  return (
    <Container>
      <div className="my-20">
        <h1>Cart ({totalItems} items)</h1>

        {carts.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {carts.map((item) => (
              <div key={item.id} className="border flex justify-between p-4 rounded-lg shadow-md">
                <div>
                  <Image
                    src={item?.image}
                    alt={item.name}
                    className="w-40 h-40 object-cover"
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <h2 className="font-bold">{item.name}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.currentPrice}</p>
                  <Button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        <Button onClick={clearCart} className="mt-5">
          Clear Cart
        </Button>
      </div>
    </Container>
  );
};

export default CartPage;
