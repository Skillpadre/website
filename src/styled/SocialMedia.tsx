import React from 'react';
import styled from '@emotion/styled';
import ImgSocialsMedia from './ImgSocialsMedia';

interface Props {
  name?: string;
  text?: string;
  link?: string;
}

export default function SocialsMedia({ name, text, link }: Props) {

  const Div = styled.div`
  display: flex;
  align-items: center;
  `
  const Typo = styled.p`
    margin: 0;
    font-family: 'Sitka';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
    `

  return (
    <> 
        <Div>
            <ImgSocialsMedia name={name} />
            <Typo>{text}</Typo>
        </Div>
    </>
  );
}