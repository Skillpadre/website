import React from "react";

import styles from '../../styles/Sections.module.css'

import type { RootState } from '../../app/store'
import { useSelector } from 'react-redux'

interface Props {
    children?: React.ReactNode;
}

export default function Section5({ children }: Props) {

    const darkMode = useSelector((state: RootState) => state.darkMode.value)


    return (
        <section className={darkMode ? styles.s5Dark : styles.s5Light}>

            <label>
                <div className={styles.bubble}>

                </div>
            </label>

            {children}
        </section>
    )
}