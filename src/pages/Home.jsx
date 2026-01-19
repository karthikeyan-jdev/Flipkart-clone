import React from "react";
import Banner from "../components/Banner";
import Category from "../components/Category";
import ProductGridSection from "../components/ProductGridSection";
import ProductBanners from "../components/ProductBanners";
import { topBanners } from "../constant/data";
import { productCategorys } from "../constant/data";
import LocalProduct from "../components/LocalProduct";
import { banner1, banner2, banner3 } from "../constant/banners";
import ProductList from "../components/ProuctContainer";
import { dealsData } from "../constant/deals";

const Home = () => {
  return (
    <div className="section-con ">
      <Category productCategorys={productCategorys} />
      <Banner banners={topBanners} />
      <LocalProduct />
      <ProductBanners banner={banner1} />
      <ProductBanners banner={banner2} />
      <ProductList
        headline={"Appliances"}
        products={dealsData}
        routerpath={"deals"}
      />
      <ProductBanners banner={banner3} />
      <ProductGridSection />
    </div>
  );
};

export default Home;
