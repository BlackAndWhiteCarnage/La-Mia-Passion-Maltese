import React from 'react';
import PropTypes from 'prop-types';
import { templateAnim, letterAnim } from 'assets/animations/animation';
import { Wrapper, Word, Letter } from './Header.styles';

const Header = ({ text, className }) => {
  const titleSplit = text.map((word) => {
    return word.split('');
  });

  const titleContact = text.join(' ');

  return (
    <Wrapper className={className} variants={templateAnim} animate='show' initial='hidden'>
      <h1>{titleContact}</h1>
      {titleSplit.map((word) => (
        <Word>
          {word.map((letter) => (
            <Letter variants={letterAnim}>{letter}</Letter>
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
