import CategoriesList from "./category/CategoriesList";
import Hero from "./hero/Hero";

const Homepage = () => {
  return (
    <div className="my-10">
      <CategoriesList />
      <Hero />
    </div>
  );
};

export default Homepage;
