import React, { FC } from "react";
interface HeadingProps {
  title: string;
}
const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <div className="text-[32px] my-4 capitalize leading-[38px] text-[#010400] dark:text-white">
      {title}
    </div>
  );
};

export default Heading;
