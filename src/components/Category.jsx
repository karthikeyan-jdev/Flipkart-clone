import React from "react";
import { productCategorys } from "../constant/data";

const Category = () => {
  return (
    <section className="!pt-[55px] ">
      <div className="w-full overflow-x-auto scrollbar-hide md:!pt-[10px]">
        <div className="flex justify-center gap-2 xl:gap-6 !px-[10px] min-w-max bg-white !py-[16px] ">
          {productCategorys.map((product) => (
            <div className="min-w-[120px] flex-shrink-0" key={product.id}>
              <div className="flex justify-center">
                <img
                  src={product.imgUrl}
                  alt={product.title}
                  className="w-[64px] h-[64px] object-contain"
                />
              </div>
              <div className="flex justify-center ">
                <h3 className="text-center text-[14px] !mt-1 font-medium ">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
