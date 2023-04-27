import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";



export const store = configureStore({
    reducer:{
      categories:categoryReducer,
      products:productReducer,
      cart:cartReducer,

    }
})
