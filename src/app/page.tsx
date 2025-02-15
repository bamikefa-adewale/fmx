import CategoriesList from "./category/CategoriesList";
import Hero from "./hero/Hero";
import Recommended from "./recommended/Recommended";

const Homepage = () => {
  return (
    <div className="my-10">e
      <CategoriesList />
      <Hero />
      <Recommended />
    </div>
  );
};

export default Homepage;
