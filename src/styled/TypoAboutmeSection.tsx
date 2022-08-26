import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const TypoStyled = styled(Typography)({
    color: 'aquamarine',
    fontSize: '1.2rem',
    fontFamily: 'Roboto, sans-serif',

});

export default function TypoAboutMe({ children }: any) {
    return (
        <TypoStyled>
            {children}
        </TypoStyled>
    )
}