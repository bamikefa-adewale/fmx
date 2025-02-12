import Container from "@/components/ui/Container";
import React from "react";
import fruits from "../constanct/Constant";
import Card from "../constanct/Card";

const Hero = () => {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-10">
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
