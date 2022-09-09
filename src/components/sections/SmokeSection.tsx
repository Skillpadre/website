import React, {useState, useEffect} from "react";

import script from "../../scripts/smoke.js";

import styles from '../../styles/Sections.module.css'

interface Props {
    children?: React.ReactNode;
}

export default function Section6({ children }: Props) {

    const [color, setColor] = useState("black");
    const [enter, setEnter] = useState(false);

    useEffect(() => {
        if(enter)
            script();
    }, [enter]);
    

    return(
        <section onMouseEnter={() => setEnter(true)} onMouseLeave={() => setColor("black")} className={styles.s6}>

            <canvas onMouseEnter={() =>  setColor("grey")} id="canvas" style={{margin: "0px", cursor: 'none', width: "100%", height: "50vh", background: "linear-gradient(to bottom, #010111 0%, #000000 100%)"}}></canvas>
            <p style={{color: color}}>Script by <a className={styles.link} target="blank" href="https://codepen.io/PavelDoGreat/pens/public">@PavelDoGreat</a> on <a className={styles.link} target="blank" href="https://codepen.io/">CodePen</a></p>

            {children} 
            
            {/* <Footer /> */}
         </section>
    )
}