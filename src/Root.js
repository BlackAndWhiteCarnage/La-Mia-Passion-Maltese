import { useState } from 'react';
import RootProvider from 'hoc/RootProvider';
import Home from 'views/Home/Home';
import AboutUs from 'views/AboutUs/AboutUs';
import OurDogs from 'views/OurDogs/OurDogs';

function Root() {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <RootProvider currentSection={currentSection}>
      <Home setCurrentSection={setCurrentSection} />
      <AboutUs setCurrentSection={setCurrentSection} />
      <OurDogs setCurrentSection={setCurrentSection} />
    </RootProvider>
  );
}

export default Root;
