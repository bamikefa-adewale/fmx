import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";

const SelectedCard = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div>
      {" "}
      <Select>
        <SelectTrigger
          className={`w-full mt-2 py-3 px-4 border h-[48px] rounded-lg transition-colors duration-300 ${
            isDarkMode
              ? "bg-[#2A2A2A] border-gray-600 text-white"
              : "border-gray-300 text-black"
          }`}
        >
          <SelectValue placeholder="Payment Options" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Choose Payment Option</SelectLabel>
            <SelectItem value="credit-card">Credit Card</SelectItem>
            <SelectItem value="paypal">PayPal</SelectItem>
            <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectedCard;
