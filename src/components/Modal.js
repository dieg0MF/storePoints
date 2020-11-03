import React, { useState, useContext } from "react";
import { AppContext } from "../AppProvider";
import "../Styles/modal.css";

const Modal = () => {
  const { show, setShow } = useContext(AppContext);
  const { lastProduct, SetLastProduct } = useContext(AppContext);
  const { allProducts, setAllProductos } = useContext(AppContext);
  const { errorAddPoints, SetErrorAddPoints } = useContext(AppContext);

  const Product = allProducts.find((prod) => prod._id === lastProduct);

  const className = show  ? "modal-content" : "modal-hidden";
  const background = show ? "modal-background" : "";

  // const className = show === true  & errorAddPoints === "" ? "modal-content" : "modal-hidden";
  // const background = show === true  & errorAddPoints === ""  ? "modal-background" : "";
  // const className = ()=>{ if ( show === true  & errorAddPoints === "" ) {return "modal-content" }else{ return "modal-hidden"} }
  // const background = ()=>{ if ( show === true  & errorAddPoints === "" ) {return  "modal-background"  } }


  
  return (
    <>
      <div className={background}>
        <div className="centered">
          <div className={className}>
            {Product ? (
              <h3> Felicitacions has aquirido {Product.name} </h3>
            ) : (
              <h3>nada</h3>
            )}
            {Product ? (
              <img
                id={Product._id}
                src={Product.img.url}
                alt=""
                width="80px"
                height="80px"
              />
            ) : null}

            <div className="cerrar" onClick={() => setShow(!show)}>
              cerrar
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
