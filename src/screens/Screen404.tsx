import {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled';
import bg from '../assets/backgrounds/SeaDay.png';

export default function Screen404() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 5000);
    }, [navigate]);

    const Div = styled.div`
    width: 100%;
    min-height: 100vh;

    background-image: url(${bg});

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    `

    return (
        <>
        <Div>
            <h1>Error 404</h1>
            <h2>Page not found</h2>
            <h3>Redirecting to home page</h3>
        </Div>

        </>

    )
}