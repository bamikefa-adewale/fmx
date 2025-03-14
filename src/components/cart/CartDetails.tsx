"use client";
import { CheckoutDialog } from "@/components/cart/CheckoutDialog";
import OrderSummary from "@/components/cart/OrderSummary";
import { useCart } from "@/app/contexts/hook/useCart";
import React from "react";
import Container from "../ui/Container";
import { EmptyCart } from "@/components/cart/EmptyCart";
import { Button } from "../ui/button";
import Image from "next/image";
import { CircleMinus, CirclePlus, CopyX } from "lucide-react";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/nextjs";
import useCheckOut from "./hooks/useCheckOut";

const CartDetails = () => {
  const { userId, isSignedIn } = useAuth();
  const {
    totalItems,
    carts,
    addToCart,
    removeFromCart,
    clearCart,
    decreaseQuantity,
  } = useCart();
  const { handleCheckout, isPending, toggle, isOpen } = useCheckOut();
  const totalCartPrice = carts?.reduce(
    (acc, item) => acc + item.quantity * item.currentPrice,
    0
  );
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-6 my-4">
        {/* Cart Items */}
        <div className="flex-1 rounded-2xl lg:p-10 bg-[#FCFFFC]">
          {carts?.length === 0 ? (
            <div>
              <EmptyCart />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-10 md:gap-3 px-3">
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
              {carts.length > 0 &&
                carts?.map((item) => (
                  <div
                    key={item.id}
                    className="border flex flex-col md:flex-row gap-5 rounded-lg bg-[#FCFFFC] shadow-lg p-4"
                  >
                    {item?.images?.length > 0 && (
                      <div className="flex justify-center md:block">
                        <Image
                          src={item?.images[0]}
                          alt={item?.name}
                          className="w-full lg:w-40 h-40 object-cover rounded-lg"
                          width={60}
                          height={60}
                        />
                      </div>
                    )}

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
        {carts?.length > 0 && (
          <div className="w-full md:w-1/3 rounded-2xl p-5 lg:p-10  bg-[#FCFFFC]">
            {carts?.length > 0 && (
              <OrderSummary
                totalCartPrice={totalCartPrice}
                totalItems={totalItems}
              />
            )}
            {/* Checkout dialog */}

            <Button
              className="mt-4 w-full bg-green-600 hover:bg-green-700"
              disabled={!isSignedIn || !userId || isPending}
              onClick={handleCheckout}
            >
              {isPending ? "Prcoessing Order..." : " Place Order Now"}
            </Button>
          </div>
        )}
      </div>
      <CheckoutDialog open={isOpen} toggle={toggle} />
    </Container>
  );
};

export default CartDetails;
