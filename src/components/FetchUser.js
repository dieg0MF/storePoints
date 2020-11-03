import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../AppProvider";

const FetchProducts = () => {
  const { user, setUser } = useContext(AppContext);
  const { handlerPoints, setHandlerPoints } = useContext(AppContext);
  const { redeem, setRedeem } = useContext(AppContext);
  // const [points, setPoints] = useState(true);

  useEffect(() => {
    fetch("https://coding-challenge-api.aerolab.co/user/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // 'Acept': 'application/jsoon',
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc0ZDNhYzJiNjU3MDAwMWZjZTZjNDQiLCJpYXQiOjE2MDE0OTE4ODV9.z7gZETAOoSL2NAHAKubUs4br9ka9D407fZnCvns3I0c",
      },
    })
      .then((header) => {
        return header.json();
      })
      .then((body) => {
        setUser(body);
      });
  }, [setUser, redeem, handlerPoints]);

  return null;
};

export default FetchProducts;
