import React from "react";
import useFetchApi from "../hooks/useFetchApi";
import ProductGrid from "../components/ProductGrid";
import Loading from "../components/Loading";

const ProductGridSection = () => {
  const { data, error, loading } = useFetchApi(
    "https://fakestoreapi.com/products"
  );
  if (error) return <p className="text-red-500">{error}</p>;

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-3.5">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-2">
        <ProductGrid
          headline={"Best Gadgets & Appliances"}
          data={data}
          start={8}
          end={12}
        />
        <ProductGrid
          headline={"Shop Your Favories"}
          data={data}
          start={12}
          end={16}
        />
        <div className="lg:hidden xl:block">
          <ProductGrid
            headline={"Best Value Deals on Fashion"}
            data={data}
            start={16}
            end={20}
          />
        </div>
      </div>
    </>
  );
};

export default ProductGridSection;
