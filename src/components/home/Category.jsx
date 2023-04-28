import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categoryReducer";

const Category = ({setCategory}) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="w-1/6 bg-gray-200 p-3 max-h-screen">
      <div className="border-b pb-1 p-2 text-xl font-bold">Categories</div>
      {categories &&
        categories.map((category) => (
          <div
            className="text-lg cursor-pointer hover:bg-gray-300 p-2"
            key={category.id}
            onClick={()=>setCategory(category.id)}
          >
            {category.categoryName}
          </div>
        ))}
    </div>
  );
};

export default Category;
