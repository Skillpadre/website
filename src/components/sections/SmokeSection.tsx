import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";

import script from "../../scripts/smoke.js";

import styles from '../../styles/Sections.module.css'

import type { RootState } from '../../app/store'
import { useSelector } from 'react-redux'


interface Props {
    children?: React.ReactNode;
}

export default function Section6({ children }: Props) {

    const darkMode = useSelector((state: RootState) => state.darkMode.value)

    const [color, setColor] = useState("black");
    const [enter, setEnter] = useState(false);

    useEffect(() => {
        if(enter)
            script();
    }, [enter]);
    

    const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: -100px;
    
    background-color: #000000; 
    `

    return(
        <section onMouseEnter={() => setEnter(true)} onMouseLeave={() => setColor("black")} className={styles.s6}>

            <canvas onMouseEnter={() =>  setColor("grey")} id="canvas" style={{margin: "10px", cursor: 'none', width: "100%", height: "50vh", background: "linear-gradient(to bottom, #010111 0%, #000000 100%)"}}></canvas>
            <p style={{color: color}}>Script by <a target="blank" href="https://codepen.io/PavelDoGreat/pens/public">@PavelDoGreat</a> on <a target="blank" href="https://codepen.io/">CodePen</a></p>

            {children} 
            
            {/* <Footer /> */}
         </section>
    )
}