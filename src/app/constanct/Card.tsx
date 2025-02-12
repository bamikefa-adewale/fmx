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
    <div className="bg-white p-4 rounded-2xl shadow-lg text-center">
     
      <Image
        src={image.trim()}
        width={100}
        height={40}
        alt={name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="text-xl font-semibold mt-2">{name}</h3>
      <p className="text-gray-600">{location}</p>
      <p className="text-green-600 font-bold">${price.toFixed(2)}</p>
    </div>
  );
};

export default Card;
