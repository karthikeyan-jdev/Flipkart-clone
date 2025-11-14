import { ChevronRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const SmartPhones = ({ item }) => {
  const navigate = useNavigate();

  if (!item) return null;

  const handleClick = () => {
    navigate(`/details/${item.id}`);
  };

  return (
    <div
      className="group md:min-w-[160px] lg:min-w-[230px] flex-shrink-0"
      onClick={handleClick}
    >
      <div className="!py-[12px] !mx-[30px] lg:mx-[0px!important] flex items-center md:flex-col">
        <div>
          <img
            src={item?.image || "/placeholder.png"}
            alt={item?.title || "Product image"}
            className="h-[48px] md:h-[90px] lg:h-[132px] object-contain transition-transform lg:group-hover:scale-105"
          />
        </div>
        <div className="w-full !px-5 md:text-center xl:mb-[50px!important] md:mt-[12px!important]">
          <h1 className="font-[500] md:font-[400] text-[13px] md:text-[13px] truncate">
            {item?.title?.split("-")[0] || "No title"}
          </h1>
          <h1 className="text-gray-500 text-[13px] md:text-black md:font-semibold">
            {item?.price || "No price info"}
          </h1>
        </div>
        <div className="!p-[10px] md:hidden">
          <ChevronRight size={20} className="text-gray-500" />
        </div>
      </div>
      <div className="bg-gray-300 !mx-[8px] h-[1px] md:hidden"></div>
    </div>
  );
};

export default SmartPhones;
