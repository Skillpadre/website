import React, {useState, useEffect} from "react";

import styles from '../../styles/Projects.module.css'


interface Props {
    children?: React.ReactNode;
}

export default function Projects({ children }: Props) {


    return(
        <section className={styles.projects}>
            

            {children}   
         </section>
    )
}
