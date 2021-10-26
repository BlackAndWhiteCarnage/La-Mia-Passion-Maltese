import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/Navigation/Navigation';

const RootProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      {children}
    </ThemeProvider>
  );
};

RootProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootProvider;
