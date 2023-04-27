import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsByCategory } from "../../redux/productReducer";
import Loading from "../Loading";
import Product from "./Product";
import ReactPaginate from "react-paginate";


const Products = ({ category, sort }) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);
  useEffect(() => {
    if (category) {
      dispatch(getProductsByCategory(category));
    } else {
      dispatch(getProducts());
    }
  }, [category, dispatch]);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 6;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / 6);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 6) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      {productsStatus == "LOADING" ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap">
          {currentItems &&
            currentItems
              .sort((a, b) =>
                sort == "inc"
                  ? a.unitPrice - b.unitprice
                  : sort == "dec"
                  ? b.unitPrice - a.unitPrice
                  : null
              )
              .map((product) => (
               
                  <Product
                    key={product.id}
                    productName={product.productName}
                    imageUrl={product.imageUrl}
                    unitPrice={product.unitPrice}
                    id={product.id}
                  />
              
              ))}
        </div>
      )}
      <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Products;
