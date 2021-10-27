import RootProvider from 'hoc/RootProvider';
import Home from 'views/Home/Home';
import AboutUs from 'views/AboutUs/AboutUs';
import OurDogs from 'views/OurDogs/OurDogs';

function Root() {
  return (
    <RootProvider>
      <Home />
      <AboutUs />
      <OurDogs />
    </RootProvider>
  );
}

export default Root;
