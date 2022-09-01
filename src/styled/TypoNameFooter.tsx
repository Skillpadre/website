import styled from '@emotion/styled';

const TypoStyled = styled.h3`
font-family: 'Aladin';
font-style: normal;
font-weight: 400;
font-size: 48px;
line-height: 48px;
// display: flex;
// align-items: center;
text-align: center;
margin: 0;

@media screen and (max-width: 900px) {
    margin-top: 50px;
}
`

export default function TypoNameFooter({ children }: any) {
    return (
        <TypoStyled>
            {children}
        </TypoStyled>
    )
}