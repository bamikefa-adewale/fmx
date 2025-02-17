import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./nav/Navbar";
import Footer from "./footer/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CartProvider } from "./contexts/CartContext";
import { Toaster } from "react-hot-toast";

const PoppinSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "FMX E-commerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${PoppinSans.className} transition-colors duration-300 bg-gray-100 dark:bg-gray-900 text-black dark:text-white`}
      >
        <CartProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster position="top-right" />
          </ThemeProvider>
        </CartProvider>
      </body>
    </html>
  );
}
