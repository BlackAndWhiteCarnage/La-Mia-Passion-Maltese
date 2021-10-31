import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Button.styles';

const Button = ({ text, className, onClick, type }) => (
  <Wrapper className={className} onClick={onClick} type={type}>
    {text}
  </Wrapper>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Button;
