import {useEffect} from 'react';
import styled from '@emotion/styled';

import type { RootState } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { enableBackButton, disableBackButton } from '../app/reducers/BackButtonReducer'

function AboutMe() {

  const darkMode = useSelector((state: RootState) => state.darkMode.value)


  const dispatch = useDispatch()


    useEffect(() => {
        dispatch(enableBackButton())
        return () => {
            dispatch(disableBackButton())
        }
    } , [])

    const Div = styled.div`

    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: space-between;


    background: ${darkMode ? 'linear-gradient(to bottom,  #1C136C 0%,#160A3A 100%)' : 'linear-gradient(to bottom,  #619fe4 0%,#233abc 100%)'}; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    
    background-size: 1920px 100%;

    color: aquamarine;
    `
    
  return (
    <>
    <Div >

    </Div>
    </>
  );
}

export default AboutMe;
