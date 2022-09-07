import React from 'react';
import styled from '@emotion/styled';

import hublot from '../assets/hublot.png';

import screen from '../assets/screens/masques-screen.png';

import image from '../assets/buttons/socials_github.png';

interface Props {
  name?: string;
}

export default function ImgSocialsMedia({ name }: Props) {

  const Img = styled.img`
  width: 24px;
  height: 21px;
  margin-right: 10px;

    z-index: 1;
    `

  return (
    <>
        <Img src={require(`../assets/buttons/socials_${name}.png`)} alt={name} />
    </>
  );
}