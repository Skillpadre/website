import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './screens/Home';
import Projects from './screens/Projects';
import AboutMe from './screens/AboutMe';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import IconButtonReturn from './styled/ButtonReturnStyled';
import { useNavigate } from 'react-router-dom';
import SmokeSection from './components/sections/SmokeSection';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {


  const nav = useNavigate();

  return (
    <>
      {/* <NavBar>
        <IconButtonReturn />
      </NavBar> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>

      <Footer />
      <SmokeSection />


    </>
  );
}

export default App;
