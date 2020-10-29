
import React, { useState,useContext } from "react";
import { AppContext } from "../AppProvider";
import "../Styles/modal.css";

 const Modal = () => {
    const { show, setShow } = useContext(AppContext);
    const { lastProduct, SetLastProduct } = useContext(AppContext);
    const { allProducts, setAllProductos } = useContext(AppContext);
    // console.log("LLL",allProducts)


const Product = allProducts.find(prod=> prod._id === lastProduct)
// const Prod = Product[0]




//     const filter =  ()=>{ if( allProducts !== [] ) {allProducts.filter(prod => prod.id === {redeemProductId})}else{}
// console.log("FILTER",filter)
//  }
// // filter()
console.log("GGGGAAAA",allProducts)
// console.log("GGGGG",Prod)
console.log("GGGGG",Product)
console.log("GGGGGRRR",lastProduct)
// console.log("GGGGGRRR",P)

    const className = show ? "modal-content" : "modal-hidden";
    const background = show ? "modal-background" : "";
    return (
      <>
        <div className={background}>
          <div className="centered">
            <div className={className}>
            {Product ? <h3> Felicitacions has aquirido {Product.name} </h3> :<h3>nada</h3>}
            {Product ?  <img
        id={Product._id}
        src={Product.img.url}
        alt=""
        width="80px"
        height="80px"
      
      /> : null}
      
         
              <div className="cerrar" onClick={() => setShow(!show)}>
                cerrar
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default Modal