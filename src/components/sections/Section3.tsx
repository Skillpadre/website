import React, {useState, useEffect} from "react";

import styles from '../../styles/Sections.module.css'

import Bubbles from "../Bubbles";


interface Props {
    children?: React.ReactNode;
}

export default function Section3({ children }: Props) {


    return(
        <section className={styles.s3}>
            <Bubbles />

            {children}   
         </section>
    )
}
