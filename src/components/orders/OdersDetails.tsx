"use client";
import { useParams } from "next/navigation";
import Container from "../ui/Container";
import Heading from "../header/Heading";
import OrderNavigation from "./OrderNavigation";
import Image from "next/image";

export const OrderDetails = () => {
  const { id } = useParams();
  const img =
    "https://res.cloudinary.com/dbrub0d6r/image/upload/v1741095574/farhad-ibrahimzade-Rhhwb3EWvfo-unsplash_1_dvp9jh.jpg";
  return (
    <div>
      <Container>
        <OrderNavigation />

        <div className="bg-[#FCFFFC] rounded-lg">
          <div className="flex gap-2 items-center p-4 border border-b-gray-400">
            <Heading title="Orders Details" className="text-2xl font-normal " />
            <p>orderId {id}</p>
          </div>

          <div className="px-4 md:px-10 py-3">
            <div className="overflow-x-auto">
              <div className="flex justify-between rounded-xl border border-[#E6E8E6] shadow p-3 ">
                <div className="flex gap-5">
                  <Image src={img} alt="logo" height={200} width={200} className="rounded-lg"/>
                  <div>
                    {" "}
                    <p>john adewale</p>
                    <h1>$82273</h1>
                  </div>
                </div>
                <div>
                  <p>heli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
