import React from "react";

const Ad = ({adImage}) => {
  return (
    <>
      <img
        src={adImage}
        alt="Advertisement"
        className="w-[265px] h-[370px] object-center"
      />
    </>
  );
};

export default Ad;
