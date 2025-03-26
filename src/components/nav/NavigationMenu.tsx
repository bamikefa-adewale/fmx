"use client";
import Link from "next/link";
import { useCart } from "../../app/contexts/hook/useCart";
import { useClerk, SignInButton, UserButton } from "@clerk/nextjs";
import { navLinks } from "../constanct/NavLink";

const NavigationMenu = () => {
  const { totalItems, user } = useCart();
  const { openSignIn } = useClerk();

  return (
    <div className="w-full">
      <ul className="flex flex-wrap gap-6 md:gap-20 justify-between lg:flex-row sm:flex-col sm:items-center">
        {navLinks.map((link, index) => (
          <li key={index} className="py-2">
            <Link
              href={link.href}
              className="flex items-center text-lg font-[400] dark:text-white gap-2 relative"
            >
              {link.icon} {link.label}
              {link.hasBadge && totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
        ))}
        {/* Clerk Auth */}
        <li className="py-2">
          {user ? (
            <UserButton />
          ) : (
            <SignInButton>
              <button
                onClick={() => openSignIn()}
                type="button"
                className="flex items-center cursor-pointer text-lg font-[400] dark:text-white gap-2"
              >
                <p>Login</p>
              </button>
            </SignInButton>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
