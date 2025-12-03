import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Heart, ShieldCheck, Tag, TicketPercent } from "lucide-react";
import { useFavorite } from "../context/WishlistContext";
import useFetchApi from "../hooks/useFetchApi";
import Loading from "../components/Loading";
import { useCart } from "../context/CardContext";
import SmartPhonesList from "./SmartPhonesList";
import { smartphones } from "../constant/data";

const ProductDetails = ({ type }) => {
  const { isFavorite, toggleFavorite } = useFavorite();
  const { addToCart } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();

  const apiUrl = `https://fakestoreapi.com/products/${id}`;
  const { data, loading, error } = useFetchApi(type === "api" ? apiUrl : null);

  const localProduct =
    type === "local" ? smartphones.find((p) => p.id === Number(id)) : null;

  const product = type === "api" ? data : localProduct;

  if (loading) return <Loading />;

  // API error
  if (type === "api" && error) {
    return <p className="text-red-500">{error}</p>;
  }

  // Local product error
  if (!product) {
    return <p className="text-red-500">Product not found</p>;
  }

  return (
    <section className="section-con">
      <div className="flex justify-center">
        <div className="lg:flex  bg-white gap-4 pt-3">
          {/*muti-images */}
          <div className=" flex lg:ml-4 lg:my-2 justify-center h-[560px]">
            <div className="overflow-y-scroll h-[480px] scrollbar-hide hidden xl:block">
              {Array(12)
                .fill(product.image)
                .map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={product.title}
                    className="h-[64px] min-w-[62px] p-2 border border-gray-100"
                  />
                ))}
            </div>
            <div className="relative min-w-[330px] lg:min-w-[370px] ">
              {/* img container */}
              <div className="lg:border-[1px] lg:border-gray-200 py-[14px] flex justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[400px]  p-5"
                />
              </div>
              {/* btn-container */}
              <div className="grid grid-cols-2 gap-1.5 mt-2 w-full">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                    navigate("/cart");
                  }}
                  className="text-[18px] bg-amber-300 text-white py-[14px]"
                >
                  ADD TO CART
                </button>
                <button className="text-[18px] bg-orange-500 text-white py-[8px]">
                  BUY NOW
                </button>
              </div>
              {/* fav-container */}
              <button
                className="absolute top-1 right-2 bg-white rounded-full p-1 shadow-sm hover:scale-105 transition-transform"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(product);
                }}
              >
                <Heart
                  className={` w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6.5 xl:h-6.5 ${
                    isFavorite(product)
                      ? "text-red-600 fill-red-600 "
                      : "text-gray-300 "
                  }`}
                />
              </button>
            </div>
          </div>

          {/* descreption */}
          <div className="flex flex-col gap-[8px] ml-3 lg:h-[560px] lg:overflow-y-auto scrollbar-hide  ">
            <h1 className="text-[18px]">{product.title}</h1>
            <p className="text-gray-500 text-[14px]">
              {" "}
              <span className="bg-green-700 text-white text-[14px] px-[4px] pt-[2px] pb-0">
                4.4 *
              </span>{" "}
              41,943 Ratings & 1,269 Reviews
            </p>
            <h1 className="text-[28px] font-[550]">
              ₹{" "}
              {typeof product.price === "number"
                ? product.price
                : product.price
                ? product.price.split(" ")[1].split("*")[0].trim()
                : "—"}
              <span className="text-green-700 text-[16px] pl-1.5">27% off</span>
            </h1>

            <p className="text-gray-600 text-[16px]">
              + ₹79 Protect Promise Fee{" "}
              <span className="text-blue-700 pl-1 text-[1px]">Learn more</span>
            </p>
            <p className="text-gray-600 text-[16px]">
              Secure delivery by 1 Nov, Saturday
            </p>
            <p className=" text-[16px]">Coupons for you</p>
            <div className="flex gap-2">
              <TicketPercent className="text-green-600 fill-green-600" />
              <p className="">
                Special Price{" "}
                <span className="text-gray-500">
                  Get extra ₹500 off on 1 data(s)
                </span>{" "}
                <span className="text-blue-600 pl-1">T&C</span>
              </p>
            </div>
            {/* offers */}
            <div className="flex flex-col gap-[7px]">
              <h1 className="text-[19px]">Available offers</h1>
              <div className="flex gap-2">
                <Tag className="text-green-600 fill-green-600 size-[20px]" />
                <p className="">
                  Bank Offer{" "}
                  <span className="text-gray-500">
                    5% cashback on Axis Bank Flipkart Debit Card up to ₹750
                  </span>{" "}
                  <span className="text-blue-600 pl-1">T&C</span>
                </p>
              </div>
              <div className="flex gap-2">
                <Tag className="text-green-600 fill-green-600 size-[20px]" />
                <p className="">
                  Bank Offer{" "}
                  <span className="text-gray-500">
                    5% cashback on Flipkart SBI Credit Card upto ₹4,000 per
                    calendar quarter{" "}
                  </span>{" "}
                  <span className="text-blue-600 pl-1">T&C</span>
                </p>
              </div>
              <div className="flex gap-2">
                <Tag className="text-green-600 fill-green-600 size-[20px]" />
                <p className="">
                  Bank Offer{" "}
                  <span className="text-gray-500">
                    Bank Offer5% cashback on Flipkart Axis Bank Credit Card upto
                    ₹4,000 per statement quarter{" "}
                  </span>{" "}
                  <span className="text-blue-600 pl-1">T&C</span>
                </p>
              </div>
            </div>
            {/* exchage box */}
            <div className="">
              <div className="max-w-[300px] sm:min-w-[350px] lg:min-w-[400px]">
                <h1 className="text-blue-600 pl-1 mt-2 mb-5">
                  View 6 more offers
                </h1>
                <div className="flex justify-between border-1 border-gray-300 p-4 bg-blue-50">
                  <div className="">Buy without Exchange</div>
                  <div className="">
                    {" "}
                    ₹{" "}
                    {typeof product.price === "number"
                      ? product.price
                      : product.price
                      ? product.price.split(" ")[1].split("*")[0].trim()
                      : "—"}
                  </div>
                </div>
                <div className=" border-1 border-gray-300 p-3">
                  <div className="flex justify-between">
                    <div className="">Buy with Exchange</div>
                    <div className="">up to ₹9,400 off</div>
                  </div>
                  <div className="flex justify-center datas-center  h-10">
                    <div className="text-red-500">
                      {" "}
                      Enter pincode to check if exchange is available
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4 text-gray-400 text-[14px]">
                <p className="flex items-center gap-1  ">
                  <ShieldCheck className="w-4 h-4" />
                  Safe and Secure Payments.Easy returns.100% Authentic products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 hidden lg:block">
        <SmartPhonesList headline={"Similer Products"} />
      </div>
    </section>
  );
};
export default ProductDetails;
