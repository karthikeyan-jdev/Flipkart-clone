import { Heart } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useFavorite } from "../context/WishlistContext";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const { isFavorite, toggleFavorite } = useFavorite();

  return (
    <div
      className="group flex gap-3 border-gray-200 rounded-md p-3
               shadow-sm hover:shadow-md transition-shadow duration-300 h-[200px] lg:h-[240px]"
      onClick={() => {
        navigate(`/details/${item.id}`);
      }}
    >
      {/* images + favorite */}
      <div className="relative min-w-[20%] h-[150px] lg:h-[200px] xl:h-[250px] pb-5">
        <img
          src={item.image}
          alt={item.title}
          className="w-[120px] xl:w-[200px] h-[116px] xl:h-[180px]  object-contain"
        />
        <button
          className="absolute top-1 right-2 bg-white rounded-full p-1 shadow-sm hover:scale-105 transition-transform"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(item);
          }}
        >
          <Heart
            className={` w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6.5 xl:h-6.5 ${
              isFavorite(item) ? "text-red-600 fill-red-600 " : "text-gray-300 "
            }`}
          />
        </button>
      </div>

      {/* descripction */}
      <div className="w-full flex lg:gap-1">
        <div className="w-full flex flex-col gap-1">
          <h5 className="line-clamp-2  font-[550] text-[14px] lg:text-[18px] group-hover:text-blue-500 transition-colors duration-300">
            {item.title}
          </h5>
          <p className="text-gray-500 text-[12px] lg:text-[14px] font-semibold">
            {" "}
            <span className="bg-green-700 text-white text-[10px] lg:text-[12px] px-[4px] pt-[2px] pb-0 mr-1">
              4.4 *
            </span>{" "}
            41,943 Ratings & 1,269 Reviews
          </p>
          <p className="line-clamp-5 text-[12px] mt-1">{item.description}</p>
        </div>
        <div className="w-[24%] lg:w-[35%]">
          <h1 className="font-semibold py-4">
            ₹
            {typeof item.price === "number" ? item.price : item.price ? item.price.split(" ")[1].split("*")[0].trim(): "—"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
