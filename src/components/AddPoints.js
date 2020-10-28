import React, { useContext,useEffect,useState } from "react";
import { AppContext } from "../AppProvider";
// import FetchPoints from "./FetchPointsC";
// import money from "./money.png"

function AddPoints() {
  const { handlerPoints, setHandlerPoints } = useContext(AppContext);
  const [animation,setAnimation] = useState("")




  const addPoints = (e) => {
    setHandlerPoints(e.target.value);
     setAnimation( "animate__animated animate__bounce animate__delay-0.1s" )
     setTimeout(()=>{setAnimation( "" )},1000)
     
  };

return (
    <div className="addPoints">

      <h4>Add Points</h4>
      <div className="coinsGroup">
      <img src={require('../images/coin.svg')}  class={animation} alt="Logo" id="CoinAdd"/>
      <img src={require('../images/coin.svg')}  class="animate__animated animate__bounce animate__delay-2s" alt="Logo" id="CoinAdd"/>
      <img src={require('../images/coin.svg')}  class="animate__animated animate__bounce animate__delay-2s" alt="Logo" id="CoinAdd"/>
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
