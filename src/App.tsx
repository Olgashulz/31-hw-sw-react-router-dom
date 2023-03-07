import React, {useState} from "react";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {NaviContext} from "./utils/context";
import {NavigationItem} from "./utils/types";
import {navItems} from "./utils/constants";


const App = () => {
    const [currentPage, setCurrentPage] = useState<NavigationItem>(navItems[0]);


    return (
        <div className="container-fluid">
            <NaviContext.Provider value={{item: currentPage}}>
                <Header/>
                <Main/>
                <Footer/>
            </NaviContext.Provider>
        </div>
    );
}

export default App;