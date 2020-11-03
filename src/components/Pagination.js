import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppProvider";
import "../Styles/pagination.css";

const SearchBar = () => {
  const { pagination, setPagination } = useContext(AppContext);
  const { orderProducts, setOrderProducts } = useContext(AppContext);
  const [button1Abaible, setButton1Abaible] = useState(true);
  const [button2Abaible, setButto21Abaible] = useState(false);
  const [paginas, setPaginas] = useState(<p>16 of 32 products</p>);

  useEffect(() => {
    if (orderProducts !== "principal") {
      setButton1Abaible(true);
      setButto21Abaible(true);
    } else {
      setButton1Abaible(true);
      setButto21Abaible(false);
    }
  }, [orderProducts, setOrderProducts]);

  const handlerPagination2 = (e) => {
    setPagination([16, 32]);
    setButton1Abaible(false);
    setButto21Abaible(true);
    setPaginas(<p>32 of 32 products</p>);
  };
  const handlerPagination1 = (e) => {
    setPagination([0, 16]);
    setButton1Abaible(true);
    setButto21Abaible(false);
    setPaginas(<p>16 of 32 products</p>);
  };

  return (
    <div className="pagination">
      {orderProducts !== "principal" ? <p></p> : <div>{paginas}</div>}

      <div>
        {" "}
        <button
          disabled={button1Abaible}
          value={[0, 16]}
          onClick={handlerPagination1}
        >
          <img
            src={require("../images/arrow-left.svg")}
            alt="Logo"
            id="arrow-left"
          />
        </button>
        <button
          disabled={button2Abaible}
          value={[16, 32]}
          onClick={handlerPagination2}
        >
          <img
            src={require("../images/arrow-right.svg")}
            alt="Logo"
            id="arrow-right"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
