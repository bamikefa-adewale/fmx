"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const CheckoutDialog = ({
  open,
  toggle,
}: {
  open: boolean;
  toggle: (open: boolean) => void;
}) => {
  const router = useRouter();
  const handleOrderSubmit = () => {
    router.push("/orders");
  };
  const logo =
    "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739827777/Frame_6671_kwtzwl.png";

  return (
    <Dialog open={open} onOpenChange={(open) => toggle(open)}>
      {/* <DialogTrigger asChild>
        <Button
          className="mt-4 w-full bg-green-600 hover:bg-green-700"
          disabled={!isSignedIn || !userId}
        >
          Place Order Now
        </Button>
      </DialogTrigger> */}
      <DialogContent className="w-full">
        <DialogTitle className="sr-only">Order Confirmation</DialogTitle>
        <DialogDescription className="sr-only">
          Your order has been successfully placed.
        </DialogDescription>

        <div className="flex items-center justify-center text-center">
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

        <div className="flex justify-between gap-1">
          <Link href="/" className="text-[#2C9805] text-lg font-semibold">
            Continue Shopping
          </Link>
          <Button
            onClick={handleOrderSubmit}
            type="submit"
            className="bg-[#2C9805] text-lg font-semibold px-10 text-white"
          >
            Check Order
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
