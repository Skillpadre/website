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

    background: ${darkMode ? 'linear-gradient(to bottom,  #160A3A 0%,#090419 100%)' : 'linear-gradient(to bottom,  #233abc 0%,#131f66 100%)'}; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#619fe4+0,233abc+100 */
    // background: #619fe4; /* Old browsers */
    // background: -moz-linear-gradient(top,  #233abc 0%, #131f66 100%); /* FF3.6-15 */
    // background: -webkit-linear-gradient(top,  #233abc 0%,#131f66 100%); /* Chrome10-25,Safari5.1-6 */
    // background: linear-gradient(to bottom,  #233abc 0%,#131f66 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#619fe4', endColorstr='#233abc',GradientType=0 ); /* IE6-9 */
    

    color: aquamarine;
    `

    return (
        <ProjectsBg>
            {children}
        </ProjectsBg>
    )
}