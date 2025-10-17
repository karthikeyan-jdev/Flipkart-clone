import React from "react";
//swiper js
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { banners } from "../constant/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative !m-auto md:w-[98%] lg:w-[90%] xl:w-[98%] ">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: ".banner-prev",
          nextEl: ".banner-next",
        }}
        pagination={{
          el: ".banner-pagination",
          clickable: true,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id}>
            <div key={item.id}>
              <img src={item.imgUrl} alt="banners" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="banner-pagination !mt-4 flex justify-center"></div>

      {/* Navigation buttons */}
      <div className="">
        <button
          className="hidden xl:block absolute top-1/3 left-0 z-30 banner-prev bg-gray-200 
          transition-colors duration-300  hover:text-white
          focus:outline-none focus:ring-2 h-[80px] w-[30px]"
        >
          <ChevronLeft />
        </button>
        <button
          className="hidden xl:block absolute top-1/3 right-0 z-30 banner-next bg-gray-200 
          transition-colors duration-300  hover:text-white
          focus:outline-none focus:ring-2  h-[80px] w-[30px]"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Banner;
