import React, {useState, useEffect} from "react";

import styles from '../../styles/Sections.module.css'


interface Props {
    children?: React.ReactNode;
}

export default function Section5({ children }: Props) {


    return(
        <section className={styles.s5}>
            

            {children}   
         </section>
    )
}