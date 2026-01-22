import { CirclePoundSterling } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQty } from "../store/cartSlice";

const CartProductCard = ({ item }) => {
  const navigate = useNavigate();
  const [remove, setRemove] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="group shadow-sm hover:shadow-md transition-shadow duration-300">
      <div
        className=" flex gap-2 border-gray-200 rounded-md p-2 md:p-5"
        onClick={() => {
          navigate(`/details/${item.source}/${item.id}`);
        }}
      >
        {/* images*/}
        <div className="w-[140px] min-w-[22%] h-[100px] lg:h-[120px] xl:h-[140px] ">
          <img
            src={item.image}
            alt={item.title}
            className="w-[100%] h-[100%] object-contain"
          />
        </div>

        {/* descripction */}
        <div className="max-w-[650px] flex flex-col gap-2 lg:flex-row lg:gap-5">
          {/* product details */}
          <div className="">
            <h5 className="line-clamp-1  font-[550] text-[12px] lg:text-[16px] group-hover:text-blue-500 transition-colors duration-300">
              {item.title}
            </h5>
            <p className="line-clamp-1 text-[10px]">{item.description}</p>
            <p className="text-[10px] sm:text-[12px]  sm:py-2">
              Seller: ABCRetail
            </p>
            <h1 className="font-semibold mb-1">
              ₹
              {typeof item.price === "number"
                ? item.price
                : item.price
                  ? item.price.split(" ")[1].split("*")[0].trim()
                  : "—"}
              <span className="pl-2 text-gray-500 text-[13px]">40% Off</span>
            </h1>
            <div className="">
              <p className="text-[12px]">+ ₹149 Protect Promise Fee </p>

              <p className="text-[12px] flex gap-1.5 items-center">
                `Or Pay ₹
                {typeof item.price === "number"
                  ? item.price
                  : item.price
                    ? item.price.split(" ")[1].split("*")[0].trim()
                    : "—"}{" "}
                + 100 <CirclePoundSterling size={12} color="orange" />{" "}
              </p>
            </div>
          </div>
          {/* delivery date */}
          <div className="xl:px-5">
            <p className="text-[12px] min-w-max">Delivery by Fri Nov 21</p>
          </div>
        </div>
      </div>
      {/* qty & Remove btn */}
      <div className="flex items-center pt-2 pb-6">
        <div className="flex justify-center items-center gap-1.5 w-[160px] min-w-[25%]  ">
          <button
            onClick={() => {
              item.qty > 1 &&
                dispatch(
                  updateQty({
                    id: item.id,
                    source: item.source,
                    qty: item.qty - 1,
                  }),
                );
            }}
            className={`flex  justify-center items-center h-6 px-2 border-1 border-gray-300 rounded-2xl ${
              item.qty === 1 && "bg-gray-200 text-gray-400"
            }`}
          >
            -
          </button>
          <div className="border-1 border-gray-300 px-3.5 text-[12px]">
            {item.qty}
          </div>
          <button
            onClick={() => {
              dispatch(
                updateQty({
                  id: item.id,
                  source: item.source,
                  qty: item.qty + 1,
                }),
              );
            }}
            className="flex items-center justify-center h-6 px-1.5 border-1 border-gray-300 rounded-2xl"
          >
            +
          </button>
        </div>
        <div
          className="relative"
          onClick={() => {
            setRemove(true);
          }}
        >
          <button className="font-semibold text-gray-500 hover:text-gray-700 ">
            REMOVE
          </button>

          <div
            className={`absolute right-[-55px] transition-all duration-200 ${
              remove
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div className="bg-gray-300 h-full ">
              {" "}
              <div className="flex gap-4 shadow-sm hover:shadow-md transition-shadow duration-300 text-gray-900 bg-white p-3 ">
                <button
                  className="hover:text-gray-400 text-[14px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setRemove(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="hover:text-red-600 text-[14px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(
                      removeFromCart({ id: item.id, source: item.source }),
                    );
                    setRemove(false);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
