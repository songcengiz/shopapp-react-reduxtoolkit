import React from "react";
import { removeFromCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const DetailCart = ({ cartItem, itemCount }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    navigate("/");
  };
  return (
    <div className="my-10 flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-cover"
        src={cartItem?.image}
        alt={cartItem?.title}
      />
      <div>
        <div className="text-xl">{cartItem?.title}</div>{" "}
      </div>
      <div className="text-2xl font-bold">
        {cartItem?.price} TL ({cartItem?.quantity})
      </div>
      <div
        onClick={() => handleRemoveFromCart(cartItem.id)}
        className="bg-red-600 text-white w-[150px] text-xl h-16 flex items-center justify-center cursor-pointer rounded-md"
      >
        Delete Item
      </div>
    </div>
  );
};

export default DetailCart;
