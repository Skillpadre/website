import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

interface Props {
    darkMode: boolean;
    onClick: () => void;
}


export default function ChangeIconStyled({darkMode, onClick} : Props){

    function handleClickBtn() {
        onClick()
    }

    const ChangeIcon = styled(IconButton)`
    color: #ff8f00;
    position: absolute;
    top: 0px; left: 0px;

    `
    return (
        <ChangeIcon size="large" onClick={handleClickBtn} aria-label='darkMode'>
            {!darkMode ? <DarkModeIcon fontSize="inherit" /> : <LightModeIcon fontSize="inherit"/>}
        </ChangeIcon>   
    )
}