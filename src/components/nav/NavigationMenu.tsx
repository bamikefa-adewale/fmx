"use client";

import Link from "next/link";
import {
  MessageSquareText,
  ShoppingBag,
  ShoppingCart,
  Bell,
  User,
} from "lucide-react";
import { useCart } from "../../app/contexts/hook/useCart";
import { useClerk, SignInButton, UserButton } from "@clerk/nextjs";

const NavigationMenu = () => {
  const { totalItems, user } = useCart();
  const { openSignIn } = useClerk();

  return (
    <div className="w-full">
      <ul className="flex flex-wrap gap-6 md:flex md:gap-20 justify-between lg:flex-row sm:flex-col sm:items-center">
        <li className="py-2">
          <Link
            href="/messages"
            className="flex items-center text-lg font-[400] dark:text-white gap-2"
          >
            <MessageSquareText className="w-[24px] h-[24px]" /> My Messages
          </Link>
        </li>
        <li className="py-2">
          <Link
            href="/orders"
            className="flex items-center text-lg font-[400] dark:text-white gap-2"
          >
            <ShoppingBag className="w-[24px] h-[24px]" /> My Orders
          </Link>
        </li>
        <li className="py-2">
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
        <li className="py-2">
          <Link
            href="/notifications"
            className="flex items-center text-lg font-[400] dark:text-white gap-2"
          >
            <Bell className="w-[24px] h-[24px]" />
          </Link>
        </li>
        <li className="py-2">
          {/* Clerk Auth */}
          {user ? (
            <UserButton />
          ) : (
            <SignInButton>
              <button
                onClick={() => openSignIn()}
                type="button"
                className="flex items-center cursor-pointer text-lg font-[400] dark:text-white gap-2"
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
