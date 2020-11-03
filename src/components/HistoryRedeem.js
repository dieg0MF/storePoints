import React, { useContext } from "react";
import { AppContext } from "../AppProvider";

function HistoryRedeem() {
  const { user } = useContext(AppContext);
  const { historyProducts, setHistoryProducts } = useContext(AppContext);

  const productsHistory = () => {
    console.log("LLEGAHISTORY", historyProducts.length - 10);

    if (historyProducts !== []) {
      return historyProducts
        .slice(historyProducts.length - 10, historyProducts.lenght)
        .map((prod,index) => (
          <ul>
            <li  key={index}>
              {prod.name}{" "}
              {
                <img
                
                  id={prod._id}
                  src={prod.img.url}
                  alt=""
                  width="40"
                  height="40"
                />
              }
            </li>
          </ul>
        ));
    } else {
      return <p>loading</p>;
    }
  };
  return productsHistory();
}

export default HistoryRedeem;
