import styled from '@emotion/styled';

const TypoStyled = styled.p`
font-family: 'Halant';
font-style: normal;
font-weight: 300;
font-size: 8px;
line-height: 12.6px;
// display: flex;
// align-items: center;
text-align: center;

@media screen and (max-width: 900px) {
}
`

export default function TypoCopyright({ children }: any) {
    return (
        <TypoStyled>
            {children}
        </TypoStyled>
    )
}