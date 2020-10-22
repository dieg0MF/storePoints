import React, { useContext } from "react";
import { AppContext } from "../AppProvider";

function HistoryRedeem() {
  const { user } = useContext(AppContext);
  const { historyProducts, setHistoryProducts } = useContext(AppContext);

const productsHistory = () => {
  console.log("LLEGAHISTORY",historyProducts)
  
  if(historyProducts !== [] ){ return (
  
    historyProducts.map((prod) => (
    <ul>
      <li>{prod.name}</li>
    </ul>
  )))
}else  { return <p>loading</p> }
}
  return (
    productsHistory()
  );
}


export default HistoryRedeem;
