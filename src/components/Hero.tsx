import React from 'react';
import main from "../Images/main.jpg";
import styles from "../css/floatStart.module.css"

const Hero = () => {
    return (
        <section className={`float-start w-25 me-3`}>
            <img className="w-100" src={main} alt="hero"/>
        </section>
    );
};

export default Hero;