import {
  Bell,
  CirclePoundSterling,
  DiamondPlus,
  Download,
  Gift,
  Headset,
  Heart,
  LogOut,
  Megaphone,
  Package,
  Tag,
} from "lucide-react";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { useAuth } from "../context/AuthContext";
import { useFavorite } from "../context/WishlistContext";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

const NavbarInner = () => {
  const [menu, setMenu] = useState(false);
  const [moreMenu, setMoreMenu] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div className=" fixed top-0 left-0 w-full z-40 transition-shadow duration-300">
      {" "}
      <div className="flex justify-around xl:justify-center items-center gap-5 xl:gap-10 h-13 bg-primary">
        {/* Logo */}
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
        {/* Seacrh input  */}
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
        {/* Login btn */}
        <div className="md:relative flex items-center gap-0.5">
          <div className="">
            {user ? (
              <h4 className="text-white">
                {user?.userName || user?.email?.split("@")[0] || "User"}
              </h4>
            ) : (
              <button
                onClick={() =>
                  location.pathname === "/login"
                    ? undefined
                    : navigate("/login")
                }
                className="bg-white text-blue-500 min-w-[100px] max-w-[130px] py-[3px] font-bold font-rubik text-[14px]"
              >
                Login
              </button>
            )}
          </div>
          <div className="">
            {user && (
              <IoIosArrowDown
                className={`hidden md:block text-[14px] mt-1 text-white cursor-pointer transition-transform duration-300 ${
                  menu ? "rotate-180" : "rotate-0"
                } `}
                onMouseEnter={() => setMenu(true)}
                onMouseLeave={() => setMenu(false)}
              />
            )}
            {/* Dropdown */}
            <ul
              onMouseEnter={() => setMenu(true)}
              onMouseLeave={() => setMenu(false)}
              className={` absolute top-2 left-0 h-[120vh] md:h-auto md:top-5 md:left-1  bg-white text-[14px] rounded shadow 
                          transition-all duration-200 sm:duration-300 ease-out origin-left sm:origin-top ${
                            menu
                              ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                              : "opacity-0 scale-x-95 -translate-x-2 md:scale-y-95 md:-translate-y-2 pointer-events-none"
                          }`}
            >
              {user && (
                <li
                  onClick={() => {
                    navigate("/Profile");
                  }}
                  className="hover:bg-gray-100 min-w-max cursor-pointer px-4 pr-9 py-[12px] transition-colors duration-200  flex gap-2.5 items-center"
                >
                  <CgProfile size={18} /> <h4>Profile</h4>
                </li>
              )}
              <li className="hover:bg-gray-100 min-w-max cursor-pointer px-4 pr-9 py-[12px] transition-colors duration-200 flex gap-2.5 items-center">
                <button
                  onClick={() => {
                    navigate("/wishlist");
                  }}
                  className="flex gap-2.5 items-center"
                >
                  <Heart size={18} /> {` wishlist (${favorites.length})`}
                </button>
              </li>
              <li className="hover:bg-gray-100 min-w-max cursor-pointer px-4 pr-9 py-[12px] transition-colors duration-200 flex gap-2.5 items-center">
                <CirclePoundSterling size={18} color="#d7c23c" />{" "}
                <h4>SuperCoin Zone</h4>
              </li>
              <li className="hover:bg-gray-100 min-w-max cursor-pointer px-4 pr-9 py-[12px] transition-colors duration-200 flex gap-2.5 items-center">
                <DiamondPlus size={18} /> <h4> Flipkart Plue Zone</h4>
              </li>
              <li className="hover:bg-gray-100 min-w-max cursor-pointer px-4 pr-9 py-[12px] transition-colors duration-200 flex gap-2.5 items-center">
                <Package size={18} /> <h4>Orders</h4>
              </li>
              <li className="hover:bg-gray-100 min-w-max cursor-pointer px-4 pr-9 py-[12px] transition-colors duration-200 flex gap-2.5 items-center">
                <Tag size={18} /> <h4>Coupons</h4>
              </li>
              <li className="hover:bg-gray-100 min-w-max cursor-pointer px-4 pr-9 py-[12px] transition-colors duration-200 flex gap-2.5 items-center">
                <Gift size={18} /> <h4>Gift Cards</h4>
              </li>
              <li className="hover:bg-gray-100 min-w-max cursor-pointer px-4 pr-9 py-[12px] transition-colors duration-200 flex gap-2.5 items-center">
                <Bell size={18} /> <h4>Notification</h4>
              </li>
              {user && (
                <li
                  onClick={logout}
                  className="hover:bg-gray-100 min-w-max cursor-pointer px-4 pr-9 py-[12px] transition-colors duration-200  flex gap-2.5 items-center"
                >
                  <LogOut size={18} /> <h4>Logout</h4>
                </li>
              )}
            </ul>
          </div>
        </div>
        {/*Become a Seller*/}
        <div className=" text-white" onClick={() => navigate("/becomeASeller")}>
          <h5 className=" text-[13px] text-center font-semibold">
            Become a Seller
          </h5>
        </div>
        {/* More menu */}
        <div
          className="relative flex items-center gap-1 "
          onMouseEnter={() => setMoreMenu(true)}
          onMouseLeave={() => setMoreMenu(false)}
        >
          <h5 className=" text-[13px] tracking-tight font-semibold text-white">
            More
          </h5>
          <IoIosArrowDown
            className={`text-[12px] text-white transition-transform duration-300  ${
              moreMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <ul
            className={`absolute top-5 right-0 bg-white text-[14px] overflow-hidden 
              rounded shadow transition-all duration-300 ease-out origin-top  ${
                moreMenu
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
