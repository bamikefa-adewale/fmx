import OrderNavigation from "@/components/orders/OrderNavigation";
import Orders from "@/components/orders/Orders";
import Container from "@/components/ui/Container";
import React from "react";

const page = () => {
  return (
    <Container>
      <div className="my-20">
        <OrderNavigation />
        <div className=" ">
          {" "}
          <Orders />
        </div>
      </div>
    </Container>
  );
};

export default page;
