import React, { useContext } from "react";
import { AppContext } from "../AppProvider";
import '../Styles/header.css'

function Cards() {
  const { user } = useContext(AppContext);
  // const { points } = useContext(AppContext);

  // console.log("User", user); 
  // console.log("User", { points });
  return (
    <div className="header">
      
      <div className="headerTop">  
      <img className="headerItems " id="aerolab" src={require('../images/aerolab-logo.svg')}  width="25"
        height="25" alt="Logo" />
       <p className="headerItems">
         {user.name} <button>  {user.points}   	<img src={require('../images/coin.svg')}  alt="Logo" /></button> 
      </p>
      </div>
      <img id="headerImg" src={require('../images/header-x1.png')}   
     alt="Logo" />
    
    </div>
  );
}

export default Cards;
