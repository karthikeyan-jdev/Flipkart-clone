import React, { useState } from "react";
import useFetchApi from "../hooks/useFetchApi";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

const CategoryDetails = () => {
  const { data, error, loading } = useFetchApi(
    "https://fakestoreapi.com/products"
  );

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="flex gap-2 p-2">
      {/* side filter */}
      <div className="w-[40%] lg:w-[25%] h-[100vh] bg-white hidden md:block">
        side filter
      </div>
      {/* main contant */}
      <div className="w-full bg-white">
        {loading ? (
          <Loading />
        ) : (
          Array.isArray(data) &&
          data.map((item) => <ProductCard key={item.id} item={item} />)
        )}
      </div>
    </section>
  );
};

export default CategoryDetails;
