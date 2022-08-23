import React, {useState, useEffect} from "react";

import styles from "./styles/AboutMe.module.css";

import Bubbles from "../Bubbles";


interface Props {
    children?: React.ReactNode;
}

export default function AboutMeSection({ children }: Props) {


    return(
        <section className={styles.aboutMeContainer}>
            {/* <Bubbles /> */}

            <div className={styles.text}>
                <h1>About me</h1>
                <p>
                    I'm a 21 years old developer from Poland. I'm currently studying Computer Science at the University of Warsaw. I'm interested in web development, especially in frontend. I'm also interested in game development and I'm currently learning Unity. I'm also interested in machine learning and I'm currently learning Python.
                </p>
            </div>

            <div className={styles.img} >

            </div>

            {children}   
         </section>
    )
}
