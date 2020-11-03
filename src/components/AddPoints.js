import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppProvider";

function AddPoints() {
  const { handlerPoints, setHandlerPoints } = useContext(AppContext);

  const [animation, setAnimation] = useState("");
  const [animation2, setAnimation2] = useState("");
  const [animation3, setAnimation3] = useState("");

  const addPoints = (e) => {
    setHandlerPoints(e.target.value);

    if (e.target.value === "1000") {
      setAnimation("animate__animated animate__bounce animate__delay-0.1s");
    }
    if (e.target.value === "5000") {
      setAnimation2("animate__animated animate__bounce animate__delay-0.1s");
    }
    if (e.target.value === "7500") {
      setAnimation3("animate__animated animate__bounce animate__delay-0.1s");
    }

    setTimeout(() => {
      setAnimation("");
      setAnimation2("");
      setAnimation3("");
    }, 1000);
  };

  return (
    <div className="addPoints">
      <h4>Add Points</h4>
      <div className="coinsGroup">
        <img
          src={require("../images/coin.svg")}
          className={animation}
          alt="Logo"
          id="CoinAdd"
        />
        <img
          src={require("../images/coin.svg")}
          className={animation2}
          alt="Logo"
          id="CoinAdd"
        />
        <img
          src={require("../images/coin.svg")}
          className={animation3}
          alt="Logo"
          id="CoinAdd"
        />
      </div>

      <div className="buttonsGroup">
        <button value="1000" onClick={addPoints}>
          1000
        </button>
        <button value="5000" onClick={addPoints}>
          5000
        </button>
        <button value="7500" onClick={addPoints}>
          7500
        </button>
      </div>
    </div>
  );
}

export default AddPoints;
