import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CardContext";
import emptyCart from "../assets/img/emptyCart.png";
import CartProductCard from "../components/CartProductCard";

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const hasItems = cart.length > 0;

  return (
    <section className="">
      {hasItems ? (
        <div className="flex flex-col md:flex-row md:justify-center md:items-start  gap-3.5 p-5 ">
          {/* cart  */}
          <div className="space-y-1">
            {/* adress */}
            <div className="flex justify-between items-center bg-white  ">
              <h5 className=" font-semibold text-[12px] p-4 lg:text-[16px] lg:p-5 ">
                From Saved Addresses
              </h5>
              <h6 className="text-[12px] font-semibold text-gray-600 border-[1px] border-gray-400 flex items-center p-2 mr-4">
                Enter Delivery Pincode
              </h6>
            </div>
            {/*cart box */}
            <div className="bg-white max-w-[700px]">
              {cart.map((item) => (
                <CartProductCard
                  key={`${item.source}-${item.id}`}
                  item={item}
                />
              ))}
            </div>
          </div>

          {/* price box */}
          <div className="flex flex-col gap-5 sm:min-w-[300px] ">
            {/*price details */}
            <div className="bg-white p-5">
              <h1 className=" text-gray-400 pb-3">PRICE DETAILS</h1>
              <div className="">
                <div className="flex justify-between">
                  <h4>Price ({cart.length})</h4>
                  <p>$ 10000</p>
                </div>
                <div className="flex justify-between">
                  <h4>Discount </h4>
                  <p>-$1600</p>
                </div>
                <div className="flex justify-between">
                  <h4>Protect Promise Fee </h4>
                  <p>$ 298</p>
                </div>
                <div className="flex justify-between">
                  <h4>total Amount </h4>
                  <p>$ 90,000</p>
                </div>
                <h1 className="text-center p-1 pt-3.5 text-green-700">
                  {" "}
                  You Will Save $59,944 on this order
                </h1>
              </div>
            </div>
            {/* text */}
            <p className=" md:max-w-[340px] text-center line-clamp-2 text-gray-400 text-[14px]">
              Safe and Secure Payments.Easy returns.100% Authentic products.
            </p>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col justify-center items-center gap-3 h-[78vh] bg-white">
          <div className="pr-2.5">
            <img src={emptyCart} alt="your cart is empty " />
          </div>
          <h6 className="font-semibold text-xl">your cart is empty!</h6>
          <p className="text-[13px]">Add items to it now.</p>
          <button
            className="text-[12px] bg-primary text-white py-2 px-3.5 lg:py-2.5 lg:px-5 rounded-sm"
            onClick={() => {
              navigate("/categorylist");
            }}
          >
            keep shoping
          </button>{" "}
        </div>
      )}
    </section>
  );
};

export default Cart;
