"use client";
import Container from "@/components/ui/Container";
import React from "react";
import { useCart } from "../contexts/hook/useCart";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CircleMinus, CirclePlus, CopyX } from "lucide-react";
import { EmptyCart } from "./EmptyCart";
import toast from "react-hot-toast";
import { CheckoutDialog } from "@/app/cart/CheckoutDialog";
import OrderSummary from "./OrderSummary";

const CartPage = () => {
  const {
    totalItems,
    carts,
    addToCart,
    removeFromCart,
    clearCart,
    decreaseQuantity,
  } = useCart();

  const totalCartPrice = carts.reduce(
    (acc, item) => acc + item.quantity * item.currentPrice,
    0
  );
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Cart Items */}
        <div className="my-20 flex-1 rounded-2xl lg:p-10 bg-[#FCFFFC]">
          {carts?.length === 0 ? (
            <div>
              <EmptyCart />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between px-3">
                <h1 className="lg:text-2xl font-normal">
                  Shopping Cart ({totalItems} items)
                </h1>
                <Button
                  onClick={clearCart}
                  className="mt-5 px-4 hover:bg-[#FCFFFC] hover:text-black"
                >
                  Clear Cart
                </Button>
              </div>
              {carts?.map((item) => (
                <div
                  key={item.id}
                  className="border flex flex-col md:flex-row gap-5 rounded-lg bg-[#FCFFFC] shadow-lg p-4"
                >
                  <div className="flex justify-center md:block">
                    <Image
                      src={item?.images[0]}
                      alt={item?.name}
                      className="w-full lg:w-40 h-40 object-cover rounded-lg"
                      width={60}
                      height={60}
                    />
                  </div>
                  {/* table for cart */}
                  <div className="w-full overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="border border-gray-300 px-4 py-2 text-left">
                            Name
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left">
                            Quantity
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left">
                            Price
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            {item.name}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 flex items-center">
                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className="px-3 py-1 bg-gray-300 hover:bg-gray-100 rounded"
                            >
                              <CircleMinus color="green" />
                            </button>
                            <span className="px-4">{item.quantity}</span>
                            <button
                              onClick={() => addToCart(item)}
                              className="px-3 py-1 bg-gray-300 hover:bg-gray-100 rounded"
                            >
                              <CirclePlus color="green" />
                            </button>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            ${item.currentPrice}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <Button
                              onClick={() => {
                                removeFromCart(item.id);
                                toast.error(`${item.name} Removed From Cart`);
                              }}
                              className="bg-red-500 hover:bg-gray-500 text-white px-3 py-1 flex gap-2 rounded"
                            >
                              Remove <CopyX color="white" size={25} />
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-gray-400 font-medium leading-5 py-3 ">
                      <span className="text-base text-black ml-10 capitalize">
                        Total:
                      </span>{" "}
                      ${item?.quantity * item?.currentPrice}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary Section */}
        {carts.length > 0 && (
          <div className=" lg:my-20 w-full md:w-1/3 rounded-2xl p-5 lg:p-10  bg-[#FCFFFC]">
            {carts.length > 0 && (
              <OrderSummary
                totalCartPrice={totalCartPrice}
                totalItems={totalItems}
              />
            )}
            {/* Checkout dialog */}
            <CheckoutDialog />
          </div>
        )}
      </div>
    </Container>
  );
};

export default CartPage;
