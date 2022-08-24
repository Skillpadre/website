import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ProjectsBgStyled from "../../styled/ProjectsBgStyled";
import HublotImg from "../../styled/HublotImg";

import bgScreen from "../../assets/screens/masques-screen.png";

import styles from './styles/Projects.module.css'


interface Props {
    children?: React.ReactNode;
}

export default function Projects({ children }: Props) {


    return(
        <ProjectsBgStyled flexDir="row" justify="space-between" align="start">
            <div className={styles.img} >
                <Link to="/projects">

                    <HublotImg bg={bgScreen} />
                </Link>
            </div>
            <div className={styles.text}>
                <h1>Projects</h1>
                <p>
                    Voici mes différents projets. Vous pouvez cliquer sur l'image pour en savoir plus.
                </p>
            </div>


            {children}   
         </ProjectsBgStyled>
    )
}
