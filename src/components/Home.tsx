import React, {Component, useState} from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import Loader from "./Loader";
import styles from "../css/clearfix.module.css"

const Home = () => {
    // const [isLoading, setIsLoading] = useState(false);
    //
    // const changeLoading = () => {
    //     setIsLoading(!isLoading);
    // };
    //
    //     if (isLoading) {
    //         return <Loader/>;
    //     } else {
            return (
                <main className={styles.clearfix}>
                    <Hero/>
                    <DreamTeam/>
                    <FarGalaxy/>
                </main>
            );
        // }
}

export default Home;