import CategoriesList from "@/components/category/CategoriesList";
import MobileCategoryList from "@/components/category/MobileCategoryList";
import Products from "@/components/productsComponents/products";
import { Suspense } from "react";
// import Recommended from "@/components/recomended/Recommended";

const Homepage = () => {
  return (
    <div className="mb-10">
      <CategoriesList />
      <div className="block lg:hidden mt-20">
        <MobileCategoryList />
      </div>{" "}
      <Suspense fallback={<p>Loading...</p>}>
        <Products />
      </Suspense>
      {/* <Recommended /> */}
    </div>
  );
};

export default Homepage;
