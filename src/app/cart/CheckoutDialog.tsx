import React from "react";
import { Button } from "../../components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

export const CheckoutDialog = () => {
  const logo =
    "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739827777/Frame_6671_kwtzwl.png";
  return (
    <>
      {" "}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
            Proceed to Checkout
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full  ">
          <div className="items-center text-center justify-center flex">
            <Image src={logo} width={100} height={100} alt="logo" />
          </div>

          <div className="space-y-5 text-center">
            <p className="text-2xl font-semibold text-[#010400]">
              Order Successfully placed
            </p>
            <p className="text-lg font-normal text-[#453E4F]">
              Thank you for choosing FMX!
            </p>
          </div>
          <div className="flex  justify-between gap-1">
            <p className="text-[#2C9805] text-lg font-semibold">
              Continue Shopping
            </p>
            <Button
              type="submit"
              className="bg-[#2C9805] text-lg font-semibold px-10 text-white"
            >
              Check Order
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
