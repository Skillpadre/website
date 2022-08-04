import React, {useState, useEffect} from "react";
import BackgroundStyled from "../styled/BackgroundStyled";
import boatDay from "../assets/backgrounds/BoatDay.svg";
import boatNight from "../assets/backgrounds/BoatNight.svg"
import { dark } from "@mui/material/styles/createPalette";



function Background() {

    const [darkMode, setDarkMode] = useState(true)
    const [bg, setBg] = useState(boatNight);


    useEffect(() => {
        if(darkMode){

            console.log("go night")
            setBg(boatNight)
        }
        else{

            setBg(boatDay)
            console.log("go day")
        }

    }, [darkMode])

    function handleClickBtn() {
        setDarkMode(!darkMode)
        console.log(darkMode)
    }

    return(
        <BackgroundStyled bg={bg}>
            <button onClick={handleClickBtn}> Jour/nuit</button>
        </BackgroundStyled>
    )
}
 export default Background;