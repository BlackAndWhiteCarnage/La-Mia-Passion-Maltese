import RootProvider from 'hoc/RootProvider';
import Home from 'views/Home/Home';
import AboutUs from 'views/AboutUs/AboutUs';

function Root() {
  return (
    <RootProvider>
      <Home />
      <AboutUs />
    </RootProvider>
  );
}

export default Root;
