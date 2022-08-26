import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImgsProjectsStyled from './ImgsProjectsStyled';



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
        <Box sx={{ flexGrow: 1, maxWidth: '50%' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <ImgsProjectsStyled src={require(`../assets/screens/${projet.img}`)} alt={projet.name} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h5" component="div">
                        {projet.name}
                    </Typography>
                    <Typography variant="body2" component="div">
                        {projet.description}
                    </Typography>
                    <Typography variant="body2" component="div">
                        <a href={projet.github}>Github</a>
                    </Typography>
                    <Typography variant="body2" component="div">
                        <a href={projet.link}>Link</a>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}