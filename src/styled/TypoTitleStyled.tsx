// Create un styled-component from Material UI Typofraphy component

import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const TypoStyled = styled(Typography)({
    fontFamily: 'Aladin',
    fontWeight: 'bold',
    color: 'aquamarine',
    textShadow: '1px 1px 1px #000',
    margin: '0em 0 0.5em 0',
    textAlign: 'center',
});

export default function TypoTitle({ children }: any) {
    return (
        <TypoStyled variant="h1" >
            {children}
        </TypoStyled>
    )
}