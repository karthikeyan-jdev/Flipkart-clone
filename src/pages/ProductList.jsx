import React from "react";
import { smartphones } from "../constant/data";
import SmartPhones from "../components/SmartPhones";

const ProductList = ({ headline }) => {
  return (
    <>
      <h1 className="text-[20px] xl:text-[26px] font-semibold p-[16px] bg-white">
        {headline}
      </h1>
      <div className="md:flex md:overflow-x-auto scrollbar-hide !py-3 bg-white">
        {smartphones.map((product) => {
          return <SmartPhones product={product} key={product.id} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
