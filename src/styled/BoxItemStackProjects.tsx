import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import ImgsProjectsStyled from './ImgsProjectsStyled';
import TypoDescriptionProjectStyled from './TypoDescriptionProject';

//import type projet from '../screens/Projects';

type projet = {
    name: string;
    description: string;
    img: string;
    github: string;
    link: string;
}

interface Props {
    children?: React.ReactNode;
    projet: projet;
}

export default function BoxItemStackProjects({ children, projet }: Props) {
    
        const BoxItem = styled(Box)({
            display: 'flex',
            flexDirection: 'row',
            //justifyContent: 'space-between',
            //alignItems: 'center',

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
                    <ImgsProjectsStyled src={require(`../assets/screens/${projet.img}`)} alt="masques" />
                    <TypoDescriptionProjectStyled>
                        {projet.description}
                    </TypoDescriptionProjectStyled>
            </BoxItem>
        </>
    );
    }