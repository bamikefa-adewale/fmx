"use client";
import { fruits } from "@/app/constanct/Constant";
import CustomBtn from "@/components/CustomBtn";
import SelectedCard from "@/components/SelectedCard";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Fruit = {
  id: number;
  name: string;
  image: string;
  description: string;
  location: string;
  soldBy: string;
  currentPrice: number;
  markPrice: number;
};

const FrultsDetailsPage = () => {
  const { id } = useParams<{ id: string }>(); // Get fruit ID from URL
  const [fruit, setFruit] = useState<Fruit | null>(null);

  useEffect(() => {
    if (id) {
      const foundFruit = fruits?.find((f) => f.id === Number(id));
      setFruit(foundFruit || null);
    }
  }, [id]);
  if (!fruit) return <p className="text-center mt-10">Fruit not found</p>;

  console.log(fruit);
  return (
    <Container>
      <div className="bg-[#FCFFFC] my-10 rounded-2xl p-8 ">
        <div className=" p-5">
          <div className=" grid grid-cols-2 gap-5">
            {/* first part */}
            <div className="w-full h-full">
              <div className="flex gap-5">
                <div className="grid ">
                  <Image
                    src={fruit?.image}
                    alt={fruit?.name}
                    width={155}
                    height={146}
                    className=" w-[155px] h-[146px] object-cover rounded-lg"
                  />
                  <Image
                    src={fruit?.image}
                    alt={fruit?.name}
                    width={155}
                    height={146}
                    className=" w-[155px] h-[146px] object-cover rounded-lg"
                  />
                  <Image
                    src={fruit?.image}
                    alt={fruit?.name}
                    width={155}
                    height={146}
                    className=" w-[155px] h-[146px] object-cover rounded-lg"
                  />
                </div>
                <div className="">
                  <Image
                    src={fruit?.image}
                    alt={fruit?.name}
                    width={517}
                    height={456}
                    className=" w-full h-[456px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            {/* second part */}
            <div className="">
              <div className=" border border-gray-300 rounded-lg">
                hh
              </div>
              <div>
                <SelectedCard />
                <CustomBtn label="Add To Cart" />
              </div>
            </div>
          </div>
        </div>
        <div>down</div>
      </div>
    </Container>
  );
};

export default FrultsDetailsPage;
