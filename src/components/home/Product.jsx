import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ productName, imageUrl, unitPrice,id }) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/products/${id}`)} className="w-[350px] p-2 mb-5 mx-2 border rounded-md relative cursor-pointer">
      <div className="text-2xl absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1">
        {unitPrice}
        <span className="text-xs p-1">TL</span>
      </div>
      <img
        className="w-[200px] h-[200px] object-cover m-auto"
        src={imageUrl}
        alt={productName}
      />
      <div className="text-center p-3 mt-3 text-xl font-bold">
        {productName}
      </div>
    </div>
  );
};

export default Product;
