import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useFavorite } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";
import emptyWishlist from "../assets/img/emptyWishlist.png";
import { useAuth } from "../context/AuthContext";
import Profile from "./Profile";

const Wishlist = () => {
  const { favorites } = useFavorite();
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <section className="flex justify-center sm:p-5">
        {/* side filter */}
        {user && (
          <div className="space-y-2  w-[30%] lg:w-[20%] h-fit hidden md:block">
            <Profile />
          </div>
        )}
        {/* main contant */}
        <div className="md:w-[70%] h-[100vh] bg-white ">
          <h5 className="font-semibold text-[18px] p-5 pb-3 lg:text-xl lg:p-7 lg:pb-5">
            My Wishlist ({favorites.length})
          </h5>
          {favorites.length == 0 ? (
            <div className=" flex flex-col justify-center items-center gap-3 h-[60vh] w-[90vw] md:w-auto bg-white">
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
