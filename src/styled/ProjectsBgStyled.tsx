import React from 'react';
import styled from '@emotion/styled';

import type { RootState } from '../app/store'
import { useSelector } from 'react-redux'

interface Props {
    children?: React.ReactNode;
    flexDir?: string;
    justify?: string;
    align?: string;
}

export default function ProjectsBgStyled({ children, flexDir, justify, align }: Props) {

    const darkMode = useSelector((state: RootState) => state.darkMode.value)

    const ProjectsBg = styled.div`
    width: 100%;
    min-height: 100vh;
    
    display: flex;
    flex-direction: ${flexDir};
    justify-content: ${justify};
    align-items: ${align};

    background: ${darkMode 
        ? 'linear-gradient(to bottom,  #160A3A 0%,#090419 100%)' 
        : 'linear-gradient(to bottom,  #233abc 0%,#131f66 100%)'}; 
        /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

    color: aquamarine;
    `

    return (
        <ProjectsBg>
            {children}
        </ProjectsBg>
    )
}