import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import ImgsProjectsStyled from './ImgsProjectsStyled';
import TypoDescriptionProjectStyled from './TypoDescriptionProject';

export default function BoxItemStackProjects({ children }: any) {
    
        const BoxItem = styled(Box)({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

            width: '100%',

            margin: '50px 0 0 0',

            '@media (max-width: 600px)': {
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

            },
        });
    
    return (
        <>
            <BoxItem>
                    <ImgsProjectsStyled src={require("../assets/screens/eny-screen.png")} alt="masques" />
                    <TypoDescriptionProjectStyled>
                        {children}
                    </TypoDescriptionProjectStyled>
            </BoxItem>
        </>
    );
    }