import React, { useEffect, useRef, useState } from "react";
import { RiMobileDownloadLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
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
  ShoppingCart,
  Store,
  Tag,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useFavorite } from "../context/WishlistContext";
const Navbar = () => {
  let navRef = useRef(null);
  let navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [threeDotMenu, setThreeDotMenu] = useState(false);
  const { favorites } = useFavorite();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current?.classList.add("shadow-md");
      } else {
        navRef.current?.classList.remove("shadow-md");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="relative">
      {" "}
      <nav
        ref={navRef}
        className="flex justify-around xl:justify-center items-center h-14 bg-white gap-2
     fixed top-0 left-0 w-full z-40 transition-shadow duration-300"
      >
        <div className="flex items-center">
          <div
            className="md:hidden"
            onMouseEnter={() => setMenu(true)}
            onMouseLeave={() => setMenu(false)}
          >
            <IoReorderThreeOutline className="text-[30px]" />
          </div>
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              width="170"
              height="50"
              title="Flipkart"
            ></img>
          </div>
        </div>
        {/* search input */}
        <div className="hidden md:block md:min-w-[40%] lg:min-w-[42%] xl:min-w-[46%] h-[40px]">
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="w-full h-full bg-gray-100 rounded-[5px]
               pl-[18px] pr-2 text-[15px] text-gray-800
               placeholder:text-[15px] placeholder:text-gray-500
             outline-none "
          />
        </div>
        {/* login */}
        <div className="flex items-center gap-[15px] sm:gap-[30px]">
          <div className="moblie-down md:hidden ">
            <Link to="/*">
              <RiMobileDownloadLine className="text-[24px]" />
            </Link>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-sm md:hover:bg-gray-50 md:hover:border-[1px] md:hover:border-gray-200 ">
            <CgProfile
              className="text-[26px]"
              // onClick={() => navigate("/profile")}
            />
            <div
              className="md:relative flex items-center gap-1.5" //relative
            >
              <h1
                className="text-[17px] tracking-tight font-normal cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </h1>
              <IoIosArrowDown
                className={`text-[14px] hidden md:block cursor-pointer transition-transform duration-300 ${
                  menu ? "rotate-180" : "rotate-0"
                }`}
                onMouseEnter={() => setMenu(true)}
                onMouseLeave={() => setMenu(false)}
              />
              {/* Dropdown */}
              <ul
                onMouseEnter={() => setMenu(true)}
                onMouseLeave={() => setMenu(false)}
                className={` absolute top-2 left-0 h-[120vh] md:h-auto md:top-5 md:left-1  bg-white text-[14px] rounded shadow 
                          transition-all duration-300 ease-out origin-top ${
                            menu
                              ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                              : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                          }`}
              >
                <li className="hover:bg-gray-100 min-w-max cursor-pointer px-4 pr-9 py-[12px] transition-colors duration-200 flex gap-2.5 items-center">
                  <button
                    onClick={() => {
                      navigate("/profile");
                    }}
                    className="flex gap-2.5 items-center"
                  >
                    <CgProfile size={18} /> <h4>Profile</h4>
                  </button>
                </li>
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
                <li className="hover:bg-gray-100 min-w-max cursor-pointer px-4 pr-9 py-[12px] transition-colors duration-200 flex gap-2.5 items-center">
                  <LogOut size={18} /> <h4>Logout</h4>
                </li>
              </ul>
            </div>
          </div>
          {/* ShoppingCart */}
          <div
            className=" xl:flex  items-center gap-3"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart size={"26px"} />
            <h1 className="hidden text-[17px] tracking-tight xl:block font-normal">
              Cart
            </h1>
          </div>
          {/*Become a Seller  */}
          <div
            className="hidden md:flex  items-center gap-3 ml-3"
            onClick={() => navigate("/becomeASeller")}
          >
            <Store size={"26px"} />
            <h1 className="text-[17px] tracking-tight hidden xl:block font-normal">
              Become a Seller
            </h1>
          </div>
          {/*threeDotMenu  */}
          <div
            className="relative hidden md:block pl-[20px]"
            onMouseEnter={() => setThreeDotMenu(true)}
            onMouseLeave={() => setThreeDotMenu(false)}
          >
            <BsThreeDotsVertical
              className={`text-[20px] mr-3 ${
                threeDotMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <ul
              className={`absolute top-5 right-1 bg-white text-[14px] overflow-hidden 
              rounded shadow transition-all duration-300 ease-out origin-top  ${
                threeDotMenu
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
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
