"use client";

import Container from "@/components/ui/Container";
import NavigationMenu from "./NavigationMenu";
import Image from "next/image";
import Link from "next/link";
import { SearchComponent } from "./SearchComponent";
import { ModeToggle } from "@/components/ModeToggle";
import { useState } from "react";
import { X } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme(); // Get the current theme
  const logoImage =
    "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739804221/logo2_3_qmauk8.png";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section className="fixed left-0 w-full bg-gray-100 dark:bg-black z-50 h-[76px]">
      <Container>
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src={logoImage}
              alt={"logo"}
              width={50}
              height={80}
              className="h-[36px] cursor-pointer w-[81.28px]"
            />
          </Link>

          {/* Search Bar */}
          <div className="hidden lg:block w-[25%]">
            <SearchComponent />
          </div>

          {/* Mobile Menu Toggle */}
          <button className="block lg:hidden" onClick={toggleMenu}>
            <X size={30} color={theme === "dark" ? "white" : "black"} />
          </button>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <NavigationMenu />
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-100 dark:bg-black p-4">
            <NavigationMenu />
            <ModeToggle />
          </div>
        )}
      </Container>
    </section>
  );
};

export default Navbar;
