import React, { useState, useEffect } from "react";
import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import HublotImg from "../../styled/HublotImg";
import Bubble from "../../styled/Bubble";

import bgScreen from "../../assets/screens/eny-screen.png";

import type { RootState } from '../../app/store'
import { useSelector } from 'react-redux'

interface Props {
    children?: React.ReactNode;
}

export default function AboutMeSection({ children }: Props) {

    const darkMode = useSelector((state: RootState) => state.darkMode.value)

    const Section = styled.section`

    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: space-around;


    background: ${darkMode ? 'linear-gradient(to bottom,  #1C136C 0%,#160A3A 100%)' : 'linear-gradient(to bottom,  #619fe4 0%,#233abc 100%)'}; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    
    background-size: 1920px 100%;

    color: aquamarine;
    z-index: 0;

    `

    return (
        <Section>

            <div style={{ margin: '50px', maxWidth: '50%' }}>
                <h1>About me</h1>
                <p>
                    I'm a 21 years old developer from Poland. I'm currently studying Computer Science at the University of Warsaw. I'm interested in web development, especially in frontend. I'm also interested in game development and I'm currently learning Unity. I'm also interested in machine learning and I'm currently learning Python.
                </p>
            </div>

            <div style={{ margin: '50px', maxWidth: '50%' }} >
                <Link to="/aboutme  ">
                <Bubble translate="left" screen={bgScreen} />
                </Link>

            </div>

            {children}
        </Section>
    )
}
