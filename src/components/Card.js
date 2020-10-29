import React, { useContext,useState } from "react";
import { AppContext } from "../AppProvider";
import Modal from "./Modal"
import "../Styles/modal.css";


const News = ({ product }) => {
  const { user } = useContext(AppContext);
  const { allProducts, setAllProductos } = useContext(AppContext);
  const { redeemProductId, setRedeemProductId } = useContext(AppContext);
  const { show, setShow } = useContext(AppContext);
  const { lastProduct, SetLastProduct } = useContext(AppContext);

  // console.log("MMMMM",user)
  // console.log("MMMMM",allProductos)

  const onRedeem = (e) => {
    setRedeemProductId(e.target.id);
     setShow(true)
     SetLastProduct(e.target.id)
     
    console.log("MMMMM", e.target.id);
   
  };

  console.log("HEY",redeemProductId)
  return (  
    <div>
   
    <article className="Card">
     
     
     { user.points > product.cost ? <img src={require('../images/buy-blue.svg')}  alt="Logo" className="buy-blue"  onClick={onRedeem} name ={product.name} id={product._id} /> : null }
     
      <img
        id={product._id}
        src={product.img.url}
        alt=""
        width="130px"
        height="130px"
      
      />
       <h5>{product.name}</h5>
    <section>
    <h6>{product.category}</h6>
      <>
        {user.points < product.cost ? (
          <p> Necesitas {product.cost - user.points} <img src={require('../images/coin.svg')}  alt="Logo" id="Coin"   onClick={onRedeem} /> </p>
        ) : (
          <p> {product.cost} <img src={require('../images/coin.svg')}  alt="Logo" id="Coin"   onClick={onRedeem} /> </p>
        )}
      </>

    
      </section>
     
    </article>
   
    </div>
  );
};

export default News;
