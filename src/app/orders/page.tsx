import OrderNavigation from "@/components/orders/OrderNavigation";
import OrdersComponent from "@/components/orders/OrdersComponent";
import Container from "@/components/ui/Container";
import React from "react";

const page = () => {
  return (
    <Container>
      <div className="my-20">
        <OrderNavigation />
        <div className=" ">
          {" "}
          <OrdersComponent />
        </div>
      </div>
    </Container>
  );
};

export default page;
