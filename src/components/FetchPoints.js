import React, { useEffect, useContext } from "react";
import { AppContext } from "../AppProvider";

const FetchPoints = () => {
  const { points, setPoints } = useContext(AppContext);
  const { handlerPoints, setHandlerPoints } = useContext(AppContext);
  const { error, SetError } = useContext(AppContext);

  // const stringToNum= parseInt(handlerPoints)

  useEffect(() => {
    const aditionalInfo = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Acept: "application/jsoon",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc0ZDNhYzJiNjU3MDAwMWZjZTZjNDQiLCJpYXQiOjE2MDE0OTE4ODV9.z7gZETAOoSL2NAHAKubUs4br9ka9D407fZnCvns3I0c",
      },
      body: JSON.stringify({
        amount: parseInt(handlerPoints),
      }),
    };
    if (handlerPoints !== 0) {
      fetch(
        "https://coding-challenge-api.aerolab.co/user/points",
        aditionalInfo
      )
        .then((header) => {
          return header.json();
        })
        .then((body) => {
          setPoints(body);
          setHandlerPoints(0);
        })
        .catch(function (error) {
          SetError(error.message);
        });
    }
  }, [handlerPoints]);

  return null;
};

export default FetchPoints;
