import React from "react";
import { Link } from "react-router-dom";
import LinkStyled from "../../styled/LinkStyled";
import TypoStyled from "../../styled/TypoAboutmeSection";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BackgroundAboutMeStyled from "../../styled/BackgroundAboutMeStyled";
import Bubble from "../../styled/Bubble";
import bgScreen from "../../assets/screens/eny-screen.png";

export default function AboutMeSection() {


    return (
        <BackgroundAboutMeStyled>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container direction="row" justifyContent="space-around" alignItems="center" >
                    <Grid item xs={10} md={5} style={{ display: 'flex', flexDirection: "column", justifyContent: "center" }} >

                            <h1>About me</h1>
                            <TypoStyled>
                            Salut !
                            Je m'appelle Christophe Applanat, je suis développeur web junior. Ce n'était pas mon domaine d'étude à la base, mais montrant un intérêt particulier pour la programamtion, je me suis mis à apprendre le code.
                            <br />J'ai d'abord commencer par apprendre l'algorithmie tout seul 
                            sur <LinkStyled to="https://info.openclassrooms.com/fr" target="blank">OpenClassRoom</LinkStyled> avant
                            de faire des formations spécialisantes dans le web.
                            Je me suis lancée avec l'école "La Capsule" pour un Coding Bootcamp JavaScript, puis avec la Wild Code School pour une formation Blockchain. Ces expériences ont été pour moi très enrichissantes, car j'ai découvert tout un univers, et j'ai appris beaucoup de choses.
                            Aujourd'hui, je ne cesse de faire évoluer mes compétences en me formant et en me documentant. Et je peux vous dire que j'y prends vraiment du plaisir ! 
                            Je vous laisse plonger au coeur de mon portfolio et découvrir les secret qui se cachent dans les profondeurs.
                            </TypoStyled>
                    </Grid>
                    <Grid mt={5} item xs={12} md={5}>
                        <div style={{ display: 'flex', justifyContent: "center" }}>

                            <Link to="/aboutme  ">
                                <Bubble translate="left" screen={bgScreen} />
                            </Link>
                        </div>

                    </Grid>
                </Grid>
            </Box>
        </ BackgroundAboutMeStyled>
    )
}
