import styled from '@emotion/styled';

const TypoStyled = styled.p`
font-family: 'Montaga';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
display: flex;
align-items: center;
text-align: justify;

@media screen and (max-width: 900px) {
    margin-top: 50px;
}
`

export default function TypoDescriptionProjectStyled({ children }: any) {
    return (
        <TypoStyled>
            {children}
        </TypoStyled>
    )
}