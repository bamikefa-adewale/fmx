import CategoriesList from "@/components/category/CategoriesList";
import MobileCategoryList from "@/components/category/MobileCategoryList";
import Products from "@/components/productsCompoents/products";
// import Recommended from "@/components/recomended/Recommended";

const Homepage = () => {
  return (
    <div className="mb-10">
      <div className="hidden lg:block ">
        <CategoriesList />
      </div>
      <div className="block lg:hidden mt-20">
        <MobileCategoryList />
      </div>{" "}
      <Products />
      {/* <Recommended /> */}
    </div>
  );
};

export default Homepage;
