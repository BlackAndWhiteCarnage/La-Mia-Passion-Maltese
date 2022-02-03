import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/Navigation/Navigation';
import Cursor from 'components/Cursor/Cursor';
import { SectionType } from 'Root'

interface RootProviderProps {
  children: React.ReactNode
  currentSection: SectionType["currentSection"]
}

const RootProvider: React.FC<RootProviderProps> = ({ children, currentSection }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
      <Cursor currentSection={currentSection} />
      <Navigation currentSection={currentSection} />
    </ThemeProvider>
  );
};

export default RootProvider;
