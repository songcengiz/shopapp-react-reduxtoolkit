import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await fetch("http://localhost:3001/products");
  const data = await response.json();
  return data;
});

export const getProductDetail = createAsyncThunk("getProductDetail", async (id) => {
  const response = await fetch(`http://localhost:3001/products/${id}`);
  const data = await response.json();
  return data;
});
export const getProductsByCategory = createAsyncThunk(
  "getProductsByCategory",
  async (categoryId) => {
    const response = await fetch(
      `http://localhost:3001/products?categoryId=${categoryId}`
    );
    const data = await response.json();
    return data;
  }
);
const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productsStatus = STATUS.SUCCESS;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.productsStatus = STATUS.FAIL;
    });
    builder.addCase(getProductDetail.pending, (state, action) => {
      state.productDetailStatus = STATUS.LOADING;
    });
    builder.addCase(getProductDetail.fulfilled, (state, action) => {
      state.productDetailStatus = STATUS.SUCCESS;
      state.productDetail = action.payload;
    });
    builder.addCase(getProductDetail.rejected, (state, action) => {
      state.productDetailStatus = STATUS.FAIL;
    });
    builder.addCase(getProductsByCategory.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    });
    builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
      state.productsStatus = STATUS.SUCCESS;
      state.products = action.payload;
    });
    builder.addCase(getProductsByCategory.rejected, (state, action) => {
      state.productsStatus = STATUS.FAIL;
    });
  },
});

export default productReducer.reducer;
