import OrdersComponent from "@/components/orders/OrdersComponent";
import Container from "@/components/ui/Container";
import React from "react";

const page = () => {
  return (
    <Container>
      <div className="my-20">
        {" "}
        <OrdersComponent />
      </div>
    </Container>
  );
};

export default page;
