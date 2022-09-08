import React, { useState } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardProject from './CardImageProject';
import TypoDescriptionProjectStyled from './TypoDescriptionProject';
import ArrowPrevProject from './ArrowPrevProject';
import ArrowNextProject from './ArrowNextProject';

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


    const GridStyled = styled(Grid)`
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

    const handlePrevClick = () => {
        console.log("click prev");
        if (projectIndex === 0)
            setProjectIndex(projets.length - 1);
        else
            setProjectIndex(projectIndex - 1);
        console.log(projectIndex);
    }

    const handleNextClick = () => {
        console.log("click");
        if (projectIndex === projets.length - 1)
            setProjectIndex(0);
        else
            setProjectIndex(projectIndex + 1);
        console.log(projectIndex);
    }


    return (
        <>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container columns={24} direction="row" justifyContent="space-between" alignItems="start">
                    <Grid item md={1} >
                        <ArrowPrevProject onClick={handlePrevClick} />
                    </Grid>
                    <Grid item md={22} >
                        <GridStyled container direction="row" justifyContent="space-around" alignItems="center">
                            <Grid item xs={10} sm={10} md={5}>
                                <CardProject projet={projets[projectIndex]} />
                            </Grid>
                            <Grid item xs={10} sm={10} md={5}>
                                <TypoDescriptionProjectStyled>
                                    {projets[projectIndex].description}
                                </TypoDescriptionProjectStyled>
                            </Grid>
                        </GridStyled>
                    </Grid>
                    <Grid item md={1}>
                        <ArrowNextProject onClick={handleNextClick} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}