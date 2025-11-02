import React from "react";
import { smartphones } from "../constant/data";
import SmartPhones from "../components/SmartPhones";

const ProductList = () => {
  return (
    <>
      <div className="md:flex md:overflow-x-auto scrollbar-hide !py-3 bg-white">
        {smartphones.map((product) => {
          return <SmartPhones product={product} key={product.id} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
