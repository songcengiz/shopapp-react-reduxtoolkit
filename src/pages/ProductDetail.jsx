import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../redux/productReducer";
import Loading from "../components/Loading";
import DetailProduct from "../components/detail/DetailProduct";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );
  console.log(productDetail)
  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);
  return <div>
    {productDetailStatus == "LOADING" ? <Loading/> : <DetailProduct productDetail={productDetail}/>}
  </div>;
};

export default ProductDetail;
