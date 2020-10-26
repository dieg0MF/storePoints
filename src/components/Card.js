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
    <article className="Card">
     <img src={require('../images/buy-blue.svg')}  alt="Logo" id="buy-blue" />
      <img
        id={product._id}
        src={product.img.url}
        alt=""
        width="200"
        height="200"
        onClick={onRedeem}
      />
       <h5>{product.name}</h5>
    <section>
    <h6>{product.category}</h6>
      <>
        {user.points < product.cost ? (
          <p> {product.cost - user.points}</p>
        ) : (
          <p> {product.cost} <img src={require('../images/coin.svg')}  alt="Logo" id="Coin" /> </p>
        )}
      </>

    
      </section>
    </article>
  );
};

export default News;
