import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppProvider";
import Card from "./Card";

const Cards = () => {
  const { allProducts, setAllProducts } = useContext(AppContext);
  const [prdoucts, setProducts] = useState(allProducts);
  const { higestLowest, setHigestLowest } = useContext(AppContext);
  const { orderProducts, setOrderProducts } = useContext(AppContext);
  const { pagination, setPagination } = useContext(AppContext);

  useEffect(() => {
    if (orderProducts !== "principal") {
      setProducts(
        allProducts.filter((datu) => datu.category === orderProducts)
      );
    }
  }, [orderProducts]);

  if (orderProducts === "principal" && higestLowest === "principal") {
    return allProducts
      .slice(pagination[0], pagination[1])
      .map((product) => <Card key={product._id} product={product} />);
  } else if (orderProducts === "principal" && higestLowest === "Higest") {
    return allProducts
      .sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost))
      .slice(pagination[0], pagination[1])
      .map((product) => <Card key={product._id} product={product} />);
  } else if (orderProducts === "principal" && higestLowest === "Lowest") {
    return allProducts
      .sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost))
      .slice(pagination[0], pagination[1])
      .map((product) => <Card key={product._id} product={product} />);
  } else if (orderProducts !== "principal" && higestLowest === "Higest") {
    return prdoucts
      .sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost))
      .map((product) => <Card key={product._id} product={product} />);
    // .map((product) => <Card key={product._id} product={product} />);
  } else if (orderProducts !== "principal" && higestLowest === "Lowest") {
    return prdoucts
      .sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost))
      .map((product) => <Card key={product._id} product={product} />);
  } else if (orderProducts !== "principal") {
    return prdoucts.map((product) => (
      <Card key={product._id} product={product} />
    ));
  }
};

export default Cards;
