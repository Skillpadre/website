import React, {useState, useEffect} from "react";

import styles from '../../styles/Sections.module.css'

import styleBubble from '../../styles/Bubbles.module.css'


interface Props {
    children?: React.ReactNode;
}

export default function Section3({ children }: Props) {


    return(
        <section className={styles.s3}>
            <div className={styleBubble.bubbles}>
                <div className={styleBubble.bubble + " " + styleBubble.x1}></div>
                <div className={styleBubble.bubble + " " + styleBubble.x2}></div>
                <div className={styleBubble.bubble + " " + styleBubble.x3}></div>
                <div className={styleBubble.bubble + " " + styleBubble.x4}></div>
                <div className={styleBubble.bubble + " " + styleBubble.x5}></div>
            </div>

            {children}   
         </section>
    )
}
