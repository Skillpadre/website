import styled from '@emotion/styled';

import hublot from '../assets/hublot4.png';


interface Props {
    bg?: string;
}

export default function HublotImg({bg}: Props) {

    const Img = styled.img`
    background-image: url(${bg});
    //background-color: #000;
    background-size: 95%;
    background-clip: border-box;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: contain;
    cursor: pointer;

    padding: -2em;
    border-radius: 50%;
    `

  return (
    <>
        <Img src={hublot} alt="hublot" />
    </>
  );
}