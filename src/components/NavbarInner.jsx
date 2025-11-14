import { Bell, Download, Headset, Megaphone, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";

const NavbarInner = () => {
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();
  return (
    <div className=" fixed top-0 left-0 w-full z-40 transition-shadow duration-300">
      {" "}
      <div className="flex justify-around xl:justify-center items-center gap-5 xl:gap-10 h-13 bg-primary">
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src={logo}
            width="140"
            height="50"
            className="w-[90px]"
            title="Flipkart"
          ></img>
        </div>
        <div className="md:min-w-[36%] lg:min-w-[38%] xl:min-w-[40%] h-[33px]">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full h-full bg-gray-100
               pl-[18px] pr-2 text-[15px] text-gray-800
               placeholder:text-[13px] placeholder:text-gray-400
                placeholder:font-semibold outline-none shadow-lg"
          />
        </div>
        <div onClick={() => navigate("/login")}>
          <button className="bg-white text-blue-500 min-w-[100px] max-w-[130px] py-[3px] font-bold font-rubik text-[14px]">
            Login
          </button>
        </div>
        <div className=" text-white" onClick={() => navigate("/becomeASeller")}>
          <h5 className=" text-[13px] text-center font-semibold">
            Become a Seller
          </h5>
        </div>
        {/* menu */}
        <div
          className="relative flex items-center gap-1 "
          onMouseEnter={() => setMenu(true)}
          onMouseLeave={() => setMenu(false)}
        >
          <h5 className=" text-[13px] tracking-tight font-semibold text-white">
            More
          </h5>
          <IoIosArrowDown
            className={`text-[12px] text-white transition-transform duration-300  ${
              menu ? "rotate-180" : "rotate-0"
            }`}
          />
          <ul
            className={`absolute top-5 right-0 bg-white text-[14px] overflow-hidden 
              rounded shadow transition-all duration-300 ease-out origin-top  ${
                menu
                  ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
              }`}
          >
            <li className="hover:bg-gray-100 min-w-max cursor-pointer px-6 py-[12px] flex gap-3.5 items-center transition-colors duration-200">
              <Bell size={18} /> <h5>Notification Preferences</h5>
            </li>
            <li className="hover:bg-gray-100 min-w-max cursor-pointer px-6 py-[12px] flex gap-3.5 items-center transition-colors duration-200">
              <Headset size={18} /> <h5>24/7 Customer Care</h5>
            </li>
            <li className="hover:bg-gray-100 min-w-max cursor-pointer px-6 py-[12px] flex gap-3.5 items-center transition-colors duration-200">
              <Megaphone size={18} /> <h5> Advertise</h5>
            </li>
            <li className="hover:bg-gray-100 min-w-max cursor-pointer px-6 py-[12px] flex gap-3.5 items-center transition-colors duration-200">
              <Download size={18} /> <h5> Download App</h5>
            </li>
          </ul>
        </div>
        {/* cart */}
        <div
          className="hidden xl:flex gap-1 items-center text-white "
          onClick={() => navigate("/cart")}
        >
          <FaShoppingCart size={"17px"} />
          <h5 className="text-[13px] tracking-tight xl:block font-semibold">
            Cart
          </h5>
        </div>{" "}
      </div>
    </div>
  );
};

export default NavbarInner;
