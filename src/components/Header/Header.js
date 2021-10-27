import React from 'react';
import PropTypes from 'prop-types';
import { templateAnim, letterAnim } from 'assets/animations/animation';
import { Wrapper, Word, Letter } from './Header.styles';
import { useScroll } from 'helpers/useScroll';

const Header = ({ text, className }) => {
  const [element, controls] = useScroll();

  const titleSplit = text.map((word) => {
    return word.split('');
  });

  const titleContact = text.join(' ');

  return (
    <Wrapper className={className} variants={templateAnim} animate={controls} initial='hidden' ref={element}>
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
