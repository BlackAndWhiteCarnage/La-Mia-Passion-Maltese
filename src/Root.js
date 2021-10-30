import { useState } from 'react';
import RootProvider from 'hoc/RootProvider';
import Home from 'views/Home/Home';
import AboutUs from 'views/AboutUs/AboutUs';
import OurDogs from 'views/OurDogs/OurDogs';
import Exhibitions from 'views/Exhibitions/Exhibitions';
import BuyingProcess from 'views/BuyingProcess/BuyingProcess';
import Faq from 'views/Faq/Faq';

function Root() {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <RootProvider currentSection={currentSection}>
      <Home setCurrentSection={setCurrentSection} />
      <AboutUs setCurrentSection={setCurrentSection} />
      <OurDogs setCurrentSection={setCurrentSection} />
      <Exhibitions setCurrentSection={setCurrentSection} />
      <BuyingProcess setCurrentSection={setCurrentSection} />
      <Faq setCurrentSection={setCurrentSection} />
    </RootProvider>
  );
}

export default Root;
