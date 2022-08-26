import React from "react";
import { Link } from "react-router-dom";
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
                            <p>
                            Bonjour!
                            </p>
                            <p>
                            Je m'appelle Christophe Applanat et je suis développeur web junior fullstack. Cela n'a pas toujours été le cas, mais lorsque j'ai découvert le développement web, je me suis lancée avec l'école "La Capsule" pour un Coding Bootcamp. Cette expérience a été pour moi très enrichissante, car j'ai découvert tout un univers, et j'ai appris beaucoup de choses. Aujourd'hui, je ne cesse de faire évoluer mes compétences en me formant et en me documentant. Et je peux vous dire que j'y prends vraiment du plaisir! Je vous souhaite donc la bienvenue sur mon portfolio et n'hésitez pas à me contacter.
                            </p> 
                            <p>
                                Bonne visite!
                            </p>
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
