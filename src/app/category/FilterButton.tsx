import { ListFilter } from "lucide-react";

export const FilterButton = () => {
  // const { theme } = useTheme(); // Get the current theme

  return (
    <div className="flex items-center gap-1 px-4 py-2 w-[99px]  transition-colors border-2 rounded-[8px] ">
      <ListFilter size={24} />
      <button
        className="text-black text-lg font-[400] "
        // className={`${theme === "dark" ? "text-black" : "text-black "}`}
        aria-label="Filter categories"
      >
        Filter
      </button>
    </div>
  );
};
