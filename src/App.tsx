import React from 'react';
import logo from './logo.svg';
import './App.css';
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
