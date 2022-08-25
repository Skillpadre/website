import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ProjectsBgStyled from "../../styled/ProjectsBgStyled";
import Bubble from "../../styled/Bubble";



import bgScreen from "../../assets/screens/masques-screen.png";


interface Props {
    children?: React.ReactNode;
}

export default function Projects({ children }: Props) {

    return(
        <ProjectsBgStyled flexDir="row" justify="space-around" align="start">
            
            <div style={{margin: '50px', maxWidth: '50%'}}>
                <Link style={{animation: 'float 4s ease-in-out infinite'}} to="/projects">
                    <Bubble translate="right" screen={bgScreen} />
                </Link>
            </div>

            <div style={{margin: '50px', maxWidth: '50%'}}>
                <h1>Projects</h1>
                <p>
                    Voici mes différents projets. Vous pouvez cliquer sur l'image pour en savoir plus.
                </p>
            </div>


            {children}   
         </ProjectsBgStyled>
    )
}
