import React from "react";
import { productbBannerGrid } from "../constant/data";

const ProductBanners = () => {
  return (
    <section className="bg-white ">
      <div className="grid grid-cols-3 !px-2">
        {productbBannerGrid.map((banner) => {
          return (
            <div className="!pr-2" key={banner.id}>
              <img src={banner.imgUrl} alt="banner" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductBanners;
