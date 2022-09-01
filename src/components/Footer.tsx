import React from "react";
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ImgSocialsMedia from '../styled/ImgSocialsMedia';
import TypoNameFooter from '../styled/TypoNameFooter';
import TypoCopyright from "../styled/TypoCopyright";

import bgFooter from '../assets/footer/footer.svg'

export default function Footer() {

    const Footer = styled.footer`
        display: flex;
        //justify-content: end;
        align-items: end;

        background-image: url(${bgFooter});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        width: 100%;
        min-height: 400px;

        z-index: 9;
    `




    return (
        <>
            <Footer >

                <Box sx={{ flexGrow: 1, maxWidth: '100%' }}>
                    <Grid container 
                        direction={{ sx:'column', sm:'row', md:'row', lg:'row' }}
                        justifyContent="space-around" alignItems="end" 
                        >
                        <Grid item direction="column" justifyContent="center" alignItems="center" >
                            <Grid item >
                            <TypoNameFooter>Christophe Applanat</TypoNameFooter>

                            </Grid>
                            <Grid item >
                            <TypoCopyright>Copyright ©	2022 Christophe Applanat. All Rights Reserved</TypoCopyright>
                            </Grid>
                        </Grid>

                        <Grid item >
                            <Stack
                                direction='column'
                                spacing={{ xs: 1, sm: 2, md: 4, lg: 3, xl: 18 }}
                            >
                                <ImgSocialsMedia name="linkedin" />
                                <ImgSocialsMedia name="github" />
                                <ImgSocialsMedia name="mail" />
                            </Stack>
                        </Grid>

                    </Grid>
                </Box>
            </Footer>
        </>
    );
}