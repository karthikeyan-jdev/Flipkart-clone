import React from "react";
import ProductBanners from "../components/ProductBanners";
import Ad from "../components/Ad";
import { Outlet } from "react-router-dom";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <section>
      <div className=" flex gap-1 pb-[10px]">
        <div className="w-full xl:w-[80%] md:my-[auto]  md:items-center ">
          <ProductList headline={"Best deal on smartphones"} />
        </div>

        <div className="w-[20%] hidden xl:flex items-center justify-center">
          <Ad />
        </div>
      </div>

      <ProductBanners />
      <Outlet />
    </section>
  );
};

export default Products;
