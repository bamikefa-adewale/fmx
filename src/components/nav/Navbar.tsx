"use client";

import Container from "@/components/ui/Container";
import NavigationMenu from "./NavigationMenu";
import Image from "next/image";
import Link from "next/link";
import { SearchComponent } from "./SearchComponent";
import { ModeToggle } from "@/components/ModeToggle";
import { useState } from "react";
import { X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle state for mobile menu
  const logoImage =
    "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739804221/logo2_3_qmauk8.png";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle menu visibility

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
          <div className="hidden lg:block ">
            <SearchComponent />
          </div>

          {/* Mobile Menu Toggle */}
          <button className="block lg:hidden text-white" onClick={toggleMenu}>
            <span className="material-icons">
              <X size={30} color="black" />
            </span>{" "}
            {/* Hamburger Icon */}
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

// import Container from "@/components/ui/Container";
// import NavigationMenu from "./NavigationMenu";
// import Image from "next/image";
// import Link from "next/link";
// import { SearchComponent } from "./SearchComponent";
// import { ModeToggle } from "@/components/ModeToggle";

// const Navbar = () => {
//   const logoImage =
//     "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739804221/logo2_3_qmauk8.png";
//   return (
//     <section className="fixed  left-0 w-full bg-gray-100 dark:bg-black z-50  h-[76px]">
//       <Container>
//         <div className="flex items-center justify-between py-5 ">
//           <Link href={"/"}>
//             <Image
//               src={logoImage}
//               alt={"logo"}
//               width={50}
//               height={80}
//               className="h-[36px] cursor-pointer w-[81.28px]"
//             />
//           </Link>
//           <SearchComponent />
//           <NavigationMenu />
//           <ModeToggle />
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Navbar;
