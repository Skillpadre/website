import React, {useState, useEffect} from "react";

import styles from '../../styles/Sections.module.css'

import type { RootState } from '../../app/store'
import { useSelector } from 'react-redux'

interface Props {
    children?: React.ReactNode;
}

export default function Section4({ children }: Props) {

    const darkMode = useSelector((state: RootState) => state.darkMode.value)


    return(
        <section className={darkMode ? styles.s4Dark : styles.s4Light}>
            {/* <Bubbles /> */}
            {/* <Bubbles2 /> */}

            {children}   
         </section>
    )
}