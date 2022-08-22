import styled from '@emotion/styled';

interface Props {
    children?: React.ReactNode;
    color?: string;


}
export default function TextScript({ children, color }: Props) {

    const P = styled.p`
        color: ${color};
    `
    return (
        <P>
            Script by <a target="blank" href="https://codepen.io/PavelDoGreat/pens/public">@PavelDoGreat</a> on <a target="blank" href="https://codepen.io/">CodePen</a>
        </P>   
    )
}