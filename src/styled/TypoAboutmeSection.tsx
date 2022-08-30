import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const TypoStyled = styled(Typography)({
    fontFamily: 'Montaga',
    textAlign: 'center',
});

export default function TypoAboutMe({ children }: any) {
    return (
        <TypoStyled>
            {children}
        </TypoStyled>
    )
}