import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const EmptyCart = () => {
  const image =
    "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739803028/solar_cart-5-broken_f8tkck.png";

  return (
    <div className="flex flex-col items-center text-center ">
      <div className="flex justify-center">
        <Image src={image} alt="empty cart" width={200} height={200} />
      </div>
      <div className="text-2xl my-5 font-medium text-[#010400]">
        Your cart is eager to be filled!
      </div>

      <Button className="text-white font-normal text-lg w-full md:w-[30%] bg-[#2C9805] py-5 hover:bg-opacity-80">
        Let’s start shopping!
      </Button>
    </div>
  );
};
