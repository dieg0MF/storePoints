import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppProvider";
import '../Styles/pagination.css'

// import Card from "./Card";

const SearchBar = () => {
  const { pagination, setPagination } = useContext(AppContext);
  const [button1Abaible, setButton1Abaible] = useState(true);
  const [button2Abaible, setButto21Abaible] = useState(false);
 
 let paginas = <p>16 of 32 products</p>
 
 
  const handlerPagination2 = (e) => {
    setPagination([16, 32]);
    setButton1Abaible(false);
    setButto21Abaible(true);
    paginas= <p>32 of 32 products</p>
    console.log("QQQQQQQQ", e.target.value);
  };
  const handlerPagination1 = (e) => {
    setPagination([0, 16]);
    setButton1Abaible(true);
    setButto21Abaible(false);
    paginas= <p>16 of 32 products</p>
    console.log("QQQQQQQQ", e.target.value);
  };

  return (
    <div className="pagination">
        {paginas}
        
         
          <button
        disabled={button1Abaible}
        value={[0, 16]}
        onClick={handlerPagination1}
      >
        1
      </button>
      <button
        disabled={button2Abaible}
        value={[16, 32]}
        onClick={handlerPagination2}
      >
        2
      </button>
    
      <div></div>
    </div>
  );
};

export default SearchBar;