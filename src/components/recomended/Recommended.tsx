"use client";
import React from "react";
import Container from "../ui/Container";
import Heading from "../header/Heading";


const Recommended = () => {

 
  return (
    <Container>
      <div>
        <div className="flex my-10 justify-between items-center">
          {/* heading for each title */}
          <Heading title="Recommended For You" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
          <h1>hi</h1>
        </div>
      </div>
    </Container>
  );
};

export default Recommended;
