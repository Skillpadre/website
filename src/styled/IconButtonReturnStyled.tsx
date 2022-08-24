import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

interface Props {
    darkMode: boolean;
}


export default function IconButtonReturn(){


    const Button = styled(IconButton)`
    color: #ff8f00;
    left: 0px;

    `
    return (
        <Button size="large" aria-label='darkMode'>
            <ArrowBackRoundedIcon fontSize="inherit" />
        </Button>   
    )
}