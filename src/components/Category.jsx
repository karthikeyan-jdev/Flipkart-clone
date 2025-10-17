import React from "react";
import { productCategorys } from "../constant/data";

const Category = () => {
  return (
    <section className="!m-auto md:w-[98%] lg:w-[90%] xl:w-[98%]">
      <div className="w-full overflow-x-auto scrollbar-hide md:!py-[10px] ">
        <div className=" flex justify-center gap-2 xl:gap-6 !px-[10px] min-w-max bg-white !py-[24px] ">
          {productCategorys.map((product) => (
            <div className="min-w-[120px] flex-shrink-0" key={product.id}>
              <div className="flex justify-center">
                <img
                  src={product.imgUrl}
                  alt={product.title}
                  className="w-[64px] h-[64px] object-contain"
                />
              </div>
              <div className="w-[95%] flex justify-center">
                <h3 className="text-center text-[16px] !mt-1 font-semibold ">
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
