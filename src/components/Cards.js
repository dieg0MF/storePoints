import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppProvider";
import Card from "./Card";

const Cards = () => {
  const { allProducts, setAllProducts } = useContext(AppContext);
  const [prdoucts, setProducts] = useState(allProducts);
  const { higestLowest, setHigestLowest } = useContext(AppContext);
  const { orderProducts, setOrderProducts } = useContext(AppContext);
  const { pagination, setPagination } = useContext(AppContext);

  console.log("LLegaaCARD", orderProducts);
  console.log("Products", prdoucts);
  console.log("LLegaaCARD", allProducts);

  console.log("ProductsLLEGANDO", prdoucts);
  console.log("PaginaTIONNNNN", pagination);
  console.log("PaginaTIONNNNN 0", pagination[0]);
  console.log("PaginaTIONNNNN 1", pagination[1]);

  useEffect(() => {
    if (orderProducts !== "principal") {
      console.log("esta funcionando", allProducts);
      console.log("BUENOOOO", allProducts);

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
    console.log("esta funcionandoDOBLECONDI", prdoucts);
    return allProducts
      .sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost))
      .slice(pagination[0], pagination[1])
      .map((product) => <Card key={product._id} product={product} />);
  } else if (orderProducts === "principal" && higestLowest === "Lowest") {
    console.log("esta funcionandoLOWESTTTTT", prdoucts);
    return allProducts
      .sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost))
      .slice(pagination[0], pagination[1])
      .map((product) => <Card key={product._id} product={product} />);
  } else if (orderProducts !== "principal" && higestLowest === "Higest") {
    console.log("esta funcionandoDOBLECONDI", allProducts);

    return prdoucts
      .sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost))
      .map((product) => <Card key={product._id} product={product} />);
    // .map((product) => <Card key={product._id} product={product} />);
  } else if (orderProducts !== "principal" && higestLowest === "Lowest") {
    return prdoucts
      .sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost))
      .map((product) => <Card key={product._id} product={product} />);
  } else if (orderProducts !== "principal") {
    console.log("esta funcionando", allProducts);
    console.log("BUENOOOO", allProducts);

    return prdoucts.map((product) => (
      <Card key={product._id} product={product} />
    ));
  }
};

export default Cards;
