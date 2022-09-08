import React from "react";





interface Props {
    children?: React.ReactNode;
}

export default function Projects({ children }: Props) {


    return(
        <div>

            {children}   
         </div>
    )
}
