"use client";
import Container from "@/components/ui/Container";
import React from "react";
import { useCart } from "../contexts/hook/useCart";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CircleMinus, CirclePlus, CopyX } from "lucide-react";
import { EmptyCart } from "./EmptyCart";
import toast from "react-hot-toast";

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
      <div className="flex gap-6">
        {/* Cart Items */}
        <div className="my-20 flex-1 rounded-2xl p-10 bg-[#FCFFFC]">
          {carts?.length === 0 ? (
            <div>
              <EmptyCart />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between py-3">
                <h1 className="text-2xl font-normal">
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
                  className="border flex gap-5 justify-between rounded-lg bg-[#FCFFFC] shadow-lg"
                >
                  <div>
                    <Image
                      src={item?.image}
                      alt={item?.name}
                      className="w-40 h-40 object-cover rounded-lg"
                      width={60}
                      height={60}
                    />
                  </div>

                  <div className="">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="border-l border-gray-300 px-6 py-3 text-left">
                            Name
                          </th>
                          <th className="border-l border-gray-300 px-6 py-3 text-left">
                            Quantity
                          </th>
                          <th className="border-l border-gray-300 px-6 py-3 text-left">
                            Price
                          </th>
                          <th className="border-l border-gray-300 px-6 py-3 text-left">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-l border-gray-300 px-6 py-3">
                            {item.name}
                          </td>

                          <td className="border-l border-gray-300 px-6 py-3 flex items-center">
                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className="px-3 py-1 bg-gray-300 hover:bg-gray-100 rounded-r"
                            >
                              <CircleMinus color="green" />
                            </button>
                            <span className="px-4">{item.quantity}</span>
                            <button
                              onClick={() => addToCart(item)}
                              className="px-3 py-1 bg-gray-300 hover:bg-gray-100 rounded-r"
                            >
                              <CirclePlus color="green" />
                            </button>
                          </td>
                          <td className="border-l border-gray-300 px-6 py-3">
                            ${item.currentPrice}
                          </td>
                          <td className="border-l border-gray-300 px-6 py-3">
                            <Button
                              onClick={() => {
                                removeFromCart(item.id);
                                toast.error(`${item.name} Removed From Cart`);
                              }}
                              className="bg-red-500 hover:bg-gray-500 text-white px-3 py-1 flex gap-2 rounded"
                            >
                              Remove{" "}
                              <span>
                                <CopyX color="white" size={25} />
                              </span>
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
          <div className="my-20 flex-4 w-1/3 rounded-2xl p-10 bg-[#FCFFFC]">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <p className="mt-3 text-lg">
              Total Items: <span className="font-bold">{totalItems}</span>
            </p>
            <p className="mt-2 text-lg">
              Total Price:{" "}
              <span className="font-bold">${totalCartPrice.toFixed(2)}</span>
            </p>
            <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default CartPage;
