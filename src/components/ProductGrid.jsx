import { ChevronRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductGrid = ({ headline, data, start, end }) => {
  const navigate = useNavigate();

  return (
    <div className=" my-1 sm:my-1.5 sm:m-1 p-2.5 sm:p-3 bg-white">
      <div className="flex justify-between items-center">
        <h6 className="py-3 text-lg lg:text-xl font-semibold">{headline}</h6>
        <button
          className="bg-primary hover:opacity-95 text-amber-50 rounded-2xl h-fit p-1 m-1"
          onClick={() => {
            navigate("/categorylist");
          }}
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-2 gap-2">
        {Array.isArray(data) &&
          data.slice(start, end).map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col border-1 border-gray-300 p-1.5 sm:p-2 md:p-3 lg:p-4"
                onClick={() => {
                  navigate(`/details/api/${item.id}`);
                }}
              >
                <div className="flex justify-center flex-1 p-5 md:pb-3">
                  <img
                    src={item.image}
                    alt={item.title.split(" ")[0]}
                    className="sm:h-[150px] w-full object-contain"
                  />
                </div>

                <p className="line-clamp-1 text-[14px]">{item.title}</p>
                <p className="text-green-700 font-semibold text-[14px]">
                  ₹{Math.floor(Number(item.price))}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductGrid;
