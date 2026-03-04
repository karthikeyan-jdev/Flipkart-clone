import React from "react";
import { useAuth } from "../context/AuthContext";
import { CgProfile } from "react-icons/cg";
import {
  Bell,
  CirclePoundSterling,
  DiamondPlus,
  Gift,
  Heart,
  LogOut,
  Package,
  Tag,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user, logout } = useAuth();
  const favorites = useSelector((state) => state.favorites.favorites);
  let navigate = useNavigate();
  const handleLogout = () => {
    const success = logout();
    if (success) {
      alert("Logged out!");
      navigate("/login");
    }
  };
  return (
    <div className=" w-[90%] mx-auto space-y-2">
      {/*profile  */}
      <div className="bg-white flex items-center gap-3  ">
        {/* profile-img */}
        <div className="">
          <img
            src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?semt=ais_hybrid&w=740&q=80"
            alt=""
            className="w-20"
          />
        </div>
        {/* profile-text */}
        <div className="">
          <p>Hello,</p>
          <h6 className="font-semibold">
            {" "}
            {user?.userName || user?.email?.split("@")[0] || "User"}
          </h6>
        </div>
      </div>{" "}
      {/* details */}
      <div className="bg-white">
        <ul className=" text-[14px]  shadow">
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
              onClick={handleLogout}
              className="hover:bg-gray-100 min-w-max cursor-pointer px-4 pr-9 py-[12px] transition-colors duration-200  flex gap-2.5 items-center"
            >
              <LogOut size={18} /> <h4>Logout</h4>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
