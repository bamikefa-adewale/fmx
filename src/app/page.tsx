import CategoriesList from "@/components/category/CategoriesList";
import Products from "@/components/productsCompoents/products";

const Homepage = () => {
  return (
    <div className="mb-10">
      <div className="hidden lg:block ">
        <CategoriesList />
      </div>
      <Products />
      {/* <Recommended /> */}
    </div>
  );
};

export default Homepage;
