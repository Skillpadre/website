import React, {useState, useEffect} from "react";

import script from "../../scripts/smoke.js";

import styles from '../../styles/Sections.module.css'


interface Props {
    children?: React.ReactNode;
}

export default function Section6({ children }: Props) {

    useEffect(() => {
        script();
    }, []);
    


    return(
        <section className={styles.s6}>
            <canvas id="canvas" style={{cursor: 'none', width: "100%", height: "50vh", background: "linear-gradient(to bottom, #010111 0%, #000000 100%)"}}></canvas>

            {children} 
            
  
         </section>
    )
}