import React, {useState, useEffect} from "react";
import styled from '@emotion/styled';


import ChangeIconStyled2 from "../styled/ChangeIconStyled2";


<ChangeIconStyled2 darkMode={true}  />


interface Props {
    children?: React.ReactNode;
}

export default function NavBar({ children }: Props) {

    const Nav = styled.div`
    position: fixed;
    top: 0px; left: 0px;

    display: flex;
    flex-direction: column;

    `


    return(
        <Nav>
            <ChangeIconStyled2 darkMode={true}  />

            {children}   
         </Nav>
    )
}
