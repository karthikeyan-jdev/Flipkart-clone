import React from "react";

const ProductBanners = ({banner}) => {
  return (
    <section className="bg-white ">
      <div className="grid grid-cols-3 gap-x-2 mb-2">
        {banner.map((banner) => {
          return (
            <div className="" key={banner.id}>
              <img src={banner.imgUrl} alt="banner"  />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductBanners;
