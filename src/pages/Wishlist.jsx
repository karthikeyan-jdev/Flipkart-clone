import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useFavorite } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";
import emptyWishlist from "../assets/img/emptyWishlist.png";

const Wishlist = () => {
  const { favorites } = useFavorite();
  const navigate = useNavigate();

  return (
    <div>
      <section className="flex gap-5  sm:p-5">
        {/* side filter */}
        <div className="space-y-2 w-[40%] lg:w-[25%] h-fit hidden md:block">
          <div className="h-15 bg-white">profile</div>
          <div className="h-55 bg-white"> ditails</div>
        </div>
        {/* main contant */}
        <div className="w-full h-[100vh] bg-white ">
          <h5 className="font-semibold text-[18px] p-5 pb-3 lg:text-xl lg:p-7 lg:pb-5">
            My Wishlist ({favorites.length})
          </h5>
          {favorites.length == 0 ? (
            <div className=" flex flex-col justify-center items-center gap-3 h-[60vh] bg-white">
              <div className="">
                <img
                  src={emptyWishlist}
                  alt="your cart is empty "
                  className=""
                />
              </div>
              <h1 className="font-bold text-xl"> Empty Wishlist</h1>
              <h3 className="text-[14px]">
                {" "}
                You have no items in your wishlist. Start adding!
              </h3>
              <button
                className="text-[12px] bg-primary text-white py-2 px-3.5 lg:py-2.5 lg:px-5 rounded-sm"
                onClick={() => {
                  navigate("/categorylist");
                }}
              >
                keep shoping
              </button>{" "}
            </div>
          ) : (
            <div className="bg-white">
              {favorites.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
