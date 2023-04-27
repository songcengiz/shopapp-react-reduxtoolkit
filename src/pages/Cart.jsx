import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartReducer";
import { useEffect } from "react";
import DetailCart from "../components/cart/DetailCart";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, itemCount, totalAmount } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {cart ? (
        <div>
          {cart.map((cartItem) => (
            <DetailCart
              key={cartItem.id}
              cartItem={cartItem}
              itemCount={itemCount}
            />
          ))}
          <div className="flex justify-end items-center text-2xl">
            TOTAL PRICE:
            <span className="font-bold text-3xl ml-2">{totalAmount} TL</span>
          </div>
        </div>
      ) : (
        <div>"Cart Empty"</div>
      )}
    </div>
  );
};

export default Cart;
