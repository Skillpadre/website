// Create un styled-component from Material UI Typofraphy component

import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const TypoStyled = styled(Typography)({
    margin: '0 50px 0 50px',
    color: 'aquamarine',
    textAlign: 'center',
    
    fontFamily: 'Roboto, sans-serif',
    '@media (max-width: 900px)': {
        margin: '20px 0 0 0',

    },
});

export default function TypoDescriptionProjectStyled({ children }: any) {
    return (
        <TypoStyled>
            {children}
        </TypoStyled>
    )
}