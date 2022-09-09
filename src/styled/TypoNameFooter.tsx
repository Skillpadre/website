import * as React from 'react'
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux'
import { displaySecret } from '../app/reducers/SecretSmokeReducer'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

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

const Arrow = styled.div`
  text-align: center;
  margin: 8% 0;

  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
`

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function TypoNameFooter({ children, handleClickSecret }: any) {
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    openAlert();
    displaySmokeSection();
  }

  const openAlert = () => {
    setOpen(true)
  }

  const displaySmokeSection = () => {
    setInterval(() => {
      dispatch(displaySecret())
    }, 4100);
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <TypoStyled onClick={handleClick}>
        {children}
      </TypoStyled>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Secret déverouillé ! <Arrow><ExpandMoreRoundedIcon/></Arrow>
        </Alert>
      </Snackbar>
    </>
  )
}