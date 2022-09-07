import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BoxItem from '../styled/BoxItemsProjects'
import ProjectsBgStyled from '../styled/BackgroundProjectsStyled';
import ImgsProjectsStyled from '../styled/ImgsProjectsStyled';
import TypoTitle from '../styled/TypoTitleStyled';

import Stack from '@mui/material/Stack';

import { useDispatch } from 'react-redux'
import { enableBackButton, disableBackButton } from '../app/reducers/BackButtonReducer'

const bgScreen = require('../assets/screens/masques-screen.png');

const screenPath = '../assets/screens/';

const lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat "

const lorem2 = "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export type projet = {
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
    {
        name: "Live Plantos",
        description: "Live Plantos est une Web App développée en React JS qui affiche tous les streams en cours sur le serveur GTA RP de Los Plantos.",
        img: "lp-screen.png",
        github: "",
        link: "https://masques.netlify.app/"
    },
    {
        name: "ENY Token",
        description: "ENY Token est un site qui ne se met pas au milieu pourquoi ca fait ca bordel, les autres se mettent bien au middle et lui non, ca rend fou putain de merde, et voila ca se met au middle quand c'est trop long",
        img: "eny-screen.png",
        github: "",
        link: "https://masques.netlify.app/"
    },
    {
        name: "SpendCoin dApp",
        description: "Spend Coin dApp",
        img: "spc-screen.png",
        github: "",
        link: "https://masques.netlify.app/"
    },
    {
        name: "Morning News",
        description: "Morning News est une application web développée en React JS qui permet d’afficher les news actualisées et de les mettre dans une wishlist pour les sauvegarder en base de données et les lire plus tard.",
        img: "masques-screen.png",
        github: "",
        link: "https://masques.netlify.app/"
    },
    {
        name: "My Moviz",
        description: "MyMoviz est une Web App développée en React JS connectée directement à une API permettant de récupérer les informations des films. Elle propose une liste de films, avec les dernières sorties cinéma à jour, et vous permet de créer votre propre wishlist.",
        img: "masques-screen.png",
        github: "",
        link: "https://masques.netlify.app/"
    },
    {
        name: "Web3 Labo",
        description: "",
        img: "masques-screen.png",
        github: "",
        link: "https://masques.netlify.app/"
    },
    {
        name: "La Cabane",
        description: "La Cabane est un site vitrine d'une petite cabane à louer dans la campagne provençale. Développer avec WordPress.",
        img: "INF.png",
        github: "",
        link: "https://la-cabane13.fr/"
    },
    {
        name: "Tiketac",
        description: "Tiketac est un site de réservation de train développée en React avec base de donnée.",
        img: "INF.png",
        github: "",
        link: "https://pure-escarpment-44226.herokuapp.com/"
    },
]
function Projects() {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(enableBackButton())
        return () => {
            dispatch(disableBackButton())
        }
    }, [])


    return (
        <>
            <ProjectsBgStyled>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container direction="column" alignItems="center">

                        <TypoTitle>Mes projets</TypoTitle>

                        <Box sx={{ width: '90%', marginBottom: '50px' }}>
                            <Stack direction="column"
                                justifyContent="flex-start"
                                alignItems="stretch"
                                spacing={5}
                            >

                                {/* {projects.map((project, index) => (
                                    (<BoxItem projet={project} key={index} />)
                                ))} */}
                            </Stack>
                        </Box>
                    </Grid>
                </Box>
            </ProjectsBgStyled>
        </>
    );
}

export default Projects;
