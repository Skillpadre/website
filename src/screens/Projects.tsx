import React from 'react';
import ProjectsBgStyled from '../styled/ProjectsBgStyled';
import ImgsProjectsStyled from '../styled/ImgsProjectsStyled';
import TypoTitle from '../styled/TypoTitleStyled';
import styles from '../components/sections/styles/Projects.module.css'
import HublotImg from '../styled/HublotImg';
import BoxItem from '../styled/BoxItemStackProjects'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import NavBar from '../components/NavBar';
const bgScreen = require('../assets/screens/masques-screen.png');

const screenPath = '../assets/screens/';

const lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat "

const lorem2 = "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
            {/* <NavBar /> */}

        <ProjectsBgStyled flexDir="column" justify='start' align='center'>
            <TypoTitle>Mes projets</TypoTitle>
            
            <Box sx={{ width: '90%', marginBottom: '50px' }}>
                <Stack direction="column"
                        justifyContent="flex-start"
                        alignItems="stretch" 
                        spacing={5}
                >

                    <BoxItem>
                        {lorem1}
                    </BoxItem>

                    <BoxItem>
                        {lorem2}
                    </BoxItem>

                    <BoxItem>
                        {lorem1}
                    </BoxItem>

                    <BoxItem>
                        {lorem2}
                    </BoxItem>

                    <BoxItem>
                        {lorem1}
                    </BoxItem>

                            
                {/* <div className="un-projet" style={{display: 'flex'}}>
                    <ImgsProjectsStyled src={require("../assets/screens/masques-screen.png")} alt="masques" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="un-projet" style={{display: 'flex'}}>
                    <ImgsProjectsStyled src={require("../assets/screens/masques-screen.png")} alt="masques" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="un-projet" style={{display: 'flex'}}>
                    <ImgsProjectsStyled src={require("../assets/screens/masques-screen.png")} alt="masques" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="un-projet" style={{display: 'flex'}}>
                    <ImgsProjectsStyled src={require("../assets/screens/masques-screen.png")} alt="masques" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div> */}
                </Stack>
                </Box>

            {/* <div className="list-projects">

                <div className="un-projet" style={{display: 'flex'}}>
                    <ImgsProjectsStyled src={require("../assets/screens/masques-screen.png")} alt="masques" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="un-projet" style={{display: 'flex'}}>
                    <ImgsProjectsStyled src={require("../assets/screens/masques-screen.png")} alt="masques" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="un-projet" style={{display: 'flex'}}>
                    <ImgsProjectsStyled src={require("../assets/screens/masques-screen.png")} alt="masques" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="un-projet" style={{display: 'flex'}}>
                    <ImgsProjectsStyled src={require("../assets/screens/masques-screen.png")} alt="masques" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="un-projet" style={{display: 'flex'}}>
                    <ImgsProjectsStyled src={require("../assets/screens/masques-screen.png")} alt="masques" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

            </div> */}

        </ProjectsBgStyled>
    </>
  );
}

export default Projects;
