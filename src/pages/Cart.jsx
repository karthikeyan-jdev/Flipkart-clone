import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CardContext";
import CartProductCard from "./CartProductCard";

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const hasItems = cart.length > 0;

  return (
    <div>
      <section className="flex flex-col items-center md:flex-row md:items-start md:justify-center  gap-5 p-2.5 md:p-3">
        {/* main contant */}
        <div className="flex flex-col  gap-2.5 w-min-[380px] md:min-w-[400px] lg:min-w-[600px] xl:min-w-[800px]  ">
          {hasItems && (
            <div className="flex justify-between items-center bg-white ">
              {" "}
              <h5 className=" font-semibold text-[12px] p-4 lg:text-[16px] lg:p-5 ">
                From Saved Addresses
              </h5>
              <h6 className="text-[12px] font-semibold text-gray-600 border-[1px] border-gray-400 flex items-center p-2 mr-4">
                Enter Delivery Pincode
              </h6>
            </div>
          )}

          {hasItems ? (
            <div className="">
              <div className="bg-white">
                {cart.map((item) => (
                  <CartProductCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ) : (
            <div className=" flex flex-col justify-center items-center gap-3 h-[50%]">
              <p>your cart is empty</p>
              <button
                className="text-[12px] bg-amber-300 text-white py-2 px-3.5 lg:py-2.5 lg:px-5 rounded-sm"
                onClick={() => {
                  navigate("/categorylist");
                }}
              >
                keep shoping
              </button>{" "}
            </div>
          )}
        </div>
        {/* price details */}
        <div className="bg-white">
          {hasItems && (
            <h1 className="w-full md:min-w-[300px] lg:min-w-[400px]">
              PRICE DETAILS
            </h1>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
