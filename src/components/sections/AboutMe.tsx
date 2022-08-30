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
                <Grid  sx={{backgroundColor: 'black'}} container direction="column" justifyContent="center" alignItems="center" >
                    <h2>About me</h2>
                    <Grid sx={{backgroundColor: 'blue'}} container direction="row" justifyContent="space-around" alignItems="center" >

                    <Grid sx={{backgroundColor: 'red'}} item xs={10} md={5} mx={3} style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                        <h3>Moi</h3>
                        <TypoStyled>
                            Salut !
                            Je m'appelle Christophe Applanat, je suis développeur web junior. Ce n'était pas mon domaine d'étude à la base, mais montrant un intérêt particulier pour la programamtion, je me suis mis à apprendre le code.
                        </TypoStyled>
                    </Grid>
                    <Grid sx={{backgroundColor: 'brown'}} item xs={10} md={4} style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center"}} >
                        </Grid>
                    </Grid>

                    <Grid sx={{backgroundColor: 'blue'}} container direction="row" justifyContent="space-around" alignItems="center" >
                        <Grid sx={{backgroundColor: 'brown'}} item xs={10} md={4} style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center"}} >
                        </Grid>
                        <Grid sx={{backgroundColor: 'green'}} item xs={10} md={4} style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center"}} >
                            <h3>Mon parcours</h3>
                            <TypoStyled>
                                J'ai d'abord commencer par apprendre l'algorithmie tout seul
                                sur <LinkStyled to="https://info.openclassrooms.com/fr" target="blank">OpenClassRoom</LinkStyled> avant
                                de faire des formations spécialisantes dans le web.
                                Je me suis lancée avec l'école "La Capsule" pour un Coding Bootcamp JavaScript, puis avec la Wild Code School pour une formation Blockchain. Ces expériences ont été pour moi très enrichissantes, car j'ai découvert tout un univers, et j'ai appris beaucoup de choses.
                            </TypoStyled>
                        </Grid>
                    </Grid>

                    <Grid sx={{backgroundColor: 'Yellow'}} container direction="row" justifyContent="space-around" alignItems="center" >
                        <Grid sx={{backgroundColor: 'pink'}} item xs={10} md={4} style={{ display: 'flex', flexDirection: "column", justifyContent: "center" }} >
                            <h3>Maintenant</h3>
                            <TypoStyled>
                                Aujourd'hui, je ne cesse de faire évoluer mes compétences en me formant et en me documentant. Et je peux vous dire que j'y prends vraiment du plaisir !
                                Je vous laisse plonger au coeur de mon portfolio et découvrir les secret qui se cachent dans les profondeurs.
                            </TypoStyled>
                        </Grid>
                        <Grid sx={{backgroundColor: 'brown'}} item xs={10} md={4} style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center"}} >
                        </Grid>
                    </Grid>


                </Grid>
            </Box>
        </ BackgroundAboutMeStyled>
    )
}
