import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useFavorite } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { favorites } = useFavorite();
  const navigate = useNavigate();

  return (
    <div>
      <section className="flex gap-5 p-5">
        {/* side filter */}
        <div className="w-[40%] lg:w-[25%] h-[100vh] hidden md:block">
          <div className="flex flex-col gap- ">
            <div className="h-15 bg-white">profile</div>
            <div className="h-55 bg-white"> ditails</div>
          </div>
        </div>
        {/* main contant */}
        <div className="w-full bg-white h-screen">
          <h5 className="font-semibold text-[18px] p-5 pb-3 lg:text-xl lg:p-7 lg:pb-5">My Wishlist ({favorites.length})</h5>
          {favorites.length == 0 ? (
            <div className="flex flex-col justify-center items-center h-[30vh] gap-2">
              <p>no favorite yet</p>
              <button
                className="text-[18px] bg-amber-300 text-white py-[10px] px-5 rounded-sm"
                onClick={() => {
                  navigate("/categorylist");
                }}
              >
                keep shoping
              </button>{" "}
            </div>
          ) : (
            
            favorites.map((item) => <ProductCard key={item.id} item={item} />)
          )}
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
