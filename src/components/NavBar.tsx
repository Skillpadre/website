import React, {useState, useEffect} from "react";

import ChangeIconStyled2 from "../styled/ChangeIconStyled2";


<ChangeIconStyled2 darkMode={true}  />


interface Props {
    children?: React.ReactNode;
}

export default function NavBar({ children }: Props) {


    return(
        <div>
            <ChangeIconStyled2 darkMode={true}  />

            {children}   
         </div>
    )
}
