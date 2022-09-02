import React from "react";
import styled from '@emotion/styled';

import vector from '../assets/vector/Vector.svg'

interface Props {
    children?: React.ReactNode;
}

export default function VectorSuite({ children }: Props) {

    const Div = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

        background-image: url(${vector});
        background-position: center;
        background-repeat: no-repeat;

        width: 247px;
        min-height: 114px;
    `

    
    return (
        <>
            <Div >
                <h3>Mon CV</h3>
                {children}
            </Div>
        </>
    );
}