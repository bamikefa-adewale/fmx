import React, { ReactNode } from "react";
interface FooterListProps {
  children: ReactNode;
}
const FooterList: React.FC<FooterListProps> = ({ children }) => {
  return (
    // <div className="w-full text-[#C0C5BF] text-base leading-6 sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6  my-10 flex flex-col gap-5">
    <div className="text-gray-300 text-base leading-6 flex flex-col gap-4">
      {children}
    </div>
  );
};

export default FooterList;
