import RootProvider from 'hoc/RootProvider';
import Home from 'views/Home/Home';

function Root() {
  return (
    <RootProvider>
      <Home />
    </RootProvider>
  );
}

export default Root;
