import React from 'react';
import { templateAnim, letterAnim } from 'assets/animations/animation';
import { Wrapper, Word, Letter } from './Header.styles';
import { useScroll } from 'helpers/useScroll';

interface HeaderProps {
  text: string[]
  className: string
  textMobile?: string[]
}

const Header: React.FC<HeaderProps> = ({ text, className, textMobile = text }) => {
  const [element, controls] = useScroll();

  const matchMedia = window.matchMedia('(max-width: 680px)').matches;

  const titleSplit = matchMedia
    ? textMobile.map((word) => {
        return word.split('');
      })
    : text.map((word) => {
        return word.split('');
      });

  const titleContact = text.join(' ');

  return (
    <Wrapper className={className} variants={templateAnim} animate={controls as any} initial='hidden' ref={element as React.Ref<HTMLDivElement>}>
      <h1>{titleContact}</h1>
      {titleSplit.map((word) => (
        <Word key={`word: ${word}`}>
          {word.map((letter, i) => (
            <Letter variants={letterAnim} key={`letter: ${i}`}>
              {letter}
            </Letter>
          ))}
        </Word>
      ))}
    </Wrapper>
  );
};

export default Header;
