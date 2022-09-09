import Footer from '../components/Footer';

import HomeSection from '../components/sections/Home';
import ProjectsSection from '../components/sections/Projects';
import AboutMeSection from '../components/sections/AboutMe';

import styles from "../styles/Main.module.css";

function Homepage() {

  return (
    <>
      <main>
        <div className={styles.mainContenair}>
          <HomeSection />
          <AboutMeSection />
          <ProjectsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
