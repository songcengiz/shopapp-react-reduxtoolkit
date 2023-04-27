import React, { useEffect, useState } from "react";
import { BiSearchAlt2, BiCart } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cartReducer";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { itemCount } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border p-3 rounded-full bg-gray-200">
        <input
          className="bg-gray-200 outline-none"
          type="text"
          placeholder="Search..."
        />
        <BiSearchAlt2 size={28} />
      </div>
      <AiOutlineHeart size={28} />
      <div onClick={() => navigate("/cart")} className="relative">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </div>
        <BiCart size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
