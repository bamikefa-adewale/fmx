import CategoriesList from "../components/category/CategoriesList";
import Hero from "./hero/Hero";
import Recommended from "../components/recommended/Recommended";

const Homepage = () => {
  return (
    <div className="mb-10">
      <div className="hidden lg:block ">
        {" "}
        <CategoriesList />
      </div>
      <Hero />
      <Recommended />
    </div>
  );
};

export default Homepage;
