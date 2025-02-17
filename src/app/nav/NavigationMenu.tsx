"use client";
import Link from "next/link";
import {
  MessageSquareText,
  ShoppingBag,
  ShoppingCart,
  Bell,
  User,
} from "lucide-react";
import { useCart } from "../contexts/hook/useCart";
import { useClerk, SignInButton, UserButton } from "@clerk/nextjs";
import toast from "react-hot-toast";

const NavigationMenu = () => {
  const { totalItems, user } = useCart();

  const { openSignIn } = useClerk();
  console.log("openSignIn function:", openSignIn); // Debugging

  return (
    <div className="h-[40px] w-[658px]">
      <ul className="flex gap-6 justify-between">
        <li>
          <Link
            href="/messages"
            className="flex items-center text-lg font-[400] dark:text-white gap-2"
          >
            <MessageSquareText className="w-[24px] h-[24px]" /> My Messages
          </Link>
        </li>
        <li>
          <Link
            href="/orders"
            className="flex items-center text-lg font-[400] dark:text-white gap-2"
          >
            <ShoppingBag className="w-[24px] h-[24px]" /> My Orders
          </Link>
        </li>
        <li>
          <Link
            href="/cart"
            className="flex items-center text-lg font-[400] dark:text-white gap-2 relative"
          >
            <ShoppingCart className="w-[24px] h-[24px]" /> Cart
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                {totalItems}
              </span>
            )}
          </Link>
        </li>
        <li>
          <Link
            href="/notifications"
            className="flex items-center text-lg font-[400] dark:text-white gap-2"
          >
            <Bell className="w-[24px] h-[24px]" />
          </Link>
        </li>
        <li>
          {/* clerk auth  */}
          {user ? (
            <>
              <UserButton />
            </>
          ) : (
            <SignInButton>
              <button
                onClick={() => {
                  openSignIn();
                  toast.success("sigin open");
                }}
                type="button"
                className="flex items-center  cursor-pointer text-lg font-[400] dark:text-white gap-2"
              >
                <User size={24} />
              </button>
            </SignInButton>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
