import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};
const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};
const initialState = {
  cart: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemCart = state.cart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (isItemCart) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            const tempQuantity = cartItem.quantity + action.payload.quantity;
            const tempTotalPrice = tempQuantity + cartItem.price;
            return {
              ...cartItem,
              quantity: tempQuantity,
              totalPrice: tempTotalPrice,
            };
          } else {
            return cartItem;
          }
        });
        state.cart = tempCart;
        storeInLocalStorage(state.cart);
      } else {
        state.cart.push(action.payload);
        storeInLocalStorage(state.cart);
      }
    },
    removeFromCart: (state, action) => {
      const tempCart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      state.cart = tempCart;
      storeInLocalStorage(state.cart);
    },
    clearCart: (state) => {
      state.cart = [];
      storeInLocalStorage(state.cart);
    },
    getCartTotal: (state) => {
      state.totalAmount = state.cart.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.price * cartItem.quantity);
      }, 0);
      state.itemCount = state.cart.length;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } =
  cartReducer.actions;
export default cartReducer.reducer;
