import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BackgroundProjectsStyled from "../../styled/BackgroundProjectsStyled";
import TypoStyled from "../../styled/TypoAboutmeSection";
import Bubble from "../../styled/Bubble";
import bgScreen from "../../assets/screens/masques-screen.png";
import BoxItemsProjects from "../../styled/BoxItemsProjects";

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
        github: "https://github.com/ChristopheApp/Masques.org",
        link: "https://masques-project.herokuapp.com/"
    },
    {
        name: "Live Plantos",
        description: "Live Plantos est une Web App développée en React JS qui affiche tous les streams en cours sur le serveur GTA RP de Los Plantos.",
        img: "lp-screen.png",
        github: "https://github.com/ChristopheApp/Live-Plantos",
        link: "https://live-plantos.netlify.app/"
    },
    {
        name: "ENY Token",
        description: "ENY Token est un site qui ne se met pas au milieu pourquoi ca fait ca bordel, les autres se mettent bien au middle et lui non, ca rend fou putain de merde, et voila ca se met au middle quand c'est trop long",
        img: "eny-screen.png",
        github: "https://github.com/ChristopheApp/Eny-front",
        link: "https://eny-token.vercel.app/"
    },
    {
        name: "SpendCoin dApp",
        description: "Spend Coin dApp",
        img: "spc-screen.png",
        github: "https://github.com/ChristopheApp/dApp-SpendCoin",
        link: "https://spendcoindapp.netlify.app/"
    },
    {
        name: "Morning News",
        description: "Morning News est une application web développée en React JS qui permet d’afficher les news actualisées et de les mettre dans une wishlist pour les sauvegarder en base de données et les lire plus tard.",
        img: "masques-screen.png",
        github: "https://github.com/ChristopheApp/MorningNews",
        link: ""
    },
    {
        name: "My Moviz",
        description: "MyMoviz est une Web App développée en React JS connectée directement à une API permettant de récupérer les informations des films. Elle propose une liste de films, avec les dernières sorties cinéma à jour, et vous permet de créer votre propre wishlist.",
        img: "masques-screen.png",
        github: "https://github.com/ChristopheApp/MyMoviz",
        link: ""
    },
    {
        name: "Web3 Labo",
        description: "",
        img: "masques-screen.png",
        github: "https://github.com/ChristopheApp/web3-labo",
        link: ""
    },
    {
        name: "La Cabane",
        description: "La Cabane est un site vitrine d'un logement à louer. Développer avec WordPress.",
        img: "INF.png",
        github: "",
        link: "https://la-cabane13.fr/"
    },
    {
        name: "Tiketac",
        description: "Tiketac est un site de réservation de train développée en React avec base de donnée.",
        img: "INF.png",
        github: "https://github.com/ChristopheApp/Tiketac",
        link: "https://pure-escarpment-44226.herokuapp.com/"
    },
]

export default function Projects() {

    const [projectIndex, setProjectIndex] = useState(0);


    const Div1 = styled.div({
        //flexDirection: 'row',
        // justifyContent: 'space-around',
        //overflowX: 'scroll',
        // whiteSpace: 'nowrap',

    })

    const Div2 = styled.div({
        display: 'inline-block',
        //flexDirection: 'row',
        // justifyContent: 'space-around',


    })

    const handleClick = () => {
        console.log("click");
        if(projectIndex === projects.length - 1)
            setProjectIndex(0);
        else
            setProjectIndex(projectIndex + 1);
        console.log(projectIndex);
    }

    const handleScroll = () => {
        console.log("scroll");
    }

    const projectsList = projects.map((project, index) => {

        return (<BoxItemsProjects onClick={handleClick} projet={project} key={index} />)
    })

    return (
        <BackgroundProjectsStyled>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container direction="column" justifyContent="center" alignItems="center" >
                    <h2 onScroll={handleScroll}>Mes Projets</h2>
                        {/* <Div1>
                            <Div2>

                            {/* {projectsList} */}
                            {/* <BoxItemsProjects onClick={handleClick} projet={projects[0]} key={1} />
                            <BoxItemsProjects onClick={handleClick} projet={projects[1]} key={2} />
                            <BoxItemsProjects onClick={handleClick} projet={projects[2]} key={3} />
                            <BoxItemsProjects onClick={handleClick} projet={projects[3]} key={4} />
                            </Div2>
                        </Div1> */} 
                        {projectsList[projectIndex]}

                    {/* <BoxItemsProjects projet={projects[0]} /> */}

                </Grid>
            </Box>
        </BackgroundProjectsStyled>
    )
}
