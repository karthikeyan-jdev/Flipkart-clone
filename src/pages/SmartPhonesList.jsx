import React from "react";
import SmartPhonesCard from "../components/SmartPhonesCard";

const SmartPhonesList = ({ headline, smartphones, routerpath }) => {
  return (
    <div className="bg-white mb-2">
      <h1 className="text-[20px] xl:text-[26px] font-semibold p-[16px] overflow-hidden">
        {headline}
      </h1>
      <div className="md:flex md:overflow-x-auto scrollbar-hide py-1 ">
        {smartphones?.map((product) => {
          return <SmartPhonesCard item={product} routerpath={routerpath} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default SmartPhonesList;
