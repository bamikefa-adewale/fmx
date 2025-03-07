"use client";
import { useOrders } from "@/app/hooks/useOrders";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

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

const OrdersComponent = () => {
  const { data: orders, isLoading, error } = useOrders();

//   if (isLoading) return <Skeleton className="w-full h-40" />;
  if (error) return <p className="text-red-500">Error loading orders.</p>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Your Orders</h2>
      {orders?.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {orders?.map((order: Order) => (
            <Card key={order.id} className="p-4 border rounded-lg shadow-md">
              <CardHeader>
                <CardTitle>Order ID: {order.id.slice(0, 8)}...</CardTitle>
                <p className="text-sm text-gray-500">
                  Status: <span className="font-medium">{order.status}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Placed on: {new Date(order.created_at).toLocaleDateString()}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items?.map((item:Item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-500">
                          ${item.currentPrice} x {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No orders found.</p>
      )}
    </div>
  );
};

export default OrdersComponent;
