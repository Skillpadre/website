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
