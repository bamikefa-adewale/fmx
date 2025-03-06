import React from "react";
type OrderSummaryProps = {
  totalItems: number;
  totalCartPrice: number;
};
const OrderSummary: React.FC<OrderSummaryProps> = ({
  totalItems,
  totalCartPrice,
}) => {
  return (
    <>
      <h2 className="text-xl font-semibold">Order Summary</h2>

      <p className="mt-3 text-lg">
        Total Items: <span className="font-bold">{totalItems}</span>
      </p>
      <p className="mt-2 text-lg">
        Total Price:{" "}
        <span className="font-bold">${totalCartPrice.toFixed(2)}</span>
      </p>
    </>
  );
};
export default OrderSummary;
