import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../AppProvider";

const FetchProducts = () => {
  const { redeem, setRedeem } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const { redeemProductId, setRedeemProductId } = useContext(AppContext);

  useEffect(() => {
    if (redeemProductId !== "") {
      fetch("https://coding-challenge-api.aerolab.co/redeem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Acept: "application/jsoon",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc0ZDNhYzJiNjU3MDAwMWZjZTZjNDQiLCJpYXQiOjE2MDE0OTE4ODV9.z7gZETAOoSL2NAHAKubUs4br9ka9D407fZnCvns3I0c"
        },
        body: JSON.stringify({
          productId: redeemProductId
        })
      })
        .then((header) => {
          return header.json();
        })
        .then((body) => {
          setRedeem(body);
          setLoading(false);
          setRedeemProductId("");
        });
    }
  }, [redeemProductId]);
  console.log("redeem", redeem);

  return <p></p>;
};

export default FetchProducts;
