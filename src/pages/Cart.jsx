import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CardContext";

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <div>
      <section className="flex flex-col items-center md:flex-row md:items-start md:justify-center  gap-5 p-2.5 md:p-3">
        {/* main contant */}
        <div className="w-min-[380px] md:min-w-[400px] lg:min-w-[600px] xl:min-w-[800px] bg-white h-[28vh]">
          <h5 className="font-semibold text-[18px] p-5 pb-3 lg:text-xl lg:p-7 lg:pb-5">
            My Cart ({cart.length})
          </h5>
          {cart.length == 0 ? (
            <div className="flex flex-col justify-center items-center gap-3 h-[50%]">
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
          ) : (
            cart.map((item) => <ProductCard key={item.id} item={item} />)
          )}
        </div>
        {/* price details */}
        {/* <div className="bg-white">
          {cart.length == 0 ? (
            ""
          ) : (
            <h1 className="w-full md:min-w-[300px] lg:min-w-[400px]">
              PRICE DETAILS
            </h1>
          )}{" "}
        </div> */}
        <div className="bg-white w-min-[380px] md:min-w-[160px] lg:min-w-[300px] xl:min-w-[400px]">
          <h1 className="">PRICE DETAILS</h1>
        </div>
      </section>
    </div>
  );
};

export default Cart;
