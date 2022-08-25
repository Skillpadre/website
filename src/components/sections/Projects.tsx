import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ProjectsBgStyled from "../../styled/ProjectsBgStyled";
import HublotImg from "../../styled/HublotImg";

import bgScreen from "../../assets/screens/masques-screen.png";

import type { RootState } from '../../app/store'
import { useSelector } from 'react-redux'

interface Props {
    children?: React.ReactNode;
}

export default function Projects({ children }: Props) {

    const darkMode = useSelector((state: RootState) => state.darkMode.value)

    return(
        <ProjectsBgStyled flexDir="row" justify="space-between" align="start">
            <div style={{margin: '50px', maxWidth: '50%'}}>
                <Link to="/projects">

                    <HublotImg bg={bgScreen} />
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
