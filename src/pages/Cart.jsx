import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CardContext";
import CartProductCard from "./CartProductCard";

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const hasItems = cart.length > 0;

  return (
    <section className="">
      {hasItems ? (
        <div className="flex flex-col  gap-1 p-5">
          {/* adress box */}
          <div className="flex justify-between items-center bg-white ">
            <h5 className=" font-semibold text-[12px] p-4 lg:text-[16px] lg:p-5 ">
              From Saved Addresses
            </h5>
            <h6 className="text-[12px] font-semibold text-gray-600 border-[1px] border-gray-400 flex items-center p-2 mr-4">
              Enter Delivery Pincode
            </h6>
          </div>
          {/* cart */}
          <div className="flex justify-center flex-col items-center md:flex-row md:items-start  gap-3.5 ">
            {" "}
            <div className="bg-white max-w-[700px]">
              {cart.map((item) => (
                <CartProductCard key={item.id} item={item} />
              ))}
            </div>
            {/* price box */}
            <div className="flex flex-col gap-5 min-w-[300px] ">
              {/*price details */}
              <div className="bg-white p-5">
                <h1 className=" text-gray-400 ">PRICE DETAILS</h1>
                <div className="">
                  <div className="flex justify-between">
                    <h4>Price ({cart.length})</h4>
                    <p>$ 10000</p>
                  </div>
                  <div className="flex justify-between">
                    <h4>Discount </h4>
                    <p>-$1600</p>
                  </div>
                  <div className="flex justify-between">
                    <h4>Protect Promise Fee </h4>
                    <p>$ 298</p>
                  </div>
                  <div className="flex justify-between">
                    <h4>total Amount </h4>
                    <p>$ 90,000</p>
                  </div>
                  <h1>You Will Save $59,944 on this order</h1>
                </div>
              </div>
              {/* text */}
              <h1 className=" md:max-w-[340px] text-center line-clamp-2 text-gray-400">
                Safe and Secure Payments.Easy returns.100% Authentic products.
              </h1>
            </div>
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
    </section>
  );
};

export default Cart;
