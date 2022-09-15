import './App.css';
import Screen404 from './screens/Screen404';
import Homepage from './screens/Home';
// eslint-disable-next-line
import Projects from './screens/Projects';
// eslint-disable-next-line
import AboutMe from './screens/AboutMe';

import type { RootState } from './app/store'
import { useSelector } from 'react-redux'

import SmokeSection from './components/sections/SmokeSection';

import {
  Routes,
  Route,
} from "react-router-dom";

import ReactGA from 'react-ga';
const TRACKING_ID = "UA-241335592-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  const secretSmoke = useSelector((state: RootState) => state.secretSmoke.value)

  return (
    <>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<Screen404 />} />
      </Routes>

      { secretSmoke ? <SmokeSection /> : null }


    </>
  );
}

export default App;
