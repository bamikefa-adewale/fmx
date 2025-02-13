import React, { FC } from "react";
interface HeadingProps {
  title: string;
}
const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <div className="text-[32px] my-10 capitalize leading-[38px] text-[#010400]">
      {title}
    </div>
  );
};

export default Heading;
