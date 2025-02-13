import Image from "next/image";
import React from "react";

type CardProps = {
  name: string;
  image: string;
  location: string;
  price: number;
};

const Card: React.FC<CardProps> = ({ name, image, location, price }) => {
  return (
    <div className="bg-[#FCFFFC] rounded-xl w-[270px] border h-[524px] text-center">
      <Image
        src={image.trim()}
        width={132}
        height={216}
        alt={name}
        className="w-full h-[132px] object-cover rounded-lg"
      />
      <h3 className="text-xl font-semibold mt-2">{name}</h3>
      <p className="text-gray-600">{location}</p>
      <p className="text-green-600 font-bold">${price.toFixed(2)}</p>
    </div>
  );
};

export default Card;
