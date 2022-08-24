import React from "react";
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

export default function Footer() {

    const Footer = styled.footer`
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #1D1C1E;
        color: "white";

        width: 100%;
        min-height: 100px;

        z-index: 9;
    `

    
const Item = styled(Paper)({
    textAlign: 'center',
  });

    return (
        <>
            <Footer >
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4, lg: 6, xl: 18 }}
                >
                    <Item>LinkedIn 1</Item>
                    <Item>GitHub 2</Item>
                    <Item>Email 3</Item>
                </Stack>
                {/* <div className={styles.footer}> */}
            {/* <p>
                <a href="https://www.linkedin.com/in/joseph-m-b-a-b8a8b917b/">  LinkedIn</a>
            </p>
            <p>
                <a href="
            
            ">  GitHub</a>
            </p>
            <p>
                <a href="

">  Email</a>
            </p> */}
{/* </div> */}
            </Footer>
        </>
    );
}