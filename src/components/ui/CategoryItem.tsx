export const CategoryItem = ({
  name,
  isActive,
  onClick,
}: {
  name: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`flex items-center justify-center cursor-pointer transition-all ${
        isActive
          ? "h-[42px] rounded-[8px] border-b-[1px] border-[#2C9805] text-[#2C9805] pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[4px] bg-[#FCFFFC]"
          : "h-auto"
      }`}
      onClick={onClick}
    >
      <p className={`text-lg ${isActive ? "font-semibold" : "font-normal"}`}>
        {name}
      </p>
    </div>
  );
};
