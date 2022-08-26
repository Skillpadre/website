import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProjectsBgStyled from "../../styled/ProjectsBgStyled";
import Bubble from "../../styled/Bubble";
import bgScreen from "../../assets/screens/masques-screen.png";


export default function Projects() {

    return (
        <ProjectsBgStyled>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container direction="row-reverse" justifyContent="space-around" alignItems="center" >
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: "center" }} >

                        <div >
                            <h1>Projects</h1>
                            <p>
                                Voici mes différents projets. Vous pouvez cliquer sur l'image pour en savoir plus.
                            </p>
                        </div>
                    </Grid>
                    <Grid mt={5} item xs={12} md={6}>
                        <div style={{ display: 'flex', justifyContent: "center" }}>

                            <Link to="/projects">
                                <Bubble translate="right" screen={bgScreen} />
                            </Link>
                        </div>

                    </Grid>
                </Grid>
            </Box>
        </ProjectsBgStyled>
    )
}
