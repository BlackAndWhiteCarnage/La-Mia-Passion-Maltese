import React, { useState, useRef, useEffect } from 'react';
import { Wrapper, InvertDiv } from './Cursor.styles';
import PropTypes from 'prop-types';

const Cursor = ({ currentSection }) => {
  const [isTouchscreen, setIsTouchscreen] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchscreen(true);
    } else {
      window.addEventListener('mousemove', mouseMoveHandler);
      setIsTouchscreen(false);
    }
  }, []);

  const mouseMoveHandler = (e) => {
    ref.current.style.top = e.clientY + 'px';
    ref.current.style.left = e.clientX + 'px';
  };

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

  return (
    <>
      {!isTouchscreen && (
        <Wrapper ref={ref}>
          <InvertDiv className={checkCurrentSectionHandler()} />
        </Wrapper>
      )}
    </>
  );
};

Cursor.propTypes = {
  currentSection: PropTypes.number.isRequired,
};

export default Cursor;
