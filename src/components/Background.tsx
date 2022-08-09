import React, {useState, useEffect} from "react";
import BackgroundStyled from "../styled/BackgroundStyled";
import boatDay from "../assets/backgrounds/JapBoat_Day.png";
import boatNight from "../assets/backgrounds/JapBoat_Night.png";
import ChangeIconStyled from "../styled/ChangeIconStyled";
import Img from "../styled/imgStyled";
import { dark } from "@mui/material/styles/createPalette";



function Background() {

    const [darkMode, setDarkMode] = useState(false)
    const [bgSVG, setBgSVG] = useState(boatNight);


    useEffect(() => {
        if(darkMode){

            console.log("go night")
            setBgSVG(boatNight)
        }
        else{

            setBgSVG(boatDay)
            console.log("go day")
        }

    }, [darkMode])

    function handleClickBtn() {
        setDarkMode(!darkMode)
        console.log(darkMode)
    }

    return(
        <div style={{}}>
            <BackgroundStyled SVG={bgSVG}>
                    <Img SVG={bgSVG} />
                <ChangeIconStyled darkMode={darkMode} onClick={handleClickBtn}/>
            </BackgroundStyled>
        </div>
    )
}
 export default Background;