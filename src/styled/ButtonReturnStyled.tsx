import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useNavigate } from 'react-router-dom';

interface Props {
    darkMode: boolean;
}


export default function IconButtonReturn(){
    const navigate = useNavigate();


    const Button = styled(IconButton)`
    color: aquamarine;
    left: 0px;

    `
    return (
        <Button onClick={() => navigate(-1)} size="large" aria-label='darkMode'>
            <ArrowBackRoundedIcon fontSize="inherit" />
        </Button>   
    )
}