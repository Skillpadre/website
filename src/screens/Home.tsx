import React from 'react';
import BackgroundBoat from '../components/BackgroundBoat';
import BackgroundSea from '../components/BackgroundSea';
import Background from '../components/Background';

import MainContenair from '../components/MainContenair';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import HomeSection from '../components/sections/Home';
import ProjectsSection from '../components/sections/Projects';
import AboutMeSection from '../components/sections/AboutMe';
import Section4 from '../components/sections/Section4';
import Section5 from '../components/sections/Section5';
import SmokeSection from '../components/sections/SmokeSection';
import SecretSection from '../components/sections/SecretSection';


function Homepage() {
  return (
    <>

      {/* <Background>
        <MainContenair />
      </Background> */}
      <div>
        {/* <NavBar /> */}
        <main>
          <HomeSection />
          <AboutMeSection />
          <ProjectsSection />
          <Section4 />
          <Section5 />
          <SmokeSection />
          {/* <SecretSection /> */}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Homepage;
