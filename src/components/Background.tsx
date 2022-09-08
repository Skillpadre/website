import React, {useState, useEffect} from "react";

import BackgroundStyled from "../styled/BackgroundStyled";

import boatDay from "../assets/backgrounds/JapBoat_Day.png";
import boatNight from "../assets/backgrounds/JapBoat_Night.png";
import seaDay from "../assets/backgrounds/SeaDay.png";
import seaNight from "../assets/backgrounds/SeaNight.png";

import ChangeIconStyled from "../styled/ChangeIconStyled";


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

    return(
        <BackgroundStyled IMG={bgImg}>
                <ChangeIconStyled darkMode={darkMode} onClick={handleClickBtnDarkMode} />

                {children} 
                
         </BackgroundStyled>
    )
}
