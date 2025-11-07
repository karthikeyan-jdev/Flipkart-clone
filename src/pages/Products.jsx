import React from "react";
import ProductBanners from "../components/ProductBanners";
import Ad from "../components/Ad";
import { Outlet } from "react-router-dom";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <section>
      <div className="pb-[10px] xl:flex xl:gap-3 ">
        <div className="w-full xl:w-[80%] md:my-[auto]  md:items-center">
          <ProductList headline={"Best deal on smartphones"} />
        </div>
        <div className=" hidden xl:w-full xl:block">
          <Ad />
        </div>
      </div>

      <ProductBanners />
      <Outlet />
    </section>
  );
};

export default Products;
