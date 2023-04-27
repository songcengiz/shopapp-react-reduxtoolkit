import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="bg-gray-100 my-5 p-3 flex items-center justify-end">
      <select onChange={(e) => setSort(e.target.value)} className="bg-gray-100">
        <option disabled value={""}>
          Select
        </option>
        <option value={"inc"}>Increment</option>
        <option value={"dec"}>Decrement</option>
      </select>
    </div>
  );
};

export default Sorting;
