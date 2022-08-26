import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImgsProjectsStyled from './ImgsProjectsStyled';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import LinkStyled from './LinkStyled';

type projet = {
    name: string;
    description: string;
    img: string;
    github: string;
    link: string;
}

interface Props {
    projet: projet;
}

export default function CardImageProject({ projet }: Props) {
    return (
        <Box sx={{ flexGrow: 1, maxWidth: '100%' }}>
            <Grid container >
                <Grid item >
                    <ImgsProjectsStyled src={require(`../assets/screens/${projet.img}`)} alt={projet.name} />
                </Grid>
                <Grid container direction="row" justifyContent="space-evenly" >

                    <Grid item >
                        <LinkStyled to={projet.github} target="blank" >
                            <GitHubIcon />
                        </LinkStyled>
                    </Grid>

                    <Grid item >
                        <Typography variant="h6" component="div">
                            {projet.name}
                        </Typography>
                    </Grid>

                    <Grid item >
                        <LinkStyled to={projet.link} target="blank" >
                            <LanguageIcon />
                        </LinkStyled>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}