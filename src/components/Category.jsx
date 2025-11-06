import React, { useRef } from "react";
import { productCategorys } from "../constant/data";
import { useLocation, useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
 
  return (
      <div className="w-full overflow-x-auto scrollbar-hide md:pt-[10px]">
        <div className="flex justify-center gap-2 xl:gap-6 px-[10px] min-w-max bg-white py-[16px] ">
          {productCategorys.map((product) => (
            <div
              className="min-w-[120px] flex-shrink-0"
              key={product.id}
              onClick={() => navigate(`/category/${product.id}`)}
            >
              <div className="flex justify-center">
                <img
                  src={product.imgUrl}
                  alt={product.title}
                  className="imgRef w-[64px] h-[64px] object-contain"
                />
              </div>
              <div className="flex justify-center ">
                <h3 className="text-center text-[13px] mt-1 font-bold ">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Category;
