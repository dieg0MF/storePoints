import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../AppProvider";

const FetchProducts = () => {
  const { allProducts, setAllProducts } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      fetch("https://coding-challenge-api.aerolab.co/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Acept: "application/jsoon",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc0ZDNhYzJiNjU3MDAwMWZjZTZjNDQiLCJpYXQiOjE2MDE0OTE4ODV9.z7gZETAOoSL2NAHAKubUs4br9ka9D407fZnCvns3I0c",
        },
      })
        .then((header) => {
          return header.json();
        })
        .then((body) => {
          setAllProducts(body);

          setLoading(false);
        });
    }
  }, [loading, setAllProducts]);

  return null;
};

export default FetchProducts;
