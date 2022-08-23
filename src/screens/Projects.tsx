import React from 'react';
import ProjectsBgStyled from '../styled/ProjectsBgStyled';
import styles from '../components/sections/styles/Projects.module.css'

type projet = {
    name: string;
    description: string;
    img: string;
    github: string;
    link: string;
}
const projects: projet[] = [
    {
        name: "Masques.org",
        description: "Masques.org est une Web App développée en React JS permettant de mettre en relation fabricants français et toute personne intéressée par des masques personnalisés, afin de favoriser les circuits courts et l'économie locale.",
        img: "masques-screen.png",
        github: "",
        link: "https://masques.netlify.app/"
    },
]
function Projects() {
  return (
    <>
        <ProjectsBgStyled flexDir="column" justify='start' align='center'>
            <div>Mes projets</div>

            <div>
                <img src="../assets/screens/masques-screen.png" alt="masques" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </ProjectsBgStyled>
    </>
  );
}

export default Projects;
