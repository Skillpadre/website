import React, { useState, useEffect } from "react";
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

import Bubble from "./Bubble";

import bgScreen from "../assets/screens/eny-screen.png";
import type { RootState } from '../app/store'
import { useSelector } from 'react-redux'

interface Props {
    children?: React.ReactNode;
}

export default function AboutMeBgStyled({ children }: Props) {

    const darkMode = useSelector((state: RootState) => state.darkMode.value)

    const Section = styled.section`
    width: 100%;
    min-height: 100vh;

    background: ${darkMode 
        ? 'linear-gradient(to bottom,  #1C136C 0%,#160A3A 100%)' 
        : 'linear-gradient(to bottom,  #619fe4 0%,#233abc 100%)'}; 
        /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    
    color: aquamarine;
    z-index: 0;

    @media screen and (max-width: 900px) {
        padding-bottom: 100px;

    `

    return (
        <Section>
            {children}
        </Section>
    )
}
