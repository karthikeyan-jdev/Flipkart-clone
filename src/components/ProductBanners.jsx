import React from "react";
import { productbBannerGrid } from "../constant/data";

const ProductBanners = () => {
  return (
    <section className="bg-white ">
      <div className="grid grid-cols-3 gap-x-2">
        {productbBannerGrid.map((banner) => {
          return (
            <div className="" key={banner.id}>
              <img src={banner.imgUrl} alt="banner" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductBanners;
