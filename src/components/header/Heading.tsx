import React, { FC } from "react";
interface HeadingProps {
  title: string;
  className?: string;
}
const Heading: FC<HeadingProps> = ({ title, className = "" }) => {
  return (
    <div
      className={`text-[32px] my-4 capitalize leading-[38px] text-[#010400] dark:text-white ${className}`}
    >
      {title}
    </div>
  );
};

export default Heading;
