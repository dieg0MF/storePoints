import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppProvider";
import "../Styles/modal.css";

const ModalError = () => {
  const { error, SetError } = useContext(AppContext);

  const classNameError =
    error !== "" ? "modal-content" : "modal-hidden";
  const backgroundError = error !== "" ? "modal-background" : "";

  const handlerClick = () => {
    SetError("");
  };

  return (
    <>
      <div className={backgroundError}>
        <div className="centered">
          <div className={classNameError}>
            <h3>Algo salio mal, intente mas tarde</h3>

            <h5>{error}</h5>
            <div className="cerrar" onClick={handlerClick}>
              cerrar
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalError;
