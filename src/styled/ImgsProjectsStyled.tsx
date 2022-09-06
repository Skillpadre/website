import React from 'react';
import styled from '@emotion/styled';

import hublot from '../assets/hublot.png';

import screen from '../assets/screens/masques-screen.png';

interface Props {
    src?: string;
    alt?: string;
    onClick?: () => void;
}

export default function ImageProject({src, alt, onClick}: Props) {

    const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    z-index: 0;
    `

  return (
    <>
        <Img onClick={onClick} src={src} alt={alt} />
    </>
  );
}