import React, {useState, useEffect} from "react";

import script from "../../scripts/smoke.js";

import SecretStyled from "../../styled/SecretStyled";

//import styles from "../../styles/Sections.module.css";

import CanvasSmoke from "../CanvasSmoke";
import TextScript from "../../styled//TextScript";


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
    
    

    const handleEnter = () => {
        setEnter(true);
        setColor("grey");

    }
    
    const handleLeave = () => {
        //setColor("black");
    }

    const handleMouseEnter = () => {
        //setColor("grey");
    }

    return(
        <SecretStyled onMouseEnter={handleEnter} onClick={()=> setColor("black")} onMouseLeave={handleLeave}>

            <TextScript color={color} />
            {/* <canvas onMouseEnter={() => setColor("grey")} id="canvas" style={{cursor: 'none', width: "100%", height: "50vh", background: "linear-gradient(to bottom, #010111 0%, #000000 100%)"}}></canvas> */}
            <CanvasSmoke  />
            
            
            {children} 
            
         </SecretStyled>
    )
}