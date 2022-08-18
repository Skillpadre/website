import React, {useState, useEffect} from "react";
import BackgroundStyled from "../styled/BackgroundStyled";
import seaDay from "../assets/backgrounds/SeaDay.png";
import seaNight from "../assets/backgrounds/SeaNight.png";
import ChangeIconStyled from "../styled/ChangeIconStyled";


interface Props {
    children?: React.ReactNode;
}

export default function BackgroundSea({ children }: Props) {

    const [darkMode, setDarkMode] = useState(false)
    const [bgImg, setBgImg] = useState(seaDay);


    useEffect(() => {
        if(darkMode){

            console.log("go night")
            setBgImg(seaNight)
        }
        else{

            setBgImg(seaDay)
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
