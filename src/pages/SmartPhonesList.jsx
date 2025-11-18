import React from "react";
import { smartphones } from "../constant/data";
import SmartPhonesCard from "../components/SmartPhonescard";

const SmartPhonesList = ({ headline }) => {
  return (
    <div className="bg-white">
      <h1 className="text-[20px] xl:text-[26px] font-semibold p-[16px] overflow-hidden">
        {headline}
      </h1>
      <div className="md:flex md:overflow-x-auto scrollbar-hide py-1 ">
        {smartphones.map((product) => {
          return <SmartPhonesCard item={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default SmartPhonesList;
