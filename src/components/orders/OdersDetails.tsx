"use client";
import { useParams } from "next/navigation";
import Container from "../ui/Container";
import Heading from "../header/Heading";
import OrderNavigation from "./OrderNavigation";
import Image from "next/image";
import { useOrder } from "@/app/hooks/useOrder";
import dayjs from "dayjs";
import { Skeleton } from "../ui/skeleton";
import { OrderSkeleton } from "../OrderSkeleton";

interface OrderItem {
  id: string;
  name: string;
  currentPrice: number;
  quantity: number;
  images: string[];
}

interface Order {
  id: string;
  items: OrderItem[];
  status: string;
  updated_at: string;
}

export const OrderDetails = () => {
  const { id } = useParams();
  const {
    data: order,
    isPending,
    error,
  } = useOrder(id as string) as {
    data: Order | null;
    isPending: boolean;
    error: unknown;
  };

  return (
    <div>
      <Container>
        <OrderNavigation />

        <div className="bg-[#FCFFFC] rounded-lg">
          <div className="flex flex-wrap gap-4 items-center p-4 border border-b-gray-400">
            <Heading
              title="Order Details"
              className="text-lg md:text-2xl font-normal"
            />
            <p className="text-gray-600 text-sm md:text-base">ID: {id}</p>
          </div>

          <div className="px-4 md:px-6 py-3">
            <div className="overflow-x-auto">
              {isPending ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <OrderSkeleton key={index} />
                ))
              ) : error ? (
                <p className="text-center p-4 text-red-500">
                  Failed to fetch order
                </p>
              ) : !order || order.items.length === 0 ? (
                <p className="text-center p-4">No order found</p>
              ) : (
                order.items.map((item: OrderItem) => (
                  <div
                    key={item.id}
                    className="mb-4 p-3 md:p-4 border border-[#E6E8E6] rounded-xl shadow-md bg-white"
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-shrink-0">
                        {item?.images?.length > 0 ? (
                          <Image
                            src={item.images[0]}
                            alt={item.name || "Product image"}
                            width={160}
                            height={160}
                            className="w-24 h-24 md:w-40 md:h-40 rounded-lg object-cover"
                          />
                        ) : (
                          <Skeleton className="w-24 h-24 md:w-40 md:h-40 rounded-lg" />
                        )}
                      </div>

                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">
                          {item.name}
                        </p>
                        <h1 className="text-lg font-bold text-green-600">
                          ${item.currentPrice}
                        </h1>
                        <p className="text-sm text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                      </div>

                      <div className="text-sm text-gray-600">
                        <p>
                          <span className="font-medium mb-3">Sold by:</span> John
                        </p>
                        <p>
                          <span className="font-medium mt-2">Status:</span>{" "}
                          <span className="text-blue-500">{order.status}</span>
                        </p>
                        <p className="font-medium">
                          {dayjs(order.updated_at).format("DD MMM YYYY")}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
