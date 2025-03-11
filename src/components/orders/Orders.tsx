"use client";
import { useOrders } from "@/app/hooks/useOrders";
import { useUser } from "@clerk/nextjs";
import dayjs from "dayjs";
import React from "react";
import Heading from "../header/Heading";
import OrderStatus from "./OrderStatus";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useRouter } from "next/navigation";
import SkeletonTableRow from "../SkeletonTableRow";

interface Item {
  id: string;
  name: string;
  currentPrice: number;
  quantity: number;
  images: string[];
}

interface Order {
  id: string;
  user_id: string;
  status: string;
  created_at: string;
  updated_at: string;
  items: Item[];
}

const Orders = () => {
  const { data: orders, isLoading, error } = useOrders();
  const { user } = useUser(); // Get logged-in user from Clerk
  const router = useRouter();

  // Ensure user is authenticated before filtering orders
  const userOrders =
    orders?.filter((order: Order) => order.user_id === user?.id) || [];

  const handleViewDetails = (orderId: string) => {
    router.push(`/orders/${orderId}`);
  };

  if (error)
    return (
      <p className="text-red-500 text-2xl justify-center text-center">
        Error loading orders.
      </p>
    );

  return (
    <div className="bg-[#FCFFFC] rounded-lg">
      <Heading title="Orders" className="text-2xl font-normal border-b p-5" />
      <div className="px-4 md:px-10">
        <OrderStatus />
        <div className="overflow-x-auto">
          <Table className="min-w-[600px] w-full">
            <TableCaption>A list of your recent orders.</TableCaption>
            <TableHeader>
              <TableRow className="text-sm md:text-lg font-semibold text-[#818B80]">
                <TableHead>Order Number</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Date Ordered</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading
                ? Array.from({ length: 5 }).map((_, index) => (
                    <SkeletonTableRow key={index} />
                  ))
                : userOrders.length > 0
                ? userOrders.map((order: Order) => {
                    const totalAmount = order.items.reduce(
                      (sum, item) => sum + item.currentPrice * item.quantity,
                      0
                    );
                    const totalQuantity = order.items.reduce(
                      (sum, item) => sum + item.quantity,
                      0
                    );

                    return (
                      <TableRow key={order.id} className="border-b">
                        <TableCell className="text-[14px] md:text-[16px] px-2 md:px-4 py-2 md:py-3">
                          {order.id.slice(0, 8)}...
                        </TableCell>
                        <TableCell className="px-2 md:px-4 py-2 md:py-3">
                          {totalQuantity} items
                        </TableCell>
                        <TableCell className="px-2 md:px-4 py-2 md:py-3">
                          {dayjs(order.created_at)
                            .format("D, MMM YY")
                            .toLowerCase()}
                        </TableCell>
                        <TableCell className="px-2 md:px-4 py-2 md:py-3 font-medium">
                          ${totalAmount?.toFixed(2)}
                        </TableCell>
                        <TableCell className="px-2 md:px-4 py-2 md:py-3">
                          <button
                            onClick={() => handleViewDetails(order.id)}
                            className="border border-[#35AC0B] text-[#35AC0B] px-2 py-1 rounded-md text-sm md:text-lg"
                          >
                            View Details
                          </button>
                        </TableCell>
                      </TableRow>
                    );
                  })
                : !isLoading && (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="text-center text-gray-500 py-4"
                      >
                        No orders found.
                      </TableCell>
                    </TableRow>
                  )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
