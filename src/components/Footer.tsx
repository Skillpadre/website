import React from "react";
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ImgSocialsMedia from '../styled/ImgSocialsMedia';
import SocialsMedia from '../styled/SocialMedia';
import SocialsMediaLinked from '../styled/SocialMediaLinked';
import TypoNameFooter from '../styled/TypoNameFooter';
import TypoCopyright from "../styled/TypoCopyright";

import bgFooter from '../assets/footer/footer.svg'

export default function Footer() {

    const Footer = styled.footer`
        display: flex;
        //justify-content: start;
        align-items: end;

        background-image: url(${bgFooter});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        width: 100%;
        min-height: 400px;

        z-index: 9;

        @media screen and (max-width: 600px) {
            background-position: bottom;
            `




    return (
        <>
            <Footer >

                <Box sx={{ flexGrow: 1, maxWidth: '100%' }}>
                    <Grid container mb={{sm:2, md: 3, lg: 5, xl: 5}} spacing={{md: 0, lg: -15, xl: -20}} 
                        direction={{ xs: 'column', sm: 'row' }}
                        justifyContent="space-around" 
                    >
                        <Grid item >
                                <TypoNameFooter>Christophe Applanat</TypoNameFooter>
                                <TypoCopyright>Copyright ©	2022 Christophe Applanat. All Rights Reserved</TypoCopyright>
                        </Grid>

                        

                        <Grid item >
                            <Stack
                                direction={{xs: 'row', sm: 'column'}}
                                justifyContent={{xs: "center"}}
                                spacing={1}
                            >
                                <SocialsMediaLinked name="linkedin" text="Linked In" link="https://www.linkedin.com/in/christophe-applanat/" />
                                <SocialsMediaLinked name="github" text="GitHub" link="https://github.com/ChristopheApp" />
                                <SocialsMedia name="mail" text="c.applanat@gmail.com" link="" />

                            </Stack>
                        </Grid>

                    </Grid>
                </Box>
            </Footer>
        </>
    );
}