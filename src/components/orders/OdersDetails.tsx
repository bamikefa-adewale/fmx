"use client";
import { useParams } from "next/navigation";
import Container from "../ui/Container";
import Heading from "../header/Heading";
import OrderNavigation from "./OrderNavigation";
import Image from "next/image";
import { useOrder } from "@/app/hooks/useOrder";
import dayjs from "dayjs";

export const OrderDetails = () => {
  const { id } = useParams();
  const { data: order, isLoading, error } = useOrder(id as string);

  console.log(order);

  if (isLoading) {
    return <p className="text-center p-4">Loading order details...</p>;
  }

  if (error) {
    return (
      <p className="text-center p-4 text-red-500">Failed to fetch order</p>
    );
  }

  if (!order || order.items?.length === 0) {
    return <p className="text-center p-4">No order found</p>;
  }

  return (
    <div>
      <Container>
        <OrderNavigation />

        <div className="bg-[#FCFFFC] rounded-lg">
          <div className="flex gap-2 items-center p-4 border border-b-gray-400">
            <Heading title="Order Details" className="text-2xl font-normal" />
            <p>Order ID: {id}</p>
          </div>

          <div className="px-4 md:px-10 py-3">
            <div className="overflow-x-auto">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="mb-4 p-4 border border-[#E6E8E6] rounded-xl shadow"
                >
                  <div className="flex justify-between">
                    <div className="flex gap-5">
                      {item?.images?.length > 0 && (
                        <Image
                          src={item.images[0]} // First image
                          alt={item.name || "Product image"}
                          height={200}
                          width={200}
                          className="rounded-lg"
                        />
                      )}
                      <div>
                        <p className="mb-2 font-semibold">{item.name}</p>
                        <h1 className="mb-2 text-lg font-bold">
                          ${item.currentPrice}
                        </h1>
                        <h1 className="mb-2">Quantity: {item.quantity}</h1>
                      </div>
                    </div>

                    <div>
                      <p className="mb-2">
                        Sold by: <span className="font-medium">John</span>
                      </p>
                      <p className="mb-2">
                        Status:{" "}
                        <span className="text-blue-500">{order.status}</span>
                      </p>
                      <p className="mb-2">
                        Updated At:{" "}
                        {dayjs(order.updated_at).format("DD MMM YYYY")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
