"use client";

import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import SelectedCard from "@/components/SelectedCard";
import CustomBtn from "@/components/CustomBtn";
import toast from "react-hot-toast";
import { useCart } from "@/app/contexts/hook/useCart";
import Image from "next/image";

type CardProps = {
  id: string;
  name: string;
  images: string[];
  soldBy: string;
  location: string;
  description: string;
  currentPrice: number;
  markPrice: number;
  isLoading?: boolean;
};

const ProductsCard: React.FC<CardProps> = ({
  id,
  name,
  images,
  location,
  description,
  soldBy,
  currentPrice,
  markPrice,
}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      images: images,
      name,
      currentPrice,
      quantity: 1,
    });
    toast.success(`${name} added to cart!`);
  };

  return (
    <Link
      href={`/product/${id}`}
      className={`rounded-xl lg:w-[270px] border w-full transition-colors duration-300 ${
        isDarkMode
          ? "bg-[#1A1A1A] border-gray-700 text-white"
          : "bg-[#FCFFFC] border-gray-300 text-black"
      }`}
    >
      <div>
        {images && images.length > 0 && (
          <Image
            src={images[0]}
            width={132}
            height={216}
            alt={name || "Product Image"}
            className="w-full h-[132px] object-cover rounded-lg"
          />
        )}

        <div className="p-4">
          <p
            className={`text-sm font-normal my-2 leading-[13.5px] ${
              isDarkMode ? "text-gray-400" : "text-[#818B80]"
            }`}
          >
            {name}
          </p>
          <h3 className="flex gap-5 font-normal text-xl leading-[30px] my-3">
            {location}
          </h3>

          <p className="text-sm font-normal text-black leading-[20px] my-3">
            {description}
          </p>
          <p className="text-xl font-medium leading-[19px] my-3">
            ${currentPrice}
          </p>
          <p className="text-xl font-medium line-through leading-[19px] my-3 text-gray-400">
            ${markPrice}
          </p>

          {/* Select Input */}
          <SelectedCard />

          {/* Add to Cart Button */}
          <CustomBtn
            label="Add To Cart"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleAddToCart();
            }}
          />

          {/* Sold By */}
          <p className="text-sm mt-3">
            Sold by <span className="text-gray-400">{soldBy}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductsCard;
