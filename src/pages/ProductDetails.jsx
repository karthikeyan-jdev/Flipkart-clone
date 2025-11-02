import React from "react";
import { useParams } from "react-router-dom";
import { smartphones } from "../constant/data";
import { Tag, TicketPercent } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();

  let product = smartphones.filter((product) => product.id === Number(id));
  console.log(product);

  if (!product)
    return (
      <div className="p-10 text-center text-red-600">Product not found </div>
    );

  return (
    <div className="flex justify-center lg:mt-2">
      <div className="lg:flex  bg-white gap-4 lg:w-[92%] ">
        {/* images */}
        <div className="flex lg:ml-4 lg:my-2 justify-center">
          <div className="overflow-y-scroll w-[t0px] h-[490px] scrollbar-hide hidden xl:block">
            {Array(12)
              .fill(product[0].imgUrl)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={product[0].title}
                  className="h-[75px] w-[74px] p-2 border border-gray-100"
                />
              ))}
          </div>
          <div className="min-w-[450px] min-h-[200px]">
            <div className="lg:border-[1px] lg:border-gray-200 py-[14px] flex justify-center">
              <img
                src={product[0].imgUrl}
                alt={product[0].title}
                className="w-[360px] h-[420px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-1.5 mt-2 w-full">
              <button className="text-[18px] bg-amber-300 text-white py-[14px]">
                ADD TO CART
              </button>
              <button className="text-[18px] bg-orange-500 text-white py-[8px]">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        {/* descreption */}
        <div className="mt-3  flex flex-col gap-[8px] ml-3 ">
          <h1 className="text-[20px]">{product[0].title}</h1>
          <p className="text-gray-500 text-[14px]">
            {" "}
            <span className="bg-green-700 text-white text-[14px] px-[4px] pt-[2px] pb-0">
              4.4 *
            </span>{" "}
            41,943 Ratings & 1,269 Reviews
          </p>
          <h1 className="text-[28px] font-[550]">
            ₹{product[0].rate.split(" ")[1].split("*")[0].trim()}{" "}
            <span className="text-green-700 text-[16px] pl-1.5">27% off</span>
          </h1>
          <p className="text-gray-600 text-[16px]">
            + ₹79 Protect Promise Fee{" "}
            <span className="text-blue-700 pl-1 text-[1px]">Lean more</span>
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
                Get extra ₹500 off on 1 item(s)
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
          <div className="ml-5">
            <h1 className="text-blue-600 pl-1 mt-2 mb-5">View 6 more offers</h1>
            <div className="flex justify-between w-[400px] border-1 border-gray-300 p-4 bg-blue-50">
              <div className="">Buy without Exchange</div>
              <div className="">
                {" "}
                ₹{product[0].rate.split(" ")[1].split("*")[0].trim()}
              </div>
            </div>
            <div className=" w-[400px] border-1 border-gray-300 p-3">
              <div className="flex justify-between">
                <div className="">Buy with Exchange</div>
                <div className="">up to ₹9,400 off</div>
              </div>
              <div className="flex justify-center items-center  h-10">
                <div className="text-red-500">
                  {" "}
                  Enter pincode to check if exchange is available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
