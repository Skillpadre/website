import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Screen404 from './screens/Screen404';
import Homepage from './screens/Home';
import Projects from './screens/Projects';
import AboutMe from './screens/AboutMe';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import IconButtonReturn from './styled/ButtonReturnStyled';
import type { RootState } from './app/store'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom';
import SmokeSection from './components/sections/SmokeSection';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const nav = useNavigate();
  const [secretSmoke, setSecretSmoke] = useState(useSelector((state: RootState) => state.secretSmoke.value))


  return (
    <>
      {/* <NavBar>
        <IconButtonReturn />
      </NavBar> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} /> */}

        <Route path="*" element={<Screen404 />} />
      </Routes>

      {/* <Footer /> */}
      { secretSmoke ? <SmokeSection /> : null }


    </>
  );
}

export default App;
