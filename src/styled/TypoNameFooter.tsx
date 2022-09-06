import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux'
import { displaySecret } from '../app/reducers/SecretSmokeReducer'



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
cursor: pointer;
animation: glow 2s infinite alternate linear;

@keyframes glow {
    0% {
      text-shadow: 0 0 10px rgba(255,255,255,.8),
                   0 0 20px rgba(255,255,255,.8),
                   0 0 30px rgba(255,255,255,.8),
                   0 0 40px rgba(0, 100, 151,.8),
                   0 0 50px rgba(0, 100, 151,.8),
                   0 0 60px rgba(0, 100, 151,.5),
                   0 0 70px rgba(0, 100, 151,.5),
                   0 0 90px rgba(0, 100, 151,.5),
                   0 0 100px rgba(0, 100, 151,.5);
    }
    100% {
      text-shadow: 0 0 2px rgba(255,255,255,.8),
                   0 0 8px rgba(255,255,255,.8),
                   0 0 10px rgba(55,255,255,.8),
                   0 0 20px rgba(50, 100, 151,.5),
                   0 0 30px rgba(50, 100, 151,.5),
                   0 0 40px rgba(50, 100, 151,.5),
                   0 0 50px rgba(50, 100, 151,.5),
                   0 0 100px rgba(50, 100, 151,.5);
    }
  }

@media screen and (max-width: 900px) {
}
`



export default function TypoNameFooter({ children, handleClickSecret }: any) {
    const dispatch = useDispatch()

    return (
        <TypoStyled onClick={dispatch(displaySecret)}>
            {children}
        </TypoStyled>
    )
}