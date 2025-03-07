"use client";

import { useCart } from "@/app/contexts/hook/useCart";
import { useProduct } from "@/app/hooks/useProduct";
import { tags } from "@/components/constanct/Constant";
import CustomBtn from "@/components/CustomBtn";
import SelectedCard from "@/components/SelectedCard";
import Container from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { product, isPending, error } = useProduct();
  const [activeTags, setActiveTags] = useState<string>(tags[0].title);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const { addToCart } = useCart();

  const handleAddToCart = useCallback(() => {
    if (product) {
      addToCart({
        id: product.id,
        images: product.images,
        name: product.name,
        currentPrice: product.currentPrice,
        quantity: 1,
      });
      toast.success(`${product.name} added to cart!`);
    }
  }, [addToCart, product]);

  useEffect(() => {
    if (product?.images && product.images.length > 0) {
      setMainImage(product.images[0]);
    } else {
      setMainImage("");
    }
  }, [product]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <div className="bg-[#FCFFFC] my-10 rounded-2xl p-5 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Product Images */}
          <div className="w-full">
            <div className="flex flex-col md:flex-row gap-5">
              {/* Thumbnails */}
              <div className="flex md:grid md:gap-2 overflow-x-auto md:overflow-visible">
                {isPending
                  ? Array(3) // Adjust the number based on how many thumbnails you want to show
                      .fill(null)
                      .map((_, index) => (
                        <Skeleton
                          key={index}
                          className="w-full h-[80px] md:w-[155px] md:h-[146px] rounded-lg"
                        />
                      ))
                  : product?.images?.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={product.name}
                        width={155}
                        height={155}
                        onClick={() => setMainImage(image)}
                        className="w-full h-[80px] md:w-[155px] md:h-[146px] object-cover rounded-lg cursor-pointer border-2 hover:border-[#2C9805]"
                      />
                    ))}
              </div>
              {/* Main Image */}
              <div className="w-full">
                {isPending ? (
                  <Skeleton className="w-full h-[300px] md:h-[456px] rounded-lg" />
                ) : product ? (
                  <Image
                    src={mainImage || product.images[0]}
                    alt={product.name}
                    width={517}
                    height={456}
                    className="w-full h-[300px] md:h-[456px] object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-red-300">Product not found</div>
                )}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="border border-gray-300 rounded-lg p-5 md:p-8">
              {isPending ? (
                <>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-8 w-5/6 mb-4" />
                  <Skeleton className="h-6 w-1/2" />
                </>
              ) : product ? (
                <>
                  <p className="text-gray-300 text-sm font-normal my-2 md:my-5">
                    {product.name}
                  </p>
                  <p className="text-black text-xl md:text-2xl font-normal my-2 md:my-5">
                    {product.description} <span>{product.location}</span>
                  </p>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-20 my-2 md:my-4 text-lg md:text-2xl font-medium">
                    <span className="text-[#2C9805]">
                      Current Price: $ {product.currentPrice}
                    </span>
                    <h4 className="text-gray-400">
                      Market Price: $
                      <span className="line-through">
                        {" "}
                        {product.markPrice}{" "}
                      </span>
                    </h4>
                  </div>
                </>
              ) : (
                <div className="text-red-300">Product not found</div>
              )}
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <SelectedCard />
              <CustomBtn
                label="Add To Cart"
                onClick={() => {
                  handleAddToCart();
                }}
                disabled={isPending || !product}
              />
            </div>
            <div className="rounded-lg mt-4 py-5 flex gap-4 px-3 border border-gray-400">
              {isPending ? (
                <Skeleton className="h-6 w-1/2" />
              ) : product ? (
                <p> Sold by {product.soldBy}</p>
              ) : (
                <div className="text-red-300">Product not found</div>
              )}
            </div>
          </div>
        </div>

        {/* Tags Section */}
        <div className="border rounded-md border-gray-400 my-5">
          <div className="flex overflow-x-auto md:overflow-visible gap-5 bg-[#E6E8E6] p-2">
            {tags?.map((tag) => (
              <p
                key={tag.title}
                className={`cursor-pointer text-lg font-semibold p-3 md:p-5 pb-1 whitespace-nowrap ${
                  activeTags === tag.title
                    ? "border-b-2 border-[#2C9805] text-black"
                    : "text-[#818B80]"
                }`}
                onClick={() => setActiveTags(tag.title)}
              >
                {tag.title}
              </p>
            ))}
          </div>

          <div className="p-5">
            {isPending ? (
              <>
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </>
            ) : product ? (
              activeTags === tags[0].title ? (
                <p>{tags.find((tags) => tags.title === activeTags)?.content}</p>
              ) : (
                <ul className="list-disc pl-5">
                  {tags
                    .find((tag) => tag.title === activeTags)
                    ?.content?.split(", ")
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              )
            ) : (
              <div className="text-red-300">Product not found</div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
