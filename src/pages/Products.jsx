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
          <h1 className="text-[20px] xl:text-[26px] font-semibold p-[16px] bg-white">
            Best deal on smartphones
          </h1>
          <ProductList />
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
