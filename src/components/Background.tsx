import React, {useState, useEffect} from "react";

import BackgroundBoat from './BackgroundBoat';
import BackgroundSea from './BackgroundSea';
import MainContenair from './MainContenair';

import BackgroundStyled from "../styled/BackgroundStyled";

import boatDay from "../assets/backgrounds/JapBoat_Day.png";
import boatNight from "../assets/backgrounds/JapBoat_Night.png";
import seaDay from "../assets/backgrounds/SeaDay.png";
import seaNight from "../assets/backgrounds/SeaNight.png";

import ChangeIconStyled from "../styled/ChangeIconStyled";
import Img from "../styled/imgStyled";
import { dark } from "@mui/material/styles/createPalette";

interface Props {
    children?: React.ReactNode;
}

export default function Background({ children }: Props) {

    const [darkMode, setDarkMode] = useState(true)
    const [seaMode, setSeaMode] = useState(false)
    const [bgImg, setBgImg] = useState(boatDay);


    useEffect(() => {
        if(darkMode && !seaMode){

            console.log("go night boat")
            setBgImg(boatNight)
        }
        else if (!darkMode && !seaMode){

            setBgImg(boatDay)
            console.log("go day boat ")
        } 
        else if (darkMode && seaMode){

            setBgImg(seaNight)
            console.log("go night sea")
        } 
        else if (!darkMode && seaMode){

            setBgImg(seaDay)
            console.log("go day sea")
        }

    }, [darkMode, seaMode])

    function handleClickBtnDarkMode() {
        setDarkMode(!darkMode)
        console.log(darkMode)
    }

    function handleClickBtnSeaMode() {
        setDarkMode(!seaMode)
        console.log(seaMode)
    }

    return(
        <BackgroundStyled IMG={bgImg}>
                <ChangeIconStyled darkMode={darkMode} onClick={handleClickBtnDarkMode} />

                {children} 
                
         </BackgroundStyled>
    )
}
