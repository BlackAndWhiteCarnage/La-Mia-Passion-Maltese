import React, { useRef, useEffect } from 'react';
// STYLES
import { Wrapper, InvertDiv } from './Cursor.styles';

const Cursor = ({ currentSection }) => {
  const ref = useRef(null);

  const mouseMoveHandler = (e) => {
    ref.current.style.top = e.clientY + 'px';
    ref.current.style.left = e.clientX + 'px';
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);

    return;
  }, []);

  const checkCurrentSectionHandler = () => {
    if (currentSection === 1) {
      return 'section1';
    } else if (currentSection === 2) {
      return 'section2';
    } else if (currentSection === 3) {
      return 'section3';
    } else if (currentSection === 4) {
      return 'section4';
    } else if (currentSection === 5) {
      return 'section5';
    } else if (currentSection === 6) {
      return 'section6';
    } else if (currentSection === 7) {
      return 'section7';
    }
  };

  console.log(checkCurrentSectionHandler());

  return (
    <Wrapper ref={ref}>
      <InvertDiv className={checkCurrentSectionHandler()} />
    </Wrapper>
  );
};

export default Cursor;
