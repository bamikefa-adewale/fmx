import Link from "next/link";
import {
  MessageSquareText,
  ShoppingBag,
  ShoppingCart,
  Bell,
  User,
} from "lucide-react";

const NavigationMenu = () => {
  return (
    <div className="h-[40px] w-[658px]">
      <ul className="flex gap-6 justify-between">
        <li>
          <Link
            href="/messages"
            className="flex items-center text-lg font-[400] text-black gap-2"
          >
            <MessageSquareText className="w-[24px] h-[24px]" /> My Messages
          </Link>
        </li>
        <li>
          <Link
            href="/orders"
            className="flex items-center text-lg font-[400] text-black gap-2"
          >
            <ShoppingBag className="w-[24px] h-[24px]" /> My Orders
          </Link>
        </li>
        <li>
          <Link
            href="/cart"
            className="flex items-center text-lg font-[400] text-black gap-2"
          >
            <ShoppingCart className="w-[24px] h-[24px]" /> Cart
          </Link>
        </li>
        <li>
          <Link
            href="/notifications"
            className="flex items-center text-lg font-[400] text-black gap-2"
          >
            <Bell className="w-[24px] h-[24px]" />
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className="flex items-center text-lg font-[400] text-black gap-2"
          >
            <User className="w-[24px] h-[24px]" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
