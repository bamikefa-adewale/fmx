import Container from "@/components/ui/Container";
import React from "react";
import fruits from "../constanct/Constant";
import Card from "../constanct/Card";
import Heading from "../header/Heading";

const Hero = () => {
  return (
    <Container>
      <Heading title="Special Offers" />
      <div className="grid grid-cols-6 gap-10 h-[1126px]">
        {fruits.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            image={item.image}
            location={item.location}
            price={item.price}
          />
        ))}
      </div>
    </Container>
  );
};

export default Hero;
