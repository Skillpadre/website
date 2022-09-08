import styled from '@emotion/styled';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import IconButton from '@mui/material/IconButton';

interface Props {
    onClick?: () => void;
}

const ArrowPrevProject = ({onClick}: Props) => {

    const Button = styled(IconButton)`
    color: #ffffff;
    `
    return (
        <Button>
            <ArrowBackIosNewRoundedIcon onClick={onClick} />
        </Button>
    )
}

export default ArrowPrevProject