"use client";         
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton component
import Link from "next/link";
import SelectedCard from "@/components/SelectedCard";
import CustomBtn from "@/components/CustomBtn";
// import { useRouter } from "next/router";

type CardProps = {
  id: number;
  name: string;
  image: string;
  soldBy: string;
  location: string;
  description: string;
  currentPrice: number;
  markPrice: number;
  isLoading?: boolean; // Add loading prop
};

const Card: React.FC<CardProps> = ({
  id,
  name,
  image,
  location,
  description,
  soldBy,
  currentPrice,
  markPrice,
  isLoading = false, // Default to false
}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <Link
      href={`/hero/${id}`}
      className={`rounded-xl w-[270px] border h-[480px] transition-colors duration-300 ${
        isDarkMode
          ? "bg-[#1A1A1A] border-gray-700 text-white"
          : "bg-[#FCFFFC] border-gray-300 text-black"
      }`}
    >
      {isLoading ? (
        // Show skeleton loader when loading
        <div className="flex flex-col space-y-3 p-4">
          <Skeleton className="h-[132px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-[30%]" />
            <Skeleton className="h-4 w-[40%]" />
          </div>
          <Skeleton className="h-4 w-[80%]" />
          <Skeleton className="h-6 w-[50%]" />
          <Skeleton className="h-6 w-[40%]" />
          <div className="space-y-2">
            <Skeleton className="h-[48px] w-full rounded-lg" />
            <Skeleton className="h-[48px] w-full rounded-lg" />
          </div>
          <Skeleton className="h-4 w-[70%] mt-3" />
        </div>
      ) : (
        // Show actual card content when not loading
        <>
          <Image
            src={image.trim()}
            width={132}
            height={216}
            alt={name}
            className="w-full h-[132px] object-cover rounded-lg"
          />
          <div className="p-4">
            <p
              className={`text-sm font-normal my-2 leading-[13.5px] ${
                isDarkMode ? "text-gray-400" : "text-[#818B80]"
              }`}
            >
              {name}
            </p>
            <h3 className="font-normal text-xl leading-[30px] my-3">
              <span className="flex gap-5"> {location}</span>
              {description}
            </h3>

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
            />

            {/* Sold By */}
            <p className="text-sm mt-3">
              Sold by <span className="text-gray-400">{soldBy}</span>
            </p>
          </div>
        </>
      )}
    </Link>
  );
};

export default Card;
