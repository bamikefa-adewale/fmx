import { Bell, MessageSquareText, ShoppingBag, ShoppingCart } from "lucide-react";

export const navLinks = [
  {
    href: "/message",
    label: "My Messages",
    icon: <MessageSquareText className="w-[24px] h-[24px]" />,
  },
  {
    href: "/orders",
    label: "My Orders",
    icon: <ShoppingBag className="w-[24px] h-[24px]" />,
  },
  {
    href: "/cart",
    label: "Cart",
    icon: <ShoppingCart className="w-[24px] h-[24px]" />,
    hasBadge: true,
  },
  {
    href: "/notifications",
    label: null,
    icon: <Bell className="w-[24px] h-[24px]" />,
  },
];
