import React from "react";

import FetchAllProducts from "./components/FetchAllProducts";
import Cards from "./components/Cards";
import AppProvider from "./AppProvider";
import Header from "./components/Header";
import FetchUser from "./components/FetchUser";
import FetchHistory from "./components/FetchHistory";
import FetchPoints from "./components/FetchPoints";
import FetchRedeem from "./components/FetchRedeem";
import AddPoints from "./components/AddPoints";
import HistoryRedeem from "./components/HistoryRedeem";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import ModalError from "./components/ModalError";

import "./style.css";
import "./Styles/Card.css";
import "./Styles/midleBody.css";

export default function App() {
  return (
    <AppProvider>
      <Header />
      <div className="noHeader">
        <SearchBar />
        <hr className="line"></hr>
        <FetchUser />
        <FetchHistory />
        <FetchPoints />
        <FetchAllProducts />
        <FetchRedeem />
      </div>
      <div className="bodyGroup ">
        <div className="midleBody">
          <Modal />
          <ModalError />
          <div className="bodyLeft">
            <AddPoints />
            <div className="tableHistory">
              <h4>changed points </h4>
              <div className="historyList">
                <HistoryRedeem />
              </div>
            </div>
          </div>

          <hr className="lineaVertical"></hr>

          <div className="Cards">
            <Cards />
          </div>
        </div>

        <Pagination />
        <hr className="line finalLine"></hr>
      </div>
      <Footer />
    </AppProvider>
  );
}
