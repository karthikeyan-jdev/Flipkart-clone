import React from "react";
import useFetchApi from "../hooks/useFetchApi";
import { useNavigate, useParams } from "react-router-dom";
import { Heart } from "lucide-react";

const CategoryDetails = () => {
  const { data, error, loading, status } = useFetchApi(
    "https://fakestoreapi.com/products"
  );

  const navigate = useNavigate();

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="flex gap-2 p-2">
      <div className="w-[40%] lg:w-[25%] h-[100vh] bg-white hidden md:block">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas explicabo
        tenetur, blanditiis facilis cumque minus cum accusamus vero, dignissimos
        autem dolorem! Maxime, eum laborum. Assumenda quam tempora deleniti
        deserunt autem?
      </div>
      <div className="w-full bg-white">
        {Array.isArray(data) ? (
          data.map((item) => (
            <div
              key={item.id}
              className="group flex gap-3 border-gray-200 rounded-md p-3
               shadow-sm hover:shadow-md transition-shadow duration-300 h-[200px] lg:h-[240px]"
              onClick={() => {
                navigate(`/list/${item.id}`);
              }}
            >
              <div className="relative min-w-[20%] h-[150px] lg:h-[200px] xl:h-[250px] pb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[120px] xl:w-[200px] h-[116px] xl:h-[180px]  object-contain"
                />
                {/* fav-container */}
                <button className="absolute top-1 right-2 bg-white rounded-full p-1 shadow-sm hover:scale-105 transition-transform">
                  <Heart className="fill-gray-200 text-white w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4.5 lg:h-4.5 xl:w-7 xl:h-7" />
                </button>
              </div>
              <div className="w-full flex lg:gap-1">
                <div className="w-full flex flex-col gap-1">
                  <h5 className="line-clamp-2  font-[550] text-[14px] lg:text-[18px] group-hover:text-blue-500 transition-colors duration-300">
                    {item.title}
                  </h5>
                  <p className="text-gray-500 text-[12px] lg:text-[14px] font-semibold">
                    {" "}
                    <span className="bg-green-700 text-white text-[10px] lg:text-[12px] px-[4px] pt-[2px] pb-0 mr-1">
                      4.4 *
                    </span>{" "}
                    41,943 Ratings & 1,269 Reviews
                  </p>
                  <p className="line-clamp-5 text-[12px] mt-1">
                    {item.description}
                  </p>
                </div>
                <div className="w-[24%] lg:w-[35%]">
                  <h1 className="font-semibold py-4">₹{item.price}</h1>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default CategoryDetails;
