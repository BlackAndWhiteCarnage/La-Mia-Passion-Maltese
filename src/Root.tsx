import React, { useState } from 'react';
import RootProvider from 'hoc/RootProvider';
import Home from 'views/Home/Home';
import AboutUs from 'views/AboutUs/AboutUs';
import OurDogs from 'views/OurDogs/OurDogs';
import Exhibitions from 'views/Exhibitions/Exhibitions';
import BuyingProcess from 'views/BuyingProcess/BuyingProcess';
import Faq from 'views/Faq/Faq';
import Contact from 'views/Contact/Contact';

export interface SectionType {
  currentSection: number
  setCurrentSection: React.Dispatch<React.SetStateAction<number>>
}

const Root: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<SectionType['currentSection']>(0);

  return (
    <RootProvider currentSection={currentSection}>
      <Home setCurrentSection={setCurrentSection} />
      <AboutUs setCurrentSection={setCurrentSection} />
      <OurDogs setCurrentSection={setCurrentSection} />
      <Exhibitions setCurrentSection={setCurrentSection} />
      <BuyingProcess setCurrentSection={setCurrentSection} />
      <Faq setCurrentSection={setCurrentSection} />
      <Contact setCurrentSection={setCurrentSection} />
    </RootProvider>
  );
}

export default Root;
