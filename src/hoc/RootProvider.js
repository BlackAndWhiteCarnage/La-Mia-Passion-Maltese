import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/Navigation/Navigation';
import Cursor from 'components/Cursor/Cursor';

const RootProvider = ({ children, currentSection }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Cursor currentSection={currentSection} />
      <Navigation currentSection={currentSection} />
      {children}
    </ThemeProvider>
  );
};

RootProvider.propTypes = {
  children: PropTypes.node.isRequired,
  currentSection: PropTypes.number.isRequired,
};

export default RootProvider;
