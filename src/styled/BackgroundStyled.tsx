import styled from "@emotion/styled";
import banner from "./BoatDay.svg";

export default function BackgroundStyled(props){

    const Background = styled.div`
    background-image: url(${props.bg});
    min-height: 100vh;
    min-width: 100vh;
    `
    return (
        <Background>
            {props.children}
        </Background>   
    )
}

