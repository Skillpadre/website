import React from 'react';
import styled from '@emotion/styled';

import hublot from '../assets/hublot.png';

import screen from '../assets/screens/masques-screen.png';

interface Props {
    src?: string;
    alt?: string;
}

export default function ImageProject({src, alt}: Props) {

    const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    `

  return (
    <>
        <Img src={src} alt={alt} />
    </>
  );
}