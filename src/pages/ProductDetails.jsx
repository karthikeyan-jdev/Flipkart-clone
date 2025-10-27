import React from "react";
import { useParams } from "react-router-dom";
import { smartphones } from "../constant/data";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  
  let product = smartphones.filter((product) => product.id === id);
  console.log(product);
  

  return (
    <div className="grid grid-cols-2">
      <h1>ProductDetails</h1>
      <div className="grid-cols-1">
        <img src={product[0].imgUrl} alt={product[0].title} />
      </div>
      <div className="grid-cols-1">
        <h1>{product[0].title}</h1>
      </div>
    </div>
  );
};

export default ProductDetails;
