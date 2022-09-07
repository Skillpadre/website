import React, { useState } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardProject from './CardImageProject';
import ImgsProjectsStyled from './ImgsProjectsStyled';
import TypoDescriptionProjectStyled from './TypoDescriptionProject';

//import type projet from '../screens/Projects';

type projet = {
    name: string;
    description: string;
    img: string;
    github: string;
    link: string;
}

interface Props {
    children?: React.ReactNode;
    projets: projet[];
}

export default function BoxItemsProjects({ children, projets }: Props) {

    const [projectIndex, setProjectIndex] = useState(0);


    const Div = styled.div`
    cursor: pointer;
    animation: fadein 5s;

    @keyframes fadein {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
    }
    `

    const handleClick = () => {
        console.log("click");
        if (projectIndex === projets.length - 1)
            setProjectIndex(0);
        else
            setProjectIndex(projectIndex + 1);
        console.log(projectIndex);
    }


    return (
        <>
            <Div >

                <Box sx={{ flexGrow: 1 }} >
                    <Grid container direction="row" justifyContent="space-around" alignItems="start">
                        <Grid item xs={10} sm={10} md={5}>
                            <CardProject onClick={handleClick} projet={projets[projectIndex]} />
                        </Grid>
                        <Grid item xs={10} sm={10} md={5}>
                            <TypoDescriptionProjectStyled>
                                {projets[projectIndex].description}
                            </TypoDescriptionProjectStyled>
                        </Grid>
                    </Grid>
                </Box>
            </Div>
        </>
    );
}