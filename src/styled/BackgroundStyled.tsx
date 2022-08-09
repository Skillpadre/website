import styled from "@emotion/styled";

interface Props {
    SVG: string;
    children?: React.ReactNode;

}

export default function BackgroundStyled({SVG, children}: Props){

    // get the height of the window
    const height = window.innerHeight;
    const width = window.innerWidth;


    const Background = styled.div`
        height: 100%;
        width: 100%;
        display: flex;
        background-image: url(${SVG});
        background-position: center;
        background-size: 1920px 100%;
        background-repeat: no-repeat;
    `
    return (
        <Background>
            {children}
        </Background>   
    )
}

