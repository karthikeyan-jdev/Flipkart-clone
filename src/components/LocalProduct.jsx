import React from "react";
import Ad from "./Ad";
import { smartphones } from "../constant/data";
import ProuctContainer from "./ProuctContainer";

const LocalProduct = () => {
  const ad =
    "https://rukminim2.flixcart.com/fk-p-flap/1060/1620/image/63933c2637792a7c.png?q=60";
  return (
    <div className="pb-[10px] xl:flex xl:gap-3 ">
      <div className="w-full xl:w-[80%] md:my-[auto]  md:items-center">
        <ProuctContainer
          headline={"Best deal on smartphones"}
          products={smartphones}
          routerpath={"local"}
        />
      </div>
      <div className=" hidden xl:w-full xl:block">
        <Ad adImage={ad} />
      </div>
    </div>
  );
};

export default LocalProduct;
