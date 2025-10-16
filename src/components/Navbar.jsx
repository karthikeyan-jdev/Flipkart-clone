import React from "react";
import { RiMobileDownloadLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { PiStorefrontBold, PiStorefrontLight } from "react-icons/pi";
import { TbBuildingStore } from "react-icons/tb";
import { ShoppingCart, Store } from "lucide-react";
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-evenly items-center h-18 ">
        <div className="flex items-center">
          <div className="lg:hidden">
            <IoReorderThreeOutline className="text-[30px]" />
          </div>
          <div className="logo">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              width="170"
              height="50"
              title="Flipkart"
            ></img>
          </div>
        </div>

        <div className="hidden lg:block w-[40%] h-[40px]">
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="w-full h-full bg-gray-100 rounded-[5px]
               pl-[18px!important] pr-2 text-[15px] text-gray-800
               placeholder:text-[15px] placeholder:text-gray-500
               focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex items-center gap-[15px] lg:gap-[50px]">
          <div className="moblie-down lg:hidden ">
            <RiMobileDownloadLine className="text-[24px]" />
          </div>
          <div className="flex items-center gap-3">
            <div className="profile">
              <CgProfile className="text-[26px]" />
            </div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-[19px] tracking-tight">Login</h1>
              <div>
                <IoIosArrowDown className="text-[14px] hidden lg:block " />
              </div>
            </div>
          </div>
          {/* items-center */}
          <div className=" lg:flex  items-center gap-3">
            <ShoppingCart size={"26px"} />
            <h1 className="hidden text-[19px] tracking-tight">Cart</h1>
          </div>

          <div className="hidden lg:flex  items-center gap-3">
            <Store size={"26px"} />
            <h1 className="text-[19px] tracking-tight">Become a Seller</h1>
          </div>
          <div className="hidden lg:block">
            <BsThreeDotsVertical className="text-[20px] " />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;