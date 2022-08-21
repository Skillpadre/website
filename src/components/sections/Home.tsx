import React, {useState, useEffect} from "react";

import styles from '../../styles/Home.module.css'


interface Props {
    children?: React.ReactNode;
}

export default function Home({ children }: Props) {


    return(
        <section className={styles.home}>
            

            {children}   
         </section>
    )
}
