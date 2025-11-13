import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarInner from "../components/NavbarInner";
import InnerCategory from "../components/InnerCategory";

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const navigate = useNavigate()

  return (
    <>
      {isHomePage ? (
        <div className="pb-14">
          <Navbar />
          <button onClick={()=>{navigate("/wishlist")}} className="fixed right-15 z-50">wishlist</button>
        </div>
      ) : (
        <div className="pb-13">
          <NavbarInner />
          <button onClick={()=>{navigate("/wishlist")}} className="fixed right-15 z-50">wishlist</button>
        </div>
      )}
      {!isHomePage && <InnerCategory />}
    </>
  );
};

export default Header;
