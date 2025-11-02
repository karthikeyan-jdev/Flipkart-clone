import React, { useEffect, useRef } from "react";
import { RiMobileDownloadLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { ShoppingCart, Store } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  let navRef = useRef(null);
  let navigate = useNavigate();

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
    <nav
      ref={navRef}
      className="flex justify-around xl:justify-center items-center h-14 bg-white gap-5
     fixed top-0 left-0 w-full z-40 transition-shadow duration-300"
    >
      <div className="flex items-center">
        <div className="md:hidden">
          <IoReorderThreeOutline className="text-[30px]" />
        </div>
        <div>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            width="170"
            height="50"
            title="Flipkart"
          ></img>
        </div>
      </div>

      <div className="hidden md:block md:min-w-[40%] lg:min-w-[42%] xl:min-w-[46%] h-[40px]">
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="w-full h-full bg-gray-100 rounded-[5px]
               pl-[18px] pr-2 text-[15px] text-gray-800
               placeholder:text-[15px] placeholder:text-gray-500
               focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="flex items-center gap-[15px] sm:gap-[30px]">
        <div className="moblie-down md:hidden ">
          <Link to="/*">
            <RiMobileDownloadLine className="text-[24px]" />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="profile">
            <CgProfile
              className="text-[26px]"
              onClick={() => navigate("/profile")}
            />
          </div>
          <div className="flex items-center gap-1.5">
            <h1
              className="text-[17px] tracking-tight font-normal"
              onClick={() => navigate("/login")}
            >
              Login
            </h1>
            <div>
              <IoIosArrowDown className="text-[14px] hidden md:block " />
            </div>
          </div>
        </div>
        {/* items-center */}
        <div
          className=" xl:flex  items-center gap-3"
          onClick={() => navigate("/cart")}
        >
          <ShoppingCart size={"26px"} />
          <h1 className="hidden text-[17px] tracking-tight xl:block font-normal">
            Cart
          </h1>
        </div>

        <div
          className="hidden md:flex  items-center gap-3 "
          onClick={() => navigate("/becomeASeller")}
        >
          <Store size={"26px"} />
          <h1 className="text-[17px] tracking-tight hidden xl:block font-normal">
            Become a Seller
          </h1>
        </div>
        <div className="hidden md:block pl-[20px]">
          <BsThreeDotsVertical className="text-[20px] " />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
