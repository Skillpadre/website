import React, {useEffect} from 'react';
import styles from '../components/sections/styles/AboutMe.module.css'

import { useSelector, useDispatch } from 'react-redux'
import { enableBackButton, disableBackButton } from '../app/reducers/BackButtonReducer'


function AboutMe() {

  const dispatch = useDispatch()


    useEffect(() => {
        dispatch(enableBackButton())
        return () => {
            dispatch(disableBackButton())
        }
    } , [])


  return (
    <>
    <div className={styles.aboutMeContainer}>

    </div>
    </>
  );
}

export default AboutMe;
