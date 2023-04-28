import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLeft = () => {
  const navigate =useNavigate()
  return (
    <div onClick={()=>navigate("/")} className="text-3xl flex items-center justify-center font-bold">
      <img
        className="w-[100px] h-[100px] m-auto"
        src="https://img.freepik.com/premium-vector/online-book-store-concept-woman-buy-digital-books-smartphone-isolated-vector-isometric-illustration-isolated-vector-illustration_277904-7080.jpg?w=2000"
        alt=""
      />
      BookRose
    </div>
  );
};

export default NavbarLeft;
