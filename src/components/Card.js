import React, { useContext } from "react";
import { AppContext } from "../AppProvider";

const News = ({ product }) => {
  const { user } = useContext(AppContext);
  const { allProducts, setAllProductos } = useContext(AppContext);
  const { redeemProductId, setRedeemProductId } = useContext(AppContext);
  // console.log("MMMMM",user)
  // console.log("MMMMM",allProductos)

  const onRedeem = (e) => {
    setRedeemProductId(e.target.id);
    console.log("MMMMM", e.target.id);
  };

  return (
    <article>
      <p>{product.name}</p>
      <img
        id={product._id}
        src={product.img.url}
        alt=""
        width="200"
        height="200"
        onClick={onRedeem}
      />

      <>
        {user.points < product.cost ? (
          <p> {product.cost - user.points}</p>
        ) : (
          <p> {product.cost} </p>
        )}
      </>

      <p>{product.category}</p>
    </article>
  );
};

export default News;
