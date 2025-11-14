import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarInner from "../components/NavbarInner";
import InnerCategory from "../components/InnerCategory";

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";


  return (
    <>
      {isHomePage ? (
        <div className="pb-14">
          <Navbar />
        </div>
      ) : (
        <div className="pb-13">
          <NavbarInner />
        </div>
      )}
      {!isHomePage && <InnerCategory />}
    </>
  );
};

export default Header;
