import React from 'react';
import logo from './logo.svg';
import './App.css';
import BackgroundBoat from './components/BackgroundBoat';
import BackgroundSea from './components/BackgroundSea';
import Background from './components/Background';

import MainContenair from './components/MainContenair';

function App() {
  return (
    <>
      <Background>
        <MainContenair />
      </Background>
    </>
  );
}

export default App;
