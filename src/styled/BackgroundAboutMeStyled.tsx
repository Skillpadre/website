import React from "react";
import styled from '@emotion/styled';

interface Props {
    children?: React.ReactNode;
}

export default function AboutMeBgStyled({ children }: Props) {

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
