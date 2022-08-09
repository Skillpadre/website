import React, {useState, useEffect} from "react";

interface Props {
    children?: React.ReactNode;
}

function MainContenair({ children }: Props) {


    return(
        <div>
            <div>
                Salut
            </div>
            <p> Yo </p>

            {children}   
         </div>
    )
}
 export default MainContenair;