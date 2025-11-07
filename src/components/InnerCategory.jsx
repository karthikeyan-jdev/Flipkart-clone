import React from "react";
import { innerProductCategorys } from "../constant/data";
import { useNavigate } from "react-router-dom";

const InnerCategory = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-auto scrollbar-hide bg-white  border border-gray-200 shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
      <div className="flex gap-3 justify-around xl:justify-center xl:gap-16  bg-white py-[10px]">
        {innerProductCategorys.map((product) => (
          <div
            className=" flex-shrink-0"
            key={product.id}
            onClick={() => navigate(`/categoryList`)}
          >
            <div className="">
              <h3 className="text-[12px] xl:text-[13px] font-bold min-w-max">
                {product.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InnerCategory;
