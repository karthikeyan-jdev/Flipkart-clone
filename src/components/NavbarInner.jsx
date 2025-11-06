import { ShoppingCart } from "lucide-react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Category from "./Category";
import InnerCategory from "./InnerCategory";

const NavbarInner = () => {
  const navigate = useNavigate();
  return (
    <div className=" fixed top-0 left-0 w-full z-40 transition-shadow duration-300">
      {" "}
      <div className="flex justify-around xl:justify-center items-center gap-5 xl:gap-10 h-15 bg-blue-500 ">
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            width="140"
            height="50"
            title="Flipkart"
          ></img>
        </div>
        <div className="md:min-w-[36%] lg:min-w-[38%] xl:min-w-[40%] h-[34px]">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full h-full bg-gray-100
               pl-[18px] pr-2 text-[15px] text-gray-800
               placeholder:text-[13px] placeholder:text-gray-400 placeholder:font-semibold outline-none"
          />
        </div>
        <div onClick={() => navigate("/login")}>
          <button className="bg-white text-blue-500 min-w-[100px] max-w-[130px] py-[4px] font-bold font-rubik text-[15px]">
            Login
          </button>
        </div>
        <div className=" text-white" onClick={() => navigate("/becomeASeller")}>
          <h1 className=" text-[15px] font-semibold">Become a Seller</h1>
        </div>
        <div
          className="flex items-center gap-1 text-white"
        >
          <h1 className=" text-[15px] tracking-tight font-semibold">More</h1>
          <IoIosArrowDown className="text-[12px]  " />
        </div>
        <div
          className="hidden xl:flex gap-1 items-center text-white "
          onClick={() => navigate("/cart")}
        >
          <FaShoppingCart size={"17px"} />
          <h1 className="text-[15px] tracking-tight xl:block font-normal">
            Cart
          </h1>
        </div>{" "}
      </div>
    </div>
  );
};

export default NavbarInner;
