// Create un styled-component from Material UI Typofraphy component

import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const TypoStyled = styled(Typography)({
    fontSize: '3.2rem',
    fontWeight: 'bold',
    color: 'aquamarine',
    textShadow: '1px 1px 1px #000',
    margin: '1em 0 0.5em 0',
    padding: '0 0 0 0',
    textAlign: 'center',
    textTransform: 'uppercase',
    //letterSpacing: '0.1rem',
    lineHeight: '1.5rem',
    fontFamily: 'Roboto, sans-serif',
    '@media (max-width: 600px)': {
        fontSize: '1.5rem',
        lineHeight: '1.5rem',
    },
});

export default function TypoTitle({ children }: any) {
    return (
        <TypoStyled variant="h1" >
            {children}
        </TypoStyled>
    )
}