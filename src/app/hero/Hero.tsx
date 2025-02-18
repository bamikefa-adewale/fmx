"use client";

import Container from "@/components/ui/Container";
import React, { useState, useEffect } from "react";
import Heading from "../../components/header/Heading";
import { fruits } from "../../components/constanct/Constant";
import Card from "../../components/constanct/Card";

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

const Hero: React.FC = () => {
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
      <div className="flex my-10 justify-between items-center">
        <Heading title="Special Offers" />
        {visibleFruits < fruits.length && !loading && (
          <p
            className="cursor-pointer font-medium text-[#35AC0B] dark:text-white text-xl leading-[26px]"
            onClick={loadMore}
          >
            See All
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 ">
        {loading
          ? Array.from({ length: visibleFruits }).map((_, index) => (
              <Card
                key={index}
                isLoading={true}
                name=""
                image=""
                location=""
                id={0}
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
                  key={item.id}
                  id={item.id}
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

export default Hero;
