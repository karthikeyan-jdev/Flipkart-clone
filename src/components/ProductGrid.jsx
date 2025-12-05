import React from "react";
import useFetchApi from "../hooks/useFetchApi";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const ProductGrid = ({ headline, data, start, end }) => {
  const navigate = useNavigate();

  return (
    <div className="my-2 sm:m-1 sm:p-3 bg-white">
      <h6 className="py-3 text-lg lg:text-xl font-semibold">{headline}</h6>

      <div className="grid grid-cols-4 lg:grid-cols-2 gap-2">
        {Array.isArray(data) &&
          data.slice(start, end).map((item) => {
            return (
              <div
                className="flex flex-col border-1 border-gray-300 p-1.5 sm:p-2 md:p-3 lg:p-4"
                onClick={() => {
                  navigate(`/details/api/${item.id}`);
                }}
              >
                <div className="flex justify-center flex-1 p-5 md:pb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="sm:h-[150px] w-full object-contain"
                  />
                </div>

                <p className="line-clamp-1 text-[14px]">{item.title}</p>
                <p className="text-green-700 font-semibold text-[14px]">
                  {" "}
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
