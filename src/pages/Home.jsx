import React from "react";
import Banner from "../components/Banner";
import Products from "./Products";
import Category from "../components/Category";
import ProductGridSection from "./ProductGridSection";
import ProductBanners from "../components/ProductBanners";
import { banners, productCategorys } from "../constant/data";

const Home = () => {
  return (
    <div className="section-con ">
      <Category />
      <Banner banners={banners} />
      <Products />
      <ProductBanners />
      <ProductGridSection />
    </div>
  );
};

export default Home;
