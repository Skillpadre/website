import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AboutMeBgStyled from "../../styled/AboutMeBgStyled";
import Bubble from "../../styled/Bubble";
import bgScreen from "../../assets/screens/eny-screen.png";

export default function AboutMeSection() {


    return (
        <AboutMeBgStyled>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container direction="row" justifyContent="space-around" alignItems="center" >
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: "center" }} >

                        <div >
                            <h1>About me</h1>
                            <p>
                                I'm agametereearniI'm currently learning Python.
                            </p>
                        </div>
                    </Grid>
                    <Grid mt={5} item xs={12} md={6}>
                        <div style={{ display: 'flex', justifyContent: "center" }}>

                            <Link to="/aboutme  ">
                                <Bubble translate="left" screen={bgScreen} />
                            </Link>
                        </div>

                    </Grid>
                </Grid>
            </Box>
        </ AboutMeBgStyled>
    )
}
