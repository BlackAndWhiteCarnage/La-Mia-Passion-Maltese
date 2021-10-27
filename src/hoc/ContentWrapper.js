import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentWrapper;
