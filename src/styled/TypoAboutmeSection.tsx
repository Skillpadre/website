import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const TypoStyled = styled(Typography)({
    fontFamily: 'Montaga',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '30px',
    
});

export default function TypoAboutMe({ children }: any) {
    return (
        <TypoStyled>
            {children}
        </TypoStyled>
    )
}