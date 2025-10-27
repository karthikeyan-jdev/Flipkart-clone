import React from "react";
import FooterDescription from "../components/FooterDescription";
import FooterBox from "../components/FooterBox";

const Footer = () => {
  return (
    <div className="hidden md:block">
      <FooterDescription />
      <FooterBox />
    </div>
  );
};

export default Footer;
