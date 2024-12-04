import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchProducts,changeFilter } from "../Utils/productsSLice"
import LatestCard from "./LatestCard";

const Collection = () => {
  const showSearch = useSelector((store) => store.search.showSearch);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const newProducts = useSelector((store) => store.products.product);

  const handleSearch = () => {
    const inputText = inputRef.current.value;
    dispatch(changeSearchProducts(inputText));
  };

  const handleFilterChange = (filterType, value) => {
    dispatch(changeFilter({ filterType, value }));
  };

  return (
    <div className="mt-14">
      <div className="flex justify-center items-center w-full my-2">
        {showSearch && (
          <input
            onChange={handleSearch}
            type="search"
            ref={inputRef}
            placeholder="Search Here"
            className="p-4 border rounded-md w-[500px]"
          />
        )}
      </div>
      <div className="flex gap-5">
        <div className="text-sm w-[15%]">
          <h1 className="text-xl font-semibold mb-4">FILTERS</h1>
          <div className="p-4 border border-black space-y-2">
            <div>
              <input
                type="checkbox"
                onChange={() => handleFilterChange("category", "Men")}
              />
              <label className="ml-1">Men</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={() => handleFilterChange("category", "Women")}
              />
              <label className="ml-1">Women</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={() => handleFilterChange("category", "Kids")}
              />
              <label className="ml-1">Kids</label>
            </div>
          </div>
          <div className="p-4 border border-black mt-2 space-y-2">
            <div>
              <input
                type="checkbox"
                onChange={() => handleFilterChange("subCategory", "Topwear")}
              />
              <label className="ml-1">Topwear</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={() => handleFilterChange("subCategory", "Bottomwear")}
              />
              <label className="ml-1">Bottomwear</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={() => handleFilterChange("subCategory", "Winterwear")}
              />
              <label className="ml-1">Winterwear</label>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {newProducts.length > 0 ? (
              newProducts.map((card,index) => (
                <div key={index}>
                  <LatestCard item={card} />
                </div>
              ))
            ) : (
              <p className="text-black">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
