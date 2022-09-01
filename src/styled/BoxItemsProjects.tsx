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
    projet: projet;
    onClick: () => void;
}

export default function BoxItemsProjects({ children, projet, onClick }: Props) {

    return (
        <>
            <Box onClick={onClick} sx={{ flexGrow: 1 }} >
                <Grid container direction="row" justifyContent="space-around" alignItems="start">
                    <Grid item xs={10} sm={10} md={5}>
                        <CardProject projet={projet} />
                    </Grid>
                    <Grid item xs={10} sm={10} md={5}>
                        <TypoDescriptionProjectStyled>
                            {projet.description}
                        </TypoDescriptionProjectStyled>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}