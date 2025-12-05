import React from "react";
import Banner from "../components/Banner";
import Products from "./Products";
import Category from "../components/Category";
import ProductGrid from "../components/ProductGrid";
import useFetchApi from "../hooks/useFetchApi";
import Loading from "../components/Loading";

const Home = () => {
  const { data, error, loading } = useFetchApi(
    "https://fakestoreapi.com/products"
  );
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="section-con ">
      <Category />
      <Banner />
      <Products />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-4">
            <ProductGrid
              headline={"Discounts For You"}
              data={data}
              start={0}
              end={4}
            />
            <ProductGrid
              headline={"Keep Yourself Warm"}
              data={data}
              start={4}
              end={8}
            />
            <div className="mx-auto w-[80%] xl:w-auto lg:hidden xl:block">
              <img
                src="https://cdn0.desidime.com/cdn-cgi/image/fit=contain,f=auto,onerror=redirect,w=1200,h=675,q=90/attachments/photos/1142095/original/Screenshot2024-10-16152627.png"
                alt=""
                className="h-80 w-full sm:h-full sm:p-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-4">
            <ProductGrid
              headline={"Discounts For You"}
              data={data}
              start={8}
              end={12}
            />
            <ProductGrid
              headline={"Discounts For You"}
              data={data}
              start={12}
              end={16}
            />
            <div className="lg:hidden xl:block">
              <ProductGrid
                headline={"Keep Yourself Warm"}
                data={data}
                start={16}
                end={20}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
