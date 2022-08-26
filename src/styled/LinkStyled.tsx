import styled from '@emotion/styled';

interface Props {
    children?: React.ReactNode;
    to: string;
    target?: string;
} 

export default function LinkStyled({ children, to, target }: Props) {

    const LinkStyled = styled.a`
    cursor: pointer;
    text-decoration: underline;
    color: inherit;
    &:hover {
        color: lightblue;
    }
    `
    return (
        <LinkStyled href={to} target={target}>
            {children}
        </LinkStyled>
    )
}