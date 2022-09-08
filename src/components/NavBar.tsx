import React from "react";
import styled from '@emotion/styled';

import type { RootState } from '../app/store'
import { useSelector } from 'react-redux'


import ChangeIconStyled2 from "../styled/ChangeIconStyled2";
import ButtonReturnStyled from "../styled/ButtonReturnStyled";


interface Props {
    children?: React.ReactNode;
}

export default function NavBar({ children }: Props) {

    const displayBackButton = useSelector((state: RootState) => state.backButton.value)

    const Nav = styled.div`
    position: fixed;
    top: 0px; left: 0px;

    display: flex;
    flex-direction: column;
    `


    return(
        <Nav>
            <ChangeIconStyled2 />
            {displayBackButton ? <ButtonReturnStyled /> : null}
            {children}   
         </Nav>
    )
}
