import React from "react";
import ProductBanners from "../components/ProductBanners";
import { smartphones } from "../constant/data";
import SmartPhones from "../components/SmartPhones";
import Ad from "../components/Ad";

const Products = () => {
  return (
    <section>
      <div className=" flex gap-1 !pb-[10px]">
        <div className="w-full xl:w-[80%] md:my-[auto!important]  md:items-center ">
          <h1 className="text-[20px] xl:text-[26px] font-semibold !p-[16px] bg-white">
            Best deal on smartphones
          </h1>
          <div className="md:flex md:overflow-x-auto scrollbar-hide !py-3 bg-white">
            {smartphones.map((product) => {
              return <SmartPhones product={product} key={product.id} />;
            })}
          </div>
        </div>
        <Ad />
      </div>
      <ProductBanners />
    </section>
  );
};

export default Products;
