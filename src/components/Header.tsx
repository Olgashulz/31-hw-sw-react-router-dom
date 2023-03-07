import React, {useContext} from 'react';
import Navigation from "./Navigation";
import styles from '../css/header.module.css'
import {NaviContext} from "../utils/context";

const Header = () => {
    const {item} = useContext(NaviContext);
    console.log(item.title)
    return (
        <header>
            <Navigation/>
            <h1 className={`text-center py-4 ${styles.title}`}>{item.title === "Home" ? "Luke Skywalker" : item.title}</h1>
        </header>
    );
};

export default Header;