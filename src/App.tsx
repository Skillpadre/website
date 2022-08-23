import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './screens/Home';
import Projects from './screens/Projects';
import AboutMe from './screens/AboutMe';


import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/aboutme" element={<AboutMe />} />
    </Routes>

    </>
  );
}

export default App;
