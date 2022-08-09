import styled from "@emotion/styled";

interface Props {
    SVG: string;
}

export default function Img({SVG}: Props){



    const IMG = styled.img`

    height: 100vh;
    width: 1920px;
    `
    return (
        <IMG src={SVG} />  
    )
}

