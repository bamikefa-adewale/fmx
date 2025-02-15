import CategoriesList from "./category/CategoriesList";
import Hero from "./hero/Hero";
import Recommended from "./recommended/Recommended";

const Homepage = () => {
  return (
    <div className="mb-10">
      <CategoriesList />
      <Hero />
      <Recommended />
    </div>
  );
};

export default Homepage;
