import OrderNavigation from "@/components/orders/OrderNavigation";
import Orders from "@/components/orders/Orders";
import Container from "@/components/ui/Container";
import React from "react";

const page = () => {
  return (
    <Container>
      <OrderNavigation />
      <Orders />
    </Container>
  );
};

export default page;
