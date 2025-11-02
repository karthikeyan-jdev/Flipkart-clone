import React from "react";
import Banner from "../components/Banner";
import Products from "./Products";
import Category from "../components/Category";

const Home = () => {
  return (
    <div>
      <Category />
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
