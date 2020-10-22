import React, { useContext } from "react";
import { AppContext } from "../AppProvider";

function Cards() {
  const { user } = useContext(AppContext);
  // const { points } = useContext(AppContext);

  // console.log("User", user);
  // console.log("User", { points });
  return (
    <div>
      <p>
        Hola: {user.name} tus puntos son: {user.points}
      </p>
    </div>
  );
}

export default Cards;
