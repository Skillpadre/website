import React, {useState, useEffect} from "react";

interface Props {
    children?: React.ReactNode;
}

function MainContenair({ children }: Props) {


    return(
        <div>
            <div>
            <button >Change Sea Mode</button>

            </div>
            <p> Yo </p>

            {children}   
         </div>
    )
}
 export default MainContenair;