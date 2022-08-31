import * as React from 'react'
import styled from '@emotion/styled'
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

    const ButtonGH = styled.div`
        position absolute;
        bottom: 0;
        right: 0;
        `

    return (
        <Box sx={{ flexGrow: 1, maxWidth: '100%' }}>
                    <ImgsProjectsStyled src={require(`../assets/screens/${projet.img}`)} alt={projet.name} />
                    <ButtonGH>
                        <img src={require('../assets/buttons/github_button.svg')} />
                    </ButtonGH>
        </Box>
    );
}