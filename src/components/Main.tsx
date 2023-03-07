import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {navItems} from "../utils/constants";
import { Route, Routes} from "react-router-dom";


const Main = () => {
    console.log(navItems[0])
    return(
    <Routes>
    {[navItems[1].route, `${navItems[1].route}/:heroId`].map(p =>  <Route key={p} path={p} element={<AboutMe/>}/>)}
    <Route path={navItems[1].route} element={<AboutMe/>}/>
    <Route path={navItems[2].route} element={<StarWars/>}/>
    <Route path={navItems[3].route} element={<Contact/>}/>
    {['/', navItems[0].route].map(p =>  <Route key={p} path={p} element={<Home/>}/>)}
</Routes>
)
};

export default Main;