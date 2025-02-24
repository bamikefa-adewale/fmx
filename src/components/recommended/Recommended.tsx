"use client";
import React, { useEffect, useState } from "react";
import { fruits } from "../constanct/Constant";
import Container from "@/components/ui/Container";
import Heading from "../header/Heading";
import Card from "../Card";

type Fruit = {
  id: number;
  name: string;
  image: string;
  location: string;
  description: string;
  soldBy: string;
  currentPrice: number;
  markPrice: number;
};

const Recommended = () => {
  const [visibleFruits, setVisibleFruits] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const loadMore = () => {
    setLoading(true); // Show skeleton while loading more
    setTimeout(() => {
      setVisibleFruits(fruits.length);
      setLoading(false);
    }, 1500); // Simulate load delay
  };

  return (
    <Container>
      <div className="flex justify-between items-center">
        <Heading title="Recommended For You" />
        {visibleFruits < fruits.length && !loading && (
          <p
            className="cursor-pointer font-medium text-[#35AC0B] dark:text-white text-xl leading-[26px]"
            onClick={loadMore}
          >
            See All
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
        {loading
          ? Array.from({ length: visibleFruits }).map((_, index) => (
              <Card
                id={0}
                key={index}
                isLoading={true}
                name=""
                image=""
                location=""
                description=""
                soldBy=""
                currentPrice={0}
                markPrice={0}
              />
            ))
          : fruits
              .slice(0, visibleFruits)
              .map((item: Fruit) => (
                <Card
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  location={item.location}
                  description={item.description}
                  soldBy={item.soldBy}
                  currentPrice={item.currentPrice}
                  markPrice={item.markPrice}
                />
              ))}
      </div>
    </Container>
  );
};

export default Recommended;
