import React from "react";
import "./style.css";

import FetchAllProducts from "./components/FetchAllProducts";
import Cards from "./components/Cards";
import AppProvider from "./AppProvider";
import Header from "./components/Header";
import FetchUser from "./components/FetchUser";
import FetchHistory from "./components/FetchHistory";
import FetchPoints from "./components/FetchPoints";
import FetchRedeem from "./components/FetchRedeem";
import AddPoints from "./components/AddPoints";
// import HistoryRedeem from "./components/HistoryRedeem";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";

export default function App() {
  return (
    <AppProvider>
      <div>
        <Header />

        <AddPoints />
        {/* <HistoryRedeem/> */}
        <SearchBar />

        <FetchUser />
        <FetchHistory />
        <FetchPoints />
        <FetchAllProducts />
        <FetchRedeem />

        <Cards />
        <Pagination />
      </div>
    </AppProvider>
  );
}
