import styled from "@emotion/styled";

interface Props {
    SVG: string;
}

export default function Img({SVG}: Props){



    const IMG = styled.img`
    
    height: 100%;
    width: 100%;
    `
    return (
        <IMG src={SVG} />  
    )
}

