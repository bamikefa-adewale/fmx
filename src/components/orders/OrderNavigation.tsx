"use client";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const OrderNavigation = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      <div className="my-10 flex items-center gap-2">
        <span
          onClick={handleClick}
          className="gap-1 capitalize cursor-pointer text-black text-[24px] leading-[24px] font-medium rounded-lg"
        >
          Home
        </span>
        <ChevronRight />{" "}
        <span className="text-[#818B80] text-sm font-normal">Orders</span>
      </div>
    </div>
  );
};

export default OrderNavigation;
