import React from 'react';
import {friends} from "../utils/constants";
import Friend from "./Friend";
import styles from '../css/dremTeam.module.css'
import styleBorder from '../css/border.module.css'

const DreamTeam = () => {
    return (
        <section className={`float-end w-50 row ${styleBorder.border} mx-1 mt-1}`}>
            <h2 className={`col-12 text-center ${styles["title-dreamTeam"]}`}>Dream Team</h2>
            {friends.map((f, i) => <Friend key={i} pos={i + 1} friend={f}/>)}
        </section>
    );
};

export default DreamTeam;