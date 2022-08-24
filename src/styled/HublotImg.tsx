import React from 'react';
import styled from '@emotion/styled';

import hublot from '../assets/hublot.png';

import screen from '../assets/screens/masques-screen.png';

interface Props {
    bg?: string;
}

export default function HublotImg({bg}: Props) {

    const Img = styled.img`
    background-image: url(${bg});
    background-size: 130%;
    background-repeat: no-repeat;
    background-position: center;
    background-repeat: no-repeat;

    object-fit: cover;
    cursor: pointer;
    `

  return (
    <>
        <Img src={hublot} alt="hublot" />
    </>
  );
}