import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppProvider";
import SearchByCategories from "./SearchByCategories";
import "../Styles/SearchBar.css";

const SearchBar = () => {
  const { orderProducts, setOrderProducts } = useContext(AppContext);
  const { allProducts, setAllProducts } = useContext(AppContext);
  const { higestLowest, setHigestLowest } = useContext(AppContext);

  const handlerProductList = (e) => {
    setOrderProducts(e.target.id);
  };
  const handlerProductListByPrice = (e) => {
    setHigestLowest(e.target.value);
  };
  return (
    <div className="searchBar">
      <p> Search </p>
      <div>
        <SearchByCategories handlerProductList={handlerProductList} />
      </div>

      <button value="Lowest" onClick={handlerProductListByPrice}>
        Lowest Price
      </button>
      <button value="Higest" onClick={handlerProductListByPrice}>
        Highest Price
      </button>
    </div>
  );
};

export default SearchBar;
