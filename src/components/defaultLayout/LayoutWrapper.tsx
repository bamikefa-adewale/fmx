"use client"; // Ensures we can use hooks

import { usePathname } from "next/navigation";
import Navbar from "../nav/Navbar";
import Footer from "../footer/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && (
        <header>
          <Navbar />
        </header>
      )}
      {!isAdminPage ? (
        <main className="flex-grow pt-20">{children}</main>
      ) : (
        children
      )}
      {!isAdminPage && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
}
