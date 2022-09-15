import styled from '@emotion/styled';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import IconButton from '@mui/material/IconButton';

interface Props {
    onClick?: () => void;
}

const ArrowNextProject = ({onClick} : Props) => {

    const Button = styled(IconButton)`
    color: #ffffff;
    `
    return (
        <Button onClick={onClick}>
            <ArrowForwardIosRoundedIcon />
        </Button>
    )
}

export default ArrowNextProject