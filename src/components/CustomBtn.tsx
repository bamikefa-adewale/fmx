import React from "react";

type CustomBtnProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Accept event parameter
  isDarkMode?: boolean;
  className?: string;
};

const CustomBtn: React.FC<CustomBtnProps> = ({
  label,
  onClick,
  isDarkMode = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`mt-4 py-3 px-4 border h-[48px] rounded-lg w-full transition-all duration-300
        ${
          isDarkMode
            ? "text-[#4ADE80] border-[#4ADE80] hover:bg-[#4ADE80] hover:text-black"
            : "text-[#35AC0B] border-[#35AC0B] hover:bg-[#35AC0B] hover:text-white"
        } 
        ${className} `}
    >
      {label}
    </button>
  );
};

export default CustomBtn;
