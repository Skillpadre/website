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

function App() {
  const secretSmoke = useSelector((state: RootState) => state.secretSmoke.value)

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
