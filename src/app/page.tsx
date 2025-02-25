import Recommended from "../components/recommended/Recommended";
import CategoriesList from "@/components/category/CategoriesList";
import Products from "./product/Products";

const Homepage = () => {
  return (
    <div className="mb-10">
      <div className="hidden lg:block ">
        <CategoriesList />
      </div>
      <Products />
      <Recommended />
    </div>
  );
};

export default Homepage;
