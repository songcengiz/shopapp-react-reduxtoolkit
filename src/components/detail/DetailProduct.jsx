import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const DetailProduct = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const increment = () => {
    if (quantity < productDetail?.unitsInStock) setQuantity(quantity + 1);
  };
  const handleAddToCart = () => {
    const cartObj = {
      id: productDetail?.id,
      title: productDetail?.productName,
      image: productDetail?.imageUrl,
      price: productDetail?.unitPrice,
      quantity:quantity
    };
    console.log(cartObj)
    dispatch(addToCart(cartObj));
  };
  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[400px] h-[400px] object-cover"
        src={productDetail.imageUrl}
        alt={productDetail.productName}
      />
      <div>
        <div className="text-4xl font-bold">{productDetail.productName}</div>

        <div className="my-2">{productDetail.authorName}</div>
        <div className="my-2">{productDetail.publisherName}</div>
        <div className="my-2 text-xl text-red-500">
          {" "}
          Paper Type: {productDetail.paperType}
        </div>
        <div className="my-2 text-xl text-red-500">
          Units In Stock: {productDetail.unitsInStock}
        </div>
        <div className="text-4xl font-bold">
          {productDetail.unitPrice} <span className="text-sm">TL</span>
        </div>
        <div className="flex items-center gap-3 my-4">
          <div onClick={decrement} className="text-5xl cursor-pointer">
            -
          </div>
          <input
            className="w-12 text-center text-4xl font-bold"
            type="text"
            value={quantity}
            onChange={(e)=>setQuantity(e.target.value)}
          />
          <div onClick={increment} className="text-4xl cursor-pointer">
            +
          </div>
        </div>
        <div
          onClick={()=>handleAddToCart()}
          className="my-4 border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center"
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
