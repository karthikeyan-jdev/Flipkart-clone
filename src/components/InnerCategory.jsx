import React from "react";
import { innerProductCategorys } from "../constant/data";
import { useNavigate } from "react-router-dom";

const InnerCategory = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-auto scrollbar-hide ">
      <div className="flex justify-center gap-2 xl:gap-6 bg-white py-[10px] border-b-1 border-gray-300 shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
        {innerProductCategorys.map((product) => (
          <div
            className="min-w-[120px] flex-shrink-0"
            key={product.id}
            onClick={() => navigate(`/category/${product.id}`)}
          >
            <div className="flex justify-center ">
              <h3 className="text-center text-[13px] font-bold min-w-max">
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
