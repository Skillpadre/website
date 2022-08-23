import styled from '@emotion/styled';

interface Props {
    children?: React.ReactNode;
    color?: string;


}
export default function TextScript({ children, color }: Props) {

    const P = styled.p`
        color: ${color};
        font-size: 13px;
        font-style: italic;
        margin: 10;
    `

    const A = styled.a`
        cursor: pointer;
        text-decoration: underline;
        &:hover {
        color: lightblue;
        }
    `
    return (
        <P>
            Script by <A target="blank" href="https://codepen.io/PavelDoGreat/pens/public">@PavelDoGreat</A> on <A target="blank" href="https://codepen.io/">CodePen</A>
        </P>   
    )
}