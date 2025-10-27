import {
  CircleQuestionMark,
  Copyright,
  Facebook,
  Gift,
  Instagram,
  Star,
  Store,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

const FooterBox = () => {
  return (
    <div className="bg-[#1f1f1f] text-white">
      {/* footer top  */}
      <div className="footer-top grid grid-cols-3 gap-3 xl:grid-cols-6 !px-[20px]  xl:!px-[58px] !pt-[28px] !pb-[34px] leading-4">
        <div className="  flex flex-col col-span-1">
          <div className="text-gray-500 text-[10px] !pb-2  ">ABOUT</div>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">Careers </a>
          <a href="#">Flipkart Stories</a>
          <a href="#">Press</a>
          <a href="#">Corporate Information</a>
        </div>
        <div className=" flex flex-col ">
          <div className="text-gray-500 text-[10px] !pb-2">GROUP COMPANIES</div>
          <a href="#">Myntra</a>
          <a href="#">Cleartrip</a>
          <a href="#">Shopsy </a>
        </div>
        <div className="  flex flex-col ">
          <div className="text-gray-500 text-[10px] !pb-2">HELP</div>
          <a href="#">Payments</a>
          <a href="#">Cancellatiob & Returns</a>
          <a href="#">F&Q </a>
        </div>
        <div className="  flex flex-col  ">
          <div className="text-gray-500 text-[10px] !pb-2">CONSUMER POLICY</div>
          <a href="#">Cancellatiob & Returns</a>
          <a href="#">Terms Of Use</a>
          <a href="#">Security </a>
          <a href="#">Privacy</a>
          <a href="#">Sitemap</a>
          <a href="#">Grievance Redressal</a>
          <a href="#">EPR Copliance</a>
        </div>
        <div className="  flex flex-col xl:border-l border-gray-500 xl:!pl-7">
          <div className="text-gray-500 text-[10px] !pb-2">Mail Us:</div>
          <p>Flipkart Internet Private Limited, </p>
          <p>Buildings Alyssa, Begonia &</p>
          <p> Clove Embassy Tech Village, </p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p> Bengaluru, 560103,</p>
          <p>Karnataka, India</p>
          <div className="text-gray-500 text-[10px] !py-2">
            <div className="!pb-3 !pt-1.5">Social :</div>
            <div className=" flex gap-3">
              <span>
                <Facebook className="size-[16px] md:size-[20px] text-white" />
              </span>
              <span>
                <Twitter className="size-[16px] md:size-[20px]  text-white" />
              </span>
              <span>
                <Youtube className="size-[16px] md:size-[20px]  text-white" />
              </span>
              <span>
                <Instagram className="size-[16px] md:size-[20px]  text-white" />
              </span>
            </div>
          </div>
        </div>
        <div className="  flex flex-col ">
          <div className="text-gray-500 text-[10px] !pb-2">
            Registered Office Address:
          </div>
          <p>Flipkart Internet Private Limited,</p>
          <p>Buildings Alyssa, Begonia &</p>
          <p>Clove Embassy Tech Village, </p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103</p>
          <p>CIN: U51109KA2012PTC066107</p>
          <p>Telephone: 044-45614700/044-67415800 </p>
        </div>
      </div>

      {/* foote Buttum */}
      <div className="footer-buttum h-[58px] border-t border-gray-500 flex items-center justify-around ">
        <div className="flex items-center gap-2">
          {" "}
          <span>
            {" "}
            <Store className="size-[8px] md:size-[10px]" color="yellow" />
          </span>{" "}
          <a href="#">Become a seller</a>
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <span>
            {" "}
            <Star className="size-[8px] md:size-[10px]" color="yellow" />
          </span>{" "}
          <a href="#">Advertise</a>
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <span>
            {" "}
            <Gift className="size-[8px] md:size-[10px]" color="yellow" />
          </span>{" "}
          <a href="#">Gift Cards</a>
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <span>
            {" "}
            <CircleQuestionMark
              className="size-[8px] md:size-[10px]"
              color="yellow"
            />
          </span>{" "}
          <a href="#">Help Center</a>
        </div>
        <div className="flex items-center gap-1">
          {" "}
          <span>
            {" "}
            <Copyright className="size-[8px] md:size-[10px]" />
          </span>{" "}
          <a href="#">2007-2025 Flipkart.com</a>
        </div>
        <div className="flex gap-1">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-credit-card-icon lucide-credit-card"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-credit-card-icon lucide-credit-card"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-credit-card-icon lucide-credit-card"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-credit-card-icon lucide-credit-card"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-credit-card-icon lucide-credit-card"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-credit-card-icon lucide-credit-card"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-credit-card-icon lucide-credit-card"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-credit-card-icon lucide-credit-card"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-credit-card-icon lucide-credit-card"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-credit-card-icon lucide-credit-card"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterBox;
