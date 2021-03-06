import React, { useState } from "react";


export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  const [user, setUser] = useState({});
  const [historyProducts, setHistoryProducts] = useState([]);
  const [points, setPoints] = useState(null);
  const [handlerPoints, setHandlerPoints] = useState(0);
  const [redeem, setRedeem] = useState();
  const [redeemProductId, setRedeemProductId] = useState("");
  const [orderProducts, setOrderProducts] = useState("principal");
  const [higestLowest, setHigestLowest] = useState("principal");
  const [pagination, setPagination] = useState([0, 16]);
  const [show,setShow] = useState(false)
  const [lastProduct,SetLastProduct]= useState("")
  const [error, SetError]= useState("")


  return (
    <AppContext.Provider
      value={{
        allProducts,
        setAllProducts,
        user,
        setUser,
        historyProducts,
        setHistoryProducts,
        points,
        setPoints,
        redeem,
        setRedeem,
        handlerPoints,
        setHandlerPoints,
        redeemProductId,
        setRedeemProductId,
        orderProducts,
        setOrderProducts,
        higestLowest,
        setHigestLowest,
        pagination,
        setPagination,
        show,
        setShow,
        lastProduct,
        SetLastProduct,
        error,
        SetError


      }}
    >
      {children}
    </AppContext.Provider>
  );
}
