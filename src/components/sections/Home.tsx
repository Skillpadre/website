import React, {useState, useEffect} from "react";
import styled from '@emotion/styled';

import type { RootState } from '../../app/store'
import { useSelector } from 'react-redux'

import boatDay from "../../assets/backgrounds/JapBoat_Day.png";
import boatNight from "../../assets/backgrounds/JapBoat_Night.png";
import Bubbles3 from "../Bubbles3";

interface Props {
    children?: React.ReactNode;
  }

export default function Home({ children }: Props) {

    const darkMode = useSelector((state: RootState) => state.darkMode.value)


    const Section = styled.section`

    width: 100%;
    min-height: 100vh;



    // color: aquamarine;
    `

    return(
        <Section>
            <Bubbles3 />

            {children}   
         </Section>
    )
}
