import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 65%;
  height: 90%;
  max-width: 1400px;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1400px) {
    width: 80%;
  }
  &.overflowHidden {
    overflow: hidden;
  }
`;

const SectionItemsWrapper = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

SectionItemsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SectionItemsWrapper;