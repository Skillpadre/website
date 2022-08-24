import React, {useState, useEffect} from "react";
import styled from '@emotion/styled';


import ChangeIconStyled2 from "../styled/ChangeIconStyled2";
import ButtonReturnStyled from "../styled/ButtonReturnStyled";


<ChangeIconStyled2 darkMode={true}  />


interface Props {
    children?: React.ReactNode;
}

export default function NavBar({ children }: Props) {

    const Nav = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px; left: 0px;

    display: flex;
    flex-direction: column;

    background-image: url("../assets/ancre.png");
    background-position: center;
    background-attachment: fixed;
    background-size: 100px 100px;
    background-repeat: no-repeat;

    z-index: 1000;

    `


    return(
        <Nav>
            <ChangeIconStyled2 darkMode={true}  />
            <ButtonReturnStyled />
            {children}   
         </Nav>
    )
}
