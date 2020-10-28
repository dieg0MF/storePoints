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
import HistoryRedeem from "./components/HistoryRedeem";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer"
import "./Styles/Card.css"
import "./Styles/midleBody.css"
// import tableHistory from "./components/tableHistory"

export default function App() {
  return (
    <AppProvider>
      <div>
        <Header />
       <div className="noHeader"> 
       
      
  
        <SearchBar />
       
      
        <hr class="line"></hr>
        <FetchUser />
        <FetchHistory />
        <FetchPoints />
        <FetchAllProducts />
        <FetchRedeem />
        </div>
        <div className="midleBody">
       <div className="bodyLeft"> 
         <AddPoints />
       <div className="tableHistory">
         <h4>changed points </h4>
         <div className="historyList">
      <HistoryRedeem/>
      </div>
      </div>  
        </div>
        
        <hr class="lineaVertical"></hr>


        <div className="Cards"> <Cards /> </div>
        </div>
      
        <Pagination />
        <hr class="line finalLine"></hr>

        <Footer />
      </div>
    </AppProvider>
  );
}
