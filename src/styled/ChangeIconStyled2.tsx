import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import type { RootState } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { changeMode } from '../app/reducers/DarkModeReducer'


export default function ChangeIconStyled(){

    const darkMode = useSelector((state: RootState) => state.darkMode.value)
    const dispatch = useDispatch()




    const ChangeIcon = styled(IconButton)`
    color: #ff8f00;

    `
    return (
        <ChangeIcon onClick={() => dispatch(changeMode())} size="large" aria-label='darkMode'>
            {!darkMode ? <DarkModeIcon fontSize="inherit" /> : <LightModeIcon fontSize="inherit"/>}
        </ChangeIcon>   
    )
}