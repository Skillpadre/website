import React from 'react';
import logo from './logo.svg';
import './App.css';
import BackgroundBoat from './components/BackgroundBoat';
import BackgroundSea from './components/BackgroundSea';
import Background from './components/Background';

import MainContenair from './components/MainContenair';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './components/sections/Home';
import Projects from './components/sections/Projects';
import Section3 from './components/sections/Section3';
import Section4 from './components/sections/Section4';
import Section5 from './components/sections/Section5';
import Section6 from './components/sections/Section6';

function App() {
  return (
    <>

      {/* <Background>
        <MainContenair />
      </Background> */}
      <div style={{maxHeight: "600%"}}>
        <NavBar />
        <main>
          <Home />
          <Projects />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
