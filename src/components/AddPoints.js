import React, { useContext } from "react";
import { AppContext } from "../AppProvider";
// import FetchPoints from "./FetchPointsC";
// import money from "./money.png"

function AddPoints() {
  const { handlerPoints, setHandlerPoints } = useContext(AppContext);

  const addPoints = (e) => {
    setHandlerPoints(e.target.value);
    console.log("ADDPOINTS", e.target.value);
    // console.log("handlerPoints", handlerPoints);
  };
  console.log("handlerPoints", handlerPoints);
  return (
    <div>
      <img className="animate__shakeY " src="/money.png" alt="no" />

      <img
        class="animate__shakeY "
        alt=""
        src="money.png"
        width="30"
        height="30"
      />
      <button value="1000" onClick={addPoints}>
        1000 <img alt="" src="money.png" width="20" height="20" />
      </button>
      <button value="5000" onClick={addPoints}>
        5000
      </button>
      <button value="7500" onClick={addPoints}>
        7500
      </button>
    </div>
  );
}

export default AddPoints;
