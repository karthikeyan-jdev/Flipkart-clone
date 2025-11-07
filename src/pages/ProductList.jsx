import React from "react";
import { smartphones } from "../constant/data";
import SmartPhones from "../components/SmartPhones";

const ProductList = ({ headline }) => {
  return (
    <div className="bg-white">
      <h1 className="text-[20px] xl:text-[26px] font-semibold p-[16px]">
        {headline}
      </h1>
      <div className="md:flex md:overflow-x-auto scrollbar-hide py-1 ">
        {smartphones.map((product) => {
          return <SmartPhones product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
