"use client";
import Container from "@/components/ui/Container";
import { useParams } from "next/navigation";
import React from "react";

const FrultsDetailsPage = () => {
  const params = useParams<{ tag: string; item: string }>();
  console.log(params);
  return (
    <Container>
      <div>welcome</div>
    </Container>
  );
};

export default FrultsDetailsPage;
