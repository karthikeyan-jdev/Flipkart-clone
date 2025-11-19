import React, { useState } from "react";
import useFetchApi from "../hooks/useFetchApi";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import { IoIosArrowDown } from "react-icons/io";
import { innerProductCategorys } from "../constant/data";

const CategoryDetails = () => {
  const { data, error, loading } = useFetchApi(
    "https://fakestoreapi.com/products"
  );

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="flex gap-2 p-2">
      {/* side filter */}
      <div className="w-[40%] lg:w-[25%] h-[75vh] bg-white hidden md:block">
        {innerProductCategorys.map((list) => {
          return (
            <div className="flex items-center gap-1 p-5">
              <h5 className="font-[550]">{list.title}</h5>
              <IoIosArrowDown />
            </div>
          );
        })}
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
