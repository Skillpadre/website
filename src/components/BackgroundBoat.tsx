import React, {useState, useEffect} from "react";
import BackgroundStyled from "../styled/BackgroundStyled";
import boatDay from "../assets/backgrounds/JapBoat_Day.png";
import boatNight from "../assets/backgrounds/JapBoat_Night.png";
import ChangeIconStyled from "../styled/ChangeIconStyled";

interface Props {
    children?: React.ReactNode;
}

export default function BackgroundBoat({ children }: Props) {

    const [darkMode, setDarkMode] = useState(false)
    const [bgImg, setBgImg] = useState(boatDay);


    useEffect(() => {
        if(darkMode){

            console.log("go night")
            setBgImg(boatNight)
        }
        else{

            setBgImg(boatDay)
            console.log("go day")
        }

    }, [darkMode])

    function handleClickBtn() {
        setDarkMode(!darkMode)
        console.log(darkMode)
    }

    return(
        <BackgroundStyled IMG={bgImg}>
                <ChangeIconStyled darkMode={darkMode} onClick={handleClickBtn} />

                {children} 
                
         </BackgroundStyled>
    )
}
