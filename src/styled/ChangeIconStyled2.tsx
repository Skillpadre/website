import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

interface Props {
    darkMode: boolean;
}


export default function ChangeIconStyled({darkMode} : Props){


    const ChangeIcon = styled(IconButton)`
    color: #ff8f00;
    position: fixed;
    top: 0px; left: 0px;

    `
    return (
        <ChangeIcon size="large" aria-label='darkMode'>
            {!darkMode ? <DarkModeIcon fontSize="inherit" /> : <LightModeIcon fontSize="inherit"/>}
        </ChangeIcon>   
    )
}