import React from 'react';
import PropTypes from 'prop-types';
// STYLES
import { Wrapper, Word, Letter } from './Header.styles';

const Header = ({ text, className }) => {
  const titleSplit = text.map((word) => {
    return word.split('');
  });

  const titleContact = text.join(' ');

  return (
    <Wrapper className={className}>
      <h1>{titleContact}</h1>
      {titleSplit.map((word) => (
        <Word>
          {word.map((letter) => (
            <Letter>{letter}</Letter>
          ))}
        </Word>
      ))}
    </Wrapper>
  );
};

Header.propTypes = {
  text: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
};

export default Header;
